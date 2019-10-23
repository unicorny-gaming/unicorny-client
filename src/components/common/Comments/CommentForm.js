import { connect } from 'react-redux'
import * as ActionTypes from 'constants/actionTypes'
import Keypress from "react-keypress"

class CommentForm extends React.Component {
  constructor(props) {
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.sendComment = this.sendComment.bind(this);
  }

  sendComment() {
    if (this.textInput.textContent) {
      const { dispatch } = this.props
      dispatch({
        type: ActionTypes.COMMENTS_ADD_REQUEST,
        payload: {
          modelName: this.props.modelName,
          modelId: this.props.modelId,
          content: this.textInput.textContent
        }
      })
      this.textInput.textContent = ""
    }
  }

  render() {
    return(
      <div className="send-comment">
        <div className="comment-input">
          <div contentEditable="true" className="comment-area" type="text" placeholder="Твой комментарий..." 
            ref={(input) => { this.textInput = input; }} onKeyPress={Keypress("enter", this.sendComment)} />
          {/*<button className="sticer-select" />*/}
        </div>
        <button className="send" onClick={this.sendComment} />
      </div>
    )
  }
}

CommentForm.propTypes = {
  identity: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps() {
  return {
  }
}
export default connect(mapStateToProps)(CommentForm)