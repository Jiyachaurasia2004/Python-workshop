import React from 'react';

// Single Tech Card
const TechCard = ({ title, description, iconPath }) => (
  <div className="p-8 rounded-3xl glass border border-blue-50/20 bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 group">
    
    {/* Icon */}
    <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600 mb-6 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={iconPath} />
      </svg>
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-indigo-950 mb-3 group-hover:text-green-600 transition-colors duration-300">
      {title}
    </h3>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
      {description}
    </p>
  </div>
);

// Tech Grid Section
const TechGrid = () => {
  const modules = [
    { title: "Core Java Mastery", description: "Foundations of Java, OOPS concepts, Collections, and Multi-threading for building robust applications.", iconPath: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 7H20v10H6.5a2.5 2.5 0 0 1 0 5H20" },
    { title: "Spring Boot & Hibernate", description: "Mastering enterprise-grade backends with Spring Ecosystem, REST APIs, and JPA/Hibernate ORM.", iconPath: "M2 20h20M5 20V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12M9 20v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" },
    { title: "Frontend Excellence", description: "Building modern, responsive user interfaces with React, Tailwind CSS, and essential state management.", iconPath: "M16 18l6-6-6-6M8 6l-6 6 6 6" },
    { title: "Database Engineering", description: "Designing efficient SQL/NoSQL databases, writing complex queries, and optimizing data layers.", iconPath: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 3" },
    { title: "Microservices", description: "Architecting scalable systems using microservices architecture, RabbitMQ, and Docker.", iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
    { title: "Cloud & DevOps", description: "Deploying applications on AWS/Azure, CI/CD pipelines, and ensuring high availability.", iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }
  ];

  return (
    <section id="projects" className="py-24 bg-[#eaf4f8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Workshop Modules</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Our curriculum is designed by industry experts to cover the complete stack from zero to hero.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {modules.map((module, i) => (
            <TechCard key={i} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;