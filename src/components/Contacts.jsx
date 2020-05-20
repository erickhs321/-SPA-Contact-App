import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
  async componentDidMount() {
    await fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((res) => {
        if (!res.ok) throw new Error("Error getting data");
        return res.json();
      })
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { contacts } = this.state || [];
    return (
      <div className='container' data-testid='contacts'>
        <section className='contacts'>
          {contacts &&
            contacts.map((contact) => {
              return <Contact key={contact.id} data={contact} />;
            })}
        </section>
      </div>
    );
  }
}

export default Contacts;
