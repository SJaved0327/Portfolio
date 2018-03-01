import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

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
	},
	justify: {
		textAlign: 'justify'
	},
	header: {
		marginBottom: '30px',
		marginTop: '30px'
	},
	LovelyCard: {
		backgroundColor: '#ffebee'
	}
}

const Main = () => (
	<main className="container-fluid">
		
		<div className="row">
			<div className="col s1 m1">
			</div>
			<div className="col s10 m10">
				<header style={style.header}>
				<div className="divider"></div>
					<h4 className="center">FullStack Developer with a passion for</h4>
					<h4 className="center">education, comedy, and subversive media.</h4>
					
				</header>
			</div>
			<div className="col s1 m1">
			</div>
		</div>

		<div className="row" style={style.LovelyCard}>
			<div className="col s2 m2">
			</div>
			<div className="col s8 m8">
				<div className="section">
					<LovelyCard />
				</div>
			</div>
			<div className="col s2 m2">
			</div>
		</div>

		<div className="row">
			<div className="col s1 m1">
			</div>
			<Router>
				<div className="col s10 m10">
					<Switch>
						<Route exact path="/" component={ProjectList} />
						<Route exact path="/bright-kids-portal-v2" component={ProjectList} />
						<Route path="/trivia-and-the-city" component={LovelyCard} />
						<Route exact path="/drag-guessing-game" component={ProjectList} />
						<Route exact path="/queer-queries" component={ProjectList} />
					</Switch>
				</div>
			</Router>
			<div className="col s1 m1">
			</div>
		</div>

	</main>
)

export default Main; 