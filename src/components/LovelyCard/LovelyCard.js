import React, { Component } from 'react';

const style = {
	lovelyIcons: {
		fontSize: '4rem'
	},
	justify: {
		textAlign: 'justify'
	},
	lovelyBox: {
		height: '12rem'
	},
  lovelyCard: {
    backgroundColor: '#ffffff',
    marginTop: '3rem',
    marginBottom: '3rem'
  }
}

const LovelyCard = () => (
	<div className="card" style={style.lovelyCard}>
    <div className="card-content center">
      <h5 id="knowing-title">Knowing me, knowing you.</h5>
    </div>
    <div className="card-tabs">
      <ul className="tabs tabs-fixed-width">
        <li className="tab"><a href="#Interests">Interests</a></li>
        <li className="tab"><a className="active" href="#Education">Education</a></li>
        <li className="tab"><a href="#Work">Work</a></li>
      </ul>
    </div>
    <div className="card-content">
      <div id="Interests">

      	<div className="row">
      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>local_play</i>
	      			<h5>Theatre</h5>
	      		</div>
      			<p style={style.justify}>
      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      			</p>
      		</div>

      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>local_library</i>
	      			<h5>New York Stories</h5>
	      		</div>
      			<p style={style.justify}>
      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      			</p>
      		</div>

      		<div className="col s4 center">
	      		<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>mood_bad</i>
	      			<h5>Catfish</h5>
      			</div>
      			<p style={style.justify}>
      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      			</p>
      		</div>

      	</div>

      </div>

      <div id="Education">

      	<div className="row">
      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>code</i>
	      			<h5>FullStack Web Development</h5>
	      			<p className="lovely-sub-title">Certification, Rutgers '18</p>
	      		</div>
      			<p style={style.justify}>
      			To push myself personally and professionally, I completed a 6-month intensive certification program focusing on: JavaScript, jQuery, Node.js, Express, HTML5, CSS3, Bootstrap, Handlebars, React JS, API/JSON, MySQL, Sequelize, Firebase, MongoDB, Mongoose, and more.
      			</p>
      		</div>

      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>child_care</i>
	      			<h5>Child Development</h5>
	      			<p className="lovely-sub-title">BA, Tufts University '14</p>
	      		</div>
      			<p style={style.justify}>
      			The study of life span development has always fascinated me. My coursework focused on inequities in U.S. education through the lens of language acquisition, bilingual education, and public policy.
      			</p>
      		</div>

      		<div className="col s4 center">
	      		<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>palette</i>
	      			<h5>Art History</h5>
	      			<p className="lovely-sub-title">BA, Tufts University '14</p>
      			</div>
      			<p style={style.justify}>
      			I am a medievalist at heart and studied Islamic portable objects and manuscripts. Many pieces could be considered early iterations of AR as they destabilize the eye and break the bonds of their own materiality. Shout out to muqarnas for making the finite seem infinite!
      			</p>
      		</div>

      	</div>

      </div>

      <div id="Work">

      	<div className="row">
      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>local_florist</i>
	      			<h5>Cultivating Relationships</h5>
	      		</div>
      			<p style={style.justify}>
      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      			</p>
      		</div>

      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>extension</i>
	      			<h5>Problem Solving</h5>
	      		</div>
      			<p style={style.justify}>
      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      			</p>
      		</div>

      		<div className="col s4 center">
	      		<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>attach_money</i>
	      			<h5>Cost Reduction</h5>
      			</div>
      			<p style={style.justify}>
      			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      			</p>
      		</div>

      	</div>

      </div>

    </div>
  </div>

)

export default LovelyCard;