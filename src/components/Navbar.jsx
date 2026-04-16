import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#projects' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
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
            <a href="https://github.com/olivesanny2006-a11y" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://wa.me/2290169547835" className="nav-cta glass">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
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
                <a href="https://wa.me/2290169547835" className="accent-text">
                  <MessageCircle size={20} /> WhatsApp
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
