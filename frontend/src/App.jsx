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
       
        
      <section id="workshop-details-section" className="py-24 bg-[#eaf4f8]">
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

  
      </main>
       <FAQ/>
       <RegisterSection/>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
