import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Germany extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">Germany</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <a className="drop-items" href="#">FC Augsburg</a>
                  <a className="drop-items" href="#">Bayer Leverkusen</a>
                  <a className="drop-items" href="#">Bayern Munich</a>
                  <a className="drop-items" href="#">Borussia Dortmund</a>
                  <a className="drop-items" href="#">Mönchengladbach</a>
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
                  <a className="drop-items" href="#">1. FC Nürnberg</a>
                  <a className="drop-items" href="#">Fortuna Düsseldorf</a>
                </li>
              </ul>
            </div>
      );
  }

}

export default Germany;
