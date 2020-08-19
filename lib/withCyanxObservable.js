"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cyanxHooks = require("./cyanxHooks.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 赋予组件为可观察属性-HOC
 * @param {*} Component 
 * @param {*} contextName 
 * @param {*} observedStateKeys 
 */
var withCyanxObservable = function withCyanxObservable(Component, contextName, observedStateKeys) {
  return function (props) {
    if (!observedStateKeys || observedStateKeys.length === 0) {
      // 获取相应context的dispatch
      var cyanxDispatch = (0, _cyanxHooks.useGetCyanxDispatch)(contextName);
      var observableState = {};
      observableState["".concat(contextName, "Dispatch")] = cyanxDispatch; // 将此公用仓库的dispatch存入名为${contextName}对象中

      observableState[contextName] = {
        dispatch: cyanxDispatch
      };
      return (0, _react.useMemo)(function () {
        return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, observableState));
      }, [cyanxDispatch]);
    } else {
      // 获取相应context的dispatch
      var _cyanxDispatch = (0, _cyanxHooks.useGetCyanxDispatch)(contextName); // 获取相应context的state


      var cyanxState = (0, _cyanxHooks.useGetCyanxState)(contextName); // 需要被监听的共享State

      var _observableState = {};
      observedStateKeys.forEach(function (item) {
        _observableState[item] = cyanxState[item];
      }); // 将共享State存入名为${contextName}对象中

      _observableState[contextName] = _objectSpread(_objectSpread({}, _observableState), {}, {
        dispatch: _cyanxDispatch
      });
      _observableState["".concat(contextName, "Dispatch")] = _cyanxDispatch;
      return (0, _react.useMemo)(function () {
        return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, _observableState));
      }, [].concat(_toConsumableArray(Object.values(_observableState)), [_cyanxDispatch]));
    }
  };
};

var _default = withCyanxObservable;
exports["default"] = _default;