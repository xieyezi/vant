import{V as e}from"./index.d16595ff.js";import{a as k}from"./index.710c79e5.js";import{N as g,s as u}from"./index.437e8ad2.js";import{a as E}from"./use-translate.c56bc05e.js";import{A as w,x as A,r as B,o as N,a as D,e as i,w as l,C as t,d as v,t as F,F as b}from"./vue-libs.a3cd7f61.js";import"./with-install.2d06a5b3.js";import"./use-route.7a9317f3.js";import"./mount-component.2ea251e1.js";import"./use-expose.2dad0d8e.js";import"./index.d361c3fa.js";import"./constant.80c6de18.js";import"./interceptor.7caa5e9a.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";const J=w({__name:"index",setup(P){const o=E({"zh-CN":{primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration",customPosition:"Custom Position"}}),a=A(!1),p=()=>{u(o("content"))},C=()=>{u({color:"#ad0000",message:o("customColor"),background:"#ffe1e1"})},f=()=>{u({message:o("customDuration"),duration:1e3})},d=()=>{u({message:o("customPosition"),position:"bottom"})},r=c=>{u({message:o("content"),type:c})},y=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)};return(c,n)=>{const m=B("demo-block");return N(),D(b,null,[i(m,{card:"",title:t(o)("basicUsage")},{default:l(()=>[i(t(e),{"is-link":"",title:t(o)("basicUsage"),onClick:p},null,8,["title"])]),_:1},8,["title"]),i(m,{card:"",title:t(o)("notifyType")},{default:l(()=>[i(t(e),{"is-link":"",title:t(o)("primary"),onClick:n[0]||(n[0]=s=>r("primary"))},null,8,["title"]),i(t(e),{"is-link":"",title:t(o)("success"),onClick:n[1]||(n[1]=s=>r("success"))},null,8,["title"]),i(t(e),{"is-link":"",title:t(o)("danger"),onClick:n[2]||(n[2]=s=>r("danger"))},null,8,["title"]),i(t(e),{"is-link":"",title:t(o)("warning"),onClick:n[3]||(n[3]=s=>r("warning"))},null,8,["title"])]),_:1},8,["title"]),i(m,{card:"",title:t(o)("customNotify")},{default:l(()=>[i(t(e),{"is-link":"",title:t(o)("customColor"),onClick:C},null,8,["title"]),i(t(e),{"is-link":"",title:t(o)("customPosition"),onClick:d},null,8,["title"]),i(t(e),{"is-link":"",title:t(o)("customDuration"),onClick:f},null,8,["title"])]),_:1},8,["title"]),i(m,{card:"",title:t(o)("componentCall")},{default:l(()=>[i(t(e),{"is-link":"",title:t(o)("componentCall"),onClick:y},null,8,["title"]),i(t(g),{show:a.value,"onUpdate:show":n[4]||(n[4]=s=>a.value=s),type:"success"},{default:l(()=>[i(t(k),{name:"bell",style:{"margin-right":"4px"}}),v("span",null,F(t(o)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{J as default};
