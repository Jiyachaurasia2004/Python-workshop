import React, { useState } from "react";

const Companies = () => {
  const [pauseRow1, setPauseRow1] = useState(false);
  const [pauseRow2, setPauseRow2] = useState(false);

  const companies = [
    { name: "American Express", logo: "https://www.google.com/s2/favicons?domain=americanexpress.com&sz=128", color: "from-green-400 to-green-600" },
    { name: "Accenture", logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128", color: "from-pink-400 to-purple-500" },
    { name: "Deloitte", logo: "https://www.google.com/s2/favicons?domain=deloitte.com&sz=128", color: "from-green-500 to-green-700" },
    { name: "WNS", logo: "https://www.google.com/s2/favicons?domain=wns.com&sz=128", color: "from-blue-400 to-purple-500" },
    { name: "SBI", logo: "https://www.google.com/s2/favicons?domain=sbi.co.in&sz=128", color: "from-blue-500 to-indigo-500" },
    { name: "Deccan Herald", logo: "https://www.google.com/s2/favicons?domain=deccanherald.com&sz=128", color: "from-red-400 to-pink-500" },
    { name: "Intellect", logo: "https://www.google.com/s2/favicons?domain=intellectdesign.com&sz=128", color: "from-purple-400 to-indigo-500" },
    { name: "HCL", logo: "https://www.google.com/s2/favicons?domain=hcltech.com&sz=128", color: "from-red-400 to-red-600" },
    { name: "TATA", logo: "https://www.google.com/s2/favicons?domain=tata.com&sz=128", color: "from-blue-500 to-blue-700" },
    { name: "Reebok", logo: "https://www.google.com/s2/favicons?domain=reebok.com&sz=128", color: "from-red-500 to-red-700" },
    { name: "Google", logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128", color: "from-yellow-400 to-orange-500" },
    { name: "IBM", logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128", color: "from-blue-600 to-blue-800" },
    { name: "Cipla", logo: "https://www.google.com/s2/favicons?domain=cipla.com&sz=128", color: "from-blue-400 to-blue-600" },
  ];

  const firstRow = companies.slice(0, Math.ceil(companies.length / 2));
  const secondRow = companies.slice(Math.ceil(companies.length / 2));

  const loopRow = (row) => [...row, ...row];

  return (
    <div id="placement" className="bg-[#eaf4f8] py-16 px-6 overflow-hidden">

      {/* Centered Content Wrapper */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex justify-center mb-6">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
            ● 100% PLACEMENT SUPPORT
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-3">
          Our Placement Partner Companies
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Get direct placement opportunities with our 50+ hiring partner companies
        </p>

        {/* Row 1 */}
        <div
          className="overflow-hidden mb-6"
          onMouseEnter={() => setPauseRow1(true)}
          onMouseLeave={() => setPauseRow1(false)}
        >
          <div
            className={`flex gap-6 w-max ${
              pauseRow1 ? "" : "animate-scrollLeft"
            }`}
          >
            {loopRow(firstRow).map((company, index) => (
              <Card key={index} company={company} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPauseRow2(true)}
          onMouseLeave={() => setPauseRow2(false)}
        >
          <div
            className={`flex gap-6 w-max ${
              pauseRow2 ? "" : "animate-scrollRight"
            }`}
          >
            {loopRow(secondRow).map((company, index) => (
              <Card key={index} company={company} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// Card Component
const Card = ({ company }) => (
  <div className="bg-white rounded-2xl p-6 w-40 h-40 flex flex-col items-center justify-center shadow-md border border-transparent hover:border-green-500 hover:shadow-xl transition duration-300">
    
    <div className={`p-3 rounded-xl bg-gradient-to-r ${company.color} mb-3`}>
      <img
        src={company.logo}
        alt={company.name}
        className="w-10 h-10 object-contain bg-white rounded-md p-1"
      />
    </div>

    <p className="text-sm font-semibold text-gray-700 text-center">
      {company.name}
    </p>
  </div>
);

export default Companies;


