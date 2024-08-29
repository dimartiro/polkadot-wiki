"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9909],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(n),h=o,g=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67141:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540);const o=function(e){var t,n=e.message,o=(0,r.useState)(!0),a=o[0],s=o[1];return r.createElement(r.Fragment,null,a&&r.createElement("div",{className:"message-box"},r.createElement("button",{className:"close-button",onClick:function(){s(!1)}},"\u2716 "),r.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},10085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=n(58168),o=n(98587),a=(n(96540),n(15680)),s=n(67141),l=["components"],c={id:"learn-controller",title:"Controller Accounts",sidebar_label:"Controller Accounts",description:"Controller Accounts used in Staking.",keywords:["nominated proof of stake","staking","controller"],slug:"../learn-controller"},i=void 0,d={unversionedId:"learn/archive/learn-controller",id:"learn/archive/learn-controller",title:"Controller Accounts",description:"Controller Accounts used in Staking.",source:"@site/../docs/learn/archive/learn-controller.md",sourceDirName:"learn/archive",slug:"/learn/learn-controller",permalink:"/docs/learn/learn-controller",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/archive/learn-controller.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-controller",title:"Controller Accounts",sidebar_label:"Controller Accounts",description:"Controller Accounts used in Staking.",keywords:["nominated proof of stake","staking","controller"],slug:"../learn-controller"},sidebar:"docs",previous:{title:"Redenomination of DOT",permalink:"/docs/learn/learn-redenomination"},next:{title:"Polkadot Developer Portal",permalink:"/docs/build-guide"}},u={},p=[{value:"Stash as Controller",id:"stash-as-controller",level:2},{value:"Stash not as Controller",id:"stash-not-as-controller",level:2}],h={toc:p},g="wrapper";function m(e){var t=e.components,c=(0,o.A)(e,l);return(0,a.yg)(g,(0,r.A)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(s.A,{message:"The content on this page is archived. Controller accounts are deprecated. For more information, see\n[this discussion](https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748).",mdxType:"MessageBox"}),(0,a.yg)("p",null,'Controller accounts were used for staking and were a "less-powerful" version of staking proxies.\nControllers could only sign for unbonding and rebonding funds, nominating and changing the reward\ndestination. The stash account was still used to bond more funds and change the controller.\nController accounts became redundant and added unnecessary complexity to the staking mechanics.'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"controller-accounts",src:n(73768).A,width:"1920",height:"800"})),(0,a.yg)("p",null,"With the setup shown above, the stash account was not entirely isolated. More complicated designs to\nfully isolate the stash account included having both controller and staking proxies (see below)."),(0,a.yg)("h2",{id:"stash-as-controller"},"Stash as Controller"),(0,a.yg)("p",null,"It was unnecessary to have a controller if you had a staking proxy. In this case the stash was also\nset to be the controller, and the account security would not have been compromised. The staking\nproxy was used to sign all staking-relate transactions. Note that you needed to sign with the stash\nto change the staking proxy."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"stash-as-controller",src:n(50515).A,width:"1920",height:"800"})),(0,a.yg)("p",null,'This past situation was similar to the present setup, except that now there is no option to set the\nstash as controller and that the action of "changing the controller" is missing. From a practical\nperspective, we need to use only one account and remember one password to sign for all\nstaking-related transactions. From a security perspective, who controls the staking proxy controls\nour staking actions.'),(0,a.yg)("h2",{id:"stash-not-as-controller"},"Stash not as Controller"),(0,a.yg)("p",null,"If the stash and controller were different accounts, the staking proxy was used to bond more funds\nand change the controller. Thus the staking proxy was used to sign for those transactions that were\nused less often and usually signed by the stash."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"stash-not-as-controller",src:n(29331).A,width:"1920",height:"800"})),(0,a.yg)("p",null,"From a practical perspective, there were two accounts, and we needed to remember two passwords. From\na security perspective, the party who wanted to control our staking actions was required to control\ntwo accounts."))}m.isMDXComponent=!0},50515:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/stash-as-controller-b9840d38c845fce713390da24c60e4a4.png"},73768:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/stash-controller-978875461a51b1f2689c22bdadfde1e4.png"},29331:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/stash-not-as-controller-8a6c27ea620379446da133a42f860029.png"}}]);