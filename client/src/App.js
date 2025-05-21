import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import FindJobs from './pages/FindJobs';
import FindTalents from './pages/FindTalents';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import CreateJobModal from './components/CreateJobModal';
import logo from './assets/logo.png';
import './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);

  const handleCreateJob = (job) => {
    setJobs([job, ...jobs]);
    setShowModal(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Link to="/" className="home-link">Home</Link>
        <Link to="/find-jobs">Find Jobs</Link>
        <Link to="/find-talents">Find Talents</Link>
        <Link to="/about">About us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <button className="create-btn" onClick={() => setShowModal(true)}>
          Create Jobs
        </button>
      </nav>

      {/* ✅ Global Modal that pops up on button click */}
      {showModal && <CreateJobModal onCreate={handleCreateJob} onClose={() => setShowModal(false)} />}

      <Routes>
        <Route path="/" element={<Home jobs={jobs} />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/find-talents" element={<FindTalents />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
}