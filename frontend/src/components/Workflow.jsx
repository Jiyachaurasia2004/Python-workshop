import React from "react";
import {
  ClipboardDocumentIcon,
  BuildingOffice2Icon,
  Cog6ToothIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const steps = [
  {
    id: 1,
    title: "Fundamentals & Core Python",
    duration: "5-6 weeks",
    description:
      "Learn Python basics (loops, functions, OOP), focus on logic building, and practice 300+ problems",
    icon: ClipboardDocumentIcon,
  },
  {
    id: 2,
    title: "Advanced Python + Analysis Libraries",
    duration: "3-4 weeks",
    description:
      "Work with NumPy, Pandas, Matplotlib, and Seaborn for data manipulation and visualization. Practice with CSV/Excel datasets and build 5+ projects",
    icon: BuildingOffice2Icon,
  },
  {
    id: 3,
    title: "Database Knowledge",
    duration: "4-5 weeks",
    description:
      "Learn SQL (SELECT, JOIN, GROUP BY) and MongoDB (NoSQL basics). Understand data storage and retrieval concepts",
    icon: Cog6ToothIcon,
  },
  {
    id: 4,
    title: "Data Analysis Tools",
    duration: "5-6 weeks",
    description:
      "Use Power BI (dashboards, DAX, 5+ projects) and Advanced Excel (pivot tables, charts, formulas) for analysis",
    icon: PaintBrushIcon,
  },
  {
    id: 5,
    title: "Data Science & Machine Learning",
    duration: "5-6 weeks",
    description:
      "Learn supervised and unsupervised learning using Scikit-learn. Cover regression, classification, clustering, and model evaluation (Accuracy, MSE). Build 5+ projects",
    icon: RocketLaunchIcon,
  },
  {
    id: 6,
    title: "Final Outcome",
    duration: "—",
    description:
      "Achieve end-to-end understanding of data science. Ability to analyze data, build ML models, and create dashboards",
    icon: ClipboardDocumentIcon,
  },
];

const Workflow = () => {
  return (
    <div className="bg-blue-50 py-12 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-8">
          🔄 Development Workflow
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="group bg-gray-50 rounded-xl p-6 text-center
                  border border-gray-200
                  transition-all duration-300
                  hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="bg-blue-500 text-white p-4 rounded-xl inline-block mb-4">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Step number */}
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full mx-auto mb-2
                    bg-gray-200 text-gray-800 text-sm
                    transition-all duration-300
                    group-hover:bg-blue-500 group-hover:text-white"
                >
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>

                {/* Duration */}
                <p className="text-blue-500 text-sm mb-2">{step.duration}</p>

                {/* Description */}
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;