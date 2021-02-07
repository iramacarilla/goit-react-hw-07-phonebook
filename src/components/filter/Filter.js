import React from 'react'
import {connect} from 'react-redux'
import styles from './Filter.module.css'
import PropTypes from 'prop-types';
import {getFilter} from '../../redux/contacts/contactsAction'
import contactsSelectors from '../../redux/contacts/contactsSelectors'

const Filter = ({items, value, onChange}) => {
    
    return (
        <div>
            {items.length >= 1 && <input className ={styles.search} type='text' value={value} placeholder="Search by name"
             onChange={e => onChange(e.target.value)}/>}
        </div>   )
}
const mapStateToProps = state => ({
    value: contactsSelectors.getValue(state),
    items: contactsSelectors.getItems(state)
})
const mapDispatchToProps = {
    onChange: getFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};