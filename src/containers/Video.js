import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap';
// import * as ActionTypes from 'constants/actionTypes'

// Video page component
class Video extends React.Component {
    constructor(props) {
        super(props)
    }

    // render
    render() {        
        const id = this.props.params.id
        
        if (id) {
          return (
            <ReactBootstrap.Row>
              <ReactBootstrap.Col lg={12} md={12} sm={12}>
                <ReactBootstrap.Row>
                  <ReactBootstrap.Col lg={2} md={3} className="auxiliary-menu news-category">
                    <h1 className="main-title">Видео</h1>
                    <ul className="list-unstyled list-group" role="tablist">
                      <li role="list-group-item" className="active"><a href="#" data-tooltip="Новости">Все видео</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Летсплеи</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Блоги</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Хайтлайты</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Пользовательские ролики</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Смешнявки</a></li>
                    </ul>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col lg={7} md={6} sm={12}>
                    <div className="video video-viewer">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen />
                      </div>
                      <div className="video-name">
                        Интервью с Даниилом Тесленко после игры с Liquid
                      </div>
                      <div className="video-description">
                        Управление политическими конфликтами, как правило, практически интегрирует
                        гносеологический тоталитарный тип политической культуры. Социализм ограничивает
                        экзистенциальный марксизм. Мажоритарная избирательная система, в первом
                        приближении, однозначно символизирует функциональный постиндустриализм.
                      </div>
                      <div className="video-sharing">
                        <a href="#" className="btn btn-block btn-ellipse btn-blue btn-repost btn-repost-vk">Репост</a>
                        <a href="#" className="btn btn-block btn-ellipse btn-blue btn-repost btn-repost-fb">Шеир</a>
                        <a href="#" className="btn btn-block btn-ellipse btn-blue btn-repost btn-repost-tw">Твит</a>
                      </div>
                    </div>
                    <div className="row-fluid comment-box">
                      <a className="block-title mini">Комментарии</a>
                      <div className="send-comment">
                        <div className="comment-input">
                          <div contentEditable="true" className="comment-area" type="text" placeholder="Твой комментарий..." />
                          <button className="sticer-select" />
                        </div>
                        <button className="send" />
                      </div>
                      <ul className="list-unstyled comment-list level-0">
                        <li>
                          <div className="comment comment-01">
                            <div className="autor-avatar">
                              <img src="http://placehold.it/240x240" />
                            </div>
                            <div className="content">
                              <a href="#" className="nickname">Zeuscyberschoolnick</a>
                              <p className="text">
                                Популярный сервис цифровой дистрибуции Steam скоро обзаведётся
                                новым конкурентом. Китайская компания Tencent заявила о намерении запустить свою
                                платформу WeGame на глобальном рынке. Создателям Steam, компании Valve, есть
                                о чём беспокоиться, ведь WeGame - это вовсе не новичок среди игровых сервисов.
                                Это уже успевшая зарекомендовать себя крупная площадка с миллионами активных пользователей.
                                Просто раньше она была доступна лишь жителям Китая.
                              </p>
                              <div className="meta">
                                <a href="#" className="reply">Ответить</a>
                                <span className="comment-date">2 часа назад</span>
                                <div className="rating">
                                  <button className="like">
                                    <span>50</span>
                                  </button>
                                  <button className="dislike">
                                    <span>25</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className="list-unstyled comment-list level-1">
                            <li>
                              <div className="comment comment-01">
                                <div className="autor-avatar">
                                  <img src="http://placehold.it/240x240" />
                                </div>
                                <div className="content">
                                  <a href="#" className="nickname">Ahhhhmed</a>
                                  <a href="#" className="last-nickname">Zeuscyberschoolnick</a>
                                  <p className="text">
                                    Популярный сервис цифровой дистрибуции Steam скоро обзаведётся
                                    новым конкурентом. Китайская компания Tencent заявила о намерении запустить свою
                                    платформу WeGame на глобальном рынке. Создателям Steam, компании Valve, есть
                                    о чём беспокоиться, ведь WeGame - это вовсе не новичок среди игровых сервисов.
                                    Это уже успевшая зарекомендовать себя крупная площадка с миллионами активных пользователей.
                                    Просто раньше она была доступна лишь жителям Китая.
                                  </p>
                                  <div className="meta">
                                    <a href="#" className="reply">Ответить</a>
                                    <span className="comment-date">2 часа назад</span>
                                    <div className="rating">
                                      <button className="like">
                                        <span>50</span>
                                      </button>
                                      <button className="dislike">
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul className="list-unstyled comment-list level-2">
                                <li>
                                  <div className="comment comment-01">
                                    <div className="autor-avatar">
                                      <img src="http://placehold.it/240x240" />
                                    </div>
                                    <div className="content">
                                      <a href="#" className="nickname">Spider-man</a>
                                      <a href="#" className="last-nickname">Ahhhhmed</a>
                                      <p className="text">
                                        Популярный сервис цифровой дистрибуции Steam скоро обзаведётся
                                        новым конкурентом. Китайская компания Tencent заявила о намерении запустить свою
                                        платформу WeGame на глобальном рынке. Создателям Steam, компании Valve, есть
                                        о чём беспокоиться, ведь WeGame - это вовсе не новичок среди игровых сервисов.
                                        Это уже успевшая зарекомендовать себя крупная площадка с миллионами активных пользователей.
                                        Просто раньше она была доступна лишь жителям Китая.
                                      </p>
                                      <div className="meta">
                                        <a href="#" className="reply">Ответить</a>
                                        <span className="comment-date">2 часа назад</span>
                                        <div className="rating">
                                          <button className="like">
                                            <span>50</span>
                                          </button>
                                          <button className="dislike">
                                            <span>25</span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ReactBootstrap.Col lg={12} md={12} sm={12} className="load-more">
                        <ReactBootstrap.Button href="#" bsClass="btn btn-ellipse btn-white btn-load">Загрузить еще</ReactBootstrap.Button>
                      </ReactBootstrap.Col>
                    </div>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col lg={3} md={3} sm={12} xs={12}>
                    <div className="recommended-video">
                      <a className="block-title mini link">Рекомендуем</a>
                      <div className="video">
                        <a href="/video/1" className="video-item">
                          <span className="video-play">Play</span>
                          <div className="video-description">
                            <span className="video-title">Раскидка гранат на карте от Zeus…</span>
                          </div>
                        </a>
                        <a href="/video/1" className="video-item">
                          <span className="video-play">Play</span>
                          <div className="video-description">
                            <span className="video-title">Раскидка гранат на карте от Zeus…</span>
                          </div>
                        </a>
                        <a href="/video/1" className="video-item">
                          <span className="video-play">Play</span>
                          <div className="video-description">
                            <span className="video-title">Раскидка гранат на карте от Zeus…</span>
                          </div>
                        </a>
                        <a href="/video/1" className="video-item">
                          <span className="video-play">Play</span>
                          <div className="video-description">
                            <span className="video-title">Раскидка гранат на карте от Zeus…</span>
                          </div>
                        </a>
                      </div>
                      <ReactBootstrap.Col lg={12} md={12} sm={12} className="load-more">
                        <ReactBootstrap.Button href="#" bsClass="btn btn-ellipse btn-white btn-load">Загрузить еще</ReactBootstrap.Button>
                      </ReactBootstrap.Col>
                    </div>
                  </ReactBootstrap.Col>
                </ReactBootstrap.Row>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>          
          );
        } else {
          return (
            <ReactBootstrap.Row>
              <ReactBootstrap.Col lg={12} md={12} sm={12}>
                <ReactBootstrap.Row bsClass="row-fluid" className="header">
                  <div className="left-nav">
                    <h1 className="main-title">Видео</h1>
                    <a href="#" className="back-button">Вернуться на главную</a>
                  </div>
                  <div className="right-nav">
                    <input className="ellipse-input" type="text" placeholder="Поиск..." />
                  </div>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                  <ReactBootstrap.Col lg={2} md={3} className="auxiliary-menu news-category">
                    <ul className="list-unstyled list-group" role="tablist">
                      <li role="list-group-item" className="active"><a href="#" data-tooltip="Новости">Все видео</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Летсплеи</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Блоги</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Хайтлайты</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Пользовательские ролики</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Смешнявки</a></li>
                    </ul>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col lg={10} md={9} sm={12}>
                    <div className="video video-page">
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте </a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, жил да был Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, жил да был Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, жил да был Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, жил да был Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, жил да был Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="video-cell">
                        <a href="/video/1" className="video-cover">
                          <i />
                        </a>
                        <div className="video-information">
                          <a href="/video/1" className="video-name">Раскидка гранат на карте от Zeus, жил да был Stamina</a>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ReactBootstrap.Row bsClass="row-fluid" className="page-num">
                      <ReactBootstrap.Col lg={12}>
                        <nav aria-label="navigation">
                          <ul className="pagination">
                            <li className="pagination-item"><a className="pagination-item-link active" href="#">1</a></li>
                            <li className="pagination-item"><a className="pagination-item-link" href="#">2</a></li>
                            <li className="pagination-item"><a className="pagination-item-link" href="#">3</a></li>
                            <li className="pagination-item"><a className="pagination-item-link" href="#">4</a></li>
                            <li className="pagination-item dotted">...</li>
                            <li className="pagination-item"><a className="pagination-item-link" href="#">99</a></li>
                          </ul>
                        </nav>
                      </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                  </ReactBootstrap.Col>
                </ReactBootstrap.Row>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>    
          );
        }
    }
}


// Video.propTypes = {
//   user: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired
// }


function mapStateToProps(state) {
    // let profile = state.user
    return {
      me: state.me
    }
}
export default connect(mapStateToProps)(Video)