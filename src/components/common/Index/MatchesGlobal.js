import * as ReactBootstrap from 'react-bootstrap';

export default class MatchesGlobal extends React.Component {
  render() {
    return (
      <ReactBootstrap.Row bsClass="row-fluid">
        <div className="match-header">
          <a href="#" className="match-title">Матчи</a>
          <ul className="nav nav-tabs">
            <li className="active"><a data-toggle="tab" href="#actual">Актуальные</a></li>
            <li className><a data-toggle="tab" href="#previously">Прошедшие</a></li>
          </ul>
        </div>
        <div className="tab-content match-block">
          <div id="actual" className="tab-pane fade in active actual">
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincereNatus vincereNatus vincere</span>
                  <span className="match-number match-number--down">103</span>
                </div>
                <div className="match-score match-score--win">5</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                  <span className="match-number match-number--up">243</span>
                </div>
                <div className="match-score">2</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score">3</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score match-score--win">4</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score">3</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score match-score--win">4</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                  <span className="match-number match-number--down">103</span>
                </div>
                <div className="match-score match-score--win">5</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincerevincerevincerevincere</span>
                  <span className="match-number match-number--up">243</span>
                </div>
                <div className="match-score">2</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score">3</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score match-score--win">4</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                  <span className="match-number match-number--down">103</span>
                </div>
                <div className="match-score match-score--win">5</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                  <span className="match-number match-number--up">243</span>
                </div>
                <div className="match-score">2</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score">3</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score match-score--win">4</div>
              </div>
            </div>
          </div>
          <div id="previously" className="tab-pane fade previously">
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincereNatus vincereNatus vincere</span>
                  <span className="match-number match-number--down">103</span>
                </div>
                <div className="match-score match-score--win">5</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                  <span className="match-number match-number--up">243</span>
                </div>
                <div className="match-score">2</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score">3</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score match-score--win">4</div>
              </div>
            </div>
            <div className="match-item">
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score">3</div>
              </div>
              <div className="match-rival">
                <div className="match-photo">
                  <img src="http://placehold.it/40x40" alt />
                </div>
                <div className="match-name">
                  <span>Natus vincere</span>
                </div>
                <div className="match-score match-score--win">4</div>
              </div>
            </div>
          </div>
        </div>
      </ReactBootstrap.Row> 
    )
  }
}