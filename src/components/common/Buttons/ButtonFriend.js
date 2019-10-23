import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap'
import * as ActionTypes from 'constants/actionTypes';
import * as ButtonTypes from 'constants/buttonTypes'

class ButtonFriend extends React.Component {
    constructor(props) {
      super(props)
      this.addFriend = this.addFriend.bind(this);
      this.removeFriend = this.removeFriend.bind(this);
    }
    
    addFriend() {
      const { dispatch, userId } = this.props;
      dispatch({ type: ActionTypes.ADD_FRIEND_REQUEST, payload: { userId: userId } })
    }  
    
    removeFriend() {
      const { dispatch, userId } = this.props;
      dispatch({ type: ActionTypes.REMOVE_FRIEND_REQUEST, payload: { userId: userId } })
    }  
    
    checkType() {
      const { buttonType, userId, me, friends } = this.props;
      
      var myFriends = {}
      var myFriendsInbox = {}
      var myFriendsOutbox = {}
      
      if (me.identity) var myId = me.identity.id
      if (friends) myFriends = friends[myId]  
      if (me.friendsInbox) myFriendsInbox = me.friendsInbox   
      if (me.friendsOutbox) myFriendsOutbox = me.friendsOutbox 
      
      if (myId==userId) {
        return ButtonTypes.NO_FRIEND_BUTTON;
      } else if (myFriends && Object.keys(myFriends).length > 0 && myFriends[userId]) {
        return ButtonTypes.REMOVE_FRIEND_BUTTON;
      } else if (myFriendsInbox && Object.keys(myFriendsInbox).length > 0 && myFriendsInbox[userId]) {
        return ButtonTypes.ACCEPT_FRIEND_BUTTON;
      } else if (myFriendsOutbox && Object.keys(myFriendsOutbox).length > 0 && myFriendsOutbox[userId]) {
        return ButtonTypes.CANCEL_FRIEND_BUTTON;
      } else {
        return buttonType;
      }
      
    }  
    
    render() {
      const { buttonClass } = this.props;
      var trueType = this.checkType();
      
      switch(trueType) {
        case ButtonTypes.ADD_FRIEND_BUTTON: 
          return (<ReactBootstrap.Button bsStyle="primary" className={buttonClass} onClick={this.addFriend} href="#">{ButtonTypes.ADD_FRIEND_TEXT}</ReactBootstrap.Button>);
        case ButtonTypes.ACCEPT_FRIEND_BUTTON: 
          return (<ReactBootstrap.Button bsStyle="primary" className={buttonClass} onClick={this.addFriend} href="#">{ButtonTypes.ACCEPT_FRIEND_TEXT}</ReactBootstrap.Button>);
        case ButtonTypes.REMOVE_FRIEND_BUTTON: 
          return (<ReactBootstrap.Button bsStyle="danger" className={buttonClass} onClick={this.removeFriend} href="#">{ButtonTypes.REMOVE_FRIEND_TEXT}</ReactBootstrap.Button>);
        case ButtonTypes.CANCEL_FRIEND_BUTTON: 
          return (<ReactBootstrap.Button bsStyle="danger" className={buttonClass} onClick={this.removeFriend} href="#" dangerouslySetInnerHTML={{ __html: ButtonTypes.CANCEL_FRIEND_TEXT }}></ReactBootstrap.Button>);
        default: 
          return (<div></div>);
      }  
    }
}

ButtonFriend.propTypes = {
  me: PropTypes.object.isRequired,
  friends: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    me: state.me,
    friends: state.collections.friends,
  }
}

export default connect(mapStateToProps)(ButtonFriend)