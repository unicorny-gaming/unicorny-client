import { LinkContainer } from "react-router-bootstrap"

export default class MatchLine extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { match } = this.props
    let matchLink = '/match/'  + match.id

    return (
      <div className="forum-group">
        <div className="forum-row">
          <div className="forum-icon">
            <span className="badge badge-success"><i className="fa fa-play"></i></span>
            <i className="fa fa-gamepad"></i>
          </div>
          <div className="forum-title">
            <h4>
              <LinkContainer to={matchLink}>
                <a href={matchLink}>Match #{match.id}</a>
              </LinkContainer>
            </h4>
            <p>by Venom on June 2, 2017</p>
          </div>
          <div className="forum-thread">57</div>
          <div className="forum-thread">405</div>
          <div className="forum-latest">
            <a href="profile.html"><img src="img/user/user-2.jpg" alt="" /></a>
              <div>
                <h5><a href="forum-post.html">Elizabeth</a></h5>
                <span>June 23, 2017</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}