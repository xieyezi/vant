import{_ as s}from"./locales-1d12743b.js";import{o as a,a as t,z as n}from"./vue-libs-83dbabed.js";const l={},p={class:"van-doc-markdown-body"},e=n(`<h1>Tabbar 标签栏</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>底部导航栏，用于在不同页面之间进行切换。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Tabbar</span>, <span class="hljs-title class_">TabbarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Tabbar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">TabbarItem</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p><code>v-model</code> 默认绑定选中标签的索引值，通过修改 <code>v-model</code> 即可切换选中的标签。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="tong-guo-ming-cheng-pi-pei" tabindex="-1">通过名称匹配</h3><p>在标签指定 <code>name</code> 属性的情况下，<code>v-model</code> 的值为当前标签的 <code>name</code>。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;friends&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;setting&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;home&#39;</span>);
    <span class="hljs-keyword">return</span> { active };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3><p>设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点；设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">dot</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3><p>通过 <code>icon</code> 插槽自定义图标，可以通过 <code>slot-scope</code> 判断标签是否选中。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>自定义<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.active ? icon.active : icon.inactive&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> icon = {
      <span class="hljs-attr">active</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactive</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
    <span class="hljs-keyword">return</span> {
      icon,
      active,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3><p>通过 <code>active-color</code> 属性设置选中标签的颜色，通过 <code>inactive-color</code> 属性设置未选中标签的颜色。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-ting-qie-huan-shi-jian" tabindex="-1">监听切换事件</h3><p>通过 <code>change</code> 事件来监听选中标签的变化。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>标签 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>标签 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;friends-o&quot;</span>&gt;</span>标签 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;setting-o&quot;</span>&gt;</span>标签 4<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`标签 <span class="hljs-subst">\${index}</span>\`</span>);
    <span class="hljs-keyword">return</span> {
      icon,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="lu-you-mo-shi" tabindex="-1">路由模式</h3><p>标签栏支持路由模式，用于搭配 Vue Router 使用。路由模式下会匹配页面路径和标签的 <code>to</code> 属性，并自动选中对应的标签。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">router-view</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar</span> <span class="hljs-attr">route</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">replace</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/home&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-tabbar-item</span> <span class="hljs-attr">replace</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/search&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>标签<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-tabbar</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="tabbar-props" tabindex="-1">Tabbar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前选中标签的名称或索引值</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>fixed</td><td>是否固定在底部</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>border</td><td>是否显示外边框</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>z-index</td><td>元素 z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td>active-color</td><td>选中标签的颜色</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>inactive-color</td><td>未选中标签的颜色</td><td><em>string</em></td><td><code>#7d7e80</code></td></tr><tr><td>route</td><td>是否开启路由模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>固定在底部时，是否在标签位置生成一个等高的占位元素</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>safe-area-inset-bottom</td><td>是否开启<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">底部安全区适配</a>，设置 fixed 时默认开启</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>before-change</td><td>切换标签前的回调函数，返回 <code>false</code> 可阻止切换，支持返回 Promise</td><td><em>(name: number | string) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbar-events" tabindex="-1">Tabbar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换标签时触发</td><td><em>active: number | string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbaritem-props" tabindex="-1">TabbarItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>标签名称，作为匹配的标识符</td><td><em>number | string</em></td><td>当前标签的索引值</td></tr><tr><td>icon</td><td>图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>dot</td><td>是否显示图标右上角小红点</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>图标右上角徽标的内容</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props</td><td>自定义徽标的属性，传入的对象会被透传给 <a href="#/zh-CN/badge#props" target="_blank">Badge 组件的 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>点击后跳转的链接地址</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>是否在跳转时替换当前页面历史</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="tabbaritem-slots" tabindex="-1">TabbarItem Slots</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td><td><em>active: boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">TabbarProps</span>, <span class="hljs-title class_">TabbarItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-tabbar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-tabbar-z-index</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-tabbar-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-active-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-active-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-tabbar-item-line-height</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-tabbar-item-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-tabbar-item-icon-margin-bottom</td><td><em>var(--van-padding-base)</em></td><td>-</td></tr></tbody></table></div>`,19),c=[e];function d(r,o){return a(),t("div",p,c)}const j=s(l,[["render",d]]);export{j as default};
