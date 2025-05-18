import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Award, Users, Sparkles } from 'lucide-react';
import AboutSection from '../components/sections/AboutSection';
import BookingSection from '../components/sections/BookingSection';

const About: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12 text-barber-red" />,
      title: "Inclusivity",
      description: "We welcome everyone regardless of race, gender, or sexual preference. At El Chop You, you're family."
    },
    {
      icon: <Award className="w-12 h-12 text-barber-red" />,
      title: "Excellence",
      description: "We're committed to delivering top-quality service and exceptional results with every visit."
    },
    {
      icon: <Scissors className="w-12 h-12 text-barber-red" />,
      title: "Craftsmanship",
      description: "We take pride in our work and approach each haircut as a unique opportunity to create something special."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-barber-red" />,
      title: "Service",
      description: "Our veteran-owned business brings military values of respect, integrity, and dedication to every client interaction."
    }
  ];

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
                About Us
              </h1>
              <p className="text-lg text-white/80">
                Get to know the story behind El Chop You Barbershop and our commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <AboutSection />

      <section className="py-16 bg-barber-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Values</h2>
              <p className="text-barber-gray-600 max-w-2xl mx-auto">
                At El Chop You Barbershop, we operate with a set of core values that guide everything we do.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-custom text-center h-full"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-barber-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
};

export default About;