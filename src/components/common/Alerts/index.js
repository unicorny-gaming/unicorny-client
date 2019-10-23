import { connect } from 'react-redux'

import Alert from './Alert'
import Notification from './Notification'

// app component
class Alerts extends React.Component {

  renderAlerts(alerts) {
    return alerts.map((alert) => {
      return (
        <Alert key={alert.id} alert={alert} />
      )
    })
  }

  renderNotifications(notifications) {
    return notifications.map((notify) => {
      return (
        <Notification key={notify.id} notify={notify} />
      )
    })
  }

  // render
  render() {
    const { alerts, notifications } = this.props
    return (
      <div className="notification notification-right animated fadeInDown fast">
        {this.renderAlerts(alerts)}
        {this.renderNotifications(notifications)}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    alerts: state.me.alerts,
    notifications: state.me.notifications
  }
}

export default connect(mapStateToProps)(Alerts)
