import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import Container from "./components/Container";
import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import data from "./data/contacts.json";

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
              "País",
              "Empresa",
              "Departamento",
              "Data de admissão",
            ]}
          />
        </Container>

        <Container>
          <Contacts
            data={data}
            showInfos={[
              "avatar",
              "name",
              "phone",
              "country",
              "admissionDate",
              "company",
              "department",
            ]}
            columnsData={[
              "Nome",
              "Telefone",
              "País",
              "Admissão",
              "Empresa",
              "Departamento",
            ]}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
