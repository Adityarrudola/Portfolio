import React from "react";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Aditya Rudola</h2>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Aditya Rudola. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
