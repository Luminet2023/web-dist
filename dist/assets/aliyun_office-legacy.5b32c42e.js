System.register(["./index-legacy.32b0ab0d.js"],(function(e){"use strict";var t,r,n,o,a,c,i,s;return{setters:[e=>{t=e.b,r=e.aT,n=e.b6,o=e._,a=e.h,c=e.a7,i=e.a8,s=e.b7}],execute:function(){e("default",(()=>{const{pathname:e}=t(),[u,d]=r((()=>n.post("/fs/other",{path:e(),password:o(),method:"doc_preview"})));return(async()=>{const e=await d();s(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),a(i,{get loading(){return u()},get children(){return a(c,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
