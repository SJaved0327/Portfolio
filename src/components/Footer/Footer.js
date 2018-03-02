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
	      	<div className="row">
	      		<div className="col l12 s12 center">
	      			<img src="../../../images/gray_brand_logo.png" alt="logo of sara javed name" height="75px" />
	      		</div>
	      	</div>
	      	<div className="row">
	      		<div className="col l6 s6 center">
	      			<img id="headshot" alt="author headshot" src="../../../images/IMG_1928.JPG" height="200px" />
	      		</div>
	      		<div className="col l6 s6 center">
	      			<p className="grey-text text-darken-2">Thanks for visiting!</p>
	      		</div>
	      	</div>
	        
	      </div>
	      <div className="col l4 offset-l2 s12">
	        <h5 className="grey-text text-darken-2">Contact</h5>
	        <ul>
	        	<li><a href="mailto:sara.joann.javed@gmail.com" target="_blank"><span style={style.icons}><i class="far fa-envelope"></i></span> sara.joann.javed@gmail.com</a></li>
	          <li><a href="https://github.com/SJaved0327" target="_blank"><span style={style.icons}><i class="fab fa-github-alt"></i></span> github.com/SJaved0327</a></li>
		        <li><a href="https://www.linkedin.com/in/sarajaved/" target="_blank"><span style={style.icons}><i class="fab fa-linkedin-in"></i></span> linkedin.com/in/sarajaved/</a></li>
		        <li><a href="https://www.instagram.com/heyheysarajay/" target="_blank"><span style={style.icons}><i class="fab fa-instagram"></i></span> instagram.com/heyheysarajay/</a></li>
		        <li><a href="https://twitter.com/heyheysarajay" target="_blank"><span style={style.icons}><i class="fab fa-twitter"></i></span> twitter.com/heyheysarajay</a></li>
	        </ul>
	      </div>
	    </div>
	  </div>
	  <div class="footer-copyright">
      <div class="container grey-text text-darken-2">
      © 2018
      </div>
    </div>
	</footer>
)

export default Footer;