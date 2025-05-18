import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-custom flex flex-col h-full"
    >
      <Quote size={24} className="text-barber-red mb-4 opacity-80" />
      <p className="text-barber-gray-700 italic mb-4 flex-grow">{testimonial.text}</p>
      <div className="mt-auto">
        <p className="font-semibold text-barber-gray-800">{testimonial.author}</p>
        <p className="text-sm text-barber-gray-600">{testimonial.source}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;