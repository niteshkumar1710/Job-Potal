import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import './JobFilterBar.css';

const JobFilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    setFilters({ ...filters, salary: [0, value] });
  };

  return (
    <div className="job-filter-bar">
      <div className="filter-item">
        <FaSearch className="icon" />
        <input
          type="text"
          name="title"
          placeholder="Search by job title"
          value={filters.title}
          onChange={handleChange}
        />
      </div>

      <div className="filter-item">
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          value={filters.location}
          onChange={handleChange}
        />
      </div>

      <div className="filter-item">
        <FaUser className="icon" />
        <select name="type" value={filters.type} onChange={handleChange}>
          <option value="">Job Type</option>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Intern">Intern</option>
        </select>
      </div>

      <div className="filter-item range-container">
        <label>Salary up to ₹{filters.salary[1]} LPA</label>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.salary[1]}
          onChange={handleRangeChange}
          className="salary-range"
        />
      </div>
    </div>
  );
};

export default JobFilterBar;
