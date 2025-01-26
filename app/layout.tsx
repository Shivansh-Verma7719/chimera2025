"use client";
import React, { useEffect } from "react";
import "./globals.css";
import ChimeraNavbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const canvas = document.getElementById("dotsCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;

    const particlesArray: {
      x: number;
      y: number;
      z: number; // Depth
      size: number;
      opacity: number; // Current opacity
      targetOpacity: number; // Target opacity for reveal
      isRevealed: boolean; // Whether the particle is fully revealed
    }[] = [];
    const numberOfParticles = 180;
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;

    // Initialize particles with starting opacity of 0
    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const depth = Math.random(); // Random depth between 0 (far) and 1 (near)
        const size = Math.random() * 0.6 + 0.15; // Small size (0.15 - 0.75)
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: depth,
          size: size * (1 + depth),
          opacity: 0, // Start fully transparent
          targetOpacity: 0.4 + Math.random() * 0.6, // Target opacity for twinkling
          isRevealed: false, // Initially not revealed
        });
      }
    }

    // Draw particles
    function drawParticles() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        // Gradually increase opacity for the reveal effect
        if (!particle.isRevealed) {
          particle.opacity += 0.01; // Adjust for faster/slower reveal
          if (particle.opacity >= particle.targetOpacity) {
            particle.opacity = particle.targetOpacity; // Cap opacity
            particle.isRevealed = true; // Mark as fully revealed
          }
        }

        ctx.beginPath();
        const adjustedSize = particle.size * (1 + particle.z); // Larger for closer particles
        ctx.arc(particle.x, particle.y, adjustedSize, 0, Math.PI * 2);

        // Glow effect for stars
        ctx.shadowBlur = 3;
        ctx.shadowColor = "white";

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
    }

    // Update particle positions based on mouse movement
    function updateParticles() {
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;

      particlesArray.forEach((particle) => {
        if (particle.isRevealed) {
          const movementFactor = 0.01 + particle.z * 0.03; // Smaller, slower movement
          particle.x += dx * movementFactor;
          particle.y += dy * movementFactor;

          // Wrap particles to the other side if they go out of bounds
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          if (particle.y < 0) particle.y = canvas.height;
        }
      });
    }

    // Animation loop
    function animate() {
      drawParticles();
      updateParticles();
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      requestAnimationFrame(animate);
    }

    // Resize canvas and reinitialize particles
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    // Track mouse position
    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <html lang="en" className="h-full w-full">
      <body className="overflow-hidden h-full w-full relative bg-[url('/images/test.jpg')] bg-cover bg-center bg-fixed">
        <ChimeraNavbar />
        <canvas id="dotsCanvas" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"></canvas>
        <main className="relative z-10">{children}</main>
        
      </body>
    </html>
  );
}
