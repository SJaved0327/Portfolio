import React from 'react';

const style = {
  icons: {
    fontSize: '2em'
  }
}

const Footer = () => (
	<footer className="page-footer red lighten-5">
	  <div className="container">
	    <div className="row">
	      <div className="col l6 s12">
	        <h5 className="grey-text text-darken-2">Footer Content</h5>
	        <p className="grey-text text-darken-2">You can use rows and columns here to organize your footer content.</p>
	      </div>
	      <div className="col l4 offset-l2 s12">
	        <h5 className="red-text text-lighten-1">Contact</h5>
	        <ul>
	          <li><a href="https://github.com/SJaved0327" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-github-alt"></i></span></div></a></li>
		        <li><a href="https://www.linkedin.com/in/sarajaved/" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-linkedin-in"></i></span></div></a></li>
		        <li><a href="https://www.instagram.com/heyheysarajay/" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-instagram"></i></span></div></a></li>
		        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><div style={style.icons}><span className="grey-text text-darken-2"><i class="fab fa-twitter"></i></span></div></a></li>
	        </ul>
	      </div>
	    </div>
	  </div>
	  <div className="footer-copyright">
	  </div>
	</footer>
)

export default Footer;