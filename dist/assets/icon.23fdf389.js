import{cC as o,cD as t,cE as c,cF as d,cG as n,cH as i,cI as p,cJ as F,cK as m,cL as E,cM as B,cN as u,cO as S,cP as f,cQ as x,cR as I,cS as A}from"./index.7135cef6.js";import{a as k,b as D,c as g,d as h,e as M,f as N,g as w,h as y,i as G,j as L}from"./index.8ab042ba.js";import{i as P,j as v,l as O,m as R,n as U,o as z,p as C,q as J,r as W}from"./index.f587895c.js";import{I as X}from"./Layout.462c219a.js";var a=(s=>(s[s.UNKNOWN=0]="UNKNOWN",s[s.FOLDER=1]="FOLDER",s[s.VIDEO=2]="VIDEO",s[s.AUDIO=3]="AUDIO",s[s.TEXT=4]="TEXT",s[s.IMAGE=5]="IMAGE",s))(a||{});const b={"dmg,ipa,plist,tipa":F,"exe,msi":m,"zip,gz,rar,7z,tar,jar,xz":E,apk:X,"db,db-shm,db-wal,sql":P,md:B,epub:v,iso:O,m3u8:i,"doc,docx":u,"xls,xlsx,csv":S,"ppt,pptx":f,pdf:x,"psd,pdd":k,prproj:D,"ai,ait,eps,epsf,ps":g,aep:h,sesx:M,indd:N,go:R,java:U,pnp:w,"py,pyc,pyo,pyi,pyw,pyd,pyx":z,"ts,tsx":y,"yaml,yml,toml":I,xml:A,sh:G,json:C,"js,mjs,cjs":L,css:J,html:W},K=(s,r)=>{if(s!==a.FOLDER){for(const[l,e]of Object.entries(b))if(l.split(",").includes(r.toLowerCase()))return e}switch(s){case a.FOLDER:return p;case a.VIDEO:return i;case a.AUDIO:return n;case a.TEXT:return d;case a.IMAGE:return c;default:return t}},Y=s=>K(s.type,o(s.name));export{a as O,Y as g};
