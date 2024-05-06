import s from './FormikSearchBox.module.css';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
export const FormikSearchBox = ({ value, onSearch }) => {
  const labelId = nanoid();
  return (
    <Formik>
      <div className={s.searchBox}>
        <label htmlFor={labelId}>
          <span>Search contact by name</span>
          <input
            id={labelId}
            type="text"
            value={value}
            onChange={e => onSearch(e.target.value)}
          />
        </label>
      </div>
    </Formik>
  );
};
