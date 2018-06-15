import React, { Component } from "react";

class LikeFooter extends Component {
  onClickButton = selected => {
    this.props.handleSelection(selected);
    // this.props.popButton();
  };

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={() => this.onClickButton(false)}
          className="round-button dislike"
        />
        <button className="round-button small undo" />
        <button
          onClick={() => this.onClickButton(true)}
          className="round-button like"
        />
      </div>
    );
  }
}

export default LikeFooter;
