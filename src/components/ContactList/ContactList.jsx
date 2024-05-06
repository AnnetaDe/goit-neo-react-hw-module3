import s from './ContactList.module.css';
import { Contact } from '../Contact/Contact';
import { useEffect, useState } from 'react';
// import data from '../../assets/contacts.json';

export const ContactList = ({ contacts, onDelete }) => {
  const [dataState, setDataState] = useState(contacts);

  useEffect(() => {
    setDataState(contacts);
  }, [contacts]);
  return (
    <ul className={s.contactsUl}>
      {dataState.map(contact => (
        <Contact li key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
