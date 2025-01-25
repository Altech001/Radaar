// import React, { useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import Features from '../components/Features';
// import Leaderboard from '../components/Leaderboard';
// import Projects from '../components/Projects';
// import AboutUs from '../components/AboutUs';
// import Testimonials from '../components/Testimonials';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

// declare global {
//   interface Window {
//     particlesJS: (
//       elementId: string,
//       config: unknown
//     ) => void;
//   }
// }

// const Index = () => {

//   return (
//     <div id="particles-js" className="min-h-screen">
//       <Navbar />
//       <Hero />
      // <Features />
      // <AboutUs />
      // <Projects />
      // <Leaderboard />
      // <Testimonials />
      // <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Index;

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Leaderboard from "@/components/Leaderboard";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Initialize particles.js
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#C100F7" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#C100F7",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
          },
        },
        retina_detect: true
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div id="particles-js" className="particles-bg"></div>
      <Navbar />
      <main className="space-y-20">
        <div className="backdrop-blur-sm">
        <Hero  />
        </div>
        <Features />
      <AboutUs />
      <Projects />
      <Team/>
      <Leaderboard />
      <Testimonials />
      <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;