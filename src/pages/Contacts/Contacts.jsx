import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { ContactList, ContactsFilter, ContactsForm } from 'components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: { xs: 'flex' },
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#9d53c3' }}>
          Add new contact
        </Typography>
      </Divider>

      <ContactsForm />

      <Divider sx={{ width: 1, pt: 2, pb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#9d53c3' }}>
          Contacts
        </Typography>
      </Divider>

      {contacts.length ? (
        <>
          <ContactsFilter />
          <ContactList />
        </>
      ) : (
        <p>No any contacts in phonebook</p>
      )}

      {isLoading && !error && <h2>Loading...</h2>}

      <Divider sx={{ width: 1, pt: 2, pb: 1 }} />
    </Box>
  );
}
