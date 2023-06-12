import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Button, List } from './ContactList.styled';
import { deleteContacts } from 'store/contactsSlice';
export const ContactList = () => {
  const {
    contacts: { contacts },
    filter,
  } = useSelector(state => state);

  const dispatch = useDispatch();
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {filterName.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
