// import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap'

export default class ProfileAchivement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      //const { user } = this.props
      return <ReactBootstrap.Row bsClass="row-fluid" className="profile-achivement-block">
        <div className="achivement-header profile-achivement-header">
          <a href="#" className="block-title mini link">Награды</a>
          <div className="all-progress progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}}>
              <span id="progress" className="show" />
            </div>
          </div>
          <a href="#" className="progress-total">0/130 открыто</a>
        </div>
        <div className="achivement-viewer">
          <div className="achivement-slot">
            <img src="/themes/zcs/img/non-medal.svg" />
            <span className="free-achivement-slot">Свободный слот для награды</span>
          </div>
          <div className="achivement-slot">
            <img src="/themes/zcs/img/non-medal.svg" />
            <span className="free-achivement-slot">Свободный слот для награды</span>
          </div>
        </div>
      </ReactBootstrap.Row> 
    }
}