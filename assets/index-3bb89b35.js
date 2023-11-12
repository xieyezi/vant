import{A as q,y as C,u as B,M as Ie,e as m,Q as X,H as Re,D as x,q as N,J as xe,E as Be,R as Ae,P as Pe,j as $e,v as Oe,n as ze,V as Ne,i as je,B as Le,O as _e}from"./vue-libs-83dbabed.js";import{K as se,L as Q,M as He,N as Ee,c as F,O as Ve,b as Me,w as We,r as De,m as Ze,J as qe,P as Fe,h as ae,i as U,A as Ke,Q as ie,q as oe,u as Je,R as Qe,e as Ue,p as le}from"./use-translate-0400f29b.js";import{u as de}from"./use-id-c5eb2431.js";import{u as Y}from"./use-expose-efcfdee3.js";import{a as Xe,r as Ye}from"./use-route-b1061918.js";import{B as Ge}from"./index-c916422a.js";import{d as K,n as j,m as pe,c as D,t as H,u as et,w as ue}from"./with-install-a78877b5.js";import{S as tt,a as nt}from"./index-d928a42a.js";import{u as at}from"./use-refs-374c0fba.js";import{o as it}from"./on-popup-reopen-bcf43cef.js";import{u as ot,S as lt}from"./index-e72b81d7.js";import{b as rt}from"./constant-ee6e27d7.js";import{c as ct}from"./interceptor-3c3c2616.js";function st(e,o,i){let b,r=0;const a=e.scrollLeft,l=i===0?1:Math.round(i*1e3/16);function s(){se(b)}function c(){e.scrollLeft+=(o-a)/l,++r<l&&(b=Q(c))}return c(),s}function dt(e,o,i,b){let r,a=He(e);const l=a<o,s=i===0?1:Math.round(i*1e3/16),c=(o-a)/s;function g(){se(r)}function S(){a+=c,(l&&a>o||!l&&a<o)&&(a=o),Ee(e,a),l&&a<o||!l&&a>o?r=Q(S):b&&(r=Q(b))}return S(),g}function ut(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!X(e)}const[ft,re]=F("tabs"),bt=q({name:ft,props:{count:K(Number),inited:Boolean,animated:Boolean,duration:K(j),swipeable:Boolean,lazyRender:Boolean,currentIndex:K(Number)},emits:["change"],setup(e,{emit:o,slots:i}){const b=C(),r=s=>o("change",s),a=()=>{var c;const s=(c=i.default)==null?void 0:c.call(i);return e.animated||e.swipeable?m(tt,{ref:b,loop:!1,class:re("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},ut(s)?s:{default:()=>[s]}):s},l=s=>{const c=b.value;c&&c.state.active!==s&&c.swipeTo(s,{immediate:!e.inited})};return B(()=>e.currentIndex,l),Ie(()=>{l(e.currentIndex)}),Y({swipeRef:b}),()=>m("div",{class:re("content",{animated:e.animated||e.swipeable})},[a()])}});function vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!X(e)}const[fe,Z]=F("tabs"),mt={type:pe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:D(0),duration:D(.3),animated:Boolean,ellipsis:H,swipeable:Boolean,scrollspy:Boolean,offsetTop:D(0),background:String,lazyRender:H,showHeader:H,lineWidth:j,lineHeight:j,beforeChange:Function,swipeThreshold:D(5),titleActiveColor:String,titleInactiveColor:String},be=Symbol(fe),ht=q({name:fe,props:mt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:i}){let b,r,a,l,s;const c=C(),g=C(),S=C(),A=C(),P=de(),k=Ve(c),[h,T]=at(),{children:f,linkChildren:E}=Me(be),u=Re({inited:!1,position:"",lineStyle:{},currentIndex:-1}),$=x(()=>f.length>+e.swipeThreshold||!e.ellipsis||e.shrink),G=x(()=>({borderColor:e.color,background:e.background})),O=(t,n)=>t.name??n,L=x(()=>{const t=f[u.currentIndex];if(t)return O(t,u.currentIndex)}),z=x(()=>qe(e.offsetTop)),p=x(()=>e.sticky?z.value+b:0),_=t=>{const n=g.value,d=h.value;if(!$.value||!n||!d||!d[u.currentIndex])return;const y=d[u.currentIndex].$el,v=y.offsetLeft-(n.offsetWidth-y.offsetWidth)/2;l&&l(),l=st(n,v,t?0:+e.duration)},I=()=>{const t=u.inited;N(()=>{const n=h.value;if(!n||!n[u.currentIndex]||e.type!=="line"||Fe(c.value))return;const d=n[u.currentIndex].$el,{lineWidth:y,lineHeight:v}=e,w=d.offsetLeft+d.offsetWidth/2,R={width:ae(y),backgroundColor:e.color,transform:`translateX(${w}px) translateX(-50%)`};if(t&&(R.transitionDuration=`${e.duration}s`),U(v)){const W=ae(v);R.height=W,R.borderRadius=W}u.lineStyle=R})},me=t=>{const n=t<u.currentIndex?-1:1;for(;t>=0&&t<f.length;){if(!f[t].disabled)return t;t+=n}},V=(t,n)=>{const d=me(t);if(!U(d))return;const y=f[d],v=O(y,d),w=u.currentIndex!==null;u.currentIndex!==d&&(u.currentIndex=d,n||_(),I()),v!==e.active&&(o("update:active",v),w&&o("change",v,y.title)),a&&!e.scrollspy&&Ke(Math.ceil(ie(c.value)-z.value))},M=(t,n)=>{const d=f.find((v,w)=>O(v,w)===t),y=d?f.indexOf(d):0;V(y,n)},ee=(t=!1)=>{if(e.scrollspy){const n=f[u.currentIndex].$el;if(n&&k.value){const d=ie(n,k.value)-p.value;r=!0,s&&s(),s=dt(k.value,d,t?0:+e.duration,()=>{r=!1})}}},he=(t,n,d)=>{const{title:y,disabled:v}=f[n],w=O(f[n],n);v||(ct(e.beforeChange,{args:[w],done:()=>{V(n),ee()}}),Xe(t)),o("clickTab",{name:w,title:y,event:d,disabled:v})},ge=t=>{a=t.isFixed,o("scroll",t)},ye=t=>{N(()=>{M(t),ee(!0)})},Se=()=>{for(let t=0;t<f.length;t++){const{top:n}=oe(f[t].$el);if(n>p.value)return t===0?0:t-1}return f.length-1},Te=()=>{if(e.scrollspy&&!r){const t=Se();V(t)}},we=()=>{if(e.type==="line"&&f.length)return m("div",{class:Z("line"),style:u.lineStyle},null)},te=()=>{var v,w,R;const{type:t,border:n,sticky:d}=e,y=[m("div",{ref:d?void 0:S,class:[Z("wrap"),{[rt]:t==="line"&&n}]},[m("div",{ref:g,role:"tablist",class:Z("nav",[t,{shrink:e.shrink,complete:$.value}]),style:G.value,"aria-orientation":"horizontal"},[(v=i["nav-left"])==null?void 0:v.call(i),f.map(W=>W.renderTitle(he)),we(),(w=i["nav-right"])==null?void 0:w.call(i)])]),(R=i["nav-bottom"])==null?void 0:R.call(i)];return d?m("div",{ref:S},[y]):y},ne=()=>{I(),N(()=>{var t,n;_(!0),(n=(t=A.value)==null?void 0:t.swipeRef.value)==null||n.resize()})};B(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],I),B(We,ne),B(()=>e.active,t=>{t!==L.value&&M(t)}),B(()=>f.length,()=>{u.inited&&(M(e.active),I(),N(()=>{_(!0)}))});const Ce=()=>{M(e.active,!0),N(()=>{u.inited=!0,S.value&&(b=oe(S.value).height),_(!0)})},ke=(t,n)=>o("rendered",t,n);return Y({resize:ne,scrollTo:ye}),xe(I),it(I),De(Ce),ot(c,I),Ze("scroll",Te,{target:k,passive:!0}),E({id:P,props:e,setLine:I,scrollable:$,onRendered:ke,currentName:L,setTitleRefs:T,scrollIntoView:_}),()=>{let t;return m("div",{ref:c,class:Z([e.type])},[e.showHeader?e.sticky?m(lt,{container:c.value,offsetTop:z.value,onScroll:ge},vt(t=te())?t:{default:()=>[t]}):te():null,m(bt,{ref:A,count:f.length,inited:u.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:u.currentIndex,onChange:V},{default:()=>{var n;return[(n=i.default)==null?void 0:n.call(i)]}})])}}}),ve=Symbol(),Et=()=>Be(ve,null);function gt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!X(e)}const[yt,ce]=F("tab"),St=q({name:yt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:j,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:H},setup(e,{slots:o}){const i=x(()=>{const r={},{type:a,color:l,disabled:s,isActive:c,activeColor:g,inactiveColor:S}=e;l&&a==="card"&&(r.borderColor=l,s||(c?r.backgroundColor=l:r.color=l));const P=c?g:S;return P&&(r.color=P),r}),b=()=>{const r=m("span",{class:ce("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||U(e.badge)&&e.badge!==""?m(Ge,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},gt(r)?r:{default:()=>[r]}):r};return()=>m("div",{id:e.id,role:"tab",class:[ce([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[b()])}}),[Tt,J]=F("tab"),wt=Ue({},Ye,{dot:Boolean,name:j,badge:j,title:String,disabled:Boolean,titleClass:et,titleStyle:[String,Object],showZeroBadge:H}),Ct=q({name:Tt,props:wt,setup(e,{slots:o}){const i=de(),b=C(!1),r=_e(),{parent:a,index:l}=Je(be);if(!a)return;const s=()=>e.name??l.value,c=()=>{b.value=!0,a.props.lazyRender&&N(()=>{a.onRendered(s(),e.title)})},g=x(()=>{const h=s()===a.currentName.value;return h&&!b.value&&c(),h}),S=C(""),A=C("");Ae(()=>{const{titleClass:h,titleStyle:T}=e;S.value=h?ze(h):"",A.value=T&&typeof T!="string"?Ne(je(T)):T});const P=h=>m(St,Le({key:i,id:`${a.id}-${l.value}`,ref:a.setTitleRefs(l.value),style:A.value,class:S.value,isActive:g.value,controls:i,scrollable:a.scrollable.value,activeColor:a.props.titleActiveColor,inactiveColor:a.props.titleInactiveColor,onClick:T=>h(r.proxy,l.value,T)},le(a.props,["type","color","shrink"]),le(e,["dot","badge","title","disabled","showZeroBadge"])),{title:o.title}),k=C(!g.value);return B(g,h=>{h?k.value=!1:Qe(()=>{k.value=!0})}),B(()=>e.title,()=>{a.setLine(),a.scrollIntoView()}),Pe(ve,g),Y({id:i,renderTitle:P}),()=>{var L;const h=`${a.id}-${l.value}`,{animated:T,swipeable:f,scrollspy:E,lazyRender:u}=a.props;if(!o.default&&!T)return;const $=E||g.value;if(T||f)return m(nt,{id:i,role:"tabpanel",class:J("panel-wrapper",{inactive:k.value}),tabindex:g.value?0:-1,"aria-hidden":!g.value,"aria-labelledby":h},{default:()=>{var z;return[m("div",{class:J("panel")},[(z=o.default)==null?void 0:z.call(o)])]}});const O=b.value||E||!u?(L=o.default)==null?void 0:L.call(o):null;return $e(m("div",{id:i,role:"tabpanel",class:J("panel"),tabindex:$?0:-1,"aria-labelledby":h},[O]),[[Oe,$]])}}}),kt=ue(Ct),Vt=kt,It=ue(ht),Mt=It;export{It as T,Vt as V,kt as a,Mt as b,Et as u};
