import { createReducer } from '@reduxjs/toolkit';
import {combineReducers} from 'redux'
import { getFilter,  addContactSuccess, addContactFailure, addContactRequest, getAllContactsRequest,
   getAllContactsSuccess, getAllContactsFailure, deleteContactSuccess, deleteContactFailure, deleteContactRequest, 
   } from './contactsAction'


const items = createReducer ([], {
[addContactSuccess]: (state, action) =>
   { 
return [...state, action.payload]
},
[getAllContactsSuccess]: (_, action) => action.payload
   
/*return [...action.payload]*/

,
[deleteContactSuccess]: (state, action) =>{
return state.filter(item=> item.id !== action.payload)
},
      
})
const loading = createReducer(false,  {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactFailure]: () => false,

  [getAllContactsRequest]: () => true,
  [getAllContactsSuccess]: () => false,
  [getAllContactsFailure]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactFailure]: () => false,

  

})

const error = createReducer(null,  {
  [addContactFailure]: (state, {payload}) =>
  { 
return error ? payload : null
},
 

  [getAllContactsFailure]:  (state, {payload}) =>
  { 
return error ? payload : null
},

  [deleteContactFailure]: (state, {payload}) =>
  { 
return error ? payload : null
},
})

const filter = createReducer('',  {
    [getFilter]: (_, action) =>
     {return action.payload}
       
})

export default combineReducers({
    items: items,
    loading: loading,
    filter: filter,
    error: error
  
  
})






///////////////////////////////////////////////////////


/*import {combineReducers} from 'redux'
import actionsTypes from './contactsActionsTypes'
const items = (state=[], {type, payload}) => {
    switch (type) {
        case actionsTypes.ADD_CONTACT:
            localStorage.setItem('contacts', JSON.stringify([...state, payload]));
            /*if (localStorage.getItem('contacts')) ({
                 [...state, JSON.parse(localStorage.getItem('contacts'))],
                })*/
            
           /*if (
                state.some(
                  (item) => item.name === payload.name
                )
              ) {
                return  [...state]/*, (state.contacts.alert: !state.contacts.alert)}*/
              /*}else*/
           /* return [...state, payload];
        case actionsTypes.DELETE_CONTACT:
            return  state.filter(item=> item.id !== payload.id); 
        default:
           return state;
    }
}


const filter = (state='', {type, payload}) => {
    switch (type) {
        case actionsTypes.FILTER_CONTACTS:
            return payload.value
        default:
            return state;
    }
}
/*const alert = (state=false, {type, payload}) => {
    switch (type) {
        case actionsTypes.SET_ALERT:
            return {...state, alert: !state}
        default:
            return state;
    }
}*/

/*export default combineReducers({
    items: items,
   /* alert: alert,*/
    /*filter: filter,
  
})

 

/*
{
  contacts: {
    items: [],
    filter: ''
  }
}


  useEffect (() => {
   localStorage.getItem('contacts') && setContacts(JSON.parse(localStorage.getItem('contacts')))
  }, []);
  

 useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    

  const getFilter = (e) => {
    setFilter(e.target.value)
  }
  const filterContacts =() => {
    return [...contacts.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()))]
    }

 
  const addContact = item => {
    const searchName = contacts.map(contact => contact.name).includes(item.name)
    if(searchName) {setTimeout(()=>setIsVisible(true), 500)
    setTimeout(()=>setIsVisible(false), 2000)}
    else {
    setContacts([...contacts, {id: uuidv4(), ...item}])
    
    }
  }
  
  const deleteContact = (e) => {
    const id = e.target.dataset.id;
    setContacts(
      [...contacts.filter(contact=> contact.id !== id) 
    ])
  }*/