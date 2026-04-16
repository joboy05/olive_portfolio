import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Search, Settings, FileCode, Monitor } from 'lucide-react';
import BackgroundAnimations from './BackgroundAnimations';
import { useThemeLang } from '../context/ThemeLangContext';
import './Skills.css';

const Skills = () => {
  const { t } = useThemeLang();
  const skillGroups = [
    {
      title: t('skills.catWeb'),
      icon: <Code2 size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Bootstrap', `React ${t('skills.inProgress')}`]
    },
    {
      title: t('skills.catAnalysis'),
      icon: <Search size={24} />,
      skills: ['Analyse UML', 'Référencement SEO', 'Optimisation Performance']
    },
    {
      title: t('skills.catTools'),
      icon: <Monitor size={24} />,
      skills: ['Pack Office', 'Windows', 'Git / GitHub', 'VS Code']
    }
  ];

  return (
    <section className="skills section-padding relative overflow-hidden" id="skills">
      <BackgroundAnimations type="skills" />
      <div className="container relative z-1">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('skills.titlePart1')}<span className="accent-text">{t('skills.titlePart2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {t('skills.description')}
          </motion.p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="skill-card glass"
            >
              <div className="skill-card-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill, j) => (
                  <span key={j} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
