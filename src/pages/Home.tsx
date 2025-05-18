import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import GallerySection from '../components/sections/GallerySection';
import BookingSection from '../components/sections/BookingSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero 
        title="El Chop You Barbershop"
        subtitle="Veteran-owned barbershop providing premium haircuts and beard services in a welcoming environment for everyone."
      />
      <AboutSection />
      <ServicesSection limit={8} showButton={true} />
      <GallerySection limit={4} showButton={true} />
      <TestimonialsSection limit={3} />
      <BookingSection />
    </>
  );
};

export default Home;