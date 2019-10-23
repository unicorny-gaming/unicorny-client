import { LinkContainer } from "react-router-bootstrap"

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { user, friends } = this.props

    var ProfileLink = `/profile/${user.id}`
    var friendsCount = friends && friends[user.id] ? Object.keys(friends[user.id]).length : 0
    var FriendsLink = `/profile/${user.id}/friends`

    return (
      <div id="sticky-wrapper" className="sticky-wrapper profile-sticky-wrapper">
      <section className="toolbar toolbar-profile" data-fixed="true">
        <div className="container">
          <div className="profile-avatar">
            <img src={user.avatar} alt="" />
            <div className="sticky">
              <img src={user.avatar} alt="" />
              <div className="profile-info">
                <h5>{user.name}</h5>
                {/* <span>@nathan</span> */}
              </div>
            </div>
          </div>
          {/* <div className="dropdown float-right hidden-md-down">
                      <a className="btn btn-secondary btn-icon btn-sm m-l-25 float-right" href="#" data-toggle="dropdown" role="button"><i className="fa fa-cog"></i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item active" href="#">Setting</a>
                        <a className="dropdown-item" href="#">Mail</a>
                        <a className="dropdown-item" href="#">Report</a>
                        <a className="dropdown-item" href="#">Block</a>
                      </div>
                    </div> */}
          <ul className="toolbar-nav hidden-md-down">
            {/* <li className="active"><a href="#">Timeline</a></li> */}
              <li><LinkContainer to={ProfileLink}>
                <a href={ProfileLink}>Профиль</a>
            </LinkContainer></li>
            {/* <li><a href="#">Games (38)</a></li> */}
            <li><LinkContainer to={FriendsLink}>
                <a href={FriendsLink} className="profile-content-table-link">
                  Друзей ({friendsCount}) </a>
            </LinkContainer></li>
            {/* <li><a href="#">Images (23)</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Groups</a></li>
                        <li><a href="#">Forums</a></li> */}
          </ul>
        </div>
      </section>
    </div>
    )
  }
}