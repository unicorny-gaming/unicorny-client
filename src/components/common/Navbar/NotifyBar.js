import { connect } from "react-redux";
import * as ActionTypes from 'constants/actionTypes'
// import { LinkContainer } from "react-router-bootstrap";
import * as ReactBootstrap from 'react-bootstrap';

class NotifyBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }

    // This binding is necessary to make `this` work in the callback
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  UNSAFE_componentWillReceiveProps(/* nextProps */) {
    const { dispatch } = this.props
    if (this.state.isToggleOn) {
      dispatch({
        type: ActionTypes.MY_NOTIFICATIONS_READ_REQUEST
      })
    }
  }

  toggleStatus() {
    this.setState(previousState => {
      return { isToggleOn: !previousState.isToggleOn }
    })
  }

  renderItems(items) {
    return items.map((item) => {
      return (
        <a key={item.id} className="dropdown-item">
            <p dangerouslySetInnerHTML={{__html: item.message}}></p>
        </a>
      )
    })
  }

  // render
  render() {
    const { me } = this.props
    if (!me.identity) {
      return null
    } else {
      // const { isToggleOn } = this.state
      const { notifications } = this.props.me
      let hasNotifications = notifications && notifications.length > 0
      let activeNotifications = notifications.filter((item) => { return item.is_active } )

      return (
        <ReactBootstrap.NavDropdown className="dropdown-notification"
          key={4}
          eventKey={4}
          id="notify-bar"
          title={
            <span><i className="fa fa-bell"></i>
              { hasNotifications
              && <span className="badge badge-danger">{activeNotifications.length}</span> }
              </span>
          }
          noCaret
          onClick={this.toggleStatus} >
          { hasNotifications &&
            this.renderItems(notifications) }
        </ReactBootstrap.NavDropdown>
      )
    }
  }
}

NotifyBar.propTypes = {
  me: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
  return {
    me: state.me
  }
}

export default connect(mapStateToProps)(NotifyBar)
