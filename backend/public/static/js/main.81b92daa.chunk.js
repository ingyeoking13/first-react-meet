(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(32),a=n.n(i),r=(n(38),n(9)),j=(n(39),n(40),n(0));n(42);n(43);function u(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],i=n[1];return b.on("message",(function(e){i(s+"\n"+e)})),Object(j.jsx)("article",{class:"main-area",children:Object(j.jsx)("textarea",{class:"text-area",readOnly:!0,value:s})})}n(44);function l(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],i=n[1];return Object(j.jsxs)("div",{class:"user-chat-input",children:[Object(j.jsx)("textarea",{class:"user-input",onChange:function(e){var t=e.target;return i(t.value)}}),Object(j.jsx)("button",{class:"submit",onClick:function(){b.emit("message",s)},children:"submit"})]})}var o=n(33),b=n.n(o)()("http://127.0.0.1:3000",{});var d=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2);return t[0],t[1],b.connect(),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{class:"app-header",children:Object(j.jsx)("h1",{children:"react with socket.io"})}),Object(j.jsx)("div",{class:"drawer-menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"1"}),Object(j.jsx)("li",{children:"2"}),Object(j.jsx)("li",{children:"3"}),Object(j.jsx)("li",{children:"4"})]})}),Object(j.jsxs)("div",{class:"float-right",children:[u(),l()]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),h()}},[[76,1,2]]]);
//# sourceMappingURL=main.81b92daa.chunk.js.map