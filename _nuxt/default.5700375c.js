import ne from"./Header.85d35202.js";import ie from"./Footer.678ae34a.js";import{u as re}from"./composables.05f1f161.js";import{l as ae,J as ce,D as ue,o as se,E as de,F as ee,M as te,K as fe}from"./entry.6eb49088.js";import{c as le,g as pe}from"./_commonjsHelpers.726de751.js";function me(){const K=ae();return{createSEOMeta:p=>[{hid:"og:type",name:"og:type",content:p.type||"website"},{hid:"og:title",property:"og:title",content:p.title},{hid:"description",name:"description",content:p.description},{hid:"og:description",property:"og:description",content:p.description},{hid:"og:image",property:"og:image",content:p.image||"/avatar.webp"},{hid:"og:url",property:"og:url",content:K.baseUrl+p.url},{hid:"twitter:card",name:"twitter:card",content:p.cardType||"summary"}]}}var oe={exports:{}};(function(K,X){(function(p,c){K.exports=c()})(le,function(){return function(p){function c(o){if(r[o])return r[o].exports;var u=r[o]={exports:{},id:o,loaded:!1};return p[o].call(u.exports,u,u.exports,c),u.loaded=!0,u.exports}var r={};return c.m=p,c.c=r,c.p="dist/",c(0)}([function(p,c,r){function o(n){return n&&n.__esModule?n:{default:n}}var u=Object.assign||function(n){for(var x=1;x<arguments.length;x++){var A=arguments[x];for(var H in A)Object.prototype.hasOwnProperty.call(A,H)&&(n[H]=A[H])}return n},b=r(1),w=(o(b),r(6)),i=o(w),m=r(7),a=o(m),d=r(8),s=o(d),v=r(9),_=o(v),j=r(10),C=o(j),V=r(11),G=o(V),J=r(14),I=o(J),M=[],Y=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},z=function(){var n=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(n&&(Y=!0),Y)return M=(0,G.default)(M,g),(0,C.default)(M,g.once),M},L=function(){M=(0,I.default)(),z()},t=function(){M.forEach(function(n,x){n.node.removeAttribute("data-aos"),n.node.removeAttribute("data-aos-easing"),n.node.removeAttribute("data-aos-duration"),n.node.removeAttribute("data-aos-delay")})},e=function(n){return n===!0||n==="mobile"&&_.default.mobile()||n==="phone"&&_.default.phone()||n==="tablet"&&_.default.tablet()||typeof n=="function"&&n()===!0},f=function(n){g=u(g,n),M=(0,I.default)();var x=document.all&&!window.atob;return e(g.disable)||x?t():(g.disableMutationObserver||s.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?z(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){z(!0)}):document.addEventListener(g.startEvent,function(){z(!0)}),window.addEventListener("resize",(0,a.default)(z,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(z,g.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,C.default)(M,g.once)},g.throttleDelay)),g.disableMutationObserver||s.default.ready("[data-aos]",L),M)};p.exports={init:f,refresh:z,refreshHard:L}},function(p,c){},,,,,function(p,c){(function(r){function o(e,f,n){function x(l){var O=E,W=N;return E=N=void 0,P=l,k=e.apply(W,O)}function A(l){return P=l,h=setTimeout(B,f),$?x(l):k}function H(l){var O=l-S,W=l-P,Z=f-O;return q?L(Z,T-W):Z}function F(l){var O=l-S,W=l-P;return S===void 0||O>=f||O<0||q&&W>=T}function B(){var l=t();return F(l)?U(l):void(h=setTimeout(B,H(l)))}function U(l){return h=void 0,y&&E?x(l):(E=N=void 0,k)}function Q(){h!==void 0&&clearTimeout(h),P=0,E=S=N=h=void 0}function R(){return h===void 0?k:U(t())}function D(){var l=t(),O=F(l);if(E=arguments,N=this,S=l,O){if(h===void 0)return A(S);if(q)return h=setTimeout(B,f),x(S)}return h===void 0&&(h=setTimeout(B,f)),k}var E,N,T,k,h,S,P=0,$=!1,q=!1,y=!0;if(typeof e!="function")throw new TypeError(d);return f=m(f)||0,b(n)&&($=!!n.leading,q="maxWait"in n,T=q?z(m(n.maxWait)||0,f):T,y="trailing"in n?!!n.trailing:y),D.cancel=Q,D.flush=R,D}function u(e,f,n){var x=!0,A=!0;if(typeof e!="function")throw new TypeError(d);return b(n)&&(x="leading"in n?!!n.leading:x,A="trailing"in n?!!n.trailing:A),o(e,f,{leading:x,maxWait:f,trailing:A})}function b(e){var f=typeof e>"u"?"undefined":a(e);return!!e&&(f=="object"||f=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":a(e))=="object"}function i(e){return(typeof e>"u"?"undefined":a(e))=="symbol"||w(e)&&g.call(e)==v}function m(e){if(typeof e=="number")return e;if(i(e))return s;if(b(e)){var f=typeof e.valueOf=="function"?e.valueOf():e;e=b(f)?f+"":f}if(typeof e!="string")return e===0?e:+e;e=e.replace(_,"");var n=C.test(e);return n||V.test(e)?G(e.slice(2),n?2:8):j.test(e)?s:+e}var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",s=NaN,v="[object Symbol]",_=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,V=/^0o[0-7]+$/i,G=parseInt,J=(typeof r>"u"?"undefined":a(r))=="object"&&r&&r.Object===Object&&r,I=(typeof self>"u"?"undefined":a(self))=="object"&&self&&self.Object===Object&&self,M=J||I||Function("return this")(),Y=Object.prototype,g=Y.toString,z=Math.max,L=Math.min,t=function(){return M.Date.now()};p.exports=u}).call(c,function(){return this}())},function(p,c){(function(r){function o(t,e,f){function n(y){var l=D,O=E;return D=E=void 0,S=y,T=t.apply(O,l)}function x(y){return S=y,k=setTimeout(F,e),P?n(y):T}function A(y){var l=y-h,O=y-S,W=e-l;return $?z(W,N-O):W}function H(y){var l=y-h,O=y-S;return h===void 0||l>=e||l<0||$&&O>=N}function F(){var y=L();return H(y)?B(y):void(k=setTimeout(F,A(y)))}function B(y){return k=void 0,q&&D?n(y):(D=E=void 0,T)}function U(){k!==void 0&&clearTimeout(k),S=0,D=h=E=k=void 0}function Q(){return k===void 0?T:B(L())}function R(){var y=L(),l=H(y);if(D=arguments,E=this,h=y,l){if(k===void 0)return x(h);if($)return k=setTimeout(F,e),n(h)}return k===void 0&&(k=setTimeout(F,e)),T}var D,E,N,T,k,h,S=0,P=!1,$=!1,q=!0;if(typeof t!="function")throw new TypeError(a);return e=i(e)||0,u(f)&&(P=!!f.leading,$="maxWait"in f,N=$?g(i(f.maxWait)||0,e):N,q="trailing"in f?!!f.trailing:q),R.cancel=U,R.flush=Q,R}function u(t){var e=typeof t>"u"?"undefined":m(t);return!!t&&(e=="object"||e=="function")}function b(t){return!!t&&(typeof t>"u"?"undefined":m(t))=="object"}function w(t){return(typeof t>"u"?"undefined":m(t))=="symbol"||b(t)&&Y.call(t)==s}function i(t){if(typeof t=="number")return t;if(w(t))return d;if(u(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=u(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(v,"");var f=j.test(t);return f||C.test(t)?V(t.slice(2),f?2:8):_.test(t)?d:+t}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="Expected a function",d=NaN,s="[object Symbol]",v=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,C=/^0o[0-7]+$/i,V=parseInt,G=(typeof r>"u"?"undefined":m(r))=="object"&&r&&r.Object===Object&&r,J=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,I=G||J||Function("return this")(),M=Object.prototype,Y=M.toString,g=Math.max,z=Math.min,L=function(){return I.Date.now()};p.exports=o}).call(c,function(){return this}())},function(p,c){function r(m){var a=void 0,d=void 0;for(a=0;a<m.length;a+=1)if(d=m[a],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!o()}function b(m,a){var d=window.document,s=o(),v=new s(w);i=a,v.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(m){m&&m.forEach(function(a){var d=Array.prototype.slice.call(a.addedNodes),s=Array.prototype.slice.call(a.removedNodes),v=d.concat(s);if(r(v))return i()})}Object.defineProperty(c,"__esModule",{value:!0});var i=function(){};c.default={isSupported:u,ready:b}},function(p,c){function r(d,s){if(!(d instanceof s))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var u=function(){function d(s,v){for(var _=0;_<v.length;_++){var j=v[_];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(s,j.key,j)}}return function(s,v,_){return v&&d(s.prototype,v),_&&d(s,_),s}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=function(){function d(){r(this,d)}return u(d,[{key:"phone",value:function(){var s=o();return!(!b.test(s)&&!w.test(s.substr(0,4)))}},{key:"mobile",value:function(){var s=o();return!(!i.test(s)&&!m.test(s.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();c.default=new a},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var r=function(u,b,w){var i=u.node.getAttribute("data-aos-once");b>u.position?u.node.classList.add("aos-animate"):typeof i<"u"&&(i==="false"||!w&&i!=="true")&&u.node.classList.remove("aos-animate")},o=function(u,b){var w=window.pageYOffset,i=window.innerHeight;u.forEach(function(m,a){r(m,i+w,b)})};c.default=o},function(p,c,r){function o(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(c,"__esModule",{value:!0});var u=r(12),b=o(u),w=function(i,m){return i.forEach(function(a,d){a.node.classList.add("aos-init"),a.position=(0,b.default)(a.node,m.offset)}),i};c.default=w},function(p,c,r){function o(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(c,"__esModule",{value:!0});var u=r(13),b=o(u),w=function(i,m){var a=0,d=0,s=window.innerHeight,v={offset:i.getAttribute("data-aos-offset"),anchor:i.getAttribute("data-aos-anchor"),anchorPlacement:i.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(d=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(i=document.querySelectorAll(v.anchor)[0]),a=(0,b.default)(i).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=i.offsetHeight/2;break;case"bottom-bottom":a+=i.offsetHeight;break;case"top-center":a+=s/2;break;case"bottom-center":a+=s/2+i.offsetHeight;break;case"center-center":a+=s/2+i.offsetHeight/2;break;case"top-top":a+=s;break;case"bottom-top":a+=i.offsetHeight+s;break;case"center-top":a+=i.offsetHeight/2+s}return v.anchorPlacement||v.offset||isNaN(m)||(d=m),a+d};c.default=w},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var r=function(o){for(var u=0,b=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)u+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),b+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:b,left:u}};c.default=r},function(p,c){Object.defineProperty(c,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(u){return{node:u}})};c.default=r}])})})(oe);const be=pe(oe.exports),ve={setup(){re({title:"Eyuel Solomon - Web Designer + Frontend Developer",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"keywords",name:"keywords",content:"Frontend developer + designer in ethiopia, Web app developer, website designer, Eyuel Solomon"},...me().createSEOMeta({title:"Eyuel Solomon - Web Designer + Frontend Developer",description:"Hello, I'm Eyuel. I'm a Web Designer and a Front-end Developer from Ethiopia",image:"",url:""})],link:[{rel:"icon",type:"image/x-icon",href:"/logo-icon.svg"}]}),ue(()=>{be.init({})})}},ge={class:"bg-gray-900 text-gray-50"},ye={class:""},he={class:"pt-16 md:pt-20 relative overflow-clip"};function we(K,X,p,c,r,o){const u=ne,b=ie;return se(),de("div",ge,[ee("div",ye,[te(u),ee("main",he,[fe(K.$slots,"default")]),te(b)])])}const Me=ce(ve,[["render",we]]);export{Me as default};
