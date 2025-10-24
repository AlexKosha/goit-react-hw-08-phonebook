import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFilter } from '../../redux/Filter/filterSlice';
import { selectContacts } from '../../redux/contacts/selectorsContacts';
import { ContactBox } from './ContactsItems.styled';
import FormChangeContact from 'components/FormChangeContact/FormChangeContact';
import ContactCard from 'components/ContactCard/ContactCard';

const ContactItems = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const [activeContactId, setActiveContactId] = useState(false);

  const handleToggle = contactId => {
    setActiveContactId(contactId === activeContactId ? null : contactId);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.map(contact => {
        return (
          <ContactBox key={contact._id}>
            {activeContactId === contact._id ? (
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
