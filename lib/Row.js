'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDefaultRowStyles = function setDefaultRowStyles(maxWidth) {
  return (0, _glamor.css)(_extends({}, maxWidth ? { maxWidth: maxWidth } : { maxWidth: '64rem' }, {
    width: '100%',
    margin: '0 auto',
    display: 'table'
  }));
};

var Row = function Row(_ref) {
  var maxWidth = _ref.maxWidth,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    _extends({ className: 'row' }, setDefaultRowStyles(maxWidth)),
    children
  );
};

exports.default = Row;