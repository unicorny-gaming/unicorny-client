import * as ReactBootstrap from 'react-bootstrap';

export default class NewsBlocks extends React.Component {
  render() {
    return (
      <ReactBootstrap.Row bsClass="row-fluid">
        <div className="block-header">
          <a href="/news/1" className="block-title link">Новости</a>
        </div>
        <div className="lenta">
          <div className="lenta-item">
            <div className="lenta-info">
              <div className="lenta-date">30 октября, 11:21</div>
              <a className="lenta-category">Победы</a>
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
            </div>
            <div className="lenta-photo" />
            <div className="lenta-header">
              <a href="/news/1" className="lenta-title">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
            </div>
            <div className="lenta-text">Вторая американская квалификация дошла до стадии 1/8 финала. В отборочных осталось 16 команд, девять из которых — европейские. Первую открытую квалификацию в американском регионе выиграла европейская команда Prodota Gaming.</div>
          </div>
          <div className="lenta-item">
            <div className="lenta-info">
              <div className="lenta-date">Сегодня</div>
              <a className="lenta-category">Победы</a>
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
            </div>
            <div className="lenta-photo" />
            <div className="lenta-header">
              <a href="/news/1" className="lenta-title">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
            </div>
            <div className="lenta-text">Вторая американская квалификация дошла до стадии 1/8 финала. В отборочных осталось 16 команд, девять из которых — европейские. </div>
          </div>
          <div className="lenta-item">
            <div className="lenta-info">
              <div className="lenta-date">Сегодня</div>
              <a className="lenta-category">Победы</a>
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
            </div>
            <div className="lenta-photo" />
            <div className="lenta-header">
              <a href="/news/1" className="lenta-title">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
            </div>
            <div className="lenta-text">Вторая американская квалификация дошла до стадии 1/8 финала. В отборочных осталось 16 команд, девять из которых — европейские. Первую открытую квалификацию в американском регионе выиграла европейская команда Prodota Gaming. Вторая американская квалификация дошла до стадии 1/8 финала. В отборочных осталось 16 команд, девять из которых — европейские. Первую открытую квалификацию в американском регионе выиграла европейская команда Prodota Gaming. Первую открытую квалификацию в американском регионе выиграла европейская команда Prodota Gaming.</div>
          </div>
          <div className="lenta-item">
            <div className="lenta-info">
              <div className="lenta-date">Сегодня</div>
              <a className="lenta-category">Курьезные ситуации</a>
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
            </div>
            <div className="lenta-photo" />
            <div className="lenta-header">
              <a href="/news/1" className="lenta-title">Kaipi, FlipSid3 и PowerRangers прошли в Game</a>
            </div>
            <div className="lenta-text">Вторая американская квалификация дошла до стадии 1/8 финала. В отборочных осталось 16 команд, девять из которых — европейские. Первую открытую квалификацию в американском регионе выиграла европейская команда Prodota Gaming.</div>
          </div>
          <div className="lenta-item">
            <div className="lenta-banner">
              <p className="lenta-slogan">Хочешь зарабатывать играя в Counter Strike?</p>
              <a href="/news/1" className="btn btn-block btn-ellipse btn-orange">Узнать подробности</a>
            </div>
          </div>
          <div className="lenta-item">
            <div className="lenta-info">
              <div className="lenta-date">Сегодня</div>
              <a className="lenta-category">Курьезные ситуации</a>
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
            </div>
            <div className="lenta-photo" />
            <div className="lenta-header">
              <a href="/news/1" className="lenta-title">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
            </div>
            <div className="lenta-text">Вторая американская квалификация дошла до стадии 1/8 финала. В отборочных осталось 16 команд, девять из которых — европейские. Первую открытую квалификацию в американском регионе выиграла европейская команда Prodota Gaming.</div>
          </div>
        </div>
        <ReactBootstrap.Col lg={12} md={12} sm={12} className="load-more">
          <ReactBootstrap.Button href="#" bsClass="btn btn-ellipse btn-white btn-load">Загрузить еще</ReactBootstrap.Button>
        </ReactBootstrap.Col>
      </ReactBootstrap.Row>  
    )
  }
}