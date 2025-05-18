import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { services } from '../../data/services';

type ServicesSectionProps = {
  limit?: number;
  showButton?: boolean;
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  limit, 
  showButton = true 
}) => {
  const displayServices = limit ? services.slice(0, limit) : services;
  
  return (
    <section className="py-16 bg-barber-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-2">
              <div className="h-px bg-barber-red w-12"></div>
              <Scissors size={20} className="text-barber-red mx-2" />
              <div className="h-px bg-barber-red w-12"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-barber-gray-600 max-w-2xl mx-auto">
              We offer a full range of barbering services to keep you looking your best.
              From classic cuts to modern styles, our experienced barbers deliver quality results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {showButton && limit && (
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                variant="secondary"
                onClick={() => window.location.href = '/services'}
              >
                View All Services
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;