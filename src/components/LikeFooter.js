import React, { Component } from "react";
import { TweenMax, Power3, TweenLite, TimelineLite } from "gsap/TweenMax";

class LikeFooter extends Component {
  listButton = React.createRef();

  onClickButton = (e, selected) => {
    if (this.props.themeIndex !== this.props.themesLength) {
      this.props.handleSelection(selected);
      this.popButton(e.target);
    }
    if (this.props.themeIndex + 1 > 0 && this.props.themeIndex + 1 < 2) {
      this.onAppearButton();
    }
  };

  popButton(button) {
    const tl = new TimelineLite();
    tl.to(button, 0.1, { ease: Power3.easeInOut, scaleX: 1, scaleY: 1 })
      .to(button, 0.1, { ease: Power3.easeInOut, scaleX: 1.2, scaleY: 1.2 })
      .to(button, 0.1, { ease: Power3.easeInOut, scaleX: 1, scaleY: 1 });
  }

  onUndo = e => {
    let undoButton = e.target;
    const tl = new TimelineLite();
    tl.to(undoButton, 0, {
      ease: Power3.easeInOut,
      rotation: 0,
      transformOrigin: "50% 50%"
    }).to(undoButton, 1.5, {
      ease: Power3.easeInOut,
      rotation: 360,
      transformOrigin: "50% 50%"
    });

    if (this.props.themeIndex === 1) {
      this.onDissapearButton();
    }

    this.props.onUndo();
  };

  onAppearButton = () => {
    const tl = new TimelineLite();
    tl.to(this.listButton.current, 0.2, { scaleX: 0, scaleY: 0 })
      .to(this.listButton.current, 0.2, { scaleX: 1.5, scaleY: 1.5 })
      .to(this.listButton.current, 0.2, { scaleX: 1, scaleY: 1 });
  };

  onDissapearButton = () => {
    const tl = new TimelineLite();
    tl.to(this.listButton.current, 0.2, { scaleX: 1, scaleY: 1 })
      .to(this.listButton.current, 0.2, { scaleX: 1.5, scaleY: 1.5 })
      .to(this.listButton.current, 0.2, { scaleX: 0, scaleY: 0 });
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
          className="round-button small undo"
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
