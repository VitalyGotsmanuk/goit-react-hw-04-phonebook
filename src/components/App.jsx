import '../index.css';
import contactsList from '../data/contacts.json'

import { useState, useEffect } from "react";
//import { Component } from 'react';

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

  const [filter, setFilter] = useState('');
  const [deleteContact, setDeleteContact] = useState([]);

  // componentDidMount() { 
  //   const stringContacts = localStorage.getItem('contacts');
  //   if (stringContacts) {
  //     this.setState({
  //       contacts: JSON.parse(stringContacts)
  //     })    
  //   } 
  //   const stringDeletContacts = localStorage.getItem('deleteContacts');
  //   if (stringDeletContacts) {
  //     this.setState({
  //       contacts: JSON.parse(stringDeletContacts)
  //     })    
  //   }  
  // } 

  // componentWillUnmount() {
    
  // }

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     const stringContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem('contacts', stringContacts);
  //   }
  //   if (prevState.deleteContact !== this.state.deleteContact) {
  //     const stringDeleteContacts = JSON.stringify(this.state.deleteContact);
  //     localStorage.setItem('deleteContacts', stringDeleteContacts);}
  // }
    


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

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
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

/*
Методи життєвого циклу - це зарезервовані реактом методи(функції),
 які запускаються в певний період життя компоненти самим Реактом.

 componentDidMount() {} - метод життєвого цикл,
    що запускається один раз, після успішного монтування компонети в DOM.

    Використання:
    - Вішаються глобальні слухачі подій (addEventListener)
    - Встановлюються асинхронні таймери та лічильники (setTimeout, setInterval)
    - Зчитуються дані з локального сховища та встановлюємо їх в стейт
    - Надсилаються мережеві запити (HTTP request)

 componentWillUnmount() {} - метод життєвого цикл,
    що запускається один раз, перед повним видаленням компонети з DOM.

    Використання:
    - Прибираються глобальні слухачі подій (removeEventListener)
    - Прибирати асинхронні таймери та лічильники (clearTimeout, clearInterval)
    - Відхиляти мережеві запити (cancel HTTP request)

 componentDidUpdate(prevProps, prevState) {} - метод життєвого цикл,
    що запускається кожен раз, після того, як компонента оновилася(змінилися пропси, або стейт).
   
    Використання:
    - Надсилаються мережеві запити (HTTP request)
    - Оновлюють(синхронізуються) дані зі стейту з локальним сховищем
*/
