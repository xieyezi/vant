import{C as h}from"./index.604ef55c.js";import{c as D,e as I,p as P,a as x}from"./use-translate.48fbbaf5.js";import{t as E,b as L,w as Q}from"./with-install.685b3f2d.js";import{H as U}from"./constant.80c6de18.js";import{a as T,p as y,P as O}from"./index.f99722a6.js";import{A as B,e as s,B as M,x as f,D as C,r as N,o as W,a as $,w as S,C as o,F as R}from"./vue-libs.84c45047.js";import{c as q}from"./index.8c1415c2.js";import{T as H}from"./function-call.fcc6f74b.js";import"./use-route.7c55373a.js";import"./index.fa826fe1.js";import"./interceptor.a485b929.js";import"./use-expose.af01e405.js";import"./use-touch.c1d7ebd1.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.7c0fb95e.js";import"./mount-component.946bc88b.js";import"./index.4fee12b7.js";const K=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"],z=[...T,"round","closeOnPopstate","safeAreaInsetBottom"];function V(c){return K.includes(c)?`https://img.yzcdn.cn/vant/share-sheet-${c}.png`:c}const[j,r,G]=D("share-sheet"),J=I({},y,{title:String,round:E,options:L(),cancelText:String,description:String,closeOnPopstate:E,safeAreaInsetBottom:E});var X=B({name:j,props:J,emits:["cancel","select","update:show"],setup(c,{emit:e,slots:a}){const u=n=>e("update:show",n),p=()=>{u(!1),e("cancel")},m=(n,t)=>e("select",n,t),v=()=>{const n=a.title?a.title():c.title,t=a.description?a.description():c.description;if(n||t)return s("div",{class:r("header")},[n&&s("h2",{class:r("title")},[n]),t&&s("span",{class:r("description")},[t])])},A=(n,t)=>{const{name:l,icon:i,className:g,description:b}=n;return s("div",{role:"button",tabindex:0,class:[r("option"),g,U],onClick:()=>m(n,t)},[s("img",{src:V(i),class:r("icon")},null),l&&s("span",{class:r("name")},[l]),b&&s("span",{class:r("option-description")},[b])])},w=(n,t)=>s("div",{class:r("options",{border:t})},[n.map(A)]),F=()=>{const{options:n}=c;return Array.isArray(n[0])?n.map((t,l)=>w(t,l!==0)):w(n)},d=()=>{var t;const n=(t=c.cancelText)!=null?t:G("cancel");if(a.cancel||n)return s("button",{type:"button",class:r("cancel"),onClick:p},[a.cancel?a.cancel():n])};return()=>s(O,M({class:r(),position:"bottom","onUpdate:show":u},P(c,z)),{default:()=>[v(),F(),d()]})}});const k=Q(X),he=B({setup(c){const e=x({"zh-CN":{qq:"QQ",name:"\u540D\u79F0",link:"\u590D\u5236\u94FE\u63A5",title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",poster:"\u5206\u4EAB\u6D77\u62A5",qrcode:"\u4E8C\u7EF4\u7801",multiLine:"\u5C55\u793A\u591A\u884C\u9009\u9879",showSheet:"\u663E\u793A\u5206\u4EAB\u9762\u677F",withDesc:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",description:"\u63CF\u8FF0\u4FE1\u606F",weappQrcode:"\u5C0F\u7A0B\u5E8F\u7801",wechatMoments:"\u670B\u53CB\u5708"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}}),a=f(!1),u=f(!1),p=f(!1),m=f(!1),v=C(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),A=C(()=>[[{name:e("wechat"),icon:"wechat"},{name:e("wechatMoments"),icon:"wechat-moments"},{name:e("weibo"),icon:"weibo"},{name:e("qq"),icon:"qq"}],[{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"},{name:e("weappQrcode"),icon:"weapp-qrcode"}]]),w=C(()=>[{name:e("name"),icon:q("custom-icon-fire.png")},{name:e("name"),icon:q("custom-icon-light.png")},{name:e("name"),icon:q("custom-icon-water.png")}]),F=C(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link",description:e("description")},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),d=n=>{H(n.name),a.value=!1,u.value=!1,p.value=!1,m.value=!1};return(n,t)=>{const l=N("demo-block");return W(),$(R,null,[s(l,{card:"",title:o(e)("basicUsage")},{default:S(()=>[s(o(h),{"is-link":"",title:o(e)("showSheet"),onClick:t[0]||(t[0]=i=>a.value=!0)},null,8,["title"]),s(o(k),{show:a.value,"onUpdate:show":t[1]||(t[1]=i=>a.value=i),title:o(e)("title"),options:o(v),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("multiLine")},{default:S(()=>[s(o(h),{"is-link":"",title:o(e)("showSheet"),onClick:t[2]||(t[2]=i=>p.value=!0)},null,8,["title"]),s(o(k),{show:p.value,"onUpdate:show":t[3]||(t[3]=i=>p.value=i),title:o(e)("title"),options:o(A),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("customIcon")},{default:S(()=>[s(o(h),{"is-link":"",title:o(e)("showSheet"),onClick:t[4]||(t[4]=i=>m.value=!0)},null,8,["title"]),s(o(k),{show:m.value,"onUpdate:show":t[5]||(t[5]=i=>m.value=i),options:o(w),onSelect:d},null,8,["show","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("withDesc")},{default:S(()=>[s(o(h),{"is-link":"",title:o(e)("showSheet"),onClick:t[6]||(t[6]=i=>u.value=!0)},null,8,["title"]),s(o(k),{show:u.value,"onUpdate:show":t[7]||(t[7]=i=>u.value=i),title:o(e)("title"),options:o(F),description:o(e)("description"),onSelect:d},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{he as default};
