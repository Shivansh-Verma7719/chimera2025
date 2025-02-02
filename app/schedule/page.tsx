import React from "react";
import Image from "next/image";



const SchedulePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <img id="lines" src="/assets/images/test.jpg" alt="background" className="absolute w-full h-full object-cover" />
      <div id="dots-bg"></div>
      <div className="relative z-10">
        <header className="p-4 bg-white shadow-md">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <img src="/assets/images/favicon.png" width="100px" alt="logo" className="glitch" />
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/about/" className="nav-link">About</a>
              <div className="relative group">
                <button className="flex items-center space-x-1">
                  <span>Events</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <ul className="absolute hidden group-hover:block bg-white shadow-md">
                  <li><a href="/events/" className="block p-2">Competitions</a></li>
                  <li><a href="/talks/" className="block p-2">Speakers</a></li>
                </ul>
              </div>
              <a href="/schedule/" className="nav-link font-bold">Schedule</a>
              <a href="/raffle/" className="nav-link">Raffle</a>
              <a href="/sponsors/" className="nav-link">Sponsors</a>
              <a href="/team/" className="nav-link">Team</a>
              <a className="bg-red-500 text-white px-4 py-2 rounded" href="https://www.townscript.com/e/chimera-2024" target="_blank">Register</a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto py-10 text-center">
          <h1 className="text-4xl font-bold">Schedule</h1>
          <div className="w-1/2 mx-auto border-t-4 border-red-500 mt-4"></div>
          <img src="/assets/images/schedule.png" className="mt-8 w-4/5 mx-auto" alt="Schedule" />
        </main>
        <footer className="bg-gray-900 text-white py-6 text-center">
          <div className="space-x-4">
            <a href="/contact/">Contact</a>
            <a href="https://www.townscript.com/e/chimera-2024">Register</a>
            <a href="/team/">Team</a>
          </div>
          <p>COPYRIGHT &copy; CHIMERA 2025. ALL RIGHTS RESERVED.<br />IEEE Ashoka Student Branch</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.instagram.com/ieee.ashoka/" target="_blank" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/IEEEAshoka" target="_blank" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SchedulePage;
