import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = ({ logo }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div className="flex flex-col items-start">
          {/* <img src={logo} alt="A & A Property Maintenance Kent Ltd" className="h-12 w-auto mb-4" /> */}
           <span className="font-semibold text-lg text-orange-500 cursor-pointer">
            A & A 
          </span>
          <p className="text-sm leading-relaxed">
            Trusted professionals offering quality property maintenance across Kent, Surrey,
            Essex, and London. Fully insured & bonded for your peace of mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-orange-500" />
              16 Goodmead Road, Orpington, BR6 0HX
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-orange-500" />
              <a href="tel:07432702991" className="hover:text-orange-500 transition">
                07432 702991
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-orange-500" />
              <a href="mailto:yogesh2033@yahoo.co.in" className="hover:text-orange-500 transition">
                yogesh2033@yahoo.co.in
              </a>
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="hover:text-orange-500 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} A & A Property Maintenance Kent Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
