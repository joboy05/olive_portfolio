import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Assistude',
      description: 'Un assistant WhatsApp innovant connectant freelances et entreprises sans friction. Développé pour simplifier le recrutement local.',
      tags: ['PHP', 'Bootstrap', 'JavaScript', 'WhatsApp API'],
      link: 'https://assistude.com/',
      github: 'https://github.com/olivesanny2006-a11y/assistude',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
    },
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
            Une sélection de mes travaux récents, mêlant créativité et expertise technique.
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="project-card glass"
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
