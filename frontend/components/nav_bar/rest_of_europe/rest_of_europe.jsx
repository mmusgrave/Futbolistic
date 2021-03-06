import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RestOfEurope extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">Europe</button>
              <ul className="dropdown-content">
                <li className="col_1">
                <Link to="/topics/7" className="drop-items">Europe</Link>
                <Link to="/topics/39" className="drop-items">Ajax</Link>
                </li>

                <li className="col_1">
                  <Link to="/topics/40" className="drop-items">Sporting</Link>
                </li>
              </ul>
            </div>
      );
  }

}

export default RestOfEurope;

//extra dropdown options for line 20
// <a className="drop-items" href="#">Cagliari</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Chievo</a>
// <a className="drop-items" href="#">Crotone</a>
// <a className="drop-items" href="#">Empoli</a>
// <a className="drop-items" href="#">Fiorentina</a>
// <a className="drop-items" href="#">Genoa</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Internazionale</a>
// <a className="drop-items" href="#">Juventus</a>
// <a className="drop-items" href="#">Lazio</a>
// <a className="drop-items" href="#">Milan</a>
// <a className="drop-items" href="#">Napoli</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Palermo</a>
// <a className="drop-items" href="#">Pescara</a>
// <a className="drop-items" href="#">Roma</a>
// <a className="drop-items" href="#">Sampdoria</a>
// <a className="drop-items" href="#">Sassuolo</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Torino</a>
// <a className="drop-items" href="#">Udinese</a>
// <a className="drop-items" href="#">Hellas Verona</a>
// <a className="drop-items" href="#">Bari</a>
// <a className="drop-items" href="#">Brescia</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Perugia</a>
// <a className="drop-items" href="#">Carpi</a>
// <a className="drop-items" href="#">Cesena</a>
// <a className="drop-items" href="#">Frosinone</a>
// <a className="drop-items" href="#">Salernitana</a>
