import React from 'react';

export default class Button extends React.Component {
	constructor() {
		super();
		
		this.displayName = 'Button';
	}

	render () {
		return (
			<div className="display-button">
				<button className="button">Click me</button>
			</div>
		);
	}
}
