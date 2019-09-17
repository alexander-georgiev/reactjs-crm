webpackHotUpdate("static\\development\\pages\\p\\[id].js",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Firebase */ "./pages/Firebase.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Work\\reactjs-crm\\pages\\p\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Article extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onCollectionUpdate", querySnapshot => {
      const boards = [];
      const id = this.props.url.query.id;
      ref.where('title', '==', id).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          var obj = doc.data();
          obj['id'] = doc.id;
          self.articles.push(obj);
        });
      }).catch(function (error) {
        self.error = error;
      });
    });

    this.ref = _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('articles');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  ActiveLink({
    children,
    href
  }) {
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
    const router_path = router.pathname;
    console.log(router_path);
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    console.log(this.ActiveLink);
  }

  render() {
    return __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Hello, ", this.props.url.query.id);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=[id].js.54c829b4a54cc3067319.hot-update.js.map