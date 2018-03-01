import React from 'react';

const style = {
	margin: {
		marginRight: '25px',
    marginLeft: '25px',
    marginTop: '10px'
	},
  icons: {
    fontSize: '1.5em'
  },
  logo: {
    width: '200px',
    textAlign: 'justify'
  }
}

const Nav = () => (
	 <nav className="white z-depth-0">
    <div style={style.margin}>
      <a href="/" className="brand-logo" style={style.logo}><img src="../../../images/gray_brand_logo.png" alt="logo of sara javed name" height="75px" /></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="mailto:sara.joann.javed@gmail.com" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="far fa-envelope"></i></span></div></a></li>
        <li><a href="https://github.com/SJaved0327" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-github-alt"></i></span></div></a></li>
        <li><a href="https://www.linkedin.com/in/sarajaved/" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-linkedin-in"></i></span></div></a></li>
        <li><a href="https://www.instagram.com/heyheysarajay/" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-instagram"></i></span></div></a></li>
        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-twitter"></i></span></div></a></li>
      </ul>
    </div>
  </nav>
);

export default Nav; 