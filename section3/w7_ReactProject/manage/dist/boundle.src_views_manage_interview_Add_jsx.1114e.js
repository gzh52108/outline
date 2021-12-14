"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkw5_React"] = self["webpackChunkw5_React"] || []).push([["src_views_manage_interview_Add_jsx"],{

/***/ "./src/views/manage/interview/Add.jsx":
/*!********************************************!*\
  !*** ./src/views/manage/interview/Add.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ \"./src/views/manage/interview/Form.jsx\");\n\n\n\n\n\n\nclass Add extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  state = {\n    data: {},\n    initialValues: {\n      difficulty: 2,\n      hot: 100\n    }\n  };\n  onFinish = async ({\n    _id,\n    ...values\n  }) => {\n    console.log('value', values);\n    const {\n      data\n    } = await _utils_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/iq/', values);\n    console.log('data', data);\n\n    if (data.status === 200) {\n      antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success('添加成功');\n      this.props.history.push('/manage/interview/list');\n    }\n  };\n\n  componentDidMount() {}\n\n  render() {\n    const {\n      initialValues\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Add);\n\n//# sourceURL=webpack://w5_React/./src/views/manage/interview/Add.jsx?");

/***/ }),

/***/ "./src/views/manage/interview/Form.jsx":
/*!*********************************************!*\
  !*** ./src/views/manage/interview/Form.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/rate/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/input-number/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/switch/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/index.js\");\n\n\n\n\n\nfunction InterviewForm({\n  data\n}) {\n  // const history = useHistory()\n  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)(); // 在函数组件中使用useForm()获取Form组件实例\n\n  const [myform] = antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].useForm();\n  const initialValues = {\n    difficulty: 2,\n    hot: 100\n  };\n\n  const onFinish = async ({\n    _id,\n    ...values\n  }) => {\n    console.log('value', values);\n    let data;\n\n    if (_id) {\n      // 编辑\n      data = await _utils_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patch('/iq/' + _id, values);\n    } else {\n      // 添加\n      data = await _utils_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/iq/', values);\n    }\n\n    console.log('data', data);\n\n    if (data.data.status === 200) {\n      antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success((_id ? '修改' : '添加') + '成功'); // history.push('/manage/interview/list')\n\n      navigate('/manage/interview/list');\n    }\n  }; // ref对组件或节点的引入必须在页面渲染后才能获取到\n  // const myform = React.createRef();\n  // console.log('myform',myform)\n  // // 如为编辑状态，则需要把数据写入表单\n\n\n  if (data) {\n    // ref\n    // myform.current.setFieldsValue(data)\n    // useForm\n    myform.setFieldsValue(data);\n  }\n\n  console.log('myform', myform);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"basic\",\n    labelCol: {\n      span: 4\n    },\n    wrapperCol: {\n      span: 14\n    },\n    initialValues: initialValues,\n    onFinish: onFinish,\n    autoComplete: \"off\" // ref={myform}\n    ,\n    form: myform\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    name: \"_id\",\n    hidden: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"\\u9762\\u8BD5\\u9898\",\n    name: \"question\",\n    rules: [{\n      required: true,\n      message: '请填写面试题'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"\\u96BE\\u5EA6\",\n    name: \"difficulty\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"\\u70ED\\u5EA6\",\n    name: \"hot\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    style: {\n      width: 100\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    label: \"\\u5BA1\\u6838\",\n    name: \"checked\",\n    valuePropName: \"checked\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n    wrapperCol: {\n      offset: 4,\n      span: 14\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    size: \"large\",\n    type: \"primary\",\n    htmlType: \"submit\"\n  }, \"\\u786E\\u8BA4\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterviewForm);\n\n//# sourceURL=webpack://w5_React/./src/views/manage/interview/Form.jsx?");

/***/ })

}]);