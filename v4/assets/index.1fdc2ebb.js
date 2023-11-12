import{c as F,b as R,L as j,i as H,Z as K,n as L,r as Z,P as Q,u as Y,v as q,a as G}from"./use-translate.56565eec.js";import{t as A,n as J,c as X,m as ee,w as M,b as te,u as U}from"./with-install.f3d37716.js";import{H as oe}from"./constant.80c6de18.js";import{u as le}from"./use-id.3079e917.js";import{A as I,x as b,D as T,e as o,H as ne,j as ae,v as ue,Q as ie,S as se,r as re,o as de,a as pe,w as p,C as t,d as ce,h as me,t as ve,F as fe}from"./vue-libs.a040eeb8.js";import{u as Ce}from"./use-expose.33aa695d.js";import{C as Ve,V as _}from"./index.0404d7f8.js";import{I as we}from"./index.e2935f15.js";import{P as xe}from"./index.358f6f43.js";import{V as z}from"./index.b31fce0f.js";import{V as be}from"./index.786f87ea.js";import"./use-route.f2a7e4c6.js";import"./index.bc7c56e3.js";import"./interceptor.37662564.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.61a8687b.js";import"./index.e5e922ff.js";const[N,E]=F("dropdown-menu"),ye={overlay:A,zIndex:J,duration:X(.2),direction:ee("down"),activeColor:String,closeOnClickOutside:A,closeOnClickOverlay:A},$=Symbol(N),ge=I({name:N,props:ye,setup(a,{slots:u}){const v=le(),i=b(),c=b(),r=b(0),{children:s,linkChildren:V}=R($),w=j(i),y=T(()=>s.some(e=>e.state.showWrapper)),g=T(()=>{if(y.value&&H(a.zIndex))return{zIndex:+a.zIndex+1}}),l=()=>{a.closeOnClickOutside&&s.forEach(e=>{e.toggle(!1)})},f=()=>{if(c.value){const e=Z(c);a.direction==="down"?r.value=e.bottom:r.value=Q.value-e.top}},n=()=>{y.value&&f()},B=e=>{s.forEach((d,m)=>{m===e?(f(),d.toggle()):d.state.showPopup&&d.toggle(!1,{immediate:!0})})},D=(e,d)=>{const{showPopup:m}=e.state,{disabled:x,titleClass:O}=e;return o("div",{id:`${v}-${d}`,role:"button",tabindex:x?void 0:0,class:[E("item",{disabled:x}),{[oe]:!x}],onClick:()=>{x||B(d)}},[o("span",{class:[E("title",{down:m===(a.direction==="down"),active:m}),O],style:{color:m?a.activeColor:""}},[o("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return V({id:v,props:a,offset:r}),K(i,l),L("scroll",n,{target:w,passive:!0}),()=>{var e;return o("div",{ref:i,class:E()},[o("div",{ref:c,style:g.value,class:E("bar",{opened:y.value})},[s.map(D)]),(e=u.default)==null?void 0:e.call(u)])}}}),Oe=M(ge),k=Oe;function ke(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!ie(a)}const[De,h]=F("dropdown-item"),Pe={title:String,options:te(),disabled:Boolean,teleport:[String,Object],lazyRender:A,modelValue:U,titleClass:U},Ee=I({name:De,props:Pe,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:u,slots:v}){const i=ne({showPopup:!1,transition:!0,showWrapper:!1}),{parent:c,index:r}=Y($);if(!c)return;const s=e=>()=>u(e),V=s("open"),w=s("close"),y=s("opened"),g=()=>{i.showWrapper=!1,u("closed")},l=e=>{a.teleport&&e.stopPropagation()},f=(e=!i.showPopup,d={})=>{e!==i.showPopup&&(i.showPopup=e,i.transition=!d.immediate,e&&(i.showWrapper=!0))},n=()=>{if(v.title)return v.title();if(a.title)return a.title;const e=a.options.find(d=>d.value===a.modelValue);return e?e.text:""},B=e=>{const{activeColor:d}=c.props,m=e.value===a.modelValue,x=()=>{i.showPopup=!1,e.value!==a.modelValue&&(u("update:modelValue",e.value),u("change",e.value))},O=()=>{if(m)return o(we,{class:h("icon"),color:d,name:"success"},null)};return o(Ve,{role:"menuitem",key:e.value,icon:e.icon,title:e.text,class:h("option",{active:m}),style:{color:m?d:""},tabindex:m?0:-1,clickable:!0,onClick:x},{value:O})},D=()=>{const{offset:e}=c,{zIndex:d,overlay:m,duration:x,direction:O,closeOnClickOverlay:W}=c.props,S=q(d);return O==="down"?S.top=`${e.value}px`:S.bottom=`${e.value}px`,ae(o("div",{style:S,class:h([O]),onClick:l},[o(xe,{show:i.showPopup,"onUpdate:show":P=>i.showPopup=P,role:"menu",class:h("content"),overlay:m,position:O==="down"?"top":"bottom",duration:i.transition?x:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${c.id}-${r.value}`,closeOnClickOverlay:W,onOpen:V,onClose:w,onOpened:y,onClosed:g},{default:()=>{var P;return[a.options.map(B),(P=v.default)==null?void 0:P.call(v)]}})]),[[ue,i.showWrapper]])};return Ce({state:i,toggle:f,renderTitle:n}),()=>{if(a.teleport){let e;return o(se,{to:a.teleport},ke(e=D())?e:{default:()=>[e]})}return D()}}}),he=M(Ee),C=he,Ae={style:{padding:"5px 16px"}},Ye=I({__name:"index",setup(a){const u=G({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),v=b(),i=b(!0),c=b(!1),r=b(0),s=b("a"),V=T(()=>u("option1")),w=T(()=>u("option2")),y=()=>{var g;(g=v.value)==null||g.toggle()};return(g,l)=>{const f=re("demo-block");return de(),pe(fe,null,[o(f,{title:t(u)("basicUsage")},{default:p(()=>[o(t(k),null,{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=n=>r.value=n),options:t(V)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=n=>s.value=n),options:t(w)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customContent")},{default:p(()=>[o(t(k),null,{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value=n),options:t(V)},null,8,["modelValue","options"]),o(t(C),{title:t(u)("itemTitle"),ref_key:"item",ref:v},{default:p(()=>[o(t(_),{center:"",title:t(u)("switchTitle1")},{"right-icon":p(()=>[o(t(z),{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=n=>i.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),o(t(_),{center:"",title:t(u)("switchTitle2")},{"right-icon":p(()=>[o(t(z),{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=n=>c.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),ce("div",Ae,[o(t(be),{type:"primary",block:"",round:"",style:{height:"40px"},onClick:y},{default:p(()=>[me(ve(t(u)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customActiveColor")},{default:p(()=>[o(t(k),{"active-color":"#ee0a24"},{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=n=>r.value=n),options:t(V)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[6]||(l[6]=n=>s.value=n),options:t(w)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("expandDirection")},{default:p(()=>[o(t(k),{direction:"up"},{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=n=>r.value=n),options:t(V)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[8]||(l[8]=n=>s.value=n),options:t(w)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("disableMenu")},{default:p(()=>[o(t(k),null,{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[9]||(l[9]=n=>r.value=n),disabled:"",options:t(V)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[10]||(l[10]=n=>s.value=n),disabled:"",options:t(w)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ye as default};
