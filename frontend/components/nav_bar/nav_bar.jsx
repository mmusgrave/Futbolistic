import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <DropDownContainer/>
        <DropDownContainer/>
        <DropDownContainer/>
        <DropDownContainer/>
        <DropDownContainer/>
        <DropDownContainer/>

        <ul className="nav-bar-ul">
          <li className="flyout">
            <Link to="/" className="nav-bar-title white-link">Futbolistic</Link>
          </li>
          <li className="">
            <div className="dropdown">
              <button className="dropbtn">Spain</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <a className="drop-items" href="#">All of Spain</a>
                  <a className="drop-items" href="#">National Team</a>
                  <a className="drop-items" href="#">Alavés </a>
                  <a className="drop-items" href="#">Athletic Club</a>
                  <a className="drop-items" href="#">Atlético Madrid</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Barcelona</a>
                  <a className="drop-items" href="#">Cádiz</a>
                  <a className="drop-items" href="#">Celta Vigo</a>
                  <a className="drop-items" href="#">Deportivo La Coruña</a>
                  <a className="drop-items" href="#">Eibar</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Espanyol</a>
                  <a className="drop-items" href="#">Granada</a>
                  <a className="drop-items" href="#">Las Palmas</a>
                  <a className="drop-items" href="#">Leganés</a>
                  <a className="drop-items" href="#">Levante</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Málaga</a>
                  <a className="drop-items" href="#">Mallorca</a>
                  <a className="drop-items" href="#">Osasuna</a>
                  <a className="drop-items" href="#">Rayo Vallecano</a>
                  <a className="drop-items" href="#">Real Betis</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Real Madrid</a>
                  <a className="drop-items" href="#">Real Oviedo</a>
                  <a className="drop-items" href="#">Real Zaragoza</a>
                  <a className="drop-items" href="#">Real Sociedad</a>
                  <a className="drop-items" href="#">Sevilla</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Sporting Gijón</a>
                  <a className="drop-items" href="#">Tenerife</a>
                  <a className="drop-items" href="#">Valencia</a>
                  <a className="drop-items" href="#">Valladolid</a>
                  <a className="drop-items" href="#">Villareal</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="">
            <div className="dropdown">
              <button className="dropbtn">Germany</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <a className="drop-items" href="#">FC Augsburg</a>
                  <a className="drop-items" href="#">Bayer Leverkusen</a>
                  <a className="drop-items" href="#">Bayern Munich</a>
                  <a className="drop-items" href="#">Borussia Dortmund</a>
                  <a className="drop-items" href="#">Borussia Mönchengladbach</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Darmstadt 98</a>
                  <a className="drop-items" href="#">Eintracht Frankfurt</a>
                  <a className="drop-items" href="#">SC Freiburg</a>
                  <a className="drop-items" href="#">Hamburger SV</a>
                  <a className="drop-items" href="#">Hertha BSC</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">1899 Hoffenheim</a>
                  <a className="drop-items" href="#">FC Ingolstadt</a>
                  <a className="drop-items" href="#">1. FC Köln</a>
                  <a className="drop-items" href="#">RB Leipzig</a>
                  <a className="drop-items" href="#">Mainz 05</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Schalke 04</a>
                  <a className="drop-items" href="#">Werder Bremen</a>
                  <a className="drop-items" href="#">VfL Wolfsburg</a>
                  <a className="drop-items" href="#">1860 Munich</a>
                  <a className="drop-items" href="#">Hannover 96</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">1. FC Kaiserslautern</a>
                  <a className="drop-items" href="#">FC St. Pauli</a>
                  <a className="drop-items" href="#">VfB Stuttgart</a>
                  <a className="drop-items" href="#">Arminia Bielefeld</a>
                  <a className="drop-items" href="#">VfL Bochum</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Sporting Gijón</a>
                  <a className="drop-items" href="#">Tenerife</a>
                  <a className="drop-items" href="#">Valencia</a>
                  <a className="drop-items" href="#">Valladolid</a>
                  <a className="drop-items" href="#">Villareal</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      );
  }

}

export default NavBar;
