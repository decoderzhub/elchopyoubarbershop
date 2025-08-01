import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';
import ServicesSection from '../components/sections/ServicesSection';
import BookingSection from '../components/sections/BookingSection';

const Services: React.FC = () => {
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
                <Scissors size={20} className="text-barber-red mx-2" />
                <div className="h-px bg-barber-red w-12"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Services
              </h1>
              <p className="text-lg text-white/80">
                Explore our complete range of professional barbering services.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <ServicesSection showButton={false} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Service Information</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold mb-3">MVP Experience</h3>
                <p className="text-barber-gray-600 mb-4">
                  The MVP treatment includes a hot towel, premium styling products, and an enhanced grooming experience. 
                  It's perfect for when you want to treat yourself to something special.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-heading font-bold mb-3">Braiding Services</h3>
                <p className="text-barber-gray-600 mb-4">
                  Our braiding services are priced starting at the listed price. Final pricing may vary based on 
                  hair length, thickness, and complexity of the desired style. Please consult with your barber for a specific quote.
                </p>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
};

export default Services;