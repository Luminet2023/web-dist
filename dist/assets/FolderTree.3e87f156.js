import{aF as M,a as $,h as e,I as q,S as i,C as g,aq as I,M as O,y as v,ba as K,z as x,A as B,B as _,D as H,m as f,a7 as T,bG as N,bH as U,aT as X,bI as j,_ as Q,bJ as W,x as R,r as Y,bK as Z,ag as b,aB as S,b2 as p,L as ee,aL as te,p as ne,a4 as re,G as oe,d as ae,bL as le,b7 as ce}from"./index.7135cef6.js";import{f as se,g as de}from"./index.f587895c.js";const z=le(),D=t=>{var l;const[a,n]=f("/");return(l=t.handle)==null||l.call(t,{setPath:n}),e(T,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(z.Provider,{get value(){var r,c,d,o;return{value:a,onChange:h=>{n(h),t.onChange(h)},autoOpen:(r=t.autoOpen)!=null?r:!1,forceRoot:(c=t.forceRoot)!=null?c:!1,showEmptyIcon:(d=t.showEmptyIcon)!=null?d:!1,showHiddenFolder:(o=t.showHiddenFolder)!=null?o:!0}},get children(){return e(E,{path:"/"})}})}})},E=t=>{const{isHidePath:a}=N(),[n,l]=f(),{value:r,onChange:c,forceRoot:d,autoOpen:o,showEmptyIcon:h,showHiddenFolder:L}=U(z),P=()=>{var s;return Boolean(h&&n()!==void 0&&!((s=n())!=null&&s.length))},[V,A]=X(()=>j(t.path,Q(),d));let m=!1;const w=async()=>{var y;if((y=n())!=null&&y.length)return;const s=await A();ce(s,J=>{m=!0,l(J)},()=>{u()&&C()})},{isOpen:u,onToggle:C}=M(),F=()=>r()===t.path,k=W(t.path);R(Y(r,async s=>{!o||k(s)&&(u()||C(),m||w())}));const G=()=>a(t.path)&&!k(r());return e(i,{get when(){return L||!G()},get children(){return e(T,{get children(){return[e(I,{spacing:"$2",get children(){return[e(i,{get when(){return!V()},get fallback(){return e(Z,{size:"sm",get color(){return b()}})},get children(){return e(i,{get when(){return!P()},get fallback(){return e(S,{get color(){return b()},as:se})},get children(){return e(S,{get color(){return b()},as:de,get transform(){return u()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{C(),u()&&w()}})}})}}),e(p,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return F()?"$info8":"transparent"},get _hover(){return{bgColor:F()?"$info8":ee()}},onClick:()=>{c(t.path)},get children(){return te(()=>t.path==="/",!0)()?"root":ne(t.path)}})]}}),e(i,{get when(){return u()},get children(){return e(re,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(oe,{get each(){return n()},children:s=>e(E,{get path(){return ae(t.path,s.name)}})})}})}})]}})}})},ge=t=>{var d;const a=$(),[n,l]=f((d=t.defaultValue)!=null?d:"/"),[r,c]=f();return R(()=>{var o;!t.opened||(o=r())==null||o.setPath(n())}),e(H,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(O,{}),e(v,{get children(){return[e(x,{get children(){return a("home.toolbar.choose_dst_folder")}}),e(B,{get children(){return e(D,{onChange:l,handle:o=>c(o),autoOpen:!0})}}),e(_,{display:"flex",gap:"$2",get children(){return[e(g,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return a("global.cancel")}}),e(g,{get loading(){return t.loading},onClick:()=>{var o;return(o=t.onSubmit)==null?void 0:o.call(t,n())},get children(){return a("global.ok")}})]}})]}})]}})},fe=t=>{const{isOpen:a,onOpen:n,onClose:l}=M(),r=$();return[e(I,{w:"$full",spacing:"$2",get children(){return[e(q,{get id(){return t.id},get value(){return t.value},onInput:c=>t.onChange(c.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?n:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(g,{onClick:n,get children(){return r("global.choose")}})}})]}}),e(H,{size:"xl",get opened(){return a()},onClose:l,get children(){return[e(O,{}),e(v,{get children(){return[e(K,{}),e(x,{get children(){return r("global.choose_folder")}}),e(B,{get children(){return e(D,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(_,{get children(){return e(g,{onClick:l,get children(){return r("global.confirm")}})}})]}})]}})]};export{D as F,ge as M,fe as a};
