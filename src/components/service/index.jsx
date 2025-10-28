import React from "react";
import {
  Zap,
  Droplet,
  Hammer,
  Brush,
  Layers,
  Ruler,
  Home,
  Paintbrush,
  DoorOpen,
  Key,
  PanelRight,
  KeyRound,
} from "lucide-react";

const services = [
  {
    icon: <Zap size={30} className="text-orange-500" />,
    title: "Electrical Work",
    desc: "Safe and professional wiring, repairs, and installations.",
  },
  {
    icon: <Droplet size={30} className="text-orange-500" />,
    title: "Plumbing",
    desc: "Reliable plumbing maintenance and leak fixes done right.",
  },
  {
    icon: <Layers size={30} className="text-orange-500" />,
    title: "Flooring",
    desc: "Quality flooring solutions for homes and commercial spaces.",
  },
  {
    icon: <Home size={30} className="text-orange-500" />,
    title: "Carpet Installation",
    desc: "Comfortable and stylish carpet fitting for every room.",
  },
  {
    icon: <Paintbrush size={30} className="text-orange-500" />,
    title: "Wallpapering",
    desc: "Smooth, detailed wallpaper installation for a modern finish.",
  },
  {
    icon: <Brush size={30} className="text-orange-500" />,
    title: "Painting",
    desc: "Interior and exterior painting with flawless results.",
  },
  {
    icon: <Hammer size={30} className="text-orange-500" />,
    title: "Carpentry",
    desc: "Expert woodwork repairs, fittings, and custom furniture.",
  },
  {
    icon: <Ruler size={30} className="text-orange-500" />,
    title: "Additions",
    desc: "Extensions, upgrades, and home improvements built to last.",
  },
  {
    icon: <DoorOpen size={30} className="text-orange-500" />,
    title: "Double/Triple Glazing",
    desc: "High-performance glazing solutions for energy efficiency and security.",
  },
  {
    icon: <PanelRight size={30} className="text-orange-500" />,
    title: "UPVC & Aluminium Windows and Doors",
    desc: "Durable, modern, and weather-resistant installations.",
  },
  {
    icon: <KeyRound size={30} className="text-orange-500" />,
    title: "Composite Doors",
    desc: "Stylish, strong, and insulated doors for maximum protection.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12">
          A & A Property Maintenance Kent Ltd offers a full range of property
          care and improvement solutions — fully insured, fully reliable.
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center items-center bg-orange-50 rounded-full p-3">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Tagline
        <div className="mt-12 text-gray-700 text-sm md:text-base">
          Fully Insured & Bonded | Serving Kent, Surrey, Essex & All Parts of London
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
