import React, { useState, useEffect } from 'react';
import JobBoard from './components/JobBoard';
import data from './data/data.json';
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="app">
      <header className="bg-teal-500 mb-12">
        <img src="images/bg-header-desktop.svg" alt="job listing" />
      </header>
      {jobs.length === 0 ? (
        <p>jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoard key={job.id} job={job} />)
      )}
    </div>
  );
}

export default App;
