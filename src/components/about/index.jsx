import React from "react";

const AboutSection = ({ directorImage }) => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Director Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={directorImage}
            alt="Yogesh Patel - Director"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Yogesh Patel
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            Yogesh Patel, Director of A & A Property Maintenance Kent Ltd, brings years of
            hands-on experience in property care and maintenance. Committed to delivering
            top-quality workmanship, he ensures every project is completed safely,
            efficiently, and to the highest standards.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            From electrical work and plumbing to painting, carpentry, and flooring,
            Yogesh and his team provide comprehensive services for both residential and
            commercial properties across Kent, Surrey, Essex, and London.
          </p>

          {/* Trust Badge */}
          {/* <div className="mt-6 text-orange-500 font-semibold">
            Fully Insured & Bonded | Serving Kent, Surrey, Essex & London
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
