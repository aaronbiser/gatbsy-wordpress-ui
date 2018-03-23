import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = ({ title }) => {
  const date = new Date();

  return (
    <div className={styles.footer}>
      <p>{`Copyright ${date.getFullYear()} ${title}`}</p>
      <p>Super smooth tagline</p>
    </div>
  );
};

export default Footer;
