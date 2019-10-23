import UserMenu from "./UserMenu"
import NavLinks from "./NavLinks"
import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap";

import {
  push
} from 'react-router-redux'

// Menu component
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }

    // This binding is necessary to make `this` work in the callback
    this.goHome = this.goHome.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  goHome(e) {
    e.preventDefault()
    let { dispatch } = this.props
    dispatch(push('/'))
    return false
  }

  toggleNavbar() {
    this.setState(previousState => {
      return { isToggleOn: !previousState.isToggleOn }
    })
  }

  // render
  render() {
    const { isToggleOn } = this.state

      // < Navbar.Header >
      // <Navbar.Brand>
      //   <a href="#home">React-Bootstrap</a>
      // </Navbar.Brand>
      // </Navbar.Header >

    return (
      <div>
        <ReactBootstrap.Navbar className={isToggleOn ? "nav nav-responsive open" : "nav nav-responsive"}>
          <ReactBootstrap.Nav>
          <NavLinks />
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
        <header id="header">
          <div className="container">
            <div className="navbar-backdrop">
              <div className="navbar">
                <a className="navbar-toggle" onClick={this.toggleNavbar}><i className="fa fa-bars"></i></a>
                <div className="navbar-left">
                  <a href="/" className="logo" onClick={this.goHome}><h1>unicorny.ru</h1> <sub>made for fun</sub></a>
                    <NavLinks />
                  </div>

                <UserMenu />

              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired
}



function mapStateToProps() {
    return { }
}
export default connect(mapStateToProps)(Navbar)
