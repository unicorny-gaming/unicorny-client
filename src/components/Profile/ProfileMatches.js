import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap'
import * as ActionTypes from 'constants/actionTypes'
import MatchRow from '../common/Match'

class ProfileMatches extends React.Component {
    constructor(props) {
        super(props)
    }

    UNSAFE_componentWillMount() {
      const { dispatch, user } = this.props
      dispatch({ type: ActionTypes.USER_PROFILE_MATCHES_REQUEST, payload: { id: user.id } })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.user !== this.props.user) {
        // const { dispatch } = nextProps
        // dispatch({ type: ActionTypes.USER_PROFILE_MATCHES_REQUEST, payload: { id: nextProps.user.id } })
      }
    }

    renderMatches(matches) {
      if (!matches) {
        return null
      }
      return matches.map((match) => {
        return (
          <MatchRow matchInfo={match} key={match.match.id} />
        )
      })
    }

    render() {
      const { user } = this.props
      if (!user.matches) {
        return null
      }
      return (<div>
        <ReactBootstrap.Row className="matches">
          <ReactBootstrap.Col lg={12} md={12} sm={12}>
            <div className="block-title mini">Матчи</div>
            {user.matches.length <= 0 &&
              <p>Доступны после калибровочных матчей</p>
            }
            {user.matches.length > 0 &&
              <div className="matches-table">
                <div className="matches-table-row">
                  <div className="matches-table__nav">
                    <div className="matches__title">Дата</div>
                    <div className="matches__title">Команды</div>
                    <div className="matches__title">Счет</div>
                    <div className="matches__title">Карта</div>
                    <div className="matches__title">У</div>
                    <div className="matches__title">С</div>
                    <div className="matches__title">КПД</div>
                    <div className="matches__title">Рейтинг</div>
                  </div>
                  {this.renderMatches(user.matches)}
                </div>
              </div>
            }
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
        {/* <ReactBootstrap.Row className="load-more">
          <ReactBootstrap.Col lg={12} md={12} sm={12} className="load-more">
              <ReactBootstrap.Button href="#" bsClass="btn btn-ellipse btn-white btn-load">Загрузить еще</ReactBootstrap.Button>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row> */}
      </div>)
    }
}


ProfileMatches.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    matches: state.collections.matches
  }
}

export default connect(mapStateToProps)(ProfileMatches)
