"use strict";
(() => {
var exports = {};
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 3626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ korea_crop_production),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(9809);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Axes/Axes.js
var Axes = __webpack_require__(7853);
// EXTERNAL MODULE: ./src/components/AxisLabel/AxisLabel.js
var AxisLabel = __webpack_require__(99);
// EXTERNAL MODULE: ./src/components/ColorLegend/ColorLegend.js
var ColorLegend = __webpack_require__(6742);
// EXTERNAL MODULE: ./src/style/style.js
var style = __webpack_require__(4328);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/LineChart/Indicator.js





function Indicator({
  right,
  top,
  innerHeight,
  innerWidth,
  selectedYear,
  setSelectedYear,
  xScale,
  isHover,
  onMouseEnter,
  onMouseLeave,
  setXPosition
}) {
  const gRef = (0,external_react_.useRef)();
  const parseYear = (0,external_d3_.timeParse)('%Y');
  const selectedYearData = parseYear(selectedYear);
  (0,external_react_.useEffect)(() => {
    const g = (0,external_d3_.select)(gRef.current);
    g.append('rect').attr('fill', 'none').attr('pointer-events', 'all').merge(g.select('rect')).attr('width', innerWidth).attr('height', innerHeight).on('mousemove', e => {
      const x = (0,external_d3_.pointer)(e, g.node())[0];
      const hoveredDate = xScale.invert(x);
      setSelectedYear(hoveredDate.getFullYear());
      setXPosition(x);
      onMouseEnter();
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(style/* Group */.ZA, {
    ref: gRef,
    top: top,
    right: right,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    children: isHover && /*#__PURE__*/jsx_runtime_.jsx("line", {
      y1: 0,
      x1: xScale(selectedYearData),
      x2: xScale(selectedYearData),
      y2: innerHeight,
      stroke: "#9d9d9d"
    })
  });
}

/* harmony default export */ const LineChart_Indicator = (/*#__PURE__*/external_react_default().memo(Indicator));
// EXTERNAL MODULE: ./src/utility/utility.js
var utility = __webpack_require__(40);
;// CONCATENATED MODULE: ./src/components/LineChart/Tooltip.js






const Wrapper = external_styled_components_default()(style/* TooltipWrapper */.pf).attrs(({
  xPosition
}) => ({
  style: {
    left: xPosition
  }
})).withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-16pwgcw-0"
})(["top:", "px;"], props => props.yPosition);

function Tooltip({
  selectedYear,
  xPosition,
  crops
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    xPosition: xPosition + 330,
    yPosition: 500,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: selectedYear
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: crops.map((crop, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [(0,utility/* formatString */.Uw)(crop.subject), ": ", crop.value]
      }, i))
    })]
  });
}

/* harmony default export */ const LineChart_Tooltip = (/*#__PURE__*/external_react_default().memo(Tooltip));
;// CONCATENATED MODULE: ./src/components/LineChart/LineChart.js












const LinePath = external_styled_components_default().path.withConfig({
  displayName: "LineChart__LinePath",
  componentId: "sc-1xd1r2a-0"
})(["fill:none;stroke-width:4;stroke-dasharray:", ";stroke-dashoffset:", ";stroke-linejoin:round;stroke-linecap:round;mix-blend-mode:multiply;animation:", " 4s forwards;"], props => props.pathLength, props => props.pathLength, style/* drawDash */.cp);
const Circle = external_styled_components_default().circle.withConfig({
  displayName: "LineChart__Circle",
  componentId: "sc-1xd1r2a-1"
})(["fill:", ";stroke:", ";"], props => props.isFilled ? props.color : 'white', props => props.color);

function LineChart({
  data
}) {
  const {
    0: selectedYear,
    1: setSelectedYear
  } = (0,external_react_.useState)();
  const {
    0: isHover,
    1: setIsHover
  } = (0,external_react_.useState)(false);
  const {
    0: xPosition,
    1: setXPosition
  } = (0,external_react_.useState)(0);
  const {
    0: pathLength,
    1: setPathLength
  } = (0,external_react_.useState)();
  const {
    0: showCircles,
    1: setShowCircles
  } = (0,external_react_.useState)(false);
  const lineRef = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    var _lineRef$current;

    // Animation
    const totalLength = lineRef === null || lineRef === void 0 ? void 0 : (_lineRef$current = lineRef.current) === null || _lineRef$current === void 0 ? void 0 : _lineRef$current.getTotalLength();
    setPathLength(totalLength);
    setTimeout(() => {
      setShowCircles(true);
    }, 4000);
  }, []);
  const margin = {
    top: 50,
    right: 100,
    bottom: 60,
    left: 50
  };
  const innerWidth = utility/* width */.bf - margin.right - margin.left;
  const innerHeight = utility/* height */.Cb - margin.top - margin.bottom;

  const xValue = d => new Date(parseInt(d.time), 0);

  const yValue = d => d.value;

  const colorValue = d => d.subject;

  const xScale = (0,external_d3_.scaleTime)().domain((0,external_d3_.extent)(data, xValue)).range([0, innerWidth]);
  const yScale = (0,external_d3_.scaleLinear)().domain((0,external_d3_.extent)(data, yValue)).range([innerHeight, 0]).nice();
  const colorScale = (0,external_d3_.scaleOrdinal)(external_d3_.schemeCategory10);
  const lineGenerator = (0,external_d3_.line)().x(d => xScale(xValue(d))).y(d => yScale(yValue(d))).curve(external_d3_.curveMonotoneX);
  const nested = Array.from((0,external_d3_.group)(data, colorValue), ([key, value]) => ({
    key,
    value
  }));
  colorScale.domain(nested.map(d => d.key));
  const handleMouseEnter = (0,external_react_.useCallback)(() => setIsHover(true), []);
  const handleMouseLeave = (0,external_react_.useCallback)(() => setIsHover(false), []);

  const getValueofSelectedYear = () => {
    const crops = data.filter(d => {
      return d.subject === 'RICE' | d.subject === 'WHEAT' | d.subject === 'MAIZE' && d.time === selectedYear;
    });
    return crops;
  };

  const yAxisTickFormat = (0,external_react_.useCallback)(number => {
    return (0,external_d3_.format)('.3s')(number).replace('.', '') + 'T';
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
            yAxisTickFormat: yAxisTickFormat
          }), /*#__PURE__*/jsx_runtime_.jsx(AxisLabel/* default */.Z, {
            innerHeight: innerHeight,
            innerWidth: innerWidth,
            axisPadding: 60,
            yLabel: "Value (tonne/ha)",
            xLabel: "Time",
            marginLeft: margin.left
          }), /*#__PURE__*/jsx_runtime_.jsx(style/* Group */.ZA, {
            children: nested.map((d, i) => /*#__PURE__*/jsx_runtime_.jsx(LinePath, {
              ref: lineRef,
              d: lineGenerator(d.value),
              stroke: colorScale(d.key),
              pathLength: pathLength
            }, i))
          }), /*#__PURE__*/jsx_runtime_.jsx(style/* Group */.ZA, {
            children: showCircles && data.map((d, i) => /*#__PURE__*/jsx_runtime_.jsx(Circle, {
              r: 4,
              cx: xScale(xValue(d)),
              cy: yScale(yValue(d)),
              color: colorScale(d.subject),
              isFilled: isHover && selectedYear === d.time
            }, i))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(ColorLegend/* default */.Z, {
          moveX: 270,
          spacing: 80,
          radius: 9,
          textX: 15,
          colorScale: colorScale,
          width: utility/* width */.bf,
          align: "row"
        }), /*#__PURE__*/jsx_runtime_.jsx(LineChart_Indicator, {
          innerHeight: innerHeight,
          innerWidth: innerWidth,
          right: margin.right,
          top: margin.top,
          selectedYear: selectedYear,
          setSelectedYear: setSelectedYear,
          xScale: xScale,
          isHover: isHover,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          setXPosition: setXPosition
        })]
      }), isHover && /*#__PURE__*/jsx_runtime_.jsx(LineChart_Tooltip, {
        selectedYear: selectedYear,
        crops: getValueofSelectedYear(),
        xPosition: xPosition
      })]
    })
  });
}

/* harmony default export */ const LineChart_LineChart = (LineChart);
// EXTERNAL MODULE: ./src/components/Layout/Layout.js + 2 modules
var Layout = __webpack_require__(4153);
;// CONCATENATED MODULE: ./pages/korea-crop-production.js





function KoreaCropProduction({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    headTitle: "Line Chart | Data Visualization",
    title: "Korea Crop Production",
    subTitle: "Korea production of different crop types from 1991 to 2020",
    chartType: "Line Chart",
    dataSource: "Worldwide Crop Production",
    dataSourceUrl: "https://www.kaggle.com/vagifa/worldwide-crop-production",
    children: /*#__PURE__*/jsx_runtime_.jsx(LineChart_LineChart, {
      data: data
    })
  });
}

async function getStaticProps() {
  const data = await (0,external_d3_.csv)('https://gist.githubusercontent.com/suyeonme/7595c37f1cbc51023ba1d5f6ba767b37/raw/e855d60b0719b3c20ec26842994b5bd89a7d5a2c/korea_crop_producction.csv');
  data.forEach(d => {
    d.time = +d.time;
    d.value = +d.value;
  });
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ const korea_crop_production = (KoreaCropProduction);

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
var __webpack_exports__ = __webpack_require__.X(0, [400,664,153,526,853,791], () => (__webpack_exec__(3626)));
module.exports = __webpack_exports__;

})();