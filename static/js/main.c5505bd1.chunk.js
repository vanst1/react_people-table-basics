(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),r=c(10),a=(c(35),c(36),c(3)),s=(c(37),c(14)),j=c.n(s),l=c(2),i=function(e){var t=e.to,c=e.text;return Object(l.jsx)(r.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},o=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(i,{to:"/",text:"Home"}),Object(l.jsx)(i,{to:"/people",text:"People"})]})})})},b=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),h=c(6),u=c(5),x=c(0),O=c.n(x),p="https://mate-academy.github.io/react_people-table/api/people.json";function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(p)})).then((function(e){return e.json()}));var e}c(39);var f=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},v=function(e){var t=e.person;return Object(l.jsx)(r.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},g=O.a.memo((function(e){var t=e.person,c=e.selectedPersonSlug,n=e.mother,r=e.father,a=t.slug===c,s=t.motherName||"-",i=t.fatherName||"-",o=n?Object(l.jsx)(v,{person:n}):s,b=r?Object(l.jsx)(v,{person:r}):i;return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":a}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(v,{person:t})}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)("td",{children:o}),Object(l.jsx)("td",{children:b})]})})),N=O.a.memo((function(e){var t=e.people,c=e.isError,n=e.selectedPersonSlug;return c?Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):t.length?Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var c=t.find((function(t){return t.name===e.motherName}))||null,r=t.find((function(t){return t.name===e.fatherName}))||null;return Object(l.jsx)(g,{person:e,selectedPersonSlug:n,mother:c,father:r},e.slug)}))})]}):Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})),w=function(){var e=Object(x.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(x.useState)(!1),s=Object(u.a)(r,2),j=s[0],i=s[1],o=Object(x.useState)(!0),b=Object(u.a)(o,2),O=b[0],p=b[1],v=Object(a.p)().peopleSlug,g=void 0===v?"":v,w=Object(x.useCallback)(Object(h.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:t=e.sent,n(t),p(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);Object(x.useEffect)((function(){w()}),[]);var y=O&&!j;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsx)("div",{className:"box table-container",children:y?Object(l.jsx)(f,{}):Object(l.jsx)(N,{people:c,isError:j,selectedPersonSlug:g})})})]})},y=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},P=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(a.d,{children:[Object(l.jsx)(a.b,{path:"*",element:Object(l.jsx)(y,{})}),Object(l.jsx)(a.b,{path:"home",element:Object(l.jsx)(a.a,{to:"/",replace:!0})}),Object(l.jsx)(a.b,{path:"/",element:Object(l.jsx)(b,{})}),Object(l.jsxs)(a.b,{path:"people",element:Object(l.jsx)(w,{}),children:[Object(l.jsx)(a.b,{path:":peopleSlug"}),Object(l.jsx)(a.b,{index:!0})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.a,{children:Object(l.jsx)(P,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.c5505bd1.chunk.js.map