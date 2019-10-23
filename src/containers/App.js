import { connect } from 'react-redux'
// import "../stylesheets/main.scss";

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import Dialogs from "../components/common/Dialogs"
import Alerts from "../components/common/Alerts"
import { reduxSocket } from 'redux-socket-cluster'
import { hocOptions } from '../sagas/socket'

import * as ActionTypes from 'constants/actionTypes'

// app component
class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({ type: ActionTypes.MY_PROFILE_REQUEST })
  }

  // render
  render() {
    const children = this.props.children;
    return (
      <div>
        <Navbar/>
        <Dialogs/>
        {children}
        <Alerts/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

export default reduxSocket(Config.socketOptions, hocOptions)(connect(mapStateToProps)(App))
