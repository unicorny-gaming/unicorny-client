import * as ReactBootstrap from 'react-bootstrap'
import Header from './Header'
import InfoPanel from './InfoPanel'
import MatchStats from './MatchStats'
import MatchControl from './MatchControl'
import DetailStats from './DetailStats'


// app component
export default class Match extends React.Component {
  constructor(props) {
    super(props)
  }

  // render
  render() {
    return (
      <section>
        <div id="match-container" className="container">
          <ReactBootstrap.Row>
            <ReactBootstrap.Col lg={8}>
              <div className="post post-single">
                <Header match={this.props.match} />
                <InfoPanel match = { this.props.match } />
              </div>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col lg={4}>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </div>
        
        <MatchStats match={this.props.match} />
        <MatchControl match={this.props.match} />
        <DetailStats match={this.props.match} />
      </section>
      )
    }
}