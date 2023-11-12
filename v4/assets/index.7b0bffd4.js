import{c as g,e as d,w as C,a as D}from"./use-translate.8036e41d.js";import{w as S}from"./with-install.6887218d.js";import{C as B}from"./index.e17d8230.js";import{F as w}from"./index.08d4f314.js";import{F as b}from"./index.c085a946.js";import{B as _}from"./index.378beb57.js";import{S as E}from"./index.e188135e.js";import{A as v,H as x,y,e as a,x as V,r as k,o as F,c as A,w as L,C as u}from"./vue-libs.a040eeb8.js";import{s as h}from"./index.0fce17eb.js";import"./use-route.f2a7e4c6.js";import"./index.bbaa83e9.js";import"./constant.80c6de18.js";import"./use-expose.1f17c8d6.js";import"./use-id.3079e917.js";import"./index.e68b0dfb.js";import"./index.04b3d3c6.js";import"./interceptor.66b82326.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.90d1b68e.js";import"./mount-component.5abe2a8c.js";const[T,s,n]=g("contact-edit"),m={tel:"",name:""},U={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:C}},I=v({name:T,props:U,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=x(d({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(E,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(B,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return y(()=>t.contactInfo,o=>d(e,m,o)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),N=S(I),O=N,se=v({__name:"index",setup(t){const l=D({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=V({tel:"",name:""}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=k("demo-block");return F(),A(r,{title:u(l)("basicUsage")},{default:L(()=>[a(u(O),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{se as default};
