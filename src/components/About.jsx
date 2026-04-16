import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Heart } from 'lucide-react';
import BackgroundAnimations from './BackgroundAnimations';
import './About.css';

const About = () => {
  const education = [
    {
      year: '2026 (En cours)',
      degree: 'Licence Professionnelle en Informatique de gestion',
      school: "IUT de l'Université de Parakou",
      icon: <GraduationCap size={24} />
    },
    {
      year: '2023',
      degree: 'Baccalauréat série D',
      school: 'CEG Yimporima, Natitingou',
      icon: <Award size={24} />
    }
  ];

  const qualities = ['Curiosité intellectuelle', 'Discipline et rigueur', 'Sens du relationnel'];
  const interests = ['Sport (Endurance)', 'Voyages et découvertes', 'Musique et Lecture'];

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
            À propos de <span className="accent-text">moi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            Passionnée par l'innovation numérique et le développement durable, je mets mes compétences au service de projets ambitieux.
          </motion.p>
        </div>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-education"
          >
            <h3 className="sub-title">Mon Parcours</h3>
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
              <h3 className="sub-title"><BookOpen size={20} className="accent-text" /> Qualités</h3>
              <ul className="details-list">
                {qualities.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div className="details-card glass">
              <h3 className="sub-title"><Heart size={20} className="accent-text" /> Centres d'intérêt</h3>
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
