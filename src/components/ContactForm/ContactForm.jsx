import styles from './ContactForm.module.css';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { useId } from 'react';
import * as Yup from 'yup';

const INITIAL_VALUES = {
  id: '',
  name: '',
  number: '',
};

const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ' -]*$/;
const phoneNumberRegex = /^\+?(\(\d{3}\)|\d{3})[-\s\.]?\d{3}[-\s\.]?\d{4,6}$/;

const addContactShape = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(nameRegex, 'Invalid name')
    .min(3, 'Name must be at least 3 characters')
    .max(50, "Name can't be longer than 50 characters"),
  number: Yup.string()
    .required('Number is required')
    .matches(phoneNumberRegex, 'Invalid phone number')
    .min(3, 'Number must be at least 3 characters')
    .max(50, "Number can't be longer than 50 characters"),
});

const ContactForm = () => {
  const nameInputId = useId();
  const numberInputId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const contact = {
      ...values,
      id: nanoid(),
    };

    const action = addContact(contact);
    dispatch(action);
    actions.resetForm();
  };
  return (
    <div className={styles.divform}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={addContactShape}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.formname}>
            <span>Name</span>
            <Field className={styles.input} name="name" type="text" id={nameInputId} />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </label>
          <label className={styles.formname}>
            <span>Number</span>
            <Field className={styles.input} name="number" type="text" />
            <ErrorMessage
              name="number"
              component="span"
              className={styles.error}
            />
          </label>
          <button type="submit" className={styles.addbtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
