// components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className=" content max-w-5xl mx-auto mt-12 text-white-900shadow-lg rounded-xl p-8 relative">
      <h1 className="text-3xl font-bold text-white-900 text-center mb-6">{title}</h1>
      <div className="flex justify-center items-center mb-8">
        <span className="w-16 h-[3px] bg-gray-300 mr-2"></span>
        <span className="w-10 h-[3px] bg-gray-500 mr-2"></span>
        <span className="w-6 h-[3px] bg-gray-800"></span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
