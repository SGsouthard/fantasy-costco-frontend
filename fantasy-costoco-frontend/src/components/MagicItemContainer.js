import React, { Component } from "react";

class MagicItemContainer extends Component {
  render() {
    return (
      <div>
        {/* start navbar */}
        <div class="top-bar">
          <img
            src="./images/Fantasy-Costco-Logo.png"
            alt="Fantasy Costco Logo"
          />
          <div class="navbar">
            <a href="#home">Home</a>
            <input type="text" id="search-bar" placeholder="Search"></input>
            <div class="dropdown">
              <button class="dropbtn">
                Shop
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/weapons">Weapons</a>
                <a href="/armor">Armor</a>
                <a href="/adventure-gear">Adventure Gear</a>
                <a href="/magic-items">Magic Items</a>
              </div>
            </div>
          </div>
        </div>
        {/* end navbar */}
      </div>
    );
  }
}

export default MagicItemContainer;