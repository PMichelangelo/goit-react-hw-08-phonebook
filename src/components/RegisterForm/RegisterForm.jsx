import { useState, useId } from 'react';

import { LoaderBlock } from 'components/Loader/Loader';

import styles from './RegisterForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit, isLoading, error }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1>Sign in</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          {isLoading && (
            <span className={styles.loaderContainer}>
              <LoaderBlock />
            </span>
          )}
          <div className={styles.wrapper}>
            <label htmlFor={nameId}>Name:</label>
            <input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              id={nameId}
              required
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor={emailId}>Email:</label>
            <input
              value={email}
              onChange={handleChange}
              type="email"
              name="email"
              id={emailId}
              required
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor={passwordId}>Password:</label>
            <input
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              id={passwordId}
              required
            />
          </div>
          {/* {error && <p className={styles.error}>{error}</p>} */}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
