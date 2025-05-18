import React from 'react';
import { motion } from 'framer-motion';
import { GalleryImage as GalleryImageType } from '../../types';

type GalleryImageProps = {
  image: GalleryImageType;
};

const GalleryImage: React.FC<GalleryImageProps> = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-lg shadow-custom group relative"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4 text-sm">{image.alt}</p>
      </div>
    </motion.div>
  );
};

export default GalleryImage;