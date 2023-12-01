// import { Component } from 'react';
import { useState } from "react";

import css from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => { 
    const [name, setName] = useState('');
    // const handlName = (event) => {
    //     setName(event.target.value)
    // }
    const [number, setNumber] = useState('')
    // const handlNumber = (event) => {
    //     setNumber(event.target.value)
    // }

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                console.log()
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //const name = event.currentTarget.elements.name.value;
        //const number = event.currentTarget.elements.number.value;

        const contact = {
            name,
            number //має бути число
        };

        //console.log(contact)
            
        handleAddContact(contact)
    }

    return (
        <form onSubmit={handleSubmit}
            className={css.formInput}>
            <label className={css.contactInput}>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    placeholder='Type name'
                    required
                    //pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={handleChange}
                    value={name}
                />
            </label>
            
            <label className="">
                <p>Number</p>
                <input
                    type="tel"
                    name="number"
                    placeholder="Format: XXX-XX-XX"
                    title="Format: XXX-XX-XX"
                    required
                    pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
                    onChange={handleChange}
                    value={number}
                />
            </label>
            
            <button
                className=""
                type="submit">Add contact</button>
        </form>
    )
    
}