import * as ReactBootstrap from 'react-bootstrap';

export default class TournamentList extends React.Component {
  render() {
    return (
      <ReactBootstrap.Row bsClass="row-fluid">
        <div className="block-header">
          <a href="#" className="block-title link">Турниры</a>
        </div>
        <div className="tournament">
          <div className="tournament-item">
            <a href="#" className="tournament-name">Middle Tournament 20 Middle Tournament 20</a>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Статус</span>
              </div>
              <div className="tournament-right">
                <span className="tournament-status">битва</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Взнос</span>
              </div>
              <div className="tournament-right">
                <span className="tournament-money">120</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Состав</span>
              </div>
              <div className="tournament-right">
                <span>140 из 140</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Старт</span>
              </div>
              <div className="tournament-right">
                <span>20.06.2016 в 00:12</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Чекин</span>
              </div>
              <div className="tournament-right">
                <span>23.06.2016 в 00:12</span>
              </div>
            </div>
            <a className="btn btn-light" disabled="disabled">Регистрация окончена</a>
            <div className="tournament-list">
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Сетка</a>
              </div>
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Команды</a>
              </div>
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Правила</a>
              </div>
            </div>
          </div>
          <div className="tournament-item">
            <a href="#" className="tournament-name">Middle Tournament 20</a>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Статус</span>
              </div>
              <div className="tournament-right">
                <span className="tournament-status">регистрация</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Взнос</span>
              </div>
              <div className="tournament-right">
                <span className="tournament-money">120</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Состав</span>
              </div>
              <div className="tournament-right">
                <span>5/140</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Старт</span>
              </div>
              <div className="tournament-right">
                <span>20.06.2016 в 00:12</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Чекин</span>
              </div>
              <div className="tournament-right">
                <span>через 10 ч. 17 мин.</span>
              </div>
            </div>
            <a href="#" className="btn btn-block btn-ellipse btn-blue">Принятие участие</a>
            <div className="tournament-list">
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Сетка</a>
              </div>
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Команды</a>
              </div>
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Правила</a>
              </div>
            </div>
          </div>
          <div className="tournament-item">
            <a href="#" className="tournament-name">Middle Tournament 20</a>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Статус</span>
              </div>
              <div className="tournament-right">
                <span className="tournament-status">регистрация</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Взнос</span>
              </div>
              <div className="tournament-right">
                <span className="tournament-money">120</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Состав</span>
              </div>
              <div className="tournament-right">
                <span>14/140</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Старт</span>
              </div>
              <div className="tournament-right">
                <span>20.06.2016 в 00:12</span>
              </div>
            </div>
            <div className="tournament-info">
              <div className="tournament-left">
                <span>Чекин</span>
              </div>
              <div className="tournament-right">
                <span>через 10 ч. 17 мин.</span>
              </div>
            </div>
            <a href="#" className="btn btn-block btn-ellipse btn-orange">Отменить участие</a>
            <div className="tournament-list">
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Сетка</a>
              </div>
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Команды</a>
              </div>
              <div className="tournament-list-row">
                <a href="#" className="tournament-link">Правила</a>
              </div>
            </div>
          </div>
        </div>
      </ReactBootstrap.Row>
    )
  }
}