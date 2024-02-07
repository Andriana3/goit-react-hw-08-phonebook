import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { selectFilterValue } from '../../redux/contacts/selectors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export function ContactsFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onFilter = e => dispatch(setFilter(e.target.value));

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ '& > :not(style)': { m: 1, width: 350 } }}
    >
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        size="small"
        value={filter}
        onChange={onFilter}
        fullWidth
        color="secondary"
      />
    </Box>
  );
}
