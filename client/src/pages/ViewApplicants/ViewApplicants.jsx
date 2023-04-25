import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import baseURL from '../../Common';
import axios from 'axios';
import "./style.css";
const ViewApplicants = () => {
  const JWT_TOKEN = localStorage.getItem("JWT");
    const [jobData, setjobData] = useState([])
  let { jobid } = useParams();
  useEffect(() => {
    if(!jobid)
    return;
    
    axios.get(`${baseURL}/api/jobs/getapplicants/${jobid}`,{
        headers:{
          "auth-token": JWT_TOKEN,
        }
    })
    .then(res=>{
        console.log(res);
        setjobData(res.data)
    })
    .catch(err=>{
        console.log(err);
    })
  }, [])
  
  if(jobData.length==0)
  return <div>Loading the applicants</div>
  return (
    <div id="viewApplicantWrapper">
      <div id="listOfApplicant">

        {jobData.map((applicant,index)=>{
            return(
                <div key={index} className='applicantDetails'>
                  <p>{index+1}</p>
                  <p>{applicant.name}</p>
                  <p>{applicant.department}</p>
                  <p>{applicant.smartId}</p>      
                </div>
            )
        })}
      </div>
        <div>
            
        </div>
    </div>
  )
}

export default ViewApplicants