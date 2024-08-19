import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../ui/icons/logo/Logo';

import { navItems } from './data';

import styles from './styles.module.scss';

const NavItems = () => {
  const [active, setActive] = useState(0);

  const setActiveNavItem = (index: number) => {
    setActive(index);
  };
  return (
    <section className={styles.nav}>
      <div>
        <Link to="/" className={styles.logo}>
          <Logo />
          <p>GameStore</p>
        </Link>
      </div>

      <ul className={styles.navItems}>
        {navItems.map(({ id, link, title, Icon }, index) => (
          <li key={id} className={styles.navItem} onClick={() => setActiveNavItem(index)}>
            <Link
              to={`/${link}`}
              key={id}
              className={`${styles.link} ${index === active ? styles.active : ''}`}>
              {<Icon />}
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default NavItems;
