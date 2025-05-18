import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Clock, MapPin, UserCheck } from 'lucide-react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-barber-red" />,
      title: 'Convenient Hours',
      description: 'Open Tuesday through Saturday with flexible hours to accommodate your schedule.'
    },
    {
      icon: <UserCheck className="w-10 h-10 text-barber-red" />,
      title: 'Veteran-Owned',
      description: 'Proud to be a veteran-owned and operated business serving the Seminole community.'
    },
    {
      icon: <MapPin className="w-10 h-10 text-barber-red" />,
      title: 'Great Location',
      description: 'Conveniently located on Seminole Blvd with ample parking for our clients.'
    },
    {
      icon: <Scissors className="w-10 h-10 text-barber-red" />,
      title: 'Quality Service',
      description: 'Experienced barbers delivering exceptional haircuts and grooming services.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="El Chop You Barbershop" 
                className="rounded-lg shadow-custom-lg z-10 relative"
              />
              <div className="absolute top-10 -right-10 h-full w-full border-4 border-barber-red rounded-lg -z-10 hidden lg:block"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="h-px bg-barber-red w-12"></div>
              <Scissors size={20} className="text-barber-red mx-2" />
              <div className="h-px bg-barber-red w-12"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Our Barbershop</h2>
            <p className="text-barber-gray-600 mb-6">
              El Chop You Barbershop is a Veteran-owned and operated establishment that's building a welcoming environment for everyone. It doesn't matter your race, gender, or sexual preference—we will ensure you are treated like family.
            </p>
            <p className="text-barber-gray-600 mb-8">
              Come check us out; we promise you won't regret your decision, and you might just find your permanent barber here.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-barber-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <a href="https://booksy.com/en-us/instant-experiences/widget/750825" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Book Your Appointment</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;