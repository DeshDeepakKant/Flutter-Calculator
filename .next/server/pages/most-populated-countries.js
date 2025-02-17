"use strict";
(() => {
var exports = {};
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ most_populated_countries),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(9809);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./src/components/Axes/Axes.js
var Axes = __webpack_require__(7853);
// EXTERNAL MODULE: ./src/style/style.js
var style = __webpack_require__(4328);
// EXTERNAL MODULE: ./src/utility/utility.js
var utility = __webpack_require__(40);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/BarChart/BarChart.js









const XAxisLabel = external_styled_components_default().g.withConfig({
  displayName: "BarChart__XAxisLabel",
  componentId: "sc-1twrcfu-0"
})(["rect{width:15px;height:15px;fill:#ec008b;}text{font-size:1.4rem;}"]);
const GroupedRect = external_styled_components_default().g.withConfig({
  displayName: "BarChart__GroupedRect",
  componentId: "sc-1twrcfu-1"
})(["rect{fill:#ec008b;transition:all 0.2s;&:hover{fill:#e46aa7;}}"]);
const GroupedText = external_styled_components_default().g.withConfig({
  displayName: "BarChart__GroupedText",
  componentId: "sc-1twrcfu-2"
})(["text{font-size:1.2rem;}"]);

function BarChart({
  data
}) {
  const {
    0: sortOpt,
    1: setSortOpt
  } = (0,external_react_.useState)('highest');
  const rectRef = (0,external_react_.useRef)();
  const textRef = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    // Animation rect with select
    const group = (0,external_d3_.select)(rectRef.current);
    const text = (0,external_d3_.select)(textRef.current);
    handleSelect();
    handleDrawRect(group);
    handleDrawText(text);
  }, [sortOpt, data]);
  const height = 700;
  const margin = {
    top: 50,
    right: 95,
    bottom: 60,
    left: 50
  };
  const innerWidth = utility/* width */.bf - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = d => d.population;

  const yValue = d => d.country;

  const xScale = (0,external_d3_.scaleLinear)().domain([0, (0,external_d3_.max)(data, xValue)]).range([0, innerWidth]).nice();
  const yScale = (0,external_d3_.scaleBand)().domain(data.map(yValue)).range([0, innerHeight]).padding(0.2);

  const handleDrawRect = group => {
    group.selectAll('rect').data(data).join('rect').attr('height', yScale.bandwidth()).attr('y', d => yScale(yValue(d))).transition().duration(750).attr('width', d => xScale(xValue(d)));
  };

  const handleDrawText = group => {
    group.selectAll('text').data(data).join('text').attr('y', d => yScale(yValue(d)) + yScale.bandwidth() / 1.5).text(d => (0,utility/* formatNumber */.uf)(d.population)).attr('x', d => xScale(xValue(d)) + 5).attr('fill-opacity', 0).transition().delay(1200).duration(750).attr('fill-opacity', 1);
  };

  const handleSelect = () => {
    if (sortOpt === 'highest') {
      data.sort((a, b) => (0,external_d3_.ascending)(a.population, b.population));
    } else if (sortOpt === 'lowest') {
      data.sort((a, b) => (0,external_d3_.descending)(a.population, b.population));
    }
  };

  const xAixsTickFormat = number => (0,external_d3_.format)('.2s')(number).replace('G', 'B');

  const handleChange = e => setSortOpt(e.target.value);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(style/* MapWrapper */.fk, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(style/* Dropdown */.Lt, {
      onChange: handleChange,
      value: sortOpt,
      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "highest",
        children: "Highest"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "lowest",
        children: "Lowest"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(style/* Map */.D5, {
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        width: utility/* width */.bf,
        height: height,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(style/* Group */.ZA, {
          x: utility/* width */.bf / 2,
          y: height / 2,
          right: margin.right,
          top: margin.top,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Axes/* default */.Z, {
            xScale: xScale,
            yScale: yScale,
            innerHeight: innerHeight,
            yTickSize: 0,
            xTickPadding: 10,
            yTickPadding: 10,
            xAixsTickFormat: xAixsTickFormat
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(XAxisLabel, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
              y: -27,
              x: 0
            }), /*#__PURE__*/jsx_runtime_.jsx("text", {
              y: -15,
              x: 20,
              children: "Millions of People"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(GroupedRect, {
            ref: rectRef
          }), /*#__PURE__*/jsx_runtime_.jsx(GroupedText, {
            ref: textRef
          })]
        })
      })
    })]
  });
}

Axes/* default.propTypes */.Z.propTypes = {
  data: (external_prop_types_default()).array
};
/* harmony default export */ const BarChart_BarChart = (BarChart);
// EXTERNAL MODULE: ./src/components/Layout/Layout.js + 2 modules
var Layout = __webpack_require__(4153);
;// CONCATENATED MODULE: ./pages/most-populated-countries.js





function MostPopulatedCountries({
  data
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    headTitle: "Bar Chart | Data Visualization",
    title: "Top 20 Countries by Population 2020",
    subTitle: "The Most Populated Countries in the World 2020",
    chartType: "Bar Chart",
    dataSource: "Population by Country 2020",
    dataSourceUrl: "https://www.kaggle.com/tanuprabhu/population-by-country-2020",
    children: /*#__PURE__*/jsx_runtime_.jsx(BarChart_BarChart, {
      data: data
    })
  });
}

async function getStaticProps() {
  const data = await (0,external_d3_.csv)('https://gist.githubusercontent.com/suyeonme/da2138240874fa5f369700628505ddc8/raw/2176c06bed989a8befe0ed8f156953dac881a257/gistfile2.txt');
  data.forEach(d => d.population = +d.population);
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ const most_populated_countries = (MostPopulatedCountries);

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
var __webpack_exports__ = __webpack_require__.X(0, [400,664,153,526,853], () => (__webpack_exec__(505)));
module.exports = __webpack_exports__;

})();