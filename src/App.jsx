import { useEffect, useState } from 'react';
import './App.css';
import { ContactList } from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { ContactForm } from './components/ContactForm/ContactForm';
import data from './assets/contacts.json';

function App() {
  const onReload = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [dataState, setDataStateStorage] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem('contacts')) ?? data;
    } catch (error) {
      currentValue = data;
    }
    return currentValue;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(dataState));
  }, [dataState]);

  const updateContacts = dataState => {
    setDataStateStorage(prev => [...prev, dataState]);
  };

  const killContact = taskId => {
    setDataStateStorage(prev => [
      ...prev.filter(contact => contact.id !== taskId),
    ]);
  };
  const visibleContacts = dataState.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <button onClick={onReload}>Restore </button>

      <ContactForm createNewContact={updateContacts} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={killContact} />
    </div>
  );
}

export default App;
