import { Entertainer } from '../types/Entertainer';

const API_URL =
  'https://estes-413final-backend-hqhxfvedfzhed6h4.centralus-01.azurewebsites.net';

// Get All Entertainers
export const fetchEntertainers = async () => {
  try {
    const response = await fetch(`${API_URL}/AllEntertainers`);

    if (!response.ok) {
      throw new Error('Failed to fetch entertainers');
    }

    return await response.json();
  } catch (e) {
    console.error('Error fetching projects: ', e);
    throw e;
  }
};

// Get a specific entertainer
export const fetchEntertainerById = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/Entertainers/${id}`);
    if (!response.ok) throw new Error('Failed to fetch entertainer');
    return await response.json();
  } catch (e) {
    console.error('Error fetching entertainer: ', e);
    throw e;
  }
};

// Add an entertainer to the database
export const addEntertainer = async (
  newEntertainer: Entertainer
): Promise<Entertainer> => {
  try {
    const response = await fetch(`${API_URL}/AddEntertainer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntertainer),
    });

    if (!response) {
      throw new Error('Failed to add entertainer');
    }

    return await response.json();
  } catch (e) {
    console.error(`Error adding a entertainer: ${e}`);
    throw e;
  }
};

// Update an existing entertainer
export const updateEntertainer = async (
  entertainerId: number,
  updatedEntertainer: Entertainer
): Promise<Entertainer> => {
  try {
    const response = await fetch(
      `${API_URL}/UpdateEntertainer/${entertainerId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEntertainer),
      }
    );

    if (!response) {
      throw new Error('Failed to update entertainer');
    }

    return await response.json();
  } catch (e) {
    console.error(`Error updating entertainer: ${e}`);
    throw e;
  }
};

// Delete an existing entertainers
export const deleteEntertainer = async (
  entertainerId: number
): Promise<void> => {
  try {
    const response = await fetch(
      `${API_URL}/DeleteEntertainer/${entertainerId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response) {
      throw new Error('Failed to delete entertainer');
    }

    return;
  } catch (e) {
    console.error(`Error deleting entertainer: ${e}`);
    throw e;
  }
};
