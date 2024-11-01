import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <div className={styles.iteminfo}>
        <span className={styles.name}>🙍‍♂️{name}</span>
        <span>📞{number}</span>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={styles.btn} type="button">
        Delate
      </button>
    </li>
  );
};

export default Contact;
