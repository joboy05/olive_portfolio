import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from '../translations';

const ThemeLangContext = createContext();

export const ThemeLangProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'fr';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  // Helper function for translations handling nested keys: t('hero.title1')
  const t = (keyStr) => {
    const keys = keyStr.split('.');
    let result = translations[lang];
    for (const key of keys) {
      if (result === undefined) return keyStr;
      result = result[key];
    }
    return result || keyStr;
  };

  return (
    <ThemeLangContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </ThemeLangContext.Provider>
  );
};

export const useThemeLang = () => useContext(ThemeLangContext);
