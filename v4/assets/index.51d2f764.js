import{c as L,i as D,r as z,Z as I,l as M,F as O,a as j}from"./use-translate.c56bc05e.js";import{c as X,n as V,w as Z}from"./with-install.2d06a5b3.js";import{c as $}from"./interceptor.7caa5e9a.js";import{u as G}from"./use-touch.196fce0c.js";import{u as J}from"./use-expose.2dad0d8e.js";import{A as q,x as v,H as K,D as P,e as l,r as Q,o as Y,a as ee,w as r,C as t,F as te}from"./vue-libs.a3cd7f61.js";import{V as p}from"./index.af6aabcb.js";import{V as R}from"./index.8c710c0a.js";import{V as oe}from"./index.2afcaecd.js";import{c as le}from"./index.e41a59ee.js";import{a as ne}from"./index.6da91a01.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";import"./index.bb072daf.js";import"./index.1fe53b6c.js";import"./index.ceab0060.js";import"./index.5c39f445.js";import"./index.649b4224.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./index.0f3499c0.js";import"./use-placeholder.dc0fc6b5.js";import"./use-height.09314ad4.js";import"./mount-component.2ea251e1.js";const[ae,x]=L("swipe-cell"),se={name:X(""),disabled:Boolean,leftWidth:V,rightWidth:V,beforeClose:Function,stopPropagation:Boolean},re=q({name:ae,props:se,emits:["open","close","click"],setup(n,{emit:o,slots:f}){let i,u,m;const d=v(),w=v(),y=v(),a=K({offset:0,dragging:!1}),g=G(),T=e=>e.value?z(e).width:0,h=P(()=>D(n.leftWidth)?+n.leftWidth:T(w)),C=P(()=>D(n.rightWidth)?+n.rightWidth:T(y)),k=e=>{a.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:n.name,position:e}))},_=e=>{a.offset=0,i&&(i=!1,o("close",{name:n.name,position:e}))},A=e=>{const s=Math.abs(a.offset),c=.15,U=i?1-c:c,W=e==="left"?h.value:C.value;W&&s>W*U?k(e):_(e)},H=e=>{n.disabled||(m=a.offset,g.start(e))},N=e=>{if(n.disabled)return;const{deltaX:s}=g;g.move(e),g.isHorizontal()&&(u=!0,a.dragging=!0,(!i||s.value*m<0)&&M(e,n.stopPropagation),a.offset=O(s.value+m,-C.value,h.value))},B=()=>{a.dragging&&(a.dragging=!1,A(a.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&$(n.beforeClose,{args:[{name:n.name,position:e}],done:()=>_(e)})},S=(e,s)=>c=>{s&&c.stopPropagation(),E(e)},F=(e,s)=>{const c=f[e];if(c)return l("div",{ref:s,class:x(e),onClick:S(e,!0)},[c()])};return J({open:k,close:_}),I(d,()=>E("outside"),{eventName:"touchstart"}),()=>{var s;const e={transform:`translate3d(${a.offset}px, 0, 0)`,transitionDuration:a.dragging?"0s":".6s"};return l("div",{ref:d,class:x(),onClick:S("cell",u),onTouchstart:H,onTouchmove:N,onTouchend:B,onTouchcancel:B},[l("div",{class:x("wrapper"),style:e},[F("left",w),(s=f.default)==null?void 0:s.call(f),F("right",y)])])}}}),ie=Z(re),b=ie,Re=q({__name:"index",setup(n){const o=j({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),f=le("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(m=>{ne({title:o("confirm")}).then(()=>{m(!0)})})}};return(u,m)=>{const d=Q("demo-block");return Y(),ee(te,null,[l(d,{title:t(o)("basicUsage")},{default:r(()=>[l(t(b),null,{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:r(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("customContent")},{default:r(()=>[l(t(b),null,{right:r(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(oe),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(f)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("beforeClose")},{default:r(()=>[l(t(b),{"before-close":i},{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Re as default};
