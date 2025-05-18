import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';
import { Service } from '../../types';

type ServiceCardProps = {
  service: Service;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-custom rounded-lg overflow-hidden h-full hover:shadow-custom-lg transition-shadow duration-300"
    >
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-2">{service.name}</h3>
        <div className="flex items-center text-barber-gray-700 mb-1">
          <DollarSign size={16} className="mr-1" />
          <span>{service.price}</span>
        </div>
        <div className="flex items-center text-barber-gray-700 mb-3">
          <Clock size={16} className="mr-1" />
          <span>{service.duration}</span>
        </div>
        {service.description && (
          <p className="text-barber-gray-600 text-sm mt-2">{service.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;