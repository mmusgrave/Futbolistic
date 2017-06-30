import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { handleLogout } from './greeting'
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  // handleLogout: (e) => {
  //   
  //   e.preventDefault();
  //   logout();
  //   return this.props.history.push(`/`);
  // },
  // handleLogout: () => handleLogout(),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
