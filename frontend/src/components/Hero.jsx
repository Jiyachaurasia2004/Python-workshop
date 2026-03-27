import React from "react";
import python from "../assets/python.jpeg";
import numpy from "../assets/numpay.jpeg";
import scikit from "../assets/scikit.jpeg";
import matplotlib from "../assets/matpltilb.jpeg";
import pandas from "../assets/pandas.jpeg";
import micro from "../assets/microsof.jpeg";
import seaborn from "../assets/seaborn.jpeg";
import plotly from "../assets/plotly.jpeg";
import mongodb from "../assets/Mongodb.jpeg";
import sql from "../assets/sql.jpeg";
// ✅ Updated tech stack with image paths
const techStack = [
  { name: "Python", img: python },
  { name: "Numpy", img: numpy},
  { name: "Scikit Learn", img:scikit },
  { name: "Matplotlib", img: matplotlib},
  { name: "Pandas", img:pandas },
  { name: "Microsof Excel", img: micro },
  { name: "Seaborn", img:seaborn},
    { name: "Mongodb", img:mongodb},
  { name: "Plotly", img: plotly },
  { name: "SQL", img: sql},
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-300/30 blur-[120px] rounded-full"></div>

      {/* Badge */}
      <div className="mb-6">
        <span className="px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-500 shadow-md animate-pulse">
          🚀 Data Science Workshop
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        AI Powered{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-blue-600 bg-clip-text text-transparent">
          Data Science
        </span>
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mt-3">
        Workshop
      </h2>

      {/* Subtitle */}
      <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
        Master Python from fundamentals to advanced backend development. Build real-world projects using Django, APIs, and cloud deployment.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition inline-block text-center"
        >
          Join Workshop
        </a>
      </div>

      {/* Tech Stack Cards with Images */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 max-w-6xl">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-5 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Icon Image */}
            <div className="mb-3 flex items-center justify-center rounded-xl  shadow-md group-hover:scale-110 transition">
              <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain" />
            </div>
            <span className="text-gray-700 font-semibold text-sm">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute left-10 top-1/3 text-blue-400 opacity-30 text-6xl animate-bounce">
        🐍
      </div>
      <div className="absolute right-10 top-1/4 text-indigo-400 opacity-30 text-5xl animate-pulse">
        ⚙️
      </div>
    </section>
  );
};

export default Hero;