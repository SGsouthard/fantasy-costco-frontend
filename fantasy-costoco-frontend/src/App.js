import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

//Components
import Home from "./components/Home";
import WeaponContainer from "./components/WeaponContainer"
import ArmorContainer from "./components/ArmorContainer"
import AdventureGearContainer from "./components/AdventureGearContainer"
import MagicItemContainer from "./components/MagicItemContainer"


class App extends Component {
  render() {
    return (
     <Router>
       <div>
        <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/weapons" element={<WeaponContainer />}/>
         <Route path="/armor" element={<ArmorContainer />}/>
         <Route path="/adventure-gear" element={<AdventureGearContainer />}/>
         <Route path="/magic-items" element={<MagicItemContainer />}/>
        </Routes>
       </div>
     </Router>
    );
  }
}

export default App;