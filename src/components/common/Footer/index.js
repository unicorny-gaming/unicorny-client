/**
 * Created by IdbeHoldL on 20.05.2017.
 */

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

// Menu component
export default class Footer extends React.Component {
    // render
    render() {
        return (
          <footer id="footer">
            <div className="container">
              <ReactBootstrap.Row>
                <ReactBootstrap.Col sm={12} md={5}>
                  <h4 className="footer-title">About DSZone.ru</h4>
                  <p>Best project for everyone.</p>
                  <p>Connect and enjoy!</p>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col sm={12} md={3}>
                  <h4 className="footer-title">Platform</h4>
                  <div className="row">
                    <div className="col">
                      <ul>
                        <li><a href="#">Playstation 4</a></li>
                        <li><a href="#">Xbox One</a></li>
                        <li><a href="#">PC</a></li>
                        <li><a href="#">Steam</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        <li><a href="games.html">Games</a></li>
                        <li><a href="reviews.html">Reviews</a></li>
                        <li><a href="videos.html">Videos</a></li>
                        <li><a href="forums.html">Forums</a></li>
                      </ul>
                    </div>
                  </div>
                </ReactBootstrap.Col>
                <ReactBootstrap.Col sm={12} md={4}>
                  <h4 className="footer-title">Subscribe</h4>
                  <p>Subscribe to our newsletter and get notification when new games are available.</p>
                  <div className="input-group m-t-25">
                    <input type="text" className="form-control" placeholder="Email" />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">Subscribe</button>
                      </span>
                  </div>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
                <div className="footer-bottom">
                  <div className="footer-social">
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="" data-original-title="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"  data-toggle="tooltip" title="" data-original-title="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://steamcommunity.com/id/" target="_blank" rel="noopener noreferrer"  data-toggle="tooltip" title="" data-original-title="steam"><i className="fa fa-steam"></i></a>
                    <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="" data-original-title="twitch"><i className="fa fa-twitch"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="" data-original-title="youtube"><i className="fa fa-youtube"></i></a>
                  </div>
                  <p>Copyright © 2018 <a href="http://dszone.ru" rel="noopener noreferrer"  target="_blank">DSZone.ru</a>. All rights reserved.</p>
                </div>
              </div>
          </footer>
        );
    }
}
