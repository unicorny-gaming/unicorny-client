import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'

// app component
class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosing: false
    }

    this.closeAlert = this.closeAlert.bind(this)
  }

  UNSAFE_componentWillMount() {
    let self = this
    setTimeout(() => {
      self.closeAlert()
    }, 5000);
  }

  closeAlert() {
    const { dispatch, alert } = this.props
    if(!this.state.isClosing) {
      this.setState(() => {
        return { isClosing: true }
      })
      setTimeout(() => {
        dispatch({
          type: ActionTypes.SYSTEM_CLOSE_ALERT,
          payload: alert
        })
      }, 100);
    }
  }

  render() {
    const { alert } = this.props
    const { isClosing } = this.state
    let alertClass = `alert alert-${alert.type} ${isClosing ? 'out' : 'in'} `
    return (
      <div className={alertClass}>
        <a className="close" data-dismiss="alert" aria-label="close" onClick={this.closeAlert}>×</a>
        {alert.message}
      </div>
    )
  }
}


Alert.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Alert)
