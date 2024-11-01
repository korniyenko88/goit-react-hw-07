import { createSlice } from '@reduxjs/toolkit';
import requestContacts from '../components/Request/requestContacts';

const contactsSlice = createSlice({
    name: 'contacts',
  
    initialState: requestContacts.contacts,
  
    reducers: {
      addContact: (state, action) => {
        
        state.items.push(action.payload);
  
        
      },
      deleteContact: (state, action) => {
        
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
        
      },
    },
  });
  
  export const { addContact, deleteContact } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;
