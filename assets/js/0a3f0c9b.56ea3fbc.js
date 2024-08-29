"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6555],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),u=r,y=g["".concat(s,".").concat(u)]||g[u]||c[u]||o;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67141:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(96540);const r=function(e){var t,a=e.message,r=(0,n.useState)(!0),o=r[0],i=r[1];return n.createElement(n.Fragment,null,o&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},50776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(58168),r=a(98587),o=(a(96540),a(15680)),i=a(67141),l=["components"],s={id:"ledger",title:"Using the Polkadot Ledger Apps",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},p=void 0,d={unversionedId:"general/ledger",id:"general/ledger",title:"Using the Polkadot Ledger Apps",description:"Use the Polkadot Ledger Application.",source:"@site/../docs/general/ledger.md",sourceDirName:"general",slug:"/ledger",permalink:"/docs/ledger",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/ledger.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1721822512,formattedLastUpdatedAt:"Jul 24, 2024",frontMatter:{id:"ledger",title:"Using the Polkadot Ledger Apps",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},sidebar:"docs",previous:{title:"Wallets and Extensions",permalink:"/docs/wallets-and-extensions"},next:{title:"Polkadot Vault",permalink:"/docs/polkadot-vault"}},g={},c=[{value:"Ledger Devices Compatibility",id:"ledger-devices-compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Polkadot Ledger Apps",id:"polkadot-ledger-apps",level:2},{value:"Polkadot Migration App",id:"polkadot-migration-app",level:3},{value:"Polkadot (Generic) App",id:"polkadot-generic-app",level:3},{value:"Migration Process",id:"migration-process",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:2}],u={toc:c},y="wrapper";function m(e){var t=e.components,a=(0,r.A)(e,l);return(0,o.yg)(y,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(i.A,{message:"If you need help using Ledger, see [this support article](https://support.ledger.com/hc/en-us/articles/360016289919-Polkadot-DOT?docs=true). If the problem persists, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home).",mdxType:"MessageBox"}),(0,o.yg)("p",null,"The Polkadot ",(0,o.yg)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger"),"\napplication is compatible with the Ledger Nano S, Nano X, and Stax devices. Ledger devices are\nhardware wallets that keep your secret key secured on a physical device that does not expose it to\nyour computer or the internet. The private keys will not be exposed even if you connect your Ledger\ndevice via USB to your computer."),(0,o.yg)("p",null,"Ledger devices are hierarchical deterministic wallets (HD wallets), where:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Deterministic")," means that only one seed phrase generates all the accounts for different\nblockchain networks."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"Hierarchical")," means that the accounts are generated in a tree-like structure for different\npurposes.")),(0,o.yg)("h2",{id:"ledger-devices-compatibility"},"Ledger Devices Compatibility"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"center"},"Device"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Platform"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Battery"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Apps"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Security"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Status"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Nano S"),(0,o.yg)("td",{parentName:"tr",align:"center"},"PC",(0,o.yg)("sup",null,"1")),(0,o.yg)("td",{parentName:"tr",align:"center"},"No"),(0,o.yg)("td",{parentName:"tr",align:"center"},"All (lite, XL",(0,o.yg)("sup",null,"2"),")"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Certified Secure Element (CC EAL5+)"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Discontinued")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Nano S Plus"),(0,o.yg)("td",{parentName:"tr",align:"center"},"PC"),(0,o.yg)("td",{parentName:"tr",align:"center"},"No"),(0,o.yg)("td",{parentName:"tr",align:"center"},"All (lite, XL, plus)"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Certified Secure Element (CC EAL6+)"),(0,o.yg)("td",{parentName:"tr",align:"center"},"In Production")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Nano X"),(0,o.yg)("td",{parentName:"tr",align:"center"},"PC, Mobile via bluetooth"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.yg)("td",{parentName:"tr",align:"center"},"All (lite, XL, plus)"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Certified Secure Element (CC EAL5+)"),(0,o.yg)("td",{parentName:"tr",align:"center"},"In Production")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Stax"),(0,o.yg)("td",{parentName:"tr",align:"center"},"PC, Mobile via bluetooth"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Dedicated"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Certified Secure Element (CC EAL6+)"),(0,o.yg)("td",{parentName:"tr",align:"center"},"In Production")))),(0,o.yg)("sup",null,"1")," Because of required WebUSB support, Ledger wallets currently only work on Chromium-based browsers like Google Chrome.",(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("sup",null,"2")," The lite version of the Polkadot Ledger App that you can install by default in the Ledger Nano S has limited functionality. The Ledger Nano S is no longer produced and has limited memory that is just right to accommodate the XL version of the Polkadot Ledger App, which gives the user more functionalities.",(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("p",null,"If you do use a Nano S with the XL version, you will not be able to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Install any other Ledger application on your device"),(0,o.yg)("li",{parentName:"ul"},"Add Polkadot accounts to the Ledger Live App.")),(0,o.yg)("p",null,"But you will be able to add them to ",(0,o.yg)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"wallets and extensions")," that\nsupport Ledger devices."),(0,o.yg)("p",null,"More information on Ledger device comparisons\n",(0,o.yg)("a",{parentName:"p",href:"https://shop.ledger.com/pages/hardware-wallets-comparison"},"here"),"."),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("p",null,"Here is a list of what you will need before using\nPolkadot with Ledger:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A Ledger Nano X, Stax, or Nano S plus (recommended for\nPolkadot Ledger App space requirements and\nfunctionalities)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," installed and up-to-date."),(0,o.yg)("li",{parentName:"ul"},'The latest firmware of the Polkadot Ledger\nApp installed (always check for updates in Ledger Live under the "Manager" tab; you will need to\nallow access with your nano).'),(0,o.yg)("li",{parentName:"ul"},"A Chromium-based web browser if you use a browser extension.")),(0,o.yg)("p",null,"Ledger devices are tiny computers. They have an operating system (or firmware), and on top of it,\nyou can install applications. Every blockchain needs to develop its own application to use Ledger\ndevices. Make sure you have your Ledger devices with firmware and apps up-to-date."),(0,o.yg)("h2",{id:"polkadot-ledger-apps"},"Polkadot Ledger Apps"),(0,o.yg)("p",null,"Ledger devices can be equipped with applications that are blockchain-specific. Third parties usually\ndevelop such applications, enabling users to transact securely on the blockchain network. Polkadot\nLedger apps are developed by ",(0,o.yg)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax")," and are available\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"here"),". The Polkadot Ledger applications allow you to\nmanage Polkadot's native token,\nDOT, and more depending on the version of the\napp."),(0,o.yg)("admonition",{title:"Ledger apps may not support all the transactions",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Check the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"Ledger Polkadot App"),"","\nspecification for the list of transactions supported. Some transactions are supported only on a\nspecific app version, and others are not supported by any version. For instance, joining a\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," is only possible with the ",(0,o.yg)("strong",{parentName:"p"},"XL version")," but\nnot on the ",(0,o.yg)("strong",{parentName:"p"},"lite version"),".")),(0,o.yg)("h3",{id:"polkadot-migration-app"},"Polkadot Migration App"),(0,o.yg)("admonition",{title:"For Migration Only",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"This app is only meant for performing the migration to the Polkadot Generic App; do not use it\nfrequently. After you migrate your assets, delete the Migration app and use the Polkadot Generic\nApp.")),(0,o.yg)("p",null,"The Polkadot Migration app is for users having ",(0,o.yg)("strong",{parentName:"p"},"old Ledger accounts not on the Polkadot Relay Chain\nand ",(0,o.yg)("a",{parentName:"strong",href:"/docs/glossary#system-parachains"},"Polkadot System Chains")),". Old Ledger accounts are accounts\nthat have been created using the old Kusama Ledger app and any parachain Ledger apps (for both\nKusama and Polkadot) except for Polkadot System Chains."),(0,o.yg)("p",null,"Suppose you have accounts on any Polkadot parachain, Kusama Relay Chain, and Kusama parachains. In\nthat case, you will need the Polkadot Migration app to move fungible and non-fungible assets (NFT),\nidentities, etc., from old Ledger accounts to a new one or an existing one created with the Polkadot\nLedger app."),(0,o.yg)("h3",{id:"polkadot-generic-app"},"Polkadot (Generic) App"),(0,o.yg)("p",null,"The Polkadot Ledger Generic App will allow you to use your Ledger device on the Relay Chain and\nparachains without being affected by runtime upgrades. The goal is to provide a single application\nfor the entire Polkadot ecosystem without compromising security. This new app will also count with\nClear Signing, allowing you to see what you sign on a trusted display. This way, unintentionally\nsigning rogue transactions can be avoided. ",(0,o.yg)("a",{parentName:"p",href:"/docs/transaction-attacks"},"See this page")," to understand\nthe importance of verifying transactions before signing them."),(0,o.yg)("p",null,"The Polkadot Ledger Generic app brings the following benefits:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Innovation Acceleration: Enabling teams to innovate and develop new features for relay chains,\nparachains, and current/future users."),(0,o.yg)("li",{parentName:"ul"},"Network Adoption: Facilitating a smoother and more user-friendly adoption of the Polkadot\necosystem."),(0,o.yg)("li",{parentName:"ul"},"Innovation without compromising security: The new Polkadot app comes with the highest security\nstandards so that users can keep their assets safe."),(0,o.yg)("li",{parentName:"ul"},"Development Efficiency: The app helps developing teams save costs by having and maintaining their\napp.")),(0,o.yg)("p",null,"The Polkadot Ledger Generic app will be supported by Ledger Live,\n",(0,o.yg)("a",{parentName:"p",href:"https://novawallet.io/"},"Nova Wallet"),", ",(0,o.yg)("a",{parentName:"p",href:"https://www.talisman.xyz/"},"Talisman"),", and\n",(0,o.yg)("a",{parentName:"p",href:"https://www.subwallet.app/"},"Subwallet"),"."),(0,o.yg)("p",null,"For more information about the Polkadot Generic App, see the\n",(0,o.yg)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/17550211746845-New-Polkadot-app-FAQ?docs=true%20:dot"},"Ledger FAQ"),",\nand ",(0,o.yg)("a",{parentName:"p",href:"https://substrate.beryx.io/new_polkadot_ledger_app"},"Zondax beryx page"),"."),(0,o.yg)("h2",{id:"migration-process"},"Migration Process"),(0,o.yg)("p",null,"The migration process is not meant for Polkadot Relay Chain and System Chains users. Those users can\ninstall the Polkadot app and operate it as usual. For users of Kusama Relay Chain, Kusama System\nChains and parachains, and Polkadot parachains, see the procedure below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Install Polkadot Migration and Polkadot App."),(0,o.yg)("li",{parentName:"ul"},"Use a browser extension or mobile wallet that supports the new apps. No application will\nautomatically migrate your assets. You need to manually migrate your assets,\n",(0,o.yg)("a",{parentName:"li",href:"/docs/learn-identity"},"identities"),", ",(0,o.yg)("a",{parentName:"li",href:"/docs/learn-staking"},"staking"),", etc., to the\naccount controlled by the Polkadot app and sign in with the Migration app (some extensions and\nwallets UI will prompt which app you need to use to sign in depending on the chain you are in)."),(0,o.yg)("li",{parentName:"ul"},"When the migration process is finished, you can delete the Migration app, and everything will be\naccessible using the Polkadot Generic app.")),(0,o.yg)("admonition",{title:"Staking and Identities",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The migration process will also include removing identities from your old account and resetting them\nto the new one. You will also need to unstake, wait for the unbonding period, transfer the funds to\nthe new account, and stake again.")),(0,o.yg)("h2",{id:"using-ledger-live"},"Using Ledger Live"),(0,o.yg)("p",null,"See\n",(0,o.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live"},"this support article"),"\nto learn how to use Polkadot with ledger live."),(0,o.yg)("hr",null),(0,o.yg)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you are an advanced user, see the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-guides-ledger"},"Polkadot-JS guides about Ledger"),".")))}m.isMDXComponent=!0}}]);