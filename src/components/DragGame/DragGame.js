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

  			 <div className="card-content center" style={{ background: '#d90141' }}>
		      <h5>Drag Game</h5>
			   </div>
			   <div className="divider"></div>

			    <div className="card-content">

			   		<div className="row">
			   			<div className="col s1 m1">
			   			</div>
			   			<div className="col s10 m10">

			   				<p>A number-based guessing game with a theme that's just sickening!</p><br />
			   				<p>This simple web application is built with jQuery. The game begins by displaying the target number of points that the player must match to win the game. There are four style items below, each worth a randomized amount of points. The player must select style items to accrue the right number of points needed to win the game.</p><br />
			   				<p>Win or lose, the game resets and the player can continue playing. Easter eggs such as different Drag Race soundbites will play as the user progresses through the game.</p>
			   				<br />
			   				<p><a style={{ color: '#d90141' }} href="https://sjaved0327.github.io/drag-game/" target="_blank" className="center cyan-text">Deployed on Git Pages, check it out!</a></p>
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