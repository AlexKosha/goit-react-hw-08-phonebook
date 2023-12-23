import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoadding } from '../../redux/contacts/getState';
import ContactItems from 'components/ContactItems/ContactItems';
import * as ContactsService from '../../redux/contacts/contactsOperations';
import Filter from 'components/Filter/Filter';
import { ListContact } from './ContactsList.styled';

const Contacts = () => {
  const loading = useSelector(getIsLoadding);
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

export default Contacts;
