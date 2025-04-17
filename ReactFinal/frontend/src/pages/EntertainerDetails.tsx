import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  deleteEntertainer,
  fetchEntertainerById,
  updateEntertainer,
} from '../api/EntertainerAPI';
import { Entertainer } from '../types/Entertainer';

const EntertainerDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [entertainer, setEntertainer] = useState<Entertainer | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Entertainer>>({});

  useEffect(() => {
    const loadEntertainer = async () => {
      try {
        if (id) {
          const data = await fetchEntertainerById(parseInt(id));
          setEntertainer(data);
        }
      } catch (e) {
        console.error('Failed to load entertainer', e);
      } finally {
        setLoading(false);
      }
    };

    loadEntertainer();
  }, [id]);

  const handleDelete = async (entertainerId: number) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this entertainer?'
    );
    if (confirm) {
      try {
        await deleteEntertainer(entertainerId);
        navigate('/entertainers');
      } catch (e) {
        console.error('Failed to delete entertainer', e);
      }
    }
  };

  const handleEditClick = () => {
    if (entertainer) {
      setEditForm(entertainer);
      setIsEditing(true);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await updateEntertainer(
        id ? parseInt(id) : -1,
        editForm as Entertainer
      );

      if (!response) throw new Error('Failed to update');

      // Re-fetch the updated entertainer from backend
      const refreshed = await fetchEntertainerById(id ? parseInt(id) : -1);
      setEntertainer(refreshed);

      //   setEntertainer(response);
      setIsEditing(false);
    } catch (e) {
      console.error('Error updating entertainer', e);
    }
  };

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (!entertainer)
    return <div className="container mt-5">Entertainer not found.</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{entertainer.entStageName} Details</h2>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>SSN</th>
            <td>{entertainer.entSSN}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              {entertainer.entStreetAddress}, {entertainer.entCity},{' '}
              {entertainer.entState} {entertainer.entZipCode}
            </td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{entertainer.entPhoneNumber}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{entertainer.entEMailAddress || '—'}</td>
          </tr>
          <tr>
            <th>Web Page</th>
            <td>{entertainer.entWebPage || '—'}</td>
          </tr>
          <tr>
            <th>Date Entered</th>
            <td>{new Date(entertainer.dateEntered).toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex gap-2">
        <button className="btn btn-warning" onClick={handleEditClick}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(entertainer.entertainerId)}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary ms-auto"
          onClick={() => navigate('/entertainers')}
        >
          Back
        </button>
      </div>

      {isEditing && (
        <div className="card mt-4 p-4">
          <h4>Edit Entertainer</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Stage Name</label>
              <input
                className="form-control"
                name="entStageName"
                value={editForm.entStageName || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">SSN</label>
              <input
                className="form-control"
                name="entSSN"
                value={editForm.entSSN || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Street Address</label>
              <input
                className="form-control"
                name="entStreetAddress"
                value={editForm.entStreetAddress || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                className="form-control"
                name="entCity"
                value={editForm.entCity || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">State</label>
              <input
                className="form-control"
                name="entState"
                value={editForm.entState || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Zip Code</label>
              <input
                className="form-control"
                name="entZipCode"
                value={editForm.entZipCode || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                name="entPhoneNumber"
                value={editForm.entPhoneNumber || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                name="entEMailAddress"
                value={editForm.entEMailAddress || ''}
                onChange={handleFormChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Web Page</label>
              <input
                className="form-control"
                name="entWebPage"
                value={editForm.entWebPage || ''}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntertainerDetailsPage;
