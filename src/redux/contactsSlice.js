import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from '../redux/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isContactAdded: false,
    contactBeingEdited: null,
  },
  reducers: {
    clearContactAdded: state => {
      state.isContactAdded = false;
    },
    setContactBeingEdited: (state, action) => {
      state.contactBeingEdited = action.payload;
    },
    clearContactBeingEdited: state => {
      state.contactBeingEdited = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.isContactAdded = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedContact = action.payload;
        const index = state.items.findIndex(
          contact => contact.id === editedContact.id
        );
        state.items[index] = editedContact;
        state.isContactAdded = true;
        state.contactBeingEdited = null;
      });
  },
});

export const {
  clearContactAdded,
  setContactBeingEdited,
  clearContactBeingEdited,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
