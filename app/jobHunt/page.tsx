'use client'
import { useState } from "react";
import axios from "axios";

function JobHunt() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("India");
  const [postedWithin, setPostedWithin] = useState("60");

  
  const [jobs, setJobs] = useState<any>([]);
const [loading, setLoading] = useState(false);

const searchJobs = async () => {
  try {
    setLoading(true);

    // const response = await axios.get("http://localhost:5000/api/jobs", {
    //   params: {
    //     query: `${keyword} jobs in ${location}`,
    //     date_posted: postedWithin,
    //   },
    // });
    
     const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobs`, {
      params: {
        query: `${keyword} jobs in ${location}`,
        date_posted: postedWithin,
      },
    });

    console.log(response.data);

    setJobs(response.data.data.jobs);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-indigo-600 text-white py-8 shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold">HourHire</h1>

          <p className="mt-2 text-indigo-100">
            Find jobs posted in the last few hours with AI.
          </p>
        </div>
      </div>

      {/* Search */}

      <div className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">

        <div className="grid md:grid-cols-4 gap-5">

          <input
            className="border rounded-lg p-3"
            placeholder="React Developer"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <input
            className="border rounded-lg p-3"
            placeholder="India"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <select
            className="border rounded-lg p-3"
            value={postedWithin}
            onChange={(e) => setPostedWithin(e.target.value)}
          >
            <option value="24">Last 24 Hours</option>
            <option value="60">Last 60 Hours</option>
            <option value="168">Last 7 Days</option>
            <option value="720">Last 30 Days</option>
          </select>

          <button
  onClick={searchJobs}
  className="bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
>
  {loading ? "Searching..." : "Search Jobs"}
</button>

        </div>

      </div>

      {/* Jobs */}

     <div className="space-y-5">
  {jobs.map((job : any) => (
    <div
    //   key={job.job_id}
      className="bg-white rounded-xl shadow p-5"
    >
      <h3 className="text-xl font-semibold">
        {job.job_title}
      </h3>

      <p className="text-gray-600">
        {job.employer_name}
      </p>

      <p className="text-gray-500">
        {job.job_city || "Location Not Available"}
      </p>

      <p className="text-sm text-gray-400 mt-2">
        {job.job_posted_human_readable || "Recently Posted"}
      </p>

      <div className="flex gap-3 mt-5">
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noreferrer"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Apply Now
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default JobHunt;