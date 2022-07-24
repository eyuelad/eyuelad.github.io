(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{287:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(path){return n(288)("./"+path)}},288:function(t,e,n){var map={"./icons/bi_brush.svg":289,"./icons/bi_code-square.svg":290,"./works/dev/arise-tech-website/cover.webp":291,"./works/dev/batelew/cover.png":292,"./works/dev/hiyab-africa-website/cover.webp":293,"./works/dev/loline-blog/cover.webp":294,"./works/dev/loline-mag-website/cover.png":295,"./works/dev/menurize-landing-page/cover.png":296};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=288},289:function(t,e,n){t.exports=n.p+"img/bi_brush.228411b.svg"},290:function(t,e,n){t.exports=n.p+"img/bi_code-square.55013e8.svg"},291:function(t,e,n){t.exports=n.p+"img/cover.b9b7132.webp"},292:function(t,e,n){t.exports=n.p+"img/cover.bf88870.png"},293:function(t,e,n){t.exports=n.p+"img/cover.dcea7a5.webp"},294:function(t,e,n){t.exports=n.p+"img/cover.54545e7.webp"},295:function(t,e,n){t.exports=n.p+"img/cover.8a86ead.png"},296:function(t,e,n){t.exports=n.p+"img/cover.0d10304.png"},297:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-8 lg:py-20",attrs:{id:"hero-home"}},[e("div",{staticClass:"lg:container mx-auto p-4 px-6 md:px-8 grid md:grid-cols-12 gap-6 md:gap-12 2xl:gap-20"},[e("div",{staticClass:"flex items-center col-span-12 md:col-span-6 order-2 md:order-1"},[e("div",[t._m(0),t._v(" "),e("div",{staticClass:"mb-8 md:mb-12 text-lg xs:text-xl",attrs:{"data-aos":"zoom-in","data-aos-once":"true","data-aos-duration":"500"}},[t._v("\n          I'm Eyuel, a Web Designer + Fontend Developer based in Ethiopia.\n        ")]),t._v(" "),e("a",{staticClass:"btn-default bg-sky-500 hover:bg-sky-400",attrs:{href:"#works","data-aos":"zoom-in","data-aos-once":"true"}},[e("span",[t._v("Portfolio")]),t._v(" "),e("span",[e("svg",{staticClass:"h-5 w-5 fill-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clip-rule":"evenodd"}})])])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 md:mb-12 text-sky-200 text-5xl xs:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"},[e("div",{attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[t._v("\n            Let's\n            "),e("span",{staticClass:"text-sky-50"},[t._v("Build")])]),t._v(" "),e("div",{attrs:{"data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"100"}},[e("span",{staticClass:"text-sky-50"},[t._v("Amazing")]),t._v(" "),e("span",{},[t._v("Things")])]),t._v(" "),e("div",{attrs:{"data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"200"}},[t._v("\n            On The\n            "),e("span",{staticClass:"text-sky-50"},[t._v("Web")])])])},function(){var t=this._self._c;return t("div",{staticClass:"flex items-center col-span-12 md:col-span-6 order-1 md:order-2",attrs:{"data-aos":"zoom-in","data-aos-once":"true","data-aos-duration":"800"}},[t("img",{staticClass:"w-full max-h-72 md:max-h-96 rounded-3xl object-contain bg-sky-900/10",attrs:{src:"/images/web-1-10.png",alt:"web design + web development"}})])}],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(47),{data:function(){return{works:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchRecentWorks();case 2:t.works=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getAssetImage:n(287).a,fetchRecentWorks:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingWorks=!0,e.next=3,t.$content("works").where({status:!0}).only(["title","description","img","slug","tags","url"]).sortBy("createdAt","desc").limit(4).fetch();case 3:return n=e.sent,t.loadingWorks=!1,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()}}}),l=n(24),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"works"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[t._m(0),t._v(" "),e("div",{staticClass:"flex gap-4 snap-x snap-mandatory overflow-x-auto py-4 rounded-lg"},t._l(t.works,(function(n,i){return e("div",{staticClass:"w-3/5 md:w-2/5 xl:w-1/3 2xl:w-[30%] snap-center shrink-0"},[e("a",{staticClass:"block p-4 lg:p-5 overflow-hidden rounded-lg bg-sky-900/50 duration-300 hover:-translate-y-2 hover:bg-sky-900 hover:text-white",attrs:{href:n.url,target:"_blank"}},[e("img",{staticClass:"mb-2 rounded-lg aspect-[1.6] object-cover bg-gray-900",attrs:{src:t.getAssetImage(n.img),alt:n.title}}),t._v(" "),e("h4",{staticClass:"text-sm sm:text-base font-medium"},[t._v(t._s(n.title))])])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-4 md:mb-12 flex items-center justify-between"},[t("h2",{staticClass:"text-4xl"},[this._v("Recent Works")])])}],!1,null,null,null);e.default=component.exports},299:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{services:[{title_sub:"",title:"Web Design",description:"...",icon:"icons/bi_brush.svg",style:"",items:["Website & landing page design","Dashboard application design","Email template design, ..."]},{title_sub:"Frontend",title:"Web Development",description:"...",icon:"icons/bi_code-square.svg",style:"",items:["Website & web app development","VueJs, NuxtJs, AlpineJs","HTML, CSS, JavaScript"]}]}},methods:{getAssetImage:n(287).a}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"services"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[t._m(0),t._v(" "),e("div",{staticClass:"grid md:grid-cols-12 gap-4 md:gap-6 pb-2 rounded-lg"},t._l(t.services,(function(n,i){return e("div",{staticClass:"mt-14 xl:mt-16 px-4 pt-0 pb-6 md:col-span-6 xl:col-span-5 flex flex-col items-center justify-between gap-6 rounded-3xl bg-sky-900/20",class:{"xl:col-start-2":0==i},attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"500","data-aos-delay":200*i,"data-aos-anchor-placement":"top-bottom"}},[e("div",{staticClass:"relative flex flex-col items-center text-center"},[e("div",{staticClass:"p-6 md:p-8 w-fit rounded-full bg-sky-50 absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-lg shadow-sky-900/20 transition-all duration-300"},[e("img",{staticClass:"h-6 w-6 md:h-10 md:w-10",attrs:{src:t.getAssetImage(n.icon)}})]),t._v(" "),e("h4",{staticClass:"relative mt-16 md:mt-20 text-sky-400 text-xl sm:text-2xl md:text-4xl font-bold"},[n.title_sub?e("div",{staticClass:"absolute -top-1 sm:-top-2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm sm:text-base font-medium"},[t._v("\n              "+t._s(n.title_sub)+"\n            ")]):t._e(),t._v("\n            "+t._s(n.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(n.items,(function(n,i){return e("div",{staticClass:"flex items-center gap-2"},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})]),t._v(" "),e("div",[t._v(t._s(n))])])})),0),t._v(" "),e("div",{staticClass:"flex justify-center gap-3"})])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-4 md:mb-12 flex justify-center"},[t("h2",{staticClass:"text-4xl"},[this._v("Services")])])}],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);var r={props:["text","action"],data:function(){return{}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"cta"}},[e("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[e("div",{staticClass:"rounded-xl p-6 py-8 md:p-12 bg-black grid md:grid-cols-12 gap-4"},[e("div",{staticClass:"md:col-span-10 lg:col-span-8 2xl:col-span-6 md:col-start-2 lg:col-start-3 2xl:col-start-4 flex flex-col sm:flex-row items-center gap-6 md:gap-8"},[e("img",{staticClass:"w-40 bg-sky-800/10 object-contain aspect-square",attrs:{src:"/images/web-1-10.png",alt:""}}),t._v(" "),e("div",{staticClass:"text-center sm:text-left"},[e("div",{staticClass:"mb-6 md:mb-8 text-2xl sm:text-2xl md:text-4xl font-bold"},[t._v("\n            "+t._s(t.text)+"\n          ")]),t._v(" "),e("a",{staticClass:"mx-auto sm:mx-0 btn-default bg-sky-500 hover:bg-sky-400",attrs:{href:"mailto:eyuelsolomonad@gmail.com","data-aos":"zoom-in","data-aos-once":"true"}},[t._v("\n            "+t._s(t.action)+"\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var r=n(24),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{},[e("HomeHero"),t._v(" "),e("HomeWorks"),t._v(" "),e("HomeServices"),t._v(" "),e("SharedCTA",{attrs:{text:"Do you have a Web Project in Mind?",action:"Let's Work Together!"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeHero:n(297).default,HomeWorks:n(298).default,HomeServices:n(299).default,SharedCTA:n(300).default})}}]);