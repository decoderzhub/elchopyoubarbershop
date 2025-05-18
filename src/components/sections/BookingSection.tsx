import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Scissors } from 'lucide-react';
import Button from '../ui/Button';

const BookingSection: React.FC = () => {
  return (
    <section className="py-16 bg-header-pattern bg-cover bg-center text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-2">
              <div className="h-px bg-barber-red w-12"></div>
              <Calendar size={20} className="text-barber-red mx-2" />
              <div className="h-px bg-barber-red w-12"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Book Your Appointment</h2>
            <p className="text-white/80 mb-8">
              Ready for a fresh cut? Book your appointment now using one of our online booking platforms or give us a call.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Scissors size={32} className="text-barber-red mb-4 mx-auto" />
                <h3 className="font-heading font-bold text-xl mb-2">Book on Booksy</h3>
                <p className="text-white/80 mb-4">
                  Use our Booksy profile to check availability and book your appointment online.
                </p>
                <a href="https://booksy.com/en-us/926960_el-chop-you-barbershop_barber-shop_15992_seminole#ba_s=seo" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" fullWidth>Book on Booksy</Button>
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Calendar size={32} className="text-barber-red mb-4 mx-auto" />
                <h3 className="font-heading font-bold text-xl mb-2">Book on The Cut</h3>
                <p className="text-white/80 mb-4">
                  Use The Cut app to book and manage your appointments with us.
                </p>
                <a href="https://app.thecut.co/barbers/negroncuts/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" fullWidth>Book on The Cut</Button>
                </a>
              </div>
            </div>
            
            <p className="mt-8 text-white/80">
              Prefer to call? Reach us at <a href="tel:+17274597914" className="text-barber-red font-bold">(727) 459-7914</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;