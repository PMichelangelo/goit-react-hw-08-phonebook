import { useSelector, useDispatch } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/auth-selectors';

import { logout } from '../../../redux/auth/auth-operations';

import styles from './navBarUser.module.css';

const NavBarUser = () => {
  const { email } = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <div className={styles.wrapper}>
      <p>{email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavBarUser;
