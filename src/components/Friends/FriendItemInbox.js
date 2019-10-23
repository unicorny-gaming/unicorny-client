import * as ReactBootstrap from 'react-bootstrap'
import ButtonFriend from 'components/common/Buttons/ButtonFriend'
import * as ButtonTypes from 'constants/buttonTypes'

export default class FriendItemInbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { item } = this.props
    var photoClass = 'friend-photo'
    if (item.online_status>0) {
      photoClass = 'friend-photo friend-online'
    }
    
    return (<ReactBootstrap.Row bsClass="row-fluid" className="friend-item">
      <div className={photoClass}>
        <img src={item.avatar} />
      </div>
      <div className="friend-nick"><span>{item.username}</span></div> 
      <div className="friend-team">{item.realname}</div>
      <a href="#" className="friend-request__steam">Профиль в Steam</a>
      <div className="friends-request__anser">
        <ButtonFriend userId={item.id} buttonType={ButtonTypes.ACCEPT_FRIEND_BUTTON} />
      </div>
    </ReactBootstrap.Row>)
  }
}