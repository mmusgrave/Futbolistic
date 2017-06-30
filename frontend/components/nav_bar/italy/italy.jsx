import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Italy extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">Italy</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <Link to="/topics/3" className="drop-items">All of Italy</Link>
                  <a className="drop-items" href="#">National Team</a>
                  <Link to="/topics/19" className="drop-items">Juventus</Link>
                  <a className="drop-items" href="#">Bologna</a>
                  <a className="drop-items" href="#">Cagliari</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Chievo</a>
                  <a className="drop-items" href="#">Crotone</a>
                  <a className="drop-items" href="#">Empoli</a>
                  <a className="drop-items" href="#">Fiorentina</a>
                  <a className="drop-items" href="#">Genoa</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Internazionale</a>
                  <a className="drop-items" href="#">Juventus</a>
                  <a className="drop-items" href="#">Lazio</a>
                  <a className="drop-items" href="#">Milan</a>
                  <a className="drop-items" href="#">Napoli</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Palermo</a>
                  <a className="drop-items" href="#">Pescara</a>
                  <a className="drop-items" href="#">Roma</a>
                  <a className="drop-items" href="#">Sampdoria</a>
                  <a className="drop-items" href="#">Sassuolo</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Torino</a>
                  <a className="drop-items" href="#">Udinese</a>
                  <a className="drop-items" href="#">Hellas Verona</a>
                  <a className="drop-items" href="#">Bari</a>
                  <a className="drop-items" href="#">Brescia</a>
                </li>
                <li className="col_1">
                  <a className="drop-items" href="#">Perugia</a>
                  <a className="drop-items" href="#">Carpi</a>
                  <a className="drop-items" href="#">Cesena</a>
                  <a className="drop-items" href="#">Frosinone</a>
                  <a className="drop-items" href="#">Salernitana</a>
                </li>
              </ul>
            </div>
      );
  }

}

export default Italy;
