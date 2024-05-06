import s from './FormikContactList.module.css';
import { FormikContact } from '../FormikContact/FormikContact';
import { useEffect, useState } from 'react';
export const FormikContactList = ({ contacts, onDelete }) => {
  const [dataState, setDataState] = useState(contacts);
  useEffect(() => {
    setDataState(contacts);
  }, [contacts]);
  return (
    <ul className={s.contactsFormik}>
      {dataState.map(contact => (
        <FormikContact li key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
