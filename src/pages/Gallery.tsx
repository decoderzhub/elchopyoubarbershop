import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import GallerySection from '../components/sections/GallerySection';
import BookingSection from '../components/sections/BookingSection';

const Gallery: React.FC = () => {
  return (
    <>
      <div className="pt-20 bg-header-pattern bg-cover bg-center text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-2">
                <div className="h-px bg-barber-red w-12"></div>
                <Image size={20} className="text-barber-red mx-2" />
                <div className="h-px bg-barber-red w-12"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Gallery
              </h1>
              <p className="text-lg text-white/80">
                View examples of our work and the styles we offer at El Chop You Barbershop.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <GallerySection showButton={false} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6">Follow Us on Instagram</h2>
            <p className="text-barber-gray-600 max-w-2xl mx-auto mb-6">
              Check out our Instagram page for the latest styles, behind-the-scenes content, and special promotions.
            </p>
            <div className="flex items-center justify-center">
              <a 
                href="https://www.instagram.com/el_chop_you_barbershop_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-barber-red hover:text-barber-blue transition-colors font-bold text-lg"
              >
                @el_chop_you_barbershop_
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <BookingSection />
    </>
  );
};

export default Gallery;