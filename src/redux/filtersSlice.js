import { createSlice } from '@reduxjs/toolkit';
import requestContacts from '../components/Request/requestContacts';


const filterSlice = createSlice({
  name: 'filter',

  initialState: requestContacts.filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
