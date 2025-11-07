import React from "react";

const HeroSection = ({ logo }) => {
  return (
    <section
      id="hero"
      className="relative bg-gray-900 text-white h-[90vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091226825-b0f6f56bfa3a?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Logo */}
        <img
          src={logo}
          alt="A & A Property Maintenance Kent Ltd"
          className="mx-auto h-20 w-auto mb-6"
        />
        {/* <span className="font-semibold text-lg text-orange-500 cursor-pointer">A & A</span> */}

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4 text-white">
          Trusted Property Maintenance Across Kent, Surrey & London
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
          Professional electrical, plumbing, flooring, painting, and carpentry
          services. Fully insured & bonded for your peace of mind.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-white"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:border-orange-500 transition text-white"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-sm md:text-base text-gray-300 font-medium">
          Fully Insured & Bonded | Serving Kent, Surrey, Essex & London
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
