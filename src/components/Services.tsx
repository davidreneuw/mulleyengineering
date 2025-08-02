import React, { useState } from 'react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: "⚙️",
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical design, analysis, and manufacturing solutions for complex systems and machinery.",
      features: [
        "CAD Design & Modeling",
        "Finite Element Analysis",
        "Prototype Development",
        "Manufacturing Support"
      ]
    },
    {
      icon: "⚡",
      title: "Electrical Engineering",
      description: "Advanced electrical systems design, power distribution, and automation solutions for modern infrastructure.",
      features: [
        "Power Systems Design",
        "Control Systems",
        "Automation & Robotics",
        "Energy Management"
      ]
    },
    {
      icon: "🏗️",
      title: "Civil Engineering",
      description: "Structural design, construction management, and infrastructure development for sustainable projects.",
      features: [
        "Structural Analysis",
        "Construction Planning",
        "Infrastructure Design",
        "Project Management"
      ]
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Innovative R&D services to develop cutting-edge technologies and solutions for future challenges.",
      features: [
        "Technology Innovation",
        "Product Development",
        "Testing & Validation",
        "Patent Support"
      ]
    },
    {
      icon: "📊",
      title: "Consulting Services",
      description: "Expert consulting for engineering projects, feasibility studies, and technical advisory services.",
      features: [
        "Project Feasibility",
        "Technical Advisory",
        "Quality Assurance",
        "Risk Assessment"
      ]
    },
    {
      icon: "🌱",
      title: "Sustainable Solutions",
      description: "Green engineering solutions focused on environmental sustainability and energy efficiency.",
      features: [
        "Green Technology",
        "Energy Efficiency",
        "Environmental Impact",
        "Sustainable Design"
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive engineering solutions tailored to your needs
          </p>
        </div>

        <div className="services-content">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="service-details">
            <div className="detail-content">
              <h3>{services[activeService].title}</h3>
              <p>{services[activeService].description}</p>
              
              <div className="service-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  {services[activeService].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button className="btn btn-primary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 