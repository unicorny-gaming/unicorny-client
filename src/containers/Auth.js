import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'

// Auth page component
class Auth extends React.Component {

  componentDidMount() {
    if(this.props.location.hash) {
      var key = this.props.location.hash.substr(1)
      var to = this.props.location.search.substr(4)
      const { dispatch } = this.props
      dispatch({ type: ActionTypes.USER_AUTH, payload: { key: key, to: to } })
    }
  }

  // render
  render() {
    return (
      <div className="page-login">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    );
  }
}

export default connect()(Auth)
