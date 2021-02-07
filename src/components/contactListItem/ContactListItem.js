import React from 'react'

const ContactListItem = ({idx, number, name, id, onDelete}) => {
    return (
        <li>
   <p>{idx+1}.  Name: {name}</p>
   <p>  {number}</p>
   <button type='button' onClick={onDelete} data-id={id}>x</button>
   </li>
    )
}

export default ContactListItem
