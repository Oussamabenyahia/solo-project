import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"; 

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          const response = await axios.get('http://localhost:3000/jobs/getbytitle', {
            params: { title: searchTerm }
          });
          setJobs(response.data);
        } else {
          const response = await axios.get('http://localhost:3000/jobs/getAll');
          setJobs(response.data);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
  
    fetchData();
  }, [searchTerm]);
  

  return (
    <div className="job-list-container">
      <div className="intro-text">
        <h1>Welcome to Our Job Portal</h1>
        <p>Explore the latest job opportunities in various fields.</p>
      </div>

      <nav className="nav-bar">
        <h2>Searching for a job ?</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Job titles..."
            className="input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>

      <h1 className="intro-text">Job List</h1>
      <div className="card-container">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <img src={job.imageUrl} className="card-image" alt={job.title} />
              <div className="card-details">
                <h3 className="card-title">{job.title}</h3>
                <p className="card-description">{job.description}</p>
                <p className="card-salary">Salary: {job.salary}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
