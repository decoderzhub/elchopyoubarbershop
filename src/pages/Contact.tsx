import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
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
                <MapPin size={20} className="text-barber-red mx-2" />
                <div className="h-px bg-barber-red w-12"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-white/80">
                Get in touch with El Chop You Barbershop. We're here to answer your questions and help you book your next appointment.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default Contact;