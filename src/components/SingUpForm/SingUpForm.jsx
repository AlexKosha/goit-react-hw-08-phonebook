import { Formik } from 'formik';
import { Button, Input, RegisterForm } from './SingUpForm.styled';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/auth/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SingUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(createUser(newUser));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      //   validationSchema={Schema}
    >
      <RegisterForm>
        <label>
          Name
          <Input type="text" name="name" required />
        </label>
        <label>
          Email
          <Input type="email" name="email" required />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">SingUp</Button>
      </RegisterForm>
    </Formik>
  );
};

export default SingUpForm;
