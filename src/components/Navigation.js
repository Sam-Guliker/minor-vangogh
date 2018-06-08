import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";

class Navigation extends Component {
  handleChange = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="header-pos">
        <button className="icons" onClick={this.handleChange}>
          <img className="back" src={require("../images/back.svg")} alt="" />
        </button>
        <h1 className="headline">{this.props.name}</h1>
        <Link className="icons" to={`/Overview`}>
          <img src={require("../images/list.svg")} alt="" />
        </Link>
      </div>
    );
  }
}

const wNavigation = withRouter(props => <Navigation {...props} />);

export default wNavigation;
