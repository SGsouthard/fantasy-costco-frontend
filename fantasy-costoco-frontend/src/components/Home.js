import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        {/* start navbar */}
        <div className="top-bar">
          <img
            src="./images/Fantasy-Costco-Logo.png"
            alt="Fantasy Costco Logo"
          />
          <div className="navbar">
            <a href="#home">Home</a>
            <input type="text" id="search-bar" placeholder="Search"></input>
            <div className="dropdown">
              <button className="dropbtn">
                Shop
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="/weapons">Weapons</a>
                <a href="/armor">Armor</a>
                <a href="/adventure-gear">Adventure Gear</a>
                <a href="/magic-items">Magic Items</a>
              </div>
            </div>
          </div>
          </div>
          {/* end navbar */}
          <div className="slogan">
          <h1>Where all your dreams come true!</h1>
          <h2>Got a deal for you!</h2>
          </div>
          <img id="GARFIELD" src="./images/GARFIELD.png"></img>
      </div>
    );
  }
}

export default Home;
