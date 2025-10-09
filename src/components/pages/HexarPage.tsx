import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';
import architectureImage from '../../assets/images/Hexar_Collections_Azure_Architecture_V3.jpeg';
import headerVideo from '../../assets/videos/HexarPage_HeaderVideo_v4.mp4';

const HexarPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1><strong>Building Hexar:</strong> <br></br>Augmented Reality Collectibles Bringing Fan Experiences to Life</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="role">Lead Engineer (Oct 2021 – Oct 2024)</span>
          </div>
          <div className="featured-video">
            <video autoPlay loop muted playsInline className="header-video">
              <source src={headerVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="caption">Hexar AR Collectibles iOS Application</p>
          </div>
        </header>

        <section className="intro">
          <p>
            In today's world of digital fandom, the line between virtual and real-world experiences is disappearing fast. Hexar was born from that idea—a platform designed to merge augmented reality (AR) collectibles with live fan engagement.
          </p>
          <p>
            As Lead Engineer at Hexar LLC, I led the development of this scalable AR collections platform from concept to release, bringing together immersive technology, real-time data, and distributed cloud infrastructure to power unforgettable fan experiences.
          </p>
        </section>

        <section id="what-is-hexar">
          <h2>What Is Hexar?</h2>
          <p>
            Hexar is an augmented reality digital collectibles app available on iOS, allowing fans to collect, record, and share their real-world experiences through the lens of their digital collections.
          </p>
          <p>
            Built with Unity and powered by Azure, Hexar turns every event into an interactive layer of digital storytelling—where collecting an item isn't just a tap on a screen, but part of a shared, location-based memory.
          </p>
          <blockquote>
            <strong>Apple Approved and Released</strong> — Hexar is live on the iOS App Store.
          </blockquote>
        </section>
        

        <section id="technology">
          <h2>Behind the Scenes: The Technology That Powers Hexar</h2>
          <p>
            Developing Hexar was a challenge that combined <strong>real-time 3D rendering</strong>, <strong>cloud computing</strong>, and <strong>data-driven automation</strong>. Here's a look under the hood:
          </p>
          <ul className="tech-list">
            <li><strong>Unity + AR Foundation</strong>: The AR front-end was built with Unity using AR Foundation packages to handle real-world tracking, spatial anchors, and in-scene augmentation.</li>
            <li><strong>Back-End on Microsoft Azure and PlayFab</strong>:
              <ul>
                <li>Managed <strong>blob storage</strong> for high-volume digital assets.</li>
                <li>Designed <strong>NoSQL queries</strong> for fast, scalable asset retrieval.</li>
                <li>Implemented <strong>automated asset uploading</strong> workflows.</li>
                <li>Integrated multiple layers of <strong>authorization tokens</strong> for secure API access.</li>
              </ul>
            </li>
            <li><strong>CI/CD Pipeline with Azure Pipelines</strong>: End-to-end build, test, and deployment automation reduced integration time by 85%.</li>
            <li><strong>Source Control</strong>: Managed with <strong>Atlassian BitBucket</strong>, ensuring robust versioning and collaboration workflows.</li>
          </ul>
          
          <div className="article-image">
            <img src={architectureImage} alt="Hexar Collections Azure Architecture Diagram" />
            <p className="caption">Collections Architecture: From Image Tracking to Asset Delivery</p>
          </div>
        </section>

        <section id="engineering-highlights">
          <h2>Engineering Highlights</h2>
          <p>
            As the <strong>Lead Engineer (Oct 2021 – Oct 2024)</strong>, I owned the full lifecycle of Hexar's technical architecture—from system design to live event analytics. Some of the most impactful contributions included:
          </p>
          <ul className="features-list">
            <li><strong>Cloud Systems Design</strong> – Developed and deployed distributed APIs and scalable services on Azure.</li>
            <li><strong>Front-End Development</strong> – Engineered a dynamic front-end using Unity (C#) for seamless AR experiences.</li>
            <li><strong>Automation & DevOps</strong> – Built CI/CD systems using Python and Azure to drastically reduce integration overhead.</li>
            <li><strong>Data Analytics</strong> – Analyzed large-scale event data with Python, SQL, and Excel, providing actionable insights to stakeholders.</li>
            <li><strong>Agile Refactoring Leadership</strong> – Led a full-system code refactor to improve performance, maintainability, and development velocity.</li>
          </ul>
        </section>

        <section id="conclusion">
          <h2>A Platform That Connects Fans and Experiences</h2>
          <p>
            Hexar represents more than just an app—it's an experiment in how augmented reality can deepen real-world connections. By allowing fans to collect digital artifacts tied to physical experiences, Hexar transforms ordinary events into lasting, shareable moments.
          </p>
          <p>
            With its foundation in scalable cloud architecture and a focus on user delight, Hexar stands as an example of how thoughtful engineering can power emotionally resonant technology.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default HexarPage;

