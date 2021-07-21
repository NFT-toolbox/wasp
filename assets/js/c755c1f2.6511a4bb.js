(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[18],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),h=o,m=f["".concat(s,".").concat(h)]||f[h]||u[h]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6820:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=["components"],i={},s="Core smart contracts",l={unversionedId:"contract_types/overview",id:"contract_types/overview",isDocsHomePage:!1,title:"Core smart contracts",description:"The virtual machine or VM of the chain is the component responsible for the",source:"@site/docs/contract_types/overview.md",sourceDirName:"contract_types",slug:"/contract_types/overview",permalink:"/docs/contract_types/overview",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/contract_types/overview.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ISCP accounts. Controlling token balances",permalink:"/docs/tutorial/12"},next:{title:"The `root` contract",permalink:"/docs/contract_types/root"}},p=[],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-smart-contracts"},"Core smart contracts"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"virtual machine")," or ",(0,a.kt)("em",{parentName:"p"},"VM")," of the chain is the component responsible for the\ndeterministic calculation of the next state of the chain from the current state\nand requests. The input of the ",(0,a.kt)("em",{parentName:"p"},"VM")," task is an ordered batch of requests plus\nUTXO state of the chain address. The output of the VM task is the mutation of\nthe chain state (the ",(0,a.kt)("em",{parentName:"p"},"block"),") and an anchor transaction, yet unsigned."),(0,a.kt)("p",null,"One run of the ",(0,a.kt)("em",{parentName:"p"},"VM")," is represented by the ",(0,a.kt)("em",{parentName:"p"},"VMContext")," object. The ",(0,a.kt)("em",{parentName:"p"},"VMContext"),"\nprovides a mutable context for running the batch by the smart contracts on the\nchain. It also provides access to the other smart contracts that are deployed on\nthe chain."),(0,a.kt)("p",null,"There are currently 6 core smart contracts that are always deployed on each\nchain. They ensure core logic of the VM and provide a platform for plugging\nother smart contracts into the chain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contract_types/root"},"root")," contract responsible for initialization of the chain,\ndeployment of new contracts, and other administrative functions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contract_types/default"},"_default")," catch-all contract for unhandled requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contract_types/blob"},"blob")," contract responsible for on-chain registration of arbitrary\n",(0,a.kt)("em",{parentName:"li"},"data blobs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contract_types/accounts"},"accounts")," contract responsible for the ledger of on-chain\ncolored token accounts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contract_types/blocklog"},"blocklog")," contract keeps track of the blocks of requests that\nwere processed by the chain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/contract_types/eventlog"},"eventlog")," contract responsible for the on-chain event log.")))}f.isMDXComponent=!0}}]);