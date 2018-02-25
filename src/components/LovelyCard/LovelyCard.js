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
	}
}

const LovelyCard = () => (
	<div className="card">
    <div className="card-content center">
      <p>The quickest way to connect to someone is to learn <strong>3 lovely things</strong> about them. Pick a tab, any tab!</p>
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
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>code</i>
	      			<h5>FullStack Web Development</h5>
	      			<p>Certification, Rutgers '18</p>
	      		</div>
      			<p style={style.justify}>
      			To push myself personally and professionally, I completed a 6-month intensive certification program focusing on: JavaScript, jQuery, Node.js, Express, HTML5, CSS3, Bootstrap, Handlebars, React JS, API/JSON, MySQL, Sequelize, Firebase, MongoDB, Mongoose.
      			</p>
      		</div>

      		<div className="col s4 center">
      			<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>child_care</i>
	      			<h5>Child Development</h5>
	      			<p>BA, Tufts University '14</p>
	      		</div>
      			<p style={style.justify}>
      			The study of life span development has always fascinated me. My coursework focused on inequities in U.S. education through the lens of language acquisition, bilingual education, and public policy.
      			</p>
      		</div>

      		<div className="col s4 center">
	      		<div style={style.lovelyBox}>
	      			<i class="material-icons" style={style.lovelyIcons}>palette</i>
	      			<h5>Art History</h5>
	      			<p>BA, Tufts University '14</p>
      			</div>
      			<p style={style.justify}>
      			I am a medievalist at heart and studied Islamic portable objects and manuscripts. Many pieces served as the AR of their times, using imagery or space to inform the user's overall experience or interpretation of their surroundings. 
      			</p>
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