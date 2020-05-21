import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
// import mockContactsList from "./__tests__/mock/contacts";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filteredContacts: [],
      selectedOrder: "name",
    };
  }

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

    // await this.setState({ contacts: mockContactsList });
    this.filterByName("");
    this.orderBy(this.state.selectedOrder);
  }

  orderBy = (property) => {
    const filteredContacts = this.state.filteredContacts.sort((a, b) => {
      if (a[property] > b[property]) return -1;
      else if (a[property] < b[property]) return 1;
      return 0;
    });

    this.setState({ filteredContacts, selectedOrder: property });
  };

  filterByName = (name) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) =>
        contact.name?.toLowerCase().includes(name?.toLowerCase()) || ""
    );
    this.setState({ filteredContacts });
  };

  handleChangeSearchbarText = (event) => {
    const searchbarText = event.target.value;
    this.filterByName(searchbarText);
  };

  render() {
    return (
      <div className='app' data-testid='app'>
        <Topbar />
        <Filters
          selectedOrder={this.state.selectedOrder}
          orderBy={this.orderBy}
          handleChangeSearchbarText={this.handleChangeSearchbarText}
        />
        <Contacts data={this.state.filteredContacts} />
      </div>
    );
  }
}

export default App;
