import React, { Component } from "react";

class LikeFooter extends Component {
  state = {
    disabled: false
  };
  onClickButton = selected => {
    this.props.handleSelection(selected);
    let disabled = false;
    if (this.props.themeIndex === this.props.themesLength - 1) {
      disabled = true;
    }

    this.setState({
      disabled
    });
  };

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={() => !this.state.disabled && this.onClickButton(false)}
          className="round-button dislike"
        />
        <button className="round-button small undo" />
        <button
          onClick={() => !this.state.disabled && this.onClickButton(true)}
          className="round-button like"
        />
      </div>
    );
  }
}

export default LikeFooter;
