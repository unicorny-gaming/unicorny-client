import MatchLine from './MatchLine'
import * as ActionTypes from 'constants/actionTypes'
// import * as ReactBootstrap from 'react-bootstrap'
import { connect } from 'react-redux'

// app component
class MatchList extends React.Component {
  constructor(props) {
    super(props)
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props
    dispatch({ type: ActionTypes.MATCHES_REQUEST, payload: { } })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.match !== this.props.match) {
      const { dispatch } = nextProps
      dispatch({ type: ActionTypes.MATCHES_REQUEST, payload: { } })
    }
  }

  renderLines(items) {
    return items.map((item) => {
      return (
        <MatchLine match={item} key={item.id} />
      )
    })
  }

  // render
  render() {
    const { matches } = this.props

    return (
      <div className="forum">
        <div className="forum-head">
          <div></div>
          <div style={{width: "65%"}}>Topic</div>
          <div style={{width: "7%"}}>Replies</div>
          <div style={{width: "7%"}}>Views</div>
          <div style={{width: "20%"}}>Most Recent</div>
        </div>
        { matches && this.renderLines(matches) }
      </div>
    )
  }
}

MatchList.propTypes = {
  me: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    me: state.me,
    matches: state.collections.matches
  }
}
export default connect(mapStateToProps)(MatchList)
