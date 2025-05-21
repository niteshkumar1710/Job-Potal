import React, { useEffect, useState } from 'react';
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
    // Sample job data (replace with DB data in production)
    const sampleJobs = [
      {
        _id: '1',
        title: 'Frontend Developer',
        company: 'Tech Corp',
        location: 'New York',
        type: 'Full-time',
        salary: '75',
        description: 'React.js developer needed for frontend UI development.',
      },
      {
        _id: '2',
        title: 'Backend Engineer',
        company: 'InnovateX',
        location: 'San Francisco',
        type: 'Part-time',
        salary: '60',
        description: 'Work with Node.js and MongoDB on backend systems.',
      },
      {
        _id: '3',
        title: 'UI/UX Designer',
        company: 'DesignHub',
        location: 'Remote',
        type: 'Contract',
        salary: '50',
        description: 'Create user-friendly interfaces and experiences.',
      },
    ];
    setJobs(sampleJobs);
  }, []);

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
