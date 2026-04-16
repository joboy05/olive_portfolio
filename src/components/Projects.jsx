import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const featuredProject = {
    title: 'Assistude',
    subtitle: 'N°1 de la mise en relation Freelance sur WhatsApp au Bénin',
    description: 'Assistude est une plateforme révolutionnaire qui connecte directement les talents (freelances) et les entreprises à travers WhatsApp. Le concept est simple : aucune application à télécharger, aucun formulaire complexe. Tout se passe via une conversation fluide. C\'est l\'outil indispensable pour dynamiser l\'économie locale et simplifier le recrutement de proximité.',
    features: [
      'Zéro barrière technologique (WhatsApp first)',
      'Mise en relation instantanée',
      'Focus sur les talents locaux du Bénin',
      'Interface conversationnelle intuitive'
    ],
    tags: ['PHP', 'Bootstrap', 'JavaScript', 'WhatsApp API'],
    link: 'https://assistude.com/',
    github: 'https://github.com/olivesanny2006-a11y/assistude',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  };

  const otherProjects = [
    {
      title: 'Lueur Jewelry',
      description: 'Maquette d\'un site e-commerce de luxe pour une marque de joaillerie. Focus sur le design épuré et l\'expérience utilisateur premium.',
      tags: ['React', 'CSS Modules', 'Framer Motion'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'DashBoard IUT',
      description: 'Interface d\'administration pour la gestion des notes et des emplois du temps au sein de l\'institut technologique.',
      tags: ['JavaScript', 'Chart.js', 'HTML/CSS'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'EduShare',
      description: 'Plateforme collaborative permettant aux étudiants de partager et de consulter des ressources académiques en temps réel.',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'EcoTrack',
      description: 'Application conceptuelle de suivi d\'impact écologique pour les entreprises locales au Bénin.',
      tags: ['React', 'Analyse UML', 'SEO'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Mes <span className="accent-text">Projets</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            Découvre mes réalisations, avec un focus particulier sur les solutions impactantes.
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
            <div className="featured-badge">Projet Vedette</div>
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
                  Voir le site <ExternalLink size={18} />
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
