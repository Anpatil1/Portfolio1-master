import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroBanner = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Shapes */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '80px',
        height: '80px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite reverse'
      }}></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 2, maxWidth: '800px', padding: '0 2rem' }}
      >
        <motion.h1
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease infinite'
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Full Stack Developer
        </motion.h1>

        <motion.h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '600',
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Avadhut Nangare Patil
        </motion.h2>

        <motion.p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            lineHeight: '1.6',
            marginBottom: '3rem',
            color: 'rgba(255, 255, 255, 0.8)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Building innovative web solutions with modern technologies
          <br />
          React • Node.js • Python • JavaScript • MongoDB
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {['⚛️', '🟢', '🐍', '🟨', '🍃'].map((icon, index) => (
            <div
              key={index}
              style={{
                fontSize: '3rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                animation: `bounce 2s ease-in-out infinite ${index * 0.2}s`
              }}
            >
              {icon}
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, 0.7)'
          }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Scroll Down</span>
          <div style={{ fontSize: '1.5rem' }}>↓</div>
        </motion.div>
      </motion.div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedHeroBanner;
