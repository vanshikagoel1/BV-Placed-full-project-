import React from 'react';
import "./style.css";
import BackArrow from "../../assets/BackArrow.svg";
import bell from "../../assets/bell.svg";
const Profile = () => {
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

      <form id="profileEditForm">
        <h2>Student Profile Edit</h2>
        <div class="inputSection2Row">
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
          <input type="file" placeholder="Upload File" id="resume" />
        </div>
        <div>
          <input type="text" placeholder="Enter CGPA" />
        </div>
        <div>
          <input type="button" value="submit" id="btn" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default Profile