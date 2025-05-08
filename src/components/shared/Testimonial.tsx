import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  imageSrc: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, rating, imageSrc, index }) => {
  const floatAnimation = {
    y: [0, -2, 0],
    transition: {
      duration: 7 + index % 2,
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
      className="bg-white p-6 rounded-lg shadow-md relative"
    >
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`inline-block w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        <span className="text-3xl text-primary-300 leading-none">"</span>
        <p className="italic">{quote}</p>
        <span className="text-3xl text-primary-300 leading-none float-right">"</span>
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={imageSrc} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;