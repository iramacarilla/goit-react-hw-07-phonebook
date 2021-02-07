import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer'

const defaultMiddleware = getDefaultMiddleware();
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [...defaultMiddleware]
});

export default store;




/*import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactsReducer from './contacts/contactsReducer'



const rootReducer = combineReducers({
    contacts: contactsReducer,
})
const store = createStore(rootReducer, composeWithDevTools())

export default store;

/* const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [isVisible, setIsVisible] = useState(false);*/