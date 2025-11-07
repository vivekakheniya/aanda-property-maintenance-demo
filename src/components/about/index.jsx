// import React from "react";

// const AboutSection = ({ directorImage }) => {
//   return (
//     <section id="about" className="py-16 px-6 bg-white">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">
//         {/* Director Image */}
//         <div className="flex-shrink-0 w-full md:w-1/3">
//           <img
//             src={directorImage}
//             alt="Yogesh Patel - Director"
//             className="rounded-xl shadow-lg w-full object-cover"
//           />
//         </div>

//         {/* About Text */}
//         <div className="md:w-2/3 text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Meet Yogesh Patel
//           </h2>
//           <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
//             Yogesh Patel, Director of A & A Property Maintenance Kent Ltd, brings years of
//             hands-on experience in property care and maintenance. Committed to delivering
//             top-quality workmanship, he ensures every project is completed safely,
//             efficiently, and to the highest standards.
//           </p>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             From electrical work and plumbing to painting, carpentry, and flooring,
//             Yogesh and his team provide comprehensive services for both residential and
//             commercial properties across Kent, Surrey, Essex, and London.
//           </p>

//           {/* Trust Badge */}
//           {/* <div className="mt-6 text-orange-500 font-semibold">
//             Fully Insured & Bonded | Serving Kent, Surrey, Essex & London
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";

const AboutSection = ({ directorImage }) => {
  return (
    <section id="about" className="py-16 px-8 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Company / Director Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={directorImage}
            alt="A & A Property Maintenance Kent Ltd"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* About Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About A & A Property Maintenance Kent Ltd
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            A & A Property Maintenance Kent Ltd is a trusted, professional
            company offering a complete range of property maintenance and
            improvement services for both residential and commercial clients.
            With a focus on quality, reliability, and customer satisfaction, the
            team ensures that every job — big or small — is handled with expert
            craftsmanship and care.
          </p>

          <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
            From <strong>electrical work, plumbing, and flooring</strong> to
            <strong> painting, carpentry, and wallpapering</strong>, A & A
            Property Maintenance provides comprehensive solutions tailored to
            your needs. The company is <strong>fully insured and bonded</strong>
            , giving clients peace of mind with every project.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Led by <strong>Yogesh Patel</strong>, a dedicated professional with
            years of experience, A & A Property Maintenance proudly serves
            <strong> Kent, Surrey, Essex, and all parts of London</strong>,
            including Central London and the surrounding areas.
          </p>

          {/* Credibility Tagline */}
          <div className="mt-6 text-orange-500 font-semibold">
            Fully Insured & Bonded | Serving Kent, Surrey, Essex & London
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
