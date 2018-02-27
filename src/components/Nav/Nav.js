import React from 'react';

const style = {
	margin: {
		marginRight: '25px',
    marginLeft: '25px'
	},
  icons: {
    fontSize: '2em'
  }
}

const Nav = () => (
	 <nav>
    <div className="nav-wrapper" style={style.margin}>
      <a href="/" className="brand-logo left" style={style.logo}>SARAJAVED.</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><i class="fab fa-github-alt"></i></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><i class="fab fa-linkedin-in"></i></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><i class="fab fa-instagram"></i></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><i class="fab fa-twitter"></i></div></a></li>
      </ul>
    </div>
  </nav>
);

export default Nav; 