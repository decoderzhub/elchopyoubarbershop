import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

type TestimonialsSectionProps = {
  limit?: number;
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ limit }) => {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  
  return (
    <section className="py-16 bg-white">
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
              <MessageSquare size={20} className="text-barber-red mx-2" />
              <div className="h-px bg-barber-red w-12"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Client Testimonials</h2>
            <p className="text-barber-gray-600 max-w-2xl mx-auto">
              Here's what our clients are saying about their experience at El Chop You Barbershop.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;