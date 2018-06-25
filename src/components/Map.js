import React, { Component } from "react";
import Header from "./Header";

let count = 0;

class Map extends Component {
  state = {
    count: 0
  };

  // componentDidMount() {
  // this.setState({ count: 10});
  //   let intervalTimer = setInterval(() => {
  //     console.log(this.state.count);

  //     if (this.state.count === 100 - 1) {
  //       clearInterval(intervalTimer);
  //     }
  //     this.setState(prevState => ({
  //       count: prevState.count + 1
  //     }));
  //   }, 100);
  // }

  render() {
    return (
      <div>
        <Header />
        <main className="map">
          <img className="top" src={require("../images/top.png")} alt="clock" />
        </main>
        <img
          className="bottom"
          src={require("../images/bottom.png")}
          alt="clock"
        />
      </div>
    );
  }
}

export default Map;
