import s from './Contact.module.css';
export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contactLi} key={id}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button onClick={() => onDelete(id)}>delete</button>
    </li>
  );
};
