import{V as s}from"./index.0404d7f8.js";import{V as u}from"./index.358f6f43.js";import{a as k}from"./use-translate.56565eec.js";import{A as g,x as i,r as I,o as y,a as A,e as l,w as r,C as o,h as B,t as E,F as x}from"./vue-libs.a040eeb8.js";import"./with-install.f3d37716.js";import"./use-route.f2a7e4c6.js";import"./index.e2935f15.js";import"./index.bc7c56e3.js";import"./constant.80c6de18.js";import"./interceptor.37662564.js";import"./use-expose.33aa695d.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.61a8687b.js";const K=g({__name:"index",setup(U){const n=k({"zh-CN":{position:"\u5F39\u51FA\u4F4D\u7F6E",buttonBasic:"\u5C55\u793A\u5F39\u51FA\u5C42",buttonTop:"\u9876\u90E8\u5F39\u51FA",buttonBottom:"\u5E95\u90E8\u5F39\u51FA",buttonLeft:"\u5DE6\u4FA7\u5F39\u51FA",buttonRight:"\u53F3\u4FA7\u5F39\u51FA",teleport:"\u6307\u5B9A\u6302\u8F7D\u8282\u70B9",roundCorner:"\u5706\u89D2\u5F39\u7A97",closeIcon:"\u5173\u95ED\u56FE\u6807",customCloseIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customIconPosition:"\u56FE\u6807\u4F4D\u7F6E"},"en-US":{position:"Position",buttonBasic:"Show Popup",buttonTop:"From Top",buttonBottom:"From Bottom",buttonLeft:"From Left",buttonRight:"From Right",teleport:"Get Container",roundCorner:"Round Corner",closeIcon:"Close Icon",customCloseIcon:"Custom Icon",customIconPosition:"Icon Position"}}),a=i(!1),m=i(!1),w=i(!1),d=i(!1),v=i(!1),C=i(!1),f=i(!1),F=i(!1),h=i(!1),b=i(!1);return($,t)=>{const p=I("demo-block");return y(),A(x,null,[l(p,{card:"",title:o(n)("basicUsage")},{default:r(()=>[l(o(s),{title:o(n)("buttonBasic"),"is-link":"",onClick:t[0]||(t[0]=e=>a.value=!0)},null,8,["title"]),l(o(u),{show:a.value,"onUpdate:show":t[1]||(t[1]=e=>a.value=e),style:{padding:"30px 50px"}},{default:r(()=>[B(E(o(n)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"]),l(p,{card:"",title:o(n)("position")},{default:r(()=>[l(o(s),{title:o(n)("buttonTop"),"is-link":"",onClick:t[2]||(t[2]=e=>m.value=!0)},null,8,["title"]),l(o(s),{title:o(n)("buttonBottom"),"is-link":"",onClick:t[3]||(t[3]=e=>w.value=!0)},null,8,["title"]),l(o(s),{title:o(n)("buttonLeft"),"is-link":"",onClick:t[4]||(t[4]=e=>d.value=!0)},null,8,["title"]),l(o(s),{title:o(n)("buttonRight"),"is-link":"",onClick:t[5]||(t[5]=e=>v.value=!0)},null,8,["title"]),l(o(u),{show:m.value,"onUpdate:show":t[6]||(t[6]=e=>m.value=e),position:"top",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:w.value,"onUpdate:show":t[7]||(t[7]=e=>w.value=e),position:"bottom",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:d.value,"onUpdate:show":t[8]||(t[8]=e=>d.value=e),position:"left",style:{width:"30%",height:"100%"}},null,8,["show"]),l(o(u),{show:v.value,"onUpdate:show":t[9]||(t[9]=e=>v.value=e),position:"right",style:{width:"30%",height:"100%"}},null,8,["show"])]),_:1},8,["title"]),l(p,{card:"",title:o(n)("closeIcon")},{default:r(()=>[l(o(s),{title:o(n)("closeIcon"),"is-link":"",onClick:t[10]||(t[10]=e=>C.value=!0)},null,8,["title"]),l(o(s),{title:o(n)("customCloseIcon"),"is-link":"",onClick:t[11]||(t[11]=e=>h.value=!0)},null,8,["title"]),l(o(s),{title:o(n)("customIconPosition"),"is-link":"",onClick:t[12]||(t[12]=e=>b.value=!0)},null,8,["title"]),l(o(u),{show:C.value,"onUpdate:show":t[13]||(t[13]=e=>C.value=e),closeable:"",position:"bottom",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:h.value,"onUpdate:show":t[14]||(t[14]=e=>h.value=e),closeable:"","close-icon":"close",position:"bottom",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:b.value,"onUpdate:show":t[15]||(t[15]=e=>b.value=e),closeable:"","close-icon-position":"top-left",position:"bottom",style:{height:"30%"}},null,8,["show"])]),_:1},8,["title"]),l(p,{card:"",title:o(n)("roundCorner")},{default:r(()=>[l(o(s),{title:o(n)("roundCorner"),"is-link":"",onClick:t[16]||(t[16]=e=>f.value=!0)},null,8,["title"]),l(o(u),{show:f.value,"onUpdate:show":t[17]||(t[17]=e=>f.value=e),round:"",position:"bottom",style:{height:"30%"}},null,8,["show"])]),_:1},8,["title"]),l(p,{card:"",title:o(n)("teleport")},{default:r(()=>[l(o(s),{title:o(n)("teleport"),"is-link":"",onClick:t[18]||(t[18]=e=>F.value=!0)},null,8,["title"]),l(o(u),{show:F.value,"onUpdate:show":t[19]||(t[19]=e=>F.value=e),teleport:"body",style:{padding:"30px 50px"}},null,8,["show"])]),_:1},8,["title"])],64)}}});export{K as default};
