import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items || [];
export const selectFilter = state => state.filters.name || '';
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }

    return contacts.filter(contact => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(filter.toLowerCase());
    });
  }
);
