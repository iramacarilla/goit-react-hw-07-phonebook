import React from 'react'
import {connect} from 'react-redux'
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import contactsSelectors from '../../redux/contacts/contactsSelectors'
import ContactListItem from '../contactListItem/ContactListItem'
import {deleteContactOperation} from '../../redux/contacts/contactsOperation'


const ContactList = ({contacts, deleteContact}) => {
  const onHandleDelete = (e) => {
    const  id  = e.target.dataset.id;
    deleteContact(id)}
  return (

 <TransitionGroup component='ul' className= {styles.contactData}>
   {contacts.map(({id, name, number}, idx) => 
   <CSSTransition  key={id} timeout={1000} classNames={styles} > 
        <ContactListItem id={id} name={name} number={number} idx={idx} onDelete={onHandleDelete}/>    
   </CSSTransition>
   )}
 </TransitionGroup>
)
}

const mapStateToProps = state => ({
contacts: contactsSelectors.getFilteredContacts(state)
})
 
const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) =>
    {
      dispatch(deleteContactOperation(id))
    }

  }
}


ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

