import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import themes from "../data/themes";

class DetailTheme extends Component {
  state = {
    selected: themes.filter((obj, i) => {
      return obj.selected === false;
    })
  };

  handleSelection = name => {
    for (let i = 0; themes.length > i; i++) {
      if (themes[i].name === name) {
        if (themes[i].selected) {
          themes[i].selected = false;
        } else {
          themes[i].selected = true;
        }
      }
    }

    const newThemes = themes.filter((obj, i) => {
      return obj.selected === false;
    });

    this.setState({
      selected: newThemes
    });
  };

  render() {
    const project = themes.find(
      p => "/details" + p.link === this.props.match.url
    );

    return (
      <div>
        <Header>
          <Link className="header-link button-small back" to="/add">
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
            <button
              onClick={() => this.handleSelection(project.name)}
              className="button"
            >
              {project.selected ? "Remove theme" : "Add theme"}
            </button>
          </article>
        </main>
      </div>
    );
  }
}

export default DetailTheme;
