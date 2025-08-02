import React from 'react';

const About: React.FC = () => {
  const values = [
    {
      icon: "🎯",
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and unwavering accuracy."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Strong partnerships with clients ensure we exceed expectations and deliver outstanding results."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We maintain the highest standards of quality in every aspect of our work."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Mulley Engineering</h2>
          <p className="section-subtitle">
            Pioneering engineering solutions that shape the future
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded with a vision to revolutionize the engineering industry, 
              Mulley Engineering has been at the forefront of innovative solutions 
              for over a decade. Our team of expert engineers combines technical 
              excellence with creative problem-solving to deliver projects that 
              exceed expectations.
            </p>
            
            <p>
              We specialize in mechanical, electrical, and civil engineering, 
              serving clients across various industries including manufacturing, 
              construction, and technology. Our commitment to quality, safety, 
              and sustainability drives everything we do.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h4>15+</h4>
                <p>Expert Engineers</p>
              </div>
              <div className="stat">
                <h4>200+</h4>
                <p>Successful Projects</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Support Available</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>🏗️</span>
                <p>Engineering Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 