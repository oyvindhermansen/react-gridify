'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _index = require('../lib/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			items: [{ id: 1, text: 'Hello World 1' }, { id: 2, text: 'Hello World 2' }, { id: 3, text: 'Hello World 3' }, { id: 4, text: 'Hello World 4' }, { id: 5, text: 'Hello World 5' }, { id: 6, text: 'Hello World 6' }, { id: 7, text: 'Hello World 7' }, { id: 8, text: 'Hello World 8' }, { id: 9, text: 'Hello World 9' }, { id: 10, text: 'Hello World 10' }, { id: 11, text: 'Hello World 11' }, { id: 12, text: 'Hello World 12' }]
		};
		return _this;
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var defaultStyles = {
				fontFamily: 'sans-serif'
			};

			var styles = {
				padding: '1rem',
				backgroundColor: 'orange',
				marginBottom: '0.5rem'
			};
			return _react2.default.createElement(
				'div',
				{ style: defaultStyles },
				_react2.default.createElement(
					_index.Row,
					null,
					this.state.items.map(function (item, index) {
						return _react2.default.createElement(
							_index.Column,
							{
								className: 'someOtherClass',
								key: item.id,
								xSmall: '12',
								small: '6',
								medium: '4',
								large: '3',
								padding: '10px'
							},
							_react2.default.createElement(
								'div',
								{ style: styles },
								item.text
							)
						);
					})
				),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					_index.Row,
					null,
					_react2.default.createElement(
						_index.Column,
						{ centered: true, small: '12', medium: '10', large: '8' },
						_react2.default.createElement(
							_index.Row,
							null,
							_react2.default.createElement(
								_index.Column,
								{ small: '12' },
								_react2.default.createElement(
									'h1',
									null,
									'This is a title'
								),
								_react2.default.createElement(
									'p',
									null,
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
								),
								_react2.default.createElement(
									'p',
									null,
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
								),
								_react2.default.createElement(
									'p',
									null,
									'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
								)
							)
						)
					)
				),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					_index.Row,
					null,
					_react2.default.createElement(
						_index.Column,
						{ xSmall: '12', small: '8', medium: '6', large: '8' },
						_react2.default.createElement(
							'div',
							{ style: { backgroundColor: 'red', padding: '1rem', marginBottom: '1rem' } },
							'Hello World 1'
						)
					),
					_react2.default.createElement(
						_index.Column,
						{ xSmall: '12', small: '4', medium: '6', large: '4' },
						_react2.default.createElement(
							'div',
							{ style: { backgroundColor: 'red', padding: '1rem', marginBottom: '1rem' } },
							'Hello World 2'
						)
					),
					_react2.default.createElement(
						_index.Column,
						{ xSmall: '12', small: '4', medium: '6', large: '4' },
						_react2.default.createElement(
							'div',
							{ style: { backgroundColor: 'red', padding: '1rem' } },
							'Hello World 3'
						)
					),
					_react2.default.createElement(
						_index.Column,
						{ xSmall: '12', small: '8', medium: '6', large: '8' },
						_react2.default.createElement(
							'div',
							{ style: { backgroundColor: 'red', padding: '1rem' } },
							'Hello World 4'
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

document.addEventListener('DOMContentLoaded', function () {
	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));
});