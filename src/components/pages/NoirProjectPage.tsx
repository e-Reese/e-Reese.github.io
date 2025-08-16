import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

// Import heist images (resized versions)
import heistStripImage from '../../assets/images/Heist_Strip_v1_Med.jpeg';
import liveCameraImage from '../../assets/images/Heist_LiveCameraScreen-Annotated_Med.jpeg';
import nineGridImage from '../../assets/images/Heist_NineGrid-Annotated_Med.jpeg';
import controllersImage from '../../assets/images/Heist_Controllers_Med.jpeg';
import ledFixtureImage from '../../assets/images/Heist_LEDFixture-Annotated_Med.jpeg';
import audioAmpsImage from '../../assets/images/Heist_AudioAmps-Annotated_Med.jpeg';

const NoirProjectPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Noir: Immersive Puzzle Thriller</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="role">Lead Engineer</span>
          </div>
          <div className="featured-image">
            <img src={heistStripImage} alt="Noir Immersive ARG" />
            <p className="caption">Taking notes from ARGs and modern escape rooms, Noir bends reality by taking immersive storytelling into the real world</p>
          </div>
        </header>

        <section className="intro">
          <p>
            Using a network of PCs, micro-controllers, web applications, and Unreal Engine, Noir creates a fast-paced heist experience that can be deployed in any space. By breaking down the conventional barriers of a game world, Noir leaves the boundaries between fiction and real life intentionally gray.
          </p>
        </section>

        <section id="technical-overview">
          <h2>Technical Overview</h2>
          <ul className="materials-list">
            <li>Network of custom external controllers and touch screens controlling Unreal Engine</li>
            <li>Cloud synced computing with Microsoft back-end for instant feedback and authorization</li>
            <li>Live CCTV Camera integration in Unreal Engine</li>
            <li>Interactive and performant grid of CCTV views in Unreal Engine</li>
            <li>Custom Programmable LED fixtures</li>
            <li>Custom game controllers using circuit bent analogue hardware</li>
            <li>Seven discrete channels of surround sound from Unreal Engine</li>
          </ul>
        </section>

        <section id="implementation">
          <h2>Implementation Details</h2>
          
          <h3>Real-time CCTV System</h3>
          <div className="featured-image">
            <img src={liveCameraImage} alt="Live CCTV Camera in Unreal Engine" />
            <p className="caption">Live CCTV Camera in Unreal Engine</p>
          </div>
          <p>
            The CCTV system integrates real-world camera feeds directly into the Unreal Engine environment, allowing for seamless blending of physical and virtual spaces. This creates a unique immersive experience where players can't easily distinguish between what's real and what's part of the game.
          </p>

          <h3>Interactive CCTV Grid</h3>
          <div className="featured-image">
            <img src={nineGridImage} alt="Interactive CCTV Grid in Unreal Engine" />
            <p className="caption">Interactive and performant grid of CCTV views in Unreal Engine</p>
          </div>
          <p>
            The system features a highly performant grid of CCTV camera views that players can interact with in real-time. This allows for monitoring multiple spaces simultaneously and forms a crucial part of the heist gameplay experience.
          </p>

          <h3>Custom Hardware Integration</h3>
          <p>
            Noir utilizes custom-built hardware controllers that interface with the Unreal Engine environment. These include:
          </p>
          <ul>
            <li>Circuit-bent analog hardware repurposed as game controllers</li>
            <li>Custom programmable LED fixtures for environmental feedback</li>
            <li>Touch screen interfaces for direct interaction with game systems</li>
          </ul>
          
          <div className="featured-image">
            <img src={controllersImage} alt="Custom Game Controllers" />
            <p className="caption">Custom game controllers using circuit bent analogue hardware</p>
          </div>
          
          <div className="featured-image">
            <img src={ledFixtureImage} alt="Custom LED Fixtures" />
            <p className="caption">Custom programmable LED fixtures for environmental feedback</p>
          </div>
        </section>

        <section id="immersive-audio">
          <h2>Immersive Audio Experience</h2>
          <p>
            The project implements a sophisticated seven-channel surround sound system driven directly by Unreal Engine. This creates a fully immersive audio environment that responds dynamically to player actions and game events, further blurring the line between the virtual and physical worlds.
          </p>
          
          <div className="featured-image">
            <img src={audioAmpsImage} alt="Audio Amplifiers Setup" />
            <p className="caption">Seven discrete channels of surround sound from Unreal Engine</p>
          </div>
        </section>

        <section id="technical-challenges">
          <h2>Technical Challenges</h2>
          <p>
            Creating a system that seamlessly blends physical and virtual elements presented several technical challenges:
          </p>
          <ul>
            <li>Achieving low-latency integration of live camera feeds into Unreal Engine</li>
            <li>Developing a reliable communication protocol between custom hardware and the game engine</li>
            <li>Optimizing performance for real-time CCTV grid rendering</li>
            <li>Creating a cloud-based synchronization system for instant feedback across multiple devices</li>
            <li>Designing hardware interfaces that are intuitive yet maintain the immersive fiction</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

export default NoirProjectPage;
