import{c as x,e as C,a as k}from"./use-translate.48fbbaf5.js";import{d as F,b as p,n as _,t as h,w as A}from"./with-install.685b3f2d.js";import{B}from"./index.c0a655c4.js";import{R as S,a as w}from"./index.f861e310.js";import{T as v}from"./index.c0b09024.js";import{I as y}from"./index.fa826fe1.js";import{C as L}from"./index.604ef55c.js";import{A as T,e as u,Q as D,x as I,r as V,o as j,c as $,w as P,C as n}from"./vue-libs.84c45047.js";import{T as g}from"./function-call.fcc6f74b.js";import"./constant.80c6de18.js";import"./use-route.7c55373a.js";import"./index.4fee12b7.js";import"./Checker.4001eaa1.js";import"./mount-component.946bc88b.js";import"./use-expose.af01e405.js";import"./index.f99722a6.js";import"./interceptor.a485b929.js";import"./use-touch.c1d7ebd1.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.7c0fb95e.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[O,c]=x("address-item");var R=T({name:O,props:{address:F(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:t,emit:s}){const m=()=>{e.switchable&&s("select"),s("click")},l=()=>u(y,{name:"edit",class:c("edit"),onClick:d=>{d.stopPropagation(),s("edit"),s("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return u(v,{type:"primary",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:i,switchable:r}=e,o=[u("div",{class:c("name")},[`${d.name} ${d.tel}`,f()]),u("div",{class:c("address")},[d.address])];return r&&!i?u(S,{name:d.id,iconSize:18},N(o)?o:{default:()=>[o]}):o};return()=>{var i;const{disabled:d}=e;return u("div",{class:c({disabled:d}),onClick:m},[u(L,{border:!1,titleClass:c("title")},{title:a,"right-icon":l}),(i=t.bottom)==null?void 0:i.call(t,C({},e.address,{disabled:d}))])}}});function U(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[z,b,q]=x("address-list"),G={list:p(),modelValue:_,switchable:h,disabledText:String,disabledList:p(),addButtonText:String,defaultTagText:String};var J=T({name:z,props:G,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:t,emit:s}){const m=(a,d,i)=>{const r=()=>s(i?"editDisabled":"edit",a,d),o=()=>s("clickItem",a,d),E=()=>{s(i?"selectDisabled":"select",a,d),i||s("update:modelValue",a.id)};return u(R,{key:a.id,address:a,disabled:i,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:r,onClick:o,onSelect:E},{bottom:t["item-bottom"],tag:t.tag})},l=(a,d)=>{if(a)return a.map((i,r)=>m(i,r,d))},f=()=>u("div",{class:[b("bottom"),"van-safe-area-bottom"]},[u(B,{round:!0,block:!0,type:"primary",text:e.addButtonText||q("add"),class:b("add"),onClick:()=>s("add")},null)]);return()=>{var r,o;const a=l(e.list),d=l(e.disabledList,!0),i=e.disabledText&&u("div",{class:b("disabled-text")},[e.disabledText]);return u("div",{class:b()},[(r=t.top)==null?void 0:r.call(t),u(w,{modelValue:e.modelValue},U(a)?a:{default:()=>[a]}),i,d,(o=t.default)==null?void 0:o.call(t),f()])}}});const Q=A(J);const be=T({setup(e){const t=k({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),s=I("1"),m=()=>{g(t("add"))},l=(f,a)=>{g(`${t("edit")}:${a}`)};return(f,a)=>{const d=V("demo-block");return j(),$(d,{title:n(t)("basicUsage")},{default:P(()=>[u(n(Q),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=i=>s.value=i),list:n(t)("list"),"disabled-list":n(t)("disabledList"),"disabled-text":n(t)("disabledText"),"default-tag-text":n(t)("defaultTagText"),onAdd:m,onEdit:l},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{be as default};
