// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyParticipate from '../components/WhyParticipate';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import './HomePage.css';



const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <SidePanel />
        <Hero />
      </div>
      <About />
      <WhyParticipate />
      <Gallery />
      <CTA />
      <Roadmap />
      <Footer />
    </>
  );
};

export default HomePage;
