
import React from 'react'
import ContactList from './contactList/ContactList'
import Filter from './filter/Filter'
import ContactEditor from './contactEditor/ContactEditor'
import { CSSTransition } from 'react-transition-group'
import styles from './App.module.css'



 
  const App = () => {


    return (
      <div className='layout'>
      <ContactEditor/>

      <CSSTransition
      in={true}
      timeout={3000}
      classNames={styles}
      unmountOnExit>
        <Filter/>
      </CSSTransition>
      
      <ContactList/>
      
      </div>
    )

}

export default App




///////////////////////////////////////////////////







/*import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import ContactList from './contactList/ContactList'
import Filter from './filter/Filter'
import ContactEditor from './contactEditor/ContactEditor'

export default class App extends Component {
  state = {
    contacts: [],
    filter:'', 
  }
  
  componentDidMount() {
    if (localStorage.getItem('contacts')) 
    {this.setState({contacts: JSON.parse(localStorage.getItem('contacts'))})}
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))}
    }
    

  setFilter = (e) => {
    this.setState({filter: e.target.value})
  }
  filterContact =() => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
  
 
  addContact = (name, number) => {
    const searchName = this.state.contacts.map((contact) => contact.name).includes(name)
    if(searchName) {alert(`${name} is already in contacts`)} 
    else {
    const contact = {
      id: uuidv4(),
      name,
      number
    }
    this.setState(prevState => {
      return{ contacts: [...prevState.contacts, contact]}})
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact=> contact.id !== id) 
      }})
  }
  render() {
    const filtredContact = this.filterContact();
    return (
      <>
      <ContactEditor onAddForm={this.addContact}/>
      {this.state.contacts.length && <Filter value={this.state.filter} onChange={this.setFilter}/>}
     {this.state.contacts.length && <ContactList contacts= {filtredContact} onDelete={this.deleteContact}/> }
      
      </>
    )
}
}
*/