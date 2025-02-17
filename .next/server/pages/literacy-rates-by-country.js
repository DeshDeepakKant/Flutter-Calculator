"use strict";
(() => {
var exports = {};
exports.id = 374;
exports.ids = [374];
exports.modules = {

/***/ 9647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ literacy_rates_by_country),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(9809);
// EXTERNAL MODULE: ./src/components/Layout/Layout.js + 2 modules
var Layout = __webpack_require__(4153);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/style/style.js
var style = __webpack_require__(4328);
// EXTERNAL MODULE: ./src/utility/utility.js
var utility = __webpack_require__(40);
// EXTERNAL MODULE: ./src/components/AxisLabel/AxisLabel.js
var AxisLabel = __webpack_require__(99);
// EXTERNAL MODULE: ./src/components/Axes/Axes.js
var Axes = __webpack_require__(7853);
// EXTERNAL MODULE: ./src/components/ColorLegend/ColorLegend.js
var ColorLegend = __webpack_require__(6742);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/ScatterPlot/Tooltip.js






const Wrapper = external_styled_components_default()(style/* TooltipWrapper */.pf).withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-1ryvd5-0"
})(["top:", "px;left:", "px;"], props => props.yPosition, props => props.xPosition);

function Tooltip({
  selectedCircle,
  position,
  xLabel,
  yLabel
}) {
  const {
    xPosition,
    yPosition
  } = position;
  const {
    youthRate,
    elderlyRate
  } = selectedCircle;
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    yPosition: yPosition,
    xPosition: xPosition,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: selectedCircle.country
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [xLabel, ": ", (0,utility/* formatPercentage */.rl)(youthRate)]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [yLabel, ": ", (0,utility/* formatPercentage */.rl)(elderlyRate)]
      })]
    })
  });
}

/* harmony default export */ const ScatterPlot_Tooltip = (/*#__PURE__*/external_react_default().memo(Tooltip));
;// CONCATENATED MODULE: ./src/components/ScatterPlot/ScatterPlot.js











function ScatterPlot({
  data
}) {
  const {
    0: selectedCircle,
    1: setSelectedCircle
  } = (0,external_react_.useState)(null);
  const {
    0: position,
    1: setPosition
  } = (0,external_react_.useState)({
    xPosition: 0,
    yPosition: 0
  });
  const circleRef = (0,external_react_.useRef)();
  const margin = {
    top: 50,
    right: 100,
    bottom: 70,
    left: 100
  };
  const innerWidth = utility/* width */.bf - margin.right - margin.left;
  const innerHeight = utility/* height */.Cb - margin.top - margin.bottom;
  const circleRadius = 10;

  const xValue = d => d.youthRate;

  const yValue = d => d.elderlyRate;

  const colorValue = d => d.continent;

  const xScale = (0,external_d3_.scaleLinear)().domain((0,external_d3_.extent)(data, xValue)).range([0, innerWidth]).nice();
  const yScale = (0,external_d3_.scaleLinear)().domain((0,external_d3_.extent)(data, yValue)).range([innerHeight, 0]).nice();
  const colorScale = (0,external_d3_.scaleOrdinal)(external_d3_.schemeCategory10);
  const nested = Array.from((0,external_d3_.group)(data, colorValue), ([key, value]) => ({
    key,
    value
  }));
  colorScale.domain(nested.map(d => d.key));
  const axesTickFormat = (0,external_react_.useCallback)(number => {
    return number + '%';
  }, []);
  (0,external_react_.useEffect)(() => {
    const circleGroup = (0,external_d3_.select)(circleRef.current);
    circleGroup.selectAll('.scatter-circle').data(data).join('circle').attr('class', 'scatter-circle').attr('cy', innerHeight / 2).attr('cx', innerWidth / 2).attr('r', 0).on('mouseover', (e, d) => {
      setSelectedCircle(d);
      setPosition({
        xPosition: e.pageX,
        yPosition: e.pageY
      });
    }).on('mouseout', () => setSelectedCircle(null)).transition().duration(2000).delay((_, i) => i * 10).attr('cy', d => yScale(yValue(d))).attr('cx', d => xScale(xValue(d))).attr('r', circleRadius).style('fill', d => colorScale(colorValue(d)));
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(style/* MapWrapper */.fk, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(style/* Map */.D5, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        width: utility/* width */.bf,
        height: utility/* height */.Cb,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(style/* Group */.ZA, {
          x: utility/* width */.bf / 2,
          y: utility/* height */.Cb / 2,
          right: margin.right,
          top: margin.top,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Axes/* default */.Z, {
            xScale: xScale,
            yScale: yScale,
            innerHeight: innerHeight,
            xTickPadding: 15,
            yTickPadding: 10,
            yTickSize: -innerWidth,
            yAxisTickFormat: axesTickFormat,
            xAixsTickFormat: axesTickFormat
          }), /*#__PURE__*/jsx_runtime_.jsx(AxisLabel/* default */.Z, {
            innerHeight: innerHeight,
            innerWidth: innerWidth,
            axisPadding: 60,
            yLabel: "Elderly literacy rate (65+ years)",
            xLabel: "Youth literacy rate (15-24 years)",
            marginLeft: margin.left + 80
          }), /*#__PURE__*/jsx_runtime_.jsx("g", {
            ref: circleRef
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(ColorLegend/* default */.Z, {
          moveX: 270,
          spacing: 30,
          radius: 9,
          textX: 15,
          colorScale: colorScale,
          width: utility/* width */.bf,
          align: "vertical"
        })]
      }), selectedCircle && /*#__PURE__*/jsx_runtime_.jsx(ScatterPlot_Tooltip, {
        selectedCircle: selectedCircle,
        position: position,
        xLabel: "YouthRate",
        yLabel: "ElderlyRate"
      })]
    })
  });
}

/* harmony default export */ const ScatterPlot_ScatterPlot = (ScatterPlot);
;// CONCATENATED MODULE: ./pages/literacy-rates-by-country.js





function LiteracyRatesByContry({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    headTitle: "Scatter Plot | Data Visualization",
    title: "Literacy Rates By Country 2015",
    subTitle: "The younger vs The older generation",
    chartType: "Scatter Plot",
    dataSource: "Our World in Data",
    dataSourceUrl: "https://ourworldindata.org/literacy",
    children: /*#__PURE__*/jsx_runtime_.jsx(ScatterPlot_ScatterPlot, {
      data: data
    })
  });
}

async function getStaticProps() {
  const data = await (0,external_d3_.csv)('https://gist.githubusercontent.com/suyeonme/4d3c8ca10e33ca59a89d43b6cb8bf687/raw/c99b981242c76cbf1643409c4b760d889eea7e62/literacy-rates-of-the-the-younger-population-15-24-years-versus-literacy-rates-of-the-older-population-65.csv');
  data.forEach(d => {
    d.youthRate = +d.youthRate;
    d.elderlyRate = +d.elderlyRate;
  });
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ const literacy_rates_by_country = (LiteracyRatesByContry);

/***/ }),

/***/ 9809:
/***/ ((module) => {

module.exports = require("d3");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,153,526,853,791], () => (__webpack_exec__(9647)));
module.exports = __webpack_exports__;

})();