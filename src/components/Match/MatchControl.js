import * as ReactBootstrap from 'react-bootstrap'

export default class ScoreTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { server } = this.props.match
    if (!server) {
      return null
    } else {
      return <ReactBootstrap.Row bsClass="row-fluid" className="mixes-setting">
        <a className="block-title mini">Настройки</a>
        <div className="connect-block">
            <div className="data-holder">
              <input type="text" defaultValue={"connect " + server.ip + ":" + server.port} readOnly />
              <button>Cкопировать ip</button>
            </div>
            {/*<div className="data-holder">
              <input type="text" defaultValue="connect 144.76.8.143:27017" readOnly />
              <button>Cкопировать GOTV</button>
            </div>*/}
        </div>
      </ReactBootstrap.Row>
    }
  }
}