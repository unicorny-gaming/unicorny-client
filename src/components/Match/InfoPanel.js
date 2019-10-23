import { connect } from 'react-redux'
// import * as ReactBootstrap from 'react-bootstrap'
import * as ActionTypes from 'constants/actionTypes'

class InfoPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({type: ActionTypes.MATCH_FORMATS_REQUEST})
  }


  renderTeamName(matchSide) {
    let name = matchSide.sideName || 'Mix #' + matchSide.id
    return <div className="command-nick">
      {name}
    </div>
  }

  renderStatus(status){
    var statusName = "ожидание начала"
    switch(status) {
      case 0: statusName = "ожидание сервера"; break;
      case 1: statusName = "игра"; break;
      case 9: statusName = "завершен"; break;
    }
    return <div className="command-status">
      <div className="status-description">
        {statusName}
      </div>
    </div>
  }

  render() {
    const { matchFormats } = this.props
    const { matchSides, status, server, match_format_id, series, updated_at, created_at } = this.props.match
    let serverLink = server ? ('steam://connect/' + server.ip + ':' + server.port) : null
    let demoLink = '/match/demo/xxx'
    let matchFormat = matchFormats[match_format_id] ? matchFormats[match_format_id].name : '-'
    let time = ((new Date(updated_at)).getTime() - (new Date(created_at)).getTime()) / 1000
    let timeString = Math.floor(time / 60) + ':' + (time % 60)

    if (!matchSides) {
      return null
    } else {
      return (
        <div>
          <div className = "post-meta text-center">
            { this.renderStatus(status) }
            <span>{ matchFormat } </span> <span>Bo{ series }</span> <span>{ timeString }</span>
          </div>
          <div className = "post-meta text-center" >
            {status < 8 &&
            <a href={serverLink} className="btn btn-block btn-ellipse btn-blue" disabled={!serverLink}>Играть</a>
            }
            {status >= 9 && 
            <a href={demoLink} className="btn btn-block btn-ellipse btn-blue">Скачать демо</a>
          }
          </div>
        </div>
      )
    }
  }
}

InfoPanel.propTypes = {
  matchFormats: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
      matchFormats : state.collections.matchFormats
    }
}
export default connect(mapStateToProps)(InfoPanel)
