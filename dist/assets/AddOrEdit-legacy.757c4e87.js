System.register(["./index-legacy.ebd850b2.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.f38f3f02.js"],(function(e){"use strict";var r,t,n,a,i,d,u,o,g,l,s,c,m,v,h,p,y,f,b,w,$,C,k,_,x,S,O,T,I,N,j,q,B,G,J;return{setters:[e=>{r=e.a,t=e.h,n=e.bk,a=e.$,i=e.av,d=e.a0,u=e.I,o=e.bw,g=e.T,l=e.bm,s=e.dq,c=e.S,m=e.F,v=e.bx,h=e.b,p=e.aT,y=e.b6,f=e.m,b=e.ck,w=e.k,$=e.bN,C=e.a4,k=e.dr,_=e.d4,x=e.d5,S=e.aL,O=e.G,T=e.E,I=e.C,N=e.n,j=e.O,q=e.b7,B=e.a8},e=>{G=e.T},e=>{J=e.R}],execute:function(){const R=e=>{const h=r();return t(v,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(n,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return h(e.full_name_path??"common"===e.driver?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(a,{get fallback(){return t(i,{get children(){return h("settings.unknown_type")}})},get children(){return[t(d,{get when(){return e.type===G.String},get children(){return t(u,{get id(){return e.name},get type(){return"password"==e.name?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===G.String?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),t(d,{get when(){return e.type===G.Number},get children(){return t(u,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===G.Number?r=>e.onChange?.(parseInt(r.currentTarget.value)):void 0}})}}),t(d,{get when(){return e.type===G.Bool},get children(){return t(o,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===G.Bool?r=>e.onChange?.(r.currentTarget.checked):void 0}})}}),t(d,{get when(){return e.type===G.Text},get children(){return t(g,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===G.Text?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),t(d,{get when(){return e.type===G.Select},get children(){return t(l,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===G.Select?r=>e.onChange?.(r):void 0},get children(){return t(s,{get readonly(){return e.readonly},get searchable(){return e.type===G.Select&&e.searchable},get options(){return e.options.split(",").map((r=>({key:r,label:h((e.options_prefix??("common"===e.driver?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`))+`.${r}`)})))}})}})}})]}}),t(c,{get when(){return e.help},get children(){return t(m,{get children(){return h("common"===e.driver?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function D(e,r){switch(e){case G.Bool:return!!r&&"true"===r;case G.Number:return r?parseInt(r):0;default:return r||""}}e("default",(()=>{const e=r(),{params:n,back:a,to:i}=h(),{id:d}=n,[u,o]=p((()=>y.get("/admin/driver/list")),!0),[g,l]=f({}),[s,m]=p((()=>y.get(`/admin/storage/get?id=${d}`)),!0),[v,E]=p((()=>y.get(`/admin/driver/info?driver=${F.driver}`)),!0);d?(async()=>{const e=await m();q(e,(async e=>{L(e),z(JSON.parse(e.addition));const r=await E();q(r,(e=>l({[F.driver]:e})))}))})():(async()=>{const e=await o();q(e,l)})();const[F,L]=b({}),[V,z]=b({}),[A,H]=p((()=>(L("addition",JSON.stringify(V)),y.post("/admin/storage/"+(d?"update":"create"),F)))),K=w((()=>{const e=g()[F.driver]?.config.alert;if(console.log(e),e)return e.split("|")[0]}));return t(B,{get loading(){return d?s()||v():u()},get children(){return[t($,{mb:"$2",get children(){return e("global."+(d?"edit":"add"))}}),t(C,{mb:"$2",spacing:"$2",get children(){return[t(R,{name:"driver",default:"",readonly:void 0!==d,required:!0,searchable:!0,get type(){return G.Select},get options(){return d?F.driver:Object.keys(g()).join(",")},get value(){return F.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:e=>{for(const r of g()[e].common)L(r.name,D(r.type,r.default));z(k((e=>{for(const r in e)delete e[r]})));for(const r of g()[e].additional)z(r.name,D(r.type,r.default));L("driver",e)}}),t(c,{get when(){return K()},get children(){return t(_,{get status(){return K()},w:"$full",get children(){return[t(x,{}),S((()=>e(`drivers.config.${F.driver}.alert`)))]}})}})]}}),t(J,{get children(){return t(c,{get when(){return g()[F.driver]},get children(){return[t(O,{get each(){return g()[F.driver].common},children:e=>t(R,T(e,{driver:"common",get value(){return F[e.name]},onChange:r=>{L(e.name,r)}}))}),t(O,{get each(){return g()[F.driver].additional},children:e=>t(R,T(e,{get driver(){return F.driver},get value(){return V[e.name]},onChange:r=>{z(e.name,r)}}))})]}})}}),t(I,{mt:"$2",get loading(){return A()},onClick:async()=>{g()[F.driver].config.need_ms&&(N.info(e("manage.add_storage-tips")),window.open(j("//manage/messenger"),"_blank"));const r=await H();q(r,(()=>{N.success(e("global.save_success")),a()}),((e,t)=>{r.data.id&&i(`//manage/storages/edit/${r.data.id}`)}))},get children(){return e("global."+(d?"save":"add"))}})]}})}))}}}));
