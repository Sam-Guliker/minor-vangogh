import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className={this.props.active ? "hidden" : "overlay"}>
        <article>
          <p className="introduction">
            <img src={require("../images/list.svg")} alt="" />
            This is your overview icon, you can simple add or remove items here
            if you want to make a change in your tour
          </p>
          <button onClick={this.props.onClosedModal}>I understand</button>
        </article>
      </div>
    );
  }
}

export default Modal;
