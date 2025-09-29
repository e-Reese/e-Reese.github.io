import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

// Import images
import heroImage from '../../assets/images/RollerRiot_Pannel_v1_Lrg.jpeg';

const RollerRiotPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Roller Riot</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="role">Lead Audio Programmer and Composer</span>
          </div>
          <div className="featured-image">
            <img src={heroImage} alt="Roller Riot - A side-to-side brawling mobile game" />
            <p className="caption">Roller Riot - A side-to-side brawling mobile game</p>
          </div>
        </header>

        <section className="intro">
          <p>
            Roller Riot is a side-to-side brawling mobile game. Survive as long as you can and take your revenge 
            in this cyberpunk world. As the Lead Audio Programmer and Composer, I was responsible for creating 
            a dynamic audio experience that enhances the fast-paced gameplay and immerses players in the 
            cyberpunk atmosphere.
          </p>
        </section>

        {/* Secondary image */}
        <div className="article-image">
          {/* Replace with actual image when available */}
          <div className="placeholder-image">
            <span>Roller Riot Frenzy Image</span>
          </div>
          <p className="caption">Frenzy mode in Roller Riot</p>
        </div>

        <section id="video-section">
          <h2>Gameplay Demo</h2>
          <div className="video-container">
            {/* Replace with actual video embed when available */}
            <div className="placeholder-video">
              <span>Roller Riot Gameplay Video</span>
            </div>
          </div>
        </section>

        <section id="technical-overview">
          <h2>Technical Overview</h2>
          <ul className="tech-list">
            <li>Built in Unity (C#)</li>
            <li>Audio implementation in Wwise</li>
            <li>100% custom audio and implementation</li>
            <li>Interactive audio tightly synced with game-play mechanics</li>
            <li>Synth and SFX design in Reaktor, Kontakt, and Massive</li>
            <li>Audio composed in Ableton and Logic Pro X</li>
            <li>Collaborated with game engineers for Wwise integration with Unity</li>
          </ul>
        </section>

        <section id="audio-implementation">
          <h2>Audio Implementation Details</h2>
          <p>
            The audio system for Roller Riot was designed to be highly responsive to gameplay events and player actions.
            Key aspects of the implementation include:
          </p>
          <ul>
            <li>
              <strong>Dynamic Music System:</strong> The soundtrack adapts to the game state, increasing in intensity
              during combat and transitioning smoothly between different gameplay modes.
            </li>
            <li>
              <strong>Procedural Sound Effects:</strong> Many sound effects are generated procedurally based on
              player actions and environmental factors, ensuring a varied audio experience.
            </li>
            <li>
              <strong>Spatial Audio:</strong> Sound sources are positioned in 3D space to enhance immersion and
              provide gameplay cues about enemy positions and events.
            </li>
            <li>
              <strong>Performance Optimization:</strong> The audio system was carefully optimized to minimize
              CPU usage while maintaining high-quality sound on mobile devices.
            </li>
          </ul>
        </section>

        <section id="challenges">
          <h2>Technical Challenges</h2>
          <p>
            Creating a responsive audio system for a fast-paced mobile game presented several challenges:
          </p>
          <ul>
            <li>
              <strong>Mobile Performance:</strong> Balancing audio quality with performance constraints on mobile devices
              required careful optimization of audio assets and runtime processing.
            </li>
            <li>
              <strong>Timing Precision:</strong> Synchronizing audio events with visual gameplay elements demanded
              precise timing and low-latency audio playback.
            </li>
            <li>
              <strong>Dynamic Range:</strong> Designing audio that works well across different listening environments,
              from phone speakers to headphones, while maintaining the intended experience.
            </li>
          </ul>
        </section>

        <section id="results">
          <h2>Results</h2>
          <p>
            The audio system received positive feedback from players and contributed significantly to the game's
            immersive cyberpunk atmosphere. The dynamic music system in particular helped to enhance the gameplay
            experience by responding to the action and maintaining player engagement.
          </p>
          <p>
            Roller Riot is available for download on the App Store, allowing players to experience the fast-paced
            action and dynamic audio firsthand.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default RollerRiotPage;


