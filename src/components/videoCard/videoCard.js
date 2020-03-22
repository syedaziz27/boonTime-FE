import React, { Component } from "react";
import cream from "../../images/cream.jpeg";
import user from "../../images/person.png";
import "./videoCard.css";


export default class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="card-container">
          <div className="vid-thumbnail-container">
            <video width="320" height='250' controls>
              Your browser does not support HTML5 video.
              </video>
          </div>

          <div className='user-video-bio'>
            <p className='video-title'>How to Apply Mo’s new Waterproof mascara in ~~ my new video </p>
            <div className="uploader-info">
              <img className="user-icon" src={user} alt='user' />
              <div className='user-info'>
                <span className='user-name-container'>
                  <p className='user-name'>MissBeautyQueen23</p>
                </span>
                <span className='views-time'>
                  <p className='views-time'>117 views</p>
                  <p className='views-time'>2 days ago</p>
                </span>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}
