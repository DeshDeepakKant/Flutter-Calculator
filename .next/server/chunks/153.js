"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 4153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Layout/Header.js




const Wrapper = external_styled_components_default().header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-14gtjlx-0"
})(["padding:5rem 5rem 0;p{margin-bottom:0.5rem;@media (max-width:568px){line-height:1.5;}}a{color:currentColor;text-decoration:underline;}"]);
const Title = external_styled_components_default().h1.withConfig({
  displayName: "Header__Title",
  componentId: "sc-14gtjlx-1"
})(["font-size:3rem;font-weight:700;margin-bottom:1rem;margin-top:5rem;@media (max-width:568px){text-align:center;}"]);
const Logo = external_styled_components_default().div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-14gtjlx-2"
})(["font-size:2.5rem;margin-bottom:1.5rem;position:fixed;top:5rem;left:5rem;@media (max-width:568px){font-size:3rem;}"]);
const SubTitle = external_styled_components_default().h3.withConfig({
  displayName: "Header__SubTitle",
  componentId: "sc-14gtjlx-3"
})(["font-size:2rem;color:#696969;margin-bottom:4.5rem;@media (max-width:568px){text-align:center;}"]);

function Header({
  title,
  subTitle,
  chartType,
  dataSource,
  dataSourceUrl
}) {
  if (title) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "\uD83D\uDCCA"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(SubTitle, {
        children: subTitle
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Chart Type: ", chartType]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Data Source:", /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: dataSourceUrl,
          target: "_blank",
          children: dataSource
        })]
      })]
    });
  }

  return null;
}

/* harmony default export */ const Layout_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Layout/Footer.js


const Footer_Wrapper = external_styled_components_default().footer.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "sc-1coz6hf-0"
})(["padding:1rem 0;text-align:center;"]);

function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx(Footer_Wrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "2024 \xA9 Desh deepak Kant. All right reserved."
    })
  });
}

/* harmony default export */ const Layout_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.js






const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["html{", " font-size:62.5%;@media (max-width:992px){", " font-size:56.25%;}@media (max-width:768px){", " font-size:50%;}@media (max-width:320px){", " font-size:43.75%;}scroll-behavior:smooth;}body{margin:0;padding:0;font-family:'Lato',sans-serif;}a{color:currentColor;text-decoration:none;}p{font-size:1.6rem;}"], ''
/* 10px = 1rem */
, ''
/* 9px = 1rem */
, ''
/* 8px = 1rem */
, ''
/* 7px = 1rem */
);
const Layout_Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Layout__Wrapper",
  componentId: "sc-1m0qv8k-0"
})(["display:flex;min-height:100vh;flex-direction:column;main{flex:1;}"]);

function Layout({
  children,
  title,
  subTitle,
  chartType,
  dataSource,
  dataSourceUrl,
  headTitle
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: headTitle
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(Layout_Header, {
      title: title,
      subTitle: subTitle,
      chartType: chartType,
      dataSource: dataSource,
      dataSourceUrl: dataSourceUrl
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Layout_Footer, {})]
  });
}

/* harmony default export */ const Layout_Layout = (Layout);

/***/ })

};
;