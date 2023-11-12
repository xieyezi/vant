import{c as F,h as p,q as A,a as C}from"./use-translate.9f14972f.js";import{c as k,t as w,n as g,m as x,w as S}from"./with-install.74763816.js";import{A as f,e as t,B,x as y,r as V,o as b,a as W,w as m,C as a,d as l,t as _,F as D}from"./vue-libs.a3cd7f61.js";import{S as U}from"./index.965af8d9.js";import{c as T}from"./index.9abc96fc.js";import"./index.ccf6f928.js";const[z,s]=F("skeleton"),E="100%",N="60%",P={row:k(0),title:Boolean,round:Boolean,avatar:Boolean,loading:w,animate:w,avatarSize:g,titleWidth:g,avatarShape:x("round"),rowWidth:{type:[Number,String,Array],default:E}};var R=f({name:z,inheritAttrs:!1,props:P,setup(e,{slots:n,attrs:i}){const h=()=>{if(e.avatar)return t("div",{class:s("avatar",e.avatarShape),style:A(e.avatarSize)},null)},d=()=>{if(e.title)return t("h3",{class:s("title"),style:{width:p(e.titleWidth)}},null)},u=o=>{const{rowWidth:r}=e;return r===E&&o===+e.row-1?N:Array.isArray(r)?r[o]:r},c=()=>Array(+e.row).fill("").map((o,r)=>t("div",{class:s("row"),style:{width:p(u(r))}},null));return()=>{var o;return e.loading?t("div",B({class:s({animate:e.animate,round:e.round})},i),[h(),t("div",{class:s("content")},[d(),c()])]):(o=n.default)==null?void 0:o.call(n)}}});const v=S(R);const I={class:"demo-preview"},L=["src"],H={class:"demo-content"},K=f({__name:"index",setup(e){const n=C({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),i=y(!1);return(h,d)=>{const u=V("demo-block");return b(),W(D,null,[t(u,{title:a(n)("basicUsage")},{default:m(()=>[t(a(v),{title:"",row:3})]),_:1},8,["title"]),t(u,{title:a(n)("showAvatar")},{default:m(()=>[t(a(v),{title:"",avatar:"",row:3})]),_:1},8,["title"]),t(u,{title:a(n)("showChildren")},{default:m(()=>[t(a(U),{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=c=>i.value=c)},null,8,["modelValue"]),t(a(v),{title:"",avatar:"",row:3,loading:!i.value},{default:m(()=>[l("div",I,[l("img",{src:a(T)("logo.png")},null,8,L),l("div",H,[l("h3",null,_(a(n)("title")),1),l("p",null,_(a(n)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{K as default};
