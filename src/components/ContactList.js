import React from 'react';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => {
      return (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete user
          </button>
        </li>
      );
    })}
  </ul>
);

export default ContactList;
