import React, { Component } from "react";
import ItemService from "./ItemService";

class AddItem extends Component {
  state = {
    value: ""
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItemService.sendData(this.state.value);
    this.props.history.push("/index");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Item:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default AddItem;
