import React, { useEffect, useState } from "react";
import "./style.css";
import photo from "../../assets/Pfp.svg";
import bell from "../../assets/bell.svg";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseURL from "../../Common";
import { ToastContainer, toast } from 'react-toastify';
import NotAuthorized from "../NotAuthorized/NotAuthorized";
const Dashboard = () => {

  
  const [jobs, setJobs] = useState([]);
  const [user, setuser] = useState({});
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
        console.log("Recieved");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const notifyLogout = () =>{
    toast.success('Logging you out',
    {
      onClose:()=>{
        localStorage.setItem("JWT", "");
        navigate('/')
      }
    }
    )
  }
  useEffect(() => {
    axios
      .get(`${baseURL}/api/auth/fetchUser`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
        fetchAllJobs();
      })
      .catch((err) => {
        console.log(err);
        res.json({ err: err });
      });
  }, []);

 
  const applyToJob = async (e) => {
    e.preventDefault();
    const jobId = e.target.name;
    axios
      .get(`${baseURL}/api/jobs/apply/${jobId}`, {
        headers: {
          "auth-token": JWT_TOKEN,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success('Successfully Applied to the Job!');
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Apply to the Job");
  };
  if (!user) return <NotAuthorized />;
  return (
    <div id="dashboardWrapper">
      <ToastContainer />
      <div id="sidebar">
        <div id="dashboardlogowrapper">
          <img src={logo} alt="Logo" id="DashboardLogo" />
        </div>
        <div id="infoWrapper">
          <img src={photo} alt="profile" />
          <h4>{user.name}</h4>
          <h6>{user.department}</h6>
        </div>
        <div id="dashboardNavigation">
          <ul>
            <li>
              <a href="/#/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/#/profile">Profile</a>
            </li>
            <li>
              <a href="/#/">Home</a>
            </li>
            <li>
              <a
                onClick={() => {
                  notifyLogout();
                }}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="rightDashboard">
        <div id="Dashboardheader">
          <div>Dashboard</div>
          <img src={bell} alt="bell" />
          <div>{user.name}</div>
        </div>
        <div id="currentOffersList">
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Job Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="dataHold">
              {
                jobs.length==0?
              <tr id="NoJobs"><td>No Jobs Posted yet!</td></tr>
              :
              jobs.map((job, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{job.CompanyName}</td>
                    <td>{job.JobTitle}</td>
                    <td id="buttonGroupDashboard">
                      <button name={job._id} 
                      onClick={()=>{
                        navigate(`/jobs/${job._id}`);
                      }}
                      >
                        View
                      </button>
                      <button name={job._id} onClick={applyToJob}>
                        Apply
                      </button>
                    </td>
                  </tr>
                );
              })
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
