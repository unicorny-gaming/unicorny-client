import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap';
// import * as ActionTypes from 'constants/actionTypes'

// News page component
class News extends React.Component {
    constructor(props) {
        super(props)
    }

    // render
    render() {
        const id = this.props.params.id
        
        if (id) {
          return (
            <ReactBootstrap.Row>
              <ReactBootstrap.Col lg={7} md={9} sm={12} className="main-part">
                <ReactBootstrap.Row bsClass="row-fluid" className="news-item">
                  <div className="news-item__info">
                    <span className="news-item__date">31 октября, 13:30</span>
                    <a href="#" className="news-item__tag">Популярное</a>
                    <div className="view_num">
                      <i className="view_num-icon" />
                      <span className="view_num-number">429</span>
                    </div>
                  </div>
                  <h1 className="news-item__title">
                    Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации
                  </h1>
                  <div className="news-item__img">
                    <img src="/themes/zcs/img/news-item.jpg" alt />
                  </div>
                  <p className="news-item__text phantom">
                    «Брайан, рад познакомиться с вами. Идея звучит интересно, но это не то, чем мы занимаемся. Это не та сфера, на которой мы фокусируемся. Удачи»
                  </p>
                  <p className="news-item__text">
                    Финальное противостояние было достойным настоящего гранд-финала. За период основных раундов командам не удалось выявить победителя, поэтому игра перенеслась на серию дополнительных раундов. Лишь на вторых овертаймах Insine Gaming сумели взять верх над своими оппонентами. Со счетом 19:22, <a href="#">Insine Gaming</a> стали победителями тестового турнира ZeusCyberCup от 19 марта.
                  </p>
                  <p className="news-item__text">
                    Андрей «Timon» Гурьев вышел из своей группы со второго места: в трёх матчах выиграл, три встречи провёл вничью, в одной уступил. В плей-офф Гурьев дошёл до полуфинала. Он обыграл Субару «Mikey» Сагано и Милоша «Milosz93» Богдановски.
                  </p>
                  <ul className="list-unstyled list-group news-item__list">
                    <li><p>Очевидно, что он ничего не знает о текущих метриках Snap Очевидно, что он ничего не знает о текущих метриках Snap</p></li>
                    <li><p>В своём иске он обвиняет компанию в завышении данных об аудитории</p></li>
                    <li><p>Представители Snap считают обвинения Помплиано сфабрикованными</p></li>
                  </ul>
                  <h2 className="news-item__caption">
                    Заголовок второго уровня
                  </h2>
                  <p className="news-item__text bold">
                    Иногда нужно писать все толстыми буквами, чтобы выделить какую-нибудь гиперважную мысль. Кстати, предыдущий заголовок всегда отбивается немного большим, чем обычно абзацем сверху.
                  </p>
                  <div className="news-item__table">
                    <div className="news-table-nav">
                      <div className="title">
                        Время
                      </div>
                      <div className="title">
                        Команды
                      </div>
                      <div className="title">
                        Счет
                      </div>
                      <div className="title">
                        Соперник
                      </div>
                    </div>
                    <div className="news-table-body">
                      <div className="table-row">
                        <div className="item">
                          10:00
                        </div>
                        <div className="item">
                          Natus Vincere
                        </div>
                        <div className="item">
                          2:0
                        </div>
                        <div className="item">
                          fnatic
                        </div>
                      </div>
                      <div className="table-row">
                        <div className="item">
                          10:00
                        </div>
                        <div className="item">
                          Natus Vincere
                        </div>
                        <div className="item">
                          2:0
                        </div>
                        <div className="item">
                          fnatic
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="news-item__text italic">
                    Не очень важные мысли можно выделять курсивом, но не злоупотребляйте, он плохо читается, рекомендую использовать в абзацах состоящих из одной-двух строк.
                  </p>
                  <div className="news-item__quote">
                    <p className="news-item__text">
                      Или выносить ее в отдельное окошко. Чаще всего в нем будет дублироваться основная мысль заложенная в предыдущем абзаце, или цитатка с упоминанием авторства, как в этом примере.
                    </p>
                    <p className="news-item__text bold">
                      Анастасия Георгиевна, основатель Virtus Pro
                    </p>
                  </div>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row bsClass="row-fluid" className="recommended-news">
                  <a className="block-title mini link">Рекомендуем</a>
                  <div className="recommended-news__block">
                    <a href="#" className="recommended-link">
                      <p className="recommended-news__title">Какая-то команда одерживает победу на Dreamhack</p>
                      <div className="view_num">
                        <i className="view_num-icon" />
                        <span className="view_num-number">429</span>
                      </div>
                    </a>
                    <a href="#" className="recommended-link">
                      <p className="recommended-news__title">Какая-то команда одерживает победу на Dreamhack</p>
                      <div className="view_num">
                        <i className="view_num-icon" />
                        <span className="view_num-number">429</span>
                      </div>
                    </a>
                    <a href="#" className="recommended-link">
                      <p className="recommended-news__title">Какая-то команда одерживает победу на Dreamhack</p>
                      <div className="view_num">
                        <i className="view_num-icon" />
                        <span className="view_num-number">429</span>
                      </div>
                    </a>
                  </div>
                </ReactBootstrap.Row>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col lg={7} md={9} sm={12} className="main-part">
                <ReactBootstrap.Row bsClass="row-fluid" className="comment-box">
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
                </ReactBootstrap.Row>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          );
        } else {
          return (
            <ReactBootstrap.Row>
              <ReactBootstrap.Col lg={9} md={12} sm={12}>
                <ReactBootstrap.Row bsClass="row-fluid" className="header">
                  <div className="left-nav">
                    <h1 className="main-title">Новости</h1>
                    <a href="#" className="back-button">Вернуться в матч</a>
                  </div>
                  <div className="right-nav">
                    <a href="#" className="auxiliary-btn filter">Фильтр</a>
                    <input className="ellipse-input" type="text" placeholder="Поиск..." />
                  </div>
                </ReactBootstrap.Row>
                <ReactBootstrap.Row>
                  <ReactBootstrap.Col lg={3} md={3} className="auxiliary-menu news-category">
                    <ul className="list-unstyled list-group" role="tablist">
                      <li role="list-group-item" className="active"><a href="#" data-tooltip="Новости">Все новости</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Слухи cs:go</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Легенды в лицах</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Итоги года</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Анонсы</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Слухи</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Интерфью</a></li>
                      <li role="list-group-item"><a href="#" data-tooltip="Новости">Интересное</a></li>
                    </ul>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col lg={9} md={9} sm={12}>
                    <div className="news">
                      <div className="news__block">
                        <div className="news__date">Сегодня</div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers пиканской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">6 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="news__block">
                        <div className="news__date">Вчера</div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers пиканской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">6 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="news__block">
                        <div className="news__date">Сегодня</div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers пиканской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">6 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                      <div className="news__block">
                        <div className="news__date">Сегодня</div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers пиканской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации Kaipi, FlipSid3 и PowerRangers прошли в топ-16 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                        <div className="news__item">
                          <div className="news__time">10:30</div>
                          <div className="news__title">
                            <a href="/news/1" className="news__link">6 американской квалификации</a>
                          </div>
                          <div className="view_num">
                            <i className="view_num-icon" />
                            <span className="view_num-number">429</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ReactBootstrap.Col lg={12} md={12} sm={12} className="load-more">
                      <ReactBootstrap.Col lg={12} md={12} sm={12} className="load-more">
                        <ReactBootstrap.Button href="#" bsClass="btn btn-ellipse btn-white btn-load">Загрузить еще</ReactBootstrap.Button>
                      </ReactBootstrap.Col>
                    </ReactBootstrap.Col>
                  </ReactBootstrap.Col>
                </ReactBootstrap.Row>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>        
          );
        }
    }
}


// News.propTypes = {
//   user: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired
// }


function mapStateToProps(state) {
    // let profile = state.user
    return {
      me: state.me.identity
    }
}
export default connect(mapStateToProps)(News)