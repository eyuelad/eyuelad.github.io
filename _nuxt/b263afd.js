(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{290:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(path){return n(291)("./"+path)}},291:function(t,e,n){var map={"./icons/bi_brush.svg":292,"./icons/bi_code-square.svg":293,"./icons/ph_quotes.svg":294,"./testimonials/doug-nebeker.png":295,"./testimonials/kyo.png":296,"./testimonials/motoki-aoki.png":297,"./works/dev/arise-tech-website/cover.webp":298,"./works/dev/batelew/cover.png":299,"./works/dev/hiyab-africa-website/cover.webp":300,"./works/dev/loline-blog/cover.webp":301,"./works/dev/loline-mag-website/cover.png":302,"./works/dev/menurize-landing-page/cover.png":303};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=291},292:function(t,e,n){t.exports=n.p+"img/bi_brush.228411b.svg"},293:function(t,e,n){t.exports=n.p+"img/bi_code-square.55013e8.svg"},294:function(t,e,n){t.exports=n.p+"img/ph_quotes.c6e6664.svg"},295:function(t,e,n){t.exports=n.p+"img/doug-nebeker.4e901e6.png"},296:function(t,e,n){t.exports=n.p+"img/kyo.a4fe7c8.png"},297:function(t,e,n){t.exports=n.p+"img/motoki-aoki.edcce37.png"},298:function(t,e,n){t.exports=n.p+"img/cover.b9b7132.webp"},299:function(t,e,n){t.exports=n.p+"img/cover.bf88870.png"},300:function(t,e,n){t.exports=n.p+"img/cover.dcea7a5.webp"},301:function(t,e,n){t.exports=n.p+"img/cover.54545e7.webp"},302:function(t,e,n){t.exports=n.p+"img/cover.8a86ead.png"},303:function(t,e,n){t.exports=n.p+"img/cover.0d10304.png"},304:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("0427a84e",content,!0,{sourceMap:!1})},305:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("ee58a2ec",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(304)},307:function(t,e,n){var o=n(47)((function(i){return i[1]}));o.push([t.i,":root{--hero-home__image-offset-y:-40%}@media screen and (max-width:767px){:root{--hero-home__image-offset-y:-10%}}@media screen and (min-width:768px) and (max-width:1024px){:root{--hero-home__image-offset-y:0%}}@-webkit-keyframes animate-hero-home-image{0%{opacity:0;transform:scale(1) translate(40%,-40%);transform:scale(1) translate(40%,var(--hero-home__image-offset-y))}}@keyframes animate-hero-home-image{0%{opacity:0;transform:scale(1) translate(40%,-40%);transform:scale(1) translate(40%,var(--hero-home__image-offset-y))}}.hero-home__image{-webkit-animation:animate-hero-home-image 1s ease .3s backwards;animation:animate-hero-home-image 1s ease .3s backwards}",""]),o.locals={},t.exports=o},308:function(t,e,n){"use strict";n(305)},309:function(t,e,n){var o=n(47)((function(i){return i[1]}));o.push([t.i,"[data-v-37cbd259]::-webkit-scrollbar{width:10px;height:10px;background:transparent}[data-v-37cbd259]::-webkit-scrollbar-track{border-radius:10px;background:rgba(12,74,110,.25)}[data-v-37cbd259]::-webkit-scrollbar-thumb{background:#0c4a6e;border-radius:10px}[data-v-37cbd259]::-webkit-scrollbar-thumb:hover{background:#075985}",""]),o.locals={},t.exports=o},310:function(t,e,n){"use strict";n.r(e);n(33),n(49);var o={mixins:[{methods:{onswipe:function(t,e){var n=e.onSwipeLeft,o=e.onSwipeRight,r=0,l=0;t.addEventListener("touchstart",(function(t){r=t.changedTouches[0].screenX})),t.addEventListener("touchend",(function(t){(l=t.changedTouches[0].screenX)<r&&n(),l>r&&o()}))}}}],data:function(){return{testimonials:[{client_name:"Doug Nebeker",client_company:"Upwork Client",description:"Eyuel is very professional and got the job done in a timely and quality manner. I'll be working with him again.",hasImage:!0,image:"testimonials/doug-nebeker.png",url:"https://www.upwork.com/freelancers/~01267a35e2bccc37e2"},{client_name:"Motoki Aoki",client_company:"Upwork Client",description:"Very quick and nice update! I asked a bit challenging html effect task in my 2nd work with him.\n            His 1st update was perfect and I had nothing to ask further. Good understanding with a professional skillset!",hasImage:!0,image:"testimonials/motoki-aoki.png",url:"https://www.upwork.com/freelancers/~01267a35e2bccc37e2"},{client_name:"Kyo",client_company:"Upwork Client",description:"Eyuel is very top quality of Vue.js developer among all the developers that I hired.\n            He did an amazing job for my Vue.js V2 project.\n            I strongly recommend anyone that looking for a web developer to hire Eyuel without a second thought, and you will never be disappointed.",hasImage:!0,image:"testimonials/kyo.png",url:"https://www.upwork.com/freelancers/~01267a35e2bccc37e2"}],numberOfVisibleTestimonials:3,isPreviousDisabled:!0,isNextDisabled:!1,currentTestimonyIndex:0}},mounted:function(){var t=this;window.innerWidth<768?this.numberOfVisibleTestimonials=1:window.innerWidth<1280&&(this.numberOfVisibleTestimonials=2),window.addEventListener("resize",(function(){window.innerWidth<768?t.numberOfVisibleTestimonials=1:window.innerWidth<1280?t.numberOfVisibleTestimonials=2:t.numberOfVisibleTestimonials=3})),this.onswipe(document.getElementById("testimonials-carousel"),{onSwipeLeft:this.next,onSwipeRight:this.previous})},methods:{getAssetImage:n(290).a,next:function(){this.isNextDisabled||(this.currentTestimonyIndex++,this.currentTestimonyIndex+this.numberOfVisibleTestimonials-1==this.testimonials.length-1&&(this.isNextDisabled=!0),this.isPreviousDisabled=!1,this.handleScroll())},previous:function(){this.previousDisabled||(this.currentTestimonyIndex--,0===this.currentTestimonyIndex&&(this.isPreviousDisabled=!0),this.isNextDisabled=!1,this.handleScroll(!1))},handleScroll:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=document.getElementById("testimonials-carousel"),element=document.getElementById("testimonial-"+this.currentTestimonyIndex);e.scrollBy({left:t?element.offsetWidth:-element.offsetWidth,behavior:"smooth"})}}},r=o,l=n(24),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-gradient-to-b from-gray-800/40 to-transparent",attrs:{id:"testimonials"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[e("div",{staticClass:"mb-4 md:mb-12 flex items-center justify-between"},[e("h2",{staticClass:"text-4xl"},[t._v("What Clients Say")]),t._v(" "),e("div",{staticClass:"flex gap-x-4"},[e("button",{staticClass:"group btn-icon bg-sky-900 disabled:bg-sky-900/50 hover:bg-sky-800",attrs:{disabled:t.isPreviousDisabled},on:{click:function(e){return t.previous()}}},[e("span",[e("svg",{staticClass:"h-5 w-5 stroke-sky-100 group-disabled:stroke-sky-700",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"}})])])]),t._v(" "),e("button",{staticClass:"group btn-icon bg-sky-900 disabled:bg-sky-900/50 hover:bg-sky-800",attrs:{disabled:t.isNextDisabled},on:{click:function(e){return t.next()}}},[e("span",[e("svg",{staticClass:"h-5 w-5 stroke-sky-100 group-disabled:stroke-sky-700",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"}})])])])])]),t._v(" "),e("div",{staticClass:"flex gap-4 md:gap-6 snap-x snap-mandatory rounded-xl overflow-x-hidden",attrs:{id:"testimonials-carousel"}},t._l(t.testimonials,(function(n,i){return e("div",{staticClass:"relative mt-14 xl:mt-16 p-6 md:p-8 shrink-0 w-full md:w-1/2 xl:w-1/3 snap-start flex flex-col justify-between space-y-6 rounded-2xl bg-sky-900/20",attrs:{id:"testimonial-"+i}},[e("div",{staticClass:"peer p-4 w-fit rounded-lg bg-sky-900 absolute top-0 -translate-y-1/2 transition-all duration-300",class:{"animate-pulse-sm":n.hasImage}},[e("img",{staticClass:"h-6 w-6 md:h-8 md:w-8",attrs:{src:t.getAssetImage("icons/ph_quotes.svg")}})]),t._v(" "),e("div",{staticClass:"italic line-clamp-6"},[t._v("\n          "+t._s(n.description)+"\n        ")]),t._v(" "),e("div",{staticClass:"peer"},[e("div",{staticClass:"text-lg font-bold"},[t._v(t._s(n.client_name))]),t._v(" "),e("div",{},[t._v(t._s(n.client_company))])]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:n.hasImage,expression:"testimonial.hasImage"}],staticClass:"rounded-lg w-full h-full p-2 md:p-4 flex justify-center bg-sky-900/95 absolute -top-6 left-0 opacity-0 scale-0 duration-300 peer-hover:scale-100 peer-hover:opacity-100 hover:scale-100 hover:opacity-100",attrs:{href:n.url,target:"_blank"}},[n.hasImage?e("img",{staticClass:"max-h-full object-contain rounded-lg",attrs:{src:t.getAssetImage(n.image)}}):t._e()])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{}}},r=(n(306),n(24)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-8 lg:py-20",attrs:{id:"hero-home"}},[e("div",{staticClass:"relative lg:container mx-auto p-4 px-6 md:px-8 grid md:grid-cols-12 gap-6 md:gap-12 2xl:gap-20"},[e("div",{staticClass:"flex items-center col-span-12 md:col-span-6 order-2 md:order-1"},[e("div",[t._m(0),t._v(" "),e("div",{staticClass:"mb-8 md:mb-12 text-lg xs:text-xl",attrs:{"data-aos":"zoom-in","data-aos-once":"true","data-aos-duration":"500"}},[t._v("\n          I'm Eyuel, a Web Designer + Frontend Developer based in Ethiopia.\n        ")]),t._v(" "),e("a",{staticClass:"btn-default bg-sky-500 hover:bg-sky-400",attrs:{href:"#works","data-aos":"zoom-in","data-aos-once":"true"}},[e("span",[t._v("Portfolio")]),t._v(" "),e("span",[e("svg",{staticClass:"h-5 w-5 fill-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clip-rule":"evenodd"}})])])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 md:mb-12 text-sky-200 text-5xl xs:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"},[e("div",{attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[t._v("\n            Let's\n            "),e("span",{staticClass:"text-sky-50"},[t._v("Build")])]),t._v(" "),e("div",{attrs:{"data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"100"}},[e("span",{staticClass:"text-sky-50"},[t._v("Amazing")]),t._v(" "),e("span",{},[t._v("Things")])]),t._v(" "),e("div",{attrs:{"data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"200"}},[t._v("\n            On The\n            "),e("span",{staticClass:"text-sky-50"},[t._v("Web")])])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center col-span-12 md:col-span-6 order-1 md:order-2"},[t("img",{staticClass:"hero-home__image absolute lg:top-0 right-0 w-full md:w-1/2 object-contain opacity-60 lg:-translate-y-1/3 translate-x-1/4 scale-125 md:scale-150 xl:scale-125",attrs:{src:"/images/web-1-10.png",alt:"web design + web development"}})])}],!1,null,null,null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(50),{data:function(){return{works:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchRecentWorks();case 2:t.works=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getAssetImage:n(290).a,fetchRecentWorks:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingWorks=!0,e.next=3,t.$content("works").where({status:!0}).only(["title","description","img","slug","tags","url"]).sortBy("createdAt","desc").limit(4).fetch();case 3:return n=e.sent,t.loadingWorks=!1,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()}}}),l=(n(308),n(24)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"works"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[t._m(0),t._v(" "),e("div",{staticClass:"flex gap-4 snap-x snap-mandatory overflow-x-auto py-4 rounded-lg"},t._l(t.works,(function(n,i){return e("div",{staticClass:"w-3/5 md:w-2/5 xl:w-1/3 2xl:w-[30%] snap-center shrink-0"},[e("a",{staticClass:"block p-4 lg:p-5 overflow-hidden rounded-lg bg-sky-900/50 duration-300 hover:-translate-y-2 hover:bg-sky-900 hover:text-white",attrs:{href:n.url,target:"_blank"}},[e("img",{staticClass:"mb-2 rounded-lg aspect-[1.6] object-cover bg-gray-900",attrs:{src:t.getAssetImage(n.img),alt:n.title}}),t._v(" "),e("h4",{staticClass:"text-sm sm:text-base font-medium"},[t._v(t._s(n.title))])])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-4 md:mb-12 flex items-center justify-between"},[t("h2",{staticClass:"text-4xl"},[this._v("Recent Works")])])}],!1,null,"37cbd259",null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{services:[{title_sub:"",title:"Web Design",description:"...",icon:"icons/bi_brush.svg",style:"",items:["Website & landing page design","Dashboard application design","Email template design, ..."]},{title_sub:"Frontend",title:"Web Development",description:"...",icon:"icons/bi_code-square.svg",style:"",items:["Website & web app development","VueJs, NuxtJs, AlpineJs","HTML, CSS, JavaScript"]}]}},methods:{getAssetImage:n(290).a}},r=n(24),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"services"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[t._m(0),t._v(" "),e("div",{staticClass:"grid md:grid-cols-12 gap-4 md:gap-6 pb-2 rounded-lg"},t._l(t.services,(function(n,i){return e("div",{staticClass:"mt-14 xl:mt-16 px-4 pt-0 pb-6 md:col-span-6 xl:col-span-5 flex flex-col items-center justify-between gap-6 rounded-3xl bg-sky-900/20",class:{"xl:col-start-2":0==i},attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"500","data-aos-delay":200*i,"data-aos-anchor-placement":"top-bottom"}},[e("div",{staticClass:"relative flex flex-col items-center text-center"},[e("div",{staticClass:"p-6 md:p-8 w-fit rounded-full bg-sky-50 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-sky-900/20 transition-all duration-300"},[e("img",{staticClass:"h-6 w-6 md:h-10 md:w-10",attrs:{src:t.getAssetImage(n.icon)}})]),t._v(" "),e("h4",{staticClass:"relative mt-16 md:mt-20 text-sky-400 text-xl sm:text-2xl md:text-4xl font-bold"},[n.title_sub?e("div",{staticClass:"absolute -top-1 sm:-top-2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm sm:text-base font-medium"},[t._v("\n              "+t._s(n.title_sub)+"\n            ")]):t._e(),t._v("\n            "+t._s(n.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(n.items,(function(n,i){return e("div",{staticClass:"flex items-center gap-2"},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})]),t._v(" "),e("div",[t._v(t._s(n))])])})),0),t._v(" "),e("div",{staticClass:"flex justify-center gap-3"})])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-4 md:mb-12 flex justify-center"},[t("h2",{staticClass:"text-4xl"},[this._v("Services")])])}],!1,null,null,null);e.default=component.exports},314:function(t,e,n){"use strict";n.r(e);var o={props:["text","action"],data:function(){return{}}},r=n(24),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"cta"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[e("div",{staticClass:"rounded-xl p-6 py-8 md:p-12 bg-black grid md:grid-cols-12 gap-4"},[e("div",{staticClass:"md:col-span-10 lg:col-span-8 2xl:col-span-6 md:col-start-2 lg:col-start-3 2xl:col-start-4 flex flex-col sm:flex-row items-center gap-6 md:gap-8"},[e("img",{staticClass:"w-40 bg-sky-800/10 object-contain aspect-square",attrs:{src:"/images/web-1-10.png",alt:""}}),t._v(" "),e("div",{staticClass:"text-center sm:text-left"},[e("div",{staticClass:"mb-6 md:mb-8 text-2xl sm:text-2xl md:text-4xl font-bold"},[t._v("\n            "+t._s(t.text)+"\n          ")]),t._v(" "),e("a",{staticClass:"mx-auto sm:mx-0 btn-default bg-sky-500 hover:bg-sky-400",attrs:{href:"mailto:eyuelsolomonad@gmail.com","data-aos":"zoom-in","data-aos-once":"true"}},[t._v("\n            "+t._s(t.action)+"\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.r(e);var o=n(24),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("div",{},[e("HomeHero"),t._v(" "),e("HomeWorks"),t._v(" "),e("HomeServices"),t._v(" "),e("HomeTestimonials"),t._v(" "),e("SharedCTA",{attrs:{text:"Do you have a Web Project in Mind?",action:"Let's Work Together!"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeHero:n(311).default,HomeWorks:n(312).default,HomeServices:n(313).default,HomeTestimonials:n(310).default,SharedCTA:n(314).default})}}]);