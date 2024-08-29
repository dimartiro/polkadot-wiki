"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1914],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>b});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,b=c["".concat(l,".").concat(u)]||c[u]||g[u]||o;return n?t.createElement(b,s(s({ref:r},d),{},{components:n})):t.createElement(b,s({ref:r},d))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57324:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=n(58168),a=n(98587),o=(n(96540),n(15680)),s=["components"],i={id:"learn-snowbridge",title:"Snowbridge",sidebar_label:"Snowbridge",description:"Overview of Snowbridge by Snowfork",keywords:["Bridge","XCM","Bridge Hub","Snowbridge","Snowfork"],slug:"../learn-snowbridge"},l=void 0,p={unversionedId:"learn/learn-snowbridge",id:"learn/learn-snowbridge",title:"Snowbridge",description:"Overview of Snowbridge by Snowfork",source:"@site/../docs/learn/learn-snowbridge.md",sourceDirName:"learn",slug:"/learn-snowbridge",permalink:"/docs/learn-snowbridge",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-snowbridge.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1724864659,formattedLastUpdatedAt:"Aug 28, 2024",frontMatter:{id:"learn-snowbridge",title:"Snowbridge",sidebar_label:"Snowbridge",description:"Overview of Snowbridge by Snowfork",keywords:["Bridge","XCM","Bridge Hub","Snowbridge","Snowfork"],slug:"../learn-snowbridge"},sidebar:"docs",previous:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-dot-ksm-bridge"},next:{title:"Hyperbridge",permalink:"/docs/learn-hyperbridge"}},d={},c=[{value:"Trustlessness in Snowbridge",id:"trustlessness-in-snowbridge",level:2},{value:"Applications",id:"applications",level:2},{value:"Accessing &amp; Using Snowbridge",id:"accessing--using-snowbridge",level:2}],g={toc:c},u="wrapper";function b(e){var r=e.components,n=(0,a.A)(e,s);return(0,o.yg)(u,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Snowbridge by ",(0,o.yg)("a",{parentName:"p",href:"https://snowfork.com/"},"Snowfork")," is a general-purpose, trustless bridge between Polkadot and Ethereum. It\nutilizes the ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-bridge-hub"},"Bridge Hub system parachain")," to establish a connection to its\nrelayers, allowing for permissionless messaging between Ethereum and Polkadot."),(0,o.yg)("h2",{id:"trustlessness-in-snowbridge"},"Trustlessness in Snowbridge"),(0,o.yg)("p",null,"Trustlessness here is defined in the sense that the users do not need to trust any particular\nindividuals or organizations, but rather only the mathematics, code, cryptography, and protocol. An\nexample of a system which implies a high level of trust ",(0,o.yg)("strong",{parentName:"p"},"trust")," would be that of a bridge which is\ncontrolled via a multi-signature scheme, wherein you must trust the cosignatories."),(0,o.yg)("p",null,"Basic assumptions are always needed in principle when defining a trustless system, as a completely\ntrustless setup cannot always be guaranteed."),(0,o.yg)("p",null,"With Snowbridge, a sender can always run a\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.snowbridge.network/architecture/relayers"},"relayer")," to ensure that their cross-chain\ntransaction is successful."),(0,o.yg)("h2",{id:"applications"},"Applications"),(0,o.yg)("p",null,"Snowbridge currently supports\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.snowbridge.network/applications/token-transfers"},"two-way token transfers")," between\nEthereum and Polkadot parachain."),(0,o.yg)("h2",{id:"accessing--using-snowbridge"},"Accessing & Using Snowbridge"),(0,o.yg)("p",null,"Snowbridge can be accessed through ",(0,o.yg)("a",{parentName:"p",href:"https://app.snowbridge.network/"},"the web app"),", where you may\ntrack ",(0,o.yg)("a",{parentName:"p",href:"https://app.snowbridge.network/status"},"processing times of transactions,"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://app.snowbridge.network/history"},"recent transfers"),", and other information about the bridge's\noverall status."),(0,o.yg)("p",null,"To create transfers, you may visit the ",(0,o.yg)("a",{parentName:"p",href:"https://app.snowbridge.network/"},"transfer page.")))}b.isMDXComponent=!0}}]);