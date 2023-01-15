import{J as f,p as m,j as p,D as _,o as d,E as c,F as e,O as v,P as k,U as y,Q as u,X as b,Y as x,V as I}from"./entry.5083e7a9.js";import{u as j}from"./useImage.dd41f209.js";function E(a,{onSwipeLeft:t,onSwipeRight:n}){let o=0,i=0;function l(){i<o-40&&t(),i>o+40&&n()}a.addEventListener("touchstart",s=>{o=s.changedTouches[0].screenX}),a.addEventListener("touchend",s=>{i=s.changedTouches[0].screenX,l()})}const C={setup(){let a=[{client_name:"Doug Nebeker",client_company:"Upwork Client",description:"Eyuel is very professional and got the job done in a timely and quality manner. I'll be working with him again.",hasImage:!0,image:"testimonials/doug-nebeker.png",url:"https://www.upwork.com/freelancers/~01267a35e2bccc37e2"},{client_name:"Motoki Aoki",client_company:"Upwork Client",description:`Very quick and nice update! I asked a bit challenging html effect task in my 2nd work with him.
            His 1st update was perfect and I had nothing to ask further. Good understanding with a professional skillset!`,hasImage:!0,image:"testimonials/motoki-aoki.png",url:"https://www.upwork.com/freelancers/~01267a35e2bccc37e2"},{client_name:"Kyo",client_company:"Upwork Client",description:`Eyuel is very top quality of Vue.js developer among all the developers that I hired.
            He did an amazing job for my Vue.js V2 project.
            I strongly recommend anyone that looking for a web developer to hire Eyuel without a second thought, and you will never be disappointed.`,hasImage:!0,image:"testimonials/kyo.png",url:"https://www.upwork.com/freelancers/~01267a35e2bccc37e2"}],t=m(3),n=m(0);const o=()=>{r.value||(n.value++,l())},i=()=>{!s.value&&n.value>0&&(n.value--,l(!1))},l=(g=!0)=>{const w=document.getElementById("testimonials-carousel"),h=document.getElementById("testimonial-"+n.value);w.scrollBy({left:g?h.offsetWidth:-h.offsetWidth,behavior:"smooth"})},s=p(()=>n.value===0),r=p(()=>n.value+t.value-1===a.length-1);return _(()=>{window.innerWidth<768?t.value=1:window.innerWidth<1280&&(t.value=2),window.addEventListener("resize",()=>{window.innerWidth<768?t.value=1:window.innerWidth<1280?t.value=2:t.value=3}),E(document.getElementById("testimonials-carousel"),{onSwipeLeft:()=>{o()},onSwipeRight:()=>{i()}})}),{testimonials:a,numberOfVisibleTestimonials:t,currentTestimonyIndex:n,isNextDisabled:r,isPreviousDisabled:s,next:o,previous:i,handleScroll:l,useAssetImage:j}}},B={id:"testimonials",class:"bg-gradient-to-b from-gray-800/40 to-transparent"},D={class:"lg:container mx-auto py-12 md:py-20 px-6 md:px-8"},V={class:"mb-4 md:mb-12 flex items-center justify-between"},W=e("h2",{class:"text-4xl"},"What Clients Say",-1),S={class:"flex gap-x-4"},A=["disabled"],L=e("span",null,[e("svg",{class:"h-5 w-5 stroke-sky-100 group-disabled:stroke-sky-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})])],-1),N=[L],X=["disabled"],q=e("span",null,[e("svg",{class:"h-5 w-5 stroke-sky-100 group-disabled:stroke-sky-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"})])],-1),M=[q],T={id:"testimonials-carousel",class:"flex gap-4 md:gap-6 snap-x snap-mandatory rounded-xl overflow-x-hidden"},U=["id"],z=["src"],O={class:"italic line-clamp-6"},P={class:"peer"},F={class:"text-lg font-bold"},H={class:""},G=["href"],J=["src"];function K(a,t,n,o,i,l){return d(),c("section",B,[e("div",D,[e("div",V,[W,e("div",S,[e("button",{class:"group btn-icon bg-sky-900 disabled:bg-sky-900/50 hover:bg-sky-800",disabled:o.isPreviousDisabled,onClick:t[0]||(t[0]=s=>o.previous())},N,8,A),e("button",{class:"group btn-icon bg-sky-900 disabled:bg-sky-900/50 hover:bg-sky-800",disabled:o.isNextDisabled,onClick:t[1]||(t[1]=s=>o.next())},M,8,X)])]),e("div",T,[(d(!0),c(v,null,k(o.testimonials,(s,r)=>(d(),c("div",{id:"testimonial-"+r,class:"relative mt-14 xl:mt-16 p-6 md:p-8 shrink-0 w-full md:w-1/2 xl:w-1/3 snap-start flex flex-col justify-between space-y-6 rounded-2xl bg-sky-900/20"},[e("div",{class:y(["peer p-4 w-fit rounded-lg bg-sky-900 absolute top-0 -translate-y-1/2 transition-all duration-300",{"animate-pulse-sm":s.hasImage}])},[e("img",{class:"h-6 w-6 md:h-8 md:w-8",src:o.useAssetImage("icons/ph_quotes.svg")},null,8,z)],2),e("div",O,u(s.description),1),e("div",P,[e("div",F,u(s.client_name),1),e("div",H,u(s.client_company),1)]),b(e("a",{class:"rounded-lg w-full h-full p-2 md:p-4 flex justify-center bg-sky-900/95 absolute -top-6 left-0 opacity-0 scale-0 duration-300 peer-hover:scale-100 peer-hover:opacity-100 hover:scale-100 hover:opacity-100",href:s.url,target:"_blank"},[s.hasImage?(d(),c("img",{key:0,class:"max-h-full object-contain rounded-lg",src:o.useAssetImage(s.image)},null,8,J)):I("",!0)],8,G),[[x,s.hasImage]])],8,U))),256))])])])}const Y=f(C,[["render",K]]);export{Y as default};
