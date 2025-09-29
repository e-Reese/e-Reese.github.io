import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

// Import images
import heroImage from '../../assets/images/SaveTheFlame_Panel_v1_Lrg.jpeg';

const SaveTheFlamePage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Save The Flame</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="role">Lead Audio Programmer and Composer</span>
          </div>
          <div className="featured-image">
            <img src={heroImage} alt="Save The Flame - An endless flying mobile game" />
            <p className="caption">Save The Flame - An endless flying mobile game</p>
          </div>
        </header>

        <section className="intro">
          <p>
            Save The Flame is an endless flying mobile game. Test your skills of flight through a whirlwind 
            pursuit of the stolen fire crystal. As the Lead Audio Programmer and Composer, I was responsible for 
            creating an immersive audio experience that enhances the gameplay and keeps players engaged.
          </p>
        </section>

        <section id="technical-overview">
          <h2>Technical Overview</h2>
          <ul className="tech-list">
            <li>Built in Unity (C#)</li>
            <li>Audio implementation in Wwise</li>
            <li>100% custom audio and implementation</li>
            <li>Interactive audio tightly synced with game-play mechanics</li>
            <li>Audio composed in Ableton and Logic Pro X</li>
            <li>Orchestral mock-up using Vienna Ensemble, NI Session Strings</li>
            <li>Live recorded Taikos, Guitar, and Toms</li>
            <li>Collaborated with game engineers for Wwise integration with Unity</li>
          </ul>
        </section>

        <section id="audio-implementation">
          <h2>Audio Implementation Details</h2>
          <p>
            The audio system for Save The Flame was designed to be highly responsive to gameplay events and player actions.
            Key aspects of the implementation include:
          </p>
          <ul>
            <li>
              <strong>Dynamic Music System:</strong> The soundtrack adapts to the player's progress and situation,
              increasing in intensity during challenging moments and celebrating achievements.
            </li>
            <li>
              <strong>Environmental Audio:</strong> Rich soundscapes that change based on the player's location
              in the game world, enhancing immersion.
            </li>
            <li>
              <strong>Interactive Sound Effects:</strong> Responsive audio cues that provide feedback for player
              actions and game events.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Carefully optimized audio assets and processing to ensure
              smooth performance on mobile devices.
            </li>
          </ul>
        </section>

        <section id="composition">
          <h2>Music Composition</h2>
          <p>
            The musical score for Save The Flame blends orchestral elements with electronic and world music influences,
            creating a unique sonic identity for the game. The composition process involved:
          </p>
          <ul>
            <li>
              <strong>Orchestral Arrangements:</strong> Using Vienna Ensemble and NI Session Strings to create
              rich, dynamic orchestral textures.
            </li>
            <li>
              <strong>Live Recordings:</strong> Incorporating authentic performances of Taikos, Guitar, and Toms
              to add organic depth and energy to the soundtrack.
            </li>
            <li>
              <strong>Adaptive Structures:</strong> Composing music with modular segments that could seamlessly
              transition between different game states.
            </li>
          </ul>
        </section>

        <section id="challenges">
          <h2>Technical Challenges</h2>
          <p>
            Creating an engaging audio experience for an endless flying game presented several unique challenges:
          </p>
          <ul>
            <li>
              <strong>Maintaining Interest:</strong> Designing audio that remains fresh and engaging during
              potentially long gameplay sessions without becoming repetitive.
            </li>
            <li>
              <strong>Mobile Performance:</strong> Optimizing audio quality while working within the performance
              constraints of mobile devices.
            </li>
            <li>
              <strong>Responsive Feedback:</strong> Ensuring that audio cues provide clear, immediate feedback
              for player actions in a fast-paced flying game.
            </li>
          </ul>
        </section>

        <section id="results">
          <h2>Results</h2>
          <p>
            The audio system received positive feedback from players and contributed significantly to the game's
            immersive experience. The dynamic music system in particular helped to enhance the gameplay
            experience by responding to the action and maintaining player engagement.
          </p>
          <p>
            Save The Flame is available for download on the App Store, allowing players to experience the
            fast-paced flying action and dynamic audio firsthand.
          </p>
          <div className="app-store-link">
            <a href="https://apps.apple.com/us/app/save-the-flame/id1234567890" target="_blank" rel="noopener noreferrer">
              Download on the App Store
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default SaveTheFlamePage;
