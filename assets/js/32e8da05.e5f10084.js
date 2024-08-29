(self.webpackChunk=self.webpackChunk||[]).push([[5231],{67141:(e,a,n)=>{"use strict";n.d(a,{A:()=>o});var t=n(96540);const o=function(e){var a,n=e.message,o=(0,t.useState)(!0),i=o[0],r=o[1];return t.createElement(t.Fragment,null,i&&t.createElement("div",{className:"message-box"},t.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),t.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(a=n,a.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47379:(e,a,n)=>{"use strict";n.d(a,{A:()=>u});var t=n(90675),o=n(10467),i=n(96540),r=n(69761),s=n(82285),l=n(11135);function c(e,a,n){return d.apply(this,arguments)}function d(){return(d=(0,o.A)((0,t.A)().mark((function e(a,n,o){var i,l,c,d,p;return(0,t.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return c=new r.E(i),e.next=25,s.G.create({provider:c});case 25:d=e.sent,(p=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+p[0]+") in "+n);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,a,n,t){switch(a){case"humanReadable":(0,l.HumanReadable)(e,n,t);break;case"precise":(0,l.Precise)(e,n,t);break;case"blocksToDays":(0,l.BlocksToDays)(e,t);break;case"erasToDays":(0,l.ErasToDays)(e,t,n);break;case"percentage":(0,l.Percentage)(e,t);break;case"permillToPercent":(0,l.PermillToPercent)(e,t);break;case"arrayLength":(0,l.ArrayLength)(e,t);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var a=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),u=d[0],h=d[1];return a=a.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?p(r.toString(),l,a,h):h(r.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.A)((0,t.A)().mark((function e(){var o;return(0,t.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a,n,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(o,l,a,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},11135:e=>{var a="polkadot",n="kusama",t="statemine",o="statemint",i="polkadotpeople",r="kusamapeople",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,c){var d=void 0;if(l===a||l===o||l==i)d=3;else{if(l!==n&&l!==t&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=6}e=parseFloat(e),c((e=Number.isInteger(e/s[l].precision)?e/s[l].precision+" "+s[l].symbol:(e/s[l].precision).toFixed(d)+" "+s[l].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/s[a].precision+" "+s[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,s,l){var c=void 0;if(l===a||l===o||l==i)c=1;else{if(l!==n&&l!==t&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}s((e/=c).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},78294:(e,a,n)=>{"use strict";n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>w,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var t=n(58168),o=n(98587),i=(n(96540),n(15680)),r=n(67141),s=n(47379),l=["components"],c={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Polkadot's Crowdloans and How to Participate.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},d=void 0,p={unversionedId:"learn/learn-crowdloans",id:"learn/learn-crowdloans",title:"Parachain Crowdloans",description:"Polkadot's Crowdloans and How to Participate.",source:"@site/../docs/learn/learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/docs/learn-crowdloans",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-crowdloans.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1714978252,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Polkadot's Crowdloans and How to Participate.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},sidebar:"docs",previous:{title:"Parachain Slot Auctions",permalink:"/docs/learn-auction"},next:{title:"Parachains FAQ",permalink:"/docs/learn-parachains-faq"}},u={},h=[{value:"Crowdloan Campaigns vs Parachain Auctions",id:"crowdloan-campaigns-vs-parachain-auctions",level:2},{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",level:2},{value:"Contributing to Crowdloans",id:"contributing-to-crowdloans",level:3},{value:"Withdraw Crowdloaned Tokens",id:"withdraw-crowdloaned-tokens",level:3}],m={toc:h},g="wrapper";function w(e){var a=e.components,c=(0,o.A)(e,l);return(0,i.yg)(g,(0,t.A)({},m,c,{components:a,mdxType:"MDXLayout"}),(0,i.yg)(r.A,{message:"Crowdloans will be deprecated right after [Agile Coretime](/docs/learn-agile-coretime) is activated on the network. For fundraising in a decentralized, transparent, and regulatory compliant manner within the ecosystem, check out the [Polimec parachain](https://www.polimec.org/).",mdxType:"MessageBox"}),(0,i.yg)("p",null,"Polkadot allows parachains to source tokens\nfor their parachain bids in a decentralized crowdloan."),(0,i.yg)("admonition",{title:"Contributing to a crowdloan",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you are here for guidance on how to contribute to a crowdloan, watch the video below or read this\n",(0,i.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177341-how-to-participate-in-crowdloans-on-polkadot-or-kusama"},"support article on crowdloans"),".")),(0,i.yg)("div",{className:"row"},(0,i.yg)("div",{className:"col text--center"},(0,i.yg)("a",{href:"https://youtu.be/AA9mPANmzmU"},(0,i.yg)("img",{src:"https://img.youtube.com/vi/AA9mPANmzmU/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,i.yg)("p",null,(0,i.yg)("a",{href:"https://youtu.be/AA9mPANmzmU"},"Crowdloans on Polkadot-JS")))),(0,i.yg)("admonition",{title:"Testing on Rococo",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"For information on how to participate in the crowdloan and parachain auction testing on Rococo,\nplease see the ",(0,i.yg)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo content"))),(0,i.yg)("h2",{id:"crowdloan-campaigns-vs-parachain-auctions"},"Crowdloan Campaigns vs Parachain Auctions"),(0,i.yg)("p",null,"It is important to recognize that starting a crowdloan campaign is ",(0,i.yg)("strong",{parentName:"p"},"optional")," for participating in\na parachain slot auction. The parachain slot auction can also be won directly through self-funding\nwithout community involvement. To reiterate, crowdloan campaigns are just one of the means to win\nauctions, which allow the community to participate in a trustless and permissionless way."),(0,i.yg)("p",null,"Let's look at a scenario where Project A is hoping to gain a parachain slot on\nPolkadot, but they don't have enough tokens to\nbid directly to win the parachain auction. Project A could benefit from starting a new crowdloan\ncampaign to help secure a parachain slot. Crowdloans are trustless and are supported natively on\nPolkadot, allowing the community to bond their\ntokens on Project A's behalf for the entire parachain lease duration. This will allow Project A to\ncompete with projects that may have access to greater capital, given the project has sufficient\ncommunity support. In return, the community contributors are rewarded by the projects that win the\nparachain slot, which would compensate for the opportunity cost of bonding their tokens for the\nlease duration."),(0,i.yg)("p",null,"On the other hand, let's say Project B, which is more established and has access to capital, is\nhoping to secure a parachain slot through self-funding. Project B is not relying on community\nfunding (at least via the crowdloan mechanism), so they must determine how much funding they can\nallocate towards winning a slot."),(0,i.yg)("p",null,"Project B fully controls how much they are willing to contribute to gaining a parachain slot.\nProject B need not work on creating a reward model for community contributors like Project A. In\ncontrast, crowdloan campaigns benefit projects with access to limited capital but have strong\ncommunity support. They are also beneficial for projects that can successfully bid to win the\nauction with self-funding but are looking for a mechanism to bootstrap their community and get\nnoticed by the key actors in the ecosystem."),(0,i.yg)("p",null,"It is publicly visible on-chain whether or not a project is bidding directly or through a crowdloan\ncampaign. More details regarding creating and executing a crowdloan campaign are provided below."),(0,i.yg)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a Crowdloan Campaign"),(0,i.yg)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot by depositing a\nspecified number of tokens. A campaign is configured as a range of slots (i.e. the duration of the\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," will bid for), a cap, and a duration. The duration can last over\nseveral auctions as long as the range of slots matches those of the auction (i.e. the first lease\nperiod of the crowdloan is the same or bigger than that of the auction). This means a team will not\nneed to restart the campaign just because they do not secure a slot on their first attempt."),(0,i.yg)("admonition",{title:"Crowdloan Submission Deposit Required",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"To create a new crowdloan campaign, your account must have\n500 DOT transferrable which will be reserved\nfor the duration of the crowdloan.")),(0,i.yg)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"A crowdloan campaign can start well before the auction slot is opened.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-auction"},"auction")," if the cap is not reached.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'Set the desired end of the crowdloan in the "Ending block" field. This helps ensure that the\ncrowdloan is live during the entire auction. For example, if an auction starts in three days and\nlasts five days, you should set your crowdloan to end in 10 days or a similar timescale.')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"One way of calculating the ending block number is adding: ",(0,i.yg)("inlineCode",{parentName:"p"},"(10 * 60 * 24 * 7) * (x * 6) + y")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"x")," is the number of auction periods you want the crowdloan to continue for")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"y")," is the current block number")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"(Blocks/Min * Min/Hour * Hour/Day * Day/Week) * (x[Period] * Week/Period) + y[BlockNumber]"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,i.yg)("inlineCode",{parentName:"p"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,i.yg)("inlineCode",{parentName:"p"},"3"),". The last slot must\nalso be within that range.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will\nbe returned to you."))))),(0,i.yg)("p",null,"Before the start of the crowdloan campaign, the owner will upload the parachain data. Once the\ncrowdloan is live, ",(0,i.yg)("strong",{parentName:"p"},"the parachain configuration will be locked")," and will be deployed as the\nparachain's runtime. Of course, once the parachain is running, it can always change via runtime\nupgrades (as determined through its local governance)."),(0,i.yg)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a Crowdloan Campaign"),(0,i.yg)("h3",{id:"contributing-to-crowdloans"},"Contributing to Crowdloans"),(0,i.yg)("admonition",{title:"Minimum Crowdloan Contribution",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The minimum balance for contributions for a crowdloan campaign is currently set to\n",(0,i.yg)(s.A,{network:"polkadot",path:"consts.crowdloan.minContribution",defaultValue:5e10,filter:"humanReadable",mdxType:"RPC"}),".\n","\nThis is to make crowdloans as accessible as possible while maintaining a balance to justify using\nthe network's resources.")),(0,i.yg)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a transaction referencing the campaign's index. Tokens used to participate must be\ntransferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and governance\n","\u2014"," because they will be moved into a module-controlled account that was generated uniquely for\nthis campaign. See ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system accounts")," for more\ninformation."),(0,i.yg)("admonition",{title:"Do not send Crowdloan contributions directly to the Parachain address",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"All crowdloan contributions are handled by the Crowdloan module\u2019s logic, where a campaign is\nidentified by an index, not by address. ",(0,i.yg)("strong",{parentName:"p"},"Never transfer tokens to an address in support of a\ncampaign"),".")),(0,i.yg)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,i.yg)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,i.yg)("h3",{id:"withdraw-crowdloaned-tokens"},"Withdraw Crowdloaned Tokens"),(0,i.yg)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the campaign succeeds, the parachain will enter a retirement phase at the end of its lease.\nDuring this phase, participants can withdraw the tokens with which they participated."),(0,i.yg)("li",{parentName:"ul"},"If the campaign is unsuccessful, this retirement phase will begin at its configured end, and\nparticipants can likewise withdraw their tokens.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"crowdloan.contribute")," extrinsic is trustless"),(0,i.yg)("p",{parentName:"admonition"},"Contributing to a crowdloan through Polkadot JS Apps (which uses ",(0,i.yg)("inlineCode",{parentName:"p"},"crowdloan.contribute")," extrinsic)\nguarantees that you receive your tokens after the campaign ends. If you intend to contribute through\nother websites and custodial service providers like central exchanges, review their terms and\nconditions thoroughly and assess the associated risks.")),(0,i.yg)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. This can be done through the permissionless ",(0,i.yg)("inlineCode",{parentName:"p"},"crowdloan.refund")," extrinsic available on\nPolkadot JS Apps > Developer > Extrinsics page, by specifying the parachain ID. This extrinsic may\nneed to be issued multiple times if the list of contributors is too long. All contributions must be\nreturned before the crowdloan is entirely deleted."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Crowdloan refund",src:n(1764).A,width:"1440",height:"552"})),(0,i.yg)("p",null,"Many projects will have dashboards that allow users to participate in their crowdloans. PolkadotJS\napps also offer a breakdown of ongoing crowdloans on the\n",(0,i.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,i.yg)("p",null,"Here is an example of the crowdloans in play during the very first Kusama auction."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"crowdloan dashboard",src:n(41841).A,width:"2328",height:"1540"})),(0,i.yg)("p",null,"Furthermore, check out this video on\n",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}w.isMDXComponent=!0},1764:(e,a,n)=>{"use strict";n.d(a,{A:()=>t});const t=n.p+"assets/images/crowdloan-refund-a452b6b303e27c25b3e87c42577a9265.png"},41841:(e,a,n)=>{"use strict";n.d(a,{A:()=>t});const t=n.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"},47790:()=>{}}]);