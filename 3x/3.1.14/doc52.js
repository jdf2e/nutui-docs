import{e as a,o as t,y as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Skeleton \u9AA8\u67B6\u5C4F</h1><h3>\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u4E0A\u5F85\u52A0\u8F7D\u533A\u57DF\u586B\u5145\u7070\u8272\u7684\u5360\u4F4D\u56FE\uFF0C\u672C\u8D28\u4E0A\u662F\u754C\u9762\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u8FC7\u6E21\u6548\u679C\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Skeleton);

</code></pre><h3>\u4EE3\u7801\u5B9E\u4F8B</h3><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-skeleton</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;250px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;15px&quot;</span> <span class="hljs-attr">animated</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-skeleton</span>&gt;</span>
</code></pre><h3>\u4F20\u5165\u591A\u884C</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-skeleton</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;250px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;15px&quot;</span> <span class="hljs-attr">title</span> <span class="hljs-attr">animated</span> <span class="hljs-attr">row</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-skeleton</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u5934\u50CF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-skeleton</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;250px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;15px&quot;</span> <span class="hljs-attr">title</span> <span class="hljs-attr">animated</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">row</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-skeleton</span>&gt;</span>
</code></pre><h3>\u6807\u9898\u6BB5\u843D\u5706\u89D2\u98CE\u683C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-skeleton</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;250px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;15px&quot;</span> <span class="hljs-attr">animated</span> <span class="hljs-attr">round</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-skeleton</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u5B50\u7EC4\u4EF6</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15px&quot;</span> /&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">nut-skeleton</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;250px&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;15px&quot;</span> <span class="hljs-attr">title</span> <span class="hljs-attr">animated</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">row</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;!checked&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">nut-avatar</span>
            <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;50&quot;</span>
            <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png&quot;</span>
          /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;right-content&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>NutUI<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;desc&quot;</span>
              &gt;</span>\u4E00\u5957\u4EAC\u4E1C\u98CE\u683C\u7684\u8F7B\u91CF\u7EA7\u79FB\u52A8\u7AEFVue\u7EC4\u5E93\uFF0C\u63D0\u4F9B\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002&lt;/div
            &gt;
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">nut-skeleton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5C4F</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>width</td><td>\u6BCF\u884C\u5BBD\u5EA6</td><td>String</td><td><code>default</code></td></tr><tr><td>height</td><td>\u6BCF\u884C\u9AD8\u5EA6</td><td>String</td><td><code>100px</code></td></tr><tr><td>animated</td><td>\u662F\u5426\u5F00\u542F\u9AA8\u67B6\u5C4F\u52A8\u753B</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>avatar</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>avatar-shape</td><td>\u5934\u50CF\u5F62\u72B6\uFF1A\u6B63\u65B9\u5F62/\u5706\u5F62</td><td>String</td><td><code>round</code></td></tr><tr><td>avatar-size</td><td>\u5934\u50CF\u5927\u5C0F</td><td>String</td><td><code>50px</code></td></tr><tr><td>round</td><td>\u6807\u9898/\u6BB5\u843D\u662F\u5426\u91C7\u7528\u5706\u89D2\u98CE\u683C</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>row</td><td>\u8BBE\u7F6E\u6BB5\u843D\u884C\u6570</td><td>String</td><td><code>1</code></td></tr><tr><td>title</td><td>\u662F\u5426\u663E\u793A\u6BB5\u843D\u6807\u9898</td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9AA8\u67B6\u5C4F\u663E\u793A\u5185\u5BB9</td></tr></tbody></table>`,20),e=[p],j={setup(c,{expose:s}){return s({frontmatter:{}}),(d,o)=>(t(),a("div",l,e))}};export{j as default};
