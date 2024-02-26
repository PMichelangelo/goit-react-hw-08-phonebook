import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../../redux/contacts/contacts-operations';

import styles from './phonebookForm.module.css';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

const PhonebookForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const dispatch = useDispatch();

  const onAddContact = data => {
    const action = addContact(data);
    dispatch(action);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = nanoid();
  const numberId = nanoid();

  const { name, number } = state;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formWrapper}>
          <label htmlFor={nameId}>Name</label>
          <input
            value={name}
            type="text"
            name="name"
            placeholder="Name"
            className={styles.inputName}
            id={nameId}
            onChange={handleChange}
            required
          />
          <label htmlFor={numberId}>Phone</label>
          <input
            value={number}
            type="tel"
            name="number"
            placeholder="Phone"
            className={styles.inputName}
            id={numberId}
            onChange={handleChange}
            pattern="^[+0-9\-\(\)\s]+$"
            required
          />
          <button type="submit" className={styles.addContactBtn}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhonebookForm;
