import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';




import Info from '../Info';
import  Wel from '../Wel';
import Msg from '../Msg';

function Home() {
  return (
    <>
      <HeroSection />
      <Wel/>
      <Info/>
      <Cards />
      <Msg/>
      <Footer />
    </>
  );
}

export default Home;
