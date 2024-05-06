import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useId } from 'react';

export const ContactForm = ({ createNewContact }) => {
  const labelId = useId();
  const labelTelId = useId();
  const startValue = {
    id: nanoid(),
    name: '',
    number: '',
  };
  const [formData, setFormData] = useState(startValue);

  const addNewContact = e => {
    e.preventDefault();
    createNewContact(formData);
    setFormData(startValue);
  };

  const changeInput = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.addContact}>
      <form onSubmit={addNewContact}>
        <label htmlFor={labelId}>
          <span>New Contact</span>
          <input
            type="text"
            minLength={3}
            maxLength={50}
            id={labelId}
            value={formData.name}
            onChange={changeInput}
            placeholder="Enter contact name"
            name="name"
            required="required"
          />
        </label>

        <label htmlFor={labelTelId}>
          <span>New Contact Number </span>
          <input
            minLength={3}
            maxLength={50}
            type="text"
            id={labelTelId}
            value={formData.number}
            onChange={changeInput}
            placeholder="Enter cell number"
            name="number"
            required="required"
          />
        </label>

        <button>ADD Contact</button>
      </form>
    </div>
  );
};
