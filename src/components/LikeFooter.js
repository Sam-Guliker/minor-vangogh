import React, { Component } from "react";
import { TweenMax, Power3, TweenLite, TimelineLite } from "gsap/TweenMax";
import { Link } from "react-router-dom";

class LikeFooter extends Component {
  state = {
    popDown: ""
  };

  listButton = React.createRef();

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

  onUndo = e => {
    let undoButton = e.target;
    // const tl = new TimelineLite();
    // tl.to(undoButton, 0.6, {
    //   ease: Power3.easeInOut,
    //   rotation: "+=360",
    //   transformOrigin: "50% 50%"
    // });

    if (this.props.themeIndex === 1) {
      this.setState({
        popDown: "popDown"
      });
    }

    this.props.onUndo();
  };

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={e => this.onClickButton(e, false)}
          className="round-button dislike"
        />
        <button
          ref={this.listButton}
          onClick={e => this.onUndo(e)}
          className={
            this.props.themeIndex > 0
              ? "round-button small undo visible " + this.state.popDown
              : "round-button small undo " + this.state.popDown
          }
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
