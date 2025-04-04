import { Project } from '../types/Project';

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
      `https://localhost:5000/api/Water/AllProjects?cardsPerPage=${pageSize}&pageNum=${pageNum}${selectedCategories.length ? `&${categoryParams}` : ''}`
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
