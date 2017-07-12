import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class France extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">France</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <Link to="/topics/4" className="drop-items">All of France</Link>

                  <Link to="/topics/26" className="drop-items">PSG</Link>

                </li>

                <li className="col_1">

                  <Link to="/topics/25" className="drop-items">Marseille</Link>
                  <Link to="/topics/24" className="drop-items">Monaco</Link>

                </li>
              </ul>
            </div>
      );
  }

}

export default France;

//more dropdown options for line 21
//<a className="drop-items" href="#">National Team</a>
// </li>
// <li className="col_1">
//   <a className="drop-items" href="#">Chievo</a>
//   <a className="drop-items" href="#">Crotone</a>
//   <a className="drop-items" href="#">Empoli</a>
//   <a className="drop-items" href="#">Fiorentina</a>
//   <a className="drop-items" href="#">Genoa</a>
// </li>
// <li className="col_1">
//   <a className="drop-items" href="#">Internazionale</a>
//   <a className="drop-items" href="#">Juventus</a>
//   <a className="drop-items" href="#">Lazio</a>
//   <a className="drop-items" href="#">Milan</a>
//   <a className="drop-items" href="#">Napoli</a>
// </li>
// <li className="col_1">
//   <a className="drop-items" href="#">Palermo</a>
//   <a className="drop-items" href="#">Pescara</a>
//   <a className="drop-items" href="#">Roma</a>
//   <a className="drop-items" href="#">Sampdoria</a>
//   <a className="drop-items" href="#">Sassuolo</a>
// </li>
// <li className="col_1">
//   <a className="drop-items" href="#">Torino</a>
//   <a className="drop-items" href="#">Udinese</a>
//   <a className="drop-items" href="#">Hellas Verona</a>
//   <a className="drop-items" href="#">Bari</a>
//   <a className="drop-items" href="#">Brescia</a>
// </li>
// <li className="col_1">
//   <a className="drop-items" href="#">Perugia</a>
//   <a className="drop-items" href="#">Carpi</a>
//   <a className="drop-items" href="#">Cesena</a>
//   <a className="drop-items" href="#">Frosinone</a>
//   <a className="drop-items" href="#">Salernitana</a>
