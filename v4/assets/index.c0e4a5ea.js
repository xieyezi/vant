import{c as B,h as N,a as U}from"./use-translate.c56bc05e.js";import{c as h,b as M,m as j,w as V}from"./with-install.2d06a5b3.js";import{I as G}from"./index.bb072daf.js";import{S as T,b as P}from"./index.4035bdcc.js";import{A as w,e as n,Q as _,x as u,D as S,r as z,o as k,a as O,w as p,C as a,c as D,f as E,F as K}from"./vue-libs.a3cd7f61.js";import{V as F}from"./index.5c39f445.js";import{c as y}from"./index.e41a59ee.js";import{d as L}from"./deep-clone.ee344e6f.js";import"./use-route.7a9317f3.js";function R(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!_(t)}const[q,m]=B("tree-select"),Q={max:h(1/0),items:M(),height:h(300),selectedIcon:j("success"),mainActiveIndex:h(0),activeId:{type:[Number,String,Array],default:0}},H=w({name:q,props:Q,emits:["clickNav","clickItem","update:activeId","update:mainActiveIndex"],setup(t,{emit:s,slots:v}){const x=e=>Array.isArray(t.activeId)?t.activeId.includes(e):t.activeId===e,I=e=>{const o=()=>{if(e.disabled)return;let c;if(Array.isArray(t.activeId)){c=t.activeId.slice();const l=c.indexOf(e.id);l!==-1?c.splice(l,1):c.length<t.max&&c.push(e.id)}else c=e.id;s("update:activeId",c),s("clickItem",e)};return n("div",{key:e.id,class:["van-ellipsis",m("item",{active:x(e.id),disabled:e.disabled})],onClick:o},[e.text,x(e.id)&&n(G,{name:t.selectedIcon,class:m("selected")},null)])},f=e=>{s("update:mainActiveIndex",e)},C=e=>s("clickNav",e),r=()=>{const e=t.items.map(o=>n(P,{dot:o.dot,title:o.text,badge:o.badge,class:[m("nav-item"),o.className],disabled:o.disabled,onClick:C},null));return n(T,{class:m("nav"),modelValue:t.mainActiveIndex,onChange:f},R(e)?e:{default:()=>[e]})},b=()=>{if(v.content)return v.content();const e=t.items[+t.mainActiveIndex]||{};if(e.children)return e.children.map(I)};return()=>n("div",{class:m(),style:{height:N(t.height)}},[r(),n("div",{class:m("content")},[b()])])}}),J=V(H),A=J,W=[{text:"\u676D\u5DDE",id:1},{text:"\u6E29\u5DDE",id:2},{text:"\u5B81\u6CE2",id:3,disabled:!0},{text:"\u4E49\u4E4C",id:4}],X=[{text:"\u5357\u4EAC",id:5},{text:"\u65E0\u9521",id:6},{text:"\u5F90\u5DDE",id:7},{text:"\u82CF\u5DDE",id:8}],Y=[{text:"\u6CC9\u5DDE",id:9},{text:"\u53A6\u95E8",id:10}],Z=[{text:"\u6D59\u6C5F",children:W},{text:"\u6C5F\u82CF",children:X},{text:"\u798F\u5EFA",disabled:!0,children:Y}],$=[{text:"Delaware",id:1},{text:"Florida",id:2},{text:"Georqia",id:3,disabled:!0},{text:"Indiana",id:4}],ee=[{text:"Alabama",id:5},{text:"Kansas",id:6},{text:"Louisiana",id:7},{text:"Texas",id:8}],te=[{text:"Alabama",id:9},{text:"Kansas",id:10}],ae=[{text:"Group 1",children:$},{text:"Group 2",children:ee},{text:"Group 3",disabled:!0,children:te}],me=w({__name:"index",setup(t){const s=U({"zh-CN":{showBadge:"\u5FBD\u6807\u63D0\u793A",radioMode:"\u5355\u9009\u6A21\u5F0F",multipleMode:"\u591A\u9009\u6A21\u5F0F",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",data:Z,dataSimple:[{text:"\u5206\u7EC4 1"},{text:"\u5206\u7EC4 2"}]},"en-US":{showBadge:"Show Badge",radioMode:"Radio Mode",multipleMode:"Multiple Mode",customContent:"Custom Content",data:ae,dataSimple:[{text:"Group 1"},{text:"Group 2"}]}}),v=u(1),x=u(1),I=u([1,2]),f=u(0),C=u(0),r=u(0),b=u(0),e=S(()=>s("data")),o=S(()=>s("dataSimple")),c=S(()=>{const l=L(s("data")).slice(0,2);return l[0].dot=!0,l[1].badge=5,l});return(l,i)=>{const g=z("demo-block");return k(),O(K,null,[n(g,{title:a(s)("radioMode")},{default:p(()=>[n(a(A),{"active-id":v.value,"onUpdate:active-id":i[0]||(i[0]=d=>v.value=d),"main-active-index":f.value,"onUpdate:main-active-index":i[1]||(i[1]=d=>f.value=d),items:a(e)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),n(g,{title:a(s)("multipleMode")},{default:p(()=>[n(a(A),{"active-id":I.value,"onUpdate:active-id":i[2]||(i[2]=d=>I.value=d),"main-active-index":C.value,"onUpdate:main-active-index":i[3]||(i[3]=d=>C.value=d),items:a(e)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),n(g,{title:a(s)("customContent")},{default:p(()=>[n(a(A),{"main-active-index":r.value,"onUpdate:main-active-index":i[4]||(i[4]=d=>r.value=d),height:"55vw",items:a(o)},{content:p(()=>[r.value===0?(k(),D(a(F),{key:0,"show-loading":!1,src:a(y)("apple-1.jpeg")},null,8,["src"])):E("",!0),r.value===1?(k(),D(a(F),{key:1,"show-loading":!1,src:a(y)("apple-2.jpeg")},null,8,["src"])):E("",!0)]),_:1},8,["main-active-index","items"])]),_:1},8,["title"]),n(g,{title:a(s)("showBadge")},{default:p(()=>[n(a(A),{"active-id":x.value,"onUpdate:active-id":i[5]||(i[5]=d=>x.value=d),"main-active-index":b.value,"onUpdate:main-active-index":i[6]||(i[6]=d=>b.value=d),height:"55vw",items:a(c)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"])],64)}}});export{me as default};
