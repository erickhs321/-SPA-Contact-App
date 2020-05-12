import React from "react";

import Topbar from "./components/Topbar";

import Filters from "./components/Filters";

import Container from "./components/Container";
import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar>
          <LogoSvg />
        </Topbar>

        <Container>
          <Filters
            searchBar={true}
            filtersData={[
              "Nome",
              "Telefone",
              "País",
              "Admissão",
              "Empresa",
              "Departamento",
            ]}
          />
        </Container>

        <Container>
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
