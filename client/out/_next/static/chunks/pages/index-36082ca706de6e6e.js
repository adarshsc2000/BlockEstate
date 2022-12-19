(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return A(49332)}])},93554:function(e,t,A){"use strict";A.d(t,{Z:function(){return s}});var n=A(85893),i=A(9008),a=A.n(i);function s(e){return(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:e.title}),(0,n.jsx)("meta",{name:"description",content:e.description}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}s.defaultProps={title:"BlockEstate",description:"A decentralized and modern blockchain application to implement real estate"}},14558:function(e,t,A){"use strict";A.d(t,{Z:function(){return g}});var n=A(85893),i=A(93554),a=A(10682),s=A(1850),r=A(8017),o=A(89583),l=A(78003),d=A(83078),c=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"_notary"},{"type":"address","name":"_slrb"}]},{"type":"error","name":"AlreadyListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NoProceeds","inputs":[]},{"type":"error","name":"NotApprovedForMarketplace","inputs":[]},{"type":"error","name":"NotListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NotOwner","inputs":[]},{"type":"error","name":"PriceMustBeAboveZero","inputs":[]},{"type":"error","name":"PriceNotMet","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}]},{"type":"event","anonymous":false,"name":"PropertyBought","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"event","anonymous":false,"name":"PropertyCanceled","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"PropertyListed","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"function","name":"buyItem","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"cancelListing","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"getListing","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"tuple","components":[{"type":"uint256","name":"price"},{"type":"address","name":"seller"}]}]},{"type":"function","name":"getProceeds","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"seller"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"isRegularUser","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"bool"}]},{"type":"function","name":"listItem","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}],"outputs":[]},{"type":"function","name":"updateListing","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"newPrice"}],"outputs":[]},{"type":"function","name":"withdrawProceeds","constant":false,"payable":false,"inputs":[],"outputs":[]}]'),u=JSON.parse('{"5":{"BlockEstate":["0xE0E7bCABae49B6e64e689573b86D58183331e458"],"PropertyNFT":["0x187Cd3f19665aD2c2A486E0762B7546f07b2edD3"]},"31337":{"BlockEstate":["0x5FbDB2315678afecb367f032d93F642f64180aa3"],"PropertyNFT":["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"]}}'),p=A(67294),g=function(){let{isWeb3Enabled:e,chainId:t,account:A}=(0,d.Nr)(),g=t?parseInt(t).toString():"31337",{runContractFunction:f}=(0,d.JX)(),[h,m]=(0,p.useState)(!1);async function y(){e&&f({params:{abi:c,contractAddress:u[g].BlockEstate[0],functionName:"isRegularUser",params:{}},onError:e=>console.log(e),onSuccess:e=>m(e)})}return(0,p.useEffect)(()=>{y()},[e,A]),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(r.Z,{collapseOnSelect:!0,bg:"primary",variant:"dark",expand:"md",fixed:"top",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(r.Z.Brand,{href:"/",children:[(0,n.jsx)(o.xng,{size:28})," BlockEstate"]}),(0,n.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,n.jsx)(l.cg,{className:"d-inline-block d-md-none"}),(0,n.jsx)(r.Z.Toggle,{"aria-controls":"responsive-navbar-nav"})]}),(0,n.jsx)(r.Z.Collapse,{id:"responsive-navbar-nav",children:(0,n.jsxs)(s.Z,{className:"ms-auto",children:[h&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z.Link,{href:"/browse",children:"Browse"}),(0,n.jsx)(s.Z.Link,{href:"#",children:"Profile"})]}),(0,n.jsx)(s.Z.Link,{href:"/whitepaper",children:"White Paper"}),(0,n.jsx)(l.cg,{className:"d-none d-md-block"})]})})]})})]})}},19749:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,A;var i,{src:a,sizes:h,unoptimized:y=!1,priority:E=!1,loading:x,className:C,quality:b,width:w,height:v,fill:j,style:Q,onLoad:B,onLoadingComplete:I,placeholder:P="empty",blurDataURL:D,layout:S,objectFit:k,objectPosition:M,lazyBoundary:F,lazyRoot:U}=e,_=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=r.useContext(c.ImageConfigContext),N=r.useMemo(()=>{let e=p||L||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),A=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:A})},[L]),R=_,z=R.loader||u.default;if(delete R.loader,"__next_img_default"in z){if("custom"===N.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=z;z=e=>{let{config:t}=e,A=s(e,["config"]);return Z(A)}}if(S){"fill"===S&&(j=!0);let T={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];T&&(Q=n({},Q,T));let O={responsive:"100vw",fill:"100vw"}[S];O&&!h&&(h=O)}let K="",W=f(w),G=f(v);if("object"==typeof(i=a)&&(g(i)||void 0!==i.src)){let Y=g(a)?a.default:a;if(!Y.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(!Y.height||!Y.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)));if(t=Y.blurWidth,A=Y.blurHeight,D=D||Y.blurDataURL,K=Y.src,!j){if(W||G){if(W&&!G){let J=W/Y.width;G=Math.round(Y.height*J)}else if(!W&&G){let H=G/Y.height;W=Math.round(Y.width*H)}}else W=Y.width,G=Y.height}}let V=!E&&("lazy"===x||void 0===x);((a="string"==typeof a?a:K).startsWith("data:")||a.startsWith("blob:"))&&(y=!0,V=!1),N.unoptimized&&(y=!0);let[X,q]=r.useState(!1),[$,ee]=r.useState(!1),et=f(b),eA=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:M}:{},$?{}:{color:"transparent"},Q),en="blur"===P&&D&&!X?{backgroundSize:eA.objectFit||"cover",backgroundPosition:eA.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:W,heightInt:G,blurWidth:t,blurHeight:A,blurDataURL:D}),'")')}:{},ei=function(e){let{config:t,src:A,unoptimized:n,width:i,quality:a,sizes:s,loader:r}=e;if(n)return{src:A,srcSet:void 0,sizes:void 0};let{widths:o,kind:l}=function(e,t,A){let{deviceSizes:n,allSizes:i}=e;if(A){let a=/(^|\s)(1?\d?\d)vw/g,s=[];for(let r;r=a.exec(A);r)s.push(parseInt(r[2]));if(s.length){let o=.01*Math.min(...s);return{widths:i.filter(e=>e>=n[0]*o),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:l,kind:"x"}}(t,i,s),d=o.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:o.map((e,n)=>"".concat(r({config:t,src:A,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)).join(", "),src:r({config:t,src:A,quality:a,width:o[d]})}}({config:N,src:a,unoptimized:y,width:W,quality:et,sizes:h,loader:z}),ea=a,es={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:R.crossOrigin},er=r.useRef(B);r.useEffect(()=>{er.current=B},[B]);let eo=r.useRef(I);r.useEffect(()=>{eo.current=I},[I]);let el=n({isLazy:V,imgAttributes:ei,heightInt:G,widthInt:W,qualityInt:et,className:C,imgStyle:eA,blurStyle:en,loading:x,config:N,fill:j,unoptimized:y,placeholder:P,loader:z,srcString:ea,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:q,setShowAltText:ee},R);return r.default.createElement(r.default.Fragment,null,r.default.createElement(m,Object.assign({},el)),E?r.default.createElement(o.default,null,r.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},es))):null)};var n=A(6495).Z,i=A(92648).Z,a=A(91598).Z,s=A(17273).Z,r=a(A(67294)),o=i(A(83121)),l=A(2675),d=A(10139),c=A(28730);A(57238);var u=i(A(23078));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,A,i,a,s,r){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===A&&s(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist(){},preventDefault(){r=!0,t.preventDefault()},stopPropagation(){o=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let m=e=>{var{imgAttributes:t,heightInt:A,widthInt:i,qualityInt:a,className:o,imgStyle:l,blurStyle:d,isLazy:c,fill:u,placeholder:p,loading:g,srcString:f,config:m,unoptimized:y,loader:E,onLoadRef:x,onLoadingCompleteRef:C,setBlurComplete:b,setShowAltText:w,onLoad:v,onError:j}=e,Q=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=c?"lazy":g,r.default.createElement(r.default.Fragment,null,r.default.createElement("img",Object.assign({},Q,t,{width:i,height:A,decoding:"async","data-nimg":u?"fill":"1",className:o,loading:g,style:n({},l,d),ref:r.useCallback(e=>{e&&(j&&(e.src=e.src),e.complete&&h(e,f,p,x,C,b,y))},[f,p,x,C,b,j,y]),onLoad(e){let t=e.currentTarget;h(t,f,p,x,C,b,y)},onError(e){w(!0),"blur"===p&&b(!0),j&&j(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:A,blurWidth:n,blurHeight:i,blurDataURL:a}=e,s=n||t,r=i||A,o=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&r?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(r,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},23078:function(e,t){"use strict";function A(e){let{config:t,src:A,width:n,quality:i}=e;return A.endsWith(".svg")&&!t.dangerouslyAllowSVG?A:"".concat(t.path,"?url=").concat(encodeURIComponent(A),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,A.__next_img_default=!0,t.default=A},56481:function(e,t,A){"use strict";A.r(t),A.d(t,{default:function(){return p}});var n=A(85893),i=A(10682),a=A(67294),s=A(53763);let r=e=>{let{text:t}=e,A=Array.from(t),i={visible:{opacity:1,x:0,y:0,transition:{type:"spring",damping:12,stiffness:100}},hidden:{opacity:0,x:-20,y:10,transition:{type:"spring",damping:12,stiffness:100}}};return(0,n.jsx)(s.E.div,{style:{overflow:"hidden",display:"flex",fontSize:"3rem"},variants:{hidden:{opacity:0},visible:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.03,delayChildren:.04*e}}}},initial:"hidden",animate:"visible",children:A.map((e,t)=>(0,n.jsx)(s.E.span,{variants:i,children:" "===e?"\xa0":e},t))})};var o=A(65820);let l={hidden:{opacity:0},visible:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.03,delayChildren:.04*e}}}},d=e=>{let{text:t}=e,[A,i]=(0,a.useState)(!1);return setTimeout(()=>{i(!0)},2e3),(0,n.jsx)(s.E.div,{style:{overflow:"hidden",display:"flex",fontSize:"1.5rem"},variants:l,initial:"hidden",animate:"visible",children:(0,n.jsx)(o.M,{children:A&&(0,n.jsx)(s.E.p,{exit:{opacity:0},children:(0,n.jsx)("i",{children:"Make property finding and buying an easy process"})})})})};var c=[{src:"/_next/static/media/pic1prop1.6f56eab0.jpeg",height:503,width:856,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAXEAEBAQEAAAAAAAAAAAAAAAARAQBx/9oACAEBAAE/AAq3m//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5},{src:"/_next/static/media/pic2prop1.39932c86.jpeg",height:503,width:856,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAYEAACAwAAAAAAAAAAAAAAAAAAEQESgf/aAAgBAQABPwCqlvD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5},{src:"/_next/static/media/pic3prop1.00668776.jpeg",height:503,width:856,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAYEAACAwAAAAAAAAAAAAAAAAABEQACcf/aAAgBAQABPwAVRbOT/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5},{src:"/_next/static/media/pic4prop2.c18ba452.jpeg",height:503,width:856,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtgf/xAAWEAEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQEAAT8AdC//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5},{src:"/_next/static/media/pic6prop2.0937d201.jpeg",height:503,width:856,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtgf/xAAWEAEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQEAAT8AdC//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5}];let u=()=>(console.log(c),(0,n.jsxs)(s.E.div,{className:"topproperties",children:[(0,n.jsx)("b",{children:"Our top Properties are"}),(0,n.jsx)("br",{}),(0,n.jsx)(s.E.div,{className:"inner-topproperties",children:c.map(e=>(0,n.jsx)(s.E.div,{className:"item",children:(0,n.jsx)("img",{src:e,alt:""})}))})]}));function p(){return(0,n.jsxs)(i.Z,{fluid:!0,children:[(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:(0,n.jsx)(r,{text:"Welcome to BlockEstate"})}),(0,n.jsx)("br",{}),(0,n.jsx)(d,{}),(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(u,{})})]})}},49332:function(e,t,A){"use strict";A.r(t),A.d(t,{default:function(){return c}});var n=A(85893),i=A(14558),a=A(93554),s=A(8017),r=function(){let e=new Date().getFullYear();return(0,n.jsx)(s.Z,{bg:"primary",variant:"dark",fixed:"bottom",className:"d-flex justify-content-center",children:(0,n.jsxs)(s.Z.Text,{children:["\xa9 Copyright ",e,":  BlockEstate"]})})},o=A(56481),l=A(25675),d=A.n(l);function c(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(a.Z,{}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{zIndex:-1,position:"fixed",width:"100vw",height:"100vh"},children:(0,n.jsx)(d(),{src:"/assets/landingpage.jpg",alt:"Mountains with snow",layout:"fill",objectFit:"cover"})}),(0,n.jsx)(o.default,{})]}),(0,n.jsx)(r,{})]})}},25675:function(e,t,A){e.exports=A(19749)}},function(e){e.O(0,[279,445,871,587,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);