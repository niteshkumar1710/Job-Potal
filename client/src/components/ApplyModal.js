import React, { useState } from 'react';
import './ApplyModal.css';

const ApplyModal = ({ job, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', resume: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${job.title}`);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Apply for {job.title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="resume"
            type="url"
            placeholder="Resume Link (Google Drive / Dropbox)"
            value={form.resume}
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
