import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/shared/SectionHeading';
import CallToAction from '../components/shared/CallToAction';

const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation();
  
  const clientTestimonials = [
    {
      quote: "SocialSphere transformed our social media presence completely. Their strategic approach and attention to detail have resulted in a 200% increase in engagement and a significant boost in conversions.",
      author: "Samuel Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Technology"
    },
    {
      quote: "Working with the SocialSphere team has been an amazing experience. Their creativity, responsiveness, and data-driven approach have made a real difference to our brand's social media performance.",
      author: "Marcus Williams",
      position: "CEO",
      company: "Urban Outfitters",
      rating: 5,
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Retail"
    },
    {
      quote: "The expertise and dedication SocialSphere brings to the table is unmatched. They don't just post content; they develop strategies that align with business goals. The results speak for themselves.",
      author: "Jason Lee",
      position: "Brand Manager",
      company: "Lifestyle Brands Co.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Fashion"
    },
    {
      quote: "SocialSphere helped us navigate a complete brand repositioning on social media. Their strategic insights and execution were flawless, resulting in a 78% increase in qualified leads from social channels.",
      author: "David Chen",
      position: "Growth Marketing Lead",
      company: "Fusion Software",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Technology"
    },
    {
      quote: "Since partnering with SocialSphere, our restaurant's social presence has exploded. Their food photography direction and local targeting strategies have directly led to a 32% increase in reservations.",
      author: "Marco Rodriguez",
      position: "Owner",
      company: "Taste of Italy",
      rating: 5,
      image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Food & Beverage"
    },
    {
      quote: "SocialSphere's influencer marketing campaign exceeded all our expectations. They found the perfect partners for our brand, negotiated favorable terms, and managed the entire process seamlessly.",
      author: "Alex Thompson",
      position: "Marketing Manager",
      company: "Glow Cosmetics",
      rating: 5,
      image: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Beauty"
    },
    {
      quote: "As a B2B company, we were struggling to find our voice on social media. SocialSphere developed a LinkedIn-focused strategy that has established us as thought leaders and generated quality leads.",
      author: "James Wilson",
      position: "VP of Marketing",
      company: "Enterprise Solutions",
      rating: 5,
      image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "B2B Technology"
    },
    {
      quote: "The SocialSphere team truly understands the unique challenges of healthcare marketing. Their HIPAA-compliant social strategy has helped us educate our audience and grow our practice by 40% in one year.",
      author: "Dr. Michael Kim",
      position: "Medical Director",
      company: "Wellness Medical Group",
      rating: 5,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Healthcare"
    },
    {
      quote: "Our nonprofit needed to increase donations and volunteer sign-ups through social media. SocialSphere's storytelling approach and campaign optimization increased our donations by 65% year-over-year.",
      author: "Robert Jackson",
      position: "Executive Director",
      company: "Community First Foundation",
      rating: 5,
      image: "https://images.pexels.com/photos/732629/pexels-photo-732629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      industry: "Non-Profit"
    },
  ];
  
  const [filter, setFilter] = React.useState('all');
  
  const filteredTestimonials = filter === 'all' 
    ? clientTestimonials 
    : clientTestimonials.filter(item => item.industry.toLowerCase() === filter);
  
  const industries = [
    { value: 'all', label: t('testimonials.clientFeedback.filterAll') },
    { value: 'technology', label: 'Technology' },
    { value: 'retail', label: 'Retail' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'food & beverage', label: 'Food & Beverage' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'b2b technology', label: 'B2B Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'non-profit', label: 'Non-Profit' },
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
              <span className="text-primary-500">{t('testimonials.heroTitle')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              {t('testimonials.heroDescription')}
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary-600 rounded-lg overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-primary-300" />
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white mb-6 italic">
                    {t('testimonials.featured.quote')}
                  </blockquote>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-primary-100">
                    <div className="font-medium text-white text-lg">{t('testimonials.featured.author')}</div>
                    <div>{t('testimonials.featured.position')}</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={t('testimonials.featured.author')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* All Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionHeading
              subtitle={t('testimonials.clientFeedback.subtitle')}
              title={t('testimonials.clientFeedback.title')}
              description={t('testimonials.clientFeedback.description')}
            />
            
            <div className="mt-6 md:mt-0">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
              >
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('testimonials.videoTestimonials.subtitle')}
            title={t('testimonials.videoTestimonials.title')}
            description={t('testimonials.videoTestimonials.description')}
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How SocialSphere Increased Our ROI by 245%",
                client: "TechNova Solutions",
                thumbnail: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Transforming Our Social Media Presence",
                client: "Luxe Fashion Brands",
                thumbnail: "https://images.pexels.com/photos/3760610/pexels-photo-3760610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Building a Community of 1M+ Followers",
                client: "Green Earth Foundation",
                thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-primary-500 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
                <p className="text-gray-600">{video.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('testimonials.clients.subtitle')}
            title={t('testimonials.clients.title')}
            description={t('testimonials.clients.description')}
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              "https://pngimg.com/uploads/intel/intel_PNG19.png",
              "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
              "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('testimonials.successStories.subtitle')}
            title={t('testimonials.successStories.title')}
            description={t('testimonials.successStories.description')}
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Brand Transformation",
                category: "E-commerce",
                description: "How we helped a retail brand increase online sales by 156% through strategic social media campaigns.",
                image: "https://images.pexels.com/photos/7414248/pexels-photo-7414248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                slug: "retail-brand-transformation"
              },
              {
                title: "SaaS Growth Strategy",
                category: "B2B Technology",
                description: "Developing a comprehensive social strategy that generated 3x lead growth for a B2B SaaS company.",
                image: "https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                slug: "saas-growth-strategy"
              },
              {
                title: "Restaurant Chain Rebranding",
                category: "Food & Beverage",
                description: "A social-first rebranding campaign that increased foot traffic by 32% across 12 locations.",
                image: "https://images.pexels.com/photos/6692559/pexels-photo-6692559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                slug: "restaurant-chain-rebranding"
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a href={`/portfolio/${study.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600">{study.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/portfolio"
              className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              {t('testimonials.successStories.viewAll')}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title={t('testimonials.callToAction.title')}
        description={t('testimonials.callToAction.description')}
        primaryButtonText={t('testimonials.callToAction.primaryButton')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('testimonials.callToAction.secondaryButton')}
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default TestimonialsPage;