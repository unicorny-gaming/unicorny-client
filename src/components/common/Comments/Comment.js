// import * as ReactBootstrap from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HumanTimeDiff from 'utils/HumanTimeDiff'

class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { id, content, steamUser, created_at }  = this.props.comment

    return(
      <div className={"comment comment-" + id}>
        <div className="autor-avatar">
          <LinkContainer to={"/profile/" + steamUser.id}>
            <a href="" className="nickname"><img src={steamUser.avatar} /></a>
          </LinkContainer>
        </div>
        <div className="content">
          <LinkContainer to={"/profile/" + steamUser.id}>
            <a href="" className="nickname">{steamUser.username}</a>
          </LinkContainer>
          <p className="text">{content}</p>
          <div className="meta">
            {/*<a href="#" className="reply">Ответить</a>*/}
            <span className="comment-date">{HumanTimeDiff(created_at)} назад</span>
            {/*<div className="rating">
              <button className="like">
                <span>50</span>
              </button>
              <button className="dislike">
                <span>25</span>
              </button>
            </div>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Comment