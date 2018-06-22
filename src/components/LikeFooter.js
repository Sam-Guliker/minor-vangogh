import React, { Component } from "react";
import { TweenMax, Power3, TweenLite, TimelineLite } from "gsap/TweenMax";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class LikeFooter extends Component {
  listButton = React.createRef();

  onClickButton = (e, selected) => {
    if (this.props.themeIndex !== this.props.themesLength) {
      this.props.handleSelection(selected);
      this.popButton(e.target);
    }
    // if (this.props.themeIndex + 1 > 0 && this.props.themeIndex + 1 < 2) {
    //   this.onAppearButton();
    // }
  };

  popButton(button) {
    const tl = new TimelineLite();
    tl.to(button, 0.2, {
      ease: Power3.easeInOut,
      scale: 1.4,
      repeat: 1,
      yoyo: true
    });
  }

  onUndo = e => {
    let undoButton = e.target;
    const tl = new TimelineLite();
    tl.to(undoButton, 0.6, {
      ease: Power3.easeInOut,
      rotation: "+=360",
      transformOrigin: "50% 50%"
    });

    // if (this.props.themeIndex === 1) {
    //   this.onDissapearButton();
    // }

    this.props.onUndo();
  };

  // onAppearButton = () => {
  //   const tl = new TimelineLite();
  //   tl.to(this.listButton.current, 0.4, { scale: 0 })
  //     .to(this.listButton.current, 0.2, { scale: 1.5 })
  //     .to(this.listButton.current, 0.2, { scale: 1 });
  // };

  // onDissapearButton = () => {
  //   const tl = new TimelineLite();
  //   tl.to(this.listButton.current, 0.2, { scale: 1 })
  //     .to(this.listButton.current, 0.2, { scale: 1.5 })
  //     .to(this.listButton.current, 0.2, { scale: 0 });
  // };

  render() {
    return (
      <div className="like-footer">
        <button
          onClick={e => this.onClickButton(e, false)}
          className="round-button dislike"
        />
        {this.props.themeIndex > 0 ? (
          <TransitionGroup component={null}>
            <CSSTransition key={1} timeout={1000} classNames="slide-up" appear>
              <button
                ref={this.listButton}
                onClick={e => this.onUndo(e)}
                className="round-button small undo"
              />
            </CSSTransition>
          </TransitionGroup>
        ) : (
          undefined
        )}

        <button
          onClick={e => this.onClickButton(e, true)}
          className="round-button like"
        />
      </div>
    );
  }
}

export default LikeFooter;
