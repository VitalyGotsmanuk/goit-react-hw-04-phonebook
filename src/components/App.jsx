import '../index.css';
import contactsList from '../data/contacts.json'

import { useState, useEffect } from "react";

import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList';
//console.log(contactsList)

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const stringContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringContacts) ?? contactsList;

    return parsedContacts;
  });

  //const [deleteContact, setDeleteContact] = useState([]);

  const [deleteContact, setDeleteContact] = useState(() => {
    const stringDeletContacts = localStorage.getItem('deleteContacts');
    const parsedDeleteContacts = JSON.parse(stringDeletContacts);

    return parsedDeleteContacts;
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => { 
    const stringContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringContacts);

    const stringDeletContacts = JSON.stringify(deleteContact);
    localStorage.setItem('deleteContacts', stringDeletContacts);

    }, [contacts, deleteContact]);

  const handleAddContact = (contact) => {
    const duplicate = contacts.some((contacts) => contacts.name === contact.name);

    if (duplicate) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }
    const finalContact = { ...contact, id: nanoid() }

    setContacts([...contacts, finalContact])
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  const filterContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  
  const filteredContacts = filterContacts(contacts, filter);

  const handleDeleteContact = (id, name, number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setDeleteContact(prevState => [...prevState, {id, name, number }]);
  };

    return (
      <>
        <Section title='Phonebook'>
          <ContactForm
            //handleChange={handleChange}
            handleAddContact = {handleAddContact}
          />
        </Section>

        <Section title='Contacts'>
          <Filter
            filter={filter}
            onChange={handleFilterChange}
          />

          <ContactList
            contacts={filteredContacts}
            filter={filter}
            handleDeleteContact={handleDeleteContact}
          />

        </Section>          
      </>
    );
}