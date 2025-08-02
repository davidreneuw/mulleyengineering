import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Innovative</span>
            <span className="title-line">Engineering</span>
            <span className="title-line">Solutions</span>
          </h1>
          
          <p className="hero-subtitle">
            Delivering cutting-edge engineering services with precision, 
            creativity, and unwavering commitment to excellence.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 