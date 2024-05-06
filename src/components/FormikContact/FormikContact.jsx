import s from './FormikContact.module.css';
export const FormikContact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contactFormik}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button className={s.formikLiBtn} onClick={() => onDelete(id)}>
        delete
      </button>
    </li>
  );
};
