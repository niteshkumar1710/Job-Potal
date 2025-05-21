// import React, { useState, useEffect } from 'react';
// import JobCard from '../components/JobCard';
// import axios from 'axios';

// export default function FindJobs() {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/jobs')
//       .then(res => setJobs(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="job-list-container">
//       {jobs.map((job, idx) => (
//         <JobCard key={idx} job={job} />
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../components/JobCard';
import JobFilterBar from '../components/JobFilterBar';
import './FindJobs.css';

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    type: '',
    location: '',
    salary: [0, 100],
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobs');
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err.message);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === '' || job.type === filters.type) &&
      parseInt(job.salary) >= filters.salary[0] &&
      parseInt(job.salary) <= filters.salary[1]
    );
  });

  return (
    <div className="find-jobs-page">
      

      <JobFilterBar filters={filters} setFilters={setFilters} />
      <h1 className="page-title">Find Your Next Opportunity</h1>

      <section className="filtered-section">
        <h2>Filtered Job Results</h2>
        <div className="job-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <p className="no-results">No jobs found matching your filters.</p>
          )}
        </div>
      </section>

      <section className="all-jobs-section">
        <h2>All Other Jobs</h2>
        <div className="job-cards-grid">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FindJobs;


