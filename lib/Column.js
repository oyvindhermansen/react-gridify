'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'calculateWidth',
    value: function calculateWidth(size) {
      return 100 / size;
    }
  }, {
    key: 'largify',
    value: function largify(gridSize) {
      var styles = {};

      if (gridSize) {
        styles = {
          width: this.calculateWidth(gridSize) + '%',
          float: 'left'
        };
      } else {
        styles = {
          width: '100%'
        };
      }

      return (0, _glamor.css)(styles);
    }
  }, {
    key: 'mediumify',
    value: function mediumify(gridSize) {
      if (gridSize) {
        return (0, _glamor.css)({
          '@media(max-width: 900px)': {
            width: this.calculateWidth(gridSize) + '%',
            float: 'left'
          }
        });
      }
    }
  }, {
    key: 'smallify',
    value: function smallify(gridSize) {
      if (gridSize) {
        return (0, _glamor.css)({
          '@media(max-width: 600px)': {
            width: this.calculateWidth(gridSize) + '%',
            float: 'left'
          }
        });
      }
    }
  }, {
    key: 'paddify',
    value: function paddify(padding) {
      var p = (0, _glamor.css)({
        boxSizing: 'border-box',
        paddingLeft: '5px',
        paddingRight: '5px'
      });
      if (padding) {
        p = (0, _glamor.css)({
          boxSizing: 'border-box',
          paddingLeft: padding,
          paddingRight: padding
        });
      }
      return p;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          small = _props.small,
          medium = _props.medium,
          large = _props.large,
          padding = _props.padding,
          className = _props.className,
          children = _props.children;


      var additionalClassNames = className ? className : '';

      return _react2.default.createElement(
        'div',
        _extends({
          className: 'column ' + additionalClassNames
        }, this.largify(large), this.mediumify(medium), this.smallify(small), this.paddify(padding)),
        children
      );
    }
  }]);

  return Column;
}(_react.Component);

exports.default = Column;