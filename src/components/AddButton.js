import React, { Component } from "react";

class AddButton extends Component {
  onClickButton = name => {
    this.props.handleSelection(name);
    this.props.popButton();
  };

  render() {
    return (
      <button
        onClick={() => this.onClickButton(this.props.name)}
        className="button-small plus"
      >
        Add
      </button>
    );
  }
}

export default AddButton;
