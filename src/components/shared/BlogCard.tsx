import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageSrc: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  imageSrc,
  slug,
  author,
  index = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group overflow-hidden flex flex-col h-full"
    >
      <Link to={`/blog/${slug}`} className="relative block overflow-hidden rounded-lg mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
            {category}
          </span>
        </div>
      </Link>
      <div className="flex-grow">
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm text-gray-700">{author.name}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-3">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;