import * as ReactBootstrap from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"

export default class FriendItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { item } = this.props
    var profileLink = `/profile/${item.id}`
    var menuID = `friend-menu-{item.id}`
    var photoClass = 'friend-photo'
    if (item.online_status>0) {
      photoClass = 'friend-photo friend-online'
    }
    
    return (<ReactBootstrap.Row bsClass="row-fluid" className="friend-item">
      <div className={photoClass}>
        <img src={item.avatar} />
      </div>
      <div className="friend-nick">
        <LinkContainer to={profileLink}>
          <a href={profileLink}>{item.username}</a>
        </LinkContainer>
      </div>
      <ReactBootstrap.Dropdown id={menuID} className="friend-menu">
        <ReactBootstrap.Dropdown.Toggle bsStyle="link" className="friend-menu__button" noCaret>⋅⋅⋅</ReactBootstrap.Dropdown.Toggle>
        <ReactBootstrap.Dropdown.Menu className="data-table static-list">
          <ReactBootstrap.MenuItem eventKey="1">Профиль в Steam</ReactBootstrap.MenuItem>
          <ReactBootstrap.MenuItem eventKey="2">Убрать из друзей</ReactBootstrap.MenuItem>
        </ReactBootstrap.Dropdown.Menu>
      </ReactBootstrap.Dropdown>
      <div className="friend-team">{item.realname}</div>
      <ReactBootstrap.Button bsClass="btn btn-touch">Написать сообщение</ReactBootstrap.Button>
    </ReactBootstrap.Row>)
  }
}