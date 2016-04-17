import Button from '../../src/components/Button.jsx';

describe('Given a Button component', function () {
	describe('when the component is rendered', function () {
		it('should render a button element', function () {
			var button = TestUtils.renderIntoDocument(React.createElement(Button));

			expect(button).to.exist;
		});
	});
});
