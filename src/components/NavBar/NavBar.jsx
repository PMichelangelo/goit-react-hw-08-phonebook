import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBarMenu from './NavBarMenu/NavBarMenu';
import NavBarAuth from './NavBarAuth/NavBarAuth';
import NavBarUser from './NavBarUser/NavBarUser';

import { selectAuthIsLogin } from '../../redux/auth/auth-selectors';

import styles from './navBar.module.css';

const NavBar = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Logo
      </Link>
      <NavBarMenu />
      {isLogin ? <NavBarUser /> : <NavBarAuth />}
    </nav>
  );
};

export default NavBar;
