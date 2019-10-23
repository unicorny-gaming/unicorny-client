export default class MixesTeam extends React.Component {
  render() {
    return (
      <div className="tab-pane fade" id="command" disabled="true">
          <div className="mixes-team">
              <div className="mixes-gamer mixes-gamer-added">
                  <img src="http://placehold.it/40x40" />
              </div>
              <div className="mixes-gamer mixes-gamer-added">
                  <img src="http://placehold.it/40x40" />
              </div>
              <div className="mixes-gamer">
                  <a className="mixes__add-player" href="#" data-tooltip="Добавить друга в пати"></a>
              </div>
              <div className="mixes-gamer">
                  <a className="mixes__add-player" href="#" data-tooltip="Добавить друга в пати"></a>
              </div>
              <div className="mixes-gamer">
                  <a className="mixes__add-player" href="#" data-tooltip="Добавить друга в пати"></a>
              </div>
          </div>
      </div>
    )
  }
}
