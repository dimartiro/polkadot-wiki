"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3316],{15680:(e,s,n)=>{n.d(s,{xA:()=>u,yg:()=>p});var r=n(96540);function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function a(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?a(Object(n),!0).forEach((function(s){t(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function i(e,s){if(null==e)return{};var n,r,t=function(e,s){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),c=function(e){var s=r.useContext(l),n=s;return e&&(n="function"==typeof e?e(s):o(o({},s),e)),n},u=function(e){var s=c(e.components);return r.createElement(l.Provider,{value:s},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},y=r.forwardRef((function(e,s){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),y=t,p=g["".concat(l,".").concat(y)]||g[y]||d[y]||a;return n?r.createElement(p,o(o({ref:s},u),{},{components:n})):r.createElement(p,o({ref:s},u))}));function p(e,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var l in s)hasOwnProperty.call(s,l)&&(i[l]=s[l]);i.originalType=e,i[g]="string"==typeof e?e:t,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6812:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var r=n(58168),t=n(98587),a=(n(96540),n(15680)),o=["components"],i={id:"learn-xcm-docs-reference-glossary",title:"XCM Glossary",sidebar_label:"XCM Glossary",description:"XCM Glossary.",keywords:["xcm","cross-consensus messaging","reference","glossary"],slug:"../reference-glossary"},l="Glossary",c={unversionedId:"learn/xcm/reference/learn-xcm-docs-reference-glossary",id:"learn/xcm/reference/learn-xcm-docs-reference-glossary",title:"XCM Glossary",description:"XCM Glossary.",source:"@site/../docs/learn/xcm/reference/glossary.md",sourceDirName:"learn/xcm/reference",slug:"/learn/xcm/reference-glossary",permalink:"/docs/learn/xcm/reference-glossary",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/reference/glossary.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1721404843,formattedLastUpdatedAt:"Jul 19, 2024",frontMatter:{id:"learn-xcm-docs-reference-glossary",title:"XCM Glossary",sidebar_label:"XCM Glossary",description:"XCM Glossary.",keywords:["xcm","cross-consensus messaging","reference","glossary"],slug:"../reference-glossary"},sidebar:"docs",previous:{title:"All XCVM Registers",permalink:"/docs/learn/xcm/reference-xcvm-registers"},next:{title:"Polkadot Comparisons",permalink:"/docs/learn-comparisons-index"}},u={},g=[{value:"XCM (Cross-Consensus Messaging)",id:"xcm-cross-consensus-messaging",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Consensus system",id:"consensus-system",level:2},{value:"MultiLocation",id:"multilocation",level:2},{value:"Junction",id:"junction",level:2},{value:"MultiAsset",id:"multiasset",level:2},{value:"Sovereign account",id:"sovereign-account",level:2},{value:"Teleport",id:"teleport",level:2},{value:"Reserve asset transfer",id:"reserve-asset-transfer",level:2},{value:"XCVM",id:"xcvm",level:2},{value:"Holding register",id:"holding-register",level:2},{value:"Barrier",id:"barrier",level:2},{value:"UMP (Upward Message Passing)",id:"ump-upward-message-passing",level:2},{value:"DMP (Downward Message Passing)",id:"dmp-downward-message-passing",level:2},{value:"XCMP (Cross-Consensus Message Passing)",id:"xcmp-cross-consensus-message-passing",level:2},{value:"HRMP (Horizontal Message Passing)",id:"hrmp-horizontal-message-passing",level:2}],d={toc:g},y="wrapper";function p(e){var s=e.components,n=(0,t.A)(e,o);return(0,a.yg)(y,(0,r.A)({},d,n,{components:s,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"glossary"},"Glossary"),(0,a.yg)("h2",{id:"xcm-cross-consensus-messaging"},"XCM (Cross-Consensus Messaging)"),(0,a.yg)("p",null,"A messaging format meant to communicate intentions between consensus systems. XCM could also refer\nto a single message."),(0,a.yg)("h2",{id:"instructions"},"Instructions"),(0,a.yg)("p",null,"XCMs are composed of a sequence of instructions. Each instruction aims to convey a particular\nintention. There are instructions for transferring and locking assets, handling fees, calling\narbitrary blobs, and more."),(0,a.yg)("h2",{id:"consensus-system"},"Consensus system"),(0,a.yg)("p",null,"A system that can reach any kind of consensus. For example, relay chains, parachains, smart\ncontracts."),(0,a.yg)("h2",{id:"multilocation"},"MultiLocation"),(0,a.yg)("p",null,"A way of addressing consensus systems. These could be relative or absolute."),(0,a.yg)("h2",{id:"junction"},"Junction"),(0,a.yg)("p",null,"The different ways of descending down a ",(0,a.yg)("inlineCode",{parentName:"p"},"MultiLocation")," hierarchy. A junction can be a Parachain, an\nAccount, or more."),(0,a.yg)("h2",{id:"multiasset"},"MultiAsset"),(0,a.yg)("p",null,"A way of identifying assets in the same or another consensus system, by using a ",(0,a.yg)("inlineCode",{parentName:"p"},"MultiLocation"),"."),(0,a.yg)("h2",{id:"sovereign-account"},"Sovereign account"),(0,a.yg)("p",null,"An account on a consensus system that is controlled by an account in another consensus system."),(0,a.yg)("h2",{id:"teleport"},"Teleport"),(0,a.yg)("p",null,"A way of transferring assets between two consensus systems without the need of a third party. It\nconsists of the sender system burning the asset that wants to be sent over and the recipient minting\nan equivalent amount of that asset. It requires a lot of trust between the two systems, since\nfailure to mint or burn will reduce the total issuance of the token."),(0,a.yg)("h2",{id:"reserve-asset-transfer"},"Reserve asset transfer"),(0,a.yg)("p",null,"A way of transferring assets between two consensus systems that don't trust each other, by using a\nthird system they both trust, called the reserve. The real asset only exists on the reserve, both\nsender and recipient only deal with derivatives. It consists of the sender burning a certain amount\nof derivatives, telling the reserve to move real assets from its sovereign account to the\ndestination's sovereign account, and then telling the recipient to mint the right amount of\nderivatives."),(0,a.yg)("h2",{id:"xcvm"},"XCVM"),(0,a.yg)("p",null,"The virtual machine behind XCM. Every XCM is an XCVM programme. Holds state in registers."),(0,a.yg)("h2",{id:"holding-register"},"Holding register"),(0,a.yg)("p",null,"An XCVM register used to hold arbitrary ",(0,a.yg)("inlineCode",{parentName:"p"},"Asset"),"s during the execution of an XCVM programme."),(0,a.yg)("h2",{id:"barrier"},"Barrier"),(0,a.yg)("p",null,"An XCM executor configuration item that works as a firewall for incoming XCMs. All XCMs have to pass\nthe barrier to be executed, else they are dropped. It can be used for whitelisting only certain\ntypes or messages or messages from certain senders."),(0,a.yg)("h2",{id:"ump-upward-message-passing"},"UMP (Upward Message Passing)"),(0,a.yg)("p",null,"Transport-layer protocol that allows parachains to send messages upwards to their relay chain."),(0,a.yg)("h2",{id:"dmp-downward-message-passing"},"DMP (Downward Message Passing)"),(0,a.yg)("p",null,"Transport-layer protocol that allows the relay chain to send messages downwards to one of their\nparachains."),(0,a.yg)("h2",{id:"xcmp-cross-consensus-message-passing"},"XCMP (Cross-Consensus Message Passing)"),(0,a.yg)("p",null,"Transport-layer protocol that allows parachains to send messages between themselves, without going\nthrough the relay chain."),(0,a.yg)("h2",{id:"hrmp-horizontal-message-passing"},"HRMP (Horizontal Message Passing)"),(0,a.yg)("p",null,"Transport-layer protocol that allows a parachain to send messages to a sibling parachain going\nthrough the relay chain. It's a precursor to XCMP, also known as XCMP-lite. It uses a mixture of UMP\nand VMP."))}p.isMDXComponent=!0}}]);