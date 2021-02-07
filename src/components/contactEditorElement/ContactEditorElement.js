import React from 'react'
import styles from './ContactEditorElement.module.css'


const ContactEditorElement = ({name, number, onChange, onHandelChange}) => {

  
      return (
     
        <div className={styles.contact}>         
      <form className={styles.form} onSubmit={onChange}>
        <label> 
        <input type='text' name='name' value={name } placeholder='Name'
        onChange={onHandelChange}/> 
          </label>
          <label> 
         <input type='tel' name='number' value={number }  placeholder='Number'
        onChange={onHandelChange}/> 
        </label>
        <button type="submit">Add contact </button>
      </form>   
            </div>
       

    ) 
       
}
export default  ContactEditorElement

