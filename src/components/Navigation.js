import React from 'react';
import Link from 'gatsby-link';
import styles from '../styles/navigation.module.css';

const Navigation = ({ navItems, activePage }) => (
  <ul className={styles.navigation}>
    {navItems.map(item => {
      const isActive = activePage === `/${item.node.slug}`;
      return (
        <li
          key={item.node.id}
          className={`${styles.navigation__item} ${
            isActive ? [styles.navigation__item___active] : ''
          }`}
        >
          <Link to={item.node.slug}>{item.node.title}</Link>
        </li>
      );
    })}
  </ul>
);

export default Navigation;
