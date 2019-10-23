import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'
import Profile from 'components/Profile'

// Profile page component
class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props
    dispatch({ type: ActionTypes.USER_PROFILE_REQUEST, payload: { id: this.props.params.id } })
    dispatch({ type: ActionTypes.USER_FRIENDS_REQUEST, payload: { id: this.props.params.id } })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      const { dispatch } = nextProps
      dispatch({ type: ActionTypes.USER_PROFILE_REQUEST, payload: { id: nextProps.params.id } })
    }
  }

  render() {
    let user = this.props.users[this.props.params.id]
    return (
      <Profile user={user} />
    )
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    users: state.collections.users
  }
}

export default connect(mapStateToProps)(ProfilePage)
