import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-4">Welcome to the Entertainment Agency</h1>
      <p className="lead mb-4">
        Book entertainers for your events or explore the talent we offer.
      </p>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => navigate('/entertainers')}
      >
        View Entertainers
      </button>
    </div>
  );
};

export default HomePage;
