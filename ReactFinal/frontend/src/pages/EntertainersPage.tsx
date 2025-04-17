import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchEntertainers, addEntertainer } from '../api/EntertainerAPI';
import { Entertainer } from '../types/Entertainer';

const defaultFormState: Partial<Entertainer> = {
  entStageName: '',
  entSSN: '',
  entStreetAddress: '',
  entCity: '',
  entState: '',
  entZipCode: '',
  entPhoneNumber: '',
  entEMailAddress: '',
  entWebPage: '',
  dateEntered: new Date().toISOString(),
};

const EntertainersPage: React.FC = () => {
  const [entertainers, setEntertainers] = useState<Entertainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] =
    useState<Partial<Entertainer>>(defaultFormState);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEntertainers = async () => {
      try {
        const data = await fetchEntertainers();
        setEntertainers(data);
      } catch (e) {
        console.error('Error loading entertainers:', e);
      } finally {
        setLoading(false);
      }
    };

    loadEntertainers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const added = await addEntertainer(formData as Entertainer);
      setEntertainers((prev) => [...prev, added]);
      setShowForm(false);
      setFormData(defaultFormState);
    } catch (e) {
      console.error('Error adding entertainer', e);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Entertainers</h2>
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </button>

      {loading ? (
        <p>Loading entertainers...</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Stage Name</th>
              <th>Times Booked</th>
              <th>Last Booking</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entertainers.map((entertainer) => (
              <tr key={entertainer.entertainerId}>
                <td>{entertainer.entStageName}</td>
                <td>{entertainer.timesBooked}</td>
                <td>
                  {entertainer.lastBookingDate
                    ? new Date(entertainer.lastBookingDate).toLocaleDateString()
                    : '--'}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() =>
                      navigate(`/entertainers/${entertainer.entertainerId}`)
                    }
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-end mt-4">
        <button
          className="btn btn-success"
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? 'Cancel' : 'Add Entertainer'}
        </button>
      </div>

      {showForm && (
        <div className="card mt-4 p-4">
          <h4>Add New Entertainer</h4>
          <div className="row g-3">
            {[
              ['entStageName', 'Stage Name'],
              ['entSSN', 'SSN'],
              ['entStreetAddress', 'Street Address'],
              ['entCity', 'City'],
              ['entState', 'State'],
              ['entZipCode', 'Zip Code'],
              ['entPhoneNumber', 'Phone Number'],
              ['entEMailAddress', 'Email'],
              ['entWebPage', 'Web Page'],
            ].map(([field, label]) => (
              <div className="col-md-6" key={field}>
                <label className="form-label">{label}</label>
                <input
                  className="form-control"
                  name={field}
                  value={(formData as any)[field] || ''}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowForm(false);
                setFormData(defaultFormState);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntertainersPage;
