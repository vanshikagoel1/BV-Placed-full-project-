import React from 'react'
import "./style.css";
import photo from "../../assets/Pfp.svg";
import bell from "../../assets/bell.svg";
import logo from "../../assets/logo.png"
const Dashboard = () => {
  return (
    <div id="dashboardWrapper">
      <div id="sidebar">
        <div id="dashboardlogowrapper">
          <img src={logo} alt="Logo" id="DashboardLogo" />
        </div>
        <div id="infoWrapper">
          <img src={photo} alt="profile" />
          <h4>FIRSTNAME LASTNAME</h4>
          <h6>DEPARTMENT</h6>
        </div>
        <div id="dashboardNavigation">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </div>
      <div id="rightDashboard">
        <div id="Dashboardheader">
          <div>Dashboard</div>
          <img src={bell} alt="bell" />
          <div>FIRSTNAME LASTNAME</div>
        </div>
        <div id="currentOffersList">
          <table>
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Job Designation</th>
                <th>Last Date to Apply</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>JP Morgan</td>
                <td>SDE Intern</td>
                <td>30/05/2023</td>
                <td>
                  <button>View</button>
                  <button>Apply</button>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard