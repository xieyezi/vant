import{c as y,O as E,l as b,M as w}from"./use-translate.00c0a8db.js";import{c as h,n as A,w as _}from"./with-install.f242061f.js";import{u as $}from"./use-touch.c1d7ebd1.js";import{L}from"./index.3f188a06.js";import{A as M,x as N,H as R,y as B,e as l,q as I}from"./vue-libs.84c45047.js";const[U,r,Y]=y("pull-refresh"),D=50,q=["pulling","loosing","success"],C={disabled:Boolean,modelValue:Boolean,headHeight:h(D),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:A,successDuration:h(500),animationDuration:h(300)};var F=M({name:U,props:C,emits:["refresh","update:modelValue"],setup(a,{emit:f,slots:n}){let u;const m=N(),x=E(m),e=R({status:"normal",distance:0,duration:0}),i=$(),v=()=>{if(a.headHeight!==D)return{height:`${a.headHeight}px`}},d=()=>e.status!=="loading"&&e.status!=="success"&&!a.disabled,H=t=>{const s=+(a.pullDistance||a.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},o=(t,s)=>{const c=+(a.pullDistance||a.headHeight);e.distance=t,s?e.status="loading":t===0?e.status="normal":t<c?e.status="pulling":e.status="loosing"},g=()=>{const{status:t}=e;return t==="normal"?"":a[`${t}Text`]||Y(t)},P=()=>{const{status:t,distance:s}=e;if(n[t])return n[t]({distance:s});const c=[];return q.includes(t)&&c.push(l("div",{class:r("text")},[g()])),t==="loading"&&c.push(l(L,{class:r("loading")},{default:g})),c},p=()=>{e.status="success",setTimeout(()=>{o(0)},+a.successDuration)},T=t=>{u=w(x.value)===0,u&&(e.duration=0,i.start(t))},V=t=>{d()&&T(t)},k=t=>{if(d()){u||T(t);const{deltaY:s}=i;i.move(t),u&&s.value>=0&&i.isVertical()&&(b(t),o(H(s.value)))}},S=()=>{u&&i.deltaY.value&&d()&&(e.duration=+a.animationDuration,e.status==="loosing"?(o(+a.headHeight,!0),f("update:modelValue",!0),I(()=>f("refresh"))):o(0))};return B(()=>a.modelValue,t=>{e.duration=+a.animationDuration,t?o(+a.headHeight,!0):n.success||a.successText?p():o(0,!1)}),()=>{var s;const t={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return l("div",{ref:m,class:r()},[l("div",{class:r("track"),style:t,onTouchstart:V,onTouchmove:k,onTouchend:S,onTouchcancel:S},[l("div",{class:r("head"),style:v()},[P()]),(s=n.default)==null?void 0:s.call(n)])])}}});const J=_(F);export{J as P};
