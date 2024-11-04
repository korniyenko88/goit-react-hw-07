import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts, selectError, selectLoading } from '../../redux/selectors';
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts); 
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => handleDeleteContact(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;