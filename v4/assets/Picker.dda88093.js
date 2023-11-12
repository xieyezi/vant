import{e as J,F,i as oe,c as Q,u as le,l as W,b as ie,G as ce,H as L}from"./use-translate.8036e41d.js";import{n as I,d as M,b as R,m as ue,c as _,t as se}from"./with-install.6887218d.js";import{H as K,a as re}from"./constant.80c6de18.js";import{u as X}from"./use-expose.1f17c8d6.js";import{L as me}from"./index.e68b0dfb.js";import{u as de}from"./use-touch.ee9512d6.js";import{A as Z,x as N,R as fe,e as f,D as y,y as A}from"./vue-libs.a040eeb8.js";const ee=e=>e.find(o=>!o.disabled)||e[0];function ve(e,o){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(o.children in n)return"cascade"}return"default"}function U(e,o){o=F(o,0,e.length);for(let n=o;n<e.length;n++)if(!e[n].disabled)return n;for(let n=o-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const j=(e,o,n)=>o!==void 0&&!!e.find(l=>l[n.value]===o);function Y(e,o,n){const l=e.findIndex(v=>v[n.value]===o),m=U(e,l);return e[m]}function he(e,o,n){const l=[];let m={[o.children]:e},v=0;for(;m&&m[o.children];){const s=m[o.children],d=n.value[v];if(m=oe(d)?Y(s,d,o):void 0,!m&&s.length){const O=ee(s)[o.value];m=Y(s,O,o)}v++,l.push(s)}return l}function ge(e){const{transform:o}=window.getComputedStyle(e),n=o.slice(7,o.length-1).split(", ")[5];return Number(n)}function be(e){return J({text:"text",value:"value",children:"children"},e)}const q=200,z=300,Oe=15,[te,$]=Q("picker-column"),ne=Symbol(te),Te=Z({name:te,props:{value:I,fields:M(Object),options:R(),readonly:Boolean,allowHtml:Boolean,optionHeight:M(Number),swipeDuration:M(I),visibleOptionNum:M(I)},emits:["change","clickOption"],setup(e,{emit:o,slots:n}){let l,m,v,s,d;const O=N(),r=N(0),g=N(0),h=de(),T=()=>e.options.length,k=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,x=i=>{const c=U(e.options,i),t=-c*e.optionHeight,a=()=>{const u=e.options[c][e.fields.value];u!==e.value&&o("change",u)};l&&t!==r.value?d=a:a(),r.value=t},w=i=>{l||e.readonly||(d=null,g.value=q,x(i),o("clickOption",e.options[i]))},p=i=>F(Math.round(-i/e.optionHeight),0,T()-1),P=(i,c)=>{const t=Math.abs(i/c);i=r.value+t/.003*(i<0?-1:1);const a=p(i);g.value=+e.swipeDuration,x(a)},E=()=>{l=!1,g.value=0,d&&(d(),d=null)},V=i=>{if(!e.readonly){if(h.start(i),l){const c=ge(O.value);r.value=Math.min(0,c-k())}g.value=0,m=r.value,v=Date.now(),s=m,d=null}},H=i=>{if(e.readonly)return;h.move(i),h.isVertical()&&(l=!0,W(i,!0)),r.value=F(m+h.deltaY.value,-(T()*e.optionHeight),e.optionHeight);const c=Date.now();c-v>z&&(v=c,s=r.value)},D=()=>{if(e.readonly)return;const i=r.value-s,c=Date.now()-v;if(c<z&&Math.abs(i)>Oe){P(i,c);return}const a=p(r.value);g.value=q,x(a),setTimeout(()=>{l=!1},0)},B=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((c,t)=>{const a=c[e.fields.text],{disabled:u}=c,S=c[e.fields.value],C={role:"button",style:i,tabindex:u?-1:0,class:[$("item",{disabled:u,selected:S===e.value}),c.className],onClick:()=>w(t)},ae={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:a};return f("li",C,[n.option?n.option(c):f("div",ae,null)])})};return le(ne),X({stopMomentum:E}),fe(()=>{const i=e.options.findIndex(a=>a[e.fields.value]===e.value),t=-U(e.options,i)*e.optionHeight;r.value=t}),()=>f("div",{class:$(),onTouchstartPassive:V,onTouchmove:H,onTouchend:D,onTouchcancel:D},[f("ul",{ref:O,style:{transform:`translate3d(0, ${r.value+k()}px, 0)`,transitionDuration:`${g.value}ms`,transitionProperty:g.value?"all":"none"},class:$("wrapper"),onTransitionend:E},[B()])])}}),[ye,b,G]=Q("picker"),xe={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:_(44),showToolbar:se,swipeDuration:_(1e3),visibleOptionNum:_(6),cancelButtonText:String,confirmButtonText:String},Ce=J({},xe,{columns:R(),modelValue:R(),toolbarPosition:ue("top"),columnsFieldNames:Object}),Me=Z({name:ye,props:Ce,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const l=N(e.modelValue),{children:m,linkChildren:v}=ie(ne);v();const s=y(()=>be(e.columnsFieldNames)),d=y(()=>ce(e.optionHeight)),O=y(()=>ve(e.columns,s.value)),r=y(()=>{const{columns:t}=e;switch(O.value){case"multiple":return t;case"cascade":return he(t,s.value,l);default:return[t]}}),g=y(()=>r.value.some(t=>t.length)),h=y(()=>r.value.map((t,a)=>Y(t,l.value[a],s.value))),T=(t,a)=>{if(l.value[t]!==a){const u=l.value.slice(0);u[t]=a,l.value=u}},k=(t,a)=>{T(a,t),O.value==="cascade"&&l.value.forEach((u,S)=>{const C=r.value[S];j(C,u,s.value)||T(S,C.length?C[0][s.value.value]:void 0)}),o("change",{columnIndex:a,selectedValues:l.value,selectedOptions:h.value})},x=(t,a)=>o("clickOption",{columnIndex:a,currentOption:t,selectedValues:l.value,selectedOptions:h.value}),w=()=>{m.forEach(t=>t.stopMomentum()),o("confirm",{selectedValues:l.value,selectedOptions:h.value})},p=()=>o("cancel",{selectedValues:l.value,selectedOptions:h.value}),P=()=>{if(n.title)return n.title();if(e.title)return f("div",{class:[b("title"),"van-ellipsis"]},[e.title])},E=()=>{const t=e.cancelButtonText||G("cancel");return f("button",{type:"button",class:[b("cancel"),K],onClick:p},[n.cancel?n.cancel():t])},V=()=>{const t=e.confirmButtonText||G("confirm");return f("button",{type:"button",class:[b("confirm"),K],onClick:w},[n.confirm?n.confirm():t])},H=()=>{if(e.showToolbar)return f("div",{class:b("toolbar")},[n.toolbar?n.toolbar():[E(),P(),V()]])},D=()=>r.value.map((t,a)=>f(Te,{value:l.value[a],fields:s.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:d.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:u=>k(u,a),onClickOption:u=>x(u,a)},{option:n.option})),B=t=>{if(g.value){const a={height:`${d.value}px`},u={backgroundSize:`100% ${(t-d.value)/2}px`};return[f("div",{class:b("mask"),style:u},null),f("div",{class:[re,b("frame")],style:a},null)]}},i=()=>{const t=d.value*+e.visibleOptionNum,a={height:`${t}px`};return f("div",{class:b("columns"),style:a,onTouchmove:W},[D(),B(t)])};return A(r,t=>{t.forEach((a,u)=>{a.length&&!j(a,l.value[u],s.value)&&T(u,ee(a)[s.value.value])})},{immediate:!0}),A(()=>e.modelValue,t=>{L(t,l.value)||(l.value=t)},{deep:!0}),A(l,t=>{L(t,e.modelValue)||o("update:modelValue",t)},{immediate:!0}),X({confirm:w,getSelectedOptions:()=>h.value}),()=>{var t,a;return f("div",{class:b()},[e.toolbarPosition==="top"?H():null,e.loading?f(me,{class:b("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),i(),(a=n["columns-bottom"])==null?void 0:a.call(n),e.toolbarPosition==="bottom"?H():null])}}});export{Me as _,xe as p};
