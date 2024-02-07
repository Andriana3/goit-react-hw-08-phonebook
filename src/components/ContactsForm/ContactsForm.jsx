import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact, editContact } from '../../redux/contacts/operations';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().phone('UA').required('Enter phone number'),
});

export function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [editingContact, setEditingContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [editingContact]);

  const handleSubmit = (values, { resetForm, setFieldError }) => {
    const { name: newName } = values;

    if (editingContact) {
      dispatch(editContact({ id: editingContact.id, updatedContact: values }));
      setEditingContact(null);
    } else {
      let isContactExists = contacts.some(({ name }) => name === newName);
      if (isContactExists) {
        setFieldError('name', `${newName} is already in contacts!`);
        return;
      }
      dispatch(addContact(values));
    }

    resetForm && resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: isEditing ? editingContact.name : '',
          number: isEditing ? editingContact.number : '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm, setFieldError }) => {
          handleSubmit(values, { resetForm, setFieldError });
        }}
      >
        <Form autoComplete="off">
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              type="name"
              label="Name*"
              name="name"
              size="small"
              fullWidth
              disabled={isEditing}
              color="secondary"
            />
          </Box>
          <Box marginY={1}>
            <Field
              component={TextField}
              type="tel"
              label="Number*"
              name="number"
              size="small"
              fullWidth
              disabled={isEditing}
              color="secondary"
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: '#f5c7f7',
              color: '#9d53c3',
              '&:hover': {
                backgroundColor: '#9d53c3',
                color: '#f5c7f7',
              },
            }}
          >
            {isEditing ? 'Save Changes' : 'Add contact'}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
