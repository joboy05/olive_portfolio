import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations = ({ type }) => {
  if (type === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1, opacity: 0.15 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'var(--accent)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'about') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, opacity: 0.05 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <motion.div 
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>
    );
  }

  if (type === 'skills') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-emerald-500 rounded-full"
            style={{
              width: 4,
              height: 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'var(--accent)',
              opacity: 0.2,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'projects') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0, opacity: 0.08 }}>
         {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-emerald-500"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: '2px solid var(--accent)',
              borderRadius: '20px',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default BackgroundAnimations;
