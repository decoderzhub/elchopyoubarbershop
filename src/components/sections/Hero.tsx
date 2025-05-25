import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Book Appointment',
  ctaLink = 'https://booksy.com/en-us/926960_el-chop-you-barbershop_barber-shop_15992_seminole#ba_s=seo',
  bgImage = 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
}) => {
  return (
    <div 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-barber-black/20 to-barber-black/60"></div>
      
      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">{subtitle}</p>
          <a 
            href={ctaLink} 
            target="_blank" 
            rel="noopener noreferrer"
            data-business="elchopyoubarbershop"
            data-apikey="bk4n_RImZGh14L7LqFdO3lH5MZw4ajuYFF3E0"
          >
            <Button variant="primary" size="lg">{ctaText}</Button>
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-barber-black to-transparent"></div>
    </div>
  );
};

export default Hero