import{c as E,l as M,F as T,P as G,S as J,p as ee,r as oe,d as te,e as ae}from"./use-translate.22943ac9.js";import{d as Y,n as k,t as H,b as ne,c as Z,u as A,m as $,w as se}from"./with-install.c6b01ca2.js";import{m as ie,u as ce}from"./mount-component.f5f0bedd.js";import{H as le}from"./constant.80c6de18.js";import{c as re}from"./interceptor.0a931a5c.js";import{u as me}from"./use-expose.e6b8a577.js";import{I as ue}from"./index.7f987ed8.js";import{a as de,S as ve}from"./index.b56dbfad.js";import{P as fe}from"./index.fe471a10.js";import{u as ge}from"./use-touch.d1be10ec.js";import{I as he}from"./index.4ed5a52c.js";import{L as we}from"./index.f8de354f.js";import{A as F,H as _,D as z,y as b,e as r,x as pe,N as Pe,q as Ie,Q as xe,B as j}from"./vue-libs.df86f395.js";const B=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),O=E("image-preview")[1];var ye=F({props:{src:String,show:Boolean,active:Number,minZoom:Y(k),maxZoom:Y(k),rootWidth:Y(Number),rootHeight:Y(Number)},emits:["scale","close"],setup(e,{emit:c}){const o=_({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),l=ge(),i=z(()=>{const{rootWidth:t,rootHeight:n}=e,s=n/t;return o.imageRatio>s}),y=z(()=>{const{scale:t,moveX:n,moveY:s,moving:u,zooming:I}=o,X={transitionDuration:I||u?"0s":".3s"};if(t!==1){const K=n/t,Q=s/t;X.transform=`scale(${t}, ${t}) translate(${K}px, ${Q}px)`}return X}),g=z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:n}=e,s=i.value?n/o.imageRatio:t;return Math.max(0,(o.scale*s-t)/2)}return 0}),d=z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:n}=e,s=i.value?n:t*o.imageRatio;return Math.max(0,(o.scale*s-n)/2)}return 0}),h=t=>{t=T(t,+e.minZoom,+e.maxZoom+1),t!==o.scale&&(o.scale=t,c("scale",{scale:t,index:e.active}))},v=()=>{h(1),o.moveX=0,o.moveY=0},R=()=>{const t=o.scale>1?1:2;h(t),o.moveX=0,o.moveY=0};let w,p,P,S,C,a,m;const f=t=>{const{touches:n}=t,{offsetX:s}=l;l.start(t),w=n.length,p=o.moveX,P=o.moveY,m=Date.now(),o.moving=w===1&&o.scale!==1,o.zooming=w===2&&!s.value,o.zooming&&(S=o.scale,C=B(t.touches))},q=t=>{const{touches:n}=t;if(l.move(t),(o.moving||o.zooming)&&M(t,!0),o.moving){const{deltaX:s,deltaY:u}=l,I=s.value+p,X=u.value+P;o.moveX=T(I,-g.value,g.value),o.moveY=T(X,-d.value,d.value)}if(o.zooming&&n.length===2){const s=B(n),u=S*s/C;h(u)}},V=()=>{if(w>1)return;const{offsetX:t,offsetY:n}=l,s=Date.now()-m,u=250,I=5;t.value<I&&n.value<I&&s<u&&(a?(clearTimeout(a),a=null,R()):a=setTimeout(()=>{c("close"),a=null},u))},D=t=>{let n=!1;(o.moving||o.zooming)&&(n=!0,o.moving&&p===o.moveX&&P===o.moveY&&(n=!1),t.touches.length||(o.zooming&&(o.moveX=T(o.moveX,-g.value,g.value),o.moveY=T(o.moveY,-d.value,d.value),o.zooming=!1),o.moving=!1,p=0,P=0,S=1,o.scale<1&&v(),o.scale>e.maxZoom&&(o.scale=+e.maxZoom))),M(t,n),V(),l.reset()},U=t=>{const{naturalWidth:n,naturalHeight:s}=t.target;o.imageRatio=s/n};return b(()=>e.active,v),b(()=>e.show,t=>{t||v()}),()=>{const t={loading:()=>r(we,{type:"spinner"},null)};return r(de,{class:O("swipe-item"),onTouchstart:f,onTouchmove:q,onTouchend:D,onTouchcancel:D},{default:()=>[r(he,{src:e.src,fit:"contain",class:O("image",{vertical:i.value}),style:y.value,onLoad:U},t)]})}}});function Se(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xe(e)}const[Ce,x]=E("image-preview"),Te=["show","transition","overlayStyle","closeOnPopstate"],be={show:Boolean,loop:H,images:ne(),minZoom:Z(1/3),maxZoom:Z(3),overlay:H,closeable:Boolean,showIndex:H,className:A,closeIcon:$("clear"),transition:String,beforeClose:Function,overlayClass:A,overlayStyle:Object,swipeDuration:Z(300),startPosition:Z(0),showIndicators:Boolean,closeOnPopstate:H,closeIconPosition:$("top-right")};var L=F({name:Ce,props:be,emits:["scale","close","closed","change","update:show"],setup(e,{emit:c,slots:o}){const l=pe(),i=_({active:0,rootWidth:0,rootHeight:0}),y=()=>{if(l.value){const a=oe(l.value.$el);i.rootWidth=a.width,i.rootHeight=a.height,l.value.resize()}},g=a=>c("scale",a),d=a=>c("update:show",a),h=()=>{re(e.beforeClose,{args:[i.active],done:()=>d(!1)})},v=a=>{a!==i.active&&(i.active=a,c("change",a))},R=()=>{if(e.showIndex)return r("div",{class:x("index")},[o.index?o.index({index:i.active}):`${i.active+1} / ${e.images.length}`])},w=()=>{if(o.cover)return r("div",{class:x("cover")},[o.cover()])},p=()=>{let a;return r(ve,{ref:l,lazyRender:!0,loop:e.loop,class:x("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:v},Se(a=e.images.map(m=>r(ye,{src:m,show:e.show,active:i.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,onScale:g,onClose:h},null)))?a:{default:()=>[a]})},P=()=>{if(e.closeable)return r(ue,{role:"button",name:e.closeIcon,class:[x("close-icon",e.closeIconPosition),le],onClick:h},null)},S=()=>c("closed"),C=(a,m)=>{var f;return(f=l.value)==null?void 0:f.swipeTo(a,m)};return me({swipeTo:C}),Pe(y),b([G,J],y),b(()=>e.startPosition,a=>v(+a)),b(()=>e.show,a=>{const{images:m,startPosition:f}=e;a?(v(+f),Ie(()=>{y(),C(+f,{immediate:!0})})):c("close",{index:i.active,url:m[i.active]})}),()=>r(fe,j({class:[x(),e.className],overlayClass:[x("overlay"),e.overlayClass],onClosed:S,"onUpdate:show":d},ee(e,Te)),{default:()=>[P(),p(),R(),w()]})}});let N;const Xe={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Ye(){({instance:N}=ie({setup(){const{state:e,toggle:c}=ce(),o=()=>{e.images=[]};return()=>r(L,j(e,{onClosed:o,"onUpdate:show":c}),null)}}))}const W=(e,c=0)=>{if(!!te)return N||Ye(),e=Array.isArray(e)?{images:e,startPosition:c}:e,N.open(ae({},Xe,e)),N};W.Component=se(L);W.install=e=>{e.use(W.Component)};export{W as I};
