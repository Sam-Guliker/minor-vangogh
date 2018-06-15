import React, { Component } from "react";

class LikeFooter extends Component {
  onClickButton = (name, selected) => {
    this.props.handleSelection(name, selected);
    this.props.popButton();
  };

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={() => this.onClickButton(this.props.name, false)}
          className="round-button dislike"
        />
        <button className="round-button small undo" />
        <button
          onClick={() => this.onClickButton(this.props.name, true)}
          className="round-button like"
        />
      </div>
    );
  }
}

export default LikeFooter;
