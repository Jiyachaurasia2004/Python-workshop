import React from "react";

const Details = () => {
  const data = [
    "Students starting Python programming journey",
    "Beginners who want to learn Python for development",
    "Non-IT students switching to Python career",
    "Anyone confused about Python roadmap & career path",
    "People interested in Data Science / AI with Python",
    "Developers who want to learn Backend using Python",
  ];

  return (
    <div id="details" className="bg-[#eef6fb] py-12 px-6 rounded-xl max-w-5xl mx-auto">
      
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-5 h-5 bg-blue-600 mr-3"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
          Who Should Learn Python?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-lg p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <span className="bg-green-500 text-white px-3 py-1 rounded font-bold">
              ✓
            </span>
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-600 mt-10 text-sm">
        This roadmap is designed for absolute beginners. No prior coding
        experience required. Perfect for students and professionals who want
        to build a career in Python, Data Science, or Backend Development.
      </p>
    </div>
  );
};

export default Details;