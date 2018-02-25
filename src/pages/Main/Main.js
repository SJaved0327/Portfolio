import React, { Component } from 'react';

import PromoTable from '../../components/PromoTable'

const style = {
	size: '100px'
}

const Main = () => (
	<main className="container">
		
		<header>
			<h1 className="center">Sara JoAnn Javed</h1>
			<h5 className="center">Thanks for stopping by! Feel free to look around and let me know if you like what you see!</h5>
		</header>

		<div className="section">
			<div className="row">
				<div className="col s3">
					<h3>LEFT</h3>
				</div>
				<div className="col s9">
					<h3>RIGHT</h3>
				</div>
			</div>
		</div>

		<div className="divider"></div>

		<PromoTable />

		<div className="row">
	    <div className="col s12 m6">

	    	{/* Project 1 */}
	      <div className="card">	      	
	        <div className="card-image">
	          <img src="./ScreenShots/BKPortal_Evaluations.png
	          " alt="Project 1" />
	          <a className="btn-floating halfway-fab waves-effect waves-light blue pulse"><i className="material-icons">chevron_right</i></a>
	        </div>

	        <div className="card-content">
	          <p>A regimagining of Bright Kids Portal, a tool families use to engage student progress data online.</p>
	        </div>
	      </div>

	    	{/* Project 2 */}
	      <div className="card">	      	
	        <div className="card-image">
	          <img src="./ScreenShots/Trivia_Overview.png
	          " alt="Project 2" />
	          <a className="btn-floating halfway-fab waves-effect waves-light blue pulse"><i className="material-icons">chevron_right</i></a>
	        </div>

	        <div className="card-content">
	          <p>A trivia game that will put your Sex & The City knowledge to the test.</p>
	        </div>
	      </div>

	      {/* Project 3 */}
	      <div className="card">
	        <div className="card-image">
	          <img src="./ScreenShots/DragRace_Overview.png
	          " alt="Project 3" />
	          <a className="btn-floating halfway-fab waves-effect waves-light blue pulse"><i className="material-icons">chevron_right</i></a>
	        </div>

	        <div className="card-content">
	          <p>A number-based guessing game with a theme that's just sickening!</p>
	        </div>
	      </div>

	    	{/* Project 4 */}
	      <div className="card">
	        <div className="card-image">
	          <img src="./ScreenShots/Queries_Articles.png
	          " alt="Project 4" />
	          <a className="btn-floating halfway-fab waves-effect waves-light blue pulse"><i className="material-icons">chevron_right</i></a>
	        </div>

	        <div className="card-content">
	          <p>A simple webscraping tool to consolidate Autostraddle's #epic articles.</p>
	        </div>
	      </div>

	    </div>
	  </div>


	</main>
)

export default Main; 