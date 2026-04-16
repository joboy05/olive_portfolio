import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, MapPin, Send } from 'lucide-react';
import BackgroundAnimations from './BackgroundAnimations';
import { useThemeLang } from '../context/ThemeLangContext';
import './Contact.css';

const Contact = () => {
  const { t } = useThemeLang();
  return (
    <section className="contact section-padding relative overflow-hidden" id="contact">
      <BackgroundAnimations type="skills" /> {/* Reuse skills (dots) for contact */}
      <div className="container relative z-1">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('contact.titlePart1')}<span className="accent-text">{t('contact.titlePart2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {t('contact.description')}
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-card glass">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:olivesanny2006@gmail.com">olivesanny2006@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={24} /></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/2290169547835">(+229) 01 69 54 78 35</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Github size={24} /></div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/olivesanny2006-a11y" target="_blank" rel="noopener noreferrer">@olivesanny2006-a11y</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4>{t('contact.location')}</h4>
                  <p>{t('contact.locationValue')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>{t('contact.formName')}</label>
                <input type="text" placeholder={t('contact.formPlaceholderName')} required />
              </div>
              <div className="form-group">
                <label>{t('contact.formEmail')}</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>{t('contact.formMessage')}</label>
                <textarea rows="5" placeholder={t('contact.formPlaceholderMessage')} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                {t('contact.btnSend')} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
