webpackJsonp([0x69e9b9399e71],{355:function(t,n){t.exports={data:{markdownRemark:{html:'<p><a href="https://parceljs.org/">Parcel</a> is a relatively new bundler for JavaScript projects. The past three revisions of this workshop all teach Webpack and end up spending a decent amount of time covering how to set it up. Webpack is a fantastic piece of technology and you should definitely consider using it for your large applications; it\'s been around a long time and has a lot of support.</p>\n<p>That being said, Parcel is an amazing tool that zero-config. It works with everything we want to do out of the box. Since this is a class on React and not build processes, this allows us to focus more on React. Let\'s go see what it can do for us.</p>\n<p>Parcel is going to accept an entry point, crawl through all of its dependencies, and output a single, complete file with all of our code in it. This means we can have large applications with many files and many dependencies. It would be an unmanageable mess. Already our React app has two components in one file: App and Pet. It\'d be better if these were in separate files so it\'d be easier to keep track of what was where. This is where Parcel can help us.</p>\n<p>Install Parcel by doing <code class="language-text">npm install -D parcel-bundler</code>.</p>\n<p>Now inside of your <code class="language-text">package.json</code> put:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token string">"scripts"</span> <span class="token punctuation">{</span>\n  <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"parcel src/index.html"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now open <a href="http://localhost:1234">http://localhost:1234</a>. You should see your site come up. The difference here is now it\'s being run through Parcel which means we can leverage all the features that Parcel allows us which we will explore shortly.</p>\n<p>So how does it work? We gave the entry point, which is index.html. It then reads that index.html file and finds its dependencies, which is the two React files and the one App.js file that we linked to. It\'s smart enough to detect that those two React files are remote so it doesn\'t do anything with those, but it sees that App.js is local and so it reads it and compiles its dependencies. Right now it has no dependencies so let\'s fix that.</p>\n<p>First let\'s fix the React and ReactDOM dependencies. Right now these are coming from unpkg.com. Unpkg isn\'t meant to serve production traffic, nor do we want the burden of loading <em>all</em> of our future dependencies this way. Believe me, it would get messy quickly and we\'d have to make a million requests to get all of them by the end (we\'ll install more later as we go.) Instead, it\'d be better if we could pull our dependncies down from npm and include it in our bundle. Let\'s do that now.</p>\n<p>Run <code class="language-text">npm install react react-dom</code>. This will pull React and ReactDOM down from npm and put it in your node_modules directory. Now instead of loading them from unpkg, we can tell Parcel to include them in your main bundle. Let\'s do that now.</p>\n<p>Delete the two unpkg script tags in index.html</p>\n<p>Add to the top of <code class="language-text">App.js</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Refresh the page and it still works! Now our React and ReactDOM is loading directly from our bundle instead of separate JavaScript files! Let\'s take this a step further. Create a new file called Pet.js and put this in there:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Pet</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>animal<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>breed<span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Pet<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Go to App.js</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// at the top, under React imports</span>\n<span class="token keyword">import</span> Pet <span class="token keyword">from</span> <span class="token string">"./Pet"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// remove Pet component</span></code></pre>\n      </div>\n<p>Load the page again. Still works! Now we can separate components into separate files. Parcel does more us than just this but we\'ll get to that in future sections.</p>\n<h2 id="alternatives"><a href="#alternatives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alternatives</h2>\n<ul>\n<li><a href="https://webpack.js.org/">Webpack</a></li>\n<li><a href="http://browserify.org/">Browserify</a></li>\n</ul>',frontmatter:{path:"/parcel",title:"Parcel",order:4}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"/code-organization",title:"Code Organization"}}},{node:{frontmatter:{order:20,path:"/typescript",title:"TypeScript"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---parcel-b86f5ec3a299bb07ef20.js.map