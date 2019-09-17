webpackHotUpdate("static\\development\\pages\\articles.js",{

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Firebase */ "./pages/Firebase.js");
var _jsxFileName = "C:\\Work\\reactjs-crm\\pages\\articles.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Articles extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const ref = _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('articles').doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    _Firebase__WEBPACK_IMPORTED_MODULE_2__["default"].firestore().collection('articles').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/");
    }).catch(error => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return __jsx("div", {
      class: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      class: "panel panel-default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      class: "panel-heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Board List")), __jsx("h3", {
      class: "panel-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, this.state.board.title)), __jsx("div", {
      class: "panel-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("dl", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("dt", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Description:"), __jsx("dd", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, this.state.board.description), __jsx("dt", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Author:"), __jsx("dd", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, this.state.board.author)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      to: "/edit/".concat(this.state.key),
      class: "btn btn-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Edit"), "\xA0", __jsx("button", {
      onClick: this.delete.bind(this, this.state.key),
      class: "btn btn-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Delete"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Articles);

/***/ })

})
//# sourceMappingURL=articles.js.d3cca42c239e6128af01.hot-update.js.map