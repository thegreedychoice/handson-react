/* import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

// this is a reusable list component
// this will be rendered inside projects page where we pass the actual data into this component
// This component has the following child components:
// - Project Card
// - Project Form

interface ProjectListProps {
  projects: Array<Project>;
}

function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEditing = (project: Project) => {
    setProjectBeingEdited(project);
    console.log('Editing Project' + project.id);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
    console.log('Project Edit Cancelled');
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm project={project} onCancel={cancelEditing} />
          ) : (
            <ProjectCard project={project} onEdit={handleEditing} />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
 */

export {};
