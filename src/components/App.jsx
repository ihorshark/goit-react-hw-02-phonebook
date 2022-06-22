import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [{ name: '', number: '', id: '' }],
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleNumberChange = evt => {
    this.setState({ number: evt.target.value });
  };

  submitHandler = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
      };
    });
    console.log(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form className={s.form} onSubmit={this.submitHandler}>
          <label /* className={s.name} */>
            Name
            <input
              className={s.input__name}
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              className={s.input__number}
              type="tel"
              value={this.state.number}
              onChange={this.handleNumberChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name} {contact.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
