import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';

import styles from './navBarUser.module.css';

const NavBarUser = () => {
  const { email } = useSelector(selectAuthUser);
  return (
    <div className={styles.wrapper}>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};

export default NavBarUser;
