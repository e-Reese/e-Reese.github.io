import React, { useState } from 'react';
import Layout from '../layout/Layout';
import '../../styles/Contact.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - no actual message was sent)');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      <section className="page-header">
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations, questions, or just to say hello</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>I'm always interested in new projects and opportunities. Feel free to reach out through any of the following methods:</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <p><a href="mailto:contact@example.com">contact@example.com</a></p>
            </div>
            
            <div className="contact-method">
              <h3>LinkedIn</h3>
              <p><a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/ethanreese</a></p>
            </div>
            
            <div className="contact-method">
              <h3>GitHub</h3>
              <p><a href="https://github.com/e-reese" target="_blank" rel="noopener noreferrer">github.com/e-reese</a></p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
