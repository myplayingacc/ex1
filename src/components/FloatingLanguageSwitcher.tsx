import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' }
];

const FloatingLanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
    setIsOpen(false);
  };
  
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-full mb-2 right-0 bg-white rounded-lg shadow-lg overflow-hidden">
            <ul className="py-1">
              {languages.map(lang => (
                <li key={lang.code}>
                  <button
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-100 ${
                      i18n.language === lang.code ? 'bg-gray-50 text-primary-500 font-medium' : 'text-gray-700'
                    }`}
                  >
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105"
          aria-label="Change language"
        >
          <Globe size={24} />
        </button>
      </div>
    </div>
  );
};

export default FloatingLanguageSwitcher; 