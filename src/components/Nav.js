import React from 'react';

const Nav = props => {
  return (
    <nav>
      <ul>
        {props.navItems.map(navItem => (
          <li>
            <a href={navItem.link}>{navItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
