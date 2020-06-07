import React from 'react';
const JobBoard = ({ job }) => {
  const langAndTool = [job.role, job.level];
  if (job.languages) {
    langAndTool.push(...job.languages);
  }
  if (job.tools) {
    langAndTool.push(...job.tools);
  }
  return (
    <div
      className={`flex bg-white shadow-lg m-4 p-4 rounded ${
        job.featured && ' border-l-4 border-teal-500 border-solid'
      }`}
    >
      <div>
        <img src={`images/${job.logo}`} alt={job.company} />
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <h3 className="font-bold  text-teal-500">
          {job.company}
          {job.new && (
            <sapn className="bg-teal-500 text-teal-100  m-2 py-1 px-2 rounded-full">
              New
            </sapn>
          )}
          {job.featured && (
            <sapn className="bg-gray-800 text-white  m-2 py-1 px-2 rounded-full">
              Featured
            </sapn>
          )}
        </h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} . {job.contract} . {job.location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {langAndTool
          ? langAndTool.map((language) => (
              <span
                key={language}
                className="text-teal-500 bg-teal-100 font-bold m-2 p-2"
              >
                {language}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

export default JobBoard;
