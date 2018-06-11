import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import themes from "../data/themes";

class DetailTheme extends Component {
  render() {
    const project = themes.find(
      p => "/details" + p.link === this.props.match.url
    );
    return (
      <div>
        <Header>
          <Link className="header-link round-button back" to="/add">
            Back
          </Link>
        </Header>
        <main className="detail-page">
          <div>
            <img src={project.src} />
          </div>
          <article className="detail-description">
            <h1>{project.name}</h1>
            <p>{project.discription}</p>
          </article>
        </main>
      </div>
    );
  }
}

export default DetailTheme;
