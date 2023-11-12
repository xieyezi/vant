import{c as g,e as m,v as C,a as D}from"./use-translate.94d81043.js";import{w as S}from"./with-install.dd5596ee.js";import{C as B}from"./index.172b9149.js";import{F as w}from"./index.433414e7.js";import{F as b}from"./index.57ce89ad.js";import{B as v}from"./index.d0d913b5.js";import{S as E}from"./index.c3cce590.js";import{A as _,H as x,y,e as a,x as V,r as k,o as F,c as T,w as A,C as u}from"./vue-libs.84c45047.js";import{T as h}from"./function-call.c77f6bc2.js";import"./use-route.7c55373a.js";import"./index.9326a531.js";import"./constant.80c6de18.js";import"./use-expose.771ababc.js";import"./use-id.e5fd672f.js";import"./index.a750e74d.js";import"./mount-component.725b707e.js";import"./index.cae7cbae.js";import"./interceptor.e76ee8d4.js";import"./use-touch.109c1035.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";const[L,s,n]=g("contact-edit"),d={tel:"",name:""},U={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:C}};var I=_({name:L,props:U,emits:["save","delete","changeDefault"],setup(t,{emit:o}){const e=x(m({},d,t.contactInfo)),i=()=>{t.isSaving||o("save",e)},r=()=>o("delete",e),f=()=>a("div",{class:s("buttons")},[a(v,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(v,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:r},null)]),p=()=>a(E,{modelValue:e.isDefault,"onUpdate:modelValue":l=>e.isDefault=l,onChange:l=>o("changeDefault",l)},null),c=()=>{if(t.showSetDefault)return a(B,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return y(()=>t.contactInfo,l=>m(e,d,l)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":l=>e.tel=l,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),c(),f()]})}});const N=S(I);const ne=_({setup(t){const o=D({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=V({tel:"",name:""}),i=()=>h(o("save")),r=()=>h(o("delete"));return(f,p)=>{const c=k("demo-block");return F(),T(c,{title:u(o)("basicUsage")},{default:A(()=>[a(u(N),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(o)("defaultLabel"),onSave:i,onDelete:r},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ne as default};
