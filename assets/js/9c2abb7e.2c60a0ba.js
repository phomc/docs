"use strict";(self.webpackChunkphomc_docs=self.webpackChunkphomc_docs||[]).push([[1970],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var r=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var m=r.createContext({}),s=function(e){var t=r.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(i),p=o,f=c["".concat(m,".").concat(p)]||c[p]||u[p]||n;return i?r.createElement(f,a(a({ref:t},d),{},{components:i})):r.createElement(f,a({ref:t},d))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<n;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1493:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=i(7462),o=(i(7294),i(3905));const n={description:"Models modifiers are used to add custom item models without having to declare ``custom_model_data`` predicate manually."},a="Models",l={unversionedId:"multipacks/modifiers/models",id:"multipacks/modifiers/models",title:"Models",description:"Models modifiers are used to add custom item models without having to declare ``custom_model_data`` predicate manually.",source:"@site/docs/multipacks/modifiers/models.md",sourceDirName:"multipacks/modifiers",slug:"/multipacks/modifiers/models",permalink:"/multipacks/modifiers/models",draft:!1,editUrl:"https://github.com/phomc/docs/blob/main/docs/multipacks/modifiers/models.md",tags:[],version:"current",frontMatter:{description:"Models modifiers are used to add custom item models without having to declare ``custom_model_data`` predicate manually."},sidebar:"multipacksSidebar",previous:{title:"Glyphs",permalink:"/multipacks/modifiers/glyphs"},next:{title:"Slices",permalink:"/multipacks/modifiers/slices"}},m={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"models"},"Models"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type ID: ",(0,o.kt)("inlineCode",{parentName:"li"},"multipacks:builtin/models")),(0,o.kt)("li",{parentName:"ul"},"This is built-in modifier. See ",(0,o.kt)("a",{parentName:"li",href:"./builtin-modifiers"},"this page")," for more information.")),(0,o.kt)("p",null,"Models modifiers are used to add custom item models without having to declare ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_model_data")," predicate manually."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A valid model JSON file for base item and custom item.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "namespace:custom_item_id",\n    "model": "namespace:item/custom_item_model",\n    "item": "minecraft:item_id"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": ID for this custom item model. Mainly used by Spigot plugins to obtain custom model numerical ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"model"),": Location to custom model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"item"),": Item model to inject ",(0,o.kt)("inlineCode",{parentName:"li"},"custom_model_data")," predicate. This item model must be present in your pack.")))}c.isMDXComponent=!0}}]);