import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Get In Touch</h2>
            <p className="text-barber-gray-600 mb-8">
              Have questions or want to book an appointment? Contact us directly or use our online booking platforms.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin size={24} className="text-barber-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Our Location</h3>
                  <p className="text-barber-gray-600">6585 Seminole Blvd, Seminole, FL 33772</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-barber-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Phone Number</h3>
                  <p className="text-barber-gray-600">
                    <a href="tel:+17274597914" className="hover:text-barber-red transition-colors">(727) 459-7914</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={24} className="text-barber-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email Address</h3>
                  <p className="text-barber-gray-600">
                    <a href="mailto:info@elchopyou.com" className="hover:text-barber-red transition-colors">info@elchopyou.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-barber-red mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-barber-gray-600">Tuesday - Friday: 9:30 AM – 6:00 PM</p>
                  <p className="text-barber-gray-600">Saturday: 9:00 AM – 4:00 PM</p>
                  <p className="text-barber-gray-600">Sunday & Monday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="space-x-4">
              <a href="https://booksy.com/en-us/926960_el-chop-you-barbershop_barber-shop_15992_seminole#ba_s=seo" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Book on Booksy</Button>
              </a>
              <a href="https://app.thecut.co/barbers/negroncuts/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Book on The Cut</Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-lg overflow-hidden shadow-custom">
              <img 
                src="https://i.postimg.cc/pdQqkq2L/Screenshot-2025-05-17-at-10-04-44-PM.png"
                alt="El Chop You Barbershop Store Front"
                className="w-full h-[400px] object-contain bg-white"
              />
            </div>
            
            <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-custom">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.493162064019!2d-82.79179402459652!3d27.839932577066937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fdf5ed4757b3%3A0xd89164ccc60dd0bf!2s6585%20Seminole%20Blvd%2C%20Seminole%2C%20FL%2033772!5e0!3m2!1sen!2sus!4v1694558845383!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="El Chop You Barbershop Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;