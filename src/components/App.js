import { nanoid } from 'nanoid';
import React, { Component } from 'react';

import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  func = arr => {
    return evt => {
      evt.preventDefault();

      const addingExistingName = this.state.contacts.some(
        contact => contact.name === arr.name
      );

      if (addingExistingName) {
        alert(`${arr.name} is already in contacts`);
        return;
      }

      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              ...arr,
              id: nanoid(),
            },
          ],
        };
      });
    };
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const normalizedFilterText = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterText)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form submitHandler={this.func} />
        <h1>Contacts</h1>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
