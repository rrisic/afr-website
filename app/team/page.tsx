"use client";

import { useState } from "react";
import Image from "next/image";

const management = [
  {
    name: "Name",
    role: "Project Manager",
    image: "/images/AFR/AFR_Anteater.png"
  },
  {
    name: "Name",
    role: "Cheif Engineer",
    image: "/images/AFR/AFR_Anteater.png"
  },
  {
    name: "Name",
    role: "Asst. Project Manager",
    image: "/images/AFR/AFR_Anteater.png"
  }
];

const facultySponsors = [
  {
    name: "Faculty Sponsor Name",
    role: "Faculty Advisor",
    department: "uci area/discipline",
    image: "/images/AFR/AFR_Anteater.png"
  },
  {
    name: "Faculty Sponsor Name",
    role: "Faculty Advisor",
    department: "uci area/discipline",
    image: "/images/AFR/AFR_Anteater.png"
  }
];

const subteams = [
  {
    name: "Powertrain",
    description: "Oversees the engine and all the external systems required to keep it alive. Designs and manufactures assemblies such as the exhaust system, cooling system, driveline components, and is responsible for the tune the engine runs on. Our goal is to make as much power as possible, as efficiently as possible without sacrificing reliability and keeping the design maintenance friendly.",
    lead: {
      name: "Team Lead Name",
      role: "Powertrain Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Aerodynamics",
    description: "Responsible in designing and optimizing the front and rear wings, bodywork, and diffuser to streamline airflow, minimize drag, and maximize downforce. Leveraging advanced fluid mechanics principles, the team conducts comprehensive computer flow simulations, wind tunnel tests, and on-track trials to validate and refine their designs. Their expertise and precision engineering make our race car perform at its peak, ensuring it handles like it's flying on the track.",
    lead: {
      name: "Team Lead Name",
      role: "Aerodynamics Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Chassis",
    description: "Responsible for designing, validating, and manufacturing(welding) a frame made mostly of steel tubing to support the suspension forces, protect the driver, and house all other subteam components. Designing fixture used for chassis manufacturing. Validate chassis torsional rigidity using Ansys FEA simulations and torsional rigidity jig.",
    lead: {
      name: "Team Lead Name",
      role: "Chassis Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Suspension",
    description: "Designs the suspension so the tires maintain contact with the ground while maximizing the overall grip and making sure the car is quick and easy to drive. Responsible for parts of vehicle dynamics, suspension kinematics, design of the wheel assemblies (hubs, uprights, wheels), control arms, shocks, and anti-roll bars.",
    lead: {
      name: "Team Lead Name",
      role: "Suspension Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Vehicle Dynamics",
    description: "Develops and integrates real-time data acquisition systems on the car to better understand its on-track behavior and validate design decisions through physical testing. Candidates with experience in embedded systems, sensors, microcontrollers, or a strong interest in hands-on engineering are highly desired. The team collects and analyzes track data to support other subteams and improve vehicle performance through direct feedback. In addition to hardware, the team also builds MATLAB-based lap time simulations to complement real-world testing. Their work is essential for optimizing the car's performance and achieving maximum points in Formula SAE Dynamic Events.",
    lead: {
      name: "Team Lead Name",
      role: "Vehicle Dynamics Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Electronics",
    description: "Designs, manufactures, and verifies the performance of onboard electronics, including the electronic dashboard, electronic throttle body, and various sensors crucial for assessing our car's performance. Proficiency in Python is desired for developing and integrating these systems. The team also develops wiring harnesses that connect onboard data systems, such as engine management, to MoTeC digital displays. By gathering and analyzing data from numerous sensors, they ensure efficient performance monitoring and provide valuable insights for future improvements.",
    lead: {
      name: "Team Lead Name",
      role: "Electronics Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Human Interface",
    description: "Designs, manufactures, and verifies the performance of the driver cockpit and all its instruments, including pedals, steering, gear shifting, brakes, and safety devices. They prioritize improving driver comfort and safety while optimizing vehicle performance. Candidates with CAD and hands-on manufacturing experience are highly preferred. The team uses CAE software for precision engineering, ensuring components like brakes, shifters, steering wheels, and seat belts are designed for maximum efficiency and swift response. Their work ensures that every aspect of the cockpit enhances both the driver's comfort and the car's overall performance.",
    lead: {
      name: "Team Lead Name",
      role: "Human Interface Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  },
  {
    name: "Business & Marketing",
    description: "Securing and maintaining sponsorships while adding new partners to the team's roster. This team also has a strong influence in designing the car's livery, competing + attending business events, all while fostering strong collaboration with the other technical sub-teams. Managing both internal communications with the school and profession outreach is an essential part of this team. Their work also including curating and posting engaging content on our social media platforms regularly, while also creating fundraising initiatives to support our annual competition goals. Marketing works on coordinating with campus and external organizations / advisors, and organizing speaker presentations/workshops. Their efforts ensure smooth operations and continuous growth, driving our team toward excellence.",
    lead: {
      name: "Team Lead Name",
      role: "Business & Marketing Lead",
      image: "/images/AFR/AFR_Anteater.png"
    },
    members: [
      { name: "Member 1", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 2", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
      { name: "Member 3", role: "Design Engineer", image: "/images/AFR/AFR_Anteater.png" },
    ]
  }
];

export default function TeamPage() {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">Our Team</h1>
        
        {/* Management Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((member) => (
              <div key={member.name} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Sponsors Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Faculty Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultySponsors.map((sponsor) => (
              <div key={sponsor.name} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                  <p className="text-gray-400 mb-1">{sponsor.role}</p>
                  <p className="text-gray-500">{sponsor.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subteams Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Subteams</h2>
          <div className="max-w-4xl mx-auto">
            {subteams.map((subteam, index) => (
              <div key={subteam.name} className="mb-4">
                <button
                  onClick={() => setExpandedTeam(expandedTeam === index ? null : index)}
                  className={`w-full p-6 text-left transition-all duration-300 ${
                    expandedTeam === index 
                      ? 'bg-primary text-black' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  } rounded-lg`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">{subteam.name}</h3>
                    <span className="text-2xl">
                      {expandedTeam === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedTeam === index ? 'max-h-[2000px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 bg-gray-900 rounded-b-lg">
                    <div className="flex flex-col md:flex-row gap-8 mb-12">
                      {/* Team Lead Section */}
                      <div className="w-full md:w-1/3 flex flex-col items-center">
                        <div className="relative w-64 h-64 mb-4">
                          <Image
                            src={subteam.lead.image}
                            alt={subteam.lead.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <h3 className="text-2xl font-bold">{subteam.lead.name}</h3>
                        <p className="text-gray-400">{subteam.lead.role}</p>
                      </div>

                      {/* Subteam Description */}
                      <div className="w-full md:w-2/3">
                        <p className="text-gray-300 text-lg">{subteam.description}</p>
                      </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {subteam.members.map((member) => (
                        <div key={member.name} className="flex flex-col items-center">
                          <div className="relative w-48 h-48 mb-4">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-gray-400">{member.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 