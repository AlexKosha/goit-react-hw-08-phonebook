import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectorsContacts';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <ContactForm />

      {contacts.length !== 0 && <ContactsList />}
    </>
  );
};

export default Contacts;
