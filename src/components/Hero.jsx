import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge glass"
          >
            <span className="dot"></span>
            Disponible pour nouveaux projets
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            Développeuse Web <br />
            <span className="accent-text">Full-stack</span> Passionnée
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-description"
          >
            Je suis <span className="highlight">Sanny Olive</span>, spécialisée dans la création d'expériences numériques modernes, sécurisées et performantes. Basée à Parakou, j'accompagne les entreprises dans leur transformation digitale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-actions"
          >
            <a href="#projects" className="btn btn-primary">
              Mes Projets <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary glass">
              Me Contacter
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-num">HTML/CSS</span>
              <span className="stat-label">Maîtrise</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">JS/PHP</span>
              <span className="stat-label">Développement</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">SEO/UML</span>
              <span className="stat-label">Expertise</span>
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
             <div className="avatar-fallback">
                <span>SO</span>
             </div>
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
