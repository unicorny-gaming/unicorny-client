import { connect } from 'react-redux'
// import * as ReactBootstrap from 'react-bootstrap'
import Card from 'components/common/Profile/Card'
// import * as ButtonTypes from 'constants/buttonTypes'
// import { LinkContainer } from "react-router-bootstrap"


class ProfileCard extends React.Component {
    constructor(props) {
      super(props)
    }
    
    render() {
      const { user } = this.props
      
      return  (
        <div>
          <Card userId={user.id} />
          <section className="p-y-30">

          </section>
        </div>
      )

      // <ReactBootstrap.Row className="profile-header">
      //   <ReactBootstrap.Col lg={12} md={12} sm={12}>
      //     <div className="profile-top-section profile-cover">
      //       <div className="profile-nav-section">
      //         {/* <a href="#" className="back-button">Вернуться к сетке</a> */}
      //         {/* {<a href="#" className="edit-profile-cover">Загрузить обложку</a>} */}
      //       </div>
      //       <div className="profile-info-section">
      //         <a className="profile-photo">
      //           <img src={user.avatar} alt={user.username} />
      //         </a>
      //         <div className="profile-current-info">
      //           <i className="profile-country" />
      //           <h5 className="profile-name">{user.username}</h5>
      //           <h6 className="profile-online">Заходил сегодня в 00:00</h6>
      //         </div>
      //         <div className="profile-social-block">
      //           <a href="#" className="profile-social-link profile-vk" />
      //           <a href="#" className="profile-social-link profile-fb" />
      //           <a href="#" className="profile-social-link profile-tw" />
      //         </div>
      //       </div>
      //     </div>
      //     <div className="profile-menu-section">
      //       <div className="profile-info-table striped-table">
      //         <div className="table-row">
      //           <span className="profile-name">Имя</span>
      //           <span className="profile-name name">{user.realname}</span>
      //         </div>
      //         <div className="table-row">
      //           <span className="profile-age">Возраст</span>
      //           <span className="profile-age age">{user.birthday}</span>
      //         </div>
      //         <div className="table-row">
      //           <span className="profile-team">Команда</span>
      //           <span className="profile-team team"></span>
      //         </div>
      //       </div>
      //       <div className="profile-content-block">
      //         <div className="profile-content-info">
      //           <table className="profile-content-table">
      //             <tbody>
      //               <tr>
      //                 <td>
      //                   <LinkContainer to={FriendsLink}>
      //                     <a href={FriendsLink} className="profile-content-table-link">
      //                       <div className="profile-content-table-num">{friendsCount}</div>
      //                       <div className="profile-content-table-description">Друзей</div>
      //                     </a>
      //                   </LinkContainer>
      //                 </td>
      //                 <td>
      //                   <a href="#" className="profile-content-table-link">
      //                     <div className="profile-content-table-num">0</div>
      //                     <div className="profile-content-table-description">Подписчиков</div>
      //                   </a>
      //                 </td>
      //                 <td>
      //                   <a href="#" className="profile-content-table-link">
      //                     <div className="profile-content-table-num">0</div>
      //                     <div className="profile-content-table-description">Награды</div>
      //                   </a>
      //                 </td>
      //                 <td>
      //                   <a href="#" className="profile-content-table-link">
      //                     <div className="profile-content-table-num">0</div>
      //                     <div className="profile-content-table-description">Похвалы</div>
      //                   </a>
      //                 </td>
      //               </tr>
      //             </tbody>
      //           </table>
      //         </div>
      //         <div className="profile-buttons">
      //           <a href="#" className="btn btn-block btn-ellipse btn-orange btn-profile message">Сообщение</a>
      //           <ButtonFriend userId={user.id} buttonType={ButtonTypes.ADD_FRIEND_BUTTON} buttonclassName="btn-block btn-ellipse btn-blue btn-profile add-to-friends" />
      //         </div>
      //       </div>
      //     </div>
      //   </ReactBootstrap.Col>
      // </ReactBootstrap.Row>
    }
}

ProfileCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  friends: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    friends: state.collections.friends
  }
}

export default connect(mapStateToProps)(ProfileCard)