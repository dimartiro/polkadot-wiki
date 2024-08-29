"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6118],{15680:(e,a,n)=>{n.d(a,{xA:()=>h,yg:()=>u});var t=n(96540);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},h=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?t.createElement(u,i(i({ref:a},h),{},{components:n})):t.createElement(u,i({ref:a},h))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3494:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(58168),o=n(98587),s=(n(96540),n(15680)),i=["components"],r={id:"learn-comparisons-avalanche",title:"Polkadot vs. Avalanche",sidebar_label:"Avalanche",description:"Comparison between Polkadot and Avalanche.",keywords:["avalance","proof of stake","comparison"],slug:"../learn-comparisons-avalanche"},l=void 0,c={unversionedId:"learn/learn-comparisons-avalanche",id:"learn/learn-comparisons-avalanche",title:"Polkadot vs. Avalanche",description:"Comparison between Polkadot and Avalanche.",source:"@site/../docs/learn/learn-comparisons-avalanche.md",sourceDirName:"learn",slug:"/learn-comparisons-avalanche",permalink:"/docs/learn-comparisons-avalanche",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-comparisons-avalanche.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1718028821,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"learn-comparisons-avalanche",title:"Polkadot vs. Avalanche",sidebar_label:"Avalanche",description:"Comparison between Polkadot and Avalanche.",keywords:["avalance","proof of stake","comparison"],slug:"../learn-comparisons-avalanche"},sidebar:"docs",previous:{title:"Cosmos",permalink:"/docs/learn-comparisons-cosmos"},next:{title:"Other Comparisons",permalink:"/docs/learn-comparisons"}},h={},d=[{value:"Architecture",id:"architecture",level:2},{value:"P-chain (Platform)",id:"p-chain-platform",level:4},{value:"X-chain (Exchange)",id:"x-chain-exchange",level:4},{value:"C-chain (Contracts)",id:"c-chain-contracts",level:4},{value:"Subnets or sub-networks",id:"subnets-or-sub-networks",level:4},{value:"Consensus",id:"consensus",level:2},{value:"Snowball",id:"snowball",level:3},{value:"DAG(Directed Acyclic Graph)",id:"dagdirected-acyclic-graph",level:3},{value:"Staking Mechanics",id:"staking-mechanics",level:2},{value:"Message Passing",id:"message-passing",level:2},{value:"Governance",id:"governance",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],p={toc:d},m="wrapper";function u(e){var a=e.components,r=(0,o.A)(e,i);return(0,s.yg)(m,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},"To keep the content on this page factually correct and up-to-date,\n",(0,s.yg)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki#contributing-to-documentation"},"contributions")," are welcome.")),(0,s.yg)("p",null,"Polkadot and Avalanche both have an architecture that allows for application-specific blockchains to\nbe designed and connected to a primary network. In Polkadot, the primary network is the Relay-chain\nand Avalanche does this with 3 main chains - the P-chain, X-chain, and C-chain. Similar to how\nPolkadot has its Parachains that connect to the Relay-chain, Avalanche has what\u2019s called\n",(0,s.yg)("a",{parentName:"p",href:"https://docs.avax.network/subnets"},"subnets"),". Similar to Polkadot, Avalanche also uses a PoS\nmechanism for achieving consensus. The validators stake their AVAX tokens in order to participate in\nthe PoS system and secure the network."),(0,s.yg)("h2",{id:"architecture"},"Architecture"),(0,s.yg)("p",null,"Avalanche's architecture separates the responsibility of a layer-1 smart contract platform into\nthree chains. This allows for a separation of concern over validators and consensus, transactions,\nand smart contract execution. Avalanche uses a DAG (Directed Acyclic Graph) structure for one of its\nchains which is non-linear. Polkadot uses the linear chain structure similar to Bitcoin and\nEthereum. Smart contracts in Polkadot are implemented on\n",(0,s.yg)("a",{parentName:"p",href:"build-smart-contracts#parachains"},"parachains"),". Polkadot being a layer-0 blockchain, is not a smart\ncontract platform and does not have plans to support them natively."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"avalanche-network",src:n(70013).A,width:"841",height:"479"})),(0,s.yg)("p",null,"Image source: ",(0,s.yg)("a",{parentName:"p",href:"https://docs.avax.network/"},"Avalanche docs"),"."),(0,s.yg)("h4",{id:"p-chain-platform"},"P-chain (Platform)"),(0,s.yg)("p",null,"The P-chain is responsible for maintaining the validator set and securing the network. AVAX token\nholders can spin up their own nodes and become validators by staking their tokens. Similar to the\nNPoS system that Polkadot uses, Avalanche uses a Delegated PoS which allows token holders to also\ndelegate their token stake to existing validators instead of running their own nodes."),(0,s.yg)("h4",{id:"x-chain-exchange"},"X-chain (Exchange)"),(0,s.yg)("p",null,"The X-chain is responsible for the transaction layer of the Avalanche blockchain. It uses a UTXO\nmodel like Bitcoin whereas Polkadot uses an account model like Ethereum. This is the only chain that\nimplements the DAG (Directed Acyclic Graph) model for its blockchain, making this the fastest chain\non the Avalanche network. This chain does not support smart contract execution."),(0,s.yg)("h4",{id:"c-chain-contracts"},"C-chain (Contracts)"),(0,s.yg)("p",null,"The C-chain is where the most activity will happen on the Avalanche network. It allows for different\nvirtual machines to execute smart contract code. Out of the box, it has support for EVM and AVM\n(Avalanche VM). C-Chain runs a fork of go-ethereum called coreth that has the networking and\nconsensus portions replaced with Avalanche equivalents."),(0,s.yg)("p",null,"As Polkadot does not have a smart contract layer out of the box, the EVM and WASM smart contract\nabilities lie in the Parachain layers. This is a major difference between Polkadot and Avalanche.\nThe smart-contract abilities of Avalanche are baked into its three-chain model."),(0,s.yg)("h4",{id:"subnets-or-sub-networks"},"Subnets or sub-networks"),(0,s.yg)("p",null,"Avalanche defines a subnet as a dynamic set of validators that achieve consensus on a set of\nblockchains. In Polkadot's terminology, Subnets can be viewed as public or private blockchain\nruntimes that can be built on top of the primary network and allow a subset of the validators to\nvalidate these runtimes. Similar to the Parachains on Polkadot, Subnets provide the freedom to\nchoose the transaction fee model, tokenomics, and custom compile rules. One or many validators can\nstart validating a subnet runtime, effectively becoming a subset of the overall validator set of the\nPrimary Network."),(0,s.yg)("h2",{id:"consensus"},"Consensus"),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"avalanche-consensus-protocols",src:n(59366).A,width:"744",height:"453"})),(0,s.yg)("p",null,"Image source:\n",(0,s.yg)("a",{parentName:"p",href:"https://gyuho.dev/nakamoto-bitcoin-vs-snow-avalanche-consensus.html#snow-family-protocols"},"gyuho.dev"),"."),(0,s.yg)("p",null,"Avalanche consensus uses a family of protocols to achieve security, liveness, and finality. These\nare known as the Snow","*"," protocols. This group of protocols composed together uses both classical and\nNakamoto consensus as well as a Delegated Proof-of-Stake system for its block creators."),(0,s.yg)("p",null,"The ",(0,s.yg)("a",{parentName:"p",href:"https://docs.avax.network/overview/getting-started/avalanche-consensus"},"Snow family")," is a\nhierarchical collection of systems used to reach finality on Avalanche:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Slush"),(0,s.yg)("li",{parentName:"ul"},"Snowflake"),(0,s.yg)("li",{parentName:"ul"},"Snowball"),(0,s.yg)("li",{parentName:"ul"},"Avalanche"),(0,s.yg)("li",{parentName:"ul"},"Snowman"),(0,s.yg)("li",{parentName:"ul"},"Slushie")),(0,s.yg)("p",null,"Compared to Polkadot, Avalanche uses an asynchronous hybrid system that is based on a classical and\nNakomoto approach. Polkadot uses a synchronous hybrid model that combines\n",(0,s.yg)("a",{parentName:"p",href:"learn-consensus#block-production-babe"},"BABE")," and\n",(0,s.yg)("a",{parentName:"p",href:"learn-consensus#finality-gadget-grandpa"},"GRANDPA"),", where BABE is the algorithm used to build blocks\nin a probabilistic way, and GRANDPA is a finality mechanism that uses a deterministic approach to\nadding blocks to the longest chain. In the end, validators agree to whole chains, rather than single\nnew blocks."),(0,s.yg)("h3",{id:"snowball"},"Snowball"),(0,s.yg)("p",null,"The snowball protocol is an algorithm that nodes use to come to a consensus. Each node continuously\nqueries x number of validators and takes the majority consensus and adopts it as its own. This\nmethod, in normal circumstances, will lead to the network reaching a consensus. The scalability of\nSnowball is promising, as the number of participants in the network grows, the number of consensus\nmessages being passed around remains the same. Nodes will query no more than 20 nodes at a given\ntime."),(0,s.yg)("h3",{id:"dagdirected-acyclic-graph"},"DAG(Directed Acyclic Graph)"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"DAGs")," are graphs consisting of vertices and\nedges. In Avalanche they are used for ",(0,s.yg)("strong",{parentName:"p"},"partial ordering")," of decisions, such as transactions.\nVertices point to each other using edges, and when ordered topologically vertices and edges create a\nsequence. Edges in the case of Avalanche can be conflicting, and nodes will use the snowball\nalgorithm to make decisions about which edges to keep and which to not."),(0,s.yg)("h2",{id:"staking-mechanics"},"Staking Mechanics"),(0,s.yg)("p",null,"Avalanche uses a Delegated Proof-of-Stake mechanism without any ",(0,s.yg)("a",{parentName:"p",href:"/docs/learn-offenses"},"slashing"),". The\nbarrier to entry for staking as a full node validator is 2500 AVAX, and 25 AVAX to become a\ndelegator. With a minimum stake period being two weeks and a maximum period being a year, for both\nvalidators and delegators. It is not clear from the Avalanche documentation what happens after a\nyear, it is likely that validators will have to re-stake and start a new period. Validators acquire\npoints for uptime and correctness of their work, and the remuneration of rewards depends on that."),(0,s.yg)("p",null,"In Polkadot the minimum stake needed to be a validator is variable, same for being a nominator. The\ntrue minimum need to be competitive enough to be included in the active set for validators, or\nsuccessfully being chosen as a nominator depends on the minimum staked amounts on the network at a\ngiven time. Read more about this in the ",(0,s.yg)("a",{parentName:"p",href:"learn-staking"},"staking page"),"."),(0,s.yg)("h2",{id:"message-passing"},"Message Passing"),(0,s.yg)("p",null,"Avalanche does not have a native trustless message-passing mechanism. Instead, it relies on bridges.\nThough, because it is an EVM-compatible protocol, it's able to interoperate at a token level.\nHowever, subnets do not have a messaging layer out of the box. Polkadot, with its ",(0,s.yg)("a",{parentName:"p",href:"learn-xcm"},"XCM"),"\nand ",(0,s.yg)("a",{parentName:"p",href:"learn-xcm#xcmp-cross-chain-message-passing"},"XCMP")," messaging protocols, allows for a native and\ntrustless messaging scheme, thus supporting the composability of chains and enabling the development\nof powerful cross-chain applications."),(0,s.yg)("h2",{id:"governance"},"Governance"),(0,s.yg)("p",null,"According to its whitepaper, Avalanche plans to have an on-chain governance mechanism. It currently\ndoes not have an on-chain or off-chain system in production. Its governance system will limited to\nupdating only a few key protocol parameters which include:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Staking amount:")," This value defines the minimal stake required to be placed as bond before\nparticipating in the system."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Minimum staking time for a node:")," The minimal amount of time required for a node to stake into\nthe system."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Maximum staking time for a node:")," The maximal amount of time a node can stake."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Minting rate:")," Reward rate function, also referred to as minting rate, determines the reward a\nparticipant can claim as a function of their staking amount given some number of x publicly\ndisclosed nodes under its ownership, over a period of t consecutive ",(0,s.yg)("em",{parentName:"li"},"minimal staking time"),"\ntimeframes, such that t",(0,s.yg)("em",{parentName:"li"},"minimal staking time")," \u2264 ",(0,s.yg)("em",{parentName:"li"},"maximum staking time"),"."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Transaction fee amount:")," The fee structure, which is a set of governable fees parameters that\nspecify costs to various transactions.")),(0,s.yg)("p",null,"Limiting the governance functionality is a design choice to increase predictability and safety."),(0,s.yg)("p",null,"Polkadot's governance mechanism has been in production from the very beginning and was used to\nslowly release functionality and decentralize the initial network. It is also not limited to a few\nparameters and in fact, the whole runtime is subject to change via protocol making Polkadot a\nmeta-protocol."),(0,s.yg)("h2",{id:"upgrades"},"Upgrades"),(0,s.yg)("p",null,"The upgrades to Avalanche are administered by the protocol developers at\n",(0,s.yg)("a",{parentName:"p",href:"https://www.avalabs.org/"},"Ava Labs"),". On Polkadot, the forkless upgrades are administered and\ndeployed through the on-chain governance. When performing upgrades, every single validator on the\nSubnet will need to perform the identical upgrade. This requires a co-ordination effort among the\nValidators of the Subnet. On Polkadot, upgrades to Parachains can be deployed automatically without\nany coordination with the Validators on the relaychain."),(0,s.yg)("h2",{id:"conclusion"},"Conclusion"),(0,s.yg)("p",null,"Avalanche has made some design decisions that allow for an improved smart-contract development\nenvironment in which protocol engineers can have the freedom to create their own blockchains and\ninclude them in the Avalanche ecosystem via subnets. The trade-offs are that the autonomy of design\nis limited and blockchains have to buy into the design decisions of Avalanche's main chains. Unlike\nparachains on Polkadot, Subnets are not able to share the security of the main chains. In addition\nto utilizing block finality and security of the Relay-chain, parachains on Polkadot use\n",(0,s.yg)("a",{parentName:"p",href:"learn-xcm"},"XCM")," to pass native trustless messages, instead of having to rely on multiple bridging\nsolutions. However, Subnets are easy to launch when compared to parachains, given that they only\nneed a recommended minimum of 5 validators, which make the costs of launch predictable. Avalanche\nhas plans to implement shared security, interoperability, composability and on-chain governance\nfeatures which are already offered by Polkadot."),(0,s.yg)("h2",{id:"references"},"References"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("a",{parentName:"li",href:"https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bbf8b10d1eb01e7e16_Avalanche%20Platform%20Whitepaper.pdf"},"The Avalanche Platform Whitepaper")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("a",{parentName:"li",href:"https://assets.website-files.com/5d80307810123f5ffbb34d6e/6009805681b416f34dcae012_Avalanche%20Consensus%20Whitepaper.pdf"},"The Avalanche Consensus Whitepaper")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("a",{parentName:"li",href:"https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bc56430d6b8792b8d1_Avalanche%20Native%20Token%20Dynamics.pdf"},"The AVAX Token Dynamics Paper")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("a",{parentName:"li",href:"https://gyuho.dev/nakamoto-bitcoin-vs-snow-avalanche-consensus.html#what-is-snow-consensus"},"Nakomoto vs Snow consensus"))))}u.isMDXComponent=!0},59366:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/avalanche-consensus-protocols-5e520b603bd2f9234af02d86ab695cd3.png"},70013:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/avalanche-network-175669932c1264549c67806669b3d84d.png"}}]);