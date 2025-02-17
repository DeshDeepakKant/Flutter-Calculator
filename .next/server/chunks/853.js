"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 7853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9809);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Tick = styled_components__WEBPACK_IMPORTED_MODULE_2___default().g.withConfig({
  displayName: "Axes__Tick",
  componentId: "sc-yyupt9-0"
})(["transform:", ";path,line{stroke:#dcdbdb;}text{font-size:1.4rem;}"], props => props.axisType === 'yAxis' && `translate(0, ${props.innerHeight}px)`);

function Axes({
  xScale,
  yScale,
  innerHeight,
  yAxisTickFormat,
  xAixsTickFormat,
  yTickSize,
  xTickPadding,
  yTickPadding
}) {
  const xAxisRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const yAxisRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const xGroup = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(xAxisRef.current);
    const yGroup = (0,d3__WEBPACK_IMPORTED_MODULE_1__.select)(yAxisRef.current);
    const xAxis = (0,d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom)(xScale).tickSize(-innerHeight).tickPadding(xTickPadding);
    const yAxis = (0,d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft)(yScale).tickSize(yTickSize).tickPadding(yTickPadding);
    if (yAxisTickFormat) yAxis.tickFormat(yAxisTickFormat); // Line Chart

    if (xAixsTickFormat) xAxis.tickFormat(xAixsTickFormat); // Bar Chart

    xGroup.call(yAxis);
    yGroup.call(xAxis);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Tick, {
      ref: xAxisRef,
      axisType: "xAxis"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Tick, {
      ref: yAxisRef,
      axisType: "yAxis",
      innerHeight: innerHeight
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Axes));

/***/ })

};
;