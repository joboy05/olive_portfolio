import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import cvFile from '../assets/CV_Olive.jpeg';
import BackgroundAnimations from './BackgroundAnimations';
import { useThemeLang } from '../context/ThemeLangContext';
import './Hero.css';

const Hero = () => {
  const { t } = useThemeLang();

  return (
    <section className="hero relative overflow-hidden" id="home">
      <BackgroundAnimations type="hero" />
      <div className="container hero-container relative z-1">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge glass"
          >
            <span className="dot"></span>
            {t('hero.availability')}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            {t('hero.title1')} <br />
            <span className="accent-text">{t('hero.title2')}</span> {t('hero.title3')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-description"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-actions"
          >
            <a href="#projects" className="btn btn-primary">
              {t('hero.btnProjects')} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary glass">
              {t('hero.btnContact')}
            </a>
            <a href={cvFile} download="CV_Sanny_Olive.jpeg" className="btn btn-secondary glass" style={{ padding: '0.6rem 1.2rem', gap: '0.5rem' }}>
              <Download size={18} /> {t('hero.btnCV')}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-num">{t('hero.stat1Title')}</span>
              <span className="stat-label">{t('hero.stat1Desc')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">{t('hero.stat2Title')}</span>
              <span className="stat-label">{t('hero.stat2Desc')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">{t('hero.stat3Title')}</span>
              <span className="stat-label">{t('hero.stat3Desc')}</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-visual"
        >
          <div className="image-wrapper">
             <img src={profileImg} alt="Sanny Olive" className="profile-photo" />
             <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-background-effects">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </section>
  );
};

export default Hero;
