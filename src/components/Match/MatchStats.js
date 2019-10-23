import * as ReactBootstrap from 'react-bootstrap'


export default class ScoreTable extends React.Component {
  render() {
      
    return (
      <ReactBootstrap.Row bsClass="row-fluid" className="room-statistic striped-table">
        <div className="table-row">
            <span className="score">-</span>
            <span className="title">Первая половина игры</span>
            <span className="score">-</span>
        </div>
        <div className="table-row">
            <span className="score">-</span>
            <span className="title">Вторая половина игры</span>
            <span className="score">-</span>
        </div>
      </ReactBootstrap.Row>
    )
  }
}