import React from 'react';
import Layout from '../layout/Layout';
import ProjectGrid from '../projects/ProjectGrid';
import { ProjectCardProps } from '../projects/ProjectCard';
import '../../styles/Home.css';

// Import images
import raspberryPiRouterImage from '../../assets/images/TravelRouter_Generated_v1_Med.jpeg';
import alpacaTraderImage from '../../assets/images/AlpacaTraderThumbnail_Wide.png';
import heistStripImage from '../../assets/images/Heist_Strip_Generated_v1_Med.jpeg';

const HomePage: React.FC = () => {
  const featuredProjects: ProjectCardProps[] = [
    {
      title: 'Raspberry Pi Travel Router',
      description: 'A custom travel router built with Raspberry Pi that creates a secure network while traveling.',
      imageUrl: raspberryPiRouterImage,
      link: '/projects/travel-router'
    },
    {
      title: 'Noir: Immersive Puzzle Thriller',
      description: 'An immersive ARG experience that blends Unreal Engine with custom hardware for a unique heist adventure.',
      imageUrl: heistStripImage,
      link: '/projects/noir'
    },
    {
      title: 'Alpaca Trader',
      description: 'A modular Python implementation for trading options spread strategies using the Alpaca API.',
      imageUrl: alpacaTraderImage,
      link: '/projects/alpaca-trader'
    },
    {
      title: 'Weather Station',
      description: 'A DIY weather station that collects and displays local weather data.',
      imagePlaceholder: 'Weather Station',
      link: '/projects/coming-soon'
    },
    {
      title: 'Fitness Tracker App',
      description: 'A mobile application for tracking workouts and fitness progress.',
      imagePlaceholder: 'Fitness Tracker App',
      link: '/projects/coming-soon'
    },
    {
      title: 'Recipe Management System',
      description: 'A digital recipe book with meal planning and grocery list features.',
      imagePlaceholder: 'Recipe Management System',
      link: '/projects/coming-soon'
    },
    {
      title: 'Home Media Server',
      description: 'A self-hosted media server for streaming personal content to any device.',
      imagePlaceholder: 'Home Media Server',
      link: '/projects/coming-soon'
    },
    {
      title: 'Language Learning Tool',
      description: 'An application designed to help users learn new languages efficiently.',
      imagePlaceholder: 'Language Learning Tool',
      link: '/projects/coming-soon'
    },
    {
      title: 'Task Management System',
      description: 'A productivity tool for organizing tasks and managing projects.',
      imagePlaceholder: 'Task Management System',
      link: '/projects/coming-soon'
    }
  ];

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1>Ethan Reese</h1>
          <p className="lead">Software Engineer & Technology Enthusiast</p>
          <p>I build innovative solutions to real-world problems using modern technologies.</p>
          <div className="hero-buttons">
            {/* Add buttons here if needed */}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <ProjectGrid projects={featuredProjects} />
      </section>
    </Layout>
  );
};

export default HomePage;
