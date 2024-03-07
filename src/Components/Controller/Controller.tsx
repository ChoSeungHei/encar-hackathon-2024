import React from 'react';
import './Controller.scss';

function Controller() {
	return(
		<div className="controller_box">
		<div className="arrow_box">
			<button id="origin" className="controller_btn arrow origin">Interior View</button>
			<button id="left" className="controller_btn arrow left">Left</button>
			<button id="right" className="controller_btn arrow right">Right</button>
			<button id="up" className="controller_btn arrow up">Up</button>
			<button id="down" className="controller_btn arrow down">Down</button>
		</div>
			<button className="btn_open arrow">Glossary</button>
		</div>
	);
}

export default Controller;