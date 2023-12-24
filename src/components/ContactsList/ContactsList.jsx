import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoadding } from '../../redux/contacts/selectorsContacts';
import ContactItems from 'components/ContactItems/ContactItems';
import * as ContactsService from '../../redux/contacts/contactsOperations';
import Filter from 'components/Filter/Filter';
import { ListContact } from './ContactsList.styled';

const ContactsList = () => {
  const loading = useSelector(selectIsLoadding);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactsService.fetchContacts());
  }, [dispatch]);

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
