(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[3179],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8974:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],i={},s="Deploying and running a Rust smart contract",c={unversionedId:"tutorial/04",id:"tutorial/04",isDocsHomePage:!1,title:"Deploying and running a Rust smart contract",description:"The following Solo test deploys a wasm contract on the chain. Then it",source:"@site/docs/tutorial/04.md",sourceDirName:"tutorial",slug:"/tutorial/04",permalink:"/docs/tutorial/04",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/tutorial/04.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a Chain; Core Contracts",permalink:"/docs/tutorial/03"},next:{title:"Structure of the smart contract",permalink:"/docs/tutorial/05"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-and-running-a-rust-smart-contract"},"Deploying and running a Rust smart contract"),(0,a.kt)("p",null,"The following ",(0,a.kt)("em",{parentName:"p"},"Solo")," test deploys a ",(0,a.kt)("em",{parentName:"p"},"wasm")," contract on the chain. Then it\ninvokes it: first it posts a request ",(0,a.kt)("inlineCode",{parentName:"p"},"storeString")," to set the string value, then\nit calls the view ",(0,a.kt)("inlineCode",{parentName:"p"},"getString")," to retrieve the value and checks it.\n`"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial3(t *testing.T) {\n    env := solo.New(t, false, false)\n    chain := env.NewChain(nil, "ex3")\n    // deploy the contract on chain\n    err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n    require.NoError(t, err)\n    \n    // call contract to store string\n    req := solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!")\n    req.WithIotas(1)\n    _, err = chain.PostRequestSync(req, nil)\n    require.NoError(t, err)\n    \n    // call the contract to extract value of the \'paramString\' and check\n    res, err := chain.CallView("example1", "getString")\n    require.NoError(t, err)\n    returnedString, exists, err := codec.DecodeString(res.MustGet("paramString"))\n    require.NoError(t, err)\n    require.True(t, exists)\n    require.EqualValues(t, "Hello, world!", returnedString)\n}\n')),(0,a.kt)("p",null,"Running the test will produce the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"=== RUN   TestTutorial3\n54:43.773   INFO    TestTutorial3   solo/solo.go:140    Solo environment created with initial logical time 2021-04-27 14:54:43.7720297 -0700 PDT m=+0.004614101\n54:43.773   INFO    TestTutorial3   solo/solo.go:187    deploying new chain 'ex3'. ID: $/p8vApchzrMUnr6ZwvSdZW9TJB1rq3VRzTQhoQdUbcgaD, state controller address: 16U8Gmzq8D3rPNqbiakUNRVhJcmh6CcfVEJJXq9GnM9LY\n54:43.773   INFO    TestTutorial3   solo/solo.go:189         chain '$/p8vApchzrMUnr6ZwvSdZW9TJB1rq3VRzTQhoQdUbcgaD'. state controller address: 16U8Gmzq8D3rPNqbiakUNRVhJcmh6CcfVEJJXq9GnM9LY\n54:43.773   INFO    TestTutorial3   solo/solo.go:190         chain '$/p8vApchzrMUnr6ZwvSdZW9TJB1rq3VRzTQhoQdUbcgaD'. originator address: 13z1b6AjEGokoJHh88Zw92cXDZgt956wgVTG6NJsHrHp4\n54:43.774   INFO    TestTutorial3.ex3   vmcontext/runreq.go:311 eventlog -> '[req] [0]9ohi6JLiT83YAojtubs734vEAQHibKvAxc1ouXXEgzrs: Ok'\n54:43.774   INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns\n54:43.774   INFO    TestTutorial3.ex3.m mempool/mempool.go:119  OUT MEMPOOL [0]9ohi6JLiT83YAojtubs734vEAQHibKvAxc1ouXXEgzrs\n54:43.774   INFO    TestTutorial3.ex3   solo/run.go:86  state transition #0 --\x3e #1. Requests in the block: 1. Outputs: 1\n54:43.774   INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms\n54:43.774   INFO    TestTutorial3.ex3   solo/solo.go:245    chain 'ex3' deployed. Chain ID: $/p8vApchzrMUnr6ZwvSdZW9TJB1rq3VRzTQhoQdUbcgaD\n54:43.775   INFO    TestTutorial3.ex3   solo/req.go:243 callView: blob::getBlobInfo\n54:43.775   INFO    TestTutorial3   solo/solofun.go:78  Solo::PutBlobDataIntoRegistry: len = 28924, hash = 28ELxzKLXvQMyFTK1DEXfW4R1mgMuTZeDDLycXMMKpxk\n54:43.775   INFO    TestTutorial3.ex3   solo/req.go:243 callView: root::getFeeInfo\n54:43.775   INFO    TestTutorial3.ex3   vmcontext/log.go:4  eventlog::fd91bc63 -> '[blob] hash: EiJwGFTpdrHuD1CNvvZaXzG328nN3okeQceQp3Gze2LC, field sizes: [28924 10]'\n54:43.775   INFO    TestTutorial3.ex3   vm/event.go:24  $/p8vApchzrMUnr6ZwvSdZW9TJB1rq3VRzTQhoQdUbcgaD::fd91bc63/event [blob] hash: EiJwGFTpdrHuD1CNvvZaXzG328nN3okeQceQp3Gze2LC, field sizes: [28924 10]\n54:43.775   INFO    TestTutorial3.ex3   vmcontext/runreq.go:311 eventlog -> '[req] [0]GaW6aGpFMz5RoGrihkzqDvf8Y5o7FwHKf4HVdwufkLPc: Ok'\n54:43.776   INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns\n54:43.776   INFO    TestTutorial3.ex3.m mempool/mempool.go:119  OUT MEMPOOL [0]GaW6aGpFMz5RoGrihkzqDvf8Y5o7FwHKf4HVdwufkLPc\n54:43.776   INFO    TestTutorial3.ex3   solo/run.go:86  state transition #1 --\x3e #2. Requests in the block: 1. Outputs: 1\n54:43.776   INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms\n54:43.809   INFO    TestTutorial3.ex3   vmcontext/log.go:4  eventlog::cebf5908 -> '[deploy] name: example1 hname: ffb07aeb, progHash: EiJwGFTpdrHuD1CNvvZaXzG328nN3okeQceQp3Gze2LC, dscr: 'N/A''\n54:43.809   INFO    TestTutorial3.ex3   vm/event.go:24  $/p8vApchzrMUnr6ZwvSdZW9TJB1rq3VRzTQhoQdUbcgaD::cebf5908/event [deploy] name: example1 hname: ffb07aeb, progHash: EiJwGFTpdrHuD1CNvvZaXzG328nN3okeQceQp3Gze2LC, dscr: 'N/A'\n54:43.809   INFO    TestTutorial3.ex3   vmcontext/runreq.go:311 eventlog -> '[req] [0]CHvU6BUDgt9MZJTxsYMZ1p1veg591mvwKGQBJd2KYdaB: Ok'\n54:43.809   INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns\n54:43.809   INFO    TestTutorial3.ex3.m mempool/mempool.go:119  OUT MEMPOOL [0]CHvU6BUDgt9MZJTxsYMZ1p1veg591mvwKGQBJd2KYdaB\n54:43.809   INFO    TestTutorial3.ex3   solo/run.go:86  state transition #2 --\x3e #3. Requests in the block: 1. Outputs: 1\n54:43.809   INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms\n54:43.811   INFO    TestTutorial3.ex3   vmcontext/log.go:4  Message stored: Hello, world!\n54:43.811   INFO    TestTutorial3.ex3   vmcontext/runreq.go:311 eventlog -> '[req] [0]G83Pq9vboW75dYD8Q8HPS1b3cnxYVFXn1yWn3YdpyLnn: Ok'\n54:43.811   INFO    TestTutorial3   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns\n54:43.812   INFO    TestTutorial3.ex3.m mempool/mempool.go:119  OUT MEMPOOL [0]G83Pq9vboW75dYD8Q8HPS1b3cnxYVFXn1yWn3YdpyLnn\n54:43.812   INFO    TestTutorial3.ex3   solo/run.go:86  state transition #3 --\x3e #4. Requests in the block: 1. Outputs: 1\n54:43.812   INFO    TestTutorial3   solo/clock.go:44    ClockStep: logical clock advanced by 1ms\n54:43.812   INFO    TestTutorial3.ex3   solo/req.go:243 callView: example1::getString\n--- PASS: TestTutorial3 (0.04s)\n")),(0,a.kt)("p",null,"The final state of the chain is ",(0,a.kt)("inlineCode",{parentName:"p"},"#4"),". The chain changes its state in response to\nthe requests."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"state transition #0 --\x3e #1")," settles the initial state of the chain (see\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/01"},"First example"),")."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition #1 --\x3e #2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition #2 --\x3e #3")," are result of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Solo"),"\ncall ",(0,a.kt)("inlineCode",{parentName:"p"},'err := chain.DeployWasmContract(nil, "example1", "../pkg/example_tutorial_bg.wasm")'),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first state transition corresponds to the storing of the ",(0,a.kt)("em",{parentName:"li"},"wasm")," binary\nfile as a binary object in the chain."),(0,a.kt)("li",{parentName:"ul"},"The second state transition corresponds to the deployment of the wasm smart\ncontract based on this binary object.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"state transition #3 --\x3e #4")," corresponds to sending the\nstring ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello, world!")," by posting a ",(0,a.kt)("inlineCode",{parentName:"p"},"storeString")," request to the newly deployed\nsmart contract."),(0,a.kt)("p",null,"The test then calls the view ",(0,a.kt)("inlineCode",{parentName:"p"},"getString")," of the smart contract and asserts the\nreturned string is ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello, world!"),". Note that when calling a view no state\ntransition occurs."))}d.isMDXComponent=!0}}]);