import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import baseURL from "../../Common";
import { useNavigate } from "react-router-dom";

const ViewJobs = () => {
  const [jobs, setJobs] = useState([]);
  const JWT_TOKEN = localStorage.getItem("JWT");
  const navigate = useNavigate();
  const fetchAllJobs = async () => {
    axios
      .get(`${baseURL}/api/jobs/fetchall`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const removeJob = async (e) => {
    e.preventDefault();
    const jobId = e.target.name;
    axios
      .get(`${baseURL}/api/jobs/deleteJob/${jobId}`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        console.log("Removed Job");
        fetchAllJobs();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="ViewJobWrapper">
      <h2>View Jobs</h2>
      {jobs &&
        jobs.map((job, index) => {
          return (
            <div id="adminJD" key={index}>
              <div>{job.CompanyName}</div>
              <div>{job.JobTitle}</div>
              <div>{job.JobDescription}</div>
              <div>{job.Stipend}</div>
              <div className="actionButtons">
                <button
                  className="ActionJobButton"
                  name={job._id}
                  onClick={removeJob}
                >
                  Remove Job
                </button>
                <button
                  className="ActionJobButton"
                  onClick={() => {
                    navigate(`/jobs/${job._id}`);
                  }}
                >
                  View Job
                </button>
                <button
                  className="ActionJobButton"
                  onClick={() => {
                    navigate(`/applicants/${job._id}`);
                  }}
                >
                  View Applicants
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ViewJobs;
