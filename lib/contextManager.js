"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _withCyanxContextProvider = _interopRequireDefault(require("./withCyanxContextProvider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var contextStore = new Map(); // context&context.Provider仓库

/**
 * 生成&储存Context&ContextProvider;返回ContextProvider
 * @param {*} name 
 * @param {*} defaultValue 
 */

var createContext = function createContext(name, defaultValue) {
  if (getContextProvider(name)) {
    return getContextProvider(name);
  } else {
    var context = /*#__PURE__*/_react["default"].createContext();

    var contextProvider = (0, _withCyanxContextProvider["default"])(context, defaultValue);
    setContextAndContextProvider(name, context, contextProvider);
    return contextProvider;
  }
};
/**
 * 储存Context
 * @param {*} name 
 * @param {*} context 
 * @param {*} contextProvider 
 */


var setContextAndContextProvider = function setContextAndContextProvider(name, context, contextProvider) {
  contextStore.set(name, {
    context: context,
    contextProvider: contextProvider
  });
};
/**
 * 获取Context；如果不存在，则返回undefined
 * @param {*} name 
 */


var getContext = function getContext(name) {
  return contextStore.get(name) && contextStore.get(name).context ? contextStore.get(name).context : undefined;
};
/**
 * 获取ContextProvider；如果不存在，则返回undefined
 * @param {*} name 
 */


var getContextProvider = function getContextProvider(name) {
  return contextStore.get(name) && contextStore.get(name).contextProvider ? contextStore.get(name).contextProvider : undefined;
};

var _default = {
  createContext: createContext,
  getContext: getContext
};
exports["default"] = _default;