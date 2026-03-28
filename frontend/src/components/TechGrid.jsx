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
  { 
    title: "Data Analysis & Visualization", 
    description: "Exploring data using Pandas, NumPy, and creating impactful visualizations with Matplotlib & Seaborn.", 
    iconPath: "M3 3v18h18M7 14l3-3 3 2 4-5" 
  },
  { 
    title: "Machine Learning", 
    description: "Building predictive models with Scikit-Learn, covering regression, classification, and clustering techniques.", 
    iconPath: "M12 20v-6M6 20V10M18 20V4" 
  },
  { 
    title: "Deep Learning", 
    description: "Designing neural networks using TensorFlow and Keras for image, text, and pattern recognition tasks.", 
    iconPath: "M4 12h4l2 5 4-10 2 5h4" 
  },
  { 
    title: "Data Engineering", 
    description: "Handling large-scale data pipelines, ETL processes, and working with SQL, Spark, and big data tools.", 
    iconPath: "M3 6h18M3 12h18M3 18h18" 
  },
  { 
    title: "AI Applications", 
    description: "Applying AI in real-world use cases like recommendation systems, NLP, and computer vision solutions.", 
    iconPath: "M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4zM6 10h12v10H6z" 
  },
  { 
    title: "Model Deployment & MLOps", 
    description: "Deploying ML models using Flask, Docker, and managing workflows with CI/CD and cloud platforms.", 
    iconPath: "M5 12h14M12 5l7 7-7 7" 
  }
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