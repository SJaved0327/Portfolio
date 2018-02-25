import React, { Component } from 'react';

import PromoTable from '../../components/PromoTable'

const Main = () => (
	<main className="container">
		
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
	      <div className="card">

	        <div className="card-image">
	          <img src="../../../public/favicon.ico" alt="Project 1" />
	          <span className="card-title">Card Title</span>
	          <a className="btn-floating halfway-fab waves-effect waves-light red pulse"><i className="material-icons">chevron_right</i></a>
	        </div>

	        <div className="card-content">
	          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
	        </div>

	      </div>
	    </div>
	  </div>


	</main>
)

export default Main; 