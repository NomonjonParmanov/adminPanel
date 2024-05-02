import React from "react";
import dash from "../../assets/dash.png";
import dash2 from "../../assets/dash2.png";
const Dashboard = () => {
  return (
    <div className="bg">
      <div className=" dashboard">
        <div className="cards">
          <div className="card">
            <h1>Company Facts</h1>
            <p>Employees</p>
            <img src={dash} alt="" />
            <div className="color">
              <div className="orange"></div>
              <p>Paris</p>
              <div className="fio"></div>
              <p>Bangkok</p>
              <div className="blue"></div>
              <p>San Francisco</p>
            </div>
          </div>
          <div className="card">
            <h1>Statistics</h1>
            <img className="img2" src={dash2} alt="" />
            <div className="color2">
              <div className="orange"></div>
              <p>KFC</p>
              <div className="fio"></div>
              <p>Lukoil</p>
              <div className="blue"></div>
              <p>Aeroflot</p>
            </div>
            <h2>Projects by account</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
