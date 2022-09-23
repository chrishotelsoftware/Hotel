import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Services from '../Services';

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
