import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { FilterContact } from './FormContact/FilterContact/FilterContact';
import { Block } from './App.styled';

export function App() {
  return (
    <>
      <Block>
        <Form />
      </Block>

      <FilterContact />
      <ContactList />
    </>
  );
}
