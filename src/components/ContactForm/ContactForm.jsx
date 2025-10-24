import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import { FormBtn, FormPhonebook, Input } from './ContactForm.styled';
import * as ContactsService from '../../redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectorsContacts';

const initialValues = {
  name: '',
  number: '',
};

// Yup схема для валідації
const Schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Please check that the name you have entered is correct'
    ),
  number: yup
    .string()
    .required('Number is required')
    .matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Please enter a valid phone number'),
});

// Функція для форматування номера під (123) 456-7890
const formatPhoneNumber = value => {
  if (!value) return '';
  const phoneNumber = value.replace(/[^\d]/g, '').slice(0, 10); // максимум 10 цифр

  if (phoneNumber.length < 4) return `(${phoneNumber}`;
  if (phoneNumber.length < 7)
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkContactExist = newName => {
    const isNameDuplicate = contacts.some(contact => contact.name === newName);
    if (isNameDuplicate) {
      alert(`${newName} is already in contacts`);
      return true;
    }
    return false;
  };

  const handleSubmit = (values, { resetForm }) => {
    if (checkContactExist(values.name)) {
      resetForm();
      return;
    }

    const contact = {
      name: values.name,
      phone: values.number,
    };

    dispatch(ContactsService.postContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      {({ values, setFieldValue, isValid }) => (
        <FormPhonebook as={Form}>
          <label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            Number
            <Input
              type="tel"
              name="number"
              value={values.number}
              onChange={e =>
                setFieldValue('number', formatPhoneNumber(e.target.value))
              }
            />
            <ErrorMessage name="number" component="div" />
          </label>

          <FormBtn
            type="submit"
            disabled={!isValid || values.number.length !== 14} // 14 символів = повний номер (123) 456-7890
          >
            Add contact
          </FormBtn>
        </FormPhonebook>
      )}
    </Formik>
  );
};
