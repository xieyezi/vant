import{c as ke,Z as Pe,p as Ae,e as Te,a as Re}from"./use-translate.8036e41d.js";import{m as ne,b as De,n as Ie,t as G,u as Le,w as je}from"./with-install.6887218d.js";import{f as Me}from"./constant.80c6de18.js";import{I as Fe}from"./index.bbaa83e9.js";import{P as Be,V as Ne}from"./index.04b3d3c6.js";import{A as he,x as V,N as Ve,R as _e,J as qe,y as We,e as d,B as Ue,F as re,q as Xe,r as Ye,o as ce,a as ue,w as b,C as l,h as Y,t as $,d as we,b as $e}from"./vue-libs.a040eeb8.js";import{V as H}from"./index.378beb57.js";import{V as He}from"./index.c085a946.js";import{V as ze}from"./index.8f7dbc5a.js";import{V as Ge,a as Je}from"./index.0a2a62ef.js";import{s as Ze}from"./index.0fce17eb.js";import"./interceptor.66b82326.js";import"./use-expose.1f17c8d6.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.90d1b68e.js";import"./use-route.f2a7e4c6.js";import"./index.e68b0dfb.js";import"./index.e17d8230.js";import"./use-id.3079e917.js";import"./Picker.dda88093.js";import"./mount-component.5abe2a8c.js";function P(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ye(t){var e=P(t).Element;return t instanceof e||t instanceof Element}function k(t){var e=P(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function be(t){if(typeof ShadowRoot>"u")return!1;var e=P(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var q=Math.round;function K(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),n=1,r=1;if(k(t)&&e){var i=t.offsetHeight,u=t.offsetWidth;u>0&&(n=q(o.width)/u||1),i>0&&(r=q(o.height)/i||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function ge(t){var e=P(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function Ke(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qe(t){return t===P(t)||!k(t)?ge(t):Ke(t)}function A(t){return t?(t.nodeName||"").toLowerCase():null}function te(t){return((ye(t)?t.ownerDocument:t.document)||window.document).documentElement}function et(t){return K(te(t)).left+ge(t).scrollLeft}function T(t){return P(t).getComputedStyle(t)}function ie(t){var e=T(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function tt(t){var e=t.getBoundingClientRect(),o=q(e.width)/t.offsetWidth||1,n=q(e.height)/t.offsetHeight||1;return o!==1||n!==1}function ot(t,e,o){o===void 0&&(o=!1);var n=k(e),r=k(e)&&tt(e),i=te(e),u=K(t,r),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((A(e)!=="body"||ie(i))&&(c=Qe(e)),k(e)?(s=K(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=et(i))),{x:u.left+c.scrollLeft-s.x,y:u.top+c.scrollTop-s.y,width:u.width,height:u.height}}function nt(t){var e=K(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function se(t){return A(t)==="html"?t:t.assignedSlot||t.parentNode||(be(t)?t.host:null)||te(t)}function Oe(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:k(t)&&ie(t)?t:Oe(se(t))}function Z(t,e){var o;e===void 0&&(e=[]);var n=Oe(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),i=P(n),u=r?[i].concat(i.visualViewport||[],ie(n)?n:[]):n,c=e.concat(u);return r?c:c.concat(Z(se(u)))}function rt(t){return["table","td","th"].indexOf(A(t))>=0}function le(t){return!k(t)||T(t).position==="fixed"?null:t.offsetParent}function at(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&k(t)){var n=T(t);if(n.position==="fixed")return null}var r=se(t);for(be(r)&&(r=r.host);k(r)&&["html","body"].indexOf(A(r))<0;){var i=T(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function xe(t){for(var e=P(t),o=le(t);o&&rt(o)&&T(o).position==="static";)o=le(o);return o&&(A(o)==="html"||A(o)==="body"&&T(o).position==="static")?e:o||at(t)||e}var _="top",Q="bottom",z="right",M="left",Ee="auto",it=[_,Q,z,M],Se="start",ee="end",st=[].concat(it,[Ee]).reduce(function(t,e){return t.concat([e,e+"-"+Se,e+"-"+ee])},[]),ct="beforeRead",ut="read",lt="afterRead",ft="beforeMain",pt="main",dt="afterMain",vt="beforeWrite",mt="write",ht="afterWrite",ae=[ct,ut,lt,ft,pt,dt,vt,mt,ht];function wt(t){var e=new Map,o=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function r(i){o.add(i.name);var u=[].concat(i.requires||[],i.requiresIfExists||[]);u.forEach(function(c){if(!o.has(c)){var s=e.get(c);s&&r(s)}}),n.push(i)}return t.forEach(function(i){o.has(i.name)||r(i)}),n}function yt(t){var e=wt(t);return ae.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function bt(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function D(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,i){return r.replace(/%s/,i)},t)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',gt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',fe=["name","enabled","phase","fn","effect","requires","options"];function Ot(t){t.forEach(function(e){[].concat(Object.keys(e),fe).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof e.name!="string"&&console.error(D(L,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(D(L,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":ae.indexOf(e.phase)<0&&console.error(D(L,e.name,'"phase"',"either "+ae.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(D(L,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(D(L,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(D(L,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(D(L,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+fe.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(r){return r.name===n})==null&&console.error(D(gt,String(e.name),n,n))})})})}function xt(t,e){var o=new Set;return t.filter(function(n){var r=e(n);if(!o.has(r))return o.add(r),!0})}function oe(t){return t.split("-")[0]}function Et(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function Ce(t){return t.split("-")[1]}function St(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ct(t){var e=t.reference,o=t.element,n=t.placement,r=n?oe(n):null,i=n?Ce(n):null,u=e.x+e.width/2-o.width/2,c=e.y+e.height/2-o.height/2,s;switch(r){case _:s={x:u,y:e.y-o.height};break;case Q:s={x:u,y:e.y+e.height};break;case z:s={x:e.x+e.width,y:c};break;case M:s={x:e.x-o.width,y:c};break;default:s={x:e.x,y:e.y}}var f=r?St(r):null;if(f!=null){var a=f==="y"?"height":"width";switch(i){case Se:s[f]=s[f]-(e[a]/2-o[a]/2);break;case ee:s[f]=s[f]+(e[a]/2-o[a]/2);break}}return s}var pe="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",kt="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",de={placement:"bottom",modifiers:[],strategy:"absolute"};function ve(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Pt(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,i=r===void 0?de:r;return function(c,s,f){f===void 0&&(f=i);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},de,i),modifiersData:{},elements:{reference:c,popper:s},attributes:{},styles:{}},w=[],v=!1,m={state:a,setOptions:function(p){var O=typeof p=="function"?p(a.options):p;x(),a.options=Object.assign({},i,a.options,O),a.scrollParents={reference:ye(c)?Z(c):c.contextElement?Z(c.contextElement):[],popper:Z(s)};var E=yt(Et([].concat(n,a.options.modifiers)));a.orderedModifiers=E.filter(function(C){return C.enabled});{var S=xt([].concat(E,a.options.modifiers),function(C){var B=C.name;return B});if(Ot(S),oe(a.options.placement)===Ee){var y=a.orderedModifiers.find(function(C){var B=C.name;return B==="flip"});y||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var h=T(s),R=h.marginTop,I=h.marginRight,W=h.marginBottom,U=h.marginLeft;[R,I,W,U].some(function(C){return parseFloat(C)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return F(),m.update()},forceUpdate:function(){if(!v){var p=a.elements,O=p.reference,E=p.popper;if(!ve(O,E)){console.error(pe);return}a.rects={reference:ot(O,xe(E),a.options.strategy==="fixed"),popper:nt(E)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(C){return a.modifiersData[C.name]=Object.assign({},C.data)});for(var S=0,y=0;y<a.orderedModifiers.length;y++){if(S+=1,S>100){console.error(kt);break}if(a.reset===!0){a.reset=!1,y=-1;continue}var h=a.orderedModifiers[y],R=h.fn,I=h.options,W=I===void 0?{}:I,U=h.name;typeof R=="function"&&(a=R({state:a,options:W,name:U,instance:m})||a)}}},update:bt(function(){return new Promise(function(g){m.forceUpdate(),g(a)})}),destroy:function(){x(),v=!0}};if(!ve(c,s))return console.error(pe),m;m.setOptions(f).then(function(g){!v&&f.onFirstUpdate&&f.onFirstUpdate(g)});function F(){a.orderedModifiers.forEach(function(g){var p=g.name,O=g.options,E=O===void 0?{}:O,S=g.effect;if(typeof S=="function"){var y=S({state:a,name:p,instance:m,options:E}),h=function(){};w.push(y||h)}})}function x(){w.forEach(function(g){return g()}),w=[]}return m}}var J={passive:!0};function At(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,i=r===void 0?!0:r,u=n.resize,c=u===void 0?!0:u,s=P(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&f.forEach(function(a){a.addEventListener("scroll",o.update,J)}),c&&s.addEventListener("resize",o.update,J),function(){i&&f.forEach(function(a){a.removeEventListener("scroll",o.update,J)}),c&&s.removeEventListener("resize",o.update,J)}}var Tt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:At,data:{}};function Rt(t){var e=t.state,o=t.name;e.modifiersData[o]=Ct({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Dt={name:"popperOffsets",enabled:!0,phase:"read",fn:Rt,data:{}},It={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Lt(t){var e=t.x,o=t.y,n=window,r=n.devicePixelRatio||1;return{x:q(e*r)/r||0,y:q(o*r)/r||0}}function me(t){var e,o=t.popper,n=t.popperRect,r=t.placement,i=t.variation,u=t.offsets,c=t.position,s=t.gpuAcceleration,f=t.adaptive,a=t.roundOffsets,w=t.isFixed,v=u.x,m=v===void 0?0:v,F=u.y,x=F===void 0?0:F,g=typeof a=="function"?a({x:m,y:x}):{x:m,y:x};m=g.x,x=g.y;var p=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=M,S=_,y=window;if(f){var h=xe(o),R="clientHeight",I="clientWidth";if(h===P(o)&&(h=te(o),T(h).position!=="static"&&c==="absolute"&&(R="scrollHeight",I="scrollWidth")),h=h,r===_||(r===M||r===z)&&i===ee){S=Q;var W=w&&h===y&&y.visualViewport?y.visualViewport.height:h[R];x-=W-n.height,x*=s?1:-1}if(r===M||(r===_||r===Q)&&i===ee){E=z;var U=w&&h===y&&y.visualViewport?y.visualViewport.width:h[I];m-=U-n.width,m*=s?1:-1}}var C=Object.assign({position:c},f&&It),B=a===!0?Lt({x:m,y:x}):{x:m,y:x};if(m=B.x,x=B.y,s){var X;return Object.assign({},C,(X={},X[S]=O?"0":"",X[E]=p?"0":"",X.transform=(y.devicePixelRatio||1)<=1?"translate("+m+"px, "+x+"px)":"translate3d("+m+"px, "+x+"px, 0)",X))}return Object.assign({},C,(e={},e[S]=O?x+"px":"",e[E]=p?m+"px":"",e.transform="",e))}function jt(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,u=i===void 0?!0:i,c=o.roundOffsets,s=c===void 0?!0:c;{var f=T(e.elements.popper).transitionProperty||"";u&&["transform","top","right","bottom","left"].some(function(w){return f.indexOf(w)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var a={placement:oe(e.placement),variation:Ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,me(Object.assign({},a,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,me(Object.assign({},a,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Mt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:jt,data:{}};function Ft(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},i=e.elements[o];!k(i)||!A(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(u){var c=r[u];c===!1?i.removeAttribute(u):i.setAttribute(u,c===!0?"":c)}))})}function Bt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],i=e.attributes[n]||{},u=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),c=u.reduce(function(s,f){return s[f]="",s},{});!k(r)||!A(r)||(Object.assign(r.style,c),Object.keys(i).forEach(function(s){r.removeAttribute(s)}))})}}var Nt={name:"applyStyles",enabled:!0,phase:"write",fn:Ft,effect:Bt,requires:["computeStyles"]},Vt=[Tt,Dt,Mt,Nt],_t=Pt({defaultModifiers:Vt});function qt(t,e,o){var n=oe(t),r=[M,_].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,u=i[0],c=i[1];return u=u||0,c=(c||0)*r,[M,z].indexOf(n)>=0?{x:c,y:u}:{x:u,y:c}}function Wt(t){var e=t.state,o=t.options,n=t.name,r=o.offset,i=r===void 0?[0,0]:r,u=st.reduce(function(a,w){return a[w]=qt(w,e.rects,i),a},{}),c=u[e.placement],s=c.x,f=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=f),e.modifiersData[n]=u}var Ut={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Wt};const[Xt,j]=ke("popover"),Yt=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],$t={show:Boolean,theme:ne("light"),overlay:Boolean,actions:De(),trigger:ne("click"),duration:Ie,showArrow:G,placement:ne("bottom"),iconPrefix:String,overlayClass:Le,overlayStyle:Object,closeOnClickAction:G,closeOnClickOverlay:G,closeOnClickOutside:G,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},Ht=he({name:Xt,props:$t,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const i=V(),u=V(),c=V(),s=()=>({placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Te({},Ut,{options:{offset:t.offset}})]}),f=()=>u.value&&c.value?_t(u.value,c.value.popupRef.value,s()):null,a=()=>{Xe(()=>{!t.show||(r?r.setOptions(s()):r=f())})},w=p=>e("update:show",p),v=()=>{t.trigger==="click"&&w(!t.show)},m=(p,O)=>{p.disabled||(e("select",p,O),t.closeOnClickAction&&w(!1))},F=()=>{t.show&&t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&w(!1)},x=(p,O)=>o.action?o.action({action:p,index:O}):[p.icon&&d(Fe,{name:p.icon,classPrefix:t.iconPrefix,class:j("action-icon")},null),d("div",{class:[j("action-text"),Me]},[p.text])],g=(p,O)=>{const{icon:E,color:S,disabled:y,className:h}=p;return d("div",{role:"menuitem",class:[j("action",{disabled:y,"with-icon":E}),h],style:{color:S},tabindex:y?void 0:0,"aria-disabled":y||void 0,onClick:()=>m(p,O)},[x(p,O)])};return Ve(()=>{a(),_e(()=>{var p;i.value=(p=c.value)==null?void 0:p.popupRef.value})}),qe(()=>{r&&(r.destroy(),r=null)}),We(()=>[t.show,t.offset,t.placement],a),Pe([u,i],F,{eventName:"touchstart"}),()=>{var p;return d(re,null,[d("span",{ref:u,class:j("wrapper"),onClick:v},[(p=o.reference)==null?void 0:p.call(o)]),d(Be,Ue({ref:c,class:j([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":w},n,Ae(t,Yt)),{default:()=>[t.showArrow&&d("div",{class:j("arrow")},null),d("div",{role:"menu",class:j("content")},[o.default?o.default():t.actions.map(g)])]})])}}}),zt=je(Ht),N=zt,Gt={class:"demo-popover-box"},Jt=we("div",{class:"demo-popover-refer"},null,-1),Oo=he({__name:"index",setup(t){const e=Re({"zh-CN":{actions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}],shortActions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],actionsWithIcon:[{text:"\u9009\u9879\u4E00",icon:"add-o"},{text:"\u9009\u9879\u4E8C",icon:"music-o"},{text:"\u9009\u9879\u4E09",icon:"more-o"}],actionsDisabled:[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}],showIcon:"\u5C55\u793A\u56FE\u6807",placement:"\u5F39\u51FA\u4F4D\u7F6E",darkTheme:"\u6DF1\u8272\u98CE\u683C",lightTheme:"\u6D45\u8272\u98CE\u683C",showPopover:"\u70B9\u51FB\u5F39\u51FA\u6C14\u6CE1",actionOptions:"\u9009\u9879\u914D\u7F6E",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",disableAction:"\u7981\u7528\u9009\u9879",choosePlacement:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=V({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=V(!1),i=V("top"),u=()=>{r.value=!0,setTimeout(()=>{n.value={...n.value,placement:!0}},300)},c=f=>{setTimeout(()=>{n.value.placement=!0,i.value=f})},s=f=>Ze(f.text);return(f,a)=>{const w=Ye("demo-block");return ce(),ue(re,null,[d(w,{title:l(e)("basicUsage")},{default:b(()=>[d(l(N),{show:n.value.lightTheme,"onUpdate:show":a[0]||(a[0]=v=>n.value.lightTheme=v),actions:l(e)("actions"),placement:"bottom-start",onSelect:s},{reference:b(()=>[d(l(H),{type:"primary"},{default:b(()=>[Y($(l(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),d(l(N),{show:n.value.darkTheme,"onUpdate:show":a[1]||(a[1]=v=>n.value.darkTheme=v),theme:"dark",actions:l(e)("actions"),onSelect:s},{reference:b(()=>[d(l(H),{type:"primary"},{default:b(()=>[Y($(l(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(w,{title:l(e)("placement")},{default:b(()=>[d(l(He),{"is-link":"",readonly:"",name:"picker",label:l(e)("choosePlacement"),onClick:u},null,8,["label"]),d(l(Ne),{show:r.value,"onUpdate:show":a[3]||(a[3]=v=>r.value=v),round:"",position:"bottom",teleport:"body"},{default:b(()=>[we("div",Gt,[d(l(N),{show:n.value.placement,"onUpdate:show":a[2]||(a[2]=v=>n.value.placement=v),theme:"dark",actions:l(e)("shortActions"),placement:i.value,onSelect:s},{reference:b(()=>[Jt]),_:1},8,["show","actions","placement"])]),d(l(ze),{columns:o,"show-toolbar":!1,onChange:c})]),_:1},8,["show"])]),_:1},8,["title"]),d(w,{title:l(e)("actionOptions")},{default:b(()=>[d(l(N),{show:n.value.showIcon,"onUpdate:show":a[4]||(a[4]=v=>n.value.showIcon=v),actions:l(e)("actionsWithIcon"),placement:"bottom-start",onSelect:s},{reference:b(()=>[d(l(H),{type:"primary"},{default:b(()=>[Y($(l(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),d(l(N),{show:n.value.disableAction,"onUpdate:show":a[5]||(a[5]=v=>n.value.disableAction=v),actions:l(e)("actionsDisabled"),onSelect:s},{reference:b(()=>[d(l(H),{type:"primary"},{default:b(()=>[Y($(l(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(w,{title:l(e)("customContent")},{default:b(()=>[d(l(N),{show:n.value.customContent,"onUpdate:show":a[7]||(a[7]=v=>n.value.customContent=v),placement:"top-start",onSelect:s},{reference:b(()=>[d(l(H),{type:"primary"},{default:b(()=>[Y($(l(e)("customContent")),1)]),_:1})]),default:b(()=>[d(l(Ge),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:b(()=>[(ce(),ue(re,null,$e(6,v=>d(l(Je),{key:v,icon:"photo-o",text:l(e)("option"),onClick:a[6]||(a[6]=m=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{Oo as default};
