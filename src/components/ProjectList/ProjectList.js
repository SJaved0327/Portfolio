import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";


const ProjectList = () => (

	<section>

		<h4 className="center">Applications Built</h4>
		<br />

  	<div className="row">
  		
  		<div className="col s12 m6">

  			{/* Project 1 */}
	      <div className="card">	      	
	        <div className="card-image">
	          <img src="./ScreenShots/BKPortal_Evaluations.png
	          " alt="Project 1" />
	          <Link to="/bright-kids-portal-v2"><a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-2 pulse"><i className="material-icons">chevron_right</i></a></Link>
	        </div>

	        <div className="card-content">
	          <p>A regimagining of Bright Kids Portal, a tool families use to engage student progress data online.</p>
	        </div>
	      </div>

	    </div>

	   	<div className="col s12 m6">

	   		{/* Project 2 */}
	      <div className="card">	      	
	        <div className="card-image">
	          <img src="./ScreenShots/Trivia_Overview.png
	          " alt="Project 2" />
	          <Link to="/trivia-and-the-city"><a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-2 pulse"><i className="material-icons">chevron_right</i></a></Link>
	        </div>

	        <div className="card-content">
	          <p>A trivia game that will put your Sex & The City knowledge to the test.</p>
	        </div>
	      </div>

      </div>

	  </div>

	  <div className="row">
	  	<div className="col s12 m6">

		    {/* Project 3 */}
		    <div className="card">
		      <div className="card-image">
		        <img src="./ScreenShots/DragRace_Overview.png
		        " alt="Project 3" />
		        <Link to="/drag-guessing-game"><a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-2 pulse"><i className="material-icons">chevron_right</i></a></Link>
		      </div>

		      <div className="card-content">
		        <p>A number-based guessing game with a theme that's just sickening!</p>
		      </div>
		    </div>

	    </div>

	    <div className="col s12 m6">

		  	{/* Project 4 */}
		    <div className="card">
		      <div className="card-image">
		        <img src="./ScreenShots/Queries_Articles.png
		        " alt="Project 4" />
		        <Link to="/queer-queries"><a className="btn-floating halfway-fab waves-effect waves-light cyan lighten-2 pulse"><i className="material-icons">chevron_right</i></a></Link>
		      </div>

		      <div className="card-content">
		        <p>A simple webscraping tool to consolidate Autostraddle's #epic articles.</p>
		      </div>
		    </div>

		  </div>

  	</div>

  </section>

)

export default ProjectList; 