import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts'));
  // });
  // const [filter, setFilter] = useState('');
  const { contacts, filter } = useSelector(state => state);
  console.log(contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const duplicate = contacts.find(contact => contact.name === name);
    if (duplicate) {
      alert('Error!');
      return;
    }
    // setContacts(prev => [...prev, { id: nanoid(), name, number }]);
    dispatch({
      type: 'setContacts',
      // ТУТ ПОМИЛКА!!!
      payload: prev => [...prev, { id: nanoid(), name, number }],
    });
  };

  const changeFilter = e => {
    // setFilter(e.currentTarget.value);
    dispatch({ type: 'setFilter', payload: e.currentTarget.value });
  };

  const deleteContact = id => {
    const filterId = contacts.filter(contact => contact.id !== id);
    // setContacts([...filterId]);
    dispatch({
      type: 'setContacts',
      payload: [...filterId],
    });
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
