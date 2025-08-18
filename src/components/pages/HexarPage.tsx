import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

const HexarPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Hexar</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="role">Lead Engineer</span>
          </div>
          <div className="featured-video">
            <video autoPlay loop muted playsInline className="header-video">
              <source src="/videos/hexar-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="caption">Hexar AR Collectables iOS Application</p>
          </div>
        </header>

        <section className="intro">
          <h2>Augmented reality collectables for fan engagement</h2>
          <p>
            Hexar is an augmented reality digital collectables iOS application. Fans can collect, record, and post their experiences in real life with the augmentation of their digital collection. Apple approved and released on iOS App Store.
          </p>
        </section>

        <section id="technical-overview">
          <h2>Technical Overview</h2>
          <ul className="tech-list">
            <li>Built in Unity using the AR Foundations packages</li>
            <li>Back-end built on Microsoft Azure and PlayFab
              <ul>
                <li>Includes blob storage, NoSQL asset queries, asset uploading automation, and several layers of authorization tokens</li>
              </ul>
            </li>
            <li>CI/CD with Azure Pipelines</li>
            <li>Source control with Atlassian BitBucket</li>
          </ul>
        </section>

        <section id="collections-architecture">
          <h2>Collections Architecture</h2>
          <div className="architecture-steps">
            <ol>
              <li>Collections begin with the fan scanning an Image Marker (AR Image Tracking)</li>
              <li>Unity sends an HTTP Request to a PlayFab Cloudscript Function</li>
              <li>Cloudscript Function triggers Azure HTTP Function</li>
              <li>Azure back-end processes authorization, grants collectables, and sends confirmation with appropriate asset URL</li>
              <li>Unity sends second HTTP request for an asset bundle download and unpacks accordingly</li>
            </ol>
          </div>
        </section>

        <section id="key-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Augmented reality image tracking and object placement</li>
            <li>Secure cloud-based asset delivery system</li>
            <li>User authentication and authorization</li>
            <li>Social sharing capabilities</li>
            <li>In-app collection management</li>
          </ul>
        </section>

        <section id="challenges">
          <h2>Technical Challenges</h2>
          <p>
            One of the main challenges was optimizing the AR experience for a wide range of iOS devices while maintaining high-quality 3D assets. We implemented dynamic asset loading based on device capabilities and network conditions.
          </p>
          <p>
            Another significant challenge was creating a secure yet efficient system for delivering digital collectables. We designed a multi-layered authorization system that prevented unauthorized access while maintaining fast response times.
          </p>
        </section>

        <section id="results">
          <h2>Results</h2>
          <p>
            The application was successfully launched on the iOS App Store, receiving positive feedback from users. The AR experience provided a unique way for fans to engage with digital collectables in real-world settings.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default HexarPage;
