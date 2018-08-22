webpackJsonp([0xd8fe2638a7fc],{355:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Another very new feature React is something called a Portal. You can think of the portal as a separate mount point (the actual DOM node which your app is put into) for your React app. The most common use case for this is going to be doing modals. You\'ll have your normal app with its normal mount point and then you can also put different content into a separate mount point (like a modal or a contextual nav bar) directly from a component. Pretty cool!</p>\n<p>First thing, let\'s go into index.html and add a separate mount point:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- above #root --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>This where the modal will actually be mounted whenever we render to this portal. Totally separate from our app root.</p>\n<p>Next create a file called Modal.js. I literally took this code <em>almost</em> unchanged from the <a href="">React docs</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// taken from React docs</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> modalRoot <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"modal"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Modal</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    modalRoot<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    modalRoot<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Modal<span class="token punctuation">;</span></code></pre>\n      </div>\n<ul>\n<li>This will mount a div and mount inside of the portal whenever the Modal is rendered and then <em>remove</em> itself whenever it\'s unrendered.</li>\n<li>Notice we\'re using <code class="language-text">componentWillUnmount</code> here. This is one of the few instances where you will need it: cleaning up created DOM divs to not leak memory. You\'ll also clean up event listeners too.</li>\n<li>Down at the bottom we use React\'s <code class="language-text">createPortal</code> to pass the children (whatever you put inside <code class="language-text">&lt;Modal&gt;&lt;/Modal&gt;</code>) to the portal div.</li>\n</ul>\n<p>Now go to Details.js and add:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at the top</span>\n<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">"./Modal"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// add showModal</span>\nstate <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> showModal<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// above render</span>\n<span class="token function-variable function">toggleModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showModal<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>showModal <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// add showModal</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  media<span class="token punctuation">,</span>\n  animal<span class="token punctuation">,</span>\n  breed<span class="token punctuation">,</span>\n  location<span class="token punctuation">,</span>\n  description<span class="token punctuation">,</span>\n  name<span class="token punctuation">,</span>\n  showModal\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n<span class="token comment">// below h2</span>\n<span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggleModal<span class="token punctuation">}</span><span class="token operator">></span>Adopt <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token comment">// below description</span>\n<span class="token punctuation">{</span>\n  showModal <span class="token operator">?</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Modal<span class="token operator">></span>\n      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Would you like to adopt <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"buttons"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggleModal<span class="token punctuation">}</span><span class="token operator">></span>Yes<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggleModal<span class="token punctuation">}</span><span class="token operator">></span>No<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">></span>\n  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>That\'s it! That\'s how you make a modal using a portal in React. This used to be significantly more difficult to do but with portals it became trivial. The nice thing about portals is that despite the actual elements being in different DOM trees, these are in the same React trees, so you can do event bubbling up from the modal. Some times this is useful if you want to make your Modal more flexible (like we did.)</p>\n<h2 id="-ec16c0de7ee55a7112f8f2d7d80b615fcffd66dd"><a href="#-ec16c0de7ee55a7112f8f2d7d80b615fcffd66dd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🌳 ec16c0de7ee55a7112f8f2d7d80b615fcffd66dd</h2>',frontmatter:{path:"/portals",title:"Portals",order:11}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"code-organization",title:"Code Organization"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---portals-7d8bbfbbc2655e4688ba.js.map