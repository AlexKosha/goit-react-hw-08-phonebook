import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { formatPhoneNumber } from 'helpers/formatPhoneNumber';
import {
  AcceptBtn,
  ChangeForm,
  InputChange,
  InputContainer,
} from './FormChangeContact.styled';
import { changeContact } from '../../redux/contacts/contactsOperations';

const FormChangeContact = ({ contact, onSubmit }) => {
  const { name, number, id } = contact;
  const initialValues = {
    name,
    number,
  };
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const formattedNumber = formatPhoneNumber(values.number);

    const newContact = {
      name: values.name,
      number: formattedNumber,
    };

    dispatch(changeContact({ id, newContact }))
      .unwrap()
      .then(() => {
        onSubmit(id);
      });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ChangeForm>
        <InputContainer>
          <InputChange type="text" name="name" required />

          <InputChange type="tel" name="number" />
        </InputContainer>

        <AcceptBtn type="submit">
          <IoCheckmarkCircleOutline size={24} />
        </AcceptBtn>
      </ChangeForm>
    </Formik>
  );
};

export default FormChangeContact;
