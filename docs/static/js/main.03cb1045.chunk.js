(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(9),s=n(2),u=n(0),o=function(t){var e=t.sendCategory,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c&&(e(c),i(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value)}})})},j=n(6),d=n.n(j),b=n(8),l=function(){var t=Object(b.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&limit=5&api_key=tKnbcTmpsoPTBUY8vBSbPx0wzSpRWno1"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=t.img;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:e.url,alt:e.title}),Object(u.jsx)("p",{children:e.title})]})},f=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){l(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash animate__repeat-3",children:"Cargando..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(p,{img:t},t.id)}))})]})},m=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"GifExpertApp"}),Object(u.jsx)(o,{sendCategory:function(t){r([t].concat(Object(i.a)(n)))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(f,{category:t},Math.random().toString(36).substring(2))}))})]})};n(16);c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.03cb1045.chunk.js.map