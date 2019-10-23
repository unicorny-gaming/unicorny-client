import { connect } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import * as MixStatuses from 'constants/mix';

class MixesSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.startMixSearch = this.startMixSearch.bind(this);
    this.cancelMixSearch = this.cancelMixSearch.bind(this);

    this.state = { showCancel : false }
  }

  startMixSearch() {
    const { dispatch, me } = this.props;
    if (!me.identity) {
      window.location.href = Config.authUrl.replace('{url}', encodeURIComponent(window.location.href));
    } else {
      dispatch({ type: MixStatuses.MIX_CREATE_SEARCH_REQUEST, payload: { formatId: this.props.form.values.formatId, mode: 1 } })
    }
  }

  cancelMixSearch() {
    const { dispatch } = this.props;
    dispatch({ type: MixStatuses.MIX_CANCEL_SEARCH_REQUEST, payload: { } })
  }

  render() {
    const { me } = this.props
    let { showCancel } = this.state
    let mixSearchAvailable = !me.identity || !me.activeMixesSearch

    return (
      <div className="mixes-find">
        {!mixSearchAvailable &&
          <ReactBootstrap.Button className="btn-block btn-ellipse btn-blue btn-mixes btn-mixes-load " bsStyle={showCancel ? "danger" : "default"} onClick={this.cancelMixSearch}
          onMouseOver={() => this.setState({ showCancel: true })} onMouseOut={() => this.setState({ showCancel: false })}>
            <img src="/themes/dszone/img/spinner.gif" className="loading-gif"/>
          {showCancel ? "Отменить" : "Идет поиск..." }
          </ReactBootstrap.Button>
        }
        {mixSearchAvailable &&
          <ReactBootstrap.Button className="btn-block btn-ellipse btn-blue btn-mixes" href="#" onClick={this.startMixSearch}>
            Найти игру
          </ReactBootstrap.Button>
        }
      </div>
    )
  }
}

MixesSearch.propTypes = {
  me: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    me: state.me,
    form: state.form.mixesModeForm,
  }
}

export default connect(mapStateToProps)(MixesSearch)