import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getFilter } from '../../redux/Filter/filterSlice';
import { getContacts } from '../../redux/contacts/getState';
import { ContactBox } from './ContactsItems.styled';
import FormChangeContact from 'components/FormChangeContact/FormChangeContact';
import ContactCard from 'components/ContactCard/ContactCard';

const ContactItems = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [activeContactId, setActiveContactId] = useState(false);

  const handleToggle = contactId => {
    setActiveContactId(contactId === activeContactId ? null : contactId);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.map(contact => {
        return (
          <ContactBox key={contact.id}>
            {activeContactId === contact.id ? (
              <FormChangeContact contact={contact} onSubmit={handleToggle} />
            ) : (
              <ContactCard contact={contact} onClickToggle={handleToggle} />
            )}
          </ContactBox>
        );
      })}
    </>
  );
};

export default ContactItems;
