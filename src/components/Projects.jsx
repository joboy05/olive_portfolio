import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import assistudeImg from '../assets/projetfar.jpeg';
import BackgroundAnimations from './BackgroundAnimations';
import { useThemeLang } from '../context/ThemeLangContext';
import './Projects.css';

const Projects = () => {
  const { t } = useThemeLang();

  const featuredProject = {
    title: t('projects.assistudeTitle'),
    subtitle: t('projects.assistudeSubtitle'),
    description: t('projects.assistudeDesc'),
    features: [
      t('projects.feat1'),
      t('projects.feat2'),
      t('projects.feat3'),
      t('projects.feat4')
    ],
    tags: ['PHP', 'Bootstrap', 'JavaScript', 'WhatsApp API'],
    link: 'https://assistude.com/',
    github: 'https://github.com/olivesanny2006-a11y/assistude',
    image: assistudeImg
  };

  const otherProjects = [
    {
      title: t('projects.projFarm'),
      description: t('projects.projFarmDesc'),
      tags: ['React', 'CSS Modules', 'Framer Motion'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: t('projects.projSecue'),
      description: t('projects.projSecueDesc'),
      tags: ['JavaScript', 'Chart.js', 'HTML/CSS'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: t('projects.projScola'),
      description: t('projects.projScolaDesc'),
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: t('projects.projPortfo'),
      description: t('projects.projPortfoDesc'),
      tags: ['React', 'Analyse UML', 'SEO'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="projects section-padding relative overflow-hidden" id="projects">
      <BackgroundAnimations type="projects" />
      <div className="container relative z-1">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('projects.titlePart1')}<span className="accent-text">{t('projects.titlePart2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {t('projects.description')}
          </motion.p>
        </div>

        {/* Featured Project */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="featured-project-card"
        >
          <div className="featured-image">
            <img src={featuredProject.image} alt={featuredProject.title} />
            <div className="featured-badge">{t('projects.featured')}</div>
          </div>
          <div className="featured-content">
            <div className="featured-header">
              <span className="featured-label">Innovation WhatsApp</span>
              <h2>{featuredProject.title}</h2>
              <p className="featured-subtitle">{featuredProject.subtitle}</p>
            </div>
            <p className="featured-desc">{featuredProject.description}</p>
            <ul className="featured-features">
              {featuredProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="featured-footer">
              <div className="project-tags">
                {featuredProject.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="featured-actions">
                <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {t('projects.viewSite')} <ExternalLink size={18} />
                </a>
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="projects-grid">
          {otherProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="project-card glass shadow-sm"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <a href={project.link} className="project-link-icon"><ArrowUpRight size={20} /></a>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
