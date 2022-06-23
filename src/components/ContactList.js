import React from 'react';

import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={s.list}>
    {contacts.map(contact => {
      return (
        <li className={s.item} key={contact.id}>
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
