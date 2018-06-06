import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import themes from "../data/themes";

class DetailTheme extends Component {
  render() {
    const project = themes.find(
      p => "/details" + p.link === this.props.match.url
    );
    console.log(project);
    return (
      <div>
        <Header>
          <Link className="header-link left" to="/">
            Back
          </Link>
        </Header>
        <main className="detail-page">
          <div>
            <img src={project.src} />
          </div>
          <article>
            <h1>{project.name}</h1>
            <p>
              Vincent van Gogh is nooit in Japan geweest. Hij leerde het land
              kennen door de Japanse prenten die hij gretig verzamelde en tot in
              detail bestudeerde. De exotische voorstellingen met ongewone
              composities en felle kleurvlakken inspireerden hem. Van Gogh begon
              Japanse prenten na te schilderen om ze beter te begrijpen. Vincent
              ontwikkelde een 'Japanse blik' die zijn eigen werk ingrijpend zou
              veranderen. Wat was die Japanse manier van kijken? Je ontdekt het
              in de tentoonstelling Van Gogh & Japan. "Het Van Gogh Museum laat
              prachtig zien hoe dat verre en gesloten land Vincents kunst verder
              bracht." - De Volkskrant
            </p>
          </article>
        </main>
      </div>
    );
  }
}

export default DetailTheme;
