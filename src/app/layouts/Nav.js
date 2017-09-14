import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <nav className={styles.m_nav}>
        <Link to="/">Home231</Link>
        <Link to="/detail/123">Home231</Link>
      </nav>
    );
  }
}

export default Nav;
