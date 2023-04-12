import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png"
import loginVector from "../../assets/loginVector.svg";
import studentLogin from "../../assets/studentLogin.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
const baseURL = 'http://localhost:8000';
const navigate = useNavigate();
  const [formInputs, setformInputs] = useState({
    smartId:"",
    password:""
  })

  const handleChange = (e) =>{
    console.log("changed");
    const name = e.target.name;
    const value = e.target.value;
    setformInputs(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formInputs);
    axios.post(`${baseURL}/api/auth/login`,formInputs)
    .then(res=>{
      localStorage.setItem('JWT', res.data.authToken);
      if(res.data.status)
      navigate("/home");
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="loginWrapper">
      {/* Logo and Image */}
      <div className="leftHalfLogin">
        {/* Header */}
        <header>
          <img src={logo} alt="College logo" id="collegLogo" />
        </header>

        {/* VECTOR IMAGE */}
        <div>
          <img src={loginVector} alt="login vector" id="loginVector" />
        </div>
      </div>

{/* <!--Login FORM --> */}
      <div className="rightHalfLogin">
        {/* Inner Content Right Half */}
        <div id="innerContentLogin">
          <h2>WELCOME BACK</h2>
          <img src={studentLogin} alt="student Login" />
          <form onSubmit={handleSubmit}>
            <label>
            SmartId ID:
              <input type="text" name="smartId" value={formInputs.smartId} onChange={handleChange}/>
            </label>

            <label>
              Password:
              <input type="password" name="password" value={formInputs.password} onChange={handleChange}/>
            </label>

            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
