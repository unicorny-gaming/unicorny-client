import * as ReactBootstrap from 'react-bootstrap';
import { Timeline } from 'react-twitter-widgets'

export default class Twitter extends React.Component {
  render() {
    return (
      <ReactBootstrap.Row bsClass="row-fluid" className="twitter">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ZeusCS_GO'
          }}
          options={{
            username: 'ZeusCS_GO',
            height: '400'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </ReactBootstrap.Row>
    )
  }
}