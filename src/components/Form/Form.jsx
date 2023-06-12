import { useState } from 'react';
import { FormStyle } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'store/contactsSlice';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const {
    contacts: { contacts },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();
    const duplicate = contacts.find(contact => contact.name === name);

    if (duplicate) {
      alert('Error!');
      return;
    }

    dispatch(setContacts({ id: nanoid(), name, number }));
    reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={addContact}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </FormStyle>
  );
};
