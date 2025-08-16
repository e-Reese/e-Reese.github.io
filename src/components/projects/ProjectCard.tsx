import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Projects.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imagePlaceholder?: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  imagePlaceholder,
  link
}) => {
  return (
    <div className="project-card">
      <Link to={link} className="card-link">{title}</Link>
      <div className="project-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          <div className="placeholder-image">
            <span>{imagePlaceholder || title}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
