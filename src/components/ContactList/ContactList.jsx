import { ContactItem } from './ContactItem';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => {

    return (
        <ul className={css.list}>
            {contacts
                .map(contacts => (
                <ContactItem
                    name={contacts.name}
                    number={contacts.number}
                    key={contacts.id}
                    id={contacts.id}
                    handleDeleteContact={handleDeleteContact}
                />
            ))}
        </ul>
    )
}