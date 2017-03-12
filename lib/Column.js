'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calculateWidth = function calculateWidth(size) {
  if (size > 12) {
    throw new Error('Expected a number between 1 and 12.');
  } else {
    return 100 / 12 * size;
  }
};

var setCalculatedWidth = function setCalculatedWidth() {
  var columnNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '12';
  return {
    width: calculateWidth(columnNumber) + '%'
  };
};

var setCenteredAndPadding = function setCenteredAndPadding(centered, padding) {
  return (0, _glamor.css)(_extends({
    position: 'relative',
    boxSizing: 'border-box'
  }, centered ? { margin: 'auto' } : { float: 'left' }, padding ? { padding: padding } : { padding: '0.5rem' }));
};

var setLarge = function setLarge(columnNumber) {
  if (columnNumber) {
    return (0, _glamor.css)({
      '@media screen and (min-width: 64rem)': setCalculatedWidth(columnNumber)
    });
  }
};

var setMedium = function setMedium(columnNumber) {
  if (columnNumber) {
    return (0, _glamor.css)({
      '@media screen and (max-width: 64rem) and (min-width: 40rem)': setCalculatedWidth(columnNumber)
    });
  }
};

var setSmall = function setSmall(columnNumber) {
  if (columnNumber) {
    return (0, _glamor.css)({
      '@media screen and (max-width: 40rem) and (min-width: 25rem)': setCalculatedWidth(columnNumber)
    });
  }
};

var setXSmall = function setXSmall(columnNumber) {
  if (columnNumber) {
    return (0, _glamor.css)({
      '@media screen and (max-width: 25rem) and (min-width: 1rem)': setCalculatedWidth(columnNumber)
    });
  }
};

var Column = function Column(_ref) {
  var xSmall = _ref.xSmall,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      centered = _ref.centered,
      padding = _ref.padding,
      className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    _extends({
      className: 'column ' + className
    }, setCenteredAndPadding(centered, padding), setLarge(large), setMedium(medium), setSmall(small), setXSmall(xSmall)),
    children
  );
};

exports.default = Column;