import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Advanced Manufacturing Facility",
      category: "Mechanical Engineering",
      description: "Designed and implemented a state-of-the-art manufacturing facility with automated production lines and quality control systems.",
      image: "🏭",
      technologies: ["CAD Design", "Automation", "Quality Control", "Project Management"],
      duration: "8 months",
      client: "Industrial Manufacturing Co."
    },
    {
      title: "Smart Grid Infrastructure",
      category: "Electrical Engineering",
      description: "Developed intelligent power distribution systems with real-time monitoring and automated load balancing capabilities.",
      image: "⚡",
      technologies: ["Power Systems", "IoT Integration", "Real-time Monitoring", "Load Balancing"],
      duration: "12 months",
      client: "Energy Solutions Ltd."
    },
    {
      title: "Sustainable Office Complex",
      category: "Civil Engineering",
      description: "Designed and constructed a LEED-certified office complex with innovative green building technologies and energy-efficient systems.",
      image: "🏢",
      technologies: ["Structural Design", "Green Building", "Energy Efficiency", "LEED Certification"],
      duration: "18 months",
      client: "Green Development Corp."
    },
    {
      title: "Robotic Assembly Line",
      category: "Automation",
      description: "Engineered a fully automated robotic assembly line with precision control systems and advanced safety features.",
      image: "🤖",
      technologies: ["Robotics", "PLC Programming", "Safety Systems", "Precision Control"],
      duration: "10 months",
      client: "Automotive Parts Inc."
    },
    {
      title: "Renewable Energy Plant",
      category: "Sustainable Solutions",
      description: "Designed and implemented a solar-wind hybrid power plant with energy storage and smart grid integration.",
      image: "🌞",
      technologies: ["Solar Energy", "Wind Power", "Energy Storage", "Smart Grid"],
      duration: "15 months",
      client: "Renewable Energy Co."
    },
    {
      title: "Research Laboratory",
      category: "R&D Facility",
      description: "Built a cutting-edge research laboratory with advanced testing equipment and specialized environmental controls.",
      image: "🔬",
      technologies: ["Laboratory Design", "Environmental Controls", "Safety Systems", "Equipment Integration"],
      duration: "14 months",
      client: "Research Institute"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing our expertise through successful engineering solutions
          </p>
        </div>

        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-card ${selectedProject === index ? 'active' : ''}`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="project-details">
            <div className="detail-header">
              <h3>{projects[selectedProject].title}</h3>
              <p className="project-category">{projects[selectedProject].category}</p>
            </div>
            
            <div className="detail-content">
              <p>{projects[selectedProject].description}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <h4>Duration</h4>
                  <p>{projects[selectedProject].duration}</p>
                </div>
                <div className="meta-item">
                  <h4>Client</h4>
                  <p>{projects[selectedProject].client}</p>
                </div>
              </div>

              <div className="technologies-used">
                <h4>Technologies Used</h4>
                <div className="tech-list">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <button className="btn btn-primary">View Case Study</button>
                <button className="btn btn-secondary">Request Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how we can bring your engineering vision to life</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 