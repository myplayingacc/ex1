import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CtaProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  hasDecoration?: boolean;
}

const CallToAction: React.FC<CtaProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  hasDecoration = true,
}) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden">
      {hasDecoration && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -right-40 -top-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white opacity-10 rounded-full"></div>
          </div>
        </>
      )}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-8 md:mb-10"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={primaryButtonLink}
              className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {secondaryButtonText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;