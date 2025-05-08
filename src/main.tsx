import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Import i18n configuration
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

// Create root element
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// Ensure language is set properly initially
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

// Render with I18nextProvider to ensure proper translation context
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);