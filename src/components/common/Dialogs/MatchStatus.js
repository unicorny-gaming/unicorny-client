import { connect } from 'react-redux'

// app component
class MatchStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    const { prematch } = this.props
    let items = []
    for (var i = 0; i < prematch.confirmedCount; i++) {
      items.push(<i className="fa fa-user" key={i}></i>)
    }
    for (i; i<prematch.totalCount; i++) {
      items.push(<i className="fa fa-user-o" key={i}></i>)
    }
    return(
      <div className="players-squad">
        {items}
      </div>
    )
  }

  // render
  render() {
    const { prematch } = this.props
    if (prematch && !prematch.needConfirmation && prematch.confirmed) {
      return (
        <div className="modal-dialog modal-warning" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ожидание других игроков</h5>
            </div>
            <div className="modal-body">
              <div className="text-center">
                {this.renderItems()}
                <div className="num-of-ready">{prematch.confirmedCount}/{prematch.totalCount}</div>
              </div>
            </div>
            <div className="modal-footer">
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


export default connect(mapStateToProps)(MatchStatus)