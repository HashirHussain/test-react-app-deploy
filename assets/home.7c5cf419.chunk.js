(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{448:function(e,n,t){(n=e.exports=t(361)(!1)).push([e.i,':root{--font-family-base:"Segoe UI","HelveticaNeue-Light",sans-serif;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px}.fisf4{padding-left:20px;padding-right:20px}._1yZ9z{margin:0 auto;padding:0 0 40px;max-width:1000px;max-width:var(--max-content-width)}._1ATux{margin:0 0 32px;margin:0 0 2rem}._3bA7_{font-size:24px;font-size:1.5rem}.ZV_8Q h1,.ZV_8Q h2,.ZV_8Q h3,.ZV_8Q h4,.ZV_8Q h5,.ZV_8Q h6{font-size:18px;font-size:1.125rem}.ZV_8Q pre{white-space:pre-wrap;font-size:14px;font-size:.875rem}.ZV_8Q img{max-width:100%}',""]),n.locals={root:"fisf4",container:"_1yZ9z",newsItem:"_1ATux",newsTitle:"_3bA7_",newsDesc:"ZV_8Q"}},449:function(e,n,t){var r=t(448),o=t(360);"string"==typeof r&&(r=[[e.i,r,""]]),e.exports=r.locals||{},e.exports._getContent=function(){return r},e.exports._getCss=function(){return r.toString()},e.exports._insertCss=function(e){return o(r,e)}},498:function(e,n,t){"use strict";t.r(n);var r,o=t(46),i=t.n(o),a=(t(47),t(363)),s=t.n(a),c=t(449),u=t.n(c);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n,t,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:r,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,n){return!n||"object"!==f(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d,w=l("h1",{},void 0,"React.js News"),v=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),y(this,m(n).apply(this,arguments))}var t,r,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,i.a.Component),t=n,(r=[{key:"render",value:function(){return l("div",{className:u.a.root},void 0,l("div",{className:u.a.container},void 0,w,this.props.news.map(function(e){return l("article",{className:u.a.newsItem},e.link,l("h1",{className:u.a.newsTitle},void 0,l("a",{href:e.link},void 0,e.title)),l("div",{className:u.a.newsDesc,dangerouslySetInnerHTML:{__html:e.content}}))})))}}])&&p(t.prototype,r),o&&p(t,o),n}(),b=s()(u.a)(v),x=t(365);function _(e,n,t,r){d||(d="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===i)n.children=r;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:d,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function g(){var e;return e=regeneratorRuntime.mark(function e(n){var t,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fetch,e.next=3,t("/graphql",{body:JSON.stringify({query:"{news{title,link,content}}"})});case 3:return r=e.sent,e.next=6,r.json();case 6:if(o=e.sent,(i=o.data)&&i.news){e.next=10;break}throw new Error("Failed to load the news feed.");case 10:return e.abrupt("return",{title:"React Starter Kit",chunks:["home"],component:_(x.a,{},void 0,_(b,{news:[]}))});case 11:case"end":return e.stop()}},e,this)}),(g=function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function a(e,n){try{var t=i[e](n),a=t.value}catch(e){return void o(e)}t.done?r(a):Promise.resolve(a).then(s,c)}function s(e){a("next",e)}function c(e){a("throw",e)}s()})}).apply(this,arguments)}n.default=function(e){return g.apply(this,arguments)}}}]);
//# sourceMappingURL=home.7c5cf419.chunk.js.map