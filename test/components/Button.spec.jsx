import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Button from '../../src/components/Button.jsx';

describe('Given a Button component', function () {
	describe('when the component is rendered', function () {
		it('should render a button element', function () {
			var button = new Button();

			console.log(button.render());

			var container = Button.render();

			expect(container).to.exist;
		});
	});
});