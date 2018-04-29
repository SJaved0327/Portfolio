// react
import React, { Component } from 'react';
// react-router
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
// host_pages

// pages

// components

//assets
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

class EduCard extends Component {

	state = {
		names: [
			{
				name: "webDev",
				icon: "code",
				title: "Certification, Rutgers '18",
				text: "Full-Stack Web Development: To push myself personally and professionally, I completed a 6-month intensive certification program focusing on: JavaScript, jQuery, Node.js, Express, HTML5, CSS3, Bootstrap, Handlebars, React JS, API/JSON, MySQL, Sequelize, Firebase, MongoDB, Mongoose, and more."
			},
			{
				name: "childDev",
				icon: "child_care",
				title: "BA, Tufts University '14",
				text: "Child Development: The study of life span development has always fascinated me. My coursework focused on inequities in U.S. education through the lens of language acquisition, bilingual education, and public policy."
			},
			{
				name: "artHis",
				icon: "palette",
				title: "BA, Tufts University '14",
				text: "Art History: I am a medievalist at heart and studied Islamic portable objects and manuscripts. Many pieces could be considered early iterations of AR as they destabilize the eye and break the bonds of their own materiality. Shout out to muqarnas for making the finite seem infinite!"
		}],
		chosenText: "To push myself personally and professionally, I completed a 6-month intensive certification program focusing on: JavaScript, jQuery, Node.js, Express, HTML5, CSS3, Bootstrap, Handlebars, React JS, API/JSON, MySQL, Sequelize, Firebase, MongoDB, Mongoose, and more."
	};

	handleValueClick = index => {

		console.log(this.state.names[index]);

		const chosenText = this.state.names[index].text;

		this.setState({
			chosenText: chosenText
		})

	};

	render() {

		return (

			<div className="col s8 m8">

				<div className="row">

					{this.state.names.map((name, index) => (
						<div className="col s12 m4">
							<div value={index} name={name.name} className="valign-wrapper hoverIcons" onClick={() => this.handleValueClick(index)}><i className="material-icons" style={style.lovelyIcons}>{name.icon}</i><strong><p style={{marginLeft: '5px'}}> {name.title}</p></strong></div>
						</div>
					))}

				</div>
				<div className="row">

					<p>{this.state.chosenText}</p>

				</div>

			</div>

		);
	}
}

export default EduCard; 