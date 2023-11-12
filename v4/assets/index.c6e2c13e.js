import{c as q,b as ue,P as re,S as ve,T as fe,n as he,Q as L,U as M,l as de,F as O,u as me}from"./use-translate.8036e41d.js";import{t as $,n as W,c as R,w as F}from"./with-install.6887218d.js";import{u as ge}from"./use-touch.ee9512d6.js";import{u as J}from"./use-expose.1f17c8d6.js";import{o as we}from"./on-popup-reopen.2164636b.js";import{A as K,x as U,H as Q,D as f,y as P,N as j,L as pe,M as ye,J as Se,e as C,q as G}from"./vue-libs.a040eeb8.js";const[Z,z]=q("swipe"),be={loop:$,width:W,height:W,vertical:Boolean,autoplay:R(0),duration:R(500),touchable:$,lazyRender:Boolean,initialSwipe:R(0),indicatorColor:String,showIndicators:$,stopPropagation:$},ee=Symbol(Z),Te=K({name:Z,props:be,emits:["change"],setup(a,{emit:y,slots:d}){const u=U(),h=U(),e=Q({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),r=ge(),{children:m,linkChildren:k}=ue(ee),i=f(()=>m.length),c=f(()=>e[a.vertical?"height":"width"]),s=f(()=>a.vertical?r.deltaY.value:r.deltaX.value),g=f(()=>e.rect?(a.vertical?e.rect.height:e.rect.width)-c.value*i.value:0),D=f(()=>Math.ceil(Math.abs(g.value)/c.value)),S=f(()=>i.value*c.value),A=f(()=>(e.active+i.value)%i.value),B=f(()=>{const t=a.vertical?"vertical":"horizontal";return r.direction.value===t}),te=f(()=>{const t={transitionDuration:`${e.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${e.offset}px)`};if(c.value){const o=a.vertical?"height":"width",n=a.vertical?"width":"height";t[o]=`${S.value}px`,t[n]=a[n]?`${a[n]}px`:""}return t}),ae=t=>{const{active:o}=e;return t?a.loop?O(o+t,-1,i.value):O(o+t,0,D.value):o},V=(t,o=0)=>{let n=t*c.value;a.loop||(n=Math.min(n,-g.value));let v=o-n;return a.loop||(v=O(v,g.value,0)),v},w=({pace:t=0,offset:o=0,emitChange:n})=>{if(i.value<=1)return;const{active:v}=e,l=ae(t),x=V(l,o);if(a.loop){if(m[0]&&x!==g.value){const E=x<g.value;m[0].setOffset(E?S.value:0)}if(m[i.value-1]&&x!==0){const E=x>0;m[i.value-1].setOffset(E?-S.value:0)}}e.active=l,e.offset=x,n&&l!==v&&y("change",A.value)},I=()=>{e.swiping=!0,e.active<=-1?w({pace:i.value}):e.active>=i.value&&w({pace:-i.value})},ie=()=>{I(),r.reset(),M(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},Y=()=>{I(),r.reset(),M(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let H;const b=()=>clearTimeout(H),T=()=>{b(),a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{Y(),T()},+a.autoplay))},p=(t=+a.initialSwipe)=>{if(!u.value)return;const o=()=>{var n,v;if(!L(u)){const l={width:u.value.offsetWidth,height:u.value.offsetHeight};e.rect=l,e.width=+((n=a.width)!=null?n:l.width),e.height=+((v=a.height)!=null?v:l.height)}i.value&&(t=Math.min(i.value-1,t)),e.active=t,e.swiping=!0,e.offset=V(t),m.forEach(l=>{l.setOffset(0)}),T()};L(u)?G().then(o):o()},N=()=>p(e.active);let X;const ne=t=>{!a.touchable||(r.start(t),X=Date.now(),b(),I())},oe=t=>{a.touchable&&e.swiping&&(r.move(t),B.value&&(!a.loop&&(e.active===0&&s.value>0||e.active===i.value-1&&s.value<0)||(de(t,a.stopPropagation),w({offset:s.value}))))},_=()=>{if(!a.touchable||!e.swiping)return;const t=Date.now()-X,o=s.value/t;if((Math.abs(o)>.25||Math.abs(s.value)>c.value/2)&&B.value){const v=a.vertical?r.offsetY.value:r.offsetX.value;let l=0;a.loop?l=v>0?s.value>0?-1:1:0:l=-Math[s.value>0?"ceil":"floor"](s.value/c.value),w({pace:l,emitChange:!0})}else s.value&&w({pace:0});e.swiping=!1,T()},se=(t,o={})=>{I(),r.reset(),M(()=>{let n;a.loop&&t===i.value?n=e.active===0?0:t:n=t%i.value,o.immediate?M(()=>{e.swiping=!1}):e.swiping=!1,w({pace:n-e.active,emitChange:!0})})},ce=(t,o)=>{const n=o===A.value,v=n?{backgroundColor:a.indicatorColor}:void 0;return C("i",{style:v,class:z("indicator",{active:n})},null)},le=()=>{if(d.indicator)return d.indicator({active:A.value,total:i.value});if(a.showIndicators&&i.value>1)return C("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return J({prev:ie,next:Y,state:e,resize:N,swipeTo:se}),k({size:c,props:a,count:i,activeIndicator:A}),P(()=>a.initialSwipe,t=>p(+t)),P(i,()=>p(e.active)),P(()=>a.autoplay,T),P([re,ve],N),P(fe(),t=>{t==="visible"?T():b()}),j(p),pe(()=>p(e.active)),we(()=>p(e.active)),ye(b),Se(b),he("touchmove",oe,{target:h}),()=>{var t;return C("div",{ref:u,class:z()},[C("div",{ref:h,style:te.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:ne,onTouchend:_,onTouchcancel:_},[(t=d.default)==null?void 0:t.call(d)]),le()])}}}),xe=F(Te),Oe=xe,[Pe,Ce]=q("swipe-item"),Ae=K({name:Pe,setup(a,{slots:y}){let d;const u=Q({offset:0,inited:!1,mounted:!1}),{parent:h,index:e}=me(ee);if(!h)return;const r=f(()=>{const i={},{vertical:c}=h.props;return h.size.value&&(i[c?"height":"width"]=`${h.size.value}px`),u.offset&&(i.transform=`translate${c?"Y":"X"}(${u.offset}px)`),i}),m=f(()=>{const{loop:i,lazyRender:c}=h.props;if(!c||d)return!0;if(!u.mounted)return!1;const s=h.activeIndicator.value,g=h.count.value-1,D=s===0&&i?g:s-1,S=s===g&&i?0:s+1;return d=e.value===s||e.value===D||e.value===S,d}),k=i=>{u.offset=i};return j(()=>{G(()=>{u.mounted=!0})}),J({setOffset:k}),()=>{var i;return C("div",{class:Ce(),style:r.value},[m.value?(i=y.default)==null?void 0:i.call(y):null])}}}),Ie=F(Ae),Re=Ie;export{xe as S,Oe as V,Ie as a,Re as b};
