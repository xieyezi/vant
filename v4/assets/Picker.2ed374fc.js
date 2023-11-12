import{e as J,i as ae,F,c as Q,u as le,l as W,b as ie,G as ce,H as L}from"./use-translate.c56bc05e.js";import{n as I,d as M,b as R,m as ue,c as _,t as se}from"./with-install.2d06a5b3.js";import{H as K,a as re}from"./constant.80c6de18.js";import{u as X}from"./use-expose.2dad0d8e.js";import{L as me}from"./index.1fe53b6c.js";import{u as de}from"./use-touch.196fce0c.js";import{A as Z,x as N,S as fe,e as f,D as y,y as A}from"./vue-libs.a3cd7f61.js";const ee=e=>e.find(a=>!a.disabled)||e[0];function ve(e,a){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(a.children in n)return"cascade"}return"default"}function U(e,a){a=F(a,0,e.length);for(let n=a;n<e.length;n++)if(!e[n].disabled)return n;for(let n=a-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const j=(e,a,n)=>a!==void 0&&!!e.find(l=>l[n.value]===a);function Y(e,a,n){const l=e.findIndex(v=>v[n.value]===a),m=U(e,l);return e[m]}function he(e,a,n){const l=[];let m={[a.children]:e},v=0;for(;m&&m[a.children];){const s=m[a.children],d=n.value[v];if(m=ae(d)?Y(s,d,a):void 0,!m&&s.length){const O=ee(s)[a.value];m=Y(s,O,a)}v++,l.push(s)}return l}function ge(e){const{transform:a}=window.getComputedStyle(e),n=a.slice(7,a.length-1).split(", ")[5];return Number(n)}function be(e){return J({text:"text",value:"value",children:"children"},e)}const q=200,z=300,Oe=15,[te,$]=Q("picker-column"),ne=Symbol(te),Te=Z({name:te,props:{value:I,fields:M(Object),options:R(),readonly:Boolean,allowHtml:Boolean,optionHeight:M(Number),swipeDuration:M(I),visibleOptionNum:M(I)},emits:["change","clickOption"],setup(e,{emit:a,slots:n}){let l,m,v,s,d;const O=N(),r=N(0),g=N(0),h=de(),T=()=>e.options.length,k=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,x=i=>{const c=U(e.options,i),t=-c*e.optionHeight,o=()=>{const u=e.options[c][e.fields.value];u!==e.value&&a("change",u)};l&&t!==r.value?d=o:o(),r.value=t},w=i=>{l||e.readonly||(d=null,g.value=q,x(i),a("clickOption",e.options[i]))},p=i=>F(Math.round(-i/e.optionHeight),0,T()-1),P=(i,c)=>{const t=Math.abs(i/c);i=r.value+t/.003*(i<0?-1:1);const o=p(i);g.value=+e.swipeDuration,x(o)},E=()=>{l=!1,g.value=0,d&&(d(),d=null)},V=i=>{if(!e.readonly){if(h.start(i),l){const c=ge(O.value);r.value=Math.min(0,c-k())}g.value=0,m=r.value,v=Date.now(),s=m,d=null}},H=i=>{if(e.readonly)return;h.move(i),h.isVertical()&&(l=!0,W(i,!0)),r.value=F(m+h.deltaY.value,-(T()*e.optionHeight),e.optionHeight);const c=Date.now();c-v>z&&(v=c,s=r.value)},S=()=>{if(e.readonly)return;const i=r.value-s,c=Date.now()-v;if(c<z&&Math.abs(i)>Oe){P(i,c);return}const o=p(r.value);g.value=q,x(o),setTimeout(()=>{l=!1},0)},B=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((c,t)=>{const o=c[e.fields.text],{disabled:u}=c,D=c[e.fields.value],C={role:"button",style:i,tabindex:u?-1:0,class:[$("item",{disabled:u,selected:D===e.value}),c.className],onClick:()=>w(t)},oe={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:o};return f("li",C,[n.option?n.option(c):f("div",oe,null)])})};return le(ne),X({stopMomentum:E}),fe(()=>{const i=e.options.findIndex(o=>o[e.fields.value]===e.value),t=-U(e.options,i)*e.optionHeight;r.value=t}),()=>f("div",{class:$(),onTouchstart:V,onTouchmove:H,onTouchend:S,onTouchcancel:S},[f("ul",{ref:O,style:{transform:`translate3d(0, ${r.value+k()}px, 0)`,transitionDuration:`${g.value}ms`,transitionProperty:g.value?"all":"none"},class:$("wrapper"),onTransitionend:E},[B()])])}}),[ye,b,G]=Q("picker"),xe={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:_(44),showToolbar:se,swipeDuration:_(1e3),visibleOptionNum:_(6),cancelButtonText:String,confirmButtonText:String},Ce=J({},xe,{columns:R(),modelValue:R(),toolbarPosition:ue("top"),columnsFieldNames:Object}),Me=Z({name:ye,props:Ce,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:a,slots:n}){const l=N(e.modelValue),{children:m,linkChildren:v}=ie(ne);v();const s=y(()=>be(e.columnsFieldNames)),d=y(()=>ce(e.optionHeight)),O=y(()=>ve(e.columns,s.value)),r=y(()=>{const{columns:t}=e;switch(O.value){case"multiple":return t;case"cascade":return he(t,s.value,l);default:return[t]}}),g=y(()=>r.value.some(t=>t.length)),h=y(()=>r.value.map((t,o)=>Y(t,l.value[o],s.value))),T=(t,o)=>{if(l.value[t]!==o){const u=l.value.slice(0);u[t]=o,l.value=u}},k=(t,o)=>{T(o,t),O.value==="cascade"&&l.value.forEach((u,D)=>{const C=r.value[D];j(C,u,s.value)||T(D,C.length?C[0][s.value.value]:void 0)}),a("change",{columnIndex:o,selectedValues:l.value,selectedOptions:h.value})},x=(t,o)=>a("clickOption",{columnIndex:o,currentOption:t,selectedValues:l.value,selectedOptions:h.value}),w=()=>{m.forEach(t=>t.stopMomentum()),a("confirm",{selectedValues:l.value,selectedOptions:h.value})},p=()=>a("cancel",{selectedValues:l.value,selectedOptions:h.value}),P=()=>{if(n.title)return n.title();if(e.title)return f("div",{class:[b("title"),"van-ellipsis"]},[e.title])},E=()=>{const t=e.cancelButtonText||G("cancel");return f("button",{type:"button",class:[b("cancel"),K],onClick:p},[n.cancel?n.cancel():t])},V=()=>{const t=e.confirmButtonText||G("confirm");return f("button",{type:"button",class:[b("confirm"),K],onClick:w},[n.confirm?n.confirm():t])},H=()=>{if(e.showToolbar)return f("div",{class:b("toolbar")},[n.toolbar?n.toolbar():[E(),P(),V()]])},S=()=>r.value.map((t,o)=>f(Te,{value:l.value[o],fields:s.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:d.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:u=>k(u,o),onClickOption:u=>x(u,o)},{option:n.option})),B=t=>{if(g.value){const o={height:`${d.value}px`},u={backgroundSize:`100% ${(t-d.value)/2}px`};return[f("div",{class:b("mask"),style:u},null),f("div",{class:[re,b("frame")],style:o},null)]}},i=()=>{const t=d.value*+e.visibleOptionNum,o={height:`${t}px`};return f("div",{class:b("columns"),style:o,onTouchmove:W},[S(),B(t)])};return A(r,t=>{t.forEach((o,u)=>{o.length&&!j(o,l.value[u],s.value)&&T(u,ee(o)[s.value.value])})},{immediate:!0}),A(()=>e.modelValue,t=>{L(t,l.value)||(l.value=t)},{deep:!0}),A(l,t=>{L(t,e.modelValue)||a("update:modelValue",t)},{immediate:!0}),X({confirm:w,getSelectedOptions:()=>h.value}),()=>{var t,o;return f("div",{class:b()},[e.toolbarPosition==="top"?H():null,e.loading?f(me,{class:b("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),i(),(o=n["columns-bottom"])==null?void 0:o.call(n),e.toolbarPosition==="bottom"?H():null])}}});export{Me as _,xe as p};
