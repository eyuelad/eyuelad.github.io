(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(path){return r(288)("./"+path)}},288:function(e,t,r){var map={"./icons/bi_brush.svg":289,"./icons/bi_code-square.svg":290,"./works/dev/arise-tech-website/cover.webp":291,"./works/dev/batelew/cover.png":292,"./works/dev/hiyab-africa-website/cover.webp":293,"./works/dev/loline-blog/cover.webp":294,"./works/dev/loline-mag-website/cover.png":295,"./works/dev/menurize-landing-page/cover.png":296};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=288},289:function(e,t,r){e.exports=r.p+"img/bi_brush.228411b.svg"},290:function(e,t,r){e.exports=r.p+"img/bi_code-square.55013e8.svg"},291:function(e,t,r){e.exports=r.p+"img/cover.b9b7132.webp"},292:function(e,t,r){e.exports=r.p+"img/cover.bf88870.png"},293:function(e,t,r){e.exports=r.p+"img/cover.dcea7a5.webp"},294:function(e,t,r){e.exports=r.p+"img/cover.54545e7.webp"},295:function(e,t,r){e.exports=r.p+"img/cover.8a86ead.png"},296:function(e,t,r){e.exports=r.p+"img/cover.0d10304.png"},298:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(47),{data:function(){return{works:[]}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchRecentWorks();case 2:e.works=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{getAssetImage:r(287).a,fetchRecentWorks:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingWorks=!0,t.next=3,e.$content("works").where({status:!0}).only(["title","description","img","slug","tags","url"]).sortBy("createdAt","desc").limit(4).fetch();case 3:return r=t.sent,e.loadingWorks=!1,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()}}}),c=r(24),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("section",{attrs:{id:"works"}},[t("div",{staticClass:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},[e._m(0),e._v(" "),t("div",{staticClass:"flex gap-4 snap-x snap-mandatory overflow-x-auto py-4 rounded-lg"},e._l(e.works,(function(r,i){return t("div",{staticClass:"w-3/5 md:w-2/5 xl:w-1/3 2xl:w-[30%] snap-center shrink-0",attrs:{"data-aos":"fade-left","data-aos-once":"true","data-aos-delay":200*i}},[t("a",{staticClass:"block p-4 lg:p-5 overflow-hidden rounded-lg bg-sky-900/50 duration-300 hover:-translate-y-2 hover:bg-sky-900 hover:text-white",attrs:{href:r.url,target:"_blank"}},[t("img",{staticClass:"mb-2 rounded-lg aspect-[1.6] object-cover bg-gray-900",attrs:{src:e.getAssetImage(r.img),alt:r.title}}),e._v(" "),t("h4",{staticClass:"text-sm sm:text-base font-medium"},[e._v(e._s(r.title))])])])})),0)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"mb-12 flex items-center justify-between"},[e("h2",{staticClass:"text-2xl md:text-4xl"},[this._v("Recent Works")])])}],!1,null,null,null);t.default=component.exports}}]);