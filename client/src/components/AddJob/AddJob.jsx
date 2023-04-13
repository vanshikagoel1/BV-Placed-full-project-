import React, { useState } from 'react'
import "./style.css"
import baseURL from '../../Common';
import axios from 'axios'
const AddJob = () => {
  const [formInputs, setformInputs] = useState({
    CompanyName:"",
    JobTitle:"",
    JobDescription:"",
    Requirements:"",
    Stipend:""
  })
const JWT_TOKEN = localStorage.getItem('JWT');

  const handleSubmit = async(e) =>{
    e.preventDefault();
     ( axios.post(`${baseURL}/api/jobs/addjob`,formInputs,{
      headers:{
        'auth-token':JWT_TOKEN
      }
     })).
     then(res=>{
      console.log(res);
      window.location.reload(false);
     })
     .catch(err=>{
      console.log(err);
     })
    console.log(formInputs);
  }
  const handleChange = (e) =>{
    console.log("changed");
    const name = e.target.name;
    const value = e.target.value;
    setformInputs(prev=>({...prev,[name]:value}))
  }
  return (
    <div id="jobAdderWrapper">
      <h2>Add Job Opening</h2>
      <input placeholder='Enter Company Name' name="CompanyName" value={formInputs.CompanyName} onChange={handleChange}/>
      <input placeholder='Enter Job Title' name="JobTitle" value={formInputs.JobTitle} onChange={handleChange}/>
      <textarea type="text" placeholder='Enter Job Description Name' name="JobDescription" value={formInputs.JobDescription} onChange={handleChange}/>
      <input placeholder='Enter Eligibility Criteria' name="Requirements" value={formInputs.Requirements} onChange={handleChange}/>
      <input placeholder='Enter the Stipend' name="Stipend" value={formInputs.Stipend} onChange={handleChange}/>
      <button id="AddJobButton" onClick={handleSubmit}>Add Job</button>
    </div>
  )
}

export default AddJob