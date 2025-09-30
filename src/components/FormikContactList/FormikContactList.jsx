import s from './FormikContactList.module.css';
import { Contact } from '../FormikContact/FormikContact';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactsFormik}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
