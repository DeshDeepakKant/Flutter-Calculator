"use strict";
(() => {
var exports = {};
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 6250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ covid19_dashboard),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "d3"
var external_d3_ = __webpack_require__(9809);
;// CONCATENATED MODULE: external "topojson"
const external_topojson_namespaceObject = require("topojson");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/utility/utility.js
var utility = __webpack_require__(40);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/BubbleMap/SizeLegend.js




const GroupWrapper = external_styled_components_default().g.withConfig({
  displayName: "SizeLegend__GroupWrapper",
  componentId: "sc-v3nu9e-0"
})(["transform:translate(3rem,15rem);"]);
const Group = external_styled_components_default().g.withConfig({
  displayName: "SizeLegend__Group",
  componentId: "sc-v3nu9e-1"
})(["transform:", ";circle{opacity:0.7;fill:#d31922;pointer-events:none;}text{font-size:1.4rem;}"], props => `translate(0, ${props.spacing}px)`);

const SizeLegend = ({
  ticks,
  xCircle,
  yCircle,
  formatNumber,
  radiusScale,
  xLabel,
  spacing
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(GroupWrapper, {
    children: ticks.map((tick, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Group, {
      spacing: i * spacing,
      children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
        cx: xCircle,
        cy: yCircle - radiusScale(tick),
        r: radiusScale(tick)
      }), /*#__PURE__*/jsx_runtime_.jsx("text", {
        dy: "0.32em",
        x: xLabel,
        y: yCircle - radiusScale(tick),
        children: formatNumber(tick)
      })]
    }, i))
  });
};

/* harmony default export */ const BubbleMap_SizeLegend = (/*#__PURE__*/external_react_default().memo(SizeLegend));
// EXTERNAL MODULE: ./src/style/style.js
var style = __webpack_require__(4328);
;// CONCATENATED MODULE: ./src/components/BubbleMap/BubbleMap.js








const CountryPath = external_styled_components_default().path.withConfig({
  displayName: "BubbleMap__CountryPath",
  componentId: "sc-3q9xzl-0"
})(["fill:#d2d2d2;stroke:white;stroke-width:0.1px;&:hover{fill:#f7b0ad;}"]);
const SpherePath = external_styled_components_default().path.withConfig({
  displayName: "BubbleMap__SpherePath",
  componentId: "sc-3q9xzl-1"
})(["fill:#eaeaea;opacity:0.3;"]);

function BubbleMap({
  countries
}) {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('death');
  const svgRef = (0,external_react_.useRef)(null);
  const radiusScale = (0,external_d3_.scaleSqrt)();

  const radiusValue = country => country.properties[value];

  radiusScale.domain([0, (0,external_d3_.max)(countries.features, radiusValue)]).range([0, value === 'death' ? 6 : 3]);
  const ticksOfDeaths = [335000, 150000, 70000, 10000];
  const ticksOfCases = [20000000, 10000000, 2500000, 200000];
  (0,external_react_.useEffect)(() => {
    const svg = (0,external_d3_.select)(svgRef.current);
    handleZoom(svg); // Transition of Circles

    svg.selectAll('.bubble').data(countries.features).join('circle').attr('class', 'bubble').attr('cx', d => d.properties.projected[0]).attr('cy', d => d.properties.projected[1]).transition().attr('r', d => radiusScale(radiusValue(d)));
  });

  const handleChange = val => setValue(val);

  const handleZoom = svg => {
    svg.call((0,external_d3_.zoom)().on('zoom', ({
      transform
    }) => {
      svg.attr('transform', transform);
    }));
  };

  const insertProjectionToProperties = (features, projection) => {
    features.forEach(country => {
      country.properties.projected = projection((0,external_d3_.geoCentroid)(country));
    });
  };

  const handleTooltip = country => {
    if (country.properties.case === undefined) {
      return 'No Reported Data';
    } else if (value === 'death') {
      return `${country.properties.country}: ${(0,utility/* formatNumber */.uf)(country.properties.death)}`;
    } else {
      return `${country.properties.country}: ${(0,utility/* formatNumber */.uf)(country.properties.case)}`;
    }
  };

  const projection = (0,external_d3_.geoNaturalEarth1)().fitSize([utility/* width */.bf, utility/* height */.Cb], countries).precision(100);
  const pathGenerator = (0,external_d3_.geoPath)().projection(projection);
  insertProjectionToProperties(countries.features, projection);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(style/* Dropdown */.Lt, {
      onChange: e => handleChange(e.target.value),
      children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "death",
        children: "Deaths"
      }), /*#__PURE__*/jsx_runtime_.jsx("option", {
        value: "case",
        children: "Cases"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(style/* MapWrapper */.fk, {
      children: /*#__PURE__*/jsx_runtime_.jsx(style/* Map */.D5, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          ref: svgRef,
          width: utility/* width */.bf,
          height: utility/* height */.Cb,
          children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/jsx_runtime_.jsx(SpherePath, {
              d: pathGenerator({
                type: 'Sphere'
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("g", {
            children: countries.features.map((country, i) => /*#__PURE__*/jsx_runtime_.jsx(CountryPath, {
              d: pathGenerator(country),
              children: /*#__PURE__*/jsx_runtime_.jsx("title", {
                children: handleTooltip(country)
              })
            }, i))
          }), /*#__PURE__*/jsx_runtime_.jsx(BubbleMap_SizeLegend, {
            ticks: value === 'death' ? ticksOfDeaths : ticksOfCases,
            xCircle: 50,
            xLabel: 100,
            yCircle: 100,
            spacing: 70,
            radiusScale: radiusScale,
            formatNumber: utility/* formatNumber */.uf
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const BubbleMap_BubbleMap = (BubbleMap);
// EXTERNAL MODULE: ./src/components/Layout/Layout.js + 2 modules
var Layout = __webpack_require__(4153);
;// CONCATENATED MODULE: ./pages/covid19-dashboard.js







function Covid19Dashboard({
  countries
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    headTitle: "Bubble Map | Data Visualization",
    title: "WHO Covid-19 World Dashboard",
    subTitle: "January 2nd 2021",
    chartType: "Bubble Map",
    dataSource: "WHO Coronavirus Disease (COVID-19) Dashboard",
    dataSourceUrl: "https://covid19.who.int/",
    children: /*#__PURE__*/jsx_runtime_.jsx(BubbleMap_BubbleMap, {
      countries: countries
    })
  });
}

async function getStaticProps() {
  const TOPO_JSON_DATA = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';
  const COVID_DATA = 'https://gist.githubusercontent.com/suyeonme/d9cce30a620249ef17bd39e120c8fa30/raw/639c1aa9ce1fd4dbb2f80b1babf81b721eaabf16/gistfile2.txt';
  const covidData = await (0,external_d3_.csv)(COVID_DATA);
  const topoData = await (0,external_d3_.json)(TOPO_JSON_DATA);
  const countries = await (0,external_topojson_namespaceObject.feature)(topoData, topoData.objects.countries);
  const rowByName = await covidData.reduce((accumulator, d) => {
    accumulator[d['country']] = d;
    return accumulator;
  }, {});
  await countries.features.forEach(d => {
    Object.assign(d.properties, rowByName[d.properties.name]);
  });
  return {
    props: {
      countries
    }
  };
}
/* harmony default export */ const covid19_dashboard = (Covid19Dashboard);

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
var __webpack_exports__ = __webpack_require__.X(0, [400,664,153,526], () => (__webpack_exec__(6250)));
module.exports = __webpack_exports__;

})();