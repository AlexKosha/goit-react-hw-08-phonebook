import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectContacts } from '../redux/contacts/selectorsContacts';
import * as ContactsService from '../redux/contacts/contactsOperations';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactsService.fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />

      {contacts.length !== 0 && <ContactsList />}
    </>
  );
};

export default Contacts;
