(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mui-tri-state-checkbox", [], factory);
	else if(typeof exports === 'object')
		exports["mui-tri-state-checkbox"] = factory();
	else
		root["mui-tri-state-checkbox"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(1);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// CONCATENATED MODULE: ./src/components/mui-tri-state-checkbox/MuiTriStateCheckbox.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Partly based on https://pastebin.com/0NLGNdCq / https://codesandbox.io/s/material-demo-dwxed
// TODO: Add a prop to control the cycle order

/* eslint-disable @typescript-eslint/no-empty-function */




/**
 * Tri-state checkbox built on material-ui Checkbox
 * @prop {boolean | null} checked - the state of the checkbox
 *   - `false`: means unchecked
 *   - `null`: (or undefined) means indeterminate
 *   - `true`: means checked
 * @prop {boolean | null} defaultChecked - the initial state of the checkbox
 *   (if you want to use this as an uncontrolled component)
 * @prop {(event, checked: boolean | null) => void} onChange
 *   Called whenever the state of the checkbox changes. Use the `checked`
 *   argument, since `event.target.checked` cannot be relied on as it can with
 *   a regular Checkbox.
 *
 * This component also passes all other props to the underlying Checkbox
 * *except* for `indeterminate`.
 */
var MuiTriStateCheckbox_MuiTriStateCheckbox = Object(external_react_["forwardRef"])(function MuiTriStateCheckbox(_ref, ref) {
  var _ref$defaultChecked = _ref.defaultChecked,
      defaultChecked = _ref$defaultChecked === void 0 ? null : _ref$defaultChecked,
      _ref$checked = _ref.checked,
      checkedProp = _ref$checked === void 0 ? undefined : _ref$checked,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function (event, checked) {} : _ref$onChange,
      rest = _objectWithoutProperties(_ref, ["defaultChecked", "checked", "onChange"]);

  var _useState = Object(external_react_["useState"])(defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var indeterminate = Object(external_react_["useMemo"])(function () {
    // deliberate ==; both undefined and null are considered indeterminate values
    return checked == null;
  }, [checked]); // Allow component's checked state to be controlled. (This is supposed to work like getDerivedStateFromProps.)
  // Is there any better way to do this? (While still giving the option to use this as uncontrolled. Which means we still need to store state, but basically only if uncontrolled.)

  if (checkedProp !== undefined && checked !== checkedProp) {
    setChecked(checkedProp);
    return null; // As recommended by https://stackoverflow.com/questions/55066440/react-hooks-faq-implementation-of-getderivedstatefromprops-leads-to-rendering-w#comment96885658_55068572
  } // console.log('MuiTriStateCheckbox', {defaultChecked, checkedProp}, '=>', {indeterminate, checked})


  var handleChange = function handleChange(event) {
    setChecked(function (checked) {
      // Checked state cycles from: false -> null -> true -> ...
      var nextChecked;

      if (checked === false) {
        nextChecked = null;
      } else if (checked === true) {
        nextChecked = false;
      } else {
        nextChecked = true;
      } // Since state isn't updated immediately, we pass the next (future) value for
      // the state rather than the current value.
      // console.log(JSON.stringify(checked), JSON.stringify(nextChecked))


      onChange(event, nextChecked);
      return nextChecked;
    });
  };

  return external_react_["createElement"](Checkbox_default.a, _objectSpread({}, rest, {
    checked: checked || false,
    indeterminate: indeterminate,
    onChange: handleChange,
    inputRef: ref
  }));
});
// CONCATENATED MODULE: ./src/components/mui-tri-state-checkbox/index.tsx
/* concated harmony reexport MuiTriStateCheckbox */__webpack_require__.d(__webpack_exports__, "MuiTriStateCheckbox", function() { return MuiTriStateCheckbox_MuiTriStateCheckbox; });


/***/ })
/******/ ]);
});
//# sourceMappingURL=mui-tri-state-checkbox.js.map