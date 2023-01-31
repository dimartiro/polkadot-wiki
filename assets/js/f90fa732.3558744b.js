"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1062],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,b=c["".concat(d,".").concat(h)]||c[h]||p[h]||o;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},71358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"build-data",title:"Data Analytics",sidebar_label:"Data",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},d=void 0,s={unversionedId:"build/build-data",id:"build/build-data",title:"Data Analytics",description:"An overview about building with data analytics",source:"@site/../docs/build/build-data.md",sourceDirName:"build",slug:"/build-data",permalink:"/docs/build-data",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-data.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1671489830,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{id:"build-data",title:"Data Analytics",sidebar_label:"Data",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},sidebar:"docs",previous:{title:"Oracles",permalink:"/docs/build-oracle"},next:{title:"Substrate Connect",permalink:"/docs/build-substrate"}},u={},p=[{value:"Indexing and Querying",id:"indexing-and-querying",level:2},{value:"Subsquid",id:"subsquid",level:3},{value:"SubQuery",id:"subquery",level:3},{value:"Web3Go",id:"web3go",level:3},{value:"The Graph",id:"the-graph",level:3},{value:"Covalent",id:"covalent",level:3},{value:"Polkadot-based Explorers",id:"polkadot-based-explorers",level:3}],c={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The tools that accentuate and aggregate the data within blockchains are integral for a multi-chain\nfuture. Parachains will need robust and secure ways to index and aggregate data, such as a data\naggregation layer."),(0,o.kt)("h2",{id:"indexing-and-querying"},"Indexing and Querying"),(0,o.kt)("h3",{id:"subsquid"},"Subsquid"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://subsquid.io/"},"Subsquid")," is an open-source framework for building tailored GraphQL APIs to\nquery Substrate chain state and history."),(0,o.kt)("p",null,"Subsquid replaces direct gRPC node access with performant Squid archive gateways, allowing quick\nsynchronization of the API with the historical on-chain data."),(0,o.kt)("p",null,"Subsquid-powered APIs support filtering, pagination, union types, interfaces and full-text search\nout-of-the-box, and can be further extended with custom GraphQL resolvers."),(0,o.kt)("h3",{id:"subquery"},"SubQuery"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://subquery.network/"},"SubQuery")," is an indexer that allows for the indexing, transforming, and\nquerying of Substrate chain data to power applications. The decentralized network acts as a\nchain-agnostic data aggregation, indexing, and querying layer between blockchains and applications."),(0,o.kt)("p",null,"SubQuery abstracts away blockchain-specific data idiosyncrasies using the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/subquery/subql"},"SubQuery SDK"),"."),(0,o.kt)("h3",{id:"web3go"},"Web3Go"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web3go.xyz/"},"Web3GO")," is a Polkadot-based open data analytics platform that provides\ninfrastructure and tooling to help users visualize, curate, share, and analyze on-chain data."),(0,o.kt)("h3",{id:"the-graph"},"The Graph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/en/"},"The Graph")," is a layer-1 indexing tool and querying layer for the\ndecentralized web, who announced an integration plan to bring\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-graph-bringing-indexing-and-querying-to-polkadot-6b433e381fe8"},"indexing and querying to Polkadot"),"."),(0,o.kt)("p",null,"The Graph allows developers to build and publish open APIs, called subgraphs. Applications can query\nsubgraphs using ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"."),(0,o.kt)("h3",{id:"covalent"},"Covalent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.covalenthq.com/"},"Covalent")," offers a unified API to understand the data on a blockchain,\nand is currently live on the ",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," network, bringing visibility to\nbillions of blockchain data points to Polkadot via their unified API. The approach to deploy on\nMoonbeam simplifies the development of Polkadot-based blockchain applications as compared to\nimplementing a full parachain or parathread."),(0,o.kt)("p",null,"Covalent captures the entire history of blockchains and offers a way to zoom into data points\nrecorded in smart contracts that are often not accessible."),(0,o.kt)("h3",{id:"polkadot-based-explorers"},"Polkadot-based Explorers"),(0,o.kt)("p",null,"As you can imagine, blockchain explorers also offer data analytics through an interface where users\ncan examine common data points."),(0,o.kt)("p",null,"Some block explorers in the Polkadot ecosystem are listed on the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-tools-index##block-explorers"},"tools page"),"."))}h.isMDXComponent=!0}}]);