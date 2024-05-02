// import { useState } from 'react';
// import { useLocalStorage } from './assets/hooks/localStorage';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
