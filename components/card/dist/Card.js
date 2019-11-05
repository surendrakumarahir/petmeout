"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: calc(100% - 20px);\n  margin: -30px auto 0px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,\n    opacity 0.1s ease-out;\n  transition-delay: 0.1s;\n  @media (min-width: 450px) {\n    width: 60%;\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  color: #4d7cfe;\n  margin-bottom: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 500px;\n  background: white;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 20px;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  transition: all 0.3s ease-out;\n  transform: translateZ(0);\n\n  &:hover {\n    box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,\n      rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,\n      rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,\n      rgba(35, 35, 35, 0.05) 0px 64px 64px;\n    transform: translate(0, -4px);\n  }\n\n  &:hover img {\n    box-shadow: rgba(45, 45, 45, 0.02) 0px 2px 2px,\n      rgba(49, 49, 49, 0.02) 0px 4px 4px, rgba(42, 42, 42, 0.02) 0px 8px 8px,\n      rgba(32, 32, 32, 0.02) 0px 16px 16px, rgba(49, 49, 49, 0.02) 0px 32px 32px,\n      rgba(35, 35, 35, 0.02) 0px 64px 64px;\n    transform: translate(0, -2px);\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (_ref) {
  var centered = _ref.centered;
  return centered && "\n    text-align: center;\n\n    @media (min-width: 550px) and (max-width: 768px) {\n      flex: 0 0 calc(50% - 30px);\n    }\n\n    @media (min-width: 850px) {\n      flex: 0 0 calc(50% - 30px);\n    }\n\n    @media (min-width: 1150px) {\n      flex: 0 0 calc(33% - 30px);\n    }\n\n    @media (min-width: 1500px) {\n      flex: 0 0 calc(25% - 30px);\n    }\n\n\n    @media (min-width: 1820px) {\n      flex: 0 0 calc(16.6% - 30px);\n    }\n  ";
});

var Title = _styledComponents.default.h2(_templateObject2());

var Image = _styledComponents.default.img(_templateObject3(), function (_ref2) {
  var centered = _ref2.centered;
  return !centered && "\n    display: inline-block;\n    width: calc(33% - 6px);\n    margin: -30px 0 0 0px;\n    transition: all 0.2s ease-out;\n    @media (min-width: 450px) {\n      width: calc(33% - 6px);\n    }\n  ";
});

var TextWrapper = _styledComponents.default.div(_templateObject4(), function (_ref3) {
  var centered = _ref3.centered;
  return !centered && "\n    display: inline-block;\n  vertical-align: top;\n  margin-left: 15px;\n  width: calc(66% - 7px);\n  ";
});
/**
 * Card is a component that renders a card with a title and image
 * @param  {props} props
 */


var Card = function Card(props) {
  return _react.default.createElement(Wrapper, {
    className: props.className,
    centered: props.centered
  }, _react.default.createElement(Image, {
    src: props.image,
    centered: props.centered
  }), _react.default.createElement(TextWrapper, {
    centered: props.centered
  }, _react.default.createElement(Title, null, props.title), props.text && _react.default.createElement("p", null, props.text), props.children));
};

Card.propTypes = {
  image: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  text: _propTypes.default.string,
  centered: _propTypes.default.bool,
  children: _propTypes.default.object,
  className: _propTypes.default.string
};
Card.defaultProps = {
  title: 'Example'
};
var _default = Card;
exports.default = _default;

//# sourceMappingURL=Card.js.map