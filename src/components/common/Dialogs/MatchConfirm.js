import { connect } from 'react-redux'
// import * as ReactBootstrap from 'react-bootstrap'
import * as MixStatuses from 'constants/mix'

// app component
class MatchConfirm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          finishTick: 0
        }

        // This binding is necessary to make `this` work in the callback
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleConfirm() {
        const { dispatch, prematch } = this.props
        dispatch({
          type: MixStatuses.MIX_WAS_CONFIRMED_BY_USER,
          payload: {
            channelName: prematch.channelName
          }
        })
    }

    handleCancel() {
        const { dispatch, prematch } = this.props
        dispatch({
          type: MixStatuses.MIX_WAS_CANCELED_BY_USER,
          payload: {
            channelName: prematch.channelName
          }
        })
    }

    // render
    render() {
        const { prematch } = this.props
        if (prematch && prematch.needConfirmation && !prematch.confirmed) {
            return (
                <div className="modal-dialog modal-warning" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Ваша игра готова</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleCancel}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="bottom">
                                <span className="popup-footer-title">Игру можно принять клавишей Enter</span>
                                <div className="right">
                                    <span className="popup-timer">{`0:${prematch.timer}`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCancel}>Отменить</button>
                            <button type="button" className="btn btn-warning" onClick={this.handleConfirm}>Принять</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        prematch: state.mix.prematch,
    }
}


export default connect(mapStateToProps)(MatchConfirm)
