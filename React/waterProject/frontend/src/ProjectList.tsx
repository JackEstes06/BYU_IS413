import { useEffect, useState } from 'react';
import { Project } from './types/Project';

function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch(
        'https://localhost:5000/api/Water/AllProjects'
      );
      const data = await response.json();
      setProjects(data);

      console.log(`Response: ${response}`);
      console.log(`Data: ${data}`);
    };

    fetchFood();
  }, []);

  return (
    <>
      <h1>Water Projects</h1>
      <br />
      {projects.map((p) => {
        return (
          <div id="projectCard">
            <h3>{p.projectName}</h3>
            <ul>
              <li>Project Type: {p.projectType}</li>
              <li>Project Type: {p.projectRegionalProgram}</li>
              <li>Project Type: {p.projectImpact}</li>
              <li>Project Type: {p.projectPhase}</li>
              <li>Project Type: {p.projectFunctionalityStatus}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default ProjectList;
