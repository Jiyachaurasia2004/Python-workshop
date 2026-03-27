import React from "react";
import { FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFastapi, SiTensorflow } from "react-icons/si";

const Module = () => {
  const sections = [
    {
      title: "Python Basics",
      icon: <FaPython className="text-blue-500 text-2xl" />,
      border: "border-blue-500",
      bg: "bg-blue-50",
      items: ["Syntax", "Variables", "Loops", "Functions"],
    },
    {
      title: "Backend Development",
      icon: <SiDjango className="text-green-600 text-2xl" />,
      border: "border-red-400",
      bg: "bg-red-50",
      items: ["Django", "Flask", "REST APIs"],
    },
    {
      title: "Frameworks (Advanced)",
      icon: <SiFastapi className="text-green-500 text-2xl" />,
      border: "border-green-500",
      bg: "bg-green-50",
      items: ["FastAPI", "Django REST", "Async Python"],
    },
    {
      title: "Data & AI",
      icon: <FaDatabase className="text-purple-500 text-2xl" />,
      border: "border-purple-500",
      bg: "bg-purple-50",
      items: ["NumPy", "Pandas", "TensorFlow"],
    },
  ];

  return (
    <div className="bg-[#eef6fb] py-16 px-6">
      {/* Top Badge */}
      <div className="flex justify-center mb-6">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          ● COVERED IN THE PYTHON ROADMAP
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Everything You Need to Master Python
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Complete roadmap from basics to advanced Python including backend,
        frameworks, and data science tools.
      </p>

      {/* Subheading */}
      <div className="flex justify-between items-center mb-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">
          Complete Python Roadmap
        </h2>

        <span className="border border-blue-300 text-blue-600 px-4 py-1 rounded-full text-sm">
          Learning Focus
        </span>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`${sec.bg} border-2 ${sec.border} rounded-xl p-6 text-center hover:shadow-lg transition`}
          >
            <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4 shadow">
              {sec.icon}
            </div>

            <h3 className="font-semibold text-lg mb-4">{sec.title}</h3>

            <div className="flex flex-wrap justify-center gap-2">
              {sec.items.map((item, i) => (
                <span
                  key={i}
                  className="text-sm bg-white border px-3 py-1 rounded-md shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
       <div className="bg-[#eef6fb] py-16 px-6">
      <div className="max-w-6xl mx-auto border border-blue-200 rounded-2xl p-8 md:p-12 shadow-sm bg-white/60 backdrop-blur">

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your Python Journey?
            </h2>

            <p className="text-gray-600 mb-6">
              Join our complete Python roadmap and build strong fundamentals
              from basics to advanced topics like backend development,
              APIs, and Data Science.
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition flex items-center gap-2">
              🚀 Start Learning Python
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Limited seats available • Start your Python career today
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
              alt="Python Illustration"
              className="w-60 md:w-72 drop-shadow-lg"
            />
          </div>

        </div>

        {/* NOTE */}
        <div className="border-t mt-10 pt-5 text-center">
          <p className="text-gray-600 text-sm">
            <span className="text-blue-600 font-semibold">Note:</span> Designed
            for beginners & intermediates. No prior programming experience
            required to start learning Python.
          </p>
        </div>

      </div>
    </div>
    </div>

  );
};

export default Module;
