import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import {
  FormWrapper,
  Label,
  AddContactButton,
  ErrorText,
} from './FormikForm.styled';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().phone('UA').required('Enter phone number'),
});

export function FormikForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm, setFieldError }) => {
    const { name: newName } = values;
    let isContactExists = contacts.some(({ name }) => name === newName);
    if (isContactExists) {
      setFieldError('name', `${newName} is already in contacts!`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={handleSubmit}
      >
        {formikProps => (
          <FormWrapper>
            <Label htmlFor="name">
              Name:
              <Field type="text" name="name" />
            </Label>
            <ErrorText name="name" component="span"></ErrorText>
            <Label htmlFor="number">
              Number:
              <Field type="tel" name="number" />
            </Label>
            <ErrorText name="number" component="span"></ErrorText>
            <AddContactButton type="submit">Add contact</AddContactButton>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
}
