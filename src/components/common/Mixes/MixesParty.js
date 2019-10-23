export default class MixesParty extends React.Component {
  render() {
    return (
      <div className="tab-pane fade in active" id="normal">
          <div className="mixes-team">
              <div className="mixes-gamer mixes-gamer-added mixes-gamer-added-leader">
                  <img src="http://placehold.it/40x40" />
              </div>
              <div className="mixes-gamer mixes-gamer-added customized">
                  <img src="http://placehold.it/40x40" />
                  <button className="btn dropdown-toggle friend-menu__button" type="button" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu data-table mixes-pleyer-options">
                      <li><a className="player-options" href="#">Сделать лидером</a></li>
                      <li><a className="player-options" href="#">Удалить из пати</a></li>
                  </ul>
              </div>
              <div className="mixes-gamer mixes-gamer-added customized">
                  <img src="http://placehold.it/40x40" />
                  <button className="btn dropdown-toggle friend-menu__button" type="button" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu data-table mixes-pleyer-options">
                      <li><a className="player-options" href="#">Сделать лидером</a></li>
                      <li><a className="player-options" href="#">Удалить из пати</a></li>
                  </ul>
              </div>
              <div className="mixes-gamer add-gamer">
                  <button className="mixes__add-player" type="button" data-toggle="dropdown" data-tooltip="Добавить друга в пати"></button>
                  <div className="dropdown-menu" role="menu">
                      <div className="mixes-add-selector">
                          <div className="selector-nav">
                              <form>
                                  <input className="ellipse-input" required="" type="text" placeholder="Поиск..." />
                                  <button className="close-icon" type="reset"></button>
                              </form>

                          </div>
                          <div className="sample-player">
                              <ul className="list-unstyled">
                                  <li>
                                      <a className="plater-select">
                                          <img src="http://placehold.it/40x40" />
                                          <span className="nickname">Ruslan</span>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="plater-select">
                                          <img src="http://placehold.it/40x40" />
                                          <span className="nickname">Ruslan</span>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="plater-select">
                                          <img src="http://placehold.it/40x40" />
                                          <span className="nickname">Ruslan</span>
                                      </a>
                                  </li>
                                  <li>
                                      <a className="plater-select">
                                          <img src="http://placehold.it/40x40" />
                                          <span className="nickname">Ruslan</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="mixes-gamer">
                  <a className="mixes__add-player" href="#" data-tooltip="Добавить друга в пати"></a>
              </div>
          </div>
      </div>
    )
  }
}
