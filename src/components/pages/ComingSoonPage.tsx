import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import '../../styles/ComingSoon.css';

const ComingSoonPage: React.FC = () => {
  return (
    <Layout>
      <div className="coming-soon">
        <h1>Coming Soon</h1>
        <p>This project is currently under development. Check back later for updates!</p>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </div>
    </Layout>
  );
};

export default ComingSoonPage;
