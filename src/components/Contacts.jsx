import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact
            data={{
              name: "Nome",
              phone: "Telefone",
              country: "País",
              admissionDate: "Data de Admissão",
              company: "Empresa",
              department: "Departamento",
            }}
          />
          <Contact
            data={{
              id: "1",
              name: "Daniela Terry",
              avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
              company: "Rohan - Pagac",
              department: "Clothing",
              admissionDate: "2019-04-08T19:28:41.878Z",
              phone: "1-931-065-2122 x879",
              country: "Iceland",
            }}
          />
        </section>
      </div>
    );
  }
}

export default Contacts;
