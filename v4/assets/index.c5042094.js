import{c,e as u,q as m,h as d}from"./use-translate.2660019b.js";import{n as o,m as p,w as S}from"./with-install.87cec8a5.js";import{e as n,A as f,D as g}from"./vue-libs.df86f395.js";const[x,r]=c("loading"),y=Array(12).fill(null).map((e,a)=>n("i",{class:r("line",String(a+1))},null)),v=n("svg",{class:r("circular"),viewBox:"25 25 50 50"},[n("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),z={size:o,type:p("circular"),color:String,vertical:Boolean,textSize:o,textColor:String};var C=f({name:x,props:z,setup(e,{slots:a}){const i=g(()=>u({color:e.color},m(e.size))),l=()=>{var t;if(a.default)return n("span",{class:r("text"),style:{fontSize:d(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[a.default()])};return()=>{const{type:t,vertical:s}=e;return n("div",{class:r([t,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[n("span",{class:r("spinner",t),style:i.value},[t==="spinner"?y:v]),l()])}}});const P=S(C);export{P as L};
