import React, { Component } from "react";

class LikeFooter extends Component {
  onClickButton = selected => {
    if (this.props.themeIndex !== this.props.themesLength) {
      this.props.handleSelection(selected);
    }
  };

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={() => this.onClickButton(false)}
          className="round-button dislike"
        />
        {this.props.themeIndex > 0 ? (
          <button
            onClick={this.props.onUndo}
            className="round-button small undo"
          />
        ) : (
          undefined
        )}
        <button
          onClick={() => this.onClickButton(true)}
          className="round-button like"
        />
      </div>
    );
  }
}

export default LikeFooter;
