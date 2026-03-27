import React from "react";

const faqs = [
  {
    question: "Who can attend this workshop?",
    answer:
      "This workshop is ideal for students, beginners, and anyone who wants to start a career as a Python Developer, including Web Development, Data Science, and Automation.",
  },
  {
    question: "Is this workshop online or offline?",
    answer:
      "The workshop will be conducted online. All session details and joining links will be shared after registration.",
  },
  {
    question: "Will career guidance be provided?",
    answer:
      "Yes, we provide complete career guidance including roadmap, resume tips, interview preparation, and industry insights for Python roles.",
  },
  {
    question: "How can I register for the workshop?",
    answer:
      "Fill out the registration form above and submit your details. Our team will contact you shortly.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-[#eaf4f8]">
      <div className="max-w-5xl mx-auto">

        {/* Outer Gradient Box */}
        <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 border border-blue-300 rounded-2xl p-8 shadow-md">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10 flex items-center justify-center gap-2">
            ❓ Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl p-6 hover:shadow-md transition"
              >
                <h3 className="text-blue-700 font-semibold text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;