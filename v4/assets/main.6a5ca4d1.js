import{_ as m,a as V,g as E,p as O,s as j,c as I,b as h,d as B,i as F,e as R,l as z,f as S,h as q,j as x,k as Y}from"./locales.7a5a69a2.js";import{c as $,n as v,a as r,r as _,o as a,F as y,b,d as l,t as f,e as p,f as u,g as P,h as W,w as C,T as G,i as k,j as J,v as K,p as Q,k as U,l as X,m as Z,q as ee,s as te}from"./vue-libs.a040eeb8.js";const ne={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){const e=(this.item.title||this.item.name).split(" ");return`${e[0]} <span>${e.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path?!0:this.item.path==="home"?this.$route.path===this.base:!1}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},oe=["href","innerHTML"],se=["innerHTML"];function ae(e,n,t,i,s,o){const d=_("router-link");return t.item.path?(a(),$(d,{key:0,class:v({active:o.active}),to:o.path,innerHTML:o.itemName},null,8,["class","to","innerHTML"])):t.item.link?(a(),r("a",{key:1,href:t.item.link,innerHTML:o.itemName},null,8,oe)):(a(),r("a",{key:2,innerHTML:o.itemName},null,8,se))}const H=m(ne,[["render",ae]]);const ie={name:"VanDocNav",components:{[H.name]:H},props:{lang:String,navConfig:Array},data(){return{top:64,bottom:0}},computed:{style(){return{top:this.top+"px",bottom:this.bottom+"px"}},base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){const{pageYOffset:e}=window;this.top=Math.max(0,64-e)}}},re={class:"van-doc-nav__title"};function ce(e,n,t,i,s,o){const d=_("van-doc-nav-link");return a(),r("div",{class:"van-doc-nav",style:P(o.style)},[(a(!0),r(y,null,b(t.navConfig,(c,g)=>(a(),r("div",{class:"van-doc-nav__group",key:g},[l("div",re,f(c.title),1),c.items?(a(!0),r(y,{key:0},b(c.items,(w,L)=>(a(),r("div",{key:L,class:"van-doc-nav__item"},[p(d,{item:w,base:o.base},null,8,["item","base"])]))),128)):u("",!0)]))),128))],4)}const le=m(ie,[["render",ce]]);const de={name:"VanDocSearch",props:{lang:String,searchConfig:Object},watch:{lang(){this.initDocsearch()}},mounted(){this.initDocsearch()},methods:{initDocsearch(){this.searchConfig&&(V(()=>Promise.resolve({}),["assets/style.5966e77d.css"]),V(()=>import("./index.9c94ac91.js"),[]).then(e=>{e.default({...this.searchConfig,container:"#docsearch"})}))}}},he={id:"docsearch"};function ue(e,n,t,i,s,o){return a(),r("div",he)}const _e=m(de,[["render",ue]]);const me={name:"VanDocHeader",components:{SearchInput:_e},props:{lang:String,config:Object,versions:Array,langConfigs:Array,darkModeClass:String},data(){return{currentTheme:E(),packageVersion:O,showVersionPop:!1}},computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){const e=this.langConfigs.filter(n=>n.lang!==this.lang);return e.length?e[0]:{}},searchConfig(){return this.config.searchConfig},themeImg(){return this.currentTheme==="light"?"https://b.yzcdn.cn/vant/dark-theme.svg":"https://b.yzcdn.cn/vant/light-theme.svg"}},watch:{currentTheme:{handler(e,n){window.localStorage.setItem("vantTheme",e),document.body.classList.remove(`van-doc-theme-${n}`),document.body.classList.add(`van-doc-theme-${e}`),j(e)},immediate:!0}},methods:{toggleTheme(){this.currentTheme=this.currentTheme==="light"?"dark":"light"},toggleVersionPop(){const e=!this.showVersionPop,n=e?"add":"remove";document.body[`${n}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=e},checkHideVersionPop(e){this.$refs.version.contains(e.target)||(this.showVersionPop=!1)},onSwitchLang(e){this.$router.push(this.$route.path.replace(e.from,e.to))},onSwitchVersion(e){e.link&&(location.href=e.link)}}},ge={class:"van-doc-header"},fe={class:"van-doc-row"},pe={class:"van-doc-header__top"},ve={class:"van-doc-header__logo"},ye=["src"],ke={class:"van-doc-header__title"},we={key:0,class:"van-doc-header__subtitle"},Se={class:"van-doc-header__top-nav"},be=["href"],Ce=["src"],$e={key:1},Te={key:0,class:"van-doc-header__top-nav-item"},Le=["src"],Ve={key:1,ref:"version",class:"van-doc-header__top-nav-item"},xe={key:0,class:"van-doc-header__version-pop"},He=["onClick"],Ne={key:2,class:"van-doc-header__top-nav-item"},De=["href"];function Ie(e,n,t,i,s,o){const d=_("search-input");return a(),r("div",ge,[l("div",fe,[l("div",pe,[l("a",ve,[l("img",{src:t.config.logo},null,8,ye),l("span",ke,f(t.config.title),1),t.config.subtitle?(a(),r("span",we,f(t.config.subtitle),1)):u("",!0)]),l("ul",Se,[(a(!0),r(y,null,b(t.config.links,(c,g)=>(a(),r("li",{key:g,class:"van-doc-header__top-nav-item"},[l("a",{class:"van-doc-header__link",target:"_blank",href:c.url},[c.logo?(a(),r("img",{key:0,src:c.logo},null,8,Ce)):c.text?(a(),r("span",$e,f(c.text),1)):u("",!0)],8,be)]))),128)),t.darkModeClass?(a(),r("li",Te,[l("a",{class:"van-doc-header__link",target:"_blank",onClick:n[0]||(n[0]=(...c)=>o.toggleTheme&&o.toggleTheme(...c))},[l("img",{src:o.themeImg},null,8,Le)])])):u("",!0),t.versions?(a(),r("li",Ve,[l("span",{class:"van-doc-header__cube van-doc-header__version",onClick:n[1]||(n[1]=(...c)=>o.toggleVersionPop&&o.toggleVersionPop(...c))},[W(f(s.packageVersion)+" ",1),p(G,{name:"van-doc-dropdown"},{default:C(()=>[s.showVersionPop?(a(),r("div",xe,[(a(!0),r(y,null,b(t.versions,(c,g)=>(a(),r("div",{key:g,class:"van-doc-header__version-pop-item",onClick:w=>o.onSwitchVersion(c)},f(c.label),9,He))),128))])):u("",!0)]),_:1})])],512)):u("",!0),o.langLabel&&o.langLink?(a(),r("li",Ne,[l("a",{class:"van-doc-header__cube",href:o.langLink},f(o.langLabel),9,De)])):u("",!0),o.searchConfig?(a(),$(d,{key:3,lang:t.lang,"search-config":o.searchConfig},null,8,["lang","search-config"])):u("",!0)])])])])}const Pe=m(me,[["render",Ie]]);const Ae={name:"VanDocContent",computed:{currentPage(){const{path:e}=this.$route;return e?e.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(e,n){n.path!==e.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:e}){["H2","H3","H4","H5"].includes(e.tagName)&&this.scrollToAnchor(e)},scrollToAnchor(e){e.id&&this.$router.push({name:this.$route.name,hash:"#"+e.id})},copyAction(){const e=document.querySelectorAll(".van-doc-card pre code");if(!(!e||!e.length))for(let n=0;n<e.length;n++){const t=e[n];let i=null;t.addEventListener("click",()=>{if(i)return;const s=t.innerText;I(s),t.classList.add("code-copy-success"),i=setTimeout(()=>{t.classList.remove("code-copy-success"),i=null},1400)})}}}};function Me(e,n,t,i,s,o){return a(),r("div",{class:v(["van-doc-content",`van-doc-content--${o.currentPage}`]),onClick:n[0]||(n[0]=(...d)=>o.onClick&&o.onClick(...d))},[k(e.$slots,"default")],2)}const Ee=m(Ae,[["render",Me]]);const Oe={name:"VanDocContainer",props:{hasSimulator:Boolean}};function je(e,n,t,i,s,o){return a(),r("div",{class:v(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":t.hasSimulator}])},[k(e.$slots,"default")],2)}const Be=m(Oe,[["render",je]]);const Fe={name:"VanDocSimulator",props:{src:String},data(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}},Re=["src"];function ze(e,n,t,i,s,o){return a(),r("div",{class:v(["van-doc-simulator",{"van-doc-simulator-fixed":o.isFixed}])},[l("iframe",{ref:"iframe",src:t.src,style:P(o.simulatorStyle),frameborder:"0"},null,12,Re)],2)}const qe=m(Fe,[["render",ze]]),Ye={name:"VanDoc",components:{DocNav:le,DocHeader:Pe,DocContent:Ee,DocContainer:Be,DocSimulator:qe},props:{lang:String,versions:Array,simulator:String,langConfigs:Array,hasSimulator:Boolean,darkModeClass:String,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){const{nav:e}=this.config,n=e.reduce((s,o)=>s.concat(o.items),[]),t=this.$route.path.split("/").pop();let i;for(let s=0,o=n.length;s<o;s++)if(n[s].path===t){i=s;break}this.leftNav=n[i-1],this.rightNav=n[i+1]},keyboardNav(e){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;const n=e==="prev"?this.leftNav:this.rightNav;n.path&&this.$router.push(this.base+n.path)},keyboardHandler(){window.addEventListener("keyup",e=>{switch(e.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next");break}})}}},We={class:"van-doc"};function Ge(e,n,t,i,s,o){const d=_("doc-header"),c=_("doc-nav"),g=_("doc-content"),w=_("doc-container"),L=_("doc-simulator");return a(),r("div",We,[p(d,{lang:t.lang,config:t.config,versions:t.versions,"lang-configs":t.langConfigs,"dark-mode-class":t.darkModeClass,onSwitchVersion:n[0]||(n[0]=M=>e.$emit("switch-version",M))},null,8,["lang","config","versions","lang-configs","dark-mode-class"]),p(c,{lang:t.lang,"nav-config":t.config.nav},null,8,["lang","nav-config"]),p(w,{"has-simulator":t.hasSimulator},{default:C(()=>[p(g,null,{default:C(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),t.hasSimulator?(a(),$(L,{key:0,src:t.simulator},null,8,["src"])):u("",!0)])}const Je=m(Ye,[["render",Ge]]);const Ke={components:{VanDoc:Je},data(){return{hasSimulator:!0,darkModeClass:h.site.darkModeClass}},computed:{simulator(){var n,t;return(n=h.site.simulator)!=null&&n.url?(t=h.site.simulator)==null?void 0:t.url:`${location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${location.hash}`},lang(){const{lang:e}=this.$route.meta;return e||""},langConfigs(){const{locales:e={}}=h.site;return Object.keys(e).map(n=>({lang:n,label:e[n].langLabel||""}))},config(){const{locales:e}=h.site;return e?e[this.lang]:h.site},versions(){return h.site.versions||null}},watch:{"$route.path"(){this.setTitleAndToggleSimulator()},lang(e){B(e),this.setTitleAndToggleSimulator()},config:{handler(e){e&&this.setTitleAndToggleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{const e=document.querySelector(this.$route.hash);e&&e.scrollIntoView()})},methods:{setTitleAndToggleSimulator(){let{title:e}=this.config;const t=this.config.nav.reduce((i,s)=>[...i,...s.items],[]).find(i=>i.path===this.$route.meta.name);t&&t.title?e=t.title+" - "+e:this.config.description&&(e+=` - ${this.config.description}`),document.title=e,this.hasSimulator=!(h.site.hideSimulator||this.config.hideSimulator||t&&t.hideSimulator)}}},Qe={class:"app"};function Ue(e,n,t,i,s,o){const d=_("router-view"),c=_("van-doc");return a(),r("div",Qe,[o.config?(a(),$(c,{key:0,lang:o.lang,config:o.config,versions:o.versions,simulator:o.simulator,"has-simulator":s.hasSimulator,"lang-configs":o.langConfigs,"dark-mode-class":s.darkModeClass},{default:C(()=>[p(d)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs","dark-mode-class"])):u("",!0)])}const Xe=m(Ke,[["render",Ue]]);const Ze={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data(){return{showSource:!1,copyStatus:"ready"}},methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){I(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}},et=e=>(Q("data-v-95763b72"),e=e(),U(),e),tt={class:"demo-playground--code"},nt={class:"demo-playground--code--actions"},ot=et(()=>l("span",null,null,-1)),st=["data-status"],at=["innerHTML"];function it(e,n,t,i,s,o){return a(),r("div",{class:v({"demo-playground":!t.inline,transform:t.transform})},[t.inline?k(e.$slots,"default",{key:0},void 0,!0):(a(),r(y,{key:1},[l("div",{class:v(["demo-playground--previewer",{compact:t.compact}])},[k(e.$slots,"default",{},void 0,!0)],2),l("div",tt,[l("div",nt,[ot,l("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":s.copyStatus,onClick:n[0]||(n[0]=(...d)=>o.copySourceCode&&o.copySourceCode(...d))},null,8,st),l("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:n[1]||(n[1]=(...d)=>o.toggleSource&&o.toggleSource(...d))})]),J(l("div",{innerHTML:o.unescape(t.codeSnippet),class:"demo-playground--code--content"},null,8,at),[[K,s.showSource]])])],64))],2)}const N=m(Ze,[["render",it],["__scopeId","data-v-95763b72"]]);F&&location.replace("mobile.html"+location.hash);const{locales:A,defaultLang:rt}=h.site;R(rt);function ct(e){if(e.indexOf("_")!==-1){const n=e.split("_"),t=n.shift();return{component:`${x(t)}`,lang:n.join("-")}}return{component:`${x(e)}`,lang:""}}function lt(e){const n=e.path.split("/")[1];return Object.keys(A).indexOf(n)!==-1?n:Y()}function dt(){const e=[],n=Object.keys(S);A?e.push({name:"notFound",path:"/:path(.*)+",redirect:i=>({name:lt(i)})}):e.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}});function t(i,s){e.push({name:s||"home",path:`/${s||""}`,component:i,meta:{lang:s}})}return n.forEach(i=>{const{component:s,lang:o}=ct(i);s==="home"&&t(S[i],o),o?e.push({name:`${o}/${s}`,path:`/${o}/${s}`,component:S[i],meta:{lang:o,name:s}}):e.push({name:`${s}`,path:`/${s}`,component:S[i],meta:{name:s}})}),e}const T=X({history:Z(),routes:dt(),scrollBehavior(e){return e.hash?{el:e.hash}:{top:0}}});T.afterEach(()=>{ee(q)});var D;((D=h.site.simulator)==null?void 0:D.syncPathFromSimulator)!==!1&&z(T);window.vueRouter=T;window.app=te(Xe).use(T).component(N.name,N);setTimeout(()=>{window.app.mount("#app")},0);
