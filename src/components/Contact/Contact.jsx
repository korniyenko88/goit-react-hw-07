import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.iteminfo}>
        <span className={styles.name}>🙍‍♂️{name}</span>
        <span>📞{number}</span>
      </div>
      <button onClick={onDeleteContact} className={styles.btn} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
