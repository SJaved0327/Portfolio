import React from 'react';

const style = {
	margin: {
		marginRight: '25px',
    marginLeft: '25px'
	},
  icons: {
    fontSize: '2em'
  },
  logo: {
    width: '200px',
    textAlign: 'justify'
  }
}

const Nav = () => (
	 <nav className="white z-depth-0">
    <div style={style.margin}>
      <a href="/" className="brand-logo" style={style.logo}><span className="grey-text text-darken-3">SARA</span><span className="red-text text-lighten-2">JAVED</span></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-github-alt"></i></span></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-linkedin-in"></i></span></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-instagram"></i></span></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-twitter"></i></span></div></a></li>
      </ul>
    </div>
  </nav>
);

export default Nav; 