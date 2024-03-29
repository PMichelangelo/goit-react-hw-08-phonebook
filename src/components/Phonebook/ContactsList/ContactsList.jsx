import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import {
  fetchContacts,
  deleteContact,
} from '../../../redux/contacts/contacts-operations';

import {
  selectFilteredContacts,
  selectContacts,
} from '../../../redux/contacts/contact-selectors';

import styles from './contactsList.module.css';
import user from '../../../icons/user.svg';

const ContactsList = () => {
  const items = useSelector(selectFilteredContacts);
  const { isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={styles.listItem}>
      <img src={user} alt="" className={styles.user} />
      {name}: {number}{' '}
      <button
        type="button"
        className={styles.deleteContactBtn}
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));
  return (
    <SimpleBar style={{ maxHeight: 300 }} autoHide = {true} className={styles.customScrollbar}>
    <ul className={styles.contactsList}>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {elements}
    </ul>
    </SimpleBar>

  );
};

export default ContactsList;
