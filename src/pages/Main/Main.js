import React, { Component } from 'react';

import PromoTable from '../../components/PromoTable'

const style = {
	size: '100px',
	divider: {
		marginBottom: '10px',
		marginTop: '10px'
	},
	lovelyIcons: {
		fontSize: '4rem'
	}
}

const Main = () => (
	<main className="container">
		
		<header>
			<h1 className="center">Sara JoAnn Javed</h1>
		</header>

		<div className="section">
			<div className="card">
		    <div className="card-content center">
		      <p>The quickest way to connect to someone is to learn '3 lovely things' about them. Here are some of mine:</p>
		    </div>
		    <div className="card-tabs">
		      <ul className="tabs tabs-fixed-width">
		        <li className="tab"><a href="#Interests">Interests</a></li>
		        <li className="tab"><a className="active" href="#test5">Education</a></li>
		        <li className="tab"><a href="#test6">Work</a></li>
		      </ul>
		    </div>
		    <div className="card-content grey lighten-4">
		      <div id="Interests">
		      	<div className="row">
		      		<div className="col s4 center">
		      			<i class="material-icons" style={style.lovelyIcons}>code</i>
		      		</div>
		      		<div className="col s4 center">
		      			bb
		      		</div>
		      		<div className="col s4 center">
		      			cc
		      		</div>
		      	</div>
		      </div>
		      <div id="test5">Education</div>
		      <div id="test6">Work</div>
		    </div>
		  </div>
		</div>

		<div className="divider" style={style.divider}></div>

		<PromoTable />

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