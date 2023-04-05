import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
