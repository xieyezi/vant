import{c as C,h as w,q as S,a as g}from"./use-translate.8036e41d.js";import{c as p,t as v,n as E,m as B,w as V}from"./with-install.6887218d.js";import{A as f,e,B as y,x as k,r as W,o as b,a as D,w as c,C as a,d as s,t as F,F as U}from"./vue-libs.a040eeb8.js";import{V as T}from"./index.e188135e.js";import{c as x}from"./index.c57aebd6.js";import"./index.e68b0dfb.js";const[N,i]=C("skeleton"),A="100%",P="60%",R={row:p(0),title:Boolean,round:Boolean,avatar:Boolean,loading:v,animate:v,avatarSize:E,titleWidth:E,avatarShape:B("round"),rowWidth:{type:[Number,String,Array],default:A}},z=f({name:N,inheritAttrs:!1,props:R,setup(t,{slots:n,attrs:r}){const _=()=>{if(t.avatar)return e("div",{class:i("avatar",t.avatarShape),style:S(t.avatarSize)},null)},d=()=>{if(t.title)return e("h3",{class:i("title"),style:{width:w(t.titleWidth)}},null)},l=u=>{const{rowWidth:o}=t;return o===A&&u===+t.row-1?P:Array.isArray(o)?o[u]:o},m=()=>Array(+t.row).fill("").map((u,o)=>e("div",{class:i("row"),style:{width:w(l(o))}},null));return()=>{var u;return t.loading?e("div",y({class:i({animate:t.animate,round:t.round})},r),[_(),e("div",{class:i("content")},[d(),m()])]):(u=n.default)==null?void 0:u.call(n)}}}),I=V(z),h=I,L={class:"demo-preview"},H=["src"],O={class:"demo-content"},Q=f({__name:"index",setup(t){const n=g({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),r=k(!1);return(_,d)=>{const l=W("demo-block");return b(),D(U,null,[e(l,{title:a(n)("basicUsage")},{default:c(()=>[e(a(h),{title:"",row:3})]),_:1},8,["title"]),e(l,{title:a(n)("showAvatar")},{default:c(()=>[e(a(h),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(l,{title:a(n)("showChildren")},{default:c(()=>[e(a(T),{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m)},null,8,["modelValue"]),e(a(h),{title:"",avatar:"",row:3,loading:!r.value},{default:c(()=>[s("div",L,[s("img",{src:a(x)("logo.png")},null,8,H),s("div",O,[s("h3",null,F(a(n)("title")),1),s("p",null,F(a(n)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{Q as default};
