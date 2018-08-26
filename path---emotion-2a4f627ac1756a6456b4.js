webpackJsonp([18281215422665],{349:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Emotion is a library for including your styles inside of your component files and allowing you to harnass JavaScript to easily script your CSS. While previous CSS-in-JS solutions ballooned file sizes and were slow, Emotion is both small and fast. I\'ll show you how to get started with it; it merits its own course on all the cool and crazy things you can do with it.</p>\n<p>First run <code class="language-text">npm install emotion react-emotion</code>.</p>\n<p>Make a new file called NavBar.js, put this in it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/router"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"react-emotion"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Container <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span><span class="token string">"header"</span><span class="token punctuation">)</span><span class="token template-string"><span class="token string">`\n  background-color: #333;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">NavBar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Container<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Adopt Me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/search-params"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>span aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"search"</span> role<span class="token operator">=</span><span class="token string">"img"</span><span class="token operator">></span>\n        🔍\n      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> NavBar<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Go to App.js and replace the <code class="language-text">&lt;header&gt;</code> with <code class="language-text">&lt;NavBar /&gt;</code> after importing it at the top.</p>\n<p>So here we\'re using Emotion to generate React components that are styled the way we choose. Here we\'ve made a sticky header at the top. This is 95% how you\'ll use Emotion: making components and then using them. But let\'s see some more reasons why to use them.</p>\n<p>Make a new file called <code class="language-text">colors.js</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  primary<span class="token punctuation">:</span> <span class="token string">"#ad343e"</span><span class="token punctuation">,</span>\n  secondary<span class="token punctuation">:</span> <span class="token string">"#f2af29"</span><span class="token punctuation">,</span>\n  dark<span class="token punctuation">:</span> <span class="token string">"#333"</span><span class="token punctuation">,</span>\n  light<span class="token punctuation">:</span> <span class="token string">"#000"</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now import that into NavBar.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// import</span>\n<span class="token keyword">import</span> colors <span class="token keyword">from</span> <span class="token string">"./colors"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// replace background-color</span>\nbackground<span class="token operator">-</span>color<span class="token punctuation">:</span> $<span class="token punctuation">{</span>colors<span class="token punctuation">.</span>dark<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This allows for super simple variable sharing that ends up being scoped instead of sometimes-unruly CSS variables.</p>\n<p>Now what if we wanted to make our links underline on hover?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> NavLink <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>Link<span class="token punctuation">)</span><span class="token template-string"><span class="token string">`\n  &amp;:hover {\n    text-decoration: underline;\n  }\n`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You can style other peoples\' components too! Just pass the component into the styled function. You can also use <code class="language-text">&amp;</code> to represent the element in compound selectors like we\'ve done here.</p>\n<p>Lastly, let\'s make the spy glass spin!</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// import keyframes</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> keyframes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-emotion"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// under other styled calls</span>\n<span class="token keyword">const</span> Spin <span class="token operator">=</span> keyframes<span class="token template-string"><span class="token string">`\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> SpyGlass <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span><span class="token string">"span"</span><span class="token punctuation">)</span><span class="token template-string"><span class="token string">`\n  display: inline-block;\n  animation: 1s </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Spin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> linear infinite;\n`</span></span><span class="token punctuation">;</span>\n\n<span class="token comment">// replace span</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">/* eslint-disable-next-line */</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span>SpyGlass aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"search"</span> role<span class="token operator">=</span><span class="token string">"img"</span><span class="token operator">></span>\n  🔍\n<span class="token operator">&lt;</span><span class="token operator">/</span>SpyGlass<span class="token operator">></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>keyframes are how you do keyframes with Emotion. You create the keyframe, then use what it returns to reference inside your components, again making your keyframes tidily reusable. From there we use the keyframe, disable the a11y warning we get from ESLint (since it is still a span and ESLint just can\'t see it) and then render out the results (still with the correct attributes since Emotion just passes them on.)</p>\n<p>That\'s it! That\'s most of what you need to know to use Emotion.</p>\n<h2 id="-2f88e50cb1cbb2ee10b9bb022491b6959591d3b0-branch-emotion"><a href="#-2f88e50cb1cbb2ee10b9bb022491b6959591d3b0-branch-emotion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🌳 2f88e50cb1cbb2ee10b9bb022491b6959591d3b0 (branch emotion)</h2>',frontmatter:{path:"/emotion",title:"Emotion",order:14}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"/code-organization",title:"Code Organization"}}},{node:{frontmatter:{order:20,path:"/typescript",title:"TypeScript"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---emotion-2a4f627ac1756a6456b4.js.map