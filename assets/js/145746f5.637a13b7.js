(self.webpackChunk=self.webpackChunk||[]).push([[6789],{47379:(e,a,t)=>{"use strict";t.d(a,{A:()=>g});var n=t(90675),r=t(10467),l=t(96540),o=t(69761),i=t(82285),s=t(11135);function u(e,a,t){return d.apply(this,arguments)}function d(){return(d=(0,r.A)((0,n.A)().mark((function e(a,t,r){var l,s,u,d,p;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l=void 0,s=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return l="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return l="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return l="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return l="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return l="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return l="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==l){e.next=22;break}return e.abrupt("return");case 22:return u=new o.E(l),e.next=25,i.G.create({provider:u});case 25:d=e.sent,(p=t.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return s=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return s=(s=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+p[0]+") in "+t);case 39:return e.abrupt("return",s);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,a,t,n){switch(a){case"humanReadable":(0,s.HumanReadable)(e,t,n);break;case"precise":(0,s.Precise)(e,t,n);break;case"blocksToDays":(0,s.BlocksToDays)(e,n);break;case"erasToDays":(0,s.ErasToDays)(e,n,t);break;case"percentage":(0,s.Percentage)(e,n);break;case"permillToPercent":(0,s.PermillToPercent)(e,n);break;case"arrayLength":(0,s.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const g=function(e){var a=e.network,t=e.path,o=e.defaultValue,i=e.filter,s=void 0===i?void 0:i,d=(0,l.useState)(""),g=d[0],m=d[1];return a=a.toLowerCase(),(0,l.useEffect)((function(){void 0!==s?p(o.toString(),s,a,m):m(o.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var l=function(){var e=(0,r.A)((0,n.A)().mark((function e(){var r;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(a,t,m);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==s?p(r,s,a,m):m(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{l()}catch(i){console.log(i)}}}),[]),g}},11135:e=>{var a="polkadot",t="kusama",n="statemine",r="statemint",l="polkadotpeople",o="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,s,u){var d=void 0;if(s===a||s===r||s==l)d=3;else{if(s!==t&&s!==n&&s!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=6}e=parseFloat(e),u((e=Number.isInteger(e/i[s].precision)?e/i[s].precision+" "+i[s].symbol:(e/i[s].precision).toFixed(d)+" "+i[s].symbol).toString())},Precise:function(e,a,t){t(e=(e=parseFloat(e))/i[a].precision+" "+i[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,i,s){var u=void 0;if(s===a||s===r||s==l)u=1;else{if(s!==t&&s!==n&&s!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=4}i((e/=u).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},19365:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},a)}},11470:(e,a,t)=>{"use strict";t.d(a,{A:()=>k});var n=t(58168),r=t(96540),l=t(20053),o=t(23104),i=t(56347),s=t(57485),u=t(31682),d=t(89466);function p(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function g(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:p(t);return function(e){var a=(0,u.X)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function y(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,l=(0,i.W6)(),o=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((function(e){if(o){var a=new URLSearchParams(l.location.search);a.set(o,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[o,l])]}function c(e){var a,t,n,l,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=g(e),c=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=c[0],b=c[1],N=y({queryString:s,groupId:u}),f=N[0],v=N[1],k=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Dv)(a),n=t[0],l=t[1],[n,(0,r.useCallback)((function(e){a&&l.set(e)}),[a,l])]),w=k[0],T=k[1],A=function(){var e=null!=f?f:w;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){A&&b(A)}),[A]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),T(e)}),[v,T,p]),tabValues:p}}var h=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var a=e.className,t=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,d=[],p=(0,o.a_)().blockElementScrollPositionUntilNextRender,g=function(e){var a=e.currentTarget,t=d.indexOf(a),n=u[t].value;n!==i&&(p(a),s(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var n,r=d.indexOf(e.currentTarget)+1;t=null!=(n=d[r])?n:d[0];break;case"ArrowLeft":var l,o=d.indexOf(e.currentTarget)-1;t=null!=(l=d[o])?l:d[d.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:function(e){return d.push(e)},onKeyDown:m,onClick:g},o,{className:(0,l.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===a})}),null!=t?t:a)})))}function f(e){var a=e.lazy,t=e.children,n=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var o=l.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function v(e){var a=c(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(N,(0,n.A)({},e,a)),r.createElement(f,(0,n.A)({},e,a)))}function k(e){var a=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},51841:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var n=t(58168),r=t(98587),l=(t(96540),t(15680)),o=t(47379),i=t(11470),s=t(19365),u=["components"],d={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},p=void 0,g={unversionedId:"maintain/maintain-polkadot-parameters",id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-polkadot-parameters.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1722235562,formattedLastUpdatedAt:"Jul 29, 2024",frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},sidebar:"docs",previous:{title:"Network Maintainers",permalink:"/docs/maintain-index"},next:{title:"Nodes and Dapps",permalink:"/docs/maintain-node-index"}},m={},y=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Accounts, Identity and Crowdloans",id:"accounts-identity-and-crowdloans",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}],c={toc:y},h="wrapper";function b(e){var a=e.components,t=(0,r.A)(e,u);return(0,l.yg)(h,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.yg)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"NOTE: Polkadot generally runs at ","\xbc","th the speed of Kusama, except in the time slot duration\nitself.")),(0,l.yg)(i.A,{groupId:"periods",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.yg)("li",{parentName:"ul"},"Epoch: 4 hours (2_400 slots x 6 seconds)"),(0,l.yg)("li",{parentName:"ul"},"Session: 4 hours (Session and Epoch lengths are the same)"),(0,l.yg)("li",{parentName:"ul"},"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slot"),(0,l.yg)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Epoch"),(0,l.yg)("td",{parentName:"tr",align:null},"4 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"2_400")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Session"),(0,l.yg)("td",{parentName:"tr",align:null},"4 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"2_400")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Era"),(0,l.yg)("td",{parentName:"tr",align:null},"24 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"14_400"))))),(0,l.yg)(s.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.yg)("li",{parentName:"ul"},"Epoch: 1 hour (600 slots x 6 seconds)"),(0,l.yg)("li",{parentName:"ul"},"Session: 1 hour (6 sessions per Era)"),(0,l.yg)("li",{parentName:"ul"},"Era: 6 hours (3600 slots x 6 seconds)")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Kusama"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slot"),(0,l.yg)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Epoch"),(0,l.yg)("td",{parentName:"tr",align:null},"1 hour"),(0,l.yg)("td",{parentName:"tr",align:null},"600")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Session"),(0,l.yg)("td",{parentName:"tr",align:null},"1 hour"),(0,l.yg)("td",{parentName:"tr",align:null},"600")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Era"),(0,l.yg)("td",{parentName:"tr",align:null},"6 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"3_600")))))),(0,l.yg)("p",null,"*",(0,l.yg)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.yg)("em",{parentName:"em"},"estimates"),". See\n",(0,l.yg)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for more details.")),(0,l.yg)("h3",{id:"accounts-identity-and-crowdloans"},"Accounts, Identity and Crowdloans"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("a",{parentName:"li",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit")," is\n",(0,l.yg)(o.A,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.yg)("li",{parentName:"ul"},"The deposit required to set an Identity is\n",(0,l.yg)(o.A,{network:"polkadotpeople",path:"consts.identity.basicDeposit",defaultValue:20017e5,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.yg)("li",{parentName:"ul"},"The minimum contribution required to participate in a crowdloan is\n",(0,l.yg)(o.A,{network:"polkadot",path:"consts.crowdloan.minContribution",defaultValue:5e10,filter:"humanReadable",mdxType:"RPC"}),"")),(0,l.yg)("h3",{id:"governance"},"Governance"),(0,l.yg)(i.A,{groupId:"governance",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Voting period"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network."))))),(0,l.yg)(s.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Voting period"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"100_800"),(0,l.yg)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.yg)("td",{parentName:"tr",align:null},"8 days"),(0,l.yg)("td",{parentName:"tr",align:null},"115_200"),(0,l.yg)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))))),(0,l.yg)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.yg)("p",null,"The maximum number of validators that can be nominated by a nominator is\n16. "),(0,l.yg)(i.A,{groupId:"staking",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Term duration"),(0,l.yg)("td",{parentName:"tr",align:null},"1 Day"),(0,l.yg)("td",{parentName:"tr",align:null},"14_400"),(0,l.yg)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.yg)("td",{parentName:"tr",align:null},"1 Day"),(0,l.yg)("td",{parentName:"tr",align:null},"14_400"),(0,l.yg)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to ",(0,l.yg)("a",{parentName:"td",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.'))))),(0,l.yg)(s.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Term duration"),(0,l.yg)("td",{parentName:"tr",align:null},"6 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"3_600"),(0,l.yg)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.yg)("td",{parentName:"tr",align:null},"6 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"3_600"),(0,l.yg)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to ",(0,l.yg)("a",{parentName:"td",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"604_800"),(0,l.yg)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"604_800"),(0,l.yg)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))))),(0,l.yg)("h3",{id:"parachains"},"Parachains"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Crowdloans and Auctions"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Auction duration"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"100_800"),(0,l.yg)("td",{parentName:"tr",align:null},"The total duration of the slot auction, subject to the candle auction mechanism.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Opening period"),(0,l.yg)("td",{parentName:"tr",align:null},"2 days"),(0,l.yg)("td",{parentName:"tr",align:null},"28_800"),(0,l.yg)("td",{parentName:"tr",align:null},"The opening period of the slot auction.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Ending period"),(0,l.yg)("td",{parentName:"tr",align:null},"5 days"),(0,l.yg)("td",{parentName:"tr",align:null},"72_000"),(0,l.yg)("td",{parentName:"tr",align:null},"The ending period of the slot auction.")))),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parachain Slot"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Lease period"),(0,l.yg)("td",{parentName:"tr",align:null},"12 weeks"),(0,l.yg)("td",{parentName:"tr",align:null},"1_209_600"),(0,l.yg)("td",{parentName:"tr",align:null},"The length of one lease period in a parachain slot.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Total slot duration"),(0,l.yg)("td",{parentName:"tr",align:null},"2 years"),(0,l.yg)("td",{parentName:"tr",align:null},"10_512_000"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum duration a parachain can lease by winning a slot auction (8 lease periods).")))),(0,l.yg)("h3",{id:"treasury"},"Treasury"),(0,l.yg)(i.A,{groupId:"treasury",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Treasury"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.yg)("td",{parentName:"tr",align:null},"24 days"),(0,l.yg)("td",{parentName:"tr",align:null},"345_600"),(0,l.yg)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.yg)("p",null,"Burn percentage is currently ",(0,l.yg)("inlineCode",{parentName:"p"},"1.00%"),".")),(0,l.yg)(s.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Treasury"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.yg)("td",{parentName:"tr",align:null},"6 days"),(0,l.yg)("td",{parentName:"tr",align:null},"86_400"),(0,l.yg)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.yg)("p",null,"Burn percentage is currently ",(0,l.yg)("inlineCode",{parentName:"p"},"0.20%"),", though instead of being burned this amount is temporarily\nredirected into the ",(0,l.yg)("a",{parentName:"p",href:"/docs/maintain-guides-society-kusama"},"Society"),"'s treasury to\nfund growth."))),(0,l.yg)("h3",{id:"precision"},"Precision"),(0,l.yg)(i.A,{groupId:"precision",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("p",null,"DOT have 10 decimals of precision. In other words, 10 ","*","*"," 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."),(0,l.yg)("p",null,"The denomination of DOT was changed from 12 decimals of precision at block #1,248,328 in an event\nknown as ",(0,l.yg)("em",{parentName:"p"},"Denomination Day"),". See ",(0,l.yg)("a",{parentName:"p",href:"/docs/learn/learn-redenomination"},"Redenomination")," for\ndetails.")),(0,l.yg)(s.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("p",null,"KSM have 12 decimals of precision. In other words, 1e12 (1_000_000_000_000, or one trillion) Plancks\nmake up a single KSM."))))}b.isMDXComponent=!0},47790:()=>{}}]);