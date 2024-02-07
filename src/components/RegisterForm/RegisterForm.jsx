import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  email: Yup.string().nullable().email().required('Enter email'),
  password: Yup.string()
    .min(8 | 'Password must be at least 8 characters long')
    .max(
      16 | 'The maximum length of the password must not exceed 16 characters'
    )
    .required('Enter password'),
});

export function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values));
          resetForm();
        }}
      >
        <Form autoComplete="off">
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              type="text"
              label="User name*"
              name="name"
              size="small"
              fullWidth
              color="secondary"
            />
          </Box>
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              type="email"
              label="Email*"
              name="email"
              size="small"
              fullWidth
              color="secondary"
            />
          </Box>
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              type="password"
              label="Password*"
              name="password"
              size="small"
              fullWidth
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
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
