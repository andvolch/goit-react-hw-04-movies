(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{46:function(t,e,r){"use strict";r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return p})),r.d(e,"b",(function(){return h})),r.d(e,"a",(function(){return _})),r.d(e,"c",(function(){return m}));var a=r(49),n=r.n(a),c=r(50),o=r(51),s=r.n(o),i="e34f3290161d1b3f73683dcba0238c76";function u(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(n.a.mark((function t(e){var r,a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="trending/movie/day?api_key=".concat(i),t.prev=1,t.next=4,s.a.get(r);case 4:return a=t.sent,c=a.data.results,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function p(t,e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(n.a.mark((function t(e,r){var a,c,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="search/movie?query=".concat(e,"&api_key=").concat(i,"&language=en-US&page=").concat(r,"&include_adult=false"),t.prev=1,t.next=4,s.a.get(a);case 4:return c=t.sent,o=c.data.results,t.abrupt("return",o);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(n.a.mark((function t(e){var r,a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,s.a.get(r);case 4:return a=t.sent,c=a.data,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function _(t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(n.a.mark((function t(e){var r,a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t.prev=1,t.next=4,s.a.get(r);case 4:return a=t.sent,c=a.data.cast,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(n.a.mark((function t(e){var r,a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),t.prev=1,t.next=4,s.a.get(r);case 4:return a=t.sent,c=a.data.results,t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3/"},52:function(t,e,r){t.exports={list:"List_list__3D-U0"}},53:function(t,e,r){t.exports={item:"ItemList_item__12lSE",text_date:"ItemList_text_date__UC3Xz",link:"ItemList_link__feOOO"}},54:function(t,e,r){t.exports={button:"Button_button__TXRRH",container:"Button_container__2Ma9P"}},55:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r(11);var n=r(8);function c(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},56:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var a=r(52),n=r.n(a),c=r(5),o=r(53),s=r.n(o),i=r(2);function u(t){var e=t.backdrop_path,r=t.original_title,a=(t.poster_path,t.release_date),n=t.vote_average,o=t.movieId;return Object(i.jsx)("li",{className:s.a.item,children:Object(i.jsx)(c.b,{to:"/movies/".concat(o),className:s.a.link,children:Object(i.jsxs)("article",{children:[Object(i.jsx)("img",{src:"https://image.tmdb.org/t/p/w780".concat(e),alt:r}),Object(i.jsx)("h3",{children:r}),Object(i.jsxs)("p",{children:["Release date:",Object(i.jsx)("span",{className:s.a.text_date,children:a})]}),Object(i.jsxs)("p",{children:["Rating: ",n]})]})})})}function l(t){var e=t.list;return Object(i.jsx)("ul",{className:n.a.list,children:e.map((function(t){var e=t.id,r=t.backdrop_path,a=t.original_title,n=t.poster_path,c=t.release_date,o=t.vote_average;return Object(i.jsx)(u,{movieId:e,backdrop_path:r,original_title:a,poster_path:n,release_date:c,vote_average:o},e)}))})}},85:function(t,e,r){t.exports={searchbar:"Searchbar_searchbar__1rgrd",searchForm:"Searchbar_searchForm__3j5SU",searchForm__button:"Searchbar_searchForm__button__1mv5T",searchForm__label:"Searchbar_searchForm__label__2ippm",searchForm__input:"Searchbar_searchForm__input__3p365"}},92:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var a=r(55),n=r(6),c=r(0),o=r(46),s=r(12),i=r(85),u=r.n(i),l=r(2);function p(t){var e=t.onSubmit,r=Object(c.useState)(""),a=Object(n.a)(r,2),o=a[0],i=a[1];return Object(l.jsx)("header",{className:u.a.searchbar,children:Object(l.jsxs)("form",{className:u.a.searchForm,onSubmit:function(t){if(t.preventDefault(),""===o.trim())return s.b.error("Enter a normal query!");e(o),i("")},children:[Object(l.jsx)("button",{type:"submit",className:u.a.searchForm__button,children:Object(l.jsx)("span",{className:u.a.searchForm__label,children:"Search images and fotos"})}),Object(l.jsx)("input",{className:u.a.searchForm__input,type:"text",name:"search",value:o,placeholder:"Search movies",onChange:function(t){i(t.target.value.toLowerCase())}})]})})}var b=r(56),h=r(54),f=r.n(h),_=function(t){var e=t.loadMore;return Object(l.jsx)("div",{className:f.a.container,children:Object(l.jsx)("button",{type:"button",className:f.a.button,onClick:e,children:"Load more"})})};function d(){var t=Object(c.useState)(""),e=Object(n.a)(t,2),r=e[0],s=e[1],i=Object(c.useState)(1),u=Object(n.a)(i,2),h=u[0],f=u[1],d=Object(c.useState)(null),m=Object(n.a)(d,2),j=m[0],v=m[1];Object(c.useEffect)((function(){r&&function(t,e){Object(o.e)(t,e).then((function(t){v([].concat(Object(a.a)(j),Object(a.a)(t)))})).catch((function(t){return console.log(t)}))}(r,h)}),[r,h]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{onSubmit:function(t){s(t),f(1),v([])}}),j&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{list:j}),Object(l.jsx)(_,{loadMore:function(){f((function(t){return t+1}))}})]})]})}}}]);
//# sourceMappingURL=movies-view.b020d81d.chunk.js.map