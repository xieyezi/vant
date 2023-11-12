import{c as E,h as u,i as $,d as b}from"./use-translate.c7ada534.js";import{n as d,t as L,m as P,w as D}from"./with-install.fe59c8e0.js";import{I as V}from"./index.6d509bfd.js";import{A as j,x as f,P as k,D as C,y as N,J as R,e as a,j as U,V as q,B as z,q as A}from"./vue-libs.34a885a4.js";const[F,o]=E("image"),J={src:String,alt:String,fit:String,position:String,round:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")},T=j({name:F,props:J,emits:["load","error"],setup(e,{emit:g,slots:n}){const i=f(!1),t=f(!0),c=f(),{$Lazyload:s}=k().proxy,S=C(()=>{const r={width:u(e.width),height:u(e.height)};return $(e.radius)&&(r.overflow="hidden",r.borderRadius=u(e.radius)),r});N(()=>e.src,()=>{i.value=!1,t.value=!0});const m=r=>{t.value=!1,g("load",r)},h=r=>{i.value=!0,t.value=!1,g("error",r)},v=(r,l,y)=>y?y():a(V,{name:r,size:e.iconSize,class:l,classPrefix:e.iconPrefix},null),x=()=>{if(t.value&&e.showLoading)return a("div",{class:o("loading")},[v(e.loadingIcon,o("loading-icon"),n.loading)]);if(i.value&&e.showError)return a("div",{class:o("error")},[v(e.errorIcon,o("error-icon"),n.error)])},B=()=>{if(i.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?U(a("img",z({ref:c},r),null),[[q("lazy"),e.src]]):a("img",z({src:e.src,onLoad:m,onError:h},r),null)},I=({el:r})=>{const l=()=>{r===c.value&&t.value&&m()};c.value?l():A(l)},w=({el:r})=>{r===c.value&&!i.value&&h()};return s&&b&&(s.$on("loaded",I),s.$on("error",w),R(()=>{s.$off("loaded",I),s.$off("error",w)})),()=>{var r;return a("div",{class:o({round:e.round}),style:S.value},[B(),x(),(r=n.default)==null?void 0:r.call(n)])}}}),_=D(T),O=_;export{_ as I,O as V};
