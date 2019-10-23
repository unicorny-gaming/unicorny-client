// import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap'

export default class ProfileStatistic extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { user } = this.props
      const { steamUserStat } = user
      
      if (null == steamUserStat) {
        return <ReactBootstrap.Row className="gamer-key__statistic">
          <ReactBootstrap.Col lg={12} md={12} sm={12}>
            <div className="block-title mini">Ключевая статистика</div>
            <p>Доступна после калибровочных матчей.</p>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      } else {
        return <ReactBootstrap.Row className="gamer-key__statistic">
          <ReactBootstrap.Col lg={12} md={12} sm={12}>
            <div className="block-title mini">Ключевая статистика</div>
            <div className="profile-key-statistic">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="table-head">Убийств</div>
                      <div className="table-body">{steamUserStat.kills}</div>
                    </td>
                    <td>
                      <div className="table-head">Смертей</div>
                      <div className="table-body">{steamUserStat.deaths}</div>
                    </td>
                    <td>
                      <div className="table-head">Матчей</div>
                      <div className="table-body">{steamUserStat.maps_played}</div>
                    </td>
                    <td>
                      <div className="table-head">Хэдшотов</div>
                      <div className="table-body">{steamUserStat.headshot_kills}</div>
                    </td>
                    <td>
                      <div className="table-head">Доход</div>
                      <div className="table-body">0</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-head">Убийств в среднем</div>
                      <div className="table-body">{steamUserStat.avgKills}</div>
                    </td>
                    <td>
                      <div className="table-head">Помощи</div>
                      <div className="table-body">{steamUserStat.assists}</div>
                    </td>
                    <td>
                      <div className="table-head">Урон в среднем</div>
                      <div className="table-body">{steamUserStat.avgDamage}</div>
                    </td>
                    <td>
                      <div className="table-head">Кпд</div>
                      <div className="table-body">Н\Д</div>
                    </td>
                    <td>
                      <div className="table-head">Рейтинг</div>
                      <div className="table-body">{steamUserStat.rating}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      }
    }
}