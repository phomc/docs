"use strict";(self.webpackChunkphomc_docs=self.webpackChunkphomc_docs||[]).push([[3185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Introduction",l={unversionedId:"grimoire/enchantment/intro",id:"grimoire/enchantment/intro",title:"Introduction",description:"Basic knowledge",source:"@site/docs/grimoire/enchantment/intro.md",sourceDirName:"grimoire/enchantment",slug:"/grimoire/enchantment/intro",permalink:"/grimoire/enchantment/intro",draft:!1,editUrl:"https://github.com/phomc/docs/blob/main/docs/grimoire/enchantment/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"grimoireSidebar",previous:{title:"Enchantment",permalink:"/category/enchantment"},next:{title:"Category",permalink:"/grimoire/enchantment/category"}},c={},s=[{value:"Basic knowledge",id:"basic-knowledge",level:2},{value:"Constraint &amp; difference",id:"constraint--difference",level:2},{value:"1. The lack of suggestion for /enchant",id:"1-the-lack-of-suggestion-for-enchant",level:3},{value:"2. Feature addition",id:"2-feature-addition",level:3},{value:"3. No enchantment table support",id:"3-no-enchantment-table-support",level:3},{value:"4. No looting support",id:"4-no-looting-support",level:3},{value:"How to obtain an enchantment?",id:"how-to-obtain-an-enchantment",level:2},{value:"Trading cost",id:"trading-cost",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"basic-knowledge"},"Basic knowledge"),(0,o.kt)("p",null,"Grimoire enchantments behave like any other vanilla enchantments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An enchantment is applicable for a specific set of items"),(0,o.kt)("li",{parentName:"ul"},"An enchantment may conflict with another"),(0,o.kt)("li",{parentName:"ul"},"There is maximum level defined"),(0,o.kt)("li",{parentName:"ul"},"It can be obtained by trading with villager and wandering trader"),(0,o.kt)("li",{parentName:"ul"},"Grimoire enchanted book can be applied to an item using anvil")),(0,o.kt)("h2",{id:"constraint--difference"},"Constraint & difference"),(0,o.kt)("p",null,"Grimoire is designed to be a fully server-side mod. Therefore, the lack of client module is a big barrier to add customized stuffs."),(0,o.kt)("h3",{id:"1-the-lack-of-suggestion-for-enchant"},"1. The lack of suggestion for /enchant"),(0,o.kt)("p",null,'Because there is no "enchantments" synchronization, none of Grimoire enchantments is suggested when using /enchant. When typing the enchantment identifier, it will turn red indicating the "not found" error. ',(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"However, the command can work since the execution happens on the server")),(0,o.kt)("h3",{id:"2-feature-addition"},"2. Feature addition"),(0,o.kt)("p",null,"Any enchantment must follow the vanilla server implementation, there is no modded stuff. Something cool may be achieved using tricks (which likely to impact the server performance)"),(0,o.kt)("h3",{id:"3-no-enchantment-table-support"},"3. No enchantment table support"),(0,o.kt)("p",null,"There are two reasons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'The lack of "enchantments" synchronization as aforementioned'),(0,o.kt)("li",{parentName:"ol"},"It will change the random distribution of vanilla enchantments")),(0,o.kt)("h3",{id:"4-no-looting-support"},"4. No looting support"),(0,o.kt)("p",null,"Will be supported in near future."),(0,o.kt)("h2",{id:"how-to-obtain-an-enchantment"},"How to obtain an enchantment?"),(0,o.kt)("p",null,"Grimoire enchantment can be obtained by revealing a Unidentified Grimoire. See Unidentified Grimoire page for further information."),(0,o.kt)("h2",{id:"trading-cost"},"Trading cost"),(0,o.kt)("p",null,"Unlike vanilla enchantments, the trading cost from Grimoire is fixed for any enchantments in the same rarity group. To precise, the cost is determined by two factors: the rarity and the enchantment level.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Current implementation of original trading cost:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"k = 1 for common\nk = 2 for uncommon\nk = 5 for rare\nk = 10 for very rare\nEmeralds = min(64, k * 2 + enchantLevel * 3 + randomInt(5 + enchantLevel * 5 * k))\nBook = 1\n")),(0,o.kt)("p",null,'Despite the calculation support for "rare" and "very rare" enchantments, trading is currently disabled for these rarity groups.',(0,o.kt)("br",null),"\nThe actual trading cost may be different due to the discount. For further information, check out ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Trading"},"https://minecraft.fandom.com/wiki/Trading")))}d.isMDXComponent=!0}}]);