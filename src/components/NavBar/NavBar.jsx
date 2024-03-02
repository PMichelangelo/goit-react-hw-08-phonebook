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
      <span className={styles.navbarEl}>
        <Link to="/" className={styles.logo}>
          Logo
        </Link>
      </span>
      <span className={styles.navbarEl}>
        <NavBarMenu className={styles.navBarMenu} />
      </span>
      <span className={styles.navbarEl}>
        {isLogin ? (
          <NavBarUser className={styles.navBarUser} />
        ) : (
          <NavBarAuth className={styles.navBarAuth} />
        )}
      </span>
    </nav>
  );
};

export default NavBar;
