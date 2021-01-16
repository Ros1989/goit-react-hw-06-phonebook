import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import SectionBlock from './Section';
import ContactsFilter from './ContactsFilter';

export default function App() {
  return (
    <>
      <SectionBlock title="Phonebook">
        <ContactsForm />
        <ContactsFilter />
        <ContactsList />
      </SectionBlock>
    </>
  );
}
