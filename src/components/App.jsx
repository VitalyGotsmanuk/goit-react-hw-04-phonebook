import '../index.css';
import contactsList from '../data/contacts.json'

import { useState, useEffect } from "react";
//import { Component } from 'react';

import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList';

console.log(contactsList)

export const App = (

) => {

  const [contacts, setContacts] = useState(() => {
    const stringContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringContacts) ?? contactsList;

    return parsedContacts;
  });

  //const [name, setName] = useState('');
  //const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [deleteContact, setDeleteContact] = useState([]);

  // state = {
  //   contacts: [
  //     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ],
  //   name: '',
  //   number: '',
  //   filter: '',
  //   deleteContact: [],
  // }

  
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
    


  // const handleAddContact = (contact) => {
  //   const duplicate = contacts.some((contacts) => contacts.name === contact.name);

  //   if (duplicate) {
  //     alert(`${contact.name} is already in contacts!`);
  //     return;
  //   }
  //   const finalContact = { ...contact, id: nanoid() }

  //   setContacts([...contacts, finalContact])
  //   // this.setState({
  //   //   contacts: [...contacts, finalContact]
  //   // })
  // };



  const handleInputChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  // const filterContacts = (contacts, filter) => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }



  // const handleDeleteContact = (id, name, number) => {
  //   this.setState({
  //     contacts: contacts.filter(contact => contact.id !== id),
  //     deleteContact: [...deleteContact, { id, name, number }]
  //   });
  // };

  //const filteredContacts = filterContacts(contacts, filter);

    return (
      <>
        <Section title='Phonebook'>
          <ContactForm
            //handleChange={handleChange}
            //handleAddContact = {handleAddContact}
          />
        </Section>

        <Section title='Contacts'>
          <Filter
            filter={filter}
            onChange={handleInputChange}
          />

          {/* <ContactList
            // contacts={contacts}
            //contacts={filteredContacts}
            //filter={filter}
            //handleDeleteContact={handleDeleteContact}
          /> */}

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
