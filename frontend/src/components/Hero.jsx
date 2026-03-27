import React from "react";

const techStack = [
  { name: "Python", color: "from-yellow-400 to-blue-500" },
  { name: "Django", color: "from-green-500 to-emerald-600" },
  { name: "Flask", color: "from-gray-700 to-black" },
  { name: "FastAPI", color: "from-teal-400 to-cyan-500" },
  { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
  { name: "MongoDB", color: "from-green-400 to-green-600" },
  { name: "Docker", color: "from-blue-400 to-blue-600" },
  { name: "AWS", color: "from-orange-400 to-yellow-500" },
  { name: "Git", color: "from-red-400 to-orange-500" },
];

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-300/30 blur-[120px] rounded-full"></div>

      {/* 🔥 Badge */}
      <div className="mb-6">
        <span className="px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-500 shadow-md animate-pulse">
          🚀 Python Developer Roadmap Workshop
        </span>
      </div>

      {/* 🔥 Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Become a{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-blue-600 bg-clip-text text-transparent">
          Python Developer
        </span>
      </h1>

      <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mt-3">
        Roadmap Workshop
      </h2>

      {/* 🔥 Subtitle */}
      <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
        Master Python from fundamentals to advanced backend development. Build real-world projects using Django, APIs, and cloud deployment.
      </p>

      {/* 🔥 CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
          Join Workshop
        </button>
        <button className="border border-blue-200 text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
          View Syllabus
        </button>
      </div>

      {/* 🔥 Tech Stack Cards */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 max-w-6xl">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-5 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            {/* Icon Circle */}
            <div
              className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${tech.color} text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition`}
            >
              {tech.name[0]}
            </div>

            <span className="text-gray-700 font-semibold text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* 🔥 Floating Elements */}
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