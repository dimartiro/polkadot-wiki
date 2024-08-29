"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3135],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),o=t(20053);const r={tabItem:"tabItem_Ymn6"};function l(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,l),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>k});var n=t(58168),o=t(96540),r=t(20053),l=t(23104),i=t(56347),s=t(57485),u=t(31682),p=t(89466);function d(e){return function(e){var a,t;return null!=(a=null==(t=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function c(e){var a=e.values,t=e.children;return(0,o.useMemo)((function(){var e=null!=a?a:d(t);return function(e){var a=(0,u.X)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function g(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,r=(0,i.W6)(),l=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,o.useCallback)((function(e){if(l){var a=new URLSearchParams(r.location.search);a.set(l,e),r.replace(Object.assign({},r.location,{search:a.toString()}))}}),[l,r])]}function y(e){var a,t,n,r,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=c(e),y=(0,o.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var o=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:d})})),h=y[0],b=y[1],f=g({queryString:s,groupId:u}),N=f[0],v=f[1],k=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,p.Dv)(a),n=t[0],r=t[1],[n,(0,o.useCallback)((function(e){a&&r.set(e)}),[a,r])]),w=k[0],A=k[1],T=function(){var e=null!=N?N:w;return m({value:e,tabValues:d})?e:null}();return(0,o.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),A(e)}),[v,A,d]),tabValues:d}}var h=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var a=e.className,t=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==i&&(d(a),s(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,o=p.indexOf(e.currentTarget)+1;t=null!=(n=p[o])?n:p[0];break;case"ArrowLeft":var r,l=p.indexOf(e.currentTarget)-1;t=null!=(r=p[l])?r:p[p.length-1]}null==(a=t)||a.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a)},u.map((function(e){var a=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,r.A)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===a})}),null!=t?t:a)})))}function N(e){var a=e.lazy,t=e.children,n=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var l=r.find((function(e){return e.props.value===n}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function v(e){var a=y(e);return o.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},o.createElement(f,(0,n.A)({},e,a)),o.createElement(N,(0,n.A)({},e,a)))}function k(e){var a=(0,h.A)();return o.createElement(v,(0,n.A)({key:String(a)},e))}},24817:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=t(58168),o=t(98587),r=(t(96540),t(15680)),l=t(11470),i=t(19365),s=["components"],u={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},p=void 0,d={unversionedId:"maintain/maintain-sync",id:"maintain/maintain-sync",title:"Set up a Full Node",description:"Steps on how to set up a full node.",source:"@site/../docs/maintain/maintain-sync.md",sourceDirName:"maintain",slug:"/maintain-sync",permalink:"/docs/maintain-sync",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-sync.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},sidebar:"docs",previous:{title:"Node Endpoints",permalink:"/docs/maintain-endpoints"},next:{title:"Set up a Boot Node",permalink:"/docs/maintain-bootnode"}},c={},m=[{value:"Types of Nodes",id:"types-of-nodes",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Debian-based (Debian, Ubuntu)",id:"debian-based-debian-ubuntu",level:3},{value:"RPM-based (Fedora, CentOS)",id:"rpm-based-fedora-centos",level:3},{value:"Get Substrate",id:"get-substrate",level:2},{value:"Clone and Build",id:"clone-and-build",level:2},{value:"Run",id:"run",level:2},{value:"Running an Archive Node",id:"running-an-archive-node",level:2},{value:"Using Docker",id:"using-docker",level:2}],g={toc:m},y="wrapper";function h(e){var a=e.components,t=(0,o.A)(e,s);return(0,r.yg)(y,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"If you're building dApps or products on a Substrate-based chain like Polkadot, Kusama, or a custom\nSubstrate implementation, you want the ability to run a node-as-a-back-end. After all, relying on\nyour infrastructure is always better than a third-party-hosted one in this brave new decentralized\nworld."),(0,r.yg)("p",null,"This guide will show you how to connect to ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the\nsame process applies to any other ",(0,r.yg)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),"-based chain. First, let's\nclarify the term ",(0,r.yg)("em",{parentName:"p"},"full node"),"."),(0,r.yg)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,r.yg)("p",null,"A blockchain's growth comes from a ",(0,r.yg)("em",{parentName:"p"},"genesis block"),", ",(0,r.yg)("em",{parentName:"p"},"extrinsics"),", and ",(0,r.yg)("em",{parentName:"p"},"events"),"."),(0,r.yg)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it and emits the events resulting from these changes. Later, the chain\u2019s\nstate at block one is used the same way to build the chain\u2019s state at block 2, and so on. Once\ntwo-thirds of the validators agree on a specific block being valid, it is finalized."),(0,r.yg)("p",null,"An ",(0,r.yg)("strong",{parentName:"p"},"archive node")," keeps all the past blocks and their states. An archive node makes it convenient\nto query the past state of the chain at any point in time. Finding out what an account's balance at\na particular block was or which extrinsics resulted in a specific state change are fast operations\nwhen using an archive node. However, an archive node takes up a lot of disk space - around Kusama's\n12 millionth block, this was around 660 GB."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"On the ",(0,r.yg)("a",{parentName:"p",href:"https://paranodes.io/DBSize"},"Paranodes")," or ",(0,r.yg)("a",{parentName:"p",href:"https://stakeworld.io/docs/dbsize"},"Stakeworld"),"\nwebsites, you can find lists of the database sizes of Polkadot and Kusama nodes.")),(0,r.yg)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,r.yg)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data."),(0,r.yg)("p",null,"A ",(0,r.yg)("strong",{parentName:"p"},"full node")," prunes historical states: all finalized blocks' states older than a configurable\nnumber except the genesis block's state. This is 256 blocks from the last finalized one by default.\nA pruned node this way requires much less space than an archive node."),(0,r.yg)("p",null,"A full node could eventually rebuild every block's state without additional information and become\nan archive node. This still needs to be implemented at the time of writing. If you need to query\nhistorical blocks' states past what you pruned, you must purge your database and resync your node,\nstarting in archive mode. Alternatively, you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network and only need the states of blocks past that\nsnapshot."),(0,r.yg)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,r.yg)("p",null,"Another type of node is a ",(0,r.yg)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource-restricted devices. An interesting use-case of\nlight nodes is a browser extension, which is a node in its own right, running the runtime in WASM\nformat, as well as a full or light node that is completely encapsulated in WASM and can be\nintegrated into web apps: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot#wasm-light-node"},"https://github.com/paritytech/smoldot#wasm-light-node"),"."),(0,r.yg)("admonition",{title:"Substrate Connect",type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-connect"},"Substrate Connect")," provides a way to interact with\nsubstrate-based blockchains in the browser without using an RPC server. It is a light node that runs\nentirely in Javascript. Substrate Connect uses a\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot"},"smoldot WASM light client")," to securely connect to the\nblockchain network without relying on specific 3rd parties. Substrate Connect is available on Chrome\nand Firefox as a ",(0,r.yg)("a",{parentName:"p",href:"https://substrate.io/developers/substrate-connect/"},"browser extension"),".")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,r.yg)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator setup")," if you are running validator."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"The bash commands that are provided to run against ",(0,r.yg)("strong",{parentName:"mdxAdmonitionTitle"},"your node")," use ",(0,r.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot")," as the"),(0,r.yg)("p",{parentName:"admonition"},"default chain"),(0,r.yg)("p",{parentName:"admonition"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--chain")," flag if you follow the setup instructions to setup a ",(0,r.yg)("inlineCode",{parentName:"p"},"Kusama")," node. For example:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n'))),(0,r.yg)(l.A,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux (standalone)",value:"linux-standalone"},{label:"Linux (package)",value:"linux-package"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"mac",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Then, run:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm protobuf\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install Rust by running:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After Rust is installed, update and add the nightly version:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Ensure the current shell has cargo\nsource ~/.cargo/env\n\n# Update the Rust toolchain\nrustup default stable\nrustup update\n\n# Add the nightly and WebAssembly targets:\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Verify your installation by running the following:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rustup show\n\n# You should see output similar to:\n\nactive toolchain\n----------------\n\nstable-aarch64-apple-darwin (default)\nrustc 1.68.1 (8460ca823 2023-03-20)\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rustup +nightly show\n\n# You should see output similar to:\n\ninstalled targets for active toolchain\n--------------------------------------\n\naarch64-apple-darwin\nwasm32-unknown-unknown\n\nactive toolchain\n----------------\n\nnightly-aarch64-apple-darwin (overridden by +toolchain on the command line)\nrustc 1.71.0-nightly (9ecda8de8 2023-04-30)\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Once Rust is configured, run the following command to clone and build the Polkadot code:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot-sdk polkadot-sdk\ncd polkadot-sdk\n./scripts/init.sh\ncargo build --release\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start your node:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Find your node on ",(0,r.yg)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.yg)(i.A,{value:"win",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install ",(0,r.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install ",(0,r.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Determine the latest version of the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/releases"},"Polkadot binary"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,r.yg)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot-sdk/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Then, run the following:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x polkadot\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start your node:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'./polkadot --name "Your Node\'s Name"\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Find your node on ",(0,r.yg)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.yg)(i.A,{value:"linux-standalone",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Determine the latest version of the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/releases"},"Polkadot binary"),"."),(0,r.yg)("admonition",{parentName:"li",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The nature of pre-built binaries means that they may not work on your particular architecture or\nLinux distribution. If you see an error like ",(0,r.yg)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it\nlikely means the binary is not compatible with your system. You will either need to compile the\n",(0,r.yg)("a",{parentName:"p",href:"#clone-and-build"},(0,r.yg)("strong",{parentName:"a"},"source code"))," or use ",(0,r.yg)("a",{parentName:"p",href:"#using-docker"},(0,r.yg)("strong",{parentName:"a"},"Docker")),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,r.yg)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot-sdk/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Run the following: ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo chmod +x polkadot"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Run the following:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Find your node on ",(0,r.yg)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.yg)(i.A,{value:"linux-package",mdxType:"TabItem"},(0,r.yg)("p",null,"You can also install Polkadot from one of our package repositories."),(0,r.yg)("p",null,"Installation from the Debian or rpm repositories will create a ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd")," service that can be used to\nrun a Polkadot node. The service is disabled by default, and can be started by running\n",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl start polkadot")," on demand (use ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl enable polkadot")," to make it auto-start after\nreboot). By default, it will run as the ",(0,r.yg)("inlineCode",{parentName:"p"},"polkadot")," user. Command-line flags passed to the binary can\nbe customized by editing ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/default/polkadot"),". This file will not be overwritten on updating\npolkadot."),(0,r.yg)("h3",{id:"debian-based-debian-ubuntu"},"Debian-based (Debian, Ubuntu)"),(0,r.yg)("p",null,"Currently supports Debian 10 (Buster) and Ubuntu 20.04 (Focal), and derivatives. Run the following\ncommands as the ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," user."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Import the security@parity.io GPG key\ngpg --recv-keys --keyserver hkps://keys.mailvelope.com 9D4B2B6EB8F97156D19669A9FF0812D491B96798\ngpg --export 9D4B2B6EB8F97156D19669A9FF0812D491B96798 > /usr/share/keyrings/parity.gpg\n# Add the Parity repository and update the package index\necho 'deb [signed-by=/usr/share/keyrings/parity.gpg] https://releases.parity.io/deb release main' > /etc/apt/sources.list.d/parity.list\napt update\n# Install the `parity-keyring` package - This will ensure the GPG key\n# used by APT remains up-to-date\napt install parity-keyring\n# Install polkadot\napt install polkadot\n\n")),(0,r.yg)("p",null,"If you don't want polkadot package to be automatically updated when you update packages on your\nserver, you can issue the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt-mark hold polkadot\n")),(0,r.yg)("h3",{id:"rpm-based-fedora-centos"},"RPM-based (Fedora, CentOS)"),(0,r.yg)("p",null,"Currently supports Fedora 32 and CentOS 8, and derivatives."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Install dnf-plugins-core (This might already be installed)\ndnf install dnf-plugins-core\n# Add the repository and enable it\ndnf config-manager --add-repo https://releases.parity.io/rpm/polkadot.repo\ndnf config-manager --set-enabled polkadot\n# Install polkadot (You may have to confirm the import of the GPG key, which\n# should have the following fingerprint: 9D4B2B6EB8F97156D19669A9FF0812D491B96798)\ndnf install polkadot\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you choose to use a custom folder for the polkadot home by passing ",(0,r.yg)("inlineCode",{parentName:"p"},"--base-path '/custom-path'"),",\nyou will need to issue following command:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/systemd/system/polkadot.service.d\n")),(0,r.yg)("p",{parentName:"admonition"},"And create a new file inside this folder:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo -e /etc/systemd/system/polkadot.service.d/custom.conf\n")),(0,r.yg)("p",{parentName:"admonition"},"With the following content:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},"[Service]\nReadWritePaths=/custom-path\n")),(0,r.yg)("p",{parentName:"admonition"},"And finally issue a reload to have your modifications applied by systemd:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n"))))),(0,r.yg)("h2",{id:"get-substrate"},"Get Substrate"),(0,r.yg)("p",null,"Follow instructions as outlined ",(0,r.yg)("a",{parentName:"p",href:"https://docs.substrate.io/quick-start/"},"here")," - note that Windows\nusers will have their work cut out for them. It's better to use a virtual machine instead."),(0,r.yg)("p",null,"Test if the installation was successful by running ",(0,r.yg)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,r.yg)("h2",{id:"clone-and-build"},"Clone and Build"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot"},"paritytech/polkadot")," repo's\nmaster branch contains the latest Polkadot code."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot-sdk polkadot-sdk\ncd polkadot-sdk\n./scripts/init.sh\ncargo build --release\n")),(0,r.yg)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,r.yg)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot-sdk polkadot-sdk\ncd polkadot-sdk\ngit checkout tags/polkadot-v1.9.0\n./scripts/init.sh\ncargo build --release\n")),(0,r.yg)("h2",{id:"run"},"Run"),(0,r.yg)("p",null,"The built binary will be in the ",(0,r.yg)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,r.yg)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Polkadot"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--help")," flag to determine which flags you can use when running the node. For example, if\n",(0,r.yg)("a",{parentName:"p",href:"/docs/maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,r.yg)("inlineCode",{parentName:"p"},"--rpc-external"),"\nand ",(0,r.yg)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,r.yg)("p",null,"The syncing process will take a while, depending on your capacity, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,r.yg)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,r.yg)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,r.yg)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. It\ndefaults to ",(0,r.yg)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode")," when validating. To support the full state, use the\n",(0,r.yg)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Polkadot"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,r.yg)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,r.yg)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node syncs."),(0,r.yg)("h2",{id:"using-docker"},"Using Docker"),(0,r.yg)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is more advanced, so it's\nbest left up to those already familiar with docker or who have completed the other set-up\ninstructions in this guide. Be aware that when you run polkadot in docker, the process only listens\non localhost by default. If you would like to connect to your node's services (rpc, and prometheus)\nyou need to ensure that you run you node with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--rpc-external"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"--prometheus-external"),"\ncommands."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 -p 9615:9615 parity/polkadot:v0.9.13 --name "calling_home_from_a_docker_container" --rpc-external --prometheus-external\n')))}h.isMDXComponent=!0}}]);