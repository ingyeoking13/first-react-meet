(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(33),s=n.n(r),a=(n(39),n(7)),o=(n(40),n(41),n(0));n(43);function u(){var t=Object(c.useState)(),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){f.on("userUpdate",(function(t){i(t)}))})),Object(o.jsx)("div",{class:"drawer-menu",children:Object(o.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(o.jsx)("li",{children:t})}))})})}n(44);function O(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),i=n[0],r=n[1];function s(t){r(i+"\n"+t)}return Object(c.useEffect)((function(){f.on("message",s)})),Object(o.jsx)("article",{class:"main-area",children:Object(o.jsx)("textarea",{class:"text-area",readOnly:!0,value:i})})}n(45);function j(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),i=n[0],r=n[1];return Object(o.jsxs)("div",{class:"user-chat-input",children:[Object(o.jsx)("textarea",{class:"user-input",onChange:function(t){var e=t.target;return r(e.value)}}),Object(o.jsx)("button",{class:"submit",onClick:function(){f.emit("message",i)},children:"submit"})]})}var d=n(34),l=n.n(d),b=(n(76),"");console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NODE_ENV),b="production"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_NODE_ENV?"http://101.101.218.26:3002/":"http://127.0.0.1:3000";var f=l()(b,{});var h=function(){var t=Object(c.useState)({}),e=Object(a.a)(t,2);return e[0],e[1],f.connect(),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{class:"app-header",children:Object(o.jsx)("h1",{children:"react with socket.io"})}),u(),Object(o.jsxs)("div",{class:"float-right",children:[O(),j()]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),v()}},[[77,1,2]]]);
//# sourceMappingURL=main.4a92f026.chunk.js.map