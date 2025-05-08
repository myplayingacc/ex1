import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  slug: string;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, category, description, imageSrc, slug, index }) => {
  const floatAnimation = {
    y: [0, -3, 0],
    transition: {
      duration: 6 + index % 2,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror" as const
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      animate={floatAnimation}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-w-16 aspect-h-10 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-medium text-white bg-primary-500 px-2 py-1 rounded-full">{category}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link
          to={`/portfolio/${slug}`}
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;