import React from "react";
import Image from "next/image";
import { CoreTeam, ITteam, EventsTeam, PRteam, GrowthTeam } from "./team";

type TeamSectionProps = {
  title: string;
  members: {
    name: string;
    imageUrl: string;
    desig: string;
  }[];
};

const TeamSection = ({ title, members }: TeamSectionProps) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 font-iceland">
        {title}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="text-center bg-gradient-to-br from-[#5783bb] via-[#4f50af] to-[#8327c3] rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 sm:w-32 sm:h-32 mx-auto mb-2 sm:mb-4 rounded-full overflow-hidden border-2 sm:border-4 border-cyan-400">
              <Image
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-sm sm:text-xl font-semibold font-iceland">{member.name}</h3>
            <p className="text-xs sm:text-base text-gray-300 font-iceland">{member.desig}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-24 sm:pt-36 px-4 sm:px-6">
      <div
        className="w-full max-w-5xl py-8 sm:py-16 px-4 sm:px-8 rounded-2xl shadow-lg"
        style={{ backgroundColor: "#14143d" }}
      >
        <div className="text-white">
          <div className="text-left mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 space-mono-regular">Team</h1>
            <div className="flex justify-start items-center mb-4">
              <div className="h-1 w-8 sm:w-12 bg-cyan-300 mr-2"></div>
              <div className="h-1 w-4 sm:w-6 bg-cyan-300 mr-2"></div>
              <div className="h-1 w-2 sm:w-4 bg-cyan-300"></div>

            </div>
            <p className="text-lg font-iceland sm:text-xl text-[#cccccc]">
              Meet the people behind the scenes
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            <TeamSection title="Core Team" members={CoreTeam} />
            <TeamSection title="IT Team" members={ITteam} />
            <TeamSection title="Events Team" members={EventsTeam} />
            <TeamSection title="PR Team" members={PRteam} />
            <TeamSection title="Growth Team" members={GrowthTeam} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
