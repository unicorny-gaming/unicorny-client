import { connect } from 'react-redux'
import MatchConfirm from './MatchConfirm'
import MatchStatus from './MatchStatus'
// import * as ReactBootstrap from 'react-bootstrap'

// app component
class Dialogs extends React.Component {

  isShown() {
    let { prematch } = this.props
    return prematch && prematch.channelName
    // return prematch && (prematch.needConfirmation && !prematch.confirmed)
  }
  
  // render
  render() {
    return (
      <div id="dialog-container" className={"modal fade modal-top " + (this.isShown() ? " show" : "") }>
          <MatchConfirm/>
          <MatchStatus/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    prematch: state.mix.prematch,
  }
}


export default connect(mapStateToProps)(Dialogs)
