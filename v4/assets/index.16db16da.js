import{c as d,e as r,d as f,f as m}from"./use-translate.8036e41d.js";import{m as p,u as g}from"./mount-component.5abe2a8c.js";import{A as w,e as i,B as k}from"./vue-libs.a040eeb8.js";import{m as a,n as y,u as h,w as N}from"./with-install.6887218d.js";import{p as S,P}from"./index.04b3d3c6.js";const[b,O]=d("notify"),C=r({},S,{type:a("danger"),color:String,message:y,position:a("top"),className:h,background:String,lockScroll:Boolean}),c=w({name:b,props:C,emits:["update:show"],setup(e,{emit:t,slots:n}){const l=u=>t("update:show",u);return()=>i(P,{show:e.show,class:[O([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":l},{default:()=>[n.default?n.default():e.message]})}});let s,o;const B=e=>m(e)?e:{message:e};function x(){({instance:o}=p({setup(){const{state:e,toggle:t}=g();return()=>i(c,k(e,{"onUpdate:show":t}),null)}}))}const I=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let T=I();const U=()=>{o&&o.toggle(!1)};function _(e){if(!!f)return o||x(),e=r({},T,B(e)),o.open(e),clearTimeout(s),e.duration>0&&(s=window.setTimeout(U,e.duration)),o}const q=N(c);export{q as N,_ as s};
