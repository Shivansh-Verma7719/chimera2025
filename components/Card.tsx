// components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="content md:max-w-6xl text-white-900 shadow-lg rounded-xl p-8 relative">
      <h1 className="text-3xl font-bold text-white-900 text-start mb-6 space-mono-regular">{title}</h1>
      <div className="flex justify-start items-center mb-8">
        <span className="w-[80px] h-[6px] bg-cyan-300 mr-2"></span>
        <span className="w-[30px] h-[6px] bg-cyan-300 mr-2"></span>
        <span className="w-[10px] h-[6px] bg-cyan-300"></span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
