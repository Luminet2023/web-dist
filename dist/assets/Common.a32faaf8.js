import{a as v,b as C,aW as l,b9 as r,ck as $,cY as w,m as I,h as t,cZ as R,E as L,ba as o,n as p,ae as T,C as u,a4 as _}from"./index.7ab50735.js";import{b as x}from"./useTitle.798574af.js";import{I as B}from"./SettingItem.c2063442.js";import{R as D}from"./ResponsiveGrid.1650e0bf.js";import"./index.7aeb7f50.js";import"./index.52833ca9.js";import"./index.b813c4d7.js";import"./item_type.be442da4.js";const Z=m=>{const s=v(),{pathname:d}=C();x(`manage.sidemenu.${d().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[c,i]=$([]),a=async()=>{const e=await f();o(e,i)};a();const[k,S]=l(()=>r.post("/admin/setting/save",w(c))),[b,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(R,{each:c,children:(e,E)=>t(B,L(e,{onChange:n=>{i(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||b()},get children(){return s("global.refresh")}}),t(u,{get loading(){return k()},onClick:async()=>{const e=await S();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{Z as default};
