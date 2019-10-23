// import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap'
import FriendItem from './FriendItem'
import FriendItemInbox from './FriendItemInbox'
import FriendItemOutbox from './FriendItemOutbox'
import { LinkContainer } from "react-router-bootstrap"
import Card from 'components/common/Profile/Card'
// import * as ActionTypes from 'constants/actionTypes'
//import FriendList from './FriendList'

export default class FriendsPage extends React.Component {
    constructor(props) {
      super(props)
    }
    
    renderFriendItem(friends, type) {
      var rows = [];
      
      switch(type) {
        case 'inbox': 
          if (friends && Object.keys(friends).length > 0 && friends.constructor === Object) {
            Object.keys(friends).forEach(function(key) {
              rows.push(<FriendItemInbox item={friends[key]} key={key}/>)
            });  
          } else {
            rows = 'Нет заявок на добавление в друзья.'
          }
          break;
        case 'outbox': 
          if (friends && Object.keys(friends).length > 0 && friends.constructor === Object) {            
            Object.keys(friends).forEach(function(key) {
              rows.push(<FriendItemOutbox item={friends[key]} key={key}/>)
            }); 
          } else {
            rows = 'Нет заявок на подтверждение дружбы.'
          }
          break;
        default:
          if (friends && Object.keys(friends).length > 0 && friends.constructor === Object) {
            Object.keys(friends).forEach(function(key) {
              rows.push(<FriendItem item={friends[key]} key={key}/>)
            });    
          } else {
            rows = 'У пользователя нет друзей.'
          }
          break;
      } 
      
      return (<div>{rows}</div>);
    }    

    render() {
      const { userId, friends, type, me } = this.props
      var ProfileLink = `/profile/${userId}`
      var FriendsLinkAll = `/profile/${userId}/friends`
      var FriendsLinkInbox = `/profile/${userId}/friends/inbox`
      var FriendsLinkOutbox = `/profile/${userId}/friends/outbox`
      
      var pageClass = "main-part friends"
      var activeMenu = 1
      switch(type) {
        case 'inbox': 
          pageClass = "main-part friend main-part friend"
          activeMenu = 2
          break;
        case 'outbox': 
          pageClass = "main-part friends friends-out"
          activeMenu = 3
          break;
        default: 
          pageClass = "main-part friends"
          activeMenu = 1
          break;
      }
     
      return (
        <div>
          <Card userId={userId} />
          <section className="p-y-30">
            <ReactBootstrap.Row>
              <ReactBootstrap.Col lg={7} md={9} className={pageClass}>
                <ReactBootstrap.Row bsClass="row-fluid" className="header">
                  <h1 className="main-title">Друзья</h1>
                  <LinkContainer to={ProfileLink}>
                    <ReactBootstrap.NavItem href={ProfileLink} className="back-button">Вернуться к профилю</ReactBootstrap.NavItem>
                  </LinkContainer>
                  {me && me.identity && me.identity.id && me.identity.id == userId && 
                  <ReactBootstrap.Nav activeKey={activeMenu} className="nav-pills nav-inline submenu">
                    <LinkContainer to={FriendsLinkAll}>
                      <ReactBootstrap.NavItem eventKey={1} href={FriendsLinkAll}>Все</ReactBootstrap.NavItem>
                    </LinkContainer>
                    <LinkContainer to={FriendsLinkInbox}>
                      <ReactBootstrap.NavItem eventKey={2} href={FriendsLinkInbox}>Входящие</ReactBootstrap.NavItem>
                    </LinkContainer>
                    <LinkContainer to={FriendsLinkOutbox}>
                      <ReactBootstrap.NavItem eventKey={3} href={FriendsLinkOutbox}>Исходящие</ReactBootstrap.NavItem>
                    </LinkContainer>
                  </ReactBootstrap.Nav>}
                </ReactBootstrap.Row>
                {this.renderFriendItem(friends, type)}   
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </section>
        </div>
      )
    }
}