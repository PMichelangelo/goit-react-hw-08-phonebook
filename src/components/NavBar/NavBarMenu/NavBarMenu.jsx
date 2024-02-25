import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectAuthIsLogin } from '../../../redux/auth/auth-selectors';

import menuItems from './menuItems';

import styles from './navBarMenu.module.css';

const NavBarMenu = () => {
  const isLogin = useSelector(selectAuthIsLogin);

  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;

  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={styles.navLink}>
        {text}
      </NavLink>
    </li>
  ));

  /* */
  return <ul className={styles.navBarMenu}>{elements}</ul>;
};

export default NavBarMenu;
