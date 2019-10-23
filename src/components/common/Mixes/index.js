import MixesParty from "./MixesParty"
import MixesTeam from "./MixesTeam"
import MixesMode from './MixesMode'
import MixesSearch from './MixesSearch'
import * as ReactBootstrap from 'react-bootstrap'

// app component
export default class Mixes extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.switchTab = this.switchTab.bind(this);
    this.state = { activeTab: 1 }
  }

  switchTab(event) {
    this.setState({
      activeTab: event.target.dataset.tabid
    })
    return false
  }

  // render
  render() {
    let { activeTab } = this.state

    return (
      <ReactBootstrap.Row className="row-fluid">
        <div className="tabs-boxed col-md-12">
          <ul className="nav nav-tabs nav-icon-left" role="tablist">
            <li className="nav-item">
              <a className={activeTab == 1 ? "nav-link active" : "nav-link"} data-tabId="1" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="true" onClick={this.switchTab}><i className="fa fa-user-o"></i> В одиночку</a>
            </li>
            <li className="nav-item">
              <a className={activeTab == 2 ? "nav-link active" : "nav-link"} data-tabId="2" aria-controls="settings" role="tab" data-toggle="tab" aria-expanded="false" onClick={this.switchTab}><i className="fa fa-users"></i> Со взводом</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className={activeTab == 1 ? "tab-pane active" : "tab-pane"} id="boxed-single" role="tabpanel" aria-expanded="true">
              <div className="m-b-0 row">
                <MixesMode />
                <MixesSearch />
              </div>
            </div>
            <div className={activeTab == 2 ? "tab-pane active" : "tab-pane"} id="boxed-team" role="tabpanel" aria-expanded="false">
              <div className="m-b-0">                
                <MixesParty />
                <MixesTeam />
              </div>
            </div>
          </div>
        </div>
      </ReactBootstrap.Row>
    )
  }
}
