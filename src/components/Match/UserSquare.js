import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'

import {
  push
} from 'react-router-redux'

class UserSquare extends React.Component {
  constructor(props) {
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.goProfile = this.goProfile.bind(this)
  }

  UNSAFE_componentWillMount() {
    const { dispatch, matchUser } = this.props
    dispatch({ type: ActionTypes.USER_PROFILE_REQUEST, payload: { id: matchUser.steam_user_id } })
  }

  goProfile(e) {
    e.preventDefault()
    let { dispatch } = this.props
    dispatch(push(this.profileLink.pathname))
    return false
  }

  render() {
    const { users, matchUser } = this.props
    let user = users[matchUser.steam_user_id]
    if (!user) {
      return null
    } else {
      return (
        <a className={matchUser.is_leader ? "player leader" : "player"} onClick={this.goProfile} href={'/profile/' + matchUser.steam_user_id} ref={(a) => { this.profileLink = a }}>
          <img src={user.avatar} alt={user.username} />
        </a>
      )
    }
  }
}

UserSquare.propTypes = {
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
      users : state.collections.users
    }
}
export default connect(mapStateToProps)(UserSquare)
