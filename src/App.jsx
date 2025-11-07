// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import logo from "/aanda-logo.svg";
import whiteLogo from "/white-logo.svg";
import ServicesSection from "./components/service";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about";
import director from "/about/about.webp"
import ContactSection from "./components/contact";
import GallerySection from "./components/gallery";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection logo={whiteLogo} />
      <ServicesSection />
      <AboutSection directorImage={director} />
      <GallerySection />
      <ContactSection />
      <Footer logo={whiteLogo} />
    </div>
  );
}
