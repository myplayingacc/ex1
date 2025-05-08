import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, TrendingUp, Users, Target, Award, MessageCircle, CheckCircle, MonitorSmartphone, Layers, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/shared/SectionHeading';
import ServiceCard from '../components/shared/ServiceCard';
import CallToAction from '../components/shared/CallToAction';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t('services.hero.title1')} <span className="text-primary-500">{t('services.hero.title2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              {t('services.hero.description')}
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('services.main.subtitle')}
            title={t('services.main.title')}
            description={t('services.main.description')}
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
        </div>
      </section>
      
      {/* Specialized Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('services.specialized.subtitle')}
            title={t('services.specialized.title')}
            description={t('services.specialized.description')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.industry.ecommerce.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.industry.ecommerce.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.ecommerce.features.0')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.ecommerce.features.1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.ecommerce.features.2')}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.industry.b2b.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.industry.b2b.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.b2b.features.0')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.b2b.features.1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.b2b.features.2')}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.industry.food.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.industry.food.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.food.features.0')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.food.features.1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.food.features.2')}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.industry.fashion.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.industry.fashion.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.fashion.features.0')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.fashion.features.1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.fashion.features.2')}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.industry.healthcare.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.industry.healthcare.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.healthcare.features.0')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.healthcare.features.1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.healthcare.features.2')}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.industry.nonprofit.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.industry.nonprofit.description')}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.nonprofit.features.0')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.nonprofit.features.1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t('services.industry.nonprofit.features.2')}</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors inline-flex items-center"
              >
                {t('services.learnMore')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('services.process.subtitle')}
            title={t('services.process.title')}
            description={t('services.process.description')}
            center={true}
          />
          
          <div className="relative mt-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100 hidden md:block"></div>
            
            {[
              {
                title: t('services.process.steps.0.title'),
                description: t('services.process.steps.0.description'),
                icon: Target,
              },
              {
                title: t('services.process.steps.1.title'),
                description: t('services.process.steps.1.description'),
                icon: Layers,
              },
              {
                title: t('services.process.steps.2.title'),
                description: t('services.process.steps.2.description'),
                icon: MessageCircle,
              },
              {
                title: t('services.process.steps.3.title'),
                description: t('services.process.steps.3.description'),
                icon: MonitorSmartphone,
              },
              {
                title: t('services.process.steps.4.title'),
                description: t('services.process.steps.4.description'),
                icon: LineChart,
              },
              {
                title: t('services.process.steps.5.title'),
                description: t('services.process.steps.5.description'),
                icon: Zap,
              },
            ].map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 mb-12 ${
                    isEven ? 'text-left md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'} ${!isEven && 'order-1 md:order-none'}`}>
                    <div className={`md:pl-0 md:pr-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="h-6 w-6 text-primary-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`hidden md:block ${!isEven ? 'md:col-start-1' : 'md:col-start-2'}`}></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 rounded-full hidden md:flex items-center justify-center w-10 h-10 bg-primary-500 text-white z-10">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('services.packages.subtitle')}
            title={t('services.packages.title')}
            description={t('services.packages.description')}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('services.packages.startup.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.packages.startup.description')}</p>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">{t('services.packages.startup.price')}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {[
                    t('services.packages.startup.features.0'),
                    t('services.packages.startup.features.1'),
                    t('services.packages.startup.features.2'),
                    t('services.packages.startup.features.3'),
                    t('services.packages.startup.features.4')
                  ].map((feature, i) => (
                    <li key={i} className="flex">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  {t('services.getStarted')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-primary-500 relative transform md:-translate-y-4"
            >
              <div className="absolute top-0 inset-x-0 bg-primary-500 text-white text-center py-1 text-sm font-medium">
                {t('services.packages.popular')}
              </div>
              <div className="p-6 pt-10 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('services.packages.growth.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.packages.growth.description')}</p>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">{t('services.packages.growth.price')}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {[
                    t('services.packages.growth.features.0'),
                    t('services.packages.growth.features.1'),
                    t('services.packages.growth.features.2'),
                    t('services.packages.growth.features.3'),
                    t('services.packages.growth.features.4'),
                    t('services.packages.growth.features.5'),
                    t('services.packages.growth.features.6')
                  ].map((feature, i) => (
                    <li key={i} className="flex">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  {t('services.getStarted')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('services.packages.enterprise.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.packages.enterprise.description')}</p>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">{t('services.packages.enterprise.price')}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {[
                    t('services.packages.enterprise.features.0'),
                    t('services.packages.enterprise.features.1'),
                    t('services.packages.enterprise.features.2'),
                    t('services.packages.enterprise.features.3'),
                    t('services.packages.enterprise.features.4'),
                    t('services.packages.enterprise.features.5'),
                    t('services.packages.enterprise.features.6'),
                    t('services.packages.enterprise.features.7'),
                    t('services.packages.enterprise.features.8')
                  ].map((feature, i) => (
                    <li key={i} className="flex">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  {t('services.getStarted')}
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-6 md:p-8 rounded-lg mt-12 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('services.packages.custom.title')}</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('services.packages.custom.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              {t('services.packages.custom.cta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('services.faq.subtitle')}
            title={t('services.faq.title')}
            description={t('services.faq.description')}
            center={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t('services.faq.questions.0.question'),
                answer: t('services.faq.questions.0.answer')
              },
              {
                question: t('services.faq.questions.1.question'),
                answer: t('services.faq.questions.1.answer')
              },
              {
                question: t('services.faq.questions.2.question'),
                answer: t('services.faq.questions.2.answer')
              },
              {
                question: t('services.faq.questions.3.question'),
                answer: t('services.faq.questions.3.answer')
              },
              {
                question: t('services.faq.questions.4.question'),
                answer: t('services.faq.questions.4.answer')
              },
              {
                question: t('services.faq.questions.5.question'),
                answer: t('services.faq.questions.5.answer')
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title={t('services.cta.title')}
        description={t('services.cta.description')}
        primaryButtonText={t('services.cta.primaryButton')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('services.cta.secondaryButton')}
        secondaryButtonLink="/portfolio"
      />
    </>
  );
};

export default ServicesPage;