"use strict";
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const YAxis = styled_components__WEBPACK_IMPORTED_MODULE_0___default().text.withConfig({
  displayName: "AxisLabel__YAxis",
  componentId: "sc-x10994-0"
})(["transform:rotate(-90deg);text-anchor:middle;font-size:2rem;"]);
const XAxis = styled_components__WEBPACK_IMPORTED_MODULE_0___default().text.withConfig({
  displayName: "AxisLabel__XAxis",
  componentId: "sc-x10994-1"
})(["font-size:2rem;"]);

function AxisLabel({
  innerHeight,
  innerWidth,
  axisPadding,
  yLabel,
  xLabel,
  marginLeft
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(YAxis, {
      y: -axisPadding,
      x: -innerHeight / 2,
      children: yLabel
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(XAxis, {
      y: innerHeight + axisPadding,
      x: innerWidth / 2 - marginLeft,
      children: xLabel
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxisLabel);

/***/ }),

/***/ 6742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utility_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().g.withConfig({
  displayName: "ColorLegend__Wrapper",
  componentId: "sc-1fp667t-0"
})(["transform:", ";"], props => props.align === 'row' ? `translate(${props.spacing}px, 0)` : `translate(${props.spacing}px, 60px)`);
const ColorTick = styled_components__WEBPACK_IMPORTED_MODULE_0___default().g.withConfig({
  displayName: "ColorLegend__ColorTick",
  componentId: "sc-1fp667t-1"
})(["transform:", ";text{font-size:1.4rem;}"], props => props.align === 'row' ? `translate(${props.spacing}px, 30px)` : `translate(200px, ${props.spacing}px)`);
const ColorCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().circle.withConfig({
  displayName: "ColorLegend__ColorCircle",
  componentId: "sc-1fp667t-2"
})(["fill:", ";"], props => props.color);

function ColorLegend({
  moveX,
  colorScale,
  spacing,
  radius,
  textX,
  width,
  align
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Wrapper, {
    spacing: width - moveX,
    align: align,
    children: colorScale.domain().map((d, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ColorTick, {
      spacing: i * spacing,
      align: align,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(ColorCircle, {
        r: radius,
        color: colorScale(d)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("text", {
        dy: "0.32em",
        x: textX,
        children: (0,utility_utility__WEBPACK_IMPORTED_MODULE_1__/* .formatString */ .Uw)(d)
      })]
    }, i))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorLegend);

/***/ })

};
;