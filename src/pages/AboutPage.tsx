import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Shield, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/shared/SectionHeading';
import CallToAction from '../components/shared/CallToAction';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
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
              {t('about.heroTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              {t('about.heroDescription')}
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle={t('about.ourStory.subtitle')}
                title={t('about.ourStory.title')}
                description={t('about.ourStory.description')}
              />
              <p className="text-gray-600 mb-6">
                {t('about.ourStory.paragraph1')}
              </p>
              <p className="text-gray-600">
                {t('about.ourStory.paragraph2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="SocialSphere Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 w-full h-full bg-primary-100 rounded-lg top-4 left-4"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('about.missionValues.subtitle')}
            title={t('about.missionValues.title')}
            description={t('about.missionValues.description')}
            center={true}
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.missionValues.missionTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('about.missionValues.missionDescription')}
              </p>
              <div className="flex space-x-3 items-center">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-gray-700 font-medium">
                  {t('about.missionValues.missionTagline')}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.missionValues.visionTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('about.missionValues.visionDescription')}
              </p>
              <div className="flex space-x-3 items-center">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-gray-700 font-medium">
                  {t('about.missionValues.visionTagline')}
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary-500"
            >
              <h4 className="font-bold text-gray-900 mb-3">{t('about.missionValues.values.excellence')}</h4>
              <p className="text-gray-600">
                {t('about.missionValues.values.excellenceDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-secondary-500"
            >
              <h4 className="font-bold text-gray-900 mb-3">{t('about.missionValues.values.innovation')}</h4>
              <p className="text-gray-600">
                {t('about.missionValues.values.innovationDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-accent-500"
            >
              <h4 className="font-bold text-gray-900 mb-3">{t('about.missionValues.values.integrity')}</h4>
              <p className="text-gray-600">
                {t('about.missionValues.values.integrityDesc')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-success-500"
            >
              <h4 className="font-bold text-gray-900 mb-3">{t('about.missionValues.values.collaboration')}</h4>
              <p className="text-gray-600">
                {t('about.missionValues.values.collaborationDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('about.team.subtitle')}
            title={t('about.team.title')}
            description={t('about.team.description')}
            center={true}
          />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "With over 15 years of experience in digital marketing, John has led campaigns for Fortune 500 companies and startups alike."
              },
              {
                name: "Michael Johnson",
                position: "Creative Director",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Michael's award-winning creative direction has transformed campaigns for leading brands across multiple industries."
              },
              {
                name: "Sam Williams",
                position: "Head of Strategy",
                image: "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Sam specializes in developing data-driven strategies that align social media efforts with business objectives."
              },
              {
                name: "David Chen",
                position: "Analytics Director",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "David's expertise in data analysis helps our clients understand performance and optimize for maximum ROI."
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-500">{member.position}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              {t('about.team.teamDescription')}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2"
            >
              <Users className="h-5 w-5 text-primary-500" />
              <span className="text-gray-900 font-medium">{t('about.team.joinTeam')}</span>
              <a href="/careers" className="text-primary-500 hover:text-primary-600 font-medium">{t('about.team.viewPositions')}</a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('about.achievements.subtitle')}
            title={t('about.achievements.title')}
            description={t('about.achievements.description')}
            center={true}
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
            >
              <Award className="h-10 w-10 text-primary-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Social Media Agency of the Year</h3>
                <p className="text-gray-600 mb-2">Marketing Excellence Awards, 2023</p>
                <p className="text-gray-500 text-sm">Recognized for outstanding campaign results and innovation in social media marketing.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
            >
              <Award className="h-10 w-10 text-primary-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Best Social Campaign</h3>
                <p className="text-gray-600 mb-2">Digital Marketing Awards, 2022</p>
                <p className="text-gray-500 text-sm">For our groundbreaking work on the LuxBrands campaign that increased engagement by 300%.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
            >
              <Award className="h-10 w-10 text-primary-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Most Innovative Use of Social Media</h3>
                <p className="text-gray-600 mb-2">Innovation in Marketing, 2021</p>
                <p className="text-gray-500 text-sm">For our pioneering approach to integrating AR experiences into social campaigns.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('about.achievements.featuredIn')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bloomberg_logo.svg/1280px-Bloomberg_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <img 
                    src={src} 
                    alt={`Featured publication logo ${index + 1}`} 
                    className="max-h-10 w-auto opacity-80" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle={t('about.whyChooseUs.subtitle')}
                title={t('about.whyChooseUs.title')}
                description={t('about.whyChooseUs.description')}
              />
              
              <div className="space-y-4 mt-8">
                {[
                  {
                    title: t('about.whyChooseUs.trackRecord'),
                    description: t('about.whyChooseUs.trackRecordDesc')
                  },
                  {
                    title: t('about.whyChooseUs.expertTeam'),
                    description: t('about.whyChooseUs.expertTeamDesc')
                  },
                  {
                    title: t('about.whyChooseUs.customStrategies'),
                    description: t('about.whyChooseUs.customStrategiesDesc')
                  },
                  {
                    title: t('about.whyChooseUs.reporting'),
                    description: t('about.whyChooseUs.reportingDesc')
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="SocialSphere Team Meeting"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 w-full h-full bg-secondary-100 rounded-lg -top-4 -right-4"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title={t('about.callToAction.title')}
        description={t('about.callToAction.description')}
        primaryButtonText={t('about.callToAction.primaryButton')}
        primaryButtonLink="/contact"
        secondaryButtonText={t('about.callToAction.secondaryButton')}
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default AboutPage;