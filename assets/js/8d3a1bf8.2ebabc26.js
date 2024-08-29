(self.webpackChunk=self.webpackChunk||[]).push([[5588],{67141:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var a=n(96540);const o=function(e){var t,n=e.message,o=(0,a.useState)(!0),i=o[0],r=o[1];return a.createElement(a.Fragment,null,i&&a.createElement("div",{className:"message-box"},a.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),a.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47379:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(90675),o=n(10467),i=n(96540),r=n(69761),s=n(82285),l=n(11135);function p(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,o.A)((0,a.A)().mark((function e(t,n,o){var i,l,p,d,c;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return p=new r.E(i),e.next=25,s.G.create({provider:p});case 25:d=e.sent,(c=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=c[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+c[0]+") in "+n);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),u=d[0],k=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(r.toString(),l,t,k):k(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.A)((0,a.A)().mark((function e(){var o;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n,k);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(o,l,t,k):k(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},11135:e=>{var t="polkadot",n="kusama",a="statemine",o="statemint",i="polkadotpeople",r="kusamapeople",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,p){var d=void 0;if(l===t||l===o||l==i)d=3;else{if(l!==n&&l!==a&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=6}e=parseFloat(e),p((e=Number.isInteger(e/s[l].precision)?e/s[l].precision+" "+s[l].symbol:(e/s[l].precision).toFixed(d)+" "+s[l].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/s[t].precision+" "+s[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,s,l){var p=void 0;if(l===t||l===o||l==i)p=1;else{if(l!==n&&l!==a&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=4}s((e/=p).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},55822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var a=n(58168),o=n(98587),i=(n(96540),n(15680)),r=n(47379),s=n(67141),l=["components"],p={id:"learn-inflation",title:"Token Inflation",sidebar_label:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",keywords:["token","DOT","KSM","inflation"],slug:"../learn-inflation"},d=void 0,c={unversionedId:"learn/learn-inflation",id:"learn/learn-inflation",title:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",source:"@site/../docs/learn/learn-inflation.md",sourceDirName:"learn",slug:"/learn-inflation",permalink:"/docs/learn-inflation",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-inflation.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1723134825,formattedLastUpdatedAt:"Aug 8, 2024",frontMatter:{id:"learn-inflation",title:"Token Inflation",sidebar_label:"Token Inflation",description:"Explanation of Token's Inflation in the Polkadot Ecosystem.",keywords:["token","DOT","KSM","inflation"],slug:"../learn-inflation"},sidebar:"docs",previous:{title:"DOT",permalink:"/docs/learn-DOT"},next:{title:"Asset Hub",permalink:"/docs/learn-assets"}},u={},k=[{value:"Inflation Model",id:"inflation-model",level:2},{value:"Ideal Staking Rate",id:"ideal-staking-rate",level:2}],h={toc:k},m="wrapper";function g(e){var t=e.components,p=(0,o.A)(e,l);return(0,i.yg)(m,(0,a.A)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(s.A,{message:"[A simpler inflation model modifiable by OpenGov and a reduction in DOT inflation are currently being discussed.](https://forum.polkadot.network/t/proposal-for-adjusting-polkadots-inflation-system-reducing-issuance-and-complexity/9157)",mdxType:"MessageBox"}),(0,i.yg)("p",null,"DOT is an inflationary token. On the\nPolkadot network, inflation is\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/756ccc35e93d1a78e3c71a0e67ae4da5f1d09f69/runtime/polkadot/src/lib.rs#L576"},"set to be 10% annually"),".\n","Depending\non the DOT supply staked and the ideal staking\nrate (more about this below), part of the DOT\ninflation is distributed to the stakers and part to the\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"treasury"),"."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"DOT went through ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn/learn-redenomination"},"redenomination")," in 2020 that saw the DOT token\nsupply increase by 100 times."),(0,i.yg)("p",{parentName:"admonition"},"The current token supply on Polkadot is\n",(0,i.yg)(r.A,{network:"polkadot",path:"query.balances.totalIssuance",defaultValue:0xa9bc0e330b775000,filter:"humanReadable",mdxType:"RPC"})," (1.4 Billion DOT).\n","")),(0,i.yg)("p",null,"It is essential to understand that the primary objective of\nDOT inflation is to incentivize network\nparticipants through\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-consensus#nominated-proof-of-stake"},"Nominated Proof of Stake (NPoS)")," and to grow the\nnetwork through funding the on-chain treasury. There is an opportunity cost of keeping the\nDOT tokens idle with the current inflation model\nas the tokens get diluted over time. Economics and game theory suggest that setting an ideal\ninflation rate is essential for incentivizing the network participants as well as the growth of the\nnetwork, and any deviation from it can have adverse effects. Reducing the inflation rate could limit\ngrowth, while increasing the inflation rate could break the incentive model of the token. Hence,\n",(0,i.yg)("strong",{parentName:"p"},"token inflation rate is not a forever fixed value, and inflation can be updated in the future\nthrough ",(0,i.yg)("a",{parentName:"strong",href:"/docs/learn-polkadot-opengov"},"on-chain governance"))," based on thorough tokenomics research."),(0,i.yg)("h2",{id:"inflation-model"},"Inflation Model"),(0,i.yg)("p",null,"The chart below shows the inflation model of the network. Depending on the number of staked tokens,\nthe distribution of the inflation to validators and nominators versus the treasury will change\ndynamically to provide incentives to participate (or not participate) in staking."),(0,i.yg)("p",null,"There is a ",(0,i.yg)("a",{parentName:"p",href:"#ideal-staking-rate"},"dynamic ",(0,i.yg)("em",{parentName:"a"},"ideal staking rate"))," (in the figure set to 0.6 or 60%)\nthat the network tries to maintain. The inflation model will incentivize network participants to\nstake when the ",(0,i.yg)("em",{parentName:"p"},"current staking rate")," < ",(0,i.yg)("em",{parentName:"p"},"ideal staking rate")," and disincentivize staking when\n",(0,i.yg)("em",{parentName:"p"},"current staking rate")," > ",(0,i.yg)("em",{parentName:"p"},"ideal staking rate"),". The goal is to have the staking rate meet the ideal\nstaking rate. The current staking rate would be the total amount staked in the current era over the\ntotal token supply, where the total amount staked is the stake of all validators and nominators on\nthe network. The ideal staking rate accounts for having sufficient backing of\nDOT  to prevent the possible compromise of\nsecurity while keeping the native token liquid."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"staking",src:n(96991).A,width:"1089",height:"762"})),(0,i.yg)("p",{style:{textAlign:"center"}},"Source: ",(0,i.yg)("a",{href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"Research - Web3 Foundation")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"x-axis"),": Proportion of DOT staked"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"y-axis"),": Annualized percentage (inflation and staking rewards, see below)"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Blue line"),": Annual inflation rate diverted to NPoS, i.e., the total amount of tokens minted to\npay validators and nominators. For instance, 0.1 corresponds to 10% of token inflation diverted to\nstakers. Since annual token inflation is 10%, all inflation is used to pay validators and\nnominators, and 0% of token inflation is diverted to the treasury."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Green line"),": Annual rewards rate for stakers. For instance, 0.2 corresponds to 20% of annual\nreturns on the staked tokens. You can determine the current annual staking rewards rate by looking\nat the top bar of the staking overview on\n",(0,i.yg)("a",{parentName:"li",href:"https://staking.polkadot.cloud/#/overview"},"the Polkadot Staking Dashboard"),".")),(0,i.yg)("p",null,"Assuming that the ideal staking rate is 60%, all of the inflation would go to the validators and\nnominators if 60% of all DOT are staked. Any\ndeviation from the 60% - positive or negative - sends the proportional remainder to the treasury.\nDeviations from the ideal staking rate are referred to as ",(0,i.yg)("em",{parentName:"p"},"staking inefficiencies"),". Thus, the\ntreasury does not receive an inflow of funds from inflation when the system staking rate equals the\nideal staking rate. See ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"this page")," for more information about\ntreasury inflow sources."),(0,i.yg)("p",null,"For those who are interested in knowing more about the design of the inflation model for the\nnetwork, please see ",(0,i.yg)("a",{parentName:"p",href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"here"),"."),(0,i.yg)("h2",{id:"ideal-staking-rate"},"Ideal Staking Rate"),(0,i.yg)("p",null,"The ideal staking rate can vary between 45% to 75% based on the number of parachains that acquired a\nlease through an auction (this excludes the System parachains), based on the implementation\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/cd901764a52edc04a6d22bea3a526def593ab2a7/polkadot/runtime/common/src/impls.rs#L80"},"here"),"."),(0,i.yg)("p",null,"Briefly, the ideal staking rate can be calculated as follows:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"0.75 - auction_proportion")),(0,i.yg)("p",null,"where ",(0,i.yg)("inlineCode",{parentName:"p"},"auction_proportion")," is obtained by computing ",(0,i.yg)("inlineCode",{parentName:"p"},"min(auctioned_slots, 60) / 300"),". The\n",(0,i.yg)("inlineCode",{parentName:"p"},"auctioned_slots")," are all the auctioned slots without the slots for system parachains."),(0,i.yg)("p",null,"Assuming there are 50 filled slots, of which three are dedicated to system parachains (Asset Hub,\nBridge Hub and Collectives), there are 47 auctioned slots. The ",(0,i.yg)("inlineCode",{parentName:"p"},"auction_proportion")," is thus\n",(0,i.yg)("inlineCode",{parentName:"p"},"47 / 300 = 0.157"),". The ideal staking rate is ",(0,i.yg)("inlineCode",{parentName:"p"},"0.75 - 0.157 = 0.593"),"."),(0,i.yg)("p",null,"If the amount of tokens staked goes below 59.3%, then staking rewards for nominators increase,\nincentivizing them to stake more tokens on the network. On the contrary, staking rewards drop if\nstaked tokens exceed the ideal staking rate. This results from the change in the percentage of\nstaking rewards that go to the Treasury."))}g.isMDXComponent=!0},96991:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/images/rewards-inflation-180df2fa3a0b109245394270a57f7aa2.png"},47790:()=>{}}]);