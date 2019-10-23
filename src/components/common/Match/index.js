export default class MatchCell extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTeamInfo(side) {
    return (
      <div className="matches__item-team-line">
        <div className="matches__item__team-photo">
          <img src="http://placehold.it/40x40" />
        </div>
        <div className="matches__item__team-name">{side.team_id || 'Mix #' + side.id}</div>
      </div>
    )
  }

  render() {
    const { matchInfo } = this.props
    const { match } = matchInfo

    return (
        <div className="matches-table__row">
          <div className="matches__item">
            <div className="matches__item-date">{match.start_time}</div>
          </div>
          <div className="matches__item">
            <div className="matches__item-team">
              {this.renderTeamInfo(match.matchSides[0])}
              {this.renderTeamInfo(match.matchSides[1])}
            </div>
          </div>
          <div className="matches__item">
            <div className="matches__item-score">
              <div className="matches__score">{match.matchSides[0].score}</div>
              <div className="matches__score my-team">{match.matchSides[1].score}</div>
            </div>
          </div>
          <div className="matches__item">
            <div className="matches__item-map">override</div>
          </div>
          <div className="matches__item">
            <div className="matches__item-kill-death">{matchInfo.kills}</div>
          </div>
          <div className="matches__item">
            <div className="matches__item-kill-death">{matchInfo.deaths}</div>
          </div>
          <div className="matches__item">
            <div className={"matches__item-kpd " + (matchInfo.kills > matchInfo.deaths ? "matches__kpd-up" : "matches__kpd-down")}>{matchInfo.kills - matchInfo.deaths}</div>
          </div>
          <div className="matches__item">
            <div className={"matches__item-reiting " + (matchInfo.rating >= 1 ? "matches__reiting-up" : "matches__reiting-down")}>{matchInfo.rating}</div>
          </div>
        </div>
    )
  }
}