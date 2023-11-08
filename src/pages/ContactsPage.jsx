
import { Form } from "../components/Form/Form";
import {Contacts} from "../components/Contacts/Contacts";
// import { lazy } from 'react';
// const Cast = lazy(() => import('./Cast/Cast.js'));

// import { useEffect} from "react";
import { Filter } from "../components/Filter/Filter";

import {useSelector, useDispatch} from 'react-redux'

import {addContact, deleteContact, setFilter} from '../redux/contactsReducer.js'
import { selectIsSignIt } from "redux/author.selectors";


export const ContactsPage = () => {
 
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const isLoading = useSelector((state) => state.contacts.contacts.isLoading);
  const filter = useSelector((state) => state.contacts.filter);

  const authorization = useSelector(selectIsSignIt)


  const dispatch = useDispatch();
   
  console.log(contacts);

   

  // useEffect(() => {
  //   if (contacts===null) {
      
  //     dispatch(fetchContacts())
  //   }
    
  // }, [dispatch, contacts])

  
  

  const formSubmitHandle = (data) => {
 
    dispatch(addContact(data))
  

  }



  const filterChangeHandle = data => {
    console.log(data);
    dispatch(setFilter(data))
    
  };

  const onContactDelete = (id) => {
  
    dispatch(deleteContact(id))  
  
  };
  

  
    return (
      (authorization) && (<div
        style={{
          padding: '32px',
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        {/* <p>Phonebook</p> */}
        <Form
          onSubmit={formSubmitHandle}
          contacts={contacts}
        />
        <p style={{
          fontSize: 40,
          color: '#010101',
          marginTop: 24,
          marginBottom: 16,
        }}>Contacts</p>
        <Filter
            filter={filter}
            onChange={filterChangeHandle}
        />

        <Contacts
          contacts={contacts}
          filterName={filter}
          loading={isLoading}
          onContactDelete={onContactDelete}
        />

      </div>)
    );
  
};
