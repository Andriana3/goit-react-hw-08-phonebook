import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const onClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Box component="div" sx={{ mt: 1, width: '100%', maxWidth: 350 }}>
      <List>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ListItem
              key={id}
              sx={{
                pb: 0,
                paddingX: 0,
                display: { xs: 'flex' },
                flexDirection: 'column',
              }}
            >
              <Box
                component="div"
                sx={{ display: { xs: 'flex' }, width: '100%' }}
              >
                <Box
                  component="div"
                  sx={{
                    display: { xs: 'flex' },
                    flexWrap: 'wrap',
                    flexGrow: 1,
                  }}
                >
                  <Typography variant="span" sx={{ mr: 1, flexGrow: 1 }}>
                    {name}
                  </Typography>
                  <Typography variant="span" sx={{ mr: 1 }}>
                    {number}
                  </Typography>
                </Box>
                <DeleteOutlineIcon
                  sx={{ color: '#000a', cursor: 'pointer' }}
                  onClick={() => onClick(id)}
                />
              </Box>
              <Divider sx={{ width: 1, pb: 1, mb: 1 }} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
