import { connect } from 'react-redux'
// import * as ReactBootstrap from 'react-bootstrap'
import * as ActionTypes from 'constants/actionTypes'
import Match from 'components/Match'
// import Comments from 'components/common/Comments'

// Match page component
class MatchPage extends React.Component {
    constructor(props) {
      super(props)
    }

    UNSAFE_componentWillMount() {
      const { dispatch } = this.props
      dispatch({ type: ActionTypes.MATCH_REQUEST, payload: { id: this.props.params.id } })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.match !== this.props.match) {
        const { dispatch } = nextProps
        dispatch({ type: ActionTypes.MATCH_REQUEST, payload: { id: nextProps.params.id } })
      }
    }

    // render
    render() {
      const { matches } = this.props
      let match = matches[this.props.params.id]
      if (!match) {
        return <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
      } else {
        return (
            <Match match={match}/>
            // <Comments modelName="matches" modelId={this.props.params.id}/>
        )
      }
    }
}


MatchPage.propTypes = {
  me: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
      me : state.me,
      matches : state.collections.matches
    }
}
export default connect(mapStateToProps)(MatchPage)
