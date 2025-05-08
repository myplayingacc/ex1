import React from 'react';
import { motion, AnimationControls } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  index: number;
  floatAnimation?: any;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description, index, floatAnimation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      animate={floatAnimation}
      className="p-6 flex flex-col items-center text-center"
    >
      <span className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">{value}</span>
      <h3 className="text-md md:text-lg font-medium text-gray-800 mb-1">{label}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </motion.div>
  );
};

export default StatCard;