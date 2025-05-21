import React, { useState } from 'react';
import axios from 'axios';
import './CreateJobModal.css';

const CreateJobModal = ({ onCreate, onClose }) => {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    type: 'FullTime',
    salary: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Job title is required.';
    if (!form.company.trim()) newErrors.company = 'Company name is required.';
    if (!form.location.trim()) newErrors.location = 'Location is required.';
    if (!form.salary || isNaN(form.salary) || parseFloat(form.salary) <= 0) {
      newErrors.salary = 'Enter a valid salary in LPA.';
    }
    if (!form.description.trim()) newErrors.description = 'Job description is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  axios.defaults.withCredentials = true;
  const handleCreate = async () => {
    if (!validate()) return;

    try {
      const response = await axios.post('https://job-potal-api.vercel.app/jobs', form);
      onCreate(response.data); // update parent
      onClose(); // close modal
    } catch (error) {
      console.error('Error creating job:', error.message);
      alert('Failed to create job. Check console for details.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Create Job Opening</h2>

        <input name="title" placeholder="Job Title" onChange={handleChange} value={form.title} />
        {errors.title && <p className="error">{errors.title}</p>}

        <input name="company" placeholder="Company Name" onChange={handleChange} value={form.company} />
        {errors.company && <p className="error">{errors.company}</p>}

        <input name="location" placeholder="Location" onChange={handleChange} value={form.location} />
        {errors.location && <p className="error">{errors.location}</p>}

        <select name="type" onChange={handleChange} value={form.type}>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Intern">Intern</option>
        </select>

        <input name="salary" placeholder="Salary in LPA" onChange={handleChange} value={form.salary} />
        {errors.salary && <p className="error">{errors.salary}</p>}

        <textarea name="description" placeholder="Job Description" onChange={handleChange} value={form.description}></textarea>
        {errors.description && <p className="error">{errors.description}</p>}

        <div className="modal-actions">
          <button onClick={onClose}>Save Draft</button>
          <button onClick={handleCreate}>Publish »</button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
