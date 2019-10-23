import * as ReactBootstrap from 'react-bootstrap'
import UserSquare from './UserSquare'

export default class ScoreTable extends React.Component {
  constructor(props) {
    super(props)
  }
  
  renderUsers(items) {
    return items.map((item) => {
      return (
        <div key={item.id}>
          <UserSquare matchUser={item} />
        </div>
      )
    })
  }

  render() {
    if (!this.props.matchSides) {
      return <div/>
    } else {
      return (
        <ReactBootstrap.Row bsClass="row-fluid" className="room-command text-center">
          {this.renderUsers(this.props.matchSides[0].matchSidePlayers)}
          <div className="match-score left-score display-inline-block">{this.props.matchSides[0].score}</div>
          <div className="match-score score-separator  display-inline-block">:</div>
          <div className="match-score right-score display-inline-block">{this.props.matchSides[1].score}</div>
          {this.renderUsers(this.props.matchSides[1].matchSidePlayers)}
        </ReactBootstrap.Row>
      )
    }
  }
}