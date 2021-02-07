import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'
import {connect} from 'react-redux'
import styles from '../contactEditor/ContactEditor.module.css'
import { addContactOperation, getAllContactsOperation} from '../../redux/contacts/contactsOperation'
import contactsSelectors from '../../redux/contacts/contactsSelectors'
import Notification from '../../components/notification/Notification'
import Logo from '../logo/Logo'


const initialState = {
  name: '',
  number: '',
 
}

 class ContactEditor extends Component {
    state = {...initialState}
    /*state ={isVisible: false, message:''}*/

    componentDidMount() {
      
    
          this.props.getContacts()
         }
    onHandelChange = (e) => {
      const {name, value} = e.target
      this.setState({[name]: value})
    }
      
    handelSubmit = (e) => {
    e.preventDefault();
   const search =this.props.items.find(contact => contact.name === this.state.name);
    if (search) 
      {setTimeout(()=>this.setState({isVisible: true,  message:'Contact already exists'}), 500)
        setTimeout(()=>this.setState({isVisible: false}), 2000)
        this.setState({...initialState})
      }
    else if (!this.state.name.length){
      setTimeout(()=>this.setState({isVisible: true, message:'Fill name field'}), 500)
        setTimeout(()=>this.setState({isVisible: false}), 3000)
        this.setState({...initialState})
    }
    else if (!this.state.number.length){
      setTimeout(()=>this.setState({isVisible: true, message:'Fill number field'}), 500)
        setTimeout(()=>this.setState({isVisible: false}), 3000)
        this.setState({...initialState})
    }
    else {
      
      this.props.onAddForm(this.state)
      this.setState({...initialState})
      }
    }

    render() {
        return (
          <>
          <Notification isVisible={this.state.isVisible} message = {this.state.message}/>
          <CSSTransition
           in={true}
           appear={true}
           classNames={styles}
           timeout={500}
           unmountOnExit> 
           <Logo/>
           
           </CSSTransition>
            {this.props.error && <h2>ERROR.</h2>} 
           {this.props.isLoadingContacts && <h2>Loading...</h2>}
          <ContactEditorElement name={this.state.name} number={this.state.number} 
          onChange={this.handelSubmit} onHandelChange={this.onHandelChange}/>
           </>
        )
    }
}

const mapPropsToState = state => ({
  items: contactsSelectors.getItems(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: state.contacts.error,
})

const mapDispatchToProps = {
  onAddForm: addContactOperation,
  getContacts: getAllContactsOperation,
}


export default  connect(mapPropsToState, mapDispatchToProps)(ContactEditor)






////////////////////////////////////////////////////////////////


/*import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'
import Logo from '../logo/Logo'
import styles from '../contactEditor/ContactEditor.module.css'
import contactsAction from '../../redux/contacts/contactsAction'

const initialState = {
  name: '',
  number: '',
}

const ContactEditor = ({onAddForm}) => {

const[state, setState] = useState({...initialState})  

    const onHandelChange = (e) => {
        const {name} = e.target
        setState({...state, [name]: e.target.value})
      }
      
  const  handelSubmit = (e) => {
    e.preventDefault();
    
   onAddForm({name: state.name, number: state.number})
    setState({...initialState})
    }
    
  
        return (
          <div className={styles.phoneBook}>
          <CSSTransition
           in={true}
           appear={true}
           classNames={styles}
           timeout={500}
           unmountOnExit
           > 
           <Logo/>
           </CSSTransition>
          <ContactEditorElement name={state.name} number={state.number} 
          onChange={handelSubmit} onHandelChange={onHandelChange}/>
            </div>   
        )
    
}*/

/*const mapDispatchToProps = dispatch => {
  return {
    onAddForm: (name, number) => dispatch(contactsAction.addContact(name, number))
  }

}*/




