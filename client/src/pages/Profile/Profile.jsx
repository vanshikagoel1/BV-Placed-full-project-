import React, { useEffect, useState } from 'react';
import "./style.css";
import BackArrow from "../../assets/BackArrow.svg";
import bell from "../../assets/bell.svg";
import axios from 'axios';
import baseURL from '../../Common';
const Profile = () => {
  const [file, setfile] = useState(null);
  const [currentFile, setcurrentFile] = useState(null)
  const [user, setuser] = useState({})
  const JWT_TOKEN = localStorage.getItem('JWT');
  const getResumse = async()=>{
    try {
      axios.get(`${baseURL}/api/upload/getFile/${user.id}`,{
        headers:{
          'auth-token':JWT_TOKEN
        }
      })
      .then(res=>{
        console.log(res.data);
        setcurrentFile(res.data);
      }).
      catch(err=>{
        console.log(err);
        res.json({err:err})
      })  
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    axios.get(`${baseURL}/api/auth/fetchUser`,{
      headers:{
        'auth-token':JWT_TOKEN
      }
    })
    .then(res=>{
      console.log(res.data);
      setuser(res.data);
    getResumse();
    }).
    catch(err=>{
      console.log(err);
    })  
  }, [])

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(file);
  console.log(sid.value);

  const formData = new FormData();
  formData.append("pdf", file);
  console.log("hi")
  sendData(formData)
  }

  const sendData = async(formData) => {
    console.log("ss")
    try {
        const resp = await axios.post(baseURL+`/api/upload/uploadFile/${user.smartId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            'auth-token':JWT_TOKEN
          },
        });
        alert(resp.data.message);
      } catch (error) {
        alert("Server Error");
        console.error(error);
      }
};

  return (
    <div>
        <div id="formWrapper">
      <div id="backArrowWrapper">
        <a href="/dashboard">
        <img src={BackArrow} alt="bell" id="backIcon" />
       </a>
      </div>
      <div id="bellWrapper">
        <img src={bell} alt="bell" id="bellIcon" />
      </div>

      <form id="profileEditForm" onSubmit={handleSubmit}>
        <h2>Student Profile Edit</h2>
        <div className="inputSection2Row">
          <input
            name="Date of Birth"
            placeholder="Date of Birth*"
            type="date"
          />
          <input name="Phone Number" placeholder="Phone Number" />
        </div>
        <div>
          <input placeholder="Permanent Address" />
        </div>
        <div>
          <input type="text" placeholder="SmartID" id="sid" />
        </div>
        <div>
          <input type="file" placeholder="Upload File" id="resume" onChange = {(e) => {  setfile(e.target.files[0])// console.log(selectedFile);
}} />
        </div>
        <div>
          <input type="text" placeholder="Enter CGPA" />
        </div>
        <div>
          <button type="submit" value="submit" id="btn"> Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Profile