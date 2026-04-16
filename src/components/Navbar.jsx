import React, { useState, useEffect } from 'react';
import { Menu, X, Github, MessageCircle, Sun, Moon, Globe } from 'lucide-react';
import { useThemeLang } from '../context/ThemeLangContext';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, lang, toggleLang, t } = useThemeLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.portfolio'), href: '#projects' },
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nav-logo"
        >
          <a href="#">Sanny<span className="accent-text">.Olive</span></a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>
          <div className="nav-socials">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLang} className="lang-toggle" aria-label="Toggle Language">
              <Globe size={18} /> <span className="lang-text">{lang.toUpperCase()}</span>
            </button>
            <a href="https://github.com/olivesanny2006-a11y" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://wa.me/2290169547835" className="nav-cta glass">
              <MessageCircle size={18} />
              <span>{t('navbar.whatsapp')}</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-mobile glass"
          >
            <ul className="nav-mobile-links">
              {navLinks.map((link) => (
                <li key={link.name} onClick={() => setIsOpen(false)}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className="nav-mobile-cta">
                <button onClick={toggleTheme} className="mobile-toggle-btn">
                  {theme === 'dark' ? <><Sun size={18}/> Mode Clair</> : <><Moon size={18}/> Mode Sombre</>}
                </button>
              </li>
              <li className="nav-mobile-cta">
                <button onClick={toggleLang} className="mobile-toggle-btn">
                  <Globe size={18} /> {lang === 'fr' ? 'English' : 'Français'}
                </button>
              </li>
              <li className="nav-mobile-cta">
                <a href="https://wa.me/2290169547835" className="accent-text">
                  <MessageCircle size={20} /> {t('navbar.whatsapp')}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
