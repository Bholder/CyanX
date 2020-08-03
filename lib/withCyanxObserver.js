"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _contextManager = _interopRequireDefault(require("./contextManager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 赋予组件为全局观察者-HOC
 * @param {*} Component 
 * @param {*} contextName 
 * @param {*} defaultValue 
 */
var withCyanxObserver = function withCyanxObserver(Component, contextName, defaultValue) {
  return function (props) {
    var CyanxContextProvider = _contextManager["default"].createContext(contextName, defaultValue);

    return /*#__PURE__*/_react["default"].createElement(CyanxContextProvider, null, /*#__PURE__*/_react["default"].createElement(Component, props));
  };
};

var _default = withCyanxObserver;
exports["default"] = _default;