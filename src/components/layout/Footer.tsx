import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Scissors, Instagram, Facebook, Calendar } from 'lucide-react';
import { socialLinks } from '../../data/social';

const Footer: React.FC = () => {
  return (
    <footer className="bg-barber-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="text-barber-red mr-2" size={24} />
              <h3 className="font-heading text-xl font-bold">El Chop You</h3>
            </div>
            <p className="mb-6">Veteran-owned and operated barbershop providing quality cuts in a welcoming environment.</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-barber-red mr-2 mt-1 flex-shrink-0" />
                <p>6585 Seminole Blvd, Seminole, FL 33772</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-barber-red mr-2 flex-shrink-0" />
                <a href="tel:+17274597914" className="hover:text-barber-red transition-colors">(727) 459-7914</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-barber-red mr-2 flex-shrink-0" />
                <a href="mailto:info@elchopyou.com" className="hover:text-barber-red transition-colors">info@elchopyou.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock size={18} className="text-barber-red mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tuesday - Friday</p>
                  <p>9:30 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="text-barber-red mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p>9:00 AM – 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="text-barber-red mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday & Monday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Link to="/" className="hover:text-barber-red transition-colors">Home</Link>
              <Link to="/about" className="hover:text-barber-red transition-colors">About</Link>
              <Link to="/services" className="hover:text-barber-red transition-colors">Services</Link>
              <Link to="/gallery" className="hover:text-barber-red transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-barber-red transition-colors">Contact</Link>
              <a href="https://booksy.com/en-us/926960_el-chop-you-barbershop_barber-shop_15992_seminole#ba_s=seo" target="_blank" rel="noopener noreferrer" className="hover:text-barber-red transition-colors">Book Now</a>
            </div>

            <h3 className="font-heading text-xl font-bold mt-6 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                let Icon;
                switch (link.icon) {
                  case 'Instagram':
                    Icon = Instagram;
                    break;
                  case 'Facebook':
                    Icon = Facebook;
                    break;
                  case 'Calendar':
                    Icon = Calendar;
                    break;
                  case 'Scissors':
                    Icon = Scissors;
                    break;
                  default:
                    Icon = Scissors;
                }
                
                return (
                  <a 
                    key={link.id}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-barber-red transition-colors"
                    title={link.name}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-barber-gray-800 mt-8 pt-6 text-center text-barber-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} El Chop You Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;