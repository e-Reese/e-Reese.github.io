import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

// Import images
import heroImage from '../../assets/images/ElectricityDashboard_HeroPanelImage_Med.jpeg';

const ElectricityDashboardPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Electricity Dashboard</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="date">April 2024</span>
          </div>
          <div className="featured-image">
            <img src={heroImage} alt="Electricity Dashboard Interface" />
            <p className="caption">Interactive dashboard for monitoring electricity usage and costs</p>
          </div>
        </header>

        <section className="intro">
          <p>
            The Electricity Dashboard is a comprehensive web application designed to monitor, analyze, and visualize 
            electricity usage patterns. This tool provides real-time insights into consumption trends, cost analysis, 
            and environmental impact metrics, helping users make informed decisions about their energy usage.
          </p>
        </section>

        <section id="features">
          <h2>Key Features</h2>
          <ul>
            <li>Real-time electricity usage monitoring with intuitive visualizations</li>
            <li>Historical data analysis with customizable date ranges</li>
            <li>Cost calculation and projection based on variable rate plans</li>
            <li>Environmental impact metrics (carbon footprint)</li>
            <li>Usage pattern recognition and anomaly detection</li>
            <li>Customizable alerts and notifications for unusual consumption</li>
            <li>Mobile-responsive design for monitoring on any device</li>
          </ul>
        </section>

        <section id="technology">
          <h2>Technology Stack</h2>
          <p>
            The dashboard is built using modern web technologies to ensure performance, reliability, and a seamless user experience:
          </p>
          <ul>
            <li><strong>Frontend:</strong> React.js with TypeScript for type safety and component architecture</li>
            <li><strong>Data Visualization:</strong> D3.js and Chart.js for interactive and responsive charts</li>
            <li><strong>Backend:</strong> Node.js with Express for API endpoints and data processing</li>
            <li><strong>Database:</strong> MongoDB for time-series data storage with efficient querying</li>
            <li><strong>Real-time Updates:</strong> WebSockets for live data streaming</li>
            <li><strong>Authentication:</strong> JWT-based secure user authentication</li>
            <li><strong>Deployment:</strong> Docker containers with CI/CD pipeline</li>
          </ul>
        </section>

        <section id="implementation">
          <h2>Implementation Details</h2>
          <p>
            The dashboard interfaces with smart meter APIs or IoT devices to collect electricity usage data. 
            This data is processed, normalized, and stored in a time-series database optimized for quick retrieval 
            of historical information.
          </p>
          <p>
            The application employs several advanced features:
          </p>
          <ul>
            <li>
              <strong>Predictive Analytics:</strong> Machine learning algorithms analyze usage patterns to predict 
              future consumption and potential cost savings opportunities.
            </li>
            <li>
              <strong>Comparative Analysis:</strong> Users can benchmark their usage against similar households 
              or previous time periods to identify efficiency improvements.
            </li>
            <li>
              <strong>Rate Optimization:</strong> The system can suggest optimal electricity rate plans based on 
              usage patterns and available provider options.
            </li>
            <li>
              <strong>Integration Capabilities:</strong> APIs allow for integration with smart home systems, 
              enabling automated responses to usage patterns or price signals.
            </li>
          </ul>
        </section>

        <section id="user-experience">
          <h2>User Experience Design</h2>
          <p>
            The dashboard was designed with a focus on accessibility and intuitive interaction. Key UX considerations include:
          </p>
          <ul>
            <li>Simplified data visualization that communicates complex information clearly</li>
            <li>Progressive disclosure of advanced features to avoid overwhelming new users</li>
            <li>Customizable dashboard layouts that adapt to user preferences</li>
            <li>Accessibility compliance ensuring the tool is usable by everyone</li>
            <li>Dark mode support to reduce eye strain during nighttime usage</li>
          </ul>
        </section>

        <section id="challenges">
          <h2>Technical Challenges</h2>
          <p>
            Developing the Electricity Dashboard presented several interesting technical challenges:
          </p>
          <ul>
            <li>
              <strong>Data Volume:</strong> Handling and efficiently querying large volumes of time-series data 
              required careful database optimization and caching strategies.
            </li>
            <li>
              <strong>Real-time Updates:</strong> Implementing efficient WebSocket connections that maintain 
              performance even with many concurrent users.
            </li>
            <li>
              <strong>Cross-device Consistency:</strong> Ensuring a consistent experience across desktop, tablet, 
              and mobile devices with varying screen sizes and capabilities.
            </li>
            <li>
              <strong>API Integration:</strong> Creating flexible adapters for various electricity provider APIs 
              and IoT device protocols, each with different data formats and authentication methods.
            </li>
          </ul>
        </section>

        <section id="impact">
          <h2>Impact and Results</h2>
          <p>
            The Electricity Dashboard has demonstrated significant benefits for its users:
          </p>
          <ul>
            <li>Average of 15% reduction in electricity costs through improved usage awareness</li>
            <li>Identification of energy-inefficient appliances and behaviors</li>
            <li>Enhanced ability to budget for electricity expenses with predictive cost modeling</li>
            <li>Reduced environmental impact through more conscious electricity consumption</li>
          </ul>
        </section>

        <section id="future">
          <h2>Future Development</h2>
          <p>
            Ongoing and planned enhancements to the dashboard include:
          </p>
          <ul>
            <li>Integration with additional smart home platforms and IoT devices</li>
            <li>Enhanced machine learning capabilities for more accurate predictions</li>
            <li>Expanded comparative analytics with anonymized community data</li>
            <li>Development of mobile applications for iOS and Android</li>
            <li>Implementation of voice interface for accessibility</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

export default ElectricityDashboardPage;
