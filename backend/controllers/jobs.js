const Job = require("../database/jobs");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Job.find();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const { title, company, description, imageUrl, salary, category } = req.body;
      
     
      const existingJob = await Job.findOne({ title, company, description, imageUrl, salary, category });
      if (existingJob) {
        return res.status(400).json({ error: "This job already exists." });
      }
      const data = await Job.create({
        title,
        company,
        description,
        imageUrl,
        salary,
        category,
      });

      res.status(201).json(data);
    } catch (error) {
      console.error('Error in creating job:', error);
      res.status(500).json(error);
    }
  },
  deletejob: async (req, res) => {
    try {
      const { title, company, description, imageUrl, salary, category } = req.body;

      const deletedJob = await Job.findOneAndDelete({ title, company, description, imageUrl, salary, category });
      if (!deletedJob) {
        return res.status(404).json({ error: "Job not found." });
      }

      res.status(200).json({ message: "Job successfully deleted", deletedJob });
    } catch (error) {
      console.error('Error in deleting job:', error);
      res.status(500).json(error);
    }
  },
  getByTitle: async (req, res) => {
    try {
      const { title } = await req.body;
      const filteredJobs = await Job.find();
      const result = filteredJobs.filter(job => job.title?.toLowerCase().includes(title?.toLowerCase()));
      res.status(200).json(result);
    } catch (error) {
      console.error('Error searching for jobs:', error);
      res.status(500).json(error);
    }
  }
  
  

    
};
