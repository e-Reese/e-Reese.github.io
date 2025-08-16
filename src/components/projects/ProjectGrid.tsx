import React from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import '../../styles/Projects.css';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          imagePlaceholder={project.imagePlaceholder}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
