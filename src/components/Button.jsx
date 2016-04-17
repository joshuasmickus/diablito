import React from 'react';

var button = React.createClass({
	displayName: 'Button',

	render: function () {
		return (
			<div className="display-button">
				<button className="button">Click me</button>
			</div>
		);
	}
});

export default button;
