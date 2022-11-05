import { useDispatch, useSelector } from 'react-redux';
import getFilterContacts from 'redux/contacts/selectorC';
import { Ul, Li, Button } from './ContactList.styled';
import * as contactsOperations from 'redux/contacts/contactsOperations';
export function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(getFilterContacts);

  const elements = items.map(({ name, phone, id }) => {
    return (
      <Li key={id}>
        Name :{name} Phone :{phone}
        <Button onClick={() => dispatch(contactsOperations.removeContacts(id))}>
          Delete
        </Button>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}
