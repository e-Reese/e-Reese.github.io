import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';

// Import images
import heroImage from '../../assets/images/ElectricityDashboard_HeroPanelImage_Med.jpeg';
import generationView from '../../assets/images/ElecDashboard_Generation.jpeg';
import priceSalesFullView from '../../assets/images/ElecDashboard_Price_Sales_Full.jpeg';
import priceSalesFilteredView from '../../assets/images/ElecDashboard_Price_Sales_Filtered.jpeg';
import revenueView from '../../assets/images/ElecDashboard_Revenue.jpeg';

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
            electricity usage patterns. This tool provides dynamic insights into consumption trends, cost analysis, 
            and environmental impact metrics, helping users make informed decisions about their energy usage.
          </p>
        </section>

        <section id="features">
          <h2>Key Features</h2>
          <ul>
            <li>Interactive electricity usage monitoring with intuitive visualizations</li>
            <li>Historical data analysis with customizable date ranges</li>
            <li>Cost calculation and projection based on variable rate plans</li>
            <li>Environmental impact metrics (carbon footprint)</li>
            <li>Usage pattern recognition and anomaly detection</li>
            <li>Customizable alerts and notifications for unusual consumption</li>
            <li>Mobile-responsive design for monitoring on any device</li>
          </ul>
        </section>

        <section id="technology">
          <h2>Technical Overview</h2>
          <p>This dashboard shows electricity generation, sales, and revenue data from 2023 in an intuitive format.<br/>
          Dashboard can be found <a href="https://public.tableau.com/views/Electricity-SalesAndGeneration/Generation?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer">here on Tableau</a>.
          </p>  
          <ul>
            <li><strong>Data Cleaning & Formatting:</strong> SQL and Tableau</li>
            <li><strong>Data Analyzation & Visualization:</strong> Tableau for interactive and responsive charts</li>
            <li><strong>Data Source:</strong> Data drawn from the <a href="https://www.eia.gov/opendata/browser/" target="_blank" rel="noopener noreferrer">U.S. EIA Open Data Browser</a></li>
            <li><strong>Database:</strong> MS SQL Server</li>
            <li><strong>Code Repository:</strong> <a href="https://github.com/e-Reese/EnergyCaseStudy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </section>

        <section id="dashboard-views">
          <h2>Interactive Dashboard Views</h2>
          <p>
            The dashboard provides three distinct views: Generation tracks electricity production by source and 
            region, Price and Sales analyzes market pricing and volume, and Revenue monitors financial performance. 
            Each view includes a dynamic filtering panel that allows users to refine data by state, sector, and 
            producer type. The images below show both full and filtered datasets, demonstrating the side panel 
            controls for targeted analysis.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '20px 0' }}>
            <div>
              <img src={generationView} alt="Electricity Generation Dashboard View" style={{ width: '100%', height: 'auto' }} />
              <p className="caption">Generation view displaying electricity production metrics</p>
            </div>
            <div>
              <img src={revenueView} alt="Revenue Dashboard View" style={{ width: '100%', height: 'auto' }} />
              <p className="caption">Revenue view analyzing financial metrics and sales performance</p>
            </div>
            <div>
              <img src={priceSalesFullView} alt="Price and Sales Dashboard - Full Data" style={{ width: '100%', height: 'auto' }} />
              <p className="caption">Price and sales view showing complete dataset</p>
            </div>
            <div>
              <img src={priceSalesFilteredView} alt="Price and Sales Dashboard - Filtered View" style={{ width: '100%', height: 'auto' }} />
              <p className="caption">Filtered view demonstrating dynamic data refinement</p>
            </div>
          </div>
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
              <strong>Interactive Performance:</strong> Ensuring responsive user interactions and smooth 
              filtering capabilities when working with large datasets across multiple visualizations.
            </li>
            <li>
              <strong>Cross-device Consistency:</strong> Ensuring a consistent experience across desktop, tablet, 
              and mobile devices with varying screen sizes and capabilities.
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  );
};

export default ElectricityDashboardPage;

