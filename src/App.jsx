import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import data from './assets/contacts.json';
import { FormikContactForm } from './components/FormikForm/FormikForm';
import { FormikSearchBox } from './components/FormikSearchBox/FormikSearchBox';
import { FormikContactList } from './components/FormikContactList/FormikContactList';
import { formValidation } from './components/FormikForm/formValidation';
function App() {
  const onReload = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || data
  );

  const [search, setSearch] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const killFormikContact = taskId => {
    setContacts(prev => [...prev.filter(contact => contact.id !== taskId)]);
  };
  console.log(contacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const formikHandleSubmit = (values, options) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      options.setSubmitting(false);
    }, 200);

    setContacts([...contacts, { ...values, id: nanoid() }]);
    options.resetForm();
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <button onClick={onReload}>Restore </button>

      <div>
        <h1>PhonebookFormik</h1>
        <FormikContactForm
          formValidation={formValidation}
          onSubmit={formikHandleSubmit}
        />
        <FormikSearchBox value={search} onSearch={setSearch} />
        <FormikContactList
          contacts={visibleContacts}
          onDelete={killFormikContact}
        />
      </div>
    </div>
  );
}
export default App;
