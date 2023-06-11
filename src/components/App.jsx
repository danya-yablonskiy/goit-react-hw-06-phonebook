import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilterAction,
  deleteContactAction,
  setContactsAction,
} from 'store/actions';

export const App = () => {
  const { contacts, filter } = useSelector(state => state);
  console.log(contacts);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = (name, number) => {
    const duplicate = contacts.find(contact => contact.name === name);
    if (duplicate) {
      alert('Error!');
      return;
    }
    dispatch(setContactsAction(contacts, name, number));
  };

  const changeFilter = e => {
    dispatch(changeFilterAction(e.currentTarget.value));
  };

  const deleteContact = id => {
    const filterId = contacts.filter(contact => contact.id !== id);
    dispatch(deleteContactAction(filterId));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList
        onClick={deleteContact}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
};
