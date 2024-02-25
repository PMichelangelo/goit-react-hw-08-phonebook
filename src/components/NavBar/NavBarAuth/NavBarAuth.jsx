import { NavLink } from 'react-router-dom';

import styles from './navBarAuth.module.css';

const NavBarAuth = () => {
  return (
    <div className={styles.authWrapper}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavBarAuth;
