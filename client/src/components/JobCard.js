import React, { useState, useEffect } from 'react';
import './JobCard.css';
import ApplyModal from './ApplyModal';

// Utility to format "time ago"
const timeAgo = (dateString) => {
  const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 24) return `${Math.floor(hours / 24)} day(s) ago`;
  if (hours > 0) return `${hours} hour(s) ago`;
  if (minutes > 0) return `${minutes} minute(s) ago`;
  return `Just now`;
};

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="job-card">
        <div className="job-header">
          <img src={job.logo || "https://cdn-icons-png.flaticon.com/512/270/270798.png"} alt="company-logo" />
          <span className="badge">⏱️ {timeAgo(job.createdAt || new Date())}</span>
        </div>

        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">🏢 {job.company}</p>

          <ul className="job-meta">
            <li>📍 {job.location}</li>
            <li>🕒 {job.type}</li>
            <li>💰 {job.salary} LPA</li>
          </ul>

          <p className="desc">{job.description}</p>

          <button className="apply-btn" onClick={() => setShowModal(true)}>📨 Apply Now</button>
        </div>
      </div>

      {showModal && <ApplyModal job={job} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default JobCard;
