import { createAction } from '@reduxjs/toolkit';



export const addContactRequest = createAction('contacts/addRequest')
export const addContactSuccess = createAction('contacts/addSuccess')
export const addContactFailure = createAction('contacts/addFailure')

export const getAllContactsRequest = createAction('contacts/getRequest')
export const getAllContactsSuccess = createAction('contacts/getSuccess')
export const getAllContactsFailure = createAction('contacts/getFailure')
/*export const addContactSuccess = createAction('contacts/addSuccess'/*, (contact) => ({
    payload: contact
    }))*/
export const deleteContactRequest = createAction('contacts/deleteRequest')
export const deleteContactSuccess = createAction('contacts/deleteSuccess')
export const deleteContactFailure = createAction('contacts/deleteFailure')
/*export const addContact = createAction('contacts/add', (contact) => ({
    payload: contact
    }))*/

/*export const deleteContact = createAction('contacts/delete')*/
export const getFilter = createAction('contacts/filter')
/*export const getLocalContacts = createAction('contacts/localContacts')*/

 






/*import { v4 as uuidv4 } from "uuid";
import contactActions from './contactsActionsTypes'

  const addContact = (data) => ({
    type: contactActions.ADD_CONTACT,
    payload: {
        ...data,
        id: uuidv4(),
    }
    
    })
    export const deleteContact = id => ({
        type: contactActions.DELETE_CONTACT,
        payload: {
            id,
        }
        
        })
       export const getFilter = value => ({
            type: contactActions.FILTER_CONTACTS,
            payload: {
                value,
            }
            
            })
        const setAlert = () => ({
            type: contactActions.SET_ALERT,   
            })

            
   export default {
    addContact,
    setAlert
    
    
   } */

