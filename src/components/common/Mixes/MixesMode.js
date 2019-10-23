import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
// import { DropdownMenu, MenuItem } from 'react-bootstrap';
// import * as MixStatuses from 'constants/mix';
import { reduxForm } from 'redux-form'

import * as ActionTypes from 'constants/actionTypes'

class MixesMode extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.props.initialize({
      formatId: 1
    })
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({type: ActionTypes.MATCH_FORMATS_REQUEST})
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.matchFormats !== this.props.matchFormats) {
  //     const { dispatch } = nextProps
  //     dispatch({type: ActionTypes.MATCH_FORMATS_REQUEST})
  //   }
  // }

  renderItems(matchFormats) {
    return matchFormats.map((item) => {
      return (
        // <ReactBootstrap.MenuItem key={item.id} eventKey={item.id}>{item.name}</ReactBootstrap.MenuItem>
        <option value={item.id} key={item.id}>{item.name}</option>
      )
    })
  }

  handleChange(event) {
    this.props.change('formatId', event.target.value);
  }

  render() {
    const { matchFormats, me } = this.props
    let mixAvailable = !me.identity || !me.activeMixesSearch
    let selectedMatchFormat = mixAvailable ? null : me.activeMixesSearch.match_format_id

    return (
      <div className="mixes-mode">
        <form>
          {matchFormats && matchFormats.length > 0 &&
            <ReactBootstrap.FormGroup controlId="mode-selector" placeholder="Режим игры" >
              <ReactBootstrap.FormControl componentClass="select" placeholder="select" defaultValue={selectedMatchFormat} onChange={this.handleChange} disabled={ !mixAvailable }>
                {this.renderItems(matchFormats)}
              </ReactBootstrap.FormControl>
            </ReactBootstrap.FormGroup>
          }
          {matchFormats && matchFormats.length === 0 &&
            <ReactBootstrap.FormGroup controlId="mode-selector" placeholder="Режим игры" >
              <ReactBootstrap.FormControl componentClass="select" placeholder="Режим игры" disabled="true">
                <option value="0" key="0">Режим</option>
              </ReactBootstrap.FormControl>
            </ReactBootstrap.FormGroup>
          }
          {!matchFormats &&
            <span>Получение данных</span>
          }
        </form>
      </div>
    )
  }
}

MixesMode.propTypes = {
  matchFormats: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

let MixesModeForm = reduxForm({
  form: 'mixesModeForm' // a unique identifier for this form
})(MixesMode)


function mapStateToProps(state) {
    return {
      me: state.me,
      mix: state.mix,
      matchFormats: state.collections.matchFormats || [],
    }
}

export default connect(mapStateToProps)(MixesModeForm)
