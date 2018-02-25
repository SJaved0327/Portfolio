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

	</main>
)

export default Main; 