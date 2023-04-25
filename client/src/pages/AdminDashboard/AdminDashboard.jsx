import React, { useEffect, useState } from 'react'
import "./style.css"
import logo from "../../assets/logo.png"
import bell from "../../assets/bell.svg";
import pfp from "../../assets/Pfp.svg";
import {AiOutlineDashboard} from "react-icons/ai";
import { IconContext } from "react-icons";
import {RiPagesFill} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";
import AddJob from '../../components/AddJob/AddJob';
import baseURL from '../../Common';
import ViewJobs from '../../components/ViewJobs/ViewJobs';
import axios from 'axios';
const AdminDashboard = () => {
  const [user, setuser] = useState({});
  const JWT_TOKEN = localStorage.getItem("JWT");
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
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  if(user.userType!="admin")
  return <div>Only Admins Allowed</div>
  return (
    <IconContext.Provider value={{ color: "inherit",size:"42px" }}>
    <div id="adminWrapper">
        <div id="adminHeader">
            <img src={logo} alt="logo" id="logoAdmin" />
            <div id="adminIcons">
                <img src={bell} alt="bell"  id="bell"/>
                <img src={pfp} alt="pfp"  id="adminPFP"/>
            </div>
        </div>
        <div id="lowerAdmin">
            <div id="sidebarAdmin">
                <div id="adminNavigation">
                    <ul>
                        <li className='active'><a href="#" ><AiOutlineDashboard />  Dashboard</a></li>
                        <li><a href="#"><RiPagesFill />Add/Update<br/>Company</a></li>
                        <li><a href="#"><AiFillSetting />Credential <br/>Manager</a></li>
                        <li><a href="#"><FiLogOut />Logout</a></li>
                    </ul>
                </div>
            </div>
            <div id="adminRight">
                <AddJob />
                <ViewJobs />                
            </div>
        </div>
    </div>
    </IconContext.Provider>
  )
}

export default AdminDashboard