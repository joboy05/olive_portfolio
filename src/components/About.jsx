import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart } from 'lucide-react';
import BackgroundAnimations from './BackgroundAnimations';
import { useThemeLang } from '../context/ThemeLangContext';
import './About.css';

const About = () => {
  const { t } = useThemeLang();
  const education = [
    {
      year: `2026 ${t('about.ongoing')}`,
      degree: t('about.degree1'),
      school: t('about.school1'),
      icon: <GraduationCap size={24} />
    },
    {
      year: '2023',
      degree: t('about.degree2'),
      school: t('about.school2'),
      icon: <Award size={24} />
    }
  ];

  const qualities = t('about.qualities');
  const interests = t('about.interests');

  return (
    <section className="about section-padding relative overflow-hidden" id="about">
      <BackgroundAnimations type="about" />
      <div className="container relative z-1">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('about.titlePart1')} <span className="accent-text">{t('about.titlePart2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {t('about.description')}
          </motion.p>
        </div>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-education"
          >
            <h3 className="sub-title">{t('about.journeyTitle')}</h3>
            <div className="timeline">
              {education.map((item, i) => (
                <div key={i} className="timeline-item glass">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <span className="timeline-year accent-text">{item.year}</span>
                    <h4>{item.degree}</h4>
                    <p>{item.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-details"
          >
            <div className="details-card glass">
              <h3 className="sub-title"><BookOpen size={20} className="accent-text" /> {t('about.qualitiesTitle')}</h3>
              <ul className="details-list">
                {qualities.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div className="details-card glass">
              <h3 className="sub-title"><Heart size={20} className="accent-text" /> {t('about.interestsTitle')}</h3>
              <ul className="details-list">
                {interests.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
