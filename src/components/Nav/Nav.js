import React from 'react';

const style = {
	logo: {
		marginLeft: '25px'
	}
}

const Nav = () => (
	
	<nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo" style={style.logo}>sjj</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

);

export default Nav; 