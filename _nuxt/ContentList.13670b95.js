import n from"./ContentQuery.513e8ea7.js";import{e as c,f as h,i as p}from"./entry.6990272b.js";import"./asyncData.791c8611.js";import"./query.6c9d5ef5.js";import"./utils.f6caf6e3.js";import"./index.79f7c7f3.js";const q=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:o}=u,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return p(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{q as default};
