import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface NewsletterProps {
  darkMode?: boolean;
}

const Newsletter: React.FC<NewsletterProps> = ({ darkMode = false }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real application, this would send the email to a backend service
    // For now, just simulate a successful submission
    setIsSubmitted(true);
    setError('');
  };

  const textColorClass = darkMode ? 'text-white' : 'text-gray-900';
  const inputBgClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';
  const buttonColorClass = darkMode 
    ? 'bg-primary-500 hover:bg-primary-600 text-white' 
    : 'bg-primary-500 hover:bg-primary-600 text-white';

  return (
    <div className="w-full">
      {isSubmitted ? (
        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-primary-50'}`}>
          <p className={`${darkMode ? 'text-primary-400' : 'text-primary-600'} font-medium`}>
            Thank you for subscribing! We'll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-primary-500 w-full ${inputBgClass} ${textColorClass}`}
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className={`whitespace-nowrap px-5 py-3 rounded-md font-medium flex items-center justify-center transition-colors ${buttonColorClass}`}
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          {error && (
            <p className="text-error-500 text-sm mt-1">{error}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Newsletter;