import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 pt-12 pb-6 border-t">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">

          {/* CONTACT */}
          <div>
            <h3 className="text-blue-700 font-bold mb-4">CONTACT</h3>
            <ul className="space-y-3 text-sm">
              <li>📞 9752740090, 7471112020</li>
              <li>✉️ beangate.official@gmail.com</li>
              <li>
                📍 Flat No. A-4/501, Kokta Transport Nagar,<br />
                Bhopal (M.P.) – 462022
              </li>
              <li>
                🌐{" "}
                <a
                  href="https://beangates.com"
                  className="text-blue-600 hover:underline"
                >
                  https://beangates.com
                </a>
              </li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-blue-700 font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#details" className="hover:text-blue-600">Details</a></li>
              <li><a href="#modules" className="hover:text-blue-600">Modules</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
              <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#register" className="text-blue-600 font-semibold">Register Now</a></li>
            </ul>
          </div>

          {/* COMPANY INFO */}
          <div>
            <h3 className="text-blue-700 font-bold mb-4 underline">
              BeanGate IT Solutions Pvt. Ltd.
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              BeanGate IT Solutions Pvt. Ltd. is a technology-driven company
              delivering innovative software solutions and professional IT
              services worldwide. We also provide industry-oriented IT training
              with hands-on project experience, empowering students and
              professionals with real-world skills for successful careers.
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
          © {new Date().getFullYear()} BeanGate IT Solutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;