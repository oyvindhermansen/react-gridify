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
      if (size > 12) {
        throw new Error('Expected a number between 1 and 12.');
      } else {
        return 100 / 12 * size;
      }
    }
  }, {
    key: 'setStandardStyles',
    value: function setStandardStyles(columnNumber) {
      var centered = this.props.centered;

      if (centered) {
        return {
          width: this.calculateWidth(columnNumber) + '%',
          margin: '0 auto',
          position: 'relative'
        };
      } else {
        return {
          width: this.calculateWidth(columnNumber) + '%',
          float: 'left',
          position: 'relative'
        };
      }
    }
  }, {
    key: 'largify',
    value: function largify(columnNumber) {
      var styles = {};

      if (columnNumber) {
        styles = this.setStandardStyles(columnNumber);
      } else {
        styles = {
          width: '100%'
        };
      }

      return (0, _glamor.css)(styles);
    }
  }, {
    key: 'mediumify',
    value: function mediumify(columnNumber) {
      if (columnNumber) {
        return (0, _glamor.css)({
          '@media(max-width: 64rem)': this.setStandardStyles(columnNumber)
        });
      }
    }
  }, {
    key: 'smallify',
    value: function smallify(columnNumber) {
      if (columnNumber) {
        return (0, _glamor.css)({
          '@media(max-width: 40rem)': this.setStandardStyles(columnNumber)
        });
      }
    }
  }, {
    key: 'extraSmallify',
    value: function extraSmallify(columnNumber) {
      if (columnNumber) {
        return (0, _glamor.css)({
          '@media(max-width: 25rem)': this.setStandardStyles(columnNumber)
        });
      }
    }
  }, {
    key: 'paddify',
    value: function paddify(padding) {
      var p = (0, _glamor.css)({
        boxSizing: 'border-box',
        paddingLeft: '1rem',
        paddingRight: '1rem'
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
          xSmall = _props.xSmall,
          small = _props.small,
          medium = _props.medium,
          large = _props.large,
          centered = _props.centered,
          padding = _props.padding,
          className = _props.className,
          children = _props.children;


      var additionalClassNames = className ? className : '';

      return _react2.default.createElement(
        'div',
        _extends({
          className: 'column ' + additionalClassNames
        }, this.largify(large), this.mediumify(medium), this.smallify(small), this.extraSmallify(xSmall), this.paddify(padding)),
        children
      );
    }
  }]);

  return Column;
}(_react.Component);

exports.default = Column;


Column.PropTypes = {
  xSmall: _react2.default.PropTypes.string,
  small: _react2.default.PropTypes.string,
  medium: _react2.default.PropTypes.string,
  large: _react2.default.PropTypes.string,
  padding: _react2.default.PropTypes.string
};