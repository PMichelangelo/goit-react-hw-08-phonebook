import { useState, useId } from 'react';

import styles from './loginForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
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
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
