import s from './FormikContactList.module.css';
import { FormikContact } from '../FormikContact/FormikContact';
export const FormikContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactsFormik}>
      {contacts.map(contact => (
        <FormikContact li key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
