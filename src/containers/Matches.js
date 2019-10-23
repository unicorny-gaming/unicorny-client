import MatchList from 'components/Matches'
import Mixes from 'components/common/Mixes'

export default class MatchesPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className="p-t-40">
        <div className="container">
          <Mixes />
          <hr/>
          <MatchList />
        </div>
      </section>
    )
  }
}