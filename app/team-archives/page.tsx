"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { teamYears, Subteam, TeamMember, TeamYear } from "../data/team";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const renderLead = (lead: Subteam["lead"]) => {
  if (Array.isArray(lead)) {
    return (
      <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
        {lead.map((person) => (
          <div
            key={person.name}
            className="flex flex-col items-center w-full sm:w-1/2"
          >
            <div className="relative w-40 h-40 mb-3">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h4 className="text-lg font-semibold text-center">
              {person.name}
            </h4>
            <p className="text-gray-400 text-sm text-center">{person.role}</p>
          </div>
        ))}
      </div>
    );
  }

  const single = lead as TeamMember;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={single.image}
          alt={single.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h4 className="text-2xl font-bold text-center">{single.name}</h4>
      <p className="text-gray-400 text-sm text-center">{single.role}</p>
    </div>
  );
};

const YearSection = ({ year }: { year: TeamYear }) => {
  const [expandedSubteam, setExpandedSubteam] = useState<number | null>(null);

  return (
    <section className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        {year.label} Season
      </h2>

      {/* Management */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
          Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {year.management.map((member) => (
            <div
              key={member.name}
              className="bg-black/40 rounded-lg overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Sponsor */}
      {year.facultySponsors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Faculty Sponsor
          </h3>
          <div className="max-w-3xl mx-auto bg-black/40 rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            {year.facultySponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full"
              >
                <div className="relative w-36 h-36 md:w-40 md:h-40 flex-shrink-0">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-xl font-semibold mb-1">
                    {sponsor.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-1">
                    {sponsor.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {sponsor.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subteams */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
          Subteams
        </h3>
        <div className="max-w-4xl mx-auto">
          {year.subteams.map((subteam, index) => (
            <div key={subteam.name} className="mb-4">
              <button
                onClick={() =>
                  setExpandedSubteam(
                    expandedSubteam === index ? null : index
                  )
                }
                className={`w-full p-6 text-left transition-all duration-300 ${
                  expandedSubteam === index
                    ? "bg-primary text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                } rounded-lg`}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-bold">{subteam.name}</h4>
                  <span className="text-2xl">
                    {expandedSubteam === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedSubteam === index ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                <div className="p-6 bg-gray-800 rounded-b-lg">
                  <div className="flex flex-col md:flex-row gap-8 mb-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                      {renderLead(subteam.lead)}
                    </div>
                    <div className="w-full md:w-2/3">
                      <p className="text-gray-300 text-lg">
                        {subteam.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold mb-3">Members</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subteam.members.map((member) => (
                        <div
                          key={`${year.id}-${subteam.name}-${member.name}`}
                          className="flex flex-col items-center"
                        >
                          <div className="relative w-36 h-36 mb-3">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <p className="font-medium text-center">
                            {member.name}
                          </p>
                          <p className="text-gray-400 text-xs text-center">
                            {member.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TeamArchivesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 text-center ${montserrat.className}`}
          >
            Team Archives
          </h1>
          <p className="text-lg text-gray-300 text-center">
            Browse previous Anteater Formula Racing teams by season.
          </p>
        </div>

        <div className="space-y-10">
          {teamYears.map((year) => (
            <YearSection key={year.id} year={year} />
          ))}
        </div>
      </div>
    </main>
  );
}