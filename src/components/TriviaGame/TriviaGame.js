import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const style = {
	divider: {
		marginBottom: '10px',
		marginTop: '10px'
	}
}

const BKPortal = () => (

	<section>

		<Link to="/"><p className="center">back to other things ... </p></Link>
		<br />

  	<div className="row">
  		
  			<div className="card">

  			 <div className="card-content center cyan lighten-2">
		      <h5>Trivia and the City</h5>
			   </div>
			   <div className="divider"></div>

			    <div className="card-content">

			   		<div className="row">
			   			<div className="col s1 m1">
			   			</div>
			   			<div className="col s10 m10">

			   				<p>A trivia game that will put your Sex & The City knowledge to the test.</p><br />
			   				<p>This simple web application is built with jQuery. When the player clicks the start button, the game logic is initiated and a 30-second timer begins. As the play selects their answers, they accrue 1 point for each correct answer chosen. The final score is broken down into Correct, Incorrect, and Unanswered (to account for the player not finishing in time).</p><br />
			   				<p>When the game ends, a different gif is rendered on the page based on the user's score range. I wish to build on this app using the GIPHY API to randomize the final gifs and add a level of unpredictability.</p>
			   				<br />
			   				<p><a href="https://sjaved0327.github.io/TriviaGame/" target="_blank" className="center cyan-text">Deployed on Git Pages, check it out!</a></p>
			   				<br />
			   				<div className="divider" style={style.divider}></div>
					    		<p><i class="fas fa-wrench"></i> jQuery, Bootstrap </p>
					    	<br />
			   				<div className="row" style={style.divider}>
			   					<div className="col s12">
			   						<div className="card-image z-depth-1">
						  				<img src="./ScreenShots/BKPortal_LandingPage_01.png
							          " alt="Project 1" width="400px" />
						        </div>
			   					</div>
			   				</div>
					    	<div className="row" style={style.divider}>
					    		<div className="col s6">
							    	<div className="card-image z-depth-1">
						  				<img src="./ScreenShots/BKPortal_SelectPath.png
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

export default BKPortal; 

















