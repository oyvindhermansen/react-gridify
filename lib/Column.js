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
    key: 'largify',
    value: function largify(gridSize) {

      var styles = { width: '100%' };

      switch (gridSize) {
        case "1":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '100%',
            float: 'left'
          }));
        case "2":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '50%',
            float: 'left'
          }));
        case "3":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '33.33332%',
            float: 'left'
          }));
        case "4":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '25%',
            float: 'left'
          }));
        case "5":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '20%',
            float: 'left'
          }));
        case "6":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '16.666666666667%',
            float: 'left'
          }));
        case "7":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '14.28571428%',
            float: 'left'
          }));
        case "8":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '12.5%',
            float: 'left'
          }));
        case "9":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '11.111111111%',
            float: 'left'
          }));
        case "10":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '10%',
            float: 'left'
          }));
        case "11":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '9.0909090909%',
            float: 'left'
          }));
        case "12":
          return (0, _glamor.css)(_extends({}, styles, {
            width: '8.33333333%',
            float: 'left'
          }));
        default:
          return (0, _glamor.css)(styles);
      }
    }
  }, {
    key: 'mediumify',
    value: function mediumify(gridSize) {
      switch (gridSize) {
        case "1":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '100%'
            }
          });
        case "2":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '50%',
              float: 'left'
            }
          });
        case "3":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '33.33332%',
              float: 'left'
            }
          });
        case "4":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '25%',
              float: 'left'
            }
          });
        case "5":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '20%',
              float: 'left'
            }
          });
        case "6":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '16.666666666667%',
              float: 'left'
            }
          });
        case "7":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '14.28571428%',
              float: 'left'
            }
          });
        case "8":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '12.5%',
              float: 'left'
            }
          });
        case "9":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '11.111111111%',
              float: 'left'
            }
          });
        case "10":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '10%',
              float: 'left'
            }
          });
        case "11":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '9.0909090909%',
              float: 'left'
            }
          });
        case "12":
          return (0, _glamor.css)({
            '@media(max-width: 900px)': {
              width: '8.33333333%',
              float: 'left'
            }
          });
        default:
          return (0, _glamor.css)({ width: '100%' });
      }
    }
  }, {
    key: 'smallify',
    value: function smallify(gridSize) {
      /*
      let currentType = ''
      if (type === 'medium') {
        currentType = '@media(max-width: 900px)'
      } else if (type === 'small') {
        currentType = '@media(max-width: 600px)'
      }
      */

      switch (gridSize) {
        case "1":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '100%'
            }
          });
        case "2":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '50%',
              float: 'left'
            }
          });
        case "3":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '33.33332%',
              float: 'left'
            }
          });
        case "4":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '25%',
              float: 'left'
            }
          });
        case "5":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '20%',
              float: 'left'
            }
          });
        case "6":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '16.666666666667%',
              float: 'left'
            }
          });
        case "7":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '14.28571428%',
              float: 'left'
            }
          });
        case "8":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '12.5%',
              float: 'left'
            }
          });
        case "9":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '11.111111111%',
              float: 'left'
            }
          });
        case "10":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '10%',
              float: 'left'
            }
          });
        case "11":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '9.0909090909%',
              float: 'left'
            }
          });
        case "12":
          return (0, _glamor.css)({
            '@media(max-width: 600px)': {
              width: '8.33333333%',
              float: 'left'
            }
          });
        default:
          return (0, _glamor.css)({ width: '100%' });
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
          children = _props.children,
          className = _props.className;


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