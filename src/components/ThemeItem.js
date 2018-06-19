import React from "react";

const ThemeItem = props => {
  return (
    <article
      style={{
        backgroundImage: `url(${props.theme.src}`,
        opacity: props.opacity
      }}
      className={"theme-item"}
    >
      <h2>{props.theme.name}</h2>
      <span>
        <img src={require("../images/clock.svg")} alt="clock" />
        {props.theme.time}
      </span>
      <div className="info">
        <p>{props.theme.discription}</p>
      </div>
    </article>
  );
};

export default ThemeItem;
