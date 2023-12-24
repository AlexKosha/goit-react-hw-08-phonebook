import { useSelector } from 'react-redux';

import { selectIsLoadding } from '../../redux/contacts/selectorsContacts';
import ContactItems from 'components/ContactItems/ContactItems';

import Filter from 'components/Filter/Filter';
import { ListContact } from './ContactsList.styled';

const ContactsList = () => {
  const loading = useSelector(selectIsLoadding);

  return (
    <>
      <Filter />
      <ListContact>
        {loading ? <h3>Loading...</h3> : <ContactItems />}{' '}
      </ListContact>
    </>
  );
};

export default ContactsList;
