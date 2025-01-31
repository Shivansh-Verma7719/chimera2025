import React from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type TeamGroup = {
  groupName: string;
  members: TeamMember[];
};

// Define teamGroups
const teamGroups: TeamGroup[] = [
  {
    groupName: "Core Team",
    members: [
      {
        name: "Santripta Sharma",
        role: "Chairperson",
        image: "/images/john.jpg",
      },
      {
        name: "Vidur Kaushik",
        role: "Vice-Chairperson",
        image: "/images/jane.jpg",
      },
      { name: "Agnim Agarwal", role: "Secretary", image: "/images/alan.jpg" },
      { name: "Trsha Harish", role: "Treasurer", image: "/images/emily.jpg" },
    ],
  },
  {
    groupName: "IT",
    members: [
      {
        name: "First Last",
        role: "Backend Developer",
        image: "/images/michael.jpg",
      },
      { name: "First Last", role: "System Admin", image: "/images/dwight.jpg" },
      {
        name: "First Last",
        role: "Frontend Developer",
        image: "/images/jim.jpg",
      },
    ],
  },
  {
    groupName: "Events",
    members: [
      {
        name: "First Last",
        role: "Event Coordinator",
        image: "/images/pam.jpg",
      },
      {
        name: "First Last",
        role: "Event Planner",
        image: "/images/angela.jpg",
      },
      { name: "First Last", role: "Logistics", image: "/images/oscar.jpg" },
    ],
  },
  {
    groupName: "PR",
    members: [
      { name: "First Last", role: "PR Specialist", image: "/images/kelly.jpg" },
      { name: "First Last", role: "PR Strategist", image: "/images/ryan.jpg" },
    ],
  },
  {
    groupName: "Growth",
    members: [
      { name: "First Last", role: "Growth Manager", image: "/images/toby.jpg" },
      {
        name: "First Last",
        role: "Sales Specialist",
        image: "/images/stanley.jpg",
      },
    ],
  },
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-24 sm:pt-36 px-4 sm:px-6">
      {/* Team Box */}
      <div
        className="w-full max-w-5xl py-8 sm:py-16 px-4 sm:px-8 rounded-2xl shadow-lg"
        style={{ backgroundColor: "#14143d" }}
      >
        {/* Main Content */}
        <div className="text-white">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">TEAM</h1>
            <div className="flex justify-center items-center mb-4">
              <div className="h-1 w-8 sm:w-12 bg-cyan-400 mr-2"></div>
              <div className="h-1 w-4 sm:w-6 bg-cyan-400"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-300">
              Meet the people behind the scenes
            </p>
          </div>

          {/* Team Groups */}
          <div className="space-y-12 sm:space-y-16">
            {teamGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {/* Group Name */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                  {group.groupName}
                </h2>
                {/* Team Members */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
                  {group.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="text-center bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-6 transform transition-transform duration-300 hover:scale-105"
                    >
                      <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4 rounded-full overflow-hidden border-2 sm:border-4 border-cyan-400">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      </div>
                      <h3 className="text-sm sm:text-xl font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-300">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
