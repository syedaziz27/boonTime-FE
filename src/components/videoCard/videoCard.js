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
        <div className="card_container container">
          <img className="thumbnail" src={cream} />{" "}
          <div className="video_title"> Video Title Goes Here </div>{" "}
          <div className="row">
            <div className="col-3">
              <img className="user_thumbnail" src={user} />{" "}
            </div>{" "}
            <div className="col">
              <div className="username"> username </div>{" "}
              <span
                className="views"
                style={{
                  paddingRight: "30px"
                }}
              >
                views{" "}
              </span>{" "}
              <span className="date_posted"> date posted </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}
