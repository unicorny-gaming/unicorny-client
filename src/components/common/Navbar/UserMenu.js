import { connect } from "react-redux";
import * as ReactBootstrap from 'react-bootstrap';
// import { NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NotifyBar from "./NotifyBar"

class UserMenu extends React.Component {

  goLogout(e) {
    e.preventDefault();
    sessionStorage.setItem(Config.tokenName, '')
    window.location.href = '/'
    return false
  }

  // render
  render() {
    const { me } = this.props;
    let userMenuItems = null;
    if (!me.identity) {
      userMenuItems =
        <ReactBootstrap.NavItem className="hidden-xs-down steam-login-button" href={Config.authUrl.replace('{url}', encodeURIComponent(window.location.href))}>Вход через Steam</ReactBootstrap.NavItem>
    } else {
      let userProfileLink = `/profile/${me.identity.id}`
      let userFriendsLink = `/profile/${me.identity.id}/friends`
      userMenuItems =
        <ReactBootstrap.NavDropdown className="dropdown-profile"
          key={3}
          eventKey={3}
          title={
            <span className="auth-nick"><img src={me.identity.avatar} alt={me.identity.username} />{me.identity.username}</span>
          }
          noCaret
          id="user-dropdown">
            <LinkContainer to={userProfileLink}>
              <ReactBootstrap.MenuItem eventKey={3.1} href={userProfileLink} id={3.1}>
                <i className="fa fa-user"></i> Моя страница</ReactBootstrap.MenuItem>
            </LinkContainer>
            <LinkContainer to={userFriendsLink}>
            <ReactBootstrap.MenuItem eventKey={3.2} href={userFriendsLink} id={3.2}>
                <i className="fa fa-users"></i>  Мои друзья</ReactBootstrap.MenuItem>
            </LinkContainer>
            <ReactBootstrap.MenuItem eventKey={3.4} onClick={this.goLogout} id={3.3}>
                <i className="fa fa-sign-out"></i> Выйти</ReactBootstrap.MenuItem>
        </ReactBootstrap.NavDropdown>
    }
    // <ReactBootstrap.MenuItem eventKey={3.3}>Мои деньги <span className="auth-money">100</span></ReactBootstrap.MenuItem>

    return (
      <div className="nav navbar-right">
        <ul>
          {userMenuItems}
          <NotifyBar />
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    me: state.me,
  }
}
export default connect(mapStateToProps)(UserMenu)
