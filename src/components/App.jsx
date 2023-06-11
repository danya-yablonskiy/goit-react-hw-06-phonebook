// import { useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setContacts } from 'store/contactsSlice';
import { setFilter } from 'store/filterSlice';

export const App = () => {
  const {
    contacts: { contacts },
    filter,
  } = useSelector(state => state);

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
    dispatch(setContacts({ id: nanoid(), name, number }));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const deleteContact = id => {
    const filterId = contacts.filter(contact => contact.id !== id);
    dispatch(deleteContact(filterId));
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
