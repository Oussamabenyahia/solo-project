import React, { useState } from "react";
import axios from "axios";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");

  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/jobs/addJob", {
        title,
        company,
        description,
        imageUrl,
        salary,
        category,
      });
      console.log("Job created:", response.data);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  const handleDeleteJob = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete("http://localhost:3000/jobs/delete", {
        data: {
          title,
          company,
          description,
          imageUrl,
          salary,
          category,
        },
      });
      console.log("Job deleted:", response.data);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="sidebar">
      <h2>Add a Job</h2>
      <form onSubmit={handleAddJob}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Job</button>
      </form>
      <form onSubmit={handleDeleteJob}>
        <button type="submit">Delete Job</button>
      </form>
    </div>
  );
};

export default AddJob;
