import React from "react";
import { FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import imge from "../assets/data.jpeg";

const Module = () => {
  const sections = [
    {
      title: "Core Python",
      icon: <FaPython className="text-blue-500 text-2xl" />,
      border: "border-blue-500",
      bg: "bg-blue-50",
      items: [
        "Syntax",
        "Loops",
        "List",
        "Dictionary",
        "Tuple",
        "Function",
        "Exception Handling",
        "File Handling",
        "Regular Expressions",
      ],
    },
    {
      title: "Data Analysis and Visualization",
      icon: <FaChartBar className="text-indigo-500 text-2xl" />,
      border: "border-indigo-500",
      bg: "bg-indigo-50",
      items: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "D-Tale",
        "Pandas Profiling",
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-green-600 text-2xl" />,
      border: "border-green-500",
      bg: "bg-green-50",
      items: ["MongoDB", "SQL"],
    },
    {
      title: "Tools for Visualization and Analysis",
      icon: <SiScikitlearn className="text-yellow-500 text-2xl" />,
      border: "border-yellow-500",
      bg: "bg-yellow-50",
      items: ["Excel", "Power BI"],
    },
    {
      title: "Machine Learning",
      icon: <FaDatabase className="text-purple-500 text-2xl" />,
      border: "border-purple-500",
      bg: "bg-purple-50",
      items: [
        "Supervised Machine Learning",
        "Unsupervised Machine Learning",
        "Reinforcement Learning",
        "Evaluation Metrics",
        "Hyperparameter Tuning",
      ],
    },
  ];

  return (
    <div id="modules" className="bg-[#eef6fb] py-16 px-6">
      {/* Top Badge */}
      <div className="flex justify-center mb-6">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
          ● COVERED IN THE DATA SCIENCE ROADMAP
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Everything You Need to Master Data Science & Data Analysis
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Complete roadmap from basics to advanced Python, including data analysis, machine learning, visualization, and real-world data science tools.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

      {/* CTA Section */}
      <div className="bg-[#eef6fb] py-16 px-6">
        <div className="max-w-6xl mx-auto border border-blue-200 rounded-2xl p-8 md:p-12 shadow-sm bg-white/60 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Ready to Start Your Data Science Journey?
              </h2>

              <p className="text-gray-600 mb-6">
                Join our complete Python and Data Science roadmap and build strong fundamentals from basics to advanced topics like data analysis, machine learning, visualization, and real-world data science projects.
              </p>

              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition flex items-center gap-2 max-w-max"
              >
                🚀 Start Data Science with Python
              </a>

              <p className="text-sm text-gray-500 mt-4">
                Limited seats available • Start your Data Science career today
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src={imge}
                alt="Python Illustration"
                className="w-60 md:w-72 drop-shadow-lg rounded"
              />
            </div>
          </div>

          {/* NOTE */}
          <div className="border-t mt-10 pt-5 text-center">
            <p className="text-gray-600 text-sm">
              <span className="text-blue-600 font-semibold">Note:</span> Designed
              for beginners & intermediates. No prior programming experience
              required to start learning Data Science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;