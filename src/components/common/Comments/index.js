import { connect } from 'react-redux'
import * as ReactBootstrap from 'react-bootstrap'
import * as ActionTypes from 'constants/actionTypes'
import CommentForm from './CommentForm'
import Comment from './Comment'

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    const { dispatch } = this.props
    dispatch({ type: ActionTypes.COMMENTS_LIST_REQUEST, payload: { modelName: this.props.modelName, id: this.props.modelId } })
  }

  renderComments(comments) {
    return comments.map((item) => {
      return (
        <li key={item.id}><Comment comment={item} /></li>
      )
    })
  }


  render() {
    let { identity } = this.props.me
    let { comments, modelName, modelId } = this.props
    let currentComments = comments[modelName + '/' + modelId]

    return (
      <ReactBootstrap.Row bsClass="row-fluid" className="comment-box">
        <a className="block-title mini">Комментарии</a>
        {identity && 
          <CommentForm identity={identity} modelName={ this.props.modelName } modelId = { this.props.modelId } />
        }
        {currentComments &&
        <ul className="list-unstyled comment-list level-0">
          {this.renderComments(currentComments)}
        </ul>
        }
      </ReactBootstrap.Row>
    )
  }
}

Comments.propTypes = {
  me: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
      me : state.me,
      comments : state.collections.comments
    }
}
export default connect(mapStateToProps)(Comments)