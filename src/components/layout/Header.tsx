import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Scissors, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-barber-black shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Scissors className="text-barber-red mr-2" size={24} />
            <span className="font-heading font-bold text-xl text-white">El Chop You</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-white hover:text-barber-red transition-colors font-medium ${
                    isActive ? 'text-barber-red' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a href="tel:+17274597914" className="lg:hidden">
              <Button variant="primary" size="sm">
                <Phone size={16} className="mr-1" />
                Call Now
              </Button>
            </a>
            <a href="https://booksy.com/en-us/926960_el-chop-you-barbershop_barber-shop_15992_seminole#ba_s=seo" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
              <Button variant="primary">Book Appointment</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-barber-black border-t border-barber-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-white hover:text-barber-red transition-colors font-medium text-lg ${
                        isActive ? 'text-barber-red' : ''
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="flex space-x-2 pt-2">
                  <a href="tel:+17274597914" className="flex-1">
                    <Button variant="outline" fullWidth>
                      <Phone size={16} className="mr-1" />
                      Call
                    </Button>
                  </a>
                  <a href="https://booksy.com/en-us/926960_el-chop-you-barbershop_barber-shop_15992_seminole#ba_s=seo" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="primary" fullWidth>Book</Button>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header