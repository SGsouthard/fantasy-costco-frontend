import React, { Component } from "react";
import axios from "axios";

//components
import Weapons from "./Weapons";

class WeaponContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/weapons")
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data.top,
        });
      })
      .catch((error) => {
        console.log("Hitting weapons API", error.toJSON());
      });
  }

  displayWeapons() {
    const display = this.state.data.map((w, idx) => {
      return (
        <Weapons
          key={idx}
          name={w.name}
          description={w.description}
          costAmount={w.cost.amount}
          costCoins={w.cost.coins}
          statsType={w.stats.damageType}
          statsAmount={w.stats.diceAmount}
        />
      );
    });
  }

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
            <a href="/">Home</a>
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
        {this.displayWeapons()}
      </div>
    );
  }
}

export default WeaponContainer;
