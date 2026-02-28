export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FacultySponsor extends TeamMember {
  department: string;
}

export interface Subteam {
  name: string;
  description: string;
  lead: TeamMember | TeamMember[];
  members: TeamMember[];
}

export interface TeamYear {
  id: string; // e.g. "24-25"
  label: string; // e.g. "2024–2025"
  management: TeamMember[];
  facultySponsors: FacultySponsor[];
  subteams: Subteam[];
}

export const teamYears: TeamYear[] = [
  {
    id: "24-25",
    label: "2024–2025",
    management: [
      {
        name: "Mira Vega",
        role: "Project Manager",
        image: "/images/team/Mira hs.JPG",
      },
      {
        name: "Nathalie Najjar",
        role: "Chief Engineer",
        image: "/images/team/Nathalie hs.JPG",
      },
      {
        name: "Michelle Tran",
        role: "Asst. Project Manager",
        image: "/images/team/Michelle hs.JPG",
      },
    ],
    facultySponsors: [
      {
        name: "Dr. Tryphon T. Georgiou",
        role: "Faculty Advisor",
        department: "UCI Samueli School of Engineering",
        image: "/images/team/georgiou hs.png",
      },
    ],
    subteams: [
      {
        // Data copied from the 24–25 Team page so it can be archived
        name: "Aerodynamics",
        description:
          "Responsible in designing and optimizing the front and rear wings, bodywork, and diffuser to streamline airflow, minimize drag, and maximize downforce. Leveraging advanced fluid mechanics principles, the team conducts comprehensive computer flow simulations, wind tunnel tests, and on-track trials to validate and refine their designs. Their expertise and precision engineering make our race car perform at its peak, ensuring it handles like it's flying on the track.",
        lead: {
          name: "Maia Bojorquez",
          role: "Aerodynamics Lead",
          image: "/images/team/AERO/maia hs.JPG",
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
        ],
      },
      {
        name: "Business & Marketing",
        description:
          "Securing and maintaining sponsorships while adding new partners to the team's roster. This team also has a strong influence in designing the car's livery, competing + attending business events, all while fostering strong collaboration with the other technical sub-teams. Managing both internal communications with the school and profession outreach is an essential part of this team. Their work also including curating and posting engaging content on our social media platforms regularly, while also creating fundraising initiatives to support our annual competition goals. Marketing works on coordinating with campus and external organizations / advisors, and organizing speaker presentations/workshops. Their efforts ensure smooth operations and continuous growth, driving our team toward excellence.",
        lead: {
          name: "Claire McGinnis",
          role: "Business & Marketing Lead",
          image: "/images/team/BM/claire hs.JPG",
        },
        members: [
          { name: "Madyson Schindler", role: "Incoming Lead 25-26", image: "/images/team/BM/mady hs.JPG" },
          { name: "Ryan Lin", role: "Design Engineer", image: "/images/team/BM/ryan.png" },
          { name: "Alex Zakoor", role: "Design Engineer", image: "/images/team/BM/alex.png" },
          { name: "Chris Li", role: "Design Engineer", image: "/images/team/BM/chris.png" },
        ],
      },
      {
        name: "Chassis",
        description:
          "Responsible for designing, validating, and manufacturing(welding) a frame made mostly of steel tubing to support the suspension forces, protect the driver, and house all other subteam components. Designing fixture used for chassis manufacturing. Validate chassis torsional rigidity using Ansys FEA simulations and torsional rigidity jig.",
        lead: {
          name: "Daniel Deng",
          role: "Chassis Lead",
          image: "/images/team/Chassis/daniel hs.JPG",
        },
        members: [
          { name: "Thien Ngo", role: "Incoming Lead 25-26", image: "/images/team/Chassis/thien hs.JPG" },
          { name: "Austin Ulene", role: "Design Engineer", image: "/images/team/Chassis/austin.jpg" },
          { name: "Gavin Hu", role: "Design Engineer", image: "/images/team/Chassis/gavin.jpg" },
          { name: "Akhil Nandhakumar", role: "Design Engineer", image: "/images/team/Chassis/akhil.jpg" },
        ],
      },
      {
        name: "Electronics",
        description:
          "Designs, manufactures, and verifies the performance of onboard electronics, including the electronic dashboard, electronic throttle body, and various sensors crucial for assessing our car's performance. The team also develops wiring harnesses that connect onboard data systems, such as engine management, to MoTeC digital displays. By gathering and analyzing data from numerous sensors, they ensure efficient performance monitoring and provide valuable insights for future improvements.",
        lead: [
          {
            name: "Adrian Wong",
            role: "Electronics Co-Lead",
            image: "/images/team/EL/adrian hs.JPG",
          },
          {
            name: "Robert Woo",
            role: "Electronics Co-Lead",
            image: "/images/team/EL/robert hs.JPG",
          },
        ],
        members: [
          { name: "Lex Ibanez", role: "Incoming Co-Lead 25-26", image: "/images/team/EL/lex hs.JPG" },
          { name: "Jesus Olivares", role: "Incoming Co-Lead 25-26", image: "/images/team/EL/jesus hs.JPG" },
          { name: "Arya Gill", role: "Design Engineer", image: "/images/team/EL/arya.jpg" },
          { name: "Antonio Velasco", role: "Design Engineer", image: "/images/team/EL/antonio.jpg" },
        ],
      },
      {
        name: "Human Interface",
        description:
          "Designs, manufactures, and verifies the performance of the driver cockpit and all its instruments, including pedals, steering, gear shifting, brakes, and safety devices. They prioritize improving driver comfort and safety while optimizing vehicle performance. Candidates with CAD and hands-on manufacturing experience are highly preferred. The team uses CAE software for precision engineering, ensuring components like brakes, shifters, steering wheels, and seat belts are designed for maximum efficiency and swift response. Their work ensures that every aspect of the cockpit enhances both the driver's comfort and the car's overall performance.",
        lead: {
          name: "Aidan Saiotong",
          role: "Human Interface Lead",
          image: "/images/team/HI/aidan hs.JPG",
        },
        members: [
          { name: "Aaron Petelo", role: "Incoming Co-Lead 25-26", image: "/images/team/HI/aaron hs.JPG" },
          { name: "William Kim", role: "Incoming Co-Lead 25-26", image: "/images/team/HI/william hs.JPG" },
          { name: "Anna Coppola", role: "Design Engineer", image: "/images/team/HI/anna.png" },
          { name: "Angelina Villasano", role: "Design Engineer", image: "/images/team/HI/angelina.png" },
          { name: "Diego Martinez", role: "Design Engineer", image: "/images/team/HI/diego.png" },
        ],
      },
      {
        name: "Powertrain",
        description:
          "Oversees the engine and all the external systems required to keep it alive. Designs and manufactures assemblies such as the exhaust system, cooling system, driveline components, and is responsible for the tune the engine runs on. Our goal is to make as much power as possible, as efficiently as possible without sacrificing reliability and keeping the design maintenance friendly.",
        lead: {
          name: "Abraham Diaz",
          role: "Powertrain Lead",
          image: "/images/team/PT/abraham hs.JPG",
        },
        members: [
          { name: "Alex Garcia", role: "Incoming Lead 25-26", image: "/images/team/PT/alex hs.JPG" },
          { name: "Micky Dabee", role: "Design Engineer", image: "/images/team/PT/micky hs.JPG" },
          { name: "Ishan Malik", role: "Design Engineer", image: "/images/team/PT/ishan.png" },
          { name: "Lucas Cardona", role: "Design Engineer", image: "/images/team/PT/lucas.png" },
          { name: "Ernest Cheuk", role: "Design Engineer", image: "/images/team/PT/ernest.png" },
          { name: "Sebastian Shunda", role: "Design Engineer", image: "/images/team/PT/sebastian.png" },
          { name: "Fortino Vargas", role: "Design Engineer", image: "/images/team/PT/fortino.png" },
          { name: "Jonny Holt", role: "Design Engineer", image: "/images/team/PT/jonny.png" },
          { name: "Aden Leggio", role: "Design Engineer", image: "/images/team/PT/aden hs.JPG" },
        ],
      },
      {
        name: "Suspension",
        description:
          "Designs the suspension so the tires maintain contact with the ground while maximizing the overall grip and making sure the car is quick and easy to drive. Responsible for parts of vehicle dynamics, suspension kinematics, design of the wheel assemblies (hubs, uprights, wheels), control arms, shocks, and anti-roll bars.",
        lead: {
          name: "Brandon Bunuan",
          role: "Suspension Lead",
          image: "/images/team/SUS/brandon hs.JPG",
        },
        members: [
          { name: "Dylan Lynch", role: "Incoming Lead 25-26", image: "/images/team/SUS/dylan hs.JPG" },
          { name: "Tomas Mejia", role: "Design Engineer", image: "/images/team/SUS/tomas.jpg" },
          { name: "Ashley Kim", role: "Design Engineer", image: "/images/team/SUS/ashley.jpg" },
        ],
      },
      {
        name: "Vehicle Dynamics",
        description:
          "Develops and integrates real-time data acquisition systems on the car to better understand its on-track behavior and validate design decisions through physical testing. Candidates with experience in embedded systems, sensors, microcontrollers, or a strong interest in hands-on engineering are highly desired. The team collects and analyzes track data to support other subteams and improve vehicle performance through direct feedback. In addition to hardware, the team also builds MATLAB-based lap time simulations to complement real-world testing. Their work is essential for optimizing the car's performance and achieving maximum points in Formula SAE Dynamic Events.",
        lead: {
          name: "Ahmed Baig",
          role: "Vehicle Dynamics Lead",
          image: "/images/team/VD/ahmed hs.JPG",
        },
        members: [
          { name: "Ryder Risic", role: "Incoming Lead 25-26", image: "/images/team/VD/ryder hs.JPG" },
          { name: "Emmy Chen", role: "Design Engineer", image: "/images/team/VD/emmy.jpg" },
          { name: "Nenad Samardzija", role: "Design Engineer", image: "/images/team/VD/nenad.jpg" },
          { name: "David Dela Cruz", role: "Design Engineer", image: "/images/team/VD/david.jpg" },
          { name: "Miguel Murillo", role: "Design Engineer", image: "/images/team/VD/miguel.jpg" },
          { name: "Travis Le", role: "Design Engineer", image: "/images/team/VD/travis.png" },
        ],
      },
    ],
  },
];

export const currentTeamYear: TeamYear = teamYears[0];

