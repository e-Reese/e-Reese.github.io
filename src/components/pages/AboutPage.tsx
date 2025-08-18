import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/About.css';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <section className="page-header">
        <h1>About Me</h1>
        <p className="lead">Learn more about my background and interests</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <p>Hello! I'm Ethan Reese, a software engineer and technology enthusiast with a passion for building innovative solutions to real-world problems.</p>
          
          <p>I specialize in developing applications and systems that make people's lives easier. My technical interests include embedded systems, web development, IoT devices, and automation.</p>
          
          <p>When I'm not coding, you can find me experimenting with new hardware projects, exploring the outdoors, or reading about the latest technology trends.</p>
          
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Python, JavaScript, C++, HTML/CSS</li>
            <li>Frameworks & Libraries: React, Node.js, Flask</li>
            <li>Tools & Technologies: Git, Docker, Linux, Raspberry Pi</li>
            <li>Other: UI/UX Design, Technical Writing, Project Management</li>
          </ul>
          
          <h2>Experience</h2>
          <p>This section will be updated soon with my professional experience and background.</p>
          
          <h2>Education</h2>
          <p>This section will be updated soon with my educational background.</p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
