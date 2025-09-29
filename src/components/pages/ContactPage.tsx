import React from 'react';
import Layout from '../layout/Layout';
import '../../styles/Contact.css';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <section className="page-header">
        <h1>Contact Me</h1>
        <p className="lead">Send cute cat videos.</p>
        <p className="lead">Feel free to reach out through the following platforms:</p>
        <div className="contact-method">
              <h3>LinkedIn</h3>
              <p><a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/ethanreese</a></p>
            </div>
            
            <div className="contact-method">
              <h3>GitHub</h3>
              <p><a href="https://github.com/e-reese" target="_blank" rel="noopener noreferrer">github.com/e-reese</a></p>
          </div>
      </section>
    </Layout>
  );
};

export default ContactPage;