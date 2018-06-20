import React, { Component } from "react";

class OverviewListItem extends Component {
  state = {};
  render() {
    const { obj, type, onClickButton, selected } = this.props;
    return (
      <li
        style={{
          backgroundImage: `url(${obj.src}`,
          backgroundPosition: "center center"
        }}
      >
        <div>
          <h2 className="item-title">{obj.name}</h2>
          <p>
            <img src={require("../images/clock.svg")} />
            {obj.time}
          </p>
        </div>
        <button
          onClick={() => onClickButton(selected, obj.name)}
          className={type}
        />
      </li>
    );
  }
}

export default OverviewListItem;
