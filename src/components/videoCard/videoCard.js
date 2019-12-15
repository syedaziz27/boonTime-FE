import React, { Component } from "react";
import cream from "../../images/cream.jpeg";
import user from "../../images/person.png";
import "./videoCard.css";

export default class VideoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="card-container">
          <div className="vid-thumbnail-container">
            <img className="thumbnail" src={cream} />
          </div>
          <div>Video Title Goes Here</div>
          <div className="uploader-info">
            <img className="user-icon" src={user}></img>
            <div>
              <div>Username</div>
              <span>View Count</span>
              <span style={{ float: "right" }}>upload date</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
