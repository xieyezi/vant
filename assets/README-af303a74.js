import{_ as t}from"./locales-1d12743b.js";import{o as a,a as s,z as e}from"./vue-libs-83dbabed.js";const n={},r={class:"van-doc-markdown-body"},d=e(`<h1>Watermark</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Add specific text or patterns on the page as watermarks, which can be used to prevent information theft. Please upgrade <code>vant</code> to &gt;= v4.2.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Watermark</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Watermark</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="text-watermark" tabindex="-1">Text Watermark</h3><p>Use the <code>content</code> prop to set the text of the watermark.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;Vant&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="image-watermark" tabindex="-1">Image Watermark</h3><p>Use the <code>image</code> prop to set the watermark image, and use <code>opacity</code> prop to adjust the transparency of the watermark.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>
  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-gap" tabindex="-1">Custom Gap</h3><p>Use <code>gap-x</code> <code>gap-y</code> prop to control the gap between watermark items.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>
  <span class="hljs-attr">:gap-x</span>=<span class="hljs-string">&quot;30&quot;</span>
  <span class="hljs-attr">:gap-y</span>=<span class="hljs-string">&quot;10&quot;</span>
  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-rotate" tabindex="-1">Custom Rotate</h3><p>Use <code>rotate</code> prop to control the rotate of watermark. The default value is <code>-22</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>
  <span class="hljs-attr">rotate</span>=<span class="hljs-string">&quot;22&quot;</span>
  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="display-range" tabindex="-1">Display Range</h3><p>Use the <code>full-page</code> prop to control the display range of the watermark.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/vant-watermark.png&quot;</span>
  <span class="hljs-attr">opacity</span>=<span class="hljs-string">&quot;0.2&quot;</span>
  <span class="hljs-attr">:full-page</span>=<span class="hljs-string">&quot;true&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="html-watermark" tabindex="-1">HTML Watermark</h3><p>Use the <code>content</code> slot to pass HTML as watermark. Only supports inline styles, and self-closing tags are not supported.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-watermark</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;150&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%)&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;mix-blend-mode: difference; color: #fff&quot;</span>&gt;</span>Vant watermark<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-watermark</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>width</td><td>Watermark width</td><td><em>number</em></td><td><code>100</code></td></tr><tr><td>height</td><td>Watermark height</td><td><em>number</em></td><td><code>100</code></td></tr><tr><td>z-index</td><td>Watermark&#39;s z-index</td><td><em>number | string</em></td><td><code>100</code></td></tr><tr><td>content</td><td>Text watermark content</td><td><em>string</em></td><td>-</td></tr><tr><td>image</td><td>Image watermark content. If <code>content</code> and <code>image</code> are passed at the same time, use the <code>image</code> watermark first</td><td><em>string</em></td><td>-</td></tr><tr><td>rotate</td><td>Watermark rotation angle</td><td><em>number | string</em></td><td><code>-22</code></td></tr><tr><td>full-page</td><td>Whether to display the watermark in full screen</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>gap-x</td><td>Horizontal spacing between watermarks</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>gap-y</td><td>Vertical spacing between watermarks</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>text-color</td><td>Color of text watermark</td><td><em>string</em></td><td><code>#dcdee0</code></td></tr><tr><td>opacity</td><td>Opacity of watermark</td><td><em>number | string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td>content</td><td>Content of HTML watermark. Only supports inline styles, and self-closing tags are not supported. The priority is higher than <code>content</code> or <code>image</code> props</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">WaterProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-watermark-z-index</td><td><em>100</em></td><td>z-index of root element</td></tr></tbody></table></div>`,16),p=[d];function l(o,c){return a(),s("div",r,p)}const m=t(n,[["render",l]]);export{m as default};
