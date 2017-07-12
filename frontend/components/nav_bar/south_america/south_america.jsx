import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SouthAmerica extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
            <div className="dropdown">
              <button className="dropbtn">South America</button>
              <ul className="dropdown-content">
                <li className="col_1">
                  <Link to="/topics/6" className="drop-items">South America</Link>
                  <Link to="/topics/34" className="drop-items">Argentina</Link>

                </li>
              </ul>
            </div>
      );
  }

}

export default SouthAmerica;

//extra dropdown options for line 18
// <a className="drop-items" href="#">Bolivia</a>
// <a className="drop-items" href="#">Brazil</a>
// <a className="drop-items" href="#">Chile</a>
// <a className="drop-items" href="#">Colombia</a>
// </li>
// <li className="col_1">
// <a className="drop-items" href="#">Ecuador</a>
// <a className="drop-items" href="#">Paraguay</a>
// <a className="drop-items" href="#">Peru</a>
// <a className="drop-items" href="#">Uruguay</a>
// <a className="drop-items" href="#">Venezuela</a>
