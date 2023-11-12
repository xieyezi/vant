import{c as g,e as m,v as C,a as D}from"./use-translate.2660019b.js";import{w as S}from"./with-install.87cec8a5.js";import{C as B}from"./index.fa39f2fa.js";import{F as w}from"./index.4b5b66dc.js";import{F as b}from"./index.fae38a98.js";import{B as v}from"./index.e048a5cb.js";import{S as x}from"./index.bc6fa6ce.js";import{A as _,H as E,y,e as a,x as V,r as k,o as F,c as T,w as A,C as u}from"./vue-libs.df86f395.js";import{T as h}from"./function-call.4a1a1c46.js";import"./use-route.f401cb95.js";import"./index.17b6eda3.js";import"./constant.80c6de18.js";import"./use-expose.7d65f428.js";import"./use-id.2eb6d212.js";import"./index.c5042094.js";import"./mount-component.eae8658d.js";import"./index.721124a6.js";import"./interceptor.bb19cb80.js";import"./use-touch.d1be10ec.js";import"./use-lazy-render.75150313.js";import"./on-popup-reopen.e1d5c0c5.js";import"./index.6d40715e.js";const[L,s,n]=g("contact-edit"),d={tel:"",name:""},U={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:C}};var I=_({name:L,props:U,emits:["save","delete","changeDefault"],setup(t,{emit:o}){const e=E(m({},d,t.contactInfo)),i=()=>{t.isSaving||o("save",e)},r=()=>o("delete",e),f=()=>a("div",{class:s("buttons")},[a(v,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(v,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:r},null)]),p=()=>a(x,{modelValue:e.isDefault,"onUpdate:modelValue":l=>e.isDefault=l,onChange:l=>o("changeDefault",l)},null),c=()=>{if(t.showSetDefault)return a(B,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return y(()=>t.contactInfo,l=>m(e,d,l)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":l=>e.tel=l,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),c(),f()]})}});const N=S(I);const ne=_({name:"index",setup(t){const o=D({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=V({tel:"",name:""}),i=()=>h(o("save")),r=()=>h(o("delete"));return(f,p)=>{const c=k("demo-block");return F(),T(c,{title:u(o)("basicUsage")},{default:A(()=>[a(u(N),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(o)("defaultLabel"),onSave:i,onDelete:r},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ne as default};
