import ScoreTable from './ScoreTable'

export default class Header extends React.Component {

  getTeamName(matchSide) {
    let name = matchSide.sideName || 'Mix #' + matchSide.id
    return name
  }

  getWinnerClass(matchSide) {
    switch (matchSide.result) {
      case 2:
        return ' text-danger'
      case 1:
        return ' text-success'
      default:
        return ''
    }
  }


  render() {
    const { matchSides } = this.props.match

    return (
      <div className="match-header">
        <div>
          {matchSides && 
            <h2 className="post-title text-center">
            <span className={this.getWinnerClass(matchSides[0])}>{this.getTeamName(matchSides[0])}</span>
            &nbsp;<small>vs</small>&nbsp;
            <span className={this.getWinnerClass(matchSides[0])}>{this.getTeamName(matchSides[1])}</span>
            </h2>
          }
        </div>
        {this.props.match && this.props.match.matchSides && <ScoreTable matchSides={this.props.match.matchSides} /> }
      </div>
    )
  }
}