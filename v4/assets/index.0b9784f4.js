import{c as E,a as V}from"./use-translate.8036e41d.js";import{m as h,c as A,t as D,w as I}from"./with-install.6887218d.js";import{I as N}from"./index.bbaa83e9.js";import{B as P}from"./index.378beb57.js";import{u as w}from"./use-placeholder.140553e7.js";import{A as y,x as L,e as t,r as U,o as z,a as $,w as l,C as e,h as C,t as x,d as j,F as q}from"./vue-libs.a040eeb8.js";import{V as G}from"./index.c374eccf.js";import{s as v}from"./index.0fce17eb.js";import"./constant.80c6de18.js";import"./use-route.f2a7e4c6.js";import"./index.e68b0dfb.js";import"./use-height.ee864f3a.js";import"./on-popup-reopen.2164636b.js";import"./use-expose.1f17c8d6.js";import"./Checker.2cbf1fb0.js";import"./index.04b3d3c6.js";import"./interceptor.66b82326.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./index.90d1b68e.js";import"./mount-component.5abe2a8c.js";const[H,a,J]=E("submit-bar"),K={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:h("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:h("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:A(2),safeAreaInsetBottom:D},M=y({name:H,props:K,emits:["submit"],setup(u,{emit:i,slots:n}){const r=L(),b=w(r,a),k=()=>{const{price:o,label:c,currency:p,textAlign:F,suffixLabel:B,decimalLength:_}=u;if(typeof o=="number"){const S=(o/100).toFixed(+_).split("."),T=_?`.${S[1]}`:"";return t("div",{class:a("text"),style:{textAlign:F}},[t("span",null,[c||J("label")]),t("span",{class:a("price")},[p,t("span",{class:a("price-integer")},[S[0]]),T]),B&&t("span",{class:a("suffix-label")},[B])])}},m=()=>{var p;const{tip:o,tipIcon:c}=u;if(n.tip||o)return t("div",{class:a("tip")},[c&&t(N,{class:a("tip-icon"),name:c},null),o&&t("span",{class:a("tip-text")},[o]),(p=n.tip)==null?void 0:p.call(n)])},s=()=>i("submit"),f=()=>n.button?n.button():t(P,{round:!0,type:u.buttonType,text:u.buttonText,class:a("button",u.buttonType),color:u.buttonColor,loading:u.loading,disabled:u.disabled,onClick:s},null),g=()=>{var o,c;return t("div",{ref:r,class:[a(),{"van-safe-area-bottom":u.safeAreaInsetBottom}]},[(o=n.top)==null?void 0:o.call(n),m(),t("div",{class:a("bar")},[(c=n.default)==null?void 0:c.call(n),k(),f()])])};return()=>u.placeholder?b(g):g()}}),O=I(M),d=O,ft=y({__name:"index",setup(u){const i=V({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=L(!0),r=()=>v(i("clickButton")),b=()=>v(i("clickLink"));return(k,m)=>{const s=U("demo-block");return z(),$(q,null,[t(s,{title:e(i)("basicUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("disabled")},{default:l(()=>[t(e(d),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:r},null,8,["button-text","tip"])]),_:1},8,["title"]),t(s,{title:e(i)("loadingStatus")},{default:l(()=>[t(e(d),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("advancedUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},{tip:l(()=>[C(x(e(i)("tip2"))+" ",1),j("span",{class:"edit-address",onClick:b},x(e(i)("tip3")),1)]),default:l(()=>[t(e(G),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f)},{default:l(()=>[C(x(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{ft as default};
