import { nanoid } from "nanoid";
import { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { Text, Title } from "./components/styles/styled";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (data) => {
    const id = nanoid();
    this.checkUniqueContact(data) === -1
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, { id, ...data }],
        }))
      : alert(`${data.name} is already in contacts`);
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].filter((contact) => contact.id !== id),
    }));
  };

  filterHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  checkUniqueContact(data) {
    const { contacts } = this.state;
    return contacts.findIndex(
      (contact) => contact.name === data.name || contact.number === data.number
    );
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <Title>Phone book</Title>
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter filterHandler={this.filterHandler} filter={filter} />
        {filteredContacts.length ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          <Text>Nothing</Text>
        )}
      </div>
    );
  }
}

export default App;
