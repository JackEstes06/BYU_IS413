import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import EntertainersPage from './pages/EntertainersPage';
import EntertainerDetails from './pages/EntertainerDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entertainers" element={<EntertainersPage />} />
          <Route path="/entertainers/:id" element={<EntertainerDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
