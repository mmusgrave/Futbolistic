import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class USA extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">USA</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <Link to="/topics/8" className="drop-items">All of USA</Link>

                  <Link to="/topics/44" className="drop-items">LA Galaxy</Link>

                </li>
              </ul>
            </div>
      );
  }

}

export default USA;

//extra dropdown options for line 19
//                  <a className="drop-items" href="#">National Team</a>
// <a className="drop-items" href="#">Atalanta</a>
// <a className="drop-items" href="#">Bologna</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Cagliari</a>
// <a className="drop-items" href="#">Chievo</a>
// <a className="drop-items" href="#">Crotone</a>
// <a className="drop-items" href="#">Empoli</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Fiorentina</a>
// <a className="drop-items" href="#">Genoa</a>
// <a className="drop-items" href="#">Internazionale</a>
// <a className="drop-items" href="#">Juventus</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Lazio</a>
// <a className="drop-items" href="#">Milan</a>
// <a className="drop-items" href="#">Napoli</a>
// <a className="drop-items" href="#">Palermo</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Pescara</a>
// <a className="drop-items" href="#">Roma</a>
// <a className="drop-items" href="#">Sampdoria</a>
// <a className="drop-items" href="#">Sassuolo</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Torino</a>
// <a className="drop-items" href="#">Brescia</a>
// <a className="drop-items" href="#">Udinese</a>
// <a className="drop-items" href="#">Hellas Verona</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Bari</a>
// <a className="drop-items" href="#">Perugia</a>
// <a className="drop-items" href="#">Carpi</a>
// <a className="drop-items" href="#">Cesena</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Frosinone</a>
// <a className="drop-items" href="#">Salernitana</a>
