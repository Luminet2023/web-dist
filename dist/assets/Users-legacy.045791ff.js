System.register(["./index-legacy.ebd850b2.js","./useTitle-legacy.571980d5.js","./DeletePopover-legacy.1018a543.js","./Wether-legacy.68c4d13a.js"],(function(e){"use strict";var r,n,t,c,a,l,s,i,u,d,g,o,h,m,b,$,f,p,y,_,C,w,k,v,S,j,x;return{setters:[e=>{r=e.a,n=e.b,t=e.aT,c=e.b6,a=e.m,l=e.da,s=e.h,i=e.aq,u=e.C,d=e.a7,g=e.db,o=e.dc,h=e.dd,m=e.G,b=e.de,$=e.df,f=e.dg,p=e.b7,y=e.n,_=e.a4,C=e.cl,w=e.ay,k=e.aC,v=e.az},e=>{S=e.b},e=>{j=e.D},e=>{x=e.W}],execute:function(){const z=e=>{const r=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return s(C,{get colorScheme(){return r[e.role].color},get children(){return r[e.role].name}})},D=e=>{const n=r();return s(i,{spacing:"$0_5",get children(){return s(m,{each:w,children:(r,t)=>s(k,{get label(){return n(`users.permissions.${r}`)},get children(){return s(d,{boxSize:"$2",rounded:"$full",get bg(){return`$${v.can(e.user,t())?"success":"danger"}9`}})}})})}})};e("default",(()=>{const e=r();S("manage.sidemenu.users");const{to:C}=n(),[w,k]=t((()=>c.get("/admin/user/list"))),[v,T]=a([]),W=async()=>{const e=await k();p(e,(e=>T(e.content)))};W();const[q,G]=l((e=>c.post(`/admin/user/delete?id=${e}`))),[H,I]=l((e=>c.post(`/admin/user/cancel_2fa?id=${e}`)));return s(_,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[s(i,{spacing:"$2",get children(){return[s(u,{colorScheme:"accent",get loading(){return w()},onClick:W,get children(){return e("global.refresh")}}),s(u,{onClick:()=>{C("//manage/users/add")},get children(){return e("global.add")}})]}}),s(d,{w:"$full",overflowX:"auto",get children(){return s(g,{highlightOnHover:!0,dense:!0,get children(){return[s(o,{get children(){return s(h,{get children(){return[s(m,{each:["username","base_path","role","permission","available"],children:r=>s(b,{get children(){return e(`users.${r}`)}})}),s(b,{get children(){return e("global.operations")}})]}})}}),s($,{get children(){return s(m,{get each(){return v()},children:r=>s(h,{get children(){return[s(f,{get children(){return r.username}}),s(f,{get children(){return r.base_path}}),s(f,{get children(){return s(z,{get role(){return r.role}})}}),s(f,{get children(){return s(D,{user:r})}}),s(f,{get children(){return s(x,{get yes(){return!r.disabled}})}}),s(f,{get children(){return s(i,{spacing:"$2",get children(){return[s(u,{onClick:()=>{C(`//manage/users/edit/${r.id}`)},get children(){return e("global.edit")}}),s(j,{get name(){return r.username},get loading(){return q()===r.id},onClick:async()=>{const n=await G(r.id);p(n,(()=>{y.success(e("global.delete_success")),W()}))}}),s(u,{colorScheme:"accent",get loading(){return H()===r.id},onClick:async()=>{const n=await I(r.id);p(n,(()=>{y.success(e("users.cancel_2fa_success")),W()}))},get children(){return e("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})}))}}}));
