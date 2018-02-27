import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LovelyCard from '../../components/LovelyCard'
import ProjectList from '../../components/ProjectList'


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

		<div className="section">
			<Switch>
				<Route exact path="/" component={ProjectList} />
				{/* <Route exact path="/bright-kids-portal-v2" component={ProjectList} /> */}
				{/* <Route exact path="/trivia-and-the-city" component={ProjectList} /> */}
				{/* <Route exact path="/drag-guessing-game" component={ProjectList} /> */}
				{/* <Route exact path="/queer-queries" component={ProjectList} /> */}
			</Switch>
		</div>

	</main>
)

export default Main; 