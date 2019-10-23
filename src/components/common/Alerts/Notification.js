import { connect } from 'react-redux'

import * as ActionTypes from 'constants/actionTypes'

// app component
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosing: false
    }

    this.closeNotify = this.closeNotify.bind(this)
  }

  UNSAFE_componentWillMount() {
    let self = this
    setTimeout(() => {
      self.closeNotify()
    }, 5000);
  }

  closeNotify() {
    const { dispatch, notify } = this.props
    if(!this.state.isClosing) {
      this.setState(() => {
        return { isClosing: true }
      })
      setTimeout(() => {
        dispatch({
          type: ActionTypes.SYSTEM_CLOSE_NOTIFICATIONS,
          payload: [notify]
        })
      }, 100);
    }
  }

  render() {
    const { notify } = this.props
    const { isClosing } = this.state
    let notifyClass = `alert alert-info alert-with-image ${isClosing ? 'out' : 'in'} `
    if ( notify.is_active == false ) {
      return null
    } else {
      return (
        <div className={notifyClass}>
            <div className="alert-image">
                <img src="http://placehold.it/40x40" alt="Изображение уведомления" />
            </div>
            <a className="close" data-dismiss="alert" aria-label="close" onClick={this.closeNotify}>×</a>
            <span dangerouslySetInnerHTML={{__html: notify.message }}></span>
        </div>
      )
    }
  }
}
Notification.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Notification)
