import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/ProjectDetail.css';
import divvyBikeShareImage from '../../assets/images/DivvyThumbnail_AnimatedBike_v1.jpeg';
import divvyWhenPeopleRideImage from '../../assets/images/Divvy_WhenPeopleRide_v1.jpg';
import divvyHowLongPeopleRideImage from '../../assets/images/Divvy_HowLongPeopleRide_v1.jpg';
import divvyWhatPeopleRideImage from '../../assets/images/Divvy_WhatPeopleRide_v1.jpg';
import divvyWherePeopleRideImage from '../../assets/images/Divvy_WherePeopleRide_v1.jpg';

const BikeSharePage: React.FC = () => {
  return (
    <Layout>
      <article>
        <header className="article-header">
          <h1>Turning Casual Cyclists into Loyal Members: Divvy’s Marketing Strategy</h1>
          <div className="meta">
            <span className="author">By Ethan Reese</span>
            <span className="date">March 2024</span>
          </div>
          <div className="featured-image">
            <img src={divvyBikeShareImage} alt="Divvy Bike Share Data Analysis" />
            <p className="caption">Comprehensive marketing strategy for Divvy Bike Share service</p>
          </div>
        </header>

        <section className="executive-summary">
          <h2>Executive Summary</h2>
          <p>
          Bike-sharing has become a cornerstone of sustainable transportation in major cities, and Chicago’s Divvy program is no exception. 
          Yet, the challenge remains: how can Divvy convert casual riders into committed annual members? By analyzing ride data from 2023–2024, we uncover clear patterns that suggest where and how marketing efforts should focus.
          </p>
        </section>

        <section id="market-analysis">
          <h2>Understanding Rider Behavior</h2>
          
          <h3>When Do People Ride?</h3>
          <p>
          The data shows a distinct divide between casual riders and annual members. 
          Casual riders overwhelmingly prefer weekends, while members use the service more frequently during the week. 
          Both groups ride more in the summer months, but casual riders' spikes in activity suggest their rides are largely leisure-driven.
          </p>
          <div className="article-image">
            <img src={divvyWhenPeopleRideImage} alt="Chart showing when people ride Divvy bikes" />
            <p className="caption">Ride frequency comparison between casual riders and annual members</p>
          </div>
          
          <h3>How Long Are the Rides?</h3>
          <p>
          Casual riders don't just ride differently—they ride longer. 
          Their trips extend significantly, especially on weekends and throughout spring and summer (April through August). 
          This supports the idea that their rides are more recreational than utilitarian.
          </p>
          <div className="article-image">
            <img src={divvyHowLongPeopleRideImage} alt="Chart showing ride duration comparison between casual riders and members" />
            <p className="caption">Ride duration comparison between casual riders and annual members</p>
          </div>
          
          <h3>What Types of Bikes Do They Use?</h3>
          <p>
          While Divvy offers multiple bike types, casual riders show only a slight preference for classic bikes. 
          Members ride both classic and electric bikes in similar proportions. 
          For marketing strategy, this indicates that campaigns should remain bike-neutral, appealing broadly across both options.
          </p>
          <div className="article-image">
            <img src={divvyWhatPeopleRideImage} alt="Chart showing bike type preferences between casual riders and members" />
            <p className="caption">Bike type preferences comparison between casual riders and annual members</p>
          </div>

          <h3>Where Do They Ride?</h3>
          <p>
          Perhaps the most telling insight is where casual riders choose to go. 
          Nearly 15% of rides start or end at just five stations—each located near Chicago's lakeshore and popular tourist attractions. 
          These hotspots are magnets for visitors and leisure riders, making them prime areas for engagement campaigns.
          </p>
          <div className="article-image">
            <img src={divvyWherePeopleRideImage} alt="Map showing popular Divvy bike stations for casual riders and members" />
            <p className="caption">Popular station locations comparison between casual riders and annual members</p>
          </div>
        </section>

        <section id="marketing-recommendations">
          <h2>Marketing Recommendations</h2>
          
          <h3>From the data, three key strategies emerge:</h3>
          <ol>
            <li><strong>Time Campaigns to Match Riding Behavior</strong></li>
            <p>Focus membership promotions on weekends and during the summer, when casual ridership peaks.</p>
            <li><strong>Engage Leisure Riders and Tourists</strong></li>
            <p>Tailor messaging that highlights the value of an annual pass even for those who ride recreationally—position it as a way to explore the city with freedom.</p>
            <li><strong>Target High-Traffic Stations</strong></li>
            <p>Concentrate marketing at the five most frequented stations along the coast and near tourist attractions. Visibility here ensures campaigns reach the largest pool of casual riders.</p>
          </ol>
        </section>

        <section id="conclusion">
          <h2>Final Thoughts</h2>
          <p>
          Divvy has an opportunity to turn casual weekend cyclists into year-round members by meeting them where they ride, when they ride, and how they ride. 
          By combining targeted station-level engagement with seasonally timed campaigns, the program can grow its membership base while deepening its role in Chicago’s cycling culture.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default BikeSharePage;
