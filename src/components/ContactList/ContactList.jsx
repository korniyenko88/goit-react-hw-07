import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.name);

  const selectContacts = contacts.filter(
    cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()) ||
      cont.number.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={styles.list}>
      {selectContacts.map(contact => (
        <Contact key={contact.id} data={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
