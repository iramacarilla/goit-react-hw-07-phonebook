import axios from 'axios'
import {addContactRequest, addContactFailure, addContactSuccess, getAllContactsRequest, 
    getAllContactsSuccess, getAllContactsFailure, deleteContactSuccess, deleteContactFailure, deleteContactRequest, toggleComplitedContactRequest, toggleComplitedContactSuccess, toggleComplitedContactFailure } from './contactsAction'


const addContactOperation = contact => dispatch => {
    dispatch(addContactRequest())
    axios.post('https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts.json', contact)
    //axios.post(`${process.env.REDUX_BASE_URL}/contacts.json`, data)//
    .then((response )=> dispatch(addContactSuccess({...contact, id:response.data.name}))
)
    .catch(error => dispatch(addContactFailure(error)))
}
const getAllContactsOperation = () => dispatch => {
    dispatch(getAllContactsRequest())
    axios.get('https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts.json')
    .then((response)=> 
    dispatch(getAllContactsSuccess(Object.keys(response.data).map(key=>({...response.data[key], id: key })))))
    .catch(error => dispatch(getAllContactsFailure(error)))
}
const deleteContactOperation = (id) => dispatch => {
    dispatch(deleteContactRequest())
    axios.delete(`https://goit-react-hw-07-phonebo-9e664-default-rtdb.firebaseio.com/contacts/${id}.json`)
    .then(()=> dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactFailure(error)))
}


export {addContactOperation, getAllContactsOperation, deleteContactOperation}