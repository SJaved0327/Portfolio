import React from 'react';

const style = {
	logo: {
		marginRight: '25px'
	},
  icons: {
    height: '50px',
    padding: '0px'
  }
}

const Nav = () => (
	 <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right" style={style.logo}>sjj</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav; 