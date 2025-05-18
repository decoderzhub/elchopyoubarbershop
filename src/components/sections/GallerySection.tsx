import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import GalleryImage from '../ui/GalleryImage';
import Button from '../ui/Button';
import { galleryImages } from '../../data/gallery';

type GallerySectionProps = {
  limit?: number;
  showButton?: boolean;
};

const GallerySection: React.FC<GallerySectionProps> = ({ 
  limit, 
  showButton = true 
}) => {
  const displayImages = limit ? galleryImages.slice(0, limit) : galleryImages;
  
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
              <Image size={20} className="text-barber-red mx-2" />
              <div className="h-px bg-barber-red w-12"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Gallery</h2>
            <p className="text-barber-gray-600 max-w-2xl mx-auto">
              Take a look at some of our work and the styles we've created for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayImages.map((image) => (
            <GalleryImage key={image.id} image={image} />
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
                onClick={() => window.location.href = '/gallery'}
              >
                View Full Gallery
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;