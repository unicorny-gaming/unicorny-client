import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'

import {
  push
} from 'react-router-redux'

class UserTableLine extends React.Component {
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
        <div className="gamer__item">
          <img src={user.avatar} />
          <span className="gamer__name">{user.username}</span>
        </div>
      )
    }
  }
}

UserTableLine.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}


function mapStateToProps(state) {
    return {
      users : state.collections.users
    }
}
export default connect(mapStateToProps)(UserTableLine)
