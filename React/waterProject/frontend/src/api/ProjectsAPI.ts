import { Project } from '../types/Project';

const API_URL = 'https://localhost:5000/api/Water';

interface FetchProjectsResponse {
  projects: Project[];
  numProjects: number;
}

export const fetchProjects = async (
  pageSize: number,
  pageNum: number,
  selectedCategories: string[]
): Promise<FetchProjectsResponse> => {
  try {
    const categoryParams = selectedCategories
      .map((c) => `projectTypes=${encodeURIComponent(c)}`)
      .join('&');

    const response = await fetch(
      `${API_URL}/AllProjects?cardsPerPage=${pageSize}&pageNum=${pageNum}${selectedCategories.length ? `&${categoryParams}` : ''}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    return await response.json();
  } catch (e) {
    console.error('Error fetching projects: ', e);
    throw e;
  }
};

export const addProject = async (newProject: Project): Promise<Project> => {
  try {
    const response = await fetch(`${API_URL}/AddProject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });

    if (!response) {
      throw new Error('Failed to add project');
    }

    return await response.json();
  } catch (e) {
    console.error(`Error adding a project: ${e}`);
    throw e;
  }
};

export const updateProject = async (
  projectId: number,
  updatedProject: Project
): Promise<Project> => {
  try {
    const response = await fetch(`${API_URL}/UpdateProject/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    });

    if (!response) {
      throw new Error('Failed to update project');
    }

    return await response.json();
  } catch (e) {
    console.error(`Error updating project: ${e}`);
    throw e;
  }
};

export const deleteProject = async (projectId: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/DeleteProject/${projectId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response) {
      throw new Error('Failed to delete project');
    }

    return;
  } catch (e) {
    console.error(`Error deleting project: ${e}`);
    throw e;
  }
};
