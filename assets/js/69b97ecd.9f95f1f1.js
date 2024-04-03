"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return a?o.createElement(u,i(i({ref:t},m),{},{components:a})):o.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},75217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations",description:"Learn about the different Polkadot implementations.",keywords:["implementations","wasm","meta protocol"],slug:"../learn-implementations"},s=void 0,p={unversionedId:"learn/learn-implementations",id:"learn/learn-implementations",title:"Polkadot Implementations",description:"Learn about the different Polkadot implementations.",source:"@site/../docs/learn/learn-implementations.md",sourceDirName:"learn",slug:"/learn-implementations",permalink:"/docs/learn-implementations",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-implementations.md",tags:[],version:"current",lastUpdatedBy:"gui",lastUpdatedAt:1712067554,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{id:"learn-implementations",title:"Polkadot Implementations",sidebar_label:"Polkadot Implementations",description:"Learn about the different Polkadot implementations.",keywords:["implementations","wasm","meta protocol"],slug:"../learn-implementations"}},m={},d=[{value:"A Wasm-based Meta Protocol",id:"a-wasm-based-meta-protocol",level:2},{value:"Parity Technologies: A Rustic Vision for Polkadot",id:"parity-technologies-a-rustic-vision-for-polkadot",level:3},{value:"Alternative Implementations",id:"alternative-implementations",level:2},{value:"ChainSafe Systems: Gossamer",id:"chainsafe-systems-gossamer",level:3},{value:"SORAMITSU: Kagome",id:"soramitsu-kagome",level:3},{value:"Polkadot-JS Project: Polkadot-JS",id:"polkadot-js-project-polkadot-js",level:3},{value:"Other implementations that have received grants",id:"other-implementations-that-have-received-grants",level:3}],c={toc:d},h="wrapper";function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(h,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot is the flagship protocol of the ",(0,r.kt)("a",{parentName:"p",href:"https://web3.foundation/"},"Web3 Foundation"),", and while\nPolkadot can be defined as a protocol, a network, or, a type of infrastructure, it best serves to be\nan ecosystem. For true decentralization, there should be multiple implementations of Polkadot. Even\nbeing a ",(0,r.kt)("em",{parentName:"p"},"layer 0")," protocol that attempts to build an interconnected, interoperable and secure Web3\necosystem, Polkadot is a complex piece of software, and its formal implementation depends on being\nbuilt on top of a tech stack."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This page will focus on implementations of ",(0,r.kt)("strong",{parentName:"p"},"Polkadot's underlying infrastructure")," (i.e. runtime,\nhost).")),(0,r.kt)("h2",{id:"a-wasm-based-meta-protocol"},"A Wasm-based Meta Protocol"),(0,r.kt)("p",null,"Polkadot uses WebAssembly (",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm"),') as a "meta-protocol". This allows for the use of\nany programming language that can be interpreted or compiled into Wasm - being the driver for\nPolkadot\'s multiple implementations.'),(0,r.kt)("h3",{id:"parity-technologies-a-rustic-vision-for-polkadot"},"Parity Technologies: A ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot"},"Rustic Vision for Polkadot")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity Technologies")," is often in the spotlight for its core development of\nPolkadot, and while this is true, Parity Polkadot also serves to be the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," client. Parity Tech has a rustic vision for Polkadot through the\nuse of their main product, ",(0,r.kt)("a",{parentName:"p",href:"https://www.substrate.io/"},"Substrate"),". Substrate can also be used for\ndifferent chains and different networks, but in the case of Polkadot, Substrate acts as the tech\nstack that is used to implement Polkadot's sharded heterogeneous multi-chain model."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parity Tech focuses on blockchain infrastructure for the decentralised web, where they initially\noffered an Ethereum client (Parity Ethereum). Parity Tech was hired by the Web3 Foundation to\nfoster the development of the first implementation of Polkadot.")),(0,r.kt)("p",null,"Polkadot can support parachains that are not built on Substrate, In particular, as long as the state\ntransition function (STF) of a shard is abstratced into Wasm, the validators on the network can\nexecute the STF within a Wasm environment."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: chains can also be built on Substrate and are not required to be deployed onto Polkadot.\nMore on Polkadot's architecture is available on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-architecture"},"Architecture")," page.")),(0,r.kt)("p",null,"With this in mind, we can point to some other implementations of Polkadot. Having different\nimplementations inherently promotes the decentralization of the technology and progresses it in a\nmeaningful way. Other implementations of Polkadot that exist, many of whom have received a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/grants"},"grant")," from the Web3 Foundation, are in programming languages like Go, C++,\nand JavaScript, which are all languages that can be compiled in Wasm."),(0,r.kt)("p",null,"As stated in the Soramitsu grant announcement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"It is critically important to have multiple implementations of the Polkadot protocol for a number\nof reasons, including decentralization, knowledge dispersion, and better definitions of the\nprotocol... Multiple implementations of Polkadot improves network resilience and adds to the\ndecentralization of the network. The governance of the network is more democratized when multiple\nteams build clients that run the nodes in the network.\n")),(0,r.kt)("h2",{id:"alternative-implementations"},"Alternative Implementations"),(0,r.kt)("h3",{id:"chainsafe-systems-gossamer"},"ChainSafe Systems: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/ChainSafe/gossamer#a-go-implementation-of-the-polkadot-host"},"Gossamer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gossamer")," is a Go implementation being built by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChainSafeSystems"},"ChainSafe Systems"),", a blockchain R&D firm based in Toronto,\nCanada that is also building an Eth2.0 Serenity client. They were awarded a grant from the Web3\nFoundation."),(0,r.kt)("h3",{id:"soramitsu-kagome"},"SORAMITSU: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/soramitsu/kagome#intro"},"Kagome")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kagome")," is a C++ implementation of the Polkadot Host being built by\n",(0,r.kt)("a",{parentName:"p",href:"https://soramitsu.co.jp/"},"Soramitsu"),", a Japanese digital identity company that previously developed\n",(0,r.kt)("a",{parentName:"p",href:"https://iroha.tech"},"Hyperledger Iroha"),". They were awarded a grant from the Web3 Foundation and\nreleased the first version of Kagome in April 2020. As part of the process, they also released a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soramitsu/libp2p-grpc"},"libp2p")," networking layer in C++."),(0,r.kt)("h3",{id:"polkadot-js-project-polkadot-js"},"Polkadot-JS Project: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/polkadot-js"},"Polkadot-JS")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Polkadot-JS")," is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/client"},"JavaScript client")," and offers a\ncollection of tools, interfaces, and libraries for Polkadot and Substrate."),(0,r.kt)("h3",{id:"other-implementations-that-have-received-grants"},"Other implementations that have received grants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/opennetsys/golkadot"},"Golkadot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-java"},"Polkadot in Java"))),(0,r.kt)("p",null,"While the ecosystem continues to grow rapidly, the continued development of alternative\nimplementations will only make Polkadot stronger. Consider becoming a contributor to the ecosystem,\nand learn about the how you can receieve a ",(0,r.kt)("a",{parentName:"p",href:"/docs/grants"},"grant")," for your development."))}u.isMDXComponent=!0}}]);