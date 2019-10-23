import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'
import Friends from 'components/Friends'

// Friends page component
class FriendsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  UNSAFE_componentWillMount() {
    const { dispatch, me } = this.props

    dispatch({ type: ActionTypes.USER_PROFILE_REQUEST, payload: { id: this.props.params.userId } })

    // Dont fetch inbox/outbox for other users
    if (me && me.identity && me.identity.id && me.identity.id == this.props.params.userId) {
      dispatch({ type: ActionTypes.MY_FRIENDS_INBOX_REQUEST, payload: { } })
      dispatch({ type: ActionTypes.MY_FRIENDS_OUTBOX_REQUEST, payload: { } })
    }
  }

  //componentWillReceiveProps(nextProps) {
  //  if (nextProps.friends !== this.props.friends) {
  //    const { dispatch } = nextProps
  //    dispatch({ type: ActionTypes.USER_FRIENDS_REQUEST, payload: { id: nextProps.params.userId } })
  //  }
  //}

  // render
  render() {
    const { type, userId } = this.props.params
    const { friends, friendsInbox, friendsOutbox, me } = this.props

    var friendList = []
    switch(type) {
      case 'inbox':
        friendList = friendsInbox
        break;
      case 'outbox':
        friendList = friendsOutbox
        break;
      default:
        if (friends[userId]) {
          friendList = friends[userId]
        } else {
          friendList = []
        }
        break;
    }

    return (
      <Friends userId={userId} friends={friendList} type={type} me={me} />
    )
  }
}


FriendsPage.propTypes = {
  friends: PropTypes.array.isRequired,
  friendsInbox: PropTypes.object.isRequired,
  friendsOutbox: PropTypes.object.isRequired,
  // userId: PropTypes.num.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    me: state.me,
    friends: state.collections.friends,
    friendsInbox: state.me.friendsInbox,
    friendsOutbox: state.me.friendsOutbox
  }
}
export default connect(mapStateToProps)(FriendsPage)
