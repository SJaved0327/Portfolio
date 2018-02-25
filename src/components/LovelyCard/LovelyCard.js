import React, { Component } from 'react';

const style = {
	lovelyIcons: {
		fontSize: '4rem'
	}
}

const LovelyCard = () => (
	<div className="card">
    <div className="card-content center">
      <p>The quickest way to connect to someone is to learn <strong>3 lovely things</strong> about them. Here are some of mine:</p>
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#Interests">Interests</a></li>
        <li className="tab"><a className="active" href="#Education">Education</a></li>
        <li className="tab"><a href="#Work">Work</a></li>
      </ul>
    </div>
    <div className="card-content pink lighten-5">
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

      <div id="Education">

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

      <div id="Work">

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

    </div>
  </div>

)

export default LovelyCard;