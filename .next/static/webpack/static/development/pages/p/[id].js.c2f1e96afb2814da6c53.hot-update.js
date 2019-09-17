webpackHotUpdate("static\\development\\pages\\p\\[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase */ "./pages/Firebase.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "C:\\Work\\reactjs-crm\\pages\\p\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Post = props => __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, props.res.name), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.res.summary));

Post.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  console.log(context.query);
  const res = _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('articles').where('title', '==', {
    id
  }).get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      var obj = doc.data();
      obj['id'] = doc.id;
      self.articles.push(obj);
    });
  }).catch(function (error) {
    self.error = error;
  });
  console.log(res);
  console.log("Fetched show: ".concat(res));
  return {
    res
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.c2f1e96afb2814da6c53.hot-update.js.map