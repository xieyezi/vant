import{L as F,M as Te,J as Se,c as V,i as q,O as we,b as Ce,G as ke,P as Ie,o as xe,n as Be,p as Re,Q as $e,h as G,z as Ae,R as J,r as p,e as Pe,u as Ne}from"./use-translate.c56bc05e.js";import{n as I,t as M,d as W,m as Oe,c as _,u as ze,w as ne}from"./with-install.2d06a5b3.js";import{A as D,D as C,e as h,Q as ae,x as $,y as k,N as Le,H as je,q as R,L as _e,B as Ee,E as Me,I as Ve,j as De,v as He}from"./vue-libs.a3cd7f61.js";import{u as ie}from"./use-id.5b8801cd.js";import{u as oe}from"./use-expose.2dad0d8e.js";import{a as We,r as Ze}from"./use-route.7a9317f3.js";import{S as Fe,a as qe}from"./index.3ccbda83.js";import{b as Ke}from"./constant.80c6de18.js";import{c as Qe}from"./interceptor.7caa5e9a.js";import{u as Ue}from"./use-refs.a0fe18f0.js";import{o as Xe}from"./on-popup-reopen.a53db14c.js";import{S as Ye}from"./index.0d3f38fa.js";import{B as Ge}from"./index.bb072daf.js";function Je(e,o,i){let b=0;const a=e.scrollLeft,f=i===0?1:Math.round(i*1e3/16);function c(){e.scrollLeft+=(o-a)/f,++b<f&&F(c)}c()}function pe(e,o,i,b){let a=Te(e);const f=a<o,c=i===0?1:Math.round(i*1e3/16),u=(o-a)/c;function r(){a+=u,(f&&a>o||!f&&a<o)&&(a=o),Se(e,a),f&&a<o||!f&&a>o?F(r):b&&F(b)}r()}function et(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ae(e)}const[tt,ee]=V("tab"),nt=D({name:tt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:I,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:M},setup(e,{slots:o}){const i=C(()=>{const a={},{type:f,color:c,disabled:u,isActive:r,activeColor:m,inactiveColor:y}=e;c&&f==="card"&&(a.borderColor=c,u||(r?a.backgroundColor=c:a.color=c));const T=r?m:y;return T&&(a.color=T),a}),b=()=>{const a=h("span",{class:ee("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||q(e.badge)&&e.badge!==""?h(Ge,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},et(a)?a:{default:()=>[a]}):a};return()=>h("div",{id:e.id,role:"tab",class:[ee([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[b()])}});function at(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ae(e)}const[it,te]=V("tabs"),ot=D({name:it,props:{count:W(Number),inited:Boolean,animated:Boolean,duration:W(I),swipeable:Boolean,lazyRender:Boolean,currentIndex:W(Number)},emits:["change"],setup(e,{emit:o,slots:i}){const b=$(),a=u=>o("change",u),f=()=>{var r;const u=(r=i.default)==null?void 0:r.call(i);return e.animated||e.swipeable?h(Fe,{ref:b,loop:!1,class:te("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:a},at(u)?u:{default:()=>[u]}):u},c=u=>{const r=b.value;r&&r.state.active!==u&&r.swipeTo(u,{immediate:!e.inited})};return k(()=>e.currentIndex,c),Le(()=>{c(e.currentIndex)}),()=>h("div",{class:te("content",{animated:e.animated||e.swipeable})},[f()])}}),[le,E]=V("tabs"),lt={type:Oe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:_(0),duration:_(.3),animated:Boolean,ellipsis:M,swipeable:Boolean,scrollspy:Boolean,offsetTop:_(0),background:String,lazyRender:M,lineWidth:I,lineHeight:I,beforeChange:Function,swipeThreshold:_(5),titleActiveColor:String,titleInactiveColor:String},re=Symbol(le),rt=D({name:le,props:lt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:i}){let b,a,f;const c=$(),u=$(),r=$(),m=ie(),y=we(c),[x,T]=Ue(),{children:d,linkChildren:A}=Ce(re),s=je({inited:!1,position:"",lineStyle:{},currentIndex:-1}),B=C(()=>d.length>e.swipeThreshold||!e.ellipsis||e.shrink),P=C(()=>({borderColor:e.color,background:e.background})),S=(t,n)=>{var l;return(l=t.name)!=null?l:n},K=C(()=>{const t=d[s.currentIndex];if(t)return S(t,s.currentIndex)}),H=C(()=>ke(e.offsetTop)),Q=C(()=>e.sticky?H.value+b:0),N=t=>{const n=u.value,l=x.value;if(!B.value||!n||!l||!l[s.currentIndex])return;const v=l[s.currentIndex].$el,g=v.offsetLeft-(n.offsetWidth-v.offsetWidth)/2;Je(n,g,t?0:+e.duration)},w=()=>{const t=s.inited;R(()=>{const n=x.value;if(!n||!n[s.currentIndex]||e.type!=="line"||$e(c.value))return;const l=n[s.currentIndex].$el,{lineWidth:v,lineHeight:g}=e,L=l.offsetLeft+l.offsetWidth/2,j={width:G(v),backgroundColor:e.color,transform:`translateX(${L}px) translateX(-50%)`};if(t&&(j.transitionDuration=`${e.duration}s`),q(g)){const Y=G(g);j.height=Y,j.borderRadius=Y}s.lineStyle=j})},se=t=>{const n=t<s.currentIndex?-1:1;for(;t>=0&&t<d.length;){if(!d[t].disabled)return t;t+=n}},O=t=>{const n=se(t);if(!q(n))return;const l=d[n],v=S(l,n),g=s.currentIndex!==null;s.currentIndex=n,v!==e.active&&(o("update:active",v),g&&o("change",v,l.title))},z=t=>{const n=d.find((v,g)=>S(v,g)===t),l=n?d.indexOf(n):0;O(l)},U=(t=!1)=>{if(e.scrollspy){const n=d[s.currentIndex].$el;if(n&&y.value){const l=J(n,y.value)-Q.value;a=!0,pe(y.value,l,t?0:+e.duration,()=>{a=!1})}}},de=(t,n,l)=>{const{title:v,disabled:g}=d[n],L=S(d[n],n);g||(Qe(e.beforeChange,{args:[L],done:()=>{O(n),U()}}),We(t)),o("clickTab",{name:L,title:v,event:l,disabled:g})},ue=t=>{f=t.isFixed,o("scroll",t)},fe=t=>{R(()=>{z(t),U(!0)})},be=()=>{for(let t=0;t<d.length;t++){const{top:n}=p(d[t].$el);if(n>Q.value)return t===0?0:t-1}return d.length-1},ve=()=>{if(e.scrollspy&&!a){const t=be();O(t)}},he=()=>d.map((t,n)=>h(nt,Ee({key:t.id,id:`${m}-${n}`,ref:T(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:n===s.currentIndex,controls:t.id,scrollable:B.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:l=>de(t,n,l)},Re(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),me=()=>{if(e.type==="line"&&d.length)return h("div",{class:E("line"),style:s.lineStyle},null)},X=()=>{var l,v;const{type:t,border:n}=e;return h("div",{ref:r,class:[E("wrap"),{[Ke]:t==="line"&&n}]},[h("div",{ref:u,role:"tablist",class:E("nav",[t,{shrink:e.shrink,complete:B.value}]),style:P.value,"aria-orientation":"horizontal"},[(l=i["nav-left"])==null?void 0:l.call(i),he(),me(),(v=i["nav-right"])==null?void 0:v.call(i)])])};k([()=>e.color,Ie],w),k(()=>e.active,t=>{t!==K.value&&z(t)}),k(()=>d.length,()=>{s.inited&&(z(e.active),w(),R(()=>{N(!0)}))}),k(()=>s.currentIndex,()=>{N(),w(),f&&!e.scrollspy&&Ae(Math.ceil(J(c.value)-H.value))});const ge=()=>{z(e.active),R(()=>{s.inited=!0,r.value&&(b=p(r.value).height),N(!0)})},ye=(t,n)=>o("rendered",t,n);return oe({resize:w,scrollTo:fe}),_e(w),Xe(w),xe(ge),Be("scroll",ve,{target:y}),A({id:m,props:e,setLine:w,onRendered:ye,currentName:K,scrollIntoView:N}),()=>{var t;return h("div",{ref:c,class:E([e.type])},[e.sticky?h(Ye,{container:c.value,offsetTop:H.value,onScroll:ue},{default:()=>{var n;return[X(),(n=i["nav-bottom"])==null?void 0:n.call(i)]}}):[X(),(t=i["nav-bottom"])==null?void 0:t.call(i)],h(ot,{count:d.length,inited:s.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:s.currentIndex,onChange:O},{default:()=>{var n;return[(n=i.default)==null?void 0:n.call(i)]}})])}}}),ce=Symbol(),Bt=()=>Me(ce,null),[ct,Z]=V("tab"),st=Pe({},Ze,{dot:Boolean,name:I,badge:I,title:String,disabled:Boolean,titleClass:ze,titleStyle:[String,Object],showZeroBadge:M}),dt=D({name:ct,props:st,setup(e,{slots:o}){const i=ie(),b=$(!1),{parent:a,index:f}=Ne(re);if(!a)return;const c=()=>{var m;return(m=e.name)!=null?m:f.value},u=()=>{b.value=!0,a.props.lazyRender&&R(()=>{a.onRendered(c(),e.title)})},r=C(()=>{const m=c()===a.currentName.value;return m&&!b.value&&u(),m});return k(()=>e.title,()=>{a.setLine(),a.scrollIntoView()}),Ve(ce,r),()=>{var P;const m=`${a.id}-${f.value}`,{animated:y,swipeable:x,scrollspy:T,lazyRender:d}=a.props;if(!o.default&&!y)return;const A=T||r.value;if(y||x)return h(qe,{id:i,role:"tabpanel",class:Z("panel-wrapper",{inactive:!r.value}),tabindex:r.value?0:-1,"aria-hidden":!r.value,"aria-labelledby":m},{default:()=>{var S;return[h("div",{class:Z("panel")},[(S=o.default)==null?void 0:S.call(o)])]}});const B=b.value||T||!d?(P=o.default)==null?void 0:P.call(o):null;return oe({id:i}),De(h("div",{id:i,role:"tabpanel",class:Z("panel"),tabindex:A?0:-1,"aria-labelledby":m},[B]),[[He,A]])}}}),ut=ne(dt),Rt=ut,ft=ne(rt),$t=ft;export{ft as T,$t as V,ut as a,Rt as b,Bt as u};
