import React from 'react';
import Layout from '../layout/Layout';
import ProjectGrid from '../projects/ProjectGrid';
import { ProjectCardProps } from '../projects/ProjectCard';
import '../../styles/Home.css';

// Import images
import raspberryPiRouterImage from '../../assets/images/TravelRouter_Generated_v1_Med.jpeg';
import alpacaTraderImage from '../../assets/images/AlpacaTraderThumbnail_Wide.png';
import heistStripImage from '../../assets/images/Heist_Strip_Generated_v1_Med.jpeg';
import hexarThumbnailImage from '../../assets/images/Hexar_ProjectCardThumbnail_Wide_v2_Med.jpeg';
import electricityDashboardImage from '../../assets/images/ElectricityDashboard_HeroPanelImage_Med.jpeg';
import rollerRiotImage from '../../assets/images/RollerRiot_Pannel_v1_Lrg.jpeg';
import saveTheFlameImage from '../../assets/images/SaveTheFlame_Panel_v1_Lrg.jpeg';

const HomePage: React.FC = () => {
  const featuredProjects: ProjectCardProps[] = [
    {
      title: 'Hexar AR',
      description: 'Augmented reality collectables iOS app for fan engagement built with Unity and Azure.',
      imageUrl: hexarThumbnailImage,
      link: '/projects/hexar'
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
      title: 'Raspberry Pi Travel Router',
      description: 'A custom travel router built with Raspberry Pi that creates a secure network while traveling.',
      imageUrl: raspberryPiRouterImage,
      link: '/projects/travel-router'
    },
    {
      title: 'Divvy Bike Share Marketing Strategy',
      description: 'A comprehensive marketing strategy for Divvy, Chicago\'s bike sharing service to increase user engagement and market penetration.',
      imagePlaceholder: 'Divvy Bike Share',
      link: '/projects/bike-share'
    },
    {
      title: 'Electricity Dashboard',
      description: 'An interactive web application for monitoring and analyzing electricity usage patterns and costs.',
      imageUrl: electricityDashboardImage,
      link: '/projects/electricity-dashboard'
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
