// import { connect } from 'react-redux'
// import * as ReactBootstrap from 'react-bootstrap'
// import * as ActionTypes from 'constants/actionTypes'
import ProfileCard from './ProfileCard'
import ProfileAchivement from './ProfileAchivement'
import ProfileStatistic from './ProfileStatistic'
import ProfileMatches from './ProfileMatches'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      const { user } = this.props

      if (!user) {
        return <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
      } else {
        return (
          <div>
            <ProfileCard user={user} />
            
            <ProfileStatistic user={user}/>    
            <ProfileMatches user={user}/>
            <ProfileAchivement user={user}/>  
          </div>
        )
      }
    }
}