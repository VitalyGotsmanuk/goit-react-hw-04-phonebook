import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component { 
    
    handleSubmit = (event) => {
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;

        const contact = {
            name,
            number //: Number.parseFloat(number), //має бути число
        };
            
        this.props.handleAddContact(contact)
    }

    render () {
    return (
        <form onSubmit={this.handleSubmit}
            className={css.formInput}>
            <label className={css.contactInput}>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    placeholder='Type name'
                    required
                    pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    //onChange={this.onChange}
                    //value={name}
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
                    //onChange={this.onChange}
                    //value={number}
                />
            </label>
            
            <button
                className=""
                type="submit">Add contact</button>
        </form>
    )
    }
}