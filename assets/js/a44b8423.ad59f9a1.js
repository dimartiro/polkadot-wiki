"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[319],{15680:(e,a,o)=>{o.d(a,{xA:()=>p,yg:()=>g});var t=o(96540);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function d(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=t.createContext({}),l=function(e){var a=t.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):d(d({},a),e)),o},p=function(e){var a=l(e.components);return t.createElement(i.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),b=r,g=m["".concat(i,".").concat(b)]||m[b]||c[b]||n;return o?t.createElement(g,d(d({ref:a},p),{},{components:o})):t.createElement(g,d({ref:a},p))}));function g(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,d=new Array(n);d[0]=b;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:r,d[1]=s;for(var l=2;l<n;l++)d[l]=o[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},24755:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var t=o(58168),r=o(98587),n=(o(96540),o(15680)),d=["components"],s={id:"polkadot-staking-dashboard-pool-member",title:"Polkadot Staking Dashboard (Pool Member)",sidebar_label:"Staking Dashboard (Pool Member)",description:"Polkadot Staking Dashboard (Pool Member) descriptions",keywords:["polkadot","governance","dashboard","dune"],slug:"../polkadot-staking-dashboard-pool-member"},i="Polkadot Staking Dashboard (Pool Member)",l={unversionedId:"general/dune-analytics/polkadot-dashboards/legacy/polkadot-staking-dashboard-pool-member",id:"general/dune-analytics/polkadot-dashboards/legacy/polkadot-staking-dashboard-pool-member",title:"Polkadot Staking Dashboard (Pool Member)",description:"Polkadot Staking Dashboard (Pool Member) descriptions",source:"@site/../docs/general/dune-analytics/polkadot-dashboards/legacy/polkadot-staking-dashboard-pool-member.md",sourceDirName:"general/dune-analytics/polkadot-dashboards/legacy",slug:"/general/dune-analytics/polkadot-dashboards/polkadot-staking-dashboard-pool-member",permalink:"/docs/general/dune-analytics/polkadot-dashboards/polkadot-staking-dashboard-pool-member",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/polkadot-dashboards/legacy/polkadot-staking-dashboard-pool-member.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1717658873,formattedLastUpdatedAt:"Jun 6, 2024",frontMatter:{id:"polkadot-staking-dashboard-pool-member",title:"Polkadot Staking Dashboard (Pool Member)",sidebar_label:"Staking Dashboard (Pool Member)",description:"Polkadot Staking Dashboard (Pool Member) descriptions",keywords:["polkadot","governance","dashboard","dune"],slug:"../polkadot-staking-dashboard-pool-member"}},p={},m=[{value:"View On Dune: Polkadot Staking Dashboard",id:"view-on-dune-polkadot-staking-dashboard",level:2},{value:"For a specific nomination pool member",id:"for-a-specific-nomination-pool-member",level:2}],c={toc:m},b="wrapper";function g(e){var a=e.components,o=(0,r.A)(e,d);return(0,n.yg)(b,(0,t.A)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"polkadot-staking-dashboard-pool-member"},"Polkadot Staking Dashboard (Pool Member)"),(0,n.yg)("h2",{id:"view-on-dune-polkadot-staking-dashboard"},"View On Dune: ",(0,n.yg)("a",{parentName:"h2",href:"https://dune.com/substrate/polkadot-staking-pool-member"},"Polkadot Staking Dashboard")),(0,n.yg)("p",null,"We're using ",(0,n.yg)("strong",{parentName:"p"},"default parameters")," for all of the following parameterized charts. Visit our\ndashboard on Dune to use the ",(0,n.yg)("strong",{parentName:"p"},"user_ss58")," parameter and analyze a specific referendum."),(0,n.yg)("h2",{id:"for-a-specific-nomination-pool-member"},"For a specific nomination pool member"),(0,n.yg)("p",null,"This dashboard shows raw data of member activity within the pool"),(0,n.yg)("p",null,"Member Pool Fee: 365 ","*"," member_staking_rewards / member_bonded"),(0,n.yg)("p",null,"Source Table: ",(0,n.yg)("strong",{parentName:"p"},"polkadot.stakings")," , MaterializedView:\n",(0,n.yg)("a",{parentName:"p",href:"https://dune.com/queries/3327479"},(0,n.yg)("strong",{parentName:"a"},"dune.substrate.result_polkadot_poolmembers"))),(0,n.yg)("p",null,"Go back to ",(0,n.yg)("a",{parentName:"p",href:"https://dune.com/substrate/polkadot-staking"},(0,n.yg)("strong",{parentName:"a"},"Polkadot Staking Home"))),(0,n.yg)("iframe",{src:"https://dune.com/embeds/3341609/5599266/",height:"350",width:"100%"}),(0,n.yg)("iframe",{src:"https://dune.com/embeds/3341609/5599280/",height:"350",width:"100%"}),(0,n.yg)("iframe",{src:"https://dune.com/embeds/3341609/5599290/",height:"350",width:"100%"}),(0,n.yg)("iframe",{src:"https://dune.com/embeds/3341609/5599317/",height:"350",width:"100%"}),(0,n.yg)("iframe",{src:"https://dune.com/embeds/3343369/5602279/",height:"350",width:"100%"}),(0,n.yg)("iframe",{src:"https://dune.com/embeds/3343707/5602761/",height:"350",width:"100%"}))}g.isMDXComponent=!0}}]);