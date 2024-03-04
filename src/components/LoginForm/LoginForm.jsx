import { useState, useId } from 'react';
import { LoaderBlock } from 'components/Loader/Loader';

import styles from './LoginForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit, isLoading, error }) => {
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

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;
  return (
    <div>
      <div className={styles.formWrapper}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {isLoading && (
            <span className={styles.loaderContainer}>
              <LoaderBlock />
            </span>
          )}
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
