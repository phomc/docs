"use strict";(self.webpackChunkphomc_docs=self.webpackChunkphomc_docs||[]).push([[450],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},u=function(e){var i=c(e.components);return n.createElement(s.Provider,{value:i},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,l(l({ref:i},u),{},{components:t})):n.createElement(m,l({ref:i},u))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var s in i)hasOwnProperty.call(i,s)&&(a[s]=i[s]);a.originalType=e,a[f]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},255:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},l="Built-in Modifiers",a={unversionedId:"multipacks/modifiers/builtin-modifiers",id:"multipacks/modifiers/builtin-modifiers",title:"Built-in Modifiers",description:"Built-in modifiers allows you to include configuration from other files and add multiple configurations for a single modifier pass.",source:"@site/docs/multipacks/modifiers/builtin-modifiers.md",sourceDirName:"multipacks/modifiers",slug:"/multipacks/modifiers/builtin-modifiers",permalink:"/multipacks/modifiers/builtin-modifiers",draft:!1,editUrl:"https://github.com/phomc/docs/blob/main/docs/multipacks/modifiers/builtin-modifiers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"multipacksSidebar",previous:{title:"Introduction",permalink:"/multipacks/modifiers/intro"},next:{title:"Atlases",permalink:"/multipacks/modifiers/atlases"}},s={},c=[{value:"Include configurations from other files",id:"include-configurations-from-other-files",level:2},{value:"Multiple configurations",id:"multiple-configurations",level:2}],u={toc:c};function f(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"built-in-modifiers"},"Built-in Modifiers"),(0,r.kt)("p",null,"Built-in modifiers allows you to include configuration from other files and add multiple configurations for a single modifier pass."),(0,r.kt)("h2",{id:"include-configurations-from-other-files"},"Include configurations from other files"),(0,r.kt)("p",null,"You can include configurations from other files by using ",(0,r.kt)("inlineCode",{parentName:"p"},"include"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "config": {"include": "assets/namespace/my_modifier_config.json"}\n}\n')),(0,r.kt)("p",null,"Included configuration files will be filtered when bundling."),(0,r.kt)("h2",{id:"multiple-configurations"},"Multiple configurations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config")," for this modifier supports JSON array, which allows you to add multiple configurations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "config": [\n        {"include": "..."},\n        {"configData": "..."}\n        ...\n    ]\n}\n')))}f.isMDXComponent=!0}}]);