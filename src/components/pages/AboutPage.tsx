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
          
          <p>I specialize in developing applications and systems that make people's lives easier or more captivating! My technical interests include embedded systems, game development, web development, IoT devices, audio programming, and automation.</p>
          
          <p>When I'm not coding, you can find me experimenting with new hardware projects, making music, or reading some silly fanfic.</p>
          
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Python, C#, C/C++, JavaScript/TypeScript, R, Julia</li>
            <li>Game Development: Unreal Engine, Unity</li>
            <li>Audio & Visual Programming: JUCE, TouchDesigner</li>
            <li>Embedded Systems: Raspberry Pi, Arduino, custom hardware integration</li>
            <li>Web Development: React, Node.js, Flask</li>
            <li>Tools & Technologies: Git, Docker, Linux</li>
          </ul>
          
          
          <h2>Education</h2>
          <p>Jazz school. But actually graduated.</p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
