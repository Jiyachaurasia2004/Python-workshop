import React, { useState } from "react";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    semester: "",
    college: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://python-workshop-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          qualification: "",
          semester: "",
          college: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server Error:", errorData);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#eaf4f8] py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT - FORM */}
        <div className="bg-white rounded-2xl border border-blue-200 p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
            📘 Register for Workshop
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Fill in your details to secure your spot
          </p>

          {/* Success Message */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2">
              ✅ Registration successful! We've sent a confirmation to your email.
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
              ❌ Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full mt-1 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full mt-1 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Qualification *</label>
                <select
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-blue-200 rounded-lg"
                >
                  <option value="">Select</option>
                  <option>12th Pass</option>
                  <option>Diploma</option>
                  <option>BCA</option>
                  <option>B.Tech</option>
                  <option>B.Sc</option>
                  <option>MCA</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Semester *</label>
                <select
                  name="semester"
                  required
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-blue-200 rounded-lg"
                >
                  <option value="">Select</option>
                  <option>Sem 1-4</option>
                  <option>Sem 5-8</option>
                  <option>Graduated</option>
                  <option>Working</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                College/University *
              </label>
              <input
                type="text"
                name="college"
                required
                value={formData.college}
                onChange={handleChange}
                placeholder="Enter your college name"
                className="w-full mt-1 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>🎯 Register Now →</>
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-2">
              By registering, you agree to our Terms
            </p>

          </form>
        </div>

        {/* RIGHT - HIGHLIGHTS */}
        <div className="bg-white rounded-2xl border border-blue-200 p-8 shadow-sm">

          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
            ✨ Workshop Highlights
          </h2>

          <div className="space-y-4">

            <div className="border border-green-300 bg-green-50 p-4 rounded-xl">
              <h4 className="font-semibold">🎯 Live Session</h4>
              <p className="text-sm text-gray-600">
                2-hour interactive with experts
              </p>
            </div>

            <div className="border border-blue-300 bg-blue-50 p-4 rounded-xl">
              <h4 className="font-semibold">👨‍🏫 Expert Mentors</h4>
              <p className="text-sm text-gray-600">
                Learn from professionals
              </p>
            </div>

            <div className="border border-blue-300 bg-blue-50 p-4 rounded-xl">
              <h4 className="font-semibold">📘 Full Stack Roadmap</h4>
              <p className="text-sm text-gray-600">
                Complete learning path
              </p>
            </div>

            <div className="border border-purple-300 bg-purple-50 p-4 rounded-xl">
              <h4 className="font-semibold">💼 Real Projects</h4>
              <p className="text-sm text-gray-600">
                Industry project insights
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RegisterSection;