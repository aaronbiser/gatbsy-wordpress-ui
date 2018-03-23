import React from 'react';
import Link from 'gatsby-link';
import Navigation from './Navigation';
import styles from '../styles/header.module.css';

const Header = ({ pages, activePage }) => (
  <div className={styles.header}>
    <Link to="/">
      <h2>Header</h2>
    </Link>
    <Navigation navItems={pages} activePage={activePage} />
  </div>
);

export default Header;
