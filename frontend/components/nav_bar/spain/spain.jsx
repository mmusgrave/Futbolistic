import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {requestSingleTopic} from '../../../actions/topic_actions';

class Spain extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">Spain</button>
              <ul className="dropdown-content">
                <li className="col_1">
                <Link to={`/topics/${1}`} value="1" className="drop-items">All of Spain</Link>
                  <a className="drop-items" href="#">National Team</a>
                  <a className="drop-items" href="#">Alavés </a>
                  <a className="drop-items" href="#">Athletic Club</a>
                  <Link to={`/topics/${10}`} value="10" className="drop-items">Atlético Madrid</Link>
                </li>
                <li className="col_1">
                  <Link to={`/topics/${11}`} value="10" className="drop-items">Barcelona</Link>
                  <a className="drop-items" href="#">Cádiz</a>
                  <a className="drop-items" href="#">Celta Vigo</a>
                  <a className="drop-items" href="#">Deportivo</a>
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
                  <Link to={`/topics/${9}`} value="9"  className="drop-items">Real Madrid</Link>
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
      );
  }

}

export default withRouter(Spain);
