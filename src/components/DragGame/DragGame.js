import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

const style = {
	divider: {
		marginBottom: '10px',
		marginTop: '10px'
	}
}

const DragGame = () => (

	<section>

		<Link to="/"><p className="center">back to other things ... </p></Link>
		<br />

  	<div className="row">
  		
  			<div className="card">

  			 <div className="card-content center cyan lighten-2">
		      <h5>Drag Game</h5>
			   </div>
			   <div className="divider"></div>

			    <div className="card-content">

			   		<div className="row">
			   			<div className="col s1 m1">
			   			</div>
			   			<div className="col s10 m10">

			   				<p>A number-based guessing game with a theme that's just sickening!</p><br />
			   				<p>This simple web application is built with jQuery. The game begins by displaying the target number of points that the player must match. The player selects style items, each worth a randomized amount of points, to accrue the right number of points needed to win the game. Matching the exact number of Drag Points needed makes you a winner!</p><br />
			   				<p>Win or lose, the game resets and the player can continue playing. Easter eggs such as different Drag Race soundbites will play as the user progresses through the game.</p>
			   				<br />
			   				<p><a href="https://warm-wildwood-27556.herokuapp.com/select_path" target="_blank" className="center cyan-text">Deployed on Heroku, check it out!</a></p>
			   				<br />
			   				<div className="divider" style={style.divider}></div>
					    		<p><i class="fas fa-wrench"></i> jQuery, Bootstrap.</p>
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

export default DragGame; 