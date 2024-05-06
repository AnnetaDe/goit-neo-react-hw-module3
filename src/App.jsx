import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from './assets/contacts.json';
import { ContactList } from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { ContactForm } from './components/ContactForm/ContactForm';
import { FormikContactForm } from './components/FormikForm/FormikForm';
import { FormikSearchBox } from './components/FormikSearchBox/FormikSearchBox';
import { FormikContactList } from './components/FormikContactList/FormikContactList';
import { formValidation } from './components/FormikForm/formValidation';
function App() {
  const onReload = () => {
    localStorage.clear();
    window.location.reload();
  };
  data.forEach(contact => {
    contact.id = nanoid();
  });
  const [formData, setFormData] = useState(() => {
    let currentData;
    try {
      currentData = JSON.parse(localStorage.getItem('form')) ?? data;
    } catch (error) {
      console.error('Error:', error);
      currentData = { id: nanoid(), name: '', number: '' };
    }
    return currentData;
  });
  const [formikData, setFormikData] = useState(() => {
    let currentData;
    try {
      currentData = JSON.parse(localStorage.getItem('formik')) ?? data;
    } catch (error) {
      console.error('Error:', error);
      currentData = { id: nanoid(), name: '', number: '' };
    }
    return currentData;
  });
  const [search, setSearch] = useState(() => '', [formData]);
  const [searchFormik, setSearchFormik] = useState(() => '', [formikData]);
  useEffect(() => {
    localStorage.setItem('form', JSON.stringify(formData));
  });
  useEffect(() => {
    localStorage.setItem('formik', JSON.stringify(formikData));
  });
  const updateForm = formData => {
    setFormData(prev => [...prev, formData]);
  };
  const updateFormik = formikData => {
    setFormikData(prev => [...prev, formikData]);
  };
  const killContact = taskId => {
    setFormData(prev => [...prev.filter(contact => contact.id !== taskId)]);
  };
  const killFormikContact = taskId => {
    setFormikData(prev => [...prev.filter(contact => contact.id !== taskId)]);
  };
  const visibleContacts = formData.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  const visibleFormikContacts = formikData.filter(contact =>
    contact.name.toLowerCase().includes(searchFormik.toLowerCase())
  );
  const formikHandleSubmit = (values, options) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      options.setSubmitting(false);
    }, 200);
    console.log(values);
    console.log(options);
    updateFormik({ ...values, id: nanoid() });
    options.resetForm();
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <button onClick={onReload}>Restore </button>
      <ContactForm createNewContact={updateForm} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={killContact} />
      <div>
        <h1>PhonebookFormik</h1>
        <FormikContactForm
          formValidation={formValidation}
          onSubmit={formikHandleSubmit}
        />
        <FormikSearchBox value={searchFormik} onSearch={setSearchFormik} />
        <FormikContactList
          contacts={visibleFormikContacts}
          onDelete={killFormikContact}
        />
      </div>
    </div>
  );
}
export default App;
