import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/shared/SectionHeading';
import BlogCard from '../components/shared/BlogCard';
import Newsletter from '../components/shared/Newsletter';

const BlogPage: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('all');
  
  const blogPosts = [
    {
      title: "10 Social Media Trends That Will Dominate 2025",
      excerpt: "Stay ahead of the curve with our predictions for the most important social media trends for the coming year.",
      category: "Trends",
      date: "May 15, 2025",
      readTime: "8 min read",
      imageSrc: "https://images.pexels.com/photos/7563687/pexels-photo-7563687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "social-media-trends-2025",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "How to Build a Social Media Strategy That Converts",
      excerpt: "Learn the essential elements of a social media strategy that drives actual business results, not just vanity metrics.",
      category: "Strategy",
      date: "May 10, 2025",
      readTime: "10 min read",
      imageSrc: "https://images.pexels.com/photos/6893869/pexels-photo-6893869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "social-media-strategy-converts",
      author: {
        name: "Michael Chen",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "The Complete Guide to Instagram Marketing in 2025",
      excerpt: "Master Instagram with our comprehensive guide covering everything from content strategy to advanced analytics.",
      category: "Platforms",
      date: "May 5, 2025",
      readTime: "12 min read",
      imageSrc: "https://images.pexels.com/photos/4549416/pexels-photo-4549416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "instagram-marketing-guide-2025",
      author: {
        name: "Emily Zhang",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "5 Ways AI is Transforming Social Media Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing social media marketing and how you can leverage it for your brand.",
      category: "Technology",
      date: "April 28, 2025",
      readTime: "9 min read",
      imageSrc: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "ai-transforming-social-media",
      author: {
        name: "David Wilson",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "The Psychology Behind Viral Social Media Content",
      excerpt: "Understanding the psychological triggers that make content spread like wildfire across social platforms.",
      category: "Content",
      date: "April 22, 2025",
      readTime: "7 min read",
      imageSrc: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "psychology-viral-content",
      author: {
        name: "Jessica Martinez",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "Measuring Social Media ROI: A Data-Driven Approach",
      excerpt: "Learn how to accurately measure the return on investment of your social media marketing efforts.",
      category: "Analytics",
      date: "April 18, 2025",
      readTime: "11 min read",
      imageSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "measuring-social-media-roi",
      author: {
        name: "Alex Thompson",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "How to Create a Content Calendar That Actually Works",
      excerpt: "A step-by-step guide to creating and maintaining a social media content calendar that drives consistent results.",
      category: "Content",
      date: "April 12, 2025",
      readTime: "8 min read",
      imageSrc: "https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "content-calendar-guide",
      author: {
        name: "Sarah Johnson",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "TikTok for Business: Beyond the Basics",
      excerpt: "Take your TikTok marketing to the next level with advanced strategies for engagement and conversion.",
      category: "Platforms",
      date: "April 5, 2025",
      readTime: "9 min read",
      imageSrc: "https://images.pexels.com/photos/3943792/pexels-photo-3943792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "tiktok-business-advanced",
      author: {
        name: "Michael Chen",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      title: "Social Media Crisis Management: Preparing for the Worst",
      excerpt: "How to prepare for, manage, and recover from a social media crisis to protect your brand reputation.",
      category: "Strategy",
      date: "March 30, 2025",
      readTime: "10 min read",
      imageSrc: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "social-media-crisis-management",
      author: {
        name: "Emily Zhang",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
  ];
  
  const categories = [
    { value: 'all', label: t('blog.categories.all') },
    { value: 'Trends', label: t('blog.categories.trends') },
    { value: 'Strategy', label: t('blog.categories.strategy') },
    { value: 'Platforms', label: t('blog.categories.platforms') },
    { value: 'Technology', label: t('blog.categories.technology') },
    { value: 'Content', label: t('blog.categories.content') },
    { value: 'Analytics', label: t('blog.categories.analytics') },
  ];
  
  const filteredPosts = blogPosts
    .filter(post => 
      category === 'all' || post.category === category
    )
    .filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  
  const featuredPost = blogPosts[0];
  
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
              {t('blog.hero.title1')} <span className="text-primary-500">{t('blog.hero.title2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              {t('blog.hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('blog.hero.searchPlaceholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('blog.featured.subtitle')}
            title={t('blog.featured.title')}
            description={t('blog.featured.description')}
            center={true}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={featuredPost.imageSrc}
                alt={featuredPost.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{featuredPost.author.name}</div>
                  <div className="text-sm text-gray-500">{featuredPost.date} · {featuredPost.readTime}</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <a
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                {t('blog.featured.readArticle')}
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
          </motion.div>
        </div>
      </section>
      
      {/* All Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionHeading
              subtitle={t('blog.allPosts.subtitle')}
              title={t('blog.allPosts.title')}
              description={t('blog.allPosts.description')}
            />
            
            <div className="mt-6 md:mt-0 flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700 mr-3">{t('blog.allPosts.filterBy')}:</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  imageSrc={post.imageSrc}
                  slug={post.slug}
                  author={post.author}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{t('blog.allPosts.noArticles')}</h3>
              <p className="text-gray-600">
                {t('blog.allPosts.tryAdjusting')}
              </p>
            </div>
          )}
          
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-md border border-gray-300 transition-colors">
                {t('blog.allPosts.loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              subtitle={t('blog.newsletter.subtitle')}
              title={t('blog.newsletter.title')}
              description={t('blog.newsletter.description')}
              center={true}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-primary-50 p-8 rounded-lg"
            >
              <Newsletter />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('blog.topics.subtitle')}
            title={t('blog.topics.title')}
            description={t('blog.topics.description')}
            center={true}
          />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat.value !== 'all').map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setCategory(cat.value)}
              >
                <h3 className="font-medium text-gray-900">{cat.label}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {blogPosts.filter(post => post.category === cat.value).length} {t('blog.topics.articles')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;