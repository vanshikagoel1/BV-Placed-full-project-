import React, { useEffect, useState } from "react";
import "./Style.css";
import { useParams } from "react-router-dom";
import baseURL from "../../Common";
import axios from "axios";
const ViewJob = () => {
  const [jobDetails, setjobDetails] = useState(null)
  const JWT_TOKEN = localStorage.getItem("JWT");
  let { jobid } = useParams();
  useEffect(() => {
    console.log(jobid);
    if(jobid){
      axios.get(`${baseURL}/api/jobs/fetchJob/${jobid}`,{
        headers:{
          "auth-token": JWT_TOKEN,
        }
      })
      .then((res)=>{
        console.log(res);
        setjobDetails(res.data)
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }, [])
  if(!jobDetails)
  return (
    <div id="viewJobWrapper">
      Loading the Job details
    </div>
  )
  return (
    <div id="viewJobWrapper">
      <div id="jobWrapper">
        <div className="jobTitles">
        <h2>{jobDetails.JobTitle}</h2>
        <h2>{jobDetails.CompanyName}</h2>
        </div>
      <div className="jobTitles">
        <h2>Job Requirements:{jobDetails.Requirements}</h2>
        <h2>Stipend:{jobDetails.Stipend}</h2>
      </div>
      <div className="jobTitles">
        <h3>{jobDetails.JobDescription}</h3>
      </div>
      <div>
      </div>
      </div>
      
    </div>
  );
};

export default ViewJob;
