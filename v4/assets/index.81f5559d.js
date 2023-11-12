import{c as f,h,a as x}from"./use-translate.d5447508.js";import{t as k,n as g,w as C}from"./with-install.cb9a7594.js";import{A as _,D as y,e,x as S,r as b,o as w,a as B,w as p,C as t,d as P,F}from"./vue-libs.84c45047.js";import{B as m}from"./index.813acfbc.js";import"./constant.80c6de18.js";import"./use-route.7c55373a.js";import"./index.62b8e91e.js";import"./index.57f45cfb.js";const[W,v]=f("progress"),E={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:k,pivotColor:String,trackColor:String,strokeWidth:g,percentage:{type:g,default:0,validator:r=>r>=0&&r<=100}};var N=_({name:W,props:E,setup(r){const o=y(()=>r.inactive?void 0:r.color),n=()=>{const{textColor:c,pivotText:i,pivotColor:u,percentage:a}=r,d=i!=null?i:`${a}%`;if(r.showPivot&&d){const l={color:c,left:`${+a}%`,transform:`translate(-${+a}%,-50%)`,background:u||o.value};return e("span",{style:l,class:v("pivot",{inactive:r.inactive})},[d])}};return()=>{const{trackColor:c,percentage:i,strokeWidth:u}=r,a={background:c,height:h(u)},d={width:`${i}%`,background:o.value};return e("div",{class:v(),style:a},[e("span",{class:v("portion",{inactive:r.inactive}),style:d},null),n()])}}});const s=C(N);const $={style:{"margin-top":"15px"}},j=_({setup(r){const o=x({"zh-CN":{title2:"\u7F6E\u7070",title3:"\u6837\u5F0F\u5B9A\u5236",strokeWidth:"\u7EBF\u6761\u7C97\u7EC6",transition:"\u8FC7\u6E21\u6548\u679C"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width",transition:"Transition"}}),n=S(50),c=a=>Math.min(Math.max(a,0),100),i=()=>{n.value=c(n.value+20)},u=()=>{n.value=c(n.value-20)};return(a,d)=>{const l=b("demo-block");return w(),B(F,null,[e(l,{title:t(o)("basicUsage")},{default:p(()=>[e(t(s),{percentage:50})]),_:1},8,["title"]),e(l,{title:t(o)("strokeWidth")},{default:p(()=>[e(t(s),{percentage:50,"stroke-width":"8"})]),_:1},8,["title"]),e(l,{title:t(o)("title2")},{default:p(()=>[e(t(s),{inactive:"",percentage:50})]),_:1},8,["title"]),e(l,{title:t(o)("title3")},{default:p(()=>[e(t(s),{color:"#f2826a",percentage:25,"pivot-text":t(o)("orange")},null,8,["pivot-text"]),e(t(s),{color:"#ee0a24",percentage:50,"pivot-text":t(o)("red")},null,8,["pivot-text"]),e(t(s),{percentage:75,"pivot-text":t(o)("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])]),_:1},8,["title"]),e(l,{title:t(o)("transition")},{default:p(()=>[e(t(s),{percentage:n.value},null,8,["percentage"]),P("div",$,[e(t(m),{text:t(o)("add"),type:"primary",size:"small",onClick:i},null,8,["text"]),e(t(m),{text:t(o)("decrease"),type:"danger",size:"small",onClick:u},null,8,["text"])])]),_:1},8,["title"])],64)}}});export{j as default};
