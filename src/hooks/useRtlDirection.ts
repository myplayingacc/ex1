import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useRtlDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;

    // Apply RTL specific CSS adjustments if needed
    if (dir === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  return {
    isRtl: i18n.language === 'ar',
    currentLanguage: i18n.language,
  };
};

export default useRtlDirection; 