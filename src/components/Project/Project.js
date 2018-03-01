import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const style = {
	divider: {
		marginBottom: '10px',
		marginTop: '10px'
	}
}

const Project = () => (

	<section>

		<Link to="/"><p className="center">back to other things ... </p></Link>
		<br />

  	<div className="row">
  		
  			<div className="card">

  			 <div className="card-content center cyan lighten-2">
		      <h5>Bright Kids Portal v2</h5>
			   </div>
			   <div className="divider"></div>

			    <div className="card-content">

			   		<div className="row">
			   			<div className="col s1 m1">
			   			</div>
			   			<div className="col s10 m10">

			   				<p>A regimagining of Bright Kids Portal, a tool families use to engage student progress data online. Hence, v2!</p><br />
			   				<p>Bright Kids is a Manhattan-based education company focused on test prep for admissions and achievement exams. Data is at the core of the company's business model, using session reports and assessment results to build customized curricula.  
			   				The problem? The current client-facing application is difficult to navigate, its functionality is buried in the UI, and student data is tortured into pdfs and served statically in a painfully slow manner. I created this application as a solution to the problems that clients most frequently experience.</p>
			   				<br />
			   				<a href="https://warm-wildwood-27556.herokuapp.com/select_path" target="_blank" className="center cyan-text">Deployed on Heroku, check it out!</a>
			   				<br />
					    	<div className="row" style={style.divider}>
					    		<div className="col s6">
							    	<div className="card-image z-depth-1">
						  				<img src="./ScreenShots/BKPortal_Evaluations.png
							          " alt="Project 1" width="400px" />
						        </div>
						      </div>
						      <div className="col s6">
						        <div className="card-image z-depth-1">
						  				<img src="./ScreenShots/BKPortal_Evaluations.png
							          " alt="Project 1" width="400px" />
						        </div>
						      </div>
					    	</div>	
					    	<br />
					    	<div className="divider" style={style.divider}></div>
					    		<p>Technologies used -</p>
					    		<p>React JS, React Router, Node.js, Express, MySQL, Axios, React Charts, and Bootstrap. </p>

			   			</div>
			   			<div className="col s1 m1">
			   			</div>
			   		</div>


	  			</div>

	  		</div>

  	</div>

  	<br />
  	<Link to="/"><p className="center">check out other applications ... </p></Link>
		

  </section>

)

export default Project; 

















