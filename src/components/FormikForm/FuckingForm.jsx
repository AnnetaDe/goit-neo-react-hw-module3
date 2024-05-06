import { Formik, Form, Field, FieldArray } from 'formik';
import { nanoid } from 'nanoid';
import { formValidation } from './formValidation';
import s from './FormikForm.module.css';
const BasicExample = ({ initialValues, onSubmit }) => (
  <div>
    <h1>My Form</h1>

    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
          </label>

          <label htmlFor="number">
            Number
            <input
              id="number"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.number}
              name="number"
            />
          </label>

          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <button className={s.formikButton} type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default BasicExample;
