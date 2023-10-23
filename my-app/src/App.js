import './App.css';
import React from 'react';
import JobList from './components/joblist';
import AddDeleteJob from './components/sidebar';  

function App() {
  return (
    <div className="App">
      <JobList />
      <AddDeleteJob />

    </div>
  );
}

export default App;