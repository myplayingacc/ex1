import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter, BarChart, LineChart, TrendingUp, Users, Target, Award, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/shared/SectionHeading';
import ServiceCard from '../components/shared/ServiceCard';
import Testimonial from '../components/shared/Testimonial';
import StatCard from '../components/shared/StatCard';
import PortfolioCard from '../components/shared/PortfolioCard';
import CallToAction from '../components/shared/CallToAction';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  // Define floating animations
  const floatAnimation = {
    y: [0, -4, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror" as const
    }
  };
  
  const floatSlowAnimation = {
    y: [0, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut", 
      repeatType: "mirror" as const
    }
  };
  
  const floatSideAnimation = {
    x: [0, 3, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror" as const
    }
  };
  
  // Define features arrays to avoid TypeScript errors
  const managementFeatures = [
    t('services.socialMediaManagement.features.0'),
    t('services.socialMediaManagement.features.1'),
    t('services.socialMediaManagement.features.2'),
    t('services.socialMediaManagement.features.3'),
    t('services.socialMediaManagement.features.4')
  ];
  
  const advertisingFeatures = [
    t('services.paidSocialAdvertising.features.0'),
    t('services.paidSocialAdvertising.features.1'),
    t('services.paidSocialAdvertising.features.2'),
    t('services.paidSocialAdvertising.features.3'),
    t('services.paidSocialAdvertising.features.4')
  ];
  
  const strategyFeatures = [
    t('services.socialMediaStrategy.features.0'),
    t('services.socialMediaStrategy.features.1'),
    t('services.socialMediaStrategy.features.2'),
    t('services.socialMediaStrategy.features.3'),
    t('services.socialMediaStrategy.features.4')
  ];
  
  const influencerFeatures = [
    t('services.influencerMarketing.features.0'),
    t('services.influencerMarketing.features.1'),
    t('services.influencerMarketing.features.2'),
    t('services.influencerMarketing.features.3'),
    t('services.influencerMarketing.features.4')
  ];
  
  const contentFeatures = [
    t('services.contentCreation.features.0'),
    t('services.contentCreation.features.1'),
    t('services.contentCreation.features.2'),
    t('services.contentCreation.features.3'),
    t('services.contentCreation.features.4')
  ];
  
  const trainingFeatures = [
    t('services.socialMediaTraining.features.0'),
    t('services.socialMediaTraining.features.1'),
    t('services.socialMediaTraining.features.2'),
    t('services.socialMediaTraining.features.3'),
    t('services.socialMediaTraining.features.4')
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
        <div className="absolute right-0 top-1/3 w-1/2 h-1/2 bg-gradient-radial from-secondary-100/50 to-transparent opacity-60 -z-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary-600 uppercase rounded-full bg-primary-50 mb-6">
                {t('home.hero.tagline')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('home.hero.mainTitle')}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="border border-gray-300 hover:border-primary-500 hover:bg-primary-50 text-gray-700 hover:text-primary-500 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  {t('common.services')}
                </Link>
              </div>
              
              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-4">{t('home.hero.trustedBy')}</p>
                <div className="flex flex-wrap items-center gap-8">
                  <Facebook className="h-6 w-auto text-blue-600 opacity-80" />
                  <Instagram className="h-6 w-auto text-pink-600 opacity-80" />
                  <Twitter className="h-6 w-auto text-blue-400 opacity-80" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto text-black opacity-80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Social Media Marketing"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-500 rounded-lg -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-500 rounded-lg -z-10"></div>
                
                <motion.div 
                  animate={floatSideAnimation}
                  className="absolute -bottom-16 -right-16 bg-white rounded-lg shadow-lg p-4 w-64"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">{t('home.hero.engagementGrowth')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-success-500 w-3/4 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">+74%</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={floatSlowAnimation}
                  className="absolute -top-10 -left-8 bg-white rounded-lg shadow-lg p-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <span className="w-2 h-6 bg-primary-500 rounded flex-shrink-0"></span>
                      <span className="w-2 h-4 bg-primary-300 rounded flex-shrink-0 self-end"></span>
                      <span className="w-2 h-8 bg-primary-600 rounded flex-shrink-0"></span>
                      <span className="w-2 h-5 bg-primary-400 rounded flex-shrink-0 self-end"></span>
                    </div>
                    <span className="text-sm font-medium">+127%</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={floatAnimation}
                  className="absolute top-1/2 -right-12 bg-white rounded-full shadow-lg p-2"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-600">+</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={floatSideAnimation}
                  className="absolute top-1/4 -left-10 bg-white rounded-full shadow-lg p-2"
                >
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary-600">✓</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border border-gray-100 rounded-lg shadow-sm divide-x divide-y md:divide-y-0 divide-gray-100">
              <StatCard
                value="98%"
                label={t('home.stats.clientRetention')}
                description={t('home.stats.clientRetentionDesc')}
                index={0}
                floatAnimation={floatSlowAnimation}
              />
              <StatCard
                value="250+"
                label={t('home.stats.happyClients')}
                description={t('home.stats.happyClientsDesc')}
                index={1}
                floatAnimation={floatSlowAnimation}
              />
              <StatCard
                value="3.6M+"
                label={t('home.stats.socialEngagements')}
                description={t('home.stats.socialEngagementsDesc')}
                index={2}
                floatAnimation={floatSlowAnimation}
              />
              <StatCard
                value="15+"
                label={t('home.stats.yearsExperience')}
                description={t('home.stats.yearsExperienceDesc')}
                index={3}
                floatAnimation={floatSlowAnimation}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('home.services.title')}
            title={t('home.services.sectionTitle')}
            description={t('home.services.sectionDescription')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={BarChart}
              title={t('services.socialMediaManagement.title')}
              description={t('services.socialMediaManagement.description')}
              features={managementFeatures}
              index={0}
            />
            
            <ServiceCard
              icon={LineChart}
              title={t('services.paidSocialAdvertising.title')}
              description={t('services.paidSocialAdvertising.description')}
              features={advertisingFeatures}
              index={1}
            />
            
            <ServiceCard
              icon={TrendingUp}
              title={t('services.socialMediaStrategy.title')}
              description={t('services.socialMediaStrategy.description')}
              features={strategyFeatures}
              index={2}
            />
            
            <ServiceCard
              icon={Users}
              title={t('services.influencerMarketing.title')}
              description={t('services.influencerMarketing.description')}
              features={influencerFeatures}
              index={3}
            />
            
            <ServiceCard
              icon={Target}
              title={t('services.contentCreation.title')}
              description={t('services.contentCreation.description')}
              features={contentFeatures}
              index={4}
            />
            
            <ServiceCard
              icon={Award}
              title={t('services.socialMediaTraining.title')}
              description={t('services.socialMediaTraining.description')}
              features={trainingFeatures}
              index={5}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              {t('home.services.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('home.portfolio.subtitle')}
            title={t('home.portfolio.title')}
            description={t('home.portfolio.description')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <PortfolioCard
              title="Retail Brand Transformation"
              category="E-commerce"
              description="How we helped a retail brand increase online sales by 156% through strategic social media campaigns."
              imageSrc="https://images.pexels.com/photos/7414248/pexels-photo-7414248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="retail-brand-transformation"
              index={0}
            />
            
            <PortfolioCard
              title="SaaS Growth Strategy"
              category="B2B Technology"
              description="Developing a comprehensive social strategy that generated 3x lead growth for a B2B SaaS company."
              imageSrc="https://images.pexels.com/photos/5622311/pexels-photo-5622311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="saas-growth-strategy"
              index={1}
            />
            
            <PortfolioCard
              title="Restaurant Chain Rebranding"
              category="Food & Beverage"
              description="A social-first rebranding campaign that increased foot traffic by 32% across 12 locations."
              imageSrc="https://images.pexels.com/photos/8629080/pexels-photo-8629080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              slug="restaurant-chain-rebranding"
              index={2}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              {t('home.portfolio.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('home.testimonials.sectionTitle')}
            title={t('home.testimonials.title')}
            description={t('home.testimonials.sectionDescription')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Testimonial
              quote="SocialSphere transformed our social media presence completely. Their strategic approach and attention to detail have resulted in a 200% increase in engagement and a significant boost in conversions."
              author="Michael Johnson"
              position="Marketing Director"
              company="TechSolutions Inc."
              rating={5}
              imageSrc="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              index={0}
            />
            
            <Testimonial
              quote="Working with the SocialSphere team has been an amazing experience. Their creativity, responsiveness, and data-driven approach have made a real difference to our brand's social media performance."
              author="Mark Williams"
              position="CEO"
              company="Urban Outfitters"
              rating={5}
              imageSrc="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              index={1}
            />
            
            <Testimonial
              quote="The expertise and dedication SocialSphere brings to the table is unmatched. They don't just post content; they develop strategies that align with business goals. The results speak for themselves."
              author="Thomas Chen"
              position="Brand Manager"
              company="Lifestyle Brands Co."
              rating={5}
              imageSrc="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              index={2}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              {t('home.testimonials.readMore')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Platform Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('home.platforms.subtitle')}
            title={t('home.platforms.title')}
            description={t('home.platforms.description')}
            center={true}
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              animate={floatAnimation}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Facebook className="h-8 w-8 text-blue-600" />
              </div>
              <span className="text-gray-900 font-medium">Facebook</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              animate={floatSideAnimation}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                <Instagram className="h-8 w-8 text-pink-600" />
              </div>
              <span className="text-gray-900 font-medium">Instagram</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              animate={floatAnimation}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Twitter className="h-8 w-8 text-blue-400" />
              </div>
              <span className="text-gray-900 font-medium">Twitter</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              viewport={{ once: true }}
              animate={floatSideAnimation}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Linkedin className="h-8 w-8 text-blue-700" />
              </div>
              <span className="text-gray-900 font-medium">LinkedIn</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4 * 0.1 }}
              viewport={{ once: true }}
              animate={floatAnimation}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">YouTube</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
              viewport={{ once: true }}
              animate={floatSideAnimation}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">TikTok</span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('home.whyChooseUs.subtitle')}
            title={t('home.whyChooseUs.title')}
            description={t('home.whyChooseUs.description')}
            center={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.whyChooseUs.dataApproach')}</h3>
              <p className="text-gray-300">
                {t('home.whyChooseUs.dataApproachDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.whyChooseUs.industrySpecialization')}</h3>
              <p className="text-gray-300">
                {t('home.whyChooseUs.industrySpecializationDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.whyChooseUs.creativity')}</h3>
              <p className="text-gray-300">
                {t('home.whyChooseUs.creativityDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <Share2 className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.whyChooseUs.communication')}</h3>
              <p className="text-gray-300">
                {t('home.whyChooseUs.communicationDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.whyChooseUs.team')}</h3>
              <p className="text-gray-300">
                {t('home.whyChooseUs.teamDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('home.whyChooseUs.results')}</h3>
              <p className="text-gray-300">
                {t('home.whyChooseUs.resultsDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title={t('home.contact.ctaTitle')}
        description={t('home.contact.ctaDescription')}
        primaryButtonText={t('home.contact.ctaButton')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('common.learnMore')}
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default HomePage;