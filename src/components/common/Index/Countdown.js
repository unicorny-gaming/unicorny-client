export default class Countdown extends React.Component {
  render() {
    return (
      <section className="bg-image bg-image-sm coming-soon-background">
        <div className="overlay"></div>
        <div className="coming-soon p-y-80">
          <div>
            <h2>Coming Soon!</h2>
            <div className="countdown">
              <div id="clock"><div><span>46</span> days </div> <div><span>10</span> hours </div> <div><span>58</span> min </div> <div><span>28</span> sec</div> </div>
            </div>
            <p>Our website is under construction, We&apos;ll be here soon, with our new site. Subscribe to be notified.</p>
            <div className="m-t-30">
              {/* <a href="games.html" className="btn btn-primary btn-shadow btn-rounded btn-effect btn-lg">Subscribe</a>
              <a href="games.html" className="btn btn-outline-default btn-rounded btn-lg m-l-10">Contact Us</a> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}