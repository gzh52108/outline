"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkw5_React"] = self["webpackChunkw5_React"] || []).push([["src_views_manage_Home_jsx"],{

/***/ "./src/views/manage/Home.jsx":
/*!***********************************!*\
  !*** ./src/views/manage/Home.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actions/user */ \"./src/store/actions/user.js\");\n\n\n\n\n\nfunction Home(props) {\n  console.log('Home.props', props);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useStore)();\n  const userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {\n    return state.userInfo;\n  });\n  console.log('userInfo', userInfo);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Home\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    onClick: () => {\n      dispatch({\n        type: 'logout'\n      });\n    }\n  }, \"\\u9000\\u51FA\"));\n}\n\nconst mapStateToProps = function (state) {\n  return state;\n};\n\nconst mapDispatchToProps = function (dispatch) {\n  // return {\n  //     login(data){\n  //         dispatch(userAction.login(data))\n  //     },\n  //     logout(){\n  //         dispatch(userAction.logout())\n  //     }\n  // }\n  return (0,redux__WEBPACK_IMPORTED_MODULE_3__.bindActionCreators)(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"], dispatch);\n}; // userAction = {login,logout}\n// function bindActionCreators(actionCreator,dispatch){\n//     const result = {}\n//     for(let key in actionCreator){\n//         result[key] = function(...args){\n//             // dispatch(actionCreator[key].apply(this,arguments))\n//             dispatch(actionCreator[key](...args))\n//         }\n//     }\n//     return result;\n// }\n\n\nHome = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Home);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://w5_React/./src/views/manage/Home.jsx?");

/***/ })

}]);