(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{2339:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return v}});n(9008);var r=n(7294),i=n(8860),o=n(9521),a=n(40),c=n(5893),s=o.ZP.g.withConfig({displayName:"SizeLegend__GroupWrapper",componentId:"sc-v3nu9e-0"})(["transform:translate(3rem,15rem);"]),d=o.ZP.g.withConfig({displayName:"SizeLegend__Group",componentId:"sc-v3nu9e-1"})(["transform:",";circle{opacity:0.7;fill:#d31922;pointer-events:none;}text{font-size:1.4rem;}"],(function(e){return"translate(0, ".concat(e.spacing,"px)")})),l=function(e){var t=e.ticks,n=e.xCircle,r=e.yCircle,i=e.formatNumber,o=e.radiusScale,a=e.xLabel,l=e.spacing;return(0,c.jsx)(s,{children:t.map((function(e,t){return(0,c.jsxs)(d,{spacing:t*l,children:[(0,c.jsx)("circle",{cx:n,cy:r-o(e),r:o(e)}),(0,c.jsx)("text",{dy:"0.32em",x:a,y:r-o(e),children:i(e)})]},t)}))})},u=r.memo(l),p=n(4328),f=o.ZP.path.withConfig({displayName:"BubbleMap__CountryPath",componentId:"sc-3q9xzl-0"})(["fill:#d2d2d2;stroke:white;stroke-width:0.1px;&:hover{fill:#f7b0ad;}"]),h=o.ZP.path.withConfig({displayName:"BubbleMap__SpherePath",componentId:"sc-3q9xzl-1"})(["fill:#eaeaea;opacity:0.3;"]);var m=function(e){var t=e.countries,n=(0,r.useState)("death"),o=n[0],s=n[1],d=(0,r.useRef)(null),l=(0,i.PUr)(),m=function(e){return e.properties[o]};l.domain([0,(0,i.Fp7)(t.features,m)]).range([0,"death"===o?6:3]),(0,r.useEffect)((function(){var e=(0,i.Ys)(d.current);x(e),e.selectAll(".bubble").data(t.features).join("circle").attr("class","bubble").attr("cx",(function(e){return e.properties.projected[0]})).attr("cy",(function(e){return e.properties.projected[1]})).transition().attr("r",(function(e){return l(m(e))}))}));var x=function(e){e.call((0,i.sPX)().on("zoom",(function(t){var n=t.transform;e.attr("transform",n)})))},g=function(e){return void 0===e.properties.case?"No Reported Data":"death"===o?"".concat(e.properties.country,": ").concat((0,a.uf)(e.properties.death)):"".concat(e.properties.country,": ").concat((0,a.uf)(e.properties.case))},v=(0,i.lik)().fitSize([a.bf,a.Cb],t).precision(100),b=(0,i.l49)().projection(v);return function(e,t){e.forEach((function(e){e.properties.projected=t((0,i.cSP)(e))}))}(t.features,v),(0,c.jsxs)("div",{children:[(0,c.jsxs)(p.Lt,{onChange:function(e){return t=e.target.value,s(t);var t},children:[(0,c.jsx)("option",{value:"death",children:"Deaths"}),(0,c.jsx)("option",{value:"case",children:"Cases"})]}),(0,c.jsx)(p.fk,{children:(0,c.jsx)(p.D5,{children:(0,c.jsxs)("svg",{ref:d,width:a.bf,height:a.Cb,children:[(0,c.jsx)("g",{children:(0,c.jsx)(h,{d:b({type:"Sphere"})})}),(0,c.jsx)("g",{children:t.features.map((function(e,t){return(0,c.jsx)(f,{d:b(e),children:(0,c.jsx)("title",{children:g(e)})},t)}))}),(0,c.jsx)(u,{ticks:"death"===o?[335e3,15e4,7e4,1e4]:[2e7,1e7,25e5,2e5],xCircle:50,xLabel:100,yCircle:100,spacing:70,radiusScale:l,formatNumber:a.uf})]})})})]})},x=n(4153);var g=!0,v=function(e){var t=e.countries;return(0,c.jsx)(x.Z,{headTitle:"Bubble Map | Data Visualization",title:"WHO Covid-19 World Dashboard",subTitle:"January 2nd 2021",chartType:"Bubble Map",dataSource:"WHO Coronavirus Disease (COVID-19) Dashboard",dataSourceUrl:"https://covid19.who.int/",children:(0,c.jsx)(m,{countries:t})})}},4153:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(9008),i=n(9521),o=n(1664),a=n(5893),c=i.ZP.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-14gtjlx-0"})(["padding:5rem 5rem 0;p{margin-bottom:0.5rem;@media (max-width:568px){line-height:1.5;}}a{color:currentColor;text-decoration:underline;}"]),s=i.ZP.h1.withConfig({displayName:"Header__Title",componentId:"sc-14gtjlx-1"})(["font-size:3rem;font-weight:700;margin-bottom:1rem;margin-top:5rem;@media (max-width:568px){text-align:center;}"]),d=i.ZP.div.withConfig({displayName:"Header__Logo",componentId:"sc-14gtjlx-2"})(["font-size:2.5rem;margin-bottom:1.5rem;position:fixed;top:5rem;left:5rem;@media (max-width:568px){font-size:3rem;}"]),l=i.ZP.h3.withConfig({displayName:"Header__SubTitle",componentId:"sc-14gtjlx-3"})(["font-size:2rem;color:#696969;margin-bottom:4.5rem;@media (max-width:568px){text-align:center;}"]);var u=function(e){var t=e.title,n=e.subTitle,r=e.chartType,i=e.dataSource,u=e.dataSourceUrl;return t?(0,a.jsxs)(c,{children:[(0,a.jsx)(d,{children:(0,a.jsx)(o.default,{href:"/",children:(0,a.jsx)("a",{children:"\ud83d\udcca"})})}),(0,a.jsx)(s,{children:t}),(0,a.jsx)(l,{children:n}),(0,a.jsxs)("p",{children:["Chart Type: ",r]}),(0,a.jsxs)("p",{children:["Data Source:",(0,a.jsx)("a",{href:u,target:"_blank",children:i})]})]}):null},p=i.ZP.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-1coz6hf-0"})(["padding:1rem 0;text-align:center;"]);var f=function(){return(0,a.jsx)(p,{children:(0,a.jsx)("p",{children:"2024 \xa9 Desh Deepak Kant. All right reserved."})})},h=(0,i.vJ)(["html{"," font-size:62.5%;@media (max-width:992px){"," font-size:56.25%;}@media (max-width:768px){"," font-size:50%;}@media (max-width:320px){"," font-size:43.75%;}scroll-behavior:smooth;}body{margin:0;padding:0;font-family:'Lato',sans-serif;}a{color:currentColor;text-decoration:none;}p{font-size:1.6rem;}"],"","","",""),m=i.ZP.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1m0qv8k-0"})(["display:flex;min-height:100vh;flex-direction:column;main{flex:1;}"]);var x=function(e){var t=e.children,n=e.title,i=e.subTitle,o=e.chartType,c=e.dataSource,s=e.dataSourceUrl,d=e.headTitle;return(0,a.jsxs)(m,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:d})}),(0,a.jsx)(h,{}),(0,a.jsx)(u,{title:n,subTitle:i,chartType:o,dataSource:c,dataSourceUrl:s}),(0,a.jsx)("main",{children:t}),(0,a.jsx)(f,{})]})}},4328:function(e,t,n){"use strict";n.d(t,{ZA:function(){return i},cp:function(){return o},fk:function(){return a},D5:function(){return c},Lt:function(){return s},pf:function(){return d}});var r=n(9521),i=r.ZP.g.withConfig({displayName:"style__Group",componentId:"sc-aoth4x-0"})(["transform:",";"],(function(e){return"translate(".concat(e.right,"px, ").concat(e.top,"px)")})),o=(0,r.F4)(["to{stroke-dashoffset:0;}"]),a=r.ZP.div.withConfig({displayName:"style__MapWrapper",componentId:"sc-aoth4x-1"})(["overflow-x:scroll;width:100%;"]),c=r.ZP.div.withConfig({displayName:"style__Map",componentId:"sc-aoth4x-2"})(["overflow:hidden;display:flex;justify-content:center;margin:3rem 0;@media (max-width:992px){display:inline-flex;justify-content:initial;}svg{display:inline-table;}"]),s=r.ZP.select.withConfig({displayName:"style__Dropdown",componentId:"sc-aoth4x-3"})(["font-size:1.4rem;padding:0.3rem 0.8rem;margin:3rem 0 3rem 5rem;&:focus{outline:0;}"]),d=r.ZP.div.withConfig({displayName:"style__TooltipWrapper",componentId:"sc-aoth4x-4"})(["position:absolute;z-index:4000;font-size:1.2rem;padding:1.5rem;box-shadow:0px 3px 15px rgba(0,0,0,0.2);background-color:white;pointer-events:none;h3,li:not(:last-child){margin-bottom:0.7rem;}h3{font-size:1.4rem;}"])},40:function(e,t,n){"use strict";n.d(t,{uf:function(){return r},rl:function(){return i},Uw:function(){return o},bf:function(){return a},Cb:function(){return c}});var r=(0,n(8860).WUZ)(","),i=function(e){return e.toFixed(2)+"%"},o=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)},a=1e3,c=500},3059:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/covid19-dashboard",function(){return n(2339)}])}},function(e){e.O(0,[990,860,774,888,179],(function(){return t=3059,e(e.s=t);var t}));var t=e.O();_N_E=t}]);