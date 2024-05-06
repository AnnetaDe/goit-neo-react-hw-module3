import s from './FormikForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { formValidation } from './formValidation';
export const FormikContactForm = ({ onSubmit }) => {
  const initialValues = { id: nanoid(), name: '', number: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidation}
      onSubmit={onSubmit}
    >
      {props => (
        <Form className={s.formikForm} onSubmit={props.handleSubmit}>
          <label htmlFor="name">
            <span className={s.labelSpan}>New Contact Name </span>
            <Field
              className={s.input}
              type="text"
              value={props.values.name}
              onChange={props.handleChange}
              placeholder="Enter contact name"
              name="name"
              id="name"
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label>
            <span className={s.labelSpan}>New Contact Number </span>
            <Field
              className={s.input}
              id="number"
              type="text"
              value={props.values.number}
              onChange={props.handleChange}
              placeholder="Enter cell number"
              name="number"
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.formikButton} type="submit">
            ADD Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
