import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import './Home.css';

const Home = ({ jobs }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Dream Job Awaits</h1>
          <p className="hero-subtitle">Discover top job opportunities tailored for you</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/find-jobs')}>
              🔍 Find Jobs
            </button>
            <button className="btn-secondary" onClick={() => navigate('/create-job')}>
              ➕ Post a Job
            </button>
          </div>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="job portal" className="hero-image" />
      </section>

      <section className="job-list-section">
        <h2 className="section-title">Grab your opportunities</h2>
        {jobs.length === 0 ? (
          <p className="no-jobs">Be the first to choose a job</p>
        ) : (
          <div className="job-list">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
