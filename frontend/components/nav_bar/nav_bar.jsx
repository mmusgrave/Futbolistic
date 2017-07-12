import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SpainContainer from './spain/spain_container';
// import GermanyContainer from './germany/germany_container';
import ItalyContainer from './italy/italy_container';
import FranceContainer from './france/france_container';
import EnglandContainer from './england/england_container';
import SouthAmericaContainer from './south_america/south_america_container';
import RestOfEuropeContainer from './rest_of_europe/rest_of_europe_container';
import USAContainer from './usa/usa';
// import src from './futbolistic_logo.jpg';



class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const src = require('./futbolistic_logo.jpg');
    // <img src={"/../futbolistic_logo.jpg"}/>
      return (

        <ul className="nav-bar-ul">
          <li className="nav-bar-title" >

            <Link to="/" className="white-link">Futbolistic</Link>
          </li>
          <li>
            <SpainContainer/>
          </li>

          <li>
            <ItalyContainer/>
          </li>
          <li>
            <FranceContainer/>
          </li>
          <li>
            <EnglandContainer/>
          </li>
          <li>
            <SouthAmericaContainer/>
          </li>
          <li>
            <RestOfEuropeContainer/>
          </li>
          <li>
            <USAContainer/>
          </li>
        </ul>
      );
  }

}

export default NavBar;

// var image_path = "<%= asset_path(my_image.png) %>"

// #{asset_path(my_image.png)}

//potential title for line 25
// <Link to="/" className="white-link">Futbolistic</Link>

//extra dropdown option for line 30
// <li>
//   <GermanyContainer/>
// </li>
