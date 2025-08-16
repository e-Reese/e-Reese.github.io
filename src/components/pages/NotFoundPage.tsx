import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import '../../styles/NotFound.css';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
