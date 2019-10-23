import { NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from 'react-redux'
import {
  push
} from 'react-router-redux'



class NavLinks extends React.Component {
  constructor(props) {
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.goHome = this.goHome.bind(this)
  }

  goHome(e) {
    e.preventDefault()
    let { dispatch } = this.props
    dispatch(push('/'))
    return false
  }

  // render
  render() {
    return (
      <nav className="nav">
        <Nav>
          <LinkContainer to="/store" key={5.1}>
            <NavItem eventKey={5.1}>Магазин</NavItem>
          </LinkContainer>
          <LinkContainer to="/teams" key={5.2}>
            <NavItem eventKey={5.2}>Команды</NavItem>
          </LinkContainer>
          <LinkContainer to="/tournaments" key={5.3}>
            <NavItem eventKey={5.3}>Турниры</NavItem>
          </LinkContainer>
          <LinkContainer to="/news" key={5.4}>
            <NavItem eventKey={5.4}>Новости</NavItem>
          </LinkContainer>
          <LinkContainer to="/matches" key={5.5}>
            <NavItem eventKey={5.5}>Матчи</NavItem>
          </LinkContainer>
          <LinkContainer to="/video" key={5.6}>
            <NavItem eventKey={5.6}>Видео</NavItem>
          </LinkContainer>
        </Nav>
      </nav>
    )
  }
}


export default connect()(NavLinks)
