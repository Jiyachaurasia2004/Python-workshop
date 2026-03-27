import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-white text-indigo-600 rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 animate-bounce border border-blue-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
      )}

      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba59] hover:scale-110 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 3.5l-2.9 2.9z"></path></svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
