import * as ReactBootstrap from 'react-bootstrap';

export default class NewsBlocks extends React.Component {
  render() {
    return (
      <ReactBootstrap.Row bsClass="row-fluid" className="main-news">
        <a href="/news/1" className="main-news__item">
          <div className="main-news__description">
            <div className="main-news__subject">Победы</div>
            <p className="main-news__title">Какая-то команда одерживает победу на Dreamhack</p>
            <div className="main-news__info">
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
              <div className="main-news__date">Сегодня</div>
            </div>
          </div>
        </a>
        <a href="/news/1" className="main-news__item">
          <div className="main-news__description">
            <div className="main-news__subject">Победы</div>
            <p className="main-news__title">Какая-то команда одерживает победу на Dreamhack</p>
            <div className="main-news__info">
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
              <div className="main-news__date">Сегодня</div>
            </div>
          </div>
        </a>
        <a href="/news/1" className="main-news__item main-news__item--special">
          <div className="main-news__banner">
            <p className="main-news__slogan">Хочешь зарабатывать играя в Counter Strike?</p>
            <div className="btn btn-block btn-ellipse btn-orange">Узнать подробности</div>
          </div>
        </a>
        <a href="/news/1" className="main-news__item main-news__item--long">
          <div className="main-news__description">
            <div className="main-news__subject">Победы</div>
            <p className="main-news__title">Какая-то команда одерживает победу на Dreamhack</p>
            <div className="main-news__info">
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
              <div className="main-news__date">Сегодня</div>
            </div>
          </div>
        </a>
        <a href="/news/1" className="main-news__item">
          <div className="main-news__description">
            <div className="main-news__subject">Победы</div>
            <p className="main-news__title">Какая-то команда одерживает победу на Dreamhack</p>
            <div className="main-news__info">
              <div className="view_num">
                <i className="view_num-icon" />
                <span className="view_num-number">429</span>
              </div>
              <div className="main-news__date">Сегодня</div>
            </div>
          </div>
        </a>
      </ReactBootstrap.Row>
    )
  }
}