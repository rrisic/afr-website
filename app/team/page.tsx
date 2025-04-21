"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  field: string;
  image: string;
}

interface Subteam {
  name: string;
  description: string;
  members: TeamMember[];
}

const Team = () => {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

  const subteams: Subteam[] = [
    {
      name: "Powertrain",
      description: "Oversees the engine and all the external systems required to keep it alive. Designs and manufactures assemblies such as the exhaust system, cooling system, driveline components, and is responsible for the tune the engine runs on. Our goal is to make as much power as possible, as efficiently as possible without sacrificing reliability and keeping the design maintenance friendly.",
      members: []
    },
    {
      name: "Aerodynamics",
      description: "Responsible in designing and optimizing the front and rear wings, bodywork, and diffuser to streamline airflow, minimize drag, and maximize downforce. Leveraging advanced fluid mechanics principles, the team conducts comprehensive computer flow simulations, wind tunnel tests, and on-track trials to validate and refine their designs. Their expertise and precision engineering make our race car perform at its peak, ensuring it handles like it's flying on the track.",
      members: []
    },
    {
      name: "Chassis",
      description: "Responsible for designing and constructing the vehicle's frame, primarily using steel tubing. This frame must be robust enough to support the suspension forces, protect the driver in case of an impact, and serve as the structural foundation for all other vehicle subsystems, including the powertrain, electronics, and aerodynamics components.",
      members: []
    },
    {
      name: "Suspension",
      description: "Designs the suspension so the tires maintain contact with the ground while maximizing the overall grip and making sure the car is quick and easy to drive. Responsible for parts of vehicle dynamics, suspension kinematics, design of the wheel assemblies (hubs, uprights, wheels), control arms, shocks, and anti-roll bars.",
      members: []
    },
    {
      name: "Vehicle Dynamics",
      description: "Develops and integrates real-time data acquisition systems on the car to better understand its on-track behavior and validate design decisions through physical testing. Candidates with experience in embedded systems, sensors, microcontrollers, or a strong interest in hands-on engineering are highly desired. The team collects and analyzes track data to support other subteams and improve vehicle performance through direct feedback. In addition to hardware, the team also builds MATLAB-based lap time simulations to complement real-world testing. Their work is essential for optimizing the car's performance and achieving maximum points in Formula SAE Dynamic Events.",
      members: []
    },
    {
      name: "Electronics",
      description: "Designs, manufactures, and verifies the performance of onboard electronics, including the electronic dashboard, electronic throttle body, and various sensors crucial for assessing our car's performance. Proficiency in Python is desired for developing and integrating these systems. The team also develops wiring harnesses that connect onboard data systems, such as engine management, to MoTeC digital displays. By gathering and analyzing data from numerous sensors, they ensure efficient performance monitoring and provide valuable insights for future improvements.",
      members: []
    },
    {
      name: "Human Interface",
      description: "Designs, manufactures, and verifies the performance of the driver cockpit and all its instruments, including pedals, steering, gear shifting, brakes, and safety devices. They prioritize improving driver comfort and safety while optimizing vehicle performance. Candidates with CAD and hands-on manufacturing experience are highly preferred. The team uses CAE software for precision engineering, ensuring components like brakes, shifters, steering wheels, and seat belts are designed for maximum efficiency and swift response. Their work ensures that every aspect of the cockpit enhances both the driver's comfort and the car's overall performance.",
      members: []
    },
    {
      name: "Business & Marketing",
      description: "Securing and maintaining sponsorships while adding new partners to the team's roster. This team also has a strong influence in designing the car's livery, competing + attending business events, all while fostering strong collaboration with the other technical sub-teams. Managing both internal communications with the school and profession outreach is an essential part of this team. Their work also including curating and posting engaging content on our social media platforms regularly, while also creating fundraising initiatives to support our annual competition goals. Marketing works on coordinating with campus and external organizations / advisors, and organizing speaker presentations/workshops. Their efforts ensure smooth operations and continuous growth, driving our team toward excellence.",
      members: []
    }
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
          {subteams.map((team, index) => (
            <div key={index} className="mb-8">
              <button
                onClick={() => setExpandedTeam(expandedTeam === index ? null : index)}
                className={`w-full p-6 text-left transition-all duration-300 ${
                  expandedTeam === index 
                    ? 'bg-primary text-black' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } rounded-lg`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{team.name}</h3>
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
                  <p className="text-gray-300 mb-8">{team.description}</p>
                  
                  {team.members.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {team.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="bg-gray-800 p-6 rounded-lg">
                          <div className="relative w-32 h-32 mx-auto mb-4">
                            <Image
                              className="rounded-full object-cover"
                              src={member.image}
                              alt={member.name}
                              fill
                            />
                          </div>
                          <h4 className="text-xl font-bold text-white text-center mb-2">
                            {member.name}
                          </h4>
                          <p className="text-primary text-center">{member.field}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 