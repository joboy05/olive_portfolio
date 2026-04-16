import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, MapPin, Send } from 'lucide-react';
import BackgroundAnimations from './BackgroundAnimations';
import './Contact.css';

const Contact = () => {
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
            Parlons de votre <span className="accent-text">projet</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            Prête à collaborer sur de nouvelles idées. N'hésitez pas à me contacter via l'un de ces canaux.
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
                  <h4>Localisation</h4>
                  <p>Parakou, Banikanni, Bénin BJ</p>
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
                <label>Nom Complet</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Votre message ici..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Envoyer <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
