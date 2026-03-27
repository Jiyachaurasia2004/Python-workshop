import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Details from './components/Details';
import Module from './components/Module';
import Companies from './components/Company';
import Workflow from './components/Workflow';
import FAQ from './components/FQS';
import RegisterSection from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#f8faff] selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Details/>
        <Module/>
        <Companies/>
        <Workflow/>
        <TechGrid />
       
        
      <section id="details" className="py-24 bg-[#eaf4f8]">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-12">
      Workshop <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Details</span>
    </h2>

    {/* Content Card */}
    <div className="max-w-4xl mx-auto glass p-12 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-md hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
      <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
        This workshop is a <span className="font-semibold text-green-600">hands-on experience</span> where you will learn by building. 
        From day one, we emphasize <span className="font-semibold text-green-600">industry practices</span>, clean code, 
        and modern architecture patterns. You will not just learn Java; you will learn 
        how to become a <span className="font-semibold text-green-600">professional Software Engineer</span>.
      </p>
    </div>
  </div>
</section>

     <section id="projects" className="py-24 bg-[#eaf4f8]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4">
      Hands-on <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600">Projects</span>
    </h2>
    <p className="text-gray-600 mb-12 text-lg md:text-xl">
      Real-world applications you will build during the workshop.
    </p>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {['E-Commerce Suite', 'Social Media API', 'Banking System'].map((project, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl glass border border-white/20 shadow-2xl backdrop-blur-md hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 text-left"
        >
          {/* Number Circle */}
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-green-600 mb-6 font-bold text-lg md:text-xl group-hover:from-green-500 group-hover:to-green-600 group-hover:text-white transition-all duration-500">
            {`0${i+1}`}
          </div>

          {/* Project Title */}
          <h4 className="text-xl md:text-2xl font-bold text-indigo-950 mb-3 group-hover:text-green-600 transition-colors duration-300">
            {project}
          </h4>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
            Full-featured application using <span className="font-semibold text-green-600">React, Spring Boot, and PostgreSQL</span>.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      </main>
       <FAQ/>
       <RegisterSection/>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
