"use client";
export default function Timeline() {
    const milestones = [
      {
        year: "2016",
        title: "R&D & ONBOARDING",
        content: [
          "Mobile Application & Platform Development",
          "Products & Services Development",
          "Establishment of Global Insurance Partnership",
          "Establishment of Channel Partners and Authorized Repair Service Providers",
        ],
      },
      {
        year: "2019",
        title: "LAUNCH IN MALAYSIA",
        content: [
          "Partnering with Major Brand Owner authorized Service Centre and Repair Service Providers",
          "Acquiring beyond 6,000 Mobile Devices & ICT retail outlets partners nationwide",
          "Serving more than 100,000 devices across all major mobile brands",
        ],
      },
      {
        year: "2020",
        title: "LAUNCH IN SINGAPORE",
        content: [
          "Establishment of Regional HQ office in Singapore",
          "Partnering 3 Major Mobile Device and ICT retail outlets nationwide",
          "Acquiring beyond 30,000 Mobile Devices & ICT retail outlets partners nationwide",
          "Serving more than 30,000 devices across all major mobile brands",
        ],
      },
      {
        year: "2021",
        title: "LAUNCH IN THAILAND",
        content: [
          "Establishing Channel Partners and Authorized Repair Service Providers",
          "Partnering 2 Major Mobile Device and ICT retail outlets nationwide",
          "Acquiring beyond 20,000 Mobile Devices & ICT retail outlets partners nationwide",
          "Serving more than 50,000 devices across all major mobile brands",
        ],
      },
      {
        year: "2023",
        title: "LAUNCH BIT PLATFORM",
        content: [
          "Network Expansion in Asia with channel partnership in Pakistan, Nepal, Sri Lanka and Mongolia",
          "Launch of the BIT Platform to support both B2B and B2B2C market segments",
          "Successfully onboarded key influencers and channel partners for IP BIT Platforms",
        ],
      },
    ];
  
    return (
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-2xl font-bold mb-4 text-indigo-600">
          Our milestones
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
            How Instaprotection grown over the years
        </h2>
  
        <div className="relative border-l-2 border-green-400 ml-8">
          {milestones.map((item, index) => (
            <div key={index} className="mb-12 flex items-start relative">
              <div className="absolute -left-18 top-0 w-24">
                <span className="bg-green-100 text-green-600 text-sm font-semibold py-1 px-3 rounded-full">
                  {item.year}
                </span>
              </div>
  
              <div className="w-4 h-4 bg-green-500 rounded-full absolute -left-2 top-1.5"></div>
  
              <div className="pl-6">
                <h3 className="text-indigo-700 font-bold text-lg md:text-xl mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  What have we done
                </p>
                <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                  {item.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  