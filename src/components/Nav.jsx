import React from 'react';

function renderButton(show, clickHandler) {
  return show && (
    <button className= "btn-flat waves-effect waves-light btn" onClick={clickHandler}>
      <i className="material-icons">chevron_left</i>
      Home
    </button>
  );
}

const Nav = ({ showHomeButton, goHome }) => (
  <nav className="Nav">
    <div className="nav-wrapper orange lighten-2">
    </div>
  </nav>
);

export default Nav;
