(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Juyh:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=o.a.createElement;t.default=function(){return a("div",null,a("div",null,"About us"),a("div",null,"Back to"," ",a(s.a,{href:"/",as:"/nextTask/"},a("a",null,"Home"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),u=n("5Uuq"),f=n("KI45");t.__esModule=!0,t.default=void 0;var c,l=f(n("LX0d")),p=n("QmWs"),h=u(n("q1tI")),v=(f(n("17x9")),f(n("nOHt"))),d=(n("P5f7"),n("g/15"));function w(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new l.default,m=window.IntersectionObserver;function k(){return c||(m?c=new m((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:w(e),as:t?w(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,p.resolve)(u,s),a=a?(0,p.resolve)(u,a):s,e.preventDefault();var f=n.props.scroll;null==f&&(f=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()})))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),t}(h.Component);g.propTypes=void 0;var b=g;t.default=b},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,1]]]);