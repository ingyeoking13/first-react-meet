(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(32),r=n.n(i),a=(n(38),n(9)),u=(n(39),n(40),n(0));n(42);n(43);function j(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0],i=n[1];function r(e){i(s+"\n"+e)}return Object(c.useEffect)((function(){return b.on("message",r),function(){b.off("message",r)}})),Object(u.jsx)("article",{class:"main-area",children:Object(u.jsx)("textarea",{class:"text-area",readOnly:!0,value:s})})}n(44);function l(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0],i=n[1];return Object(u.jsxs)("div",{class:"user-chat-input",children:[Object(u.jsx)("textarea",{class:"user-input",onChange:function(e){var t=e.target;return i(t.value)}}),Object(u.jsx)("button",{class:"submit",onClick:function(){b.emit("message",s)},children:"submit"})]})}var o=n(33),b=n.n(o)()("http://127.0.0.1:3000",{});var d=function(){var e=Object(c.useState)({}),t=Object(a.a)(e,2);return t[0],t[1],b.connect(),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{class:"app-header",children:Object(u.jsx)("h1",{children:"react with socket.io"})}),Object(u.jsx)("div",{class:"drawer-menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"1"}),Object(u.jsx)("li",{children:"2"}),Object(u.jsx)("li",{children:"3"}),Object(u.jsx)("li",{children:"4"})]})}),Object(u.jsxs)("div",{class:"float-right",children:[j(),l()]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[76,1,2]]]);
//# sourceMappingURL=main.be9f935c.chunk.js.map