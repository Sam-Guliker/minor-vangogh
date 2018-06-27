import React, { Component } from "react";
import { Power3, TimelineLite } from "gsap/TweenMax";

class LikeFooter extends Component {
  state = {
    popDown: ""
  };

  onClickButton = (e, selected) => {
    if (this.props.themeIndex !== this.props.themesLength) {
      this.props.handleSelection(selected);
      this.popButton(e.target);
    }
  };

  popButton(button) {
    const tl = new TimelineLite();
    tl.to(button, 0.2, {
      ease: Power3.easeInOut,
      scale: 1.2,
      repeat: 1,
      yoyo: true
    });
  }

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={e => this.onClickButton(e, false)}
          className="round-button dislike"
        />
        <button
          onClick={e => this.onClickButton(e, true)}
          className="round-button like"
        />
      </div>
    );
  }
}

export default LikeFooter;
