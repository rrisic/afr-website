"use client";

import { useState, useRef } from "react"; // Import useRef
import Image from "next/image";
import Link from "next/link"; // Import Link for potential button navigation if needed (though anchor links are simpler here)
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const management = [
  {
    name: "Mira Vega",
    role: "Project Manager",
    image: "/images/team/Mira hs.JPG"
  },
  {
    name: "Nathalie Najjar",
    role: "Chief Engineer",
    image: "/images/team/Nathalie hs.JPG"
  },
  {
    name: "Michelle Tran",
    role: "Asst. Project Manager",
    image: "/images/team/Michelle hs.JPG"
  }
];

const facultySponsors = [
  {
    name: "Dr. Tryphon T. Georgiou",
    role: "Faculty Advisor",
    department: "UCI Samueli School of Engineering",
    image: "/images/team/georgiou hs.png"
  },
];

//%============================== POWERTRAIN ===========================%//
const subteams = [
  {
    name: "Aerodynamics",
    description: "Responsible in designing and optimizing the front and rear wings, bodywork, and diffuser to streamline airflow, minimize drag, and maximize downforce. Leveraging advanced fluid mechanics principles, the team conducts comprehensive computer flow simulations, wind tunnel tests, and on-track trials to validate and refine their designs. Their expertise and precision engineering make our race car perform at its peak, ensuring it handles like it's flying on the track.",
    lead: {
      name: "Maia Bojorquez",
      role: "Aerodynamics Lead",
      image: "/images/team/AERO/maia hs.JPG"
    },
    members: [
      { name: "Delaila Cuevas ", role: "Incoming Lead 25-26", image: "/images/team/AERO/delaila hs.JPG" },
      { name: "Aaron Sato", role: "Design Engineer", image: "/images/team/AERO/aaron.png" },
      { name: "Enoch Kim", role: "Design Engineer", image: "/images/team/AERO/enoch.png" },
      { name: "Matthew Michaelian", role: "Design Engineer", image: "/images/team/AERO/matthew.png" },
      { name: "Devraj Zala", role: "Design Engineer", image: "/images/team/AERO/devraj.JPG" },
      { name: "Mikey", role: "Design Engineer", image: "/images/team/AERO/mikey.png" },
      { name: "Paras Patel", role: "Design Engineer", image: "/images/team/AERO/paras.png" },
      { name: "Nicholas Didonato", role: "Design Engineer", image: "/images/team/AERO/nicholas.png" },
    ]
  },
  {
    name: "Business & Marketing",
    description: "Securing and maintaining sponsorships while adding new partners to the team's roster. This team also has a strong influence in designing the car's livery, competing + attending business events, all while fostering strong collaboration with the other technical sub-teams. Managing both internal communications with the school and profession outreach is an essential part of this team. Their work also including curating and posting engaging content on our social media platforms regularly, while also creating fundraising initiatives to support our annual competition goals. Marketing works on coordinating with campus and external organizations / advisors, and organizing speaker presentations/workshops. Their efforts ensure smooth operations and continuous growth, driving our team toward excellence.",
    lead: {
      name: "Claire McGinnis",
      role: "Business & Marketing Lead",
      image: "/images/team/BM/claire hs.JPG"
    },
    members: [
      { name: "Madyson Schindler", role: "Incoming Lead 25-26", image: "/images/team/BM/mady hs.JPG" },
      { name: "Ryan Lin", role: "Design Engineer", image: "/images/team/BM/ryan.png" },
      { name: "Alex Zakoor", role: "Design Engineer", image: "/images/team/BM/alex.png" },
      { name: "Chris Li", role: "Design Engineer", image: "/images/team/BM/chris.png" },
    ]
  },
  {
    name: "Chassis",
    description: "Responsible for designing, validating, and manufacturing(welding) a frame made mostly of steel tubing to support the suspension forces, protect the driver, and house all other subteam components. Designing fixture used for chassis manufacturing. Validate chassis torsional rigidity using Ansys FEA simulations and torsional rigidity jig.",
    lead: {
      name: "Daniel Deng",
      role: "Chassis Lead",
      image: "/images/team/Chassis/daniel hs.JPG"
    },
    members: [
      { name: "Thien Ngo", role: "Incoming Lead 25-26", image: "/images/team/Chassis/thien hs.JPG" },
      { name: "Austin Ulene", role: "Design Engineer", image: "/images/team/Chassis/austin.jpg" },
      { name: "Gavin Hu", role: "Design Engineer", image: "/images/team/Chassis/gavin.jpg" },
      { name: "Akhil Nandhakumar", role: "Design Engineer", image: "/images/team/Chassis/akhil.jpg" },
    ]
  },
  {
    name: "Electronics",
    description: "Designs, manufactures, and verifies the performance of onboard electronics, including the electronic dashboard, electronic throttle body, and various sensors crucial for assessing our car's performance. The team also develops wiring harnesses that connect onboard data systems, such as engine management, to MoTeC digital displays. By gathering and analyzing data from numerous sensors, they ensure efficient performance monitoring and provide valuable insights for future improvements.",
    lead: [
      {
        name: "Adrian Wong",
        role: "Electronics Co-Lead",
        image: "/images/team/EL/adrian hs.JPG"
      },
      {
        name: "Robert Woo",
        role: "Electronics Co-Lead",
        image: "/images/team/EL/robert hs.JPG"
      },
    ],
    members: [
      { name: "Lex Ibanez", role: "Incoming Co-Lead 25-26", image: "/images/team/EL/lex hs.JPG" },
      { name: "Jesus Olivares", role: "Incoming Co-Lead 25-26", image: "/images/team/EL/jesus hs.JPG" },
      { name: "Arya Gill", role: "Design Engineer", image: "/images/team/EL/arya.jpg" },
      { name: "Antonio Velasco", role: "Design Engineer", image: "/images/team/EL/antonio.jpg" },
    ]
  },
  {
    name: "Human Interface",
    description: "Designs, manufactures, and verifies the performance of the driver cockpit and all its instruments, including pedals, steering, gear shifting, brakes, and safety devices. They prioritize improving driver comfort and safety while optimizing vehicle performance. Candidates with CAD and hands-on manufacturing experience are highly preferred. The team uses CAE software for precision engineering, ensuring components like brakes, shifters, steering wheels, and seat belts are designed for maximum efficiency and swift response. Their work ensures that every aspect of the cockpit enhances both the driver's comfort and the car's overall performance.",
    lead: {
      name: "Aidan Saiotong",
      role: "Human Interface Lead",
      image: "/images/team/HI/aidan hs.JPG"
    },
    members: [
      { name: "Aaron Petelo", role: "Incoming Co-Lead 25-26", image: "/images/team/HI/aaron hs.JPG" },
      { name: "William Kim", role: "Incoming Co-Lead 25-26", image: "/images/team/HI/william hs.JPG" },
      { name: "Anna Coppola", role: "Design Engineer", image: "/images/team/HI/anna.png" },
      { name: "Angelina Villasano", role: "Design Engineer", image: "/images/team/HI/angelina.png" },
      { name: "Diego Martinez", role: "Design Engineer", image: "/images/team/HI/diego.png" },
    ]
  },
  {
    name: "Powertrain",
    description: "Oversees the engine and all the external systems required to keep it alive. Designs and manufactures assemblies such as the exhaust system, cooling system, driveline components, and is responsible for the tune the engine runs on. Our goal is to make as much power as possible, as efficiently as possible without sacrificing reliability and keeping the design maintenance friendly.",
    lead: {
      name: "Abraham Diaz",
      role: "Powertrain Lead",
      image: "/images/team/PT/abraham hs.JPG"
    },
    members: [
      { name: "Alex Garcia", role: "Incoming Lead 25-26", image: "/images/team/PT/alex hs.JPG" },
      { name: "Micky Dabee", role: "Design Engineer", image: "/images/team/PT/micky hs.JPG" },
      { name: "Ishan Malik", role: "Design Engineer", image: "/images/team/PT/ishan.png" },
      {name: "Lucas Cardona", role: "Design Engineer", image: "/images/team/PT/lucas.png" },
      {name: "Ernest Cheuk", role: "Design Engineer", image: "/images/team/PT/ernest.png" },
      {name: "Sebastian Shunda", role: "Design Engineer", image: "/images/team/PT/sebastian.png" },
      {name: "Fortino Vargas", role: "Design Engineer", image: "/images/team/PT/fortino.png" },
      {name: "Jonny Holt", role: "Design Engineer", image: "/images/team/PT/jonny.png" },
      {name: "Aden Leggio", role: "Design Engineer", image: "/images/team/PT/aden hs.JPG" },
    ]
  },
  {
    name: "Suspension",
    description: "Designs the suspension so the tires maintain contact with the ground while maximizing the overall grip and making sure the car is quick and easy to drive. Responsible for parts of vehicle dynamics, suspension kinematics, design of the wheel assemblies (hubs, uprights, wheels), control arms, shocks, and anti-roll bars.",
    lead: {
      name: "Brandon Bunuan",
      role: "Suspension Lead",
      image: "/images/team/SUS/brandon hs.JPG"
    },
    members: [
      { name: "Dylan Lynch", role: "Incoming Lead 25-26", image: "/images/team/SUS/dylan hs.JPG" },
      { name: "Tomas Mejia", role: "Design Engineer", image: "/images/team/SUS/tomas.jpg" },
      { name: "Ashley Kim", role: "Design Engineer", image: "/images/team/SUS/ashley.jpg" },
    ]
  },
  {
    name: "Vehicle Dynamics",
    description: "Develops and integrates real-time data acquisition systems on the car to better understand its on-track behavior and validate design decisions through physical testing. Candidates with experience in embedded systems, sensors, microcontrollers, or a strong interest in hands-on engineering are highly desired. The team collects and analyzes track data to support other subteams and improve vehicle performance through direct feedback. In addition to hardware, the team also builds MATLAB-based lap time simulations to complement real-world testing. Their work is essential for optimizing the car's performance and achieving maximum points in Formula SAE Dynamic Events.",
    lead: {
      name: "Ahmed Baig",
      role: "Vehicle Dynamics Lead",
      image: "/images/team/VD/ahmed hs.JPG"
    },
    members: [
      { name: "Ryder Risic", role: "Incoming Lead 25-26", image: "/images/team/VD/ryder hs.JPG" },
      { name: "Emmy Chen", role: "Design Engineer", image: "/images/team/VD/emmy.jpg" },
      { name: "Nenad Samardzija", role: "Design Engineer", image: "/images/team/VD/nenad.jpg" },
      { name: "David Dela Cruz", role: "Design Engineer", image: "/images/team/VD/david.jpg" },
      { name: "Miguel Murillo", role: "Design Engineer", image: "/images/team/VD/miguel.jpg" },
      { name: "Travis Le", role: "Design Engineer", image: "/images/team/VD/travis.png" },
    ]
  },
];

export default function TeamPage() {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

  // Create refs for the sections you want to link to
  const managementRef = useRef<HTMLDivElement>(null);
  const facultyRef = useRef<HTMLDivElement>(null);
  const subteamsRef = useRef<HTMLDivElement>(null);

  // Function to smoothly scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-black text-white"> {/* Removed py-16 from main */}

      {/* Team Banner Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 mx-4 mb-4">
          <Image
            src="/images/team/full team zot.JPG" // Your full team image
            alt="Full Anteater Formula Racing Team"
            fill
            className="object-cover rounded-lg"
            priority // Load this image early
          />
          <div className="absolute inset-0 bg-black/10 rounded-lg"></div> {/* Overlay for readability */}
        </div>

        {/* Content Overlay */}
        <div className=" relative z-10 flex h-full items-start justify-center text-center p-4">
          <div className={`text-center ${montserrat.className}`}>
            <div className={`text-center ${montserrat.className}`}>
              <h1 className="m-40 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-tight">
                Meet the Team
              </h1>
            </div>

            

          </div>
        </div>
      </div>

      {/* Content below the banner */}
      <div className="container mx-auto px-4 py-16"> {/* Added padding here */}

        {/* Management Section */}
        <div id="management-section" ref={managementRef} className="mb-20 scroll-mt-24">
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
        <div id="faculty-section" ref={facultyRef} className="mb-20 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Faculty Sponsor</h2>
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
            {facultySponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
                <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">{sponsor.name}</h3>
                  <p className="text-gray-400 mb-1">{sponsor.role}</p>
                  <p className="text-gray-500">{sponsor.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subteams Section */}
        <div id="subteams-section" ref={subteamsRef} className="mb-20 scroll-mt-24">
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
                      {/* Team Lead(s) Section */}
                      {/* --- START Co-Lead Adjustment --- */}
                      <div className={`w-full flex flex-col items-center ${Array.isArray(subteam.lead) ? 'md:w-1/2' : 'md:w-1/3'}`}> {/* Adjust width based on single vs co-leads */}
                        {Array.isArray(subteam.lead) ? ( // Check if it's an array (co-leads)
                          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center"> {/* Flex container for co-leads */}
                            {subteam.lead.map((lead, leadIndex) => (
                              <div key={leadIndex} className="flex flex-col items-center w-full sm:w-1/2"> {/* Each co-lead takes half width on sm+ */}
                                <div className="relative w-48 h-48 mb-4"> {/* Slightly smaller images for co-leads */}
                                  <Image
                                    src={lead.image}
                                    alt={lead.name}
                                    fill
                                    className="object-cover rounded-lg"
                                  />
                                </div>
                                <h3 className="text-xl font-semibold text-center">{lead.name}</h3> {/* Smaller font for co-leads names */}
                                <p className="text-gray-400 text-center">{lead.role}</p>
                              </div>
                            ))}
                          </div>
                        ) : ( // Render single lead if not an array
                          <>
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
                          </>
                        )}
                      </div>
                       {/* --- END Co-Lead Adjustment --- */}

                      {/* Subteam Description */}
                      {/* --- START Co-Lead Adjustment --- */}
                      {/* Adjust width of description based on single vs co-leads */}
                      <div className={`w-full ${Array.isArray(subteam.lead) ? 'md:w-1/2' : 'md:w-2/3'}`}>
                       {/* --- END Co-Lead Adjustment --- */}
                        <p className="text-gray-300 text-lg">{subteam.description}</p>
                      </div>
                    </div>

                    {/* Team Members Grid */}
                    {/* This section is already scalable by default */}
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