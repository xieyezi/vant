import{e as c,M as u}from"./use-translate.d5447508.js";import{b as m}from"./with-install.cb9a7594.js";import{p}from"./Picker.f836d285.js";const h=c({},p,{modelValue:m(),filter:Function,formatter:{type:Function,default:(t,e)=>e}}),g=Object.keys(p);function d(t,e){if(t<0)return[];const r=Array(t);let o=-1;for(;++o<t;)r[o]=e(o);return r}const k=(t,e)=>32-new Date(t,e-1,32).getDate(),x=(t,e,r,o,s)=>{const n=d(e-t+1,i=>{const a=u(t+i);return o(r,{text:a,value:a})});return s?s(r,n):n};export{x as a,k as g,g as p,h as s};
