import React, { Component } from 'react';

import LovelyCard from '../../components/LovelyCard'


const style = {
	size: '100px',
	divider: {
		marginBottom: '10px',
		marginTop: '10px'
	},
	h1Heavy: {
		fontWeight: '300'
	},
	h1Thin: {
		fontWeight: '100'
	}
}

const Main = () => (
	<main className="container">
		
		<header>
			<h1 className="center" style={style.h1Thin}><span style={style.h1Heavy}>S</span>ara <span style={style.h1Heavy}>J</span>oAnn <span style={style.h1Heavy}>J</span>aved</h1>
		</header>

		<div className="divider" style={style.divider}></div>

		<div className="section">
			<LovelyCard />
		</div>


		<div className="divider" style={style.divider}></div>

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