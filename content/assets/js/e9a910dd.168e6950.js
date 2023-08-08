"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70963],{3905:(e,t,p)=>{p.d(t,{Zo:()=>h,kt:()=>b});var a=p(67294);function l(e,t,p){return t in e?Object.defineProperty(e,t,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[t]=p,e}function r(e,t){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),p.push.apply(p,a)}return p}function i(e){for(var t=1;t<arguments.length;t++){var p=null!=arguments[t]?arguments[t]:{};t%2?r(Object(p),!0).forEach((function(t){l(e,t,p[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):r(Object(p)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(p,t))}))}return e}function c(e,t){if(null==e)return{};var p,a,l=function(e,t){if(null==e)return{};var p,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)p=r[a],t.indexOf(p)>=0||(l[p]=e[p]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)p=r[a],t.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(l[p]=e[p])}return l}var n=a.createContext({}),u=function(e){var t=a.useContext(n),p=t;return e&&(p="function"==typeof e?e(t):i(i({},t),e)),p},h=function(e){var t=u(e.components);return a.createElement(n.Provider,{value:t},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var p=e.components,l=e.mdxType,r=e.originalType,n=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),o=u(p),m=l,b=o["".concat(n,".").concat(m)]||o[m]||s[m]||r;return p?a.createElement(b,i(i({ref:t},h),{},{components:p})):a.createElement(b,i({ref:t},h))}));function b(e,t){var p=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=p.length,i=new Array(r);i[0]=m;var c={};for(var n in t)hasOwnProperty.call(t,n)&&(c[n]=t[n]);c.originalType=e,c[o]="string"==typeof e?e:l,i[1]=c;for(var u=2;u<r;u++)i[u]=p[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,p)}m.displayName="MDXCreateElement"},45045:(e,t,p)=>{p.r(t),p.d(t,{assets:()=>n,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=p(87462),l=(p(67294),p(3905));const r={id:"client-cpp-3.3.0",title:"Client CPP 3.3.0",sidebar_label:"Client CPP 3.3.0"},i=void 0,c={unversionedId:"versioned/client-cpp-3.3.0",id:"versioned/client-cpp-3.3.0",title:"Client CPP 3.3.0",description:"What's Changed",source:"@site/release-notes/versioned/client-cpp-3.3.0.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-3.3.0",permalink:"/release-notes/versioned/client-cpp-3.3.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-3.3.0.md",tags:[],version:"current",frontMatter:{id:"client-cpp-3.3.0",title:"Client CPP 3.3.0",sidebar_label:"Client CPP 3.3.0"}},n={},u=[{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}],h={toc:u},o="wrapper";function s(e){let{components:t,...p}=e;return(0,l.kt)(o,(0,a.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support end-to-end encryption in C Reader API by @rbarbey in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/262"},"https://github.com/apache/pulsar-client-cpp/pull/262")),(0,l.kt)("li",{parentName:"ul"},"[doc]"," Fix compile perf on MacOS and Ubuntu. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/263"},"https://github.com/apache/pulsar-client-cpp/pull/263")),(0,l.kt)("li",{parentName:"ul"},"[Doc]"," Add links to client docs and feature matrix in README.md by @momo-jun in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/264"},"https://github.com/apache/pulsar-client-cpp/pull/264")),(0,l.kt)("li",{parentName:"ul"},"Fix deadlock for negative acknowledgment by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/266"},"https://github.com/apache/pulsar-client-cpp/pull/266")),(0,l.kt)("li",{parentName:"ul"},"Support specifying the C++ standard for some higher dependencies by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/269"},"https://github.com/apache/pulsar-client-cpp/pull/269")),(0,l.kt)("li",{parentName:"ul"},"Bumped version to 3.3.0-pre by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/271"},"https://github.com/apache/pulsar-client-cpp/pull/271")),(0,l.kt)("li",{parentName:"ul"},"Fix batch receive for C client unit test failed. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/272"},"https://github.com/apache/pulsar-client-cpp/pull/272")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," AuthAthenz supports Copper Argos by @shustsud in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/274"},"https://github.com/apache/pulsar-client-cpp/pull/274")),(0,l.kt)("li",{parentName:"ul"},"[feat][consumer]"," Support parse broker metadata by @Shoothzj in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/276"},"https://github.com/apache/pulsar-client-cpp/pull/276")),(0,l.kt)("li",{parentName:"ul"},"add cmake-build-debug dir to gitignore by @Shoothzj in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/275"},"https://github.com/apache/pulsar-client-cpp/pull/275")),(0,l.kt)("li",{parentName:"ul"},"[docs]"," Fix the developer guide for macOS users by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/279"},"https://github.com/apache/pulsar-client-cpp/pull/279")),(0,l.kt)("li",{parentName:"ul"},"Fix flaky testConsumerEventWithoutPartition caused by the change of Pulsar 3.0 by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/281"},"https://github.com/apache/pulsar-client-cpp/pull/281")),(0,l.kt)("li",{parentName:"ul"},"[feat][Message]"," Add getIndex method on Message by @Shoothzj in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/277"},"https://github.com/apache/pulsar-client-cpp/pull/277")),(0,l.kt)("li",{parentName:"ul"},"Fix testSchemaIncompatibility for Protobuf 3.20.0 or later by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/282"},"https://github.com/apache/pulsar-client-cpp/pull/282")),(0,l.kt)("li",{parentName:"ul"},"Remove log4cxx dependency and its specified configuration by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/283"},"https://github.com/apache/pulsar-client-cpp/pull/283")),(0,l.kt)("li",{parentName:"ul"},"Close the socket gracefully on Windows by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/284"},"https://github.com/apache/pulsar-client-cpp/pull/284")),(0,l.kt)("li",{parentName:"ul"},"Fix ci failed on macOS env. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/288"},"https://github.com/apache/pulsar-client-cpp/pull/288")),(0,l.kt)("li",{parentName:"ul"},"Fix broker return error code confusion when not setting subscription name. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/289"},"https://github.com/apache/pulsar-client-cpp/pull/289")),(0,l.kt)("li",{parentName:"ul"},"feat: Support message copy for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/285"},"https://github.com/apache/pulsar-client-cpp/pull/285")),(0,l.kt)("li",{parentName:"ul"},"Add missing TLS-related method definitions for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/287"},"https://github.com/apache/pulsar-client-cpp/pull/287")),(0,l.kt)("li",{parentName:"ul"},"[feat]"," Support configure startMessageIdInclusive for the reader by @RobertIndie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/291"},"https://github.com/apache/pulsar-client-cpp/pull/291")),(0,l.kt)("li",{parentName:"ul"},"Fix build failure with the Protobuf 23.3 by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/290"},"https://github.com/apache/pulsar-client-cpp/pull/290")),(0,l.kt)("li",{parentName:"ul"},"Fix retriable errors not handled well when creating producer or consumer by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/293"},"https://github.com/apache/pulsar-client-cpp/pull/293")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," producer will not be created when topic update partition by @TakaHiR07 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/295"},"https://github.com/apache/pulsar-client-cpp/pull/295")),(0,l.kt)("li",{parentName:"ul"},"Fix the buggy Future and Promise implementations by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/299"},"https://github.com/apache/pulsar-client-cpp/pull/299")),(0,l.kt)("li",{parentName:"ul"},"Fix the test script does not work for Docker on macOS by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/297"},"https://github.com/apache/pulsar-client-cpp/pull/297")),(0,l.kt)("li",{parentName:"ul"},"feat: Support table view for C client. by @shibd in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/294"},"https://github.com/apache/pulsar-client-cpp/pull/294")),(0,l.kt)("li",{parentName:"ul"},"Fix the wrong backoff computation when retrying by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/296"},"https://github.com/apache/pulsar-client-cpp/pull/296")),(0,l.kt)("li",{parentName:"ul"},"Fix the build failure with C++20 standard by @BewareMyPower in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/302"},"https://github.com/apache/pulsar-client-cpp/pull/302")),(0,l.kt)("li",{parentName:"ul"},"[fix]"," callback of send batch message receives a wrong result when flushing by @TakaHiR07 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/303"},"https://github.com/apache/pulsar-client-cpp/pull/303")),(0,l.kt)("li",{parentName:"ul"},"[fix][client]"," Memory leak during GET_LAST_MESSAGE_ID command processing. by @fundaev in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/301"},"https://github.com/apache/pulsar-client-cpp/pull/301"))),(0,l.kt)("h2",{id:"new-contributors"},"New Contributors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@rbarbey made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/262"},"https://github.com/apache/pulsar-client-cpp/pull/262")),(0,l.kt)("li",{parentName:"ul"},"@momo-jun made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/264"},"https://github.com/apache/pulsar-client-cpp/pull/264")),(0,l.kt)("li",{parentName:"ul"},"@shustsud made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/274"},"https://github.com/apache/pulsar-client-cpp/pull/274")),(0,l.kt)("li",{parentName:"ul"},"@Shoothzj made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/276"},"https://github.com/apache/pulsar-client-cpp/pull/276")),(0,l.kt)("li",{parentName:"ul"},"@TakaHiR07 made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/295"},"https://github.com/apache/pulsar-client-cpp/pull/295")),(0,l.kt)("li",{parentName:"ul"},"@fundaev made their first contribution in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/301"},"https://github.com/apache/pulsar-client-cpp/pull/301"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/compare/v3.2.0...v3.3.0"},"https://github.com/apache/pulsar-client-cpp/compare/v3.2.0...v3.3.0")))}s.isMDXComponent=!0}}]);