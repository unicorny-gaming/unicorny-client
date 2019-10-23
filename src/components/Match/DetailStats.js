import * as ReactBootstrap from 'react-bootstrap'
import UserTableLine from './UserTableLine'


export default class DetailStats extends React.Component {

  statColumns() {
    return [
      {
        key: 'id',
        short: 'Н',
        long: 'Номер'
      },
      {
        key: 'is_leader',
        short: 'Лид',
        long: 'Лидер'
      },
    ]
  }

  renderUsers(users) {
    return users.map((user) => {
      return <UserTableLine matchUser={user} key={user.id} />
    })
  }

  renderStatColumn(key, users) {
    return users.map((user) => {
      return <div className="gamer__score-num" key={'user-stat-' + key + user.id}>{user[key].toString()}</div>
    })        
  }

  renderStats(users) {
    var i = 0
    return this.statColumns().map((stat) => {
      return (
        <div className="detail-statistic__column" key={i++}>
          <div className="detail-statistic__nav">
              <div className="detail-statistic__title" data-tooltip={stat.long}>{stat.short || stat.long}</div>
          </div>
          <div className="gamer__score">
            {this.renderStatColumn(stat.key, users)}
          </div>
        </div>
      )
    })    
  }

  renderSide(side) {
    return (
      <ReactBootstrap.Row bsClass="row-fluid" className="detail-statistic">
      <div className="block-head">
        <div className="block-title mini">{side.sideName || "Mix #" + side.id}</div>
          <div className="category">
          <button className="command-type active">Все</button>
          <button className="command-type">Террористы</button>
          <button className="command-type">Спецназ</button>
        </div>
      </div>
      <div className="detail-statistic__table">
        <div className="left__detail-statistic__table">
          <div className="detail-statistic__nav">
            <div className="detail-statistic__title">Состав</div>
          </div>
          <div className="detail-statistic__wrap">
            {this.renderUsers(side.matchSidePlayers)}
          </div>
        </div>
        <div className="right__detail-statistic__table">
          {this.renderStats(side.matchSidePlayers)}
        </div>
      </div>
      </ReactBootstrap.Row>
    )
  }

  render() {
    const { matchSides } = this.props.match
    return (
      <ReactBootstrap.Col lg={5} md={12} sm={12} className="subsidiary-part">
        {this.renderSide(matchSides[0])}
        {this.renderSide(matchSides[1])}
      </ReactBootstrap.Col>
    )
  }
}