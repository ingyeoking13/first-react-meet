(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(6),i=n.n(c),r=n(32),s=n.n(r),a=(n(38),n(14)),u=(n(39),n(40),n(0));n(42);n(43);function j(t){var e="\n".concat(t.chat);return Object(u.jsx)("article",{class:"main-area",children:Object(u.jsx)("textarea",{class:"text-area",readOnly:!0,value:e})})}n(44);function l(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),i=n[0],r=n[1];return h.send("hihihi"),Object(u.jsxs)("div",{class:"user-chat-input",children:[Object(u.jsx)("textarea",{class:"user-input",onChange:function(t){var e=t.target;return r(e.value)}}),Object(u.jsx)("button",{class:"submit",onClick:function(){t.OnSubmit(i)},children:"submit"})]})}var o=n(33),h=n.n(o)()("http://127.0.0.1:3000",{});var d=function(){var t=Object(c.useState)({}),e=Object(a.a)(t,2),n=e[0],i=e[1];return h.connect(),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{class:"app-header",children:Object(u.jsx)("h1",{children:"react with socket.io"})}),Object(u.jsx)("div",{class:"drawer-menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"1"}),Object(u.jsx)("li",{children:"2"}),Object(u.jsx)("li",{children:"3"}),Object(u.jsx)("li",{children:"4"})]})}),Object(u.jsxs)("div",{class:"float-right",children:[j(n),l({OnSubmit:function(t){return i({chat:t})}})]})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),b()}},[[76,1,2]]]);
//# sourceMappingURL=main.186924ae.chunk.js.map