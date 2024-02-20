import { NavLink } from "react-router-dom";

import styles from "./navBar.module.css"

const NavBar = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to="/">Home Page</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Phonebook</NavLink>
      </li>
    </ul>
  )
}

export default NavBar;
