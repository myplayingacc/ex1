import React from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import PortfolioCard from '../components/shared/PortfolioCard';
import CallToAction from '../components/shared/CallToAction';
import { useTranslation } from 'react-i18next';

const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState('all');
  
  const portfolioItems = [
    {
      title: "Retail Brand Transformation",
      category: "E-commerce",
      description: "How we helped a retail brand increase online sales by 156% through strategic social media campaigns.",
      imageSrc: "https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "retail-brand-transformation",
      tags: ["e-commerce", "retail", "instagram", "facebook-ads"]
    },
    {
      title: "SaaS Growth Strategy",
      category: "B2B Technology",
      description: "Developing a comprehensive social strategy that generated 3x lead growth for a B2B SaaS company.",
      imageSrc: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "saas-growth-strategy",
      tags: ["b2b", "technology", "linkedin", "content-marketing"]
    },
    {
      title: "Restaurant Chain Rebranding",
      category: "Food & Beverage",
      description: "A social-first rebranding campaign that increased foot traffic by 32% across 12 locations.",
      imageSrc: "https://images.pexels.com/photos/3760814/pexels-photo-3760814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "restaurant-chain-rebranding",
      tags: ["food-beverage", "instagram", "influencer-marketing"]
    },
    {
      title: "Luxury Fashion Launch",
      category: "Fashion",
      description: "Launching a luxury fashion brand on social media with a strategy that gained 50K followers in 3 months.",
      imageSrc: "https://images.pexels.com/photos/2872879/pexels-photo-2872879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "luxury-fashion-launch",
      tags: ["fashion", "instagram", "influencer-marketing"]
    },
    {
      title: "Non-Profit Awareness Campaign",
      category: "Non-Profit",
      description: "Creating a viral social media campaign that raised $2M in donations for environmental conservation.",
      imageSrc: "https://images.pexels.com/photos/5486953/pexels-photo-5486953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "non-profit-awareness-campaign",
      tags: ["non-profit", "facebook", "twitter", "campaign"]
    },
    {
      title: "Fitness App User Acquisition",
      category: "Health & Wellness",
      description: "Multi-platform user acquisition strategy that reduced CAC by 47% while scaling to 100K new users.",
      imageSrc: "https://images.pexels.com/photos/4761671/pexels-photo-4761671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "fitness-app-user-acquisition",
      tags: ["health-wellness", "instagram", "tiktok", "user-acquisition"]
    },
    {
      title: "FinTech Thought Leadership",
      category: "Financial Services",
      description: "Establishing a fintech startup as an industry thought leader through strategic content and platform selection.",
      imageSrc: "https://images.pexels.com/photos/8353778/pexels-photo-8353778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "fintech-thought-leadership",
      tags: ["financial-services", "linkedin", "twitter", "content-marketing"]
    },
    {
      title: "Gaming Community Building",
      category: "Gaming & Entertainment",
      description: "Building an engaged community of over 2M gamers across Discord, Twitter, and Instagram for a new game launch.",
      imageSrc: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "gaming-community-building",
      tags: ["gaming-entertainment", "discord", "twitter", "instagram", "community"]
    },
    {
      title: "Real Estate Lead Generation",
      category: "Real Estate",
      description: "Targeted social media strategy that generated 350+ qualified leads monthly for a real estate development.",
      imageSrc: "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "real-estate-lead-generation",
      tags: ["real-estate", "facebook-ads", "instagram", "lead-generation"]
    },
  ];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(filter));
  
  const categories = [
    { value: 'all', label: t('portfolio.ourWork.filterAll') },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'b2b', label: 'B2B' },
    { value: 'food-beverage', label: 'Food & Beverage' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'non-profit', label: 'Non-Profit' },
    { value: 'health-wellness', label: 'Health & Wellness' },
    { value: 'financial-services', label: 'Financial Services' },
    { value: 'gaming-entertainment', label: 'Gaming & Entertainment' },
    { value: 'real-estate', label: 'Real Estate' },
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
              {t('portfolio.heroTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              {t('portfolio.heroDescription')}
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <SectionHeading
                subtitle={t('portfolio.ourWork.subtitle')}
                title={t('portfolio.ourWork.title')}
                description={t('portfolio.ourWork.description')}
              />
              
              <div className="mt-6 md:mt-0 flex items-center">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700 mr-3">{t('portfolio.ourWork.filterLabel')}</span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="block w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.slug}
                title={item.title}
                category={item.category}
                description={item.description}
                imageSrc={item.imageSrc}
                slug={item.slug}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              {t('common.contactUs')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('portfolio.approach.subtitle')}
            title={t('portfolio.approach.title')}
            description={t('portfolio.approach.description')}
            center={true}
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: t('portfolio.approach.steps.discovery.number'),
                title: t('portfolio.approach.steps.discovery.title'),
                description: t('portfolio.approach.steps.discovery.description')
              },
              {
                number: t('portfolio.approach.steps.strategy.number'),
                title: t('portfolio.approach.steps.strategy.title'),
                description: t('portfolio.approach.steps.strategy.description')
              },
              {
                number: t('portfolio.approach.steps.implementation.number'),
                title: t('portfolio.approach.steps.implementation.title'),
                description: t('portfolio.approach.steps.implementation.description')
              },
              {
                number: t('portfolio.approach.steps.optimization.number'),
                title: t('portfolio.approach.steps.optimization.title'),
                description: t('portfolio.approach.steps.optimization.description')
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="absolute -top-3 -right-3 bg-primary-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('portfolio.results.subtitle')}
            title={t('portfolio.results.title')}
            description={t('portfolio.results.description')}
            center={true}
            light={true}
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: t('portfolio.results.stats.engagements.value'),
                label: t('portfolio.results.stats.engagements.label'),
                description: t('portfolio.results.stats.engagements.description')
              },
              {
                value: t('portfolio.results.stats.roi.value'),
                label: t('portfolio.results.stats.roi.label'),
                description: t('portfolio.results.stats.roi.description')
              },
              {
                value: t('portfolio.results.stats.conversion.value'),
                label: t('portfolio.results.stats.conversion.label'),
                description: t('portfolio.results.stats.conversion.description')
              },
              {
                value: t('portfolio.results.stats.retention.value'),
                label: t('portfolio.results.stats.retention.label'),
                description: t('portfolio.results.stats.retention.description')
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xl font-medium text-primary-200 mb-2">{stat.label}</div>
                <p className="text-primary-100">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('testimonials.clientFeedback.subtitle')}
            title={t('testimonials.clientFeedback.title')}
            description={t('testimonials.clientFeedback.description')}
            center={true}
          />
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  quote: "Working with SocialSphere has transformed our social media presence. Not only did they exceed our KPIs by 45%, but they were also a true pleasure to work with — responsive, strategic, and genuinely invested in our success.",
                  author: "Jonathan Rodriguez",
                  position: "Marketing Director",
                  company: "TechNova Solutions",
                  image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                  quote: "The team at SocialSphere doesn't just execute tactics — they develop strategies that align perfectly with business objectives. Our social campaigns now drive 32% of our overall lead generation, up from just 8% before working with them.",
                  author: "Michael Chang",
                  position: "CEO",
                  company: "Innovate Financial",
                  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover mb-6 md:mb-0 md:mr-6"
                    />
                    <div>
                      <blockquote className="text-xl text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('portfolio.faq.subtitle')}
            title={t('portfolio.faq.title')}
            description={t('portfolio.faq.description')}
            center={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t('portfolio.faq.questions.measurement.question'),
                answer: t('portfolio.faq.questions.measurement.answer')
              },
              {
                question: t('portfolio.faq.questions.industry.question'),
                answer: t('portfolio.faq.questions.industry.answer')
              },
              {
                question: t('portfolio.faq.questions.timeline.question'),
                answer: t('portfolio.faq.questions.timeline.answer')
              },
              {
                question: t('portfolio.faq.questions.caseStudies.question'),
                answer: t('portfolio.faq.questions.caseStudies.answer')
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
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
        title={t('portfolio.callToAction.title')}
        description={t('portfolio.callToAction.description')}
        primaryButtonText={t('portfolio.callToAction.primaryButton')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('portfolio.callToAction.secondaryButton')}
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default PortfolioPage;