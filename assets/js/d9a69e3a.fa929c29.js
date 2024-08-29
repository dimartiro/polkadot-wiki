"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5829],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),y=r,g=u["".concat(s,".").concat(y)]||u[y]||c[y]||o;return n?t.createElement(g,i(i({ref:a},p),{},{components:n})):t.createElement(g,i({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},80618:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(58168),r=n(98587),o=(n(96540),n(15680)),i=["components"],l={id:"people-dashboards",title:"People Dashboards",sidebar_label:"People",description:"People is a parachain on Polkadot focused on decentralized identity and social interactions.",keywords:["polkadot","dashboard","dune","people","identity"],slug:"../people-dashboards"},s="People Dashboards",d={unversionedId:"general/dune-analytics/parachain-dashboards/people-dashboards",id:"general/dune-analytics/parachain-dashboards/people-dashboards",title:"People Dashboards",description:"People is a parachain on Polkadot focused on decentralized identity and social interactions.",source:"@site/../docs/general/dune-analytics/parachain-dashboards/people-dashboards.md",sourceDirName:"general/dune-analytics/parachain-dashboards",slug:"/general/dune-analytics/people-dashboards",permalink:"/docs/general/dune-analytics/people-dashboards",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/parachain-dashboards/people-dashboards.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1719215716,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"people-dashboards",title:"People Dashboards",sidebar_label:"People",description:"People is a parachain on Polkadot focused on decentralized identity and social interactions.",keywords:["polkadot","dashboard","dune","people","identity"],slug:"../people-dashboards"},sidebar:"docs",previous:{title:"Nodle",permalink:"/docs/general/dune-analytics/nodle-dashboards"},next:{title:"Pendulum",permalink:"/docs/general/dune-analytics/pendulum-dashboards"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Featured Dashboards on Dune",id:"featured-dashboards-on-dune",level:2},{value:"Key Tables",id:"key-tables",level:2},{value:"Useful Queries",id:"useful-queries",level:2},{value:"Getting Started with Queries",id:"getting-started-with-queries",level:2}],c={toc:u},y="wrapper";function g(e){var a=e.components,n=(0,r.A)(e,i);return(0,o.yg)(y,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"people-dashboards"},"People Dashboards"),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"People's Chain focuses on decentralized identity and social interactions, enabling users to manage\ntheir digital identity and engage in community governance."),(0,o.yg)("h2",{id:"featured-dashboards-on-dune"},"Featured Dashboards on Dune"),(0,o.yg)("p",null,"Here you will find a variety of dashboards that help visualize data from the People parachain:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://dune.com/substrate/people"},"People Dashboard"),": A comprehensive view of identity management\nand social interaction activities within the People ecosystem.")),(0,o.yg)("p",null,"Please also visit our dashboards for People on\n",(0,o.yg)("a",{parentName:"p",href:"https://dune.com/discover/content/relevant?q=title:People%20author:substrate"},"Dune Analytics"),"."),(0,o.yg)("h2",{id:"key-tables"},"Key Tables"),(0,o.yg)("p",null,"Data from the People parachain is organized into several key tables:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"people.balances")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"people.blocks")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"people.calls")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"people.events")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"people.extrinsics")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"people.transfers"))),(0,o.yg)("p",null,"Start building your own queries using granular data on Dune\n",(0,o.yg)("a",{parentName:"p",href:"https://dune.com/queries?category=canonical&namespace=people"},"here"),"."),(0,o.yg)("h2",{id:"useful-queries"},"Useful Queries"),(0,o.yg)("p",null,"Some useful queries for People are provided:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Title"),(0,o.yg)("th",{parentName:"tr",align:null},"Query"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Kusama People Chain - Identity History"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"https://dune.com/queries/3836167"},"query_3836167")),(0,o.yg)("td",{parentName:"tr",align:null},"Find all identity history records on the Kusama People Chain")))),(0,o.yg)("h2",{id:"getting-started-with-queries"},"Getting Started with Queries"),(0,o.yg)("p",null,"To get started with querying data from Unique, you are welcome to use the mentioned materialized\nqueries. You can use the following DuneSQL queries as examples:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql",metastring:'title="Kusama People Chain - Identity History Sample" showLineNumbers',title:'"Kusama',People:!0,Chain:!0,"-":!0,Identity:!0,History:!0,'Sample"':!0,showLineNumbers:!0},"SELECT\n  block_time,\n  extrinsic_id,\n  signer_ss58,\n  signer_pub_key,\n  CAST(\n    from_utf8(\n      from_hex(JSON_EXTRACT_SCALAR(call_args, '$.info.display.raw'))\n    ) AS VARCHAR\n  ) AS name,\n  CAST(\n    from_utf8(\n      from_hex(JSON_EXTRACT_SCALAR(call_args, '$.info.email.raw'))\n    ) AS VARCHAR\n  ) AS email\nFROM\n  people_kusama.calls\nWHERE\n  call_section = 'identity'\n  AND call_method = 'setIdentity';\n")),(0,o.yg)("p",null,"Query result:"),(0,o.yg)("iframe",{src:"https://dune.com/embeds/3836167/6451940/",height:"350",width:"100%"}),(0,o.yg)("admonition",{title:"DuneSQL Referece",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/general/dunesql-cheatsheet"},"DuneSQL Cheatsheet"),"\nand\n",(0,o.yg)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL Official Documentation"),".")))}g.isMDXComponent=!0}}]);