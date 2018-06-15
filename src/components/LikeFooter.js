import React, { Component } from "react";

class LikeFooter extends Component {
  state = {};
  render() {
    return (
      <div className="like-footer">
        <button className="round-button dislike" />
        <button className="round-button small undo" />
        <button className="round-button like" />
      </div>
    );
  }
}

export default LikeFooter;
