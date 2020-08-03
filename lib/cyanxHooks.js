"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetCyanxDispatch = exports.useGetCyanxState = void 0;

var _react = require("react");

var _contextManager = _interopRequireDefault(require("./contextManager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获取相应cyanxContext的state
 * @param {*} contextName 
 */
var useGetCyanxState = function useGetCyanxState(contextName) {
  var _useContext = (0, _react.useContext)(_contextManager["default"].getContext(contextName)),
      state = _useContext.state;

  return state;
};
/**
 * 获取相应cyanxContext的dispatch
 * @param {*} contextName 
 */


exports.useGetCyanxState = useGetCyanxState;

var useGetCyanxDispatch = function useGetCyanxDispatch(contextName) {
  var _useContext2 = (0, _react.useContext)(_contextManager["default"].getContext(contextName)),
      dispatch = _useContext2.dispatch;

  return dispatch;
};

exports.useGetCyanxDispatch = useGetCyanxDispatch;