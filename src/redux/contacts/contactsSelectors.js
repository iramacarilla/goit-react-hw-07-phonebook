import {createSelector} from '@reduxjs/toolkit'

const getLoading = state => state.contacts.loading;
const getItems = state => state.contacts.items;
const getValue = state => state.contacts.filter;

const getFilteredContacts = createSelector([getItems, getValue], (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

/*const getFilteredContacts = state => {
    const filter = getValue(state).toLowerCase();
    const contacts = getItems(state);
return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
}*/

export default { getLoading, getItems, getValue, getFilteredContacts}