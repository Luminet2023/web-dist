System.register(["./index-legacy.ebd850b2.js"],(function(e){"use strict";var t,r,n,o,c,i,s,a;return{setters:[e=>{t=e.b,r=e.aT,n=e.b6,o=e._,c=e.h,i=e.a7,s=e.a8,a=e.b7}],execute:function(){e("default",(()=>{const{pathname:e}=t(),[u,d]=r((()=>n.post("/fs/other",{path:e(),password:o(),method:"doc_preview"})));return(async()=>{const e=await d();a(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),c(s,{get loading(){return u()},get children(){return c(i,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
