import React, { useState } from "react";
import { Menu, X, Phone, Home, Wrench, Info, Mail } from "lucide-react";
import logo from "/aanda-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero", icon: <Home size={18} /> },
    { name: "Services", href: "#services", icon: <Wrench size={18} /> },
    { name: "About", href: "#about", icon: <Info size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-10 md:px-12 lg:px-16 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto max-h-12 object-contain" // slightly taller for clarity
          />
        </div>

        {/* <span className="font-semibold text-lg text-gray-800 hover:text-orange-500 cursor-pointer">
            A & A 
          </span> */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 hover:text-orange-500 transition"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call Now Button */}
        <a
          href="tel:07432702991"
          className="hidden md:flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col gap-4 px-5 py-4 text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 hover:text-orange-500 transition"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <a
              href="tel:07432702991"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
