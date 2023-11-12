import{c as f,h,a as x}from"./use-translate.c7ada534.js";import{t as k,n as g,w as C}from"./with-install.fe59c8e0.js";import{A as _,D as y,e,x as S,r as b,o as P,a as w,w as p,C as t,d as B,F}from"./vue-libs.34a885a4.js";import{V as v}from"./index.b04af9f0.js";import"./constant.80c6de18.js";import"./use-route.d291d507.js";import"./index.6d509bfd.js";import"./index.3d1cb367.js";import"./index.17a6cccd.js";const[W,m]=f("progress"),E={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:k,pivotColor:String,trackColor:String,strokeWidth:g,percentage:{type:g,default:0,validator:n=>n>=0&&n<=100}},V=_({name:W,props:E,setup(n){const o=y(()=>n.inactive?void 0:n.color),a=()=>{const{textColor:c,pivotText:i,pivotColor:u,percentage:r}=n,d=i!=null?i:`${r}%`;if(n.showPivot&&d){const s={color:c,left:`${+r}%`,transform:`translate(-${+r}%,-50%)`,background:u||o.value};return e("span",{style:s,class:m("pivot",{inactive:n.inactive})},[d])}};return()=>{const{trackColor:c,percentage:i,strokeWidth:u}=n,r={background:c,height:h(u)},d={width:`${i}%`,background:o.value};return e("div",{class:m(),style:r},[e("span",{class:m("portion",{inactive:n.inactive}),style:d},null),a()])}}}),N=C(V),l=N,$={style:{"margin-top":"15px"}},G=_({__name:"index",setup(n){const o=x({"zh-CN":{title2:"\u7F6E\u7070",title3:"\u6837\u5F0F\u5B9A\u5236",strokeWidth:"\u7EBF\u6761\u7C97\u7EC6",transition:"\u8FC7\u6E21\u6548\u679C"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width",transition:"Transition"}}),a=S(50),c=r=>Math.min(Math.max(r,0),100),i=()=>{a.value=c(a.value+20)},u=()=>{a.value=c(a.value-20)};return(r,d)=>{const s=b("demo-block");return P(),w(F,null,[e(s,{title:t(o)("basicUsage")},{default:p(()=>[e(t(l),{percentage:50})]),_:1},8,["title"]),e(s,{title:t(o)("strokeWidth")},{default:p(()=>[e(t(l),{percentage:50,"stroke-width":"8"})]),_:1},8,["title"]),e(s,{title:t(o)("title2")},{default:p(()=>[e(t(l),{inactive:"",percentage:50})]),_:1},8,["title"]),e(s,{title:t(o)("title3")},{default:p(()=>[e(t(l),{color:"#f2826a",percentage:25,"pivot-text":t(o)("orange")},null,8,["pivot-text"]),e(t(l),{color:"#ee0a24",percentage:50,"pivot-text":t(o)("red")},null,8,["pivot-text"]),e(t(l),{percentage:75,"pivot-text":t(o)("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])]),_:1},8,["title"]),e(s,{title:t(o)("transition")},{default:p(()=>[e(t(l),{percentage:a.value},null,8,["percentage"]),B("div",$,[e(t(v),{text:t(o)("add"),type:"primary",size:"small",onClick:i},null,8,["text"]),e(t(v),{text:t(o)("decrease"),type:"danger",size:"small",onClick:u},null,8,["text"])])]),_:1},8,["title"])],64)}}});export{G as default};
