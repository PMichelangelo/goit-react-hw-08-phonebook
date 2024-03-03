import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import BGVideo from 'components/BGVideo/BGVideo';

import styles from './phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={styles.phonebookWrapper}>
      <BGVideo />
      <div className={styles.formContainer}>
        <PhonebookForm />
        <div className={styles.listWrapper}>
          <h1>Contacts</h1>
          <Filter />
          <ContactsList />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
