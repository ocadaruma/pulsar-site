"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(o,".").concat(m)]||c[m]||h[m]||l;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={id:"client-java-3.0.2",title:"Client Java 3.0.2",sidebar_label:"Client Java 3.0.2"},i=void 0,p={unversionedId:"versioned/client-java-3.0.2",id:"versioned/client-java-3.0.2",title:"Client Java 3.0.2",description:"- Fix print error log 'Auto getting partitions failed' when expend partition. #21485",source:"@site/release-notes/versioned/client-java-3.0.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-3.0.2",permalink:"/release-notes/versioned/client-java-3.0.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-3.0.2.md",tags:[],version:"current",frontMatter:{id:"client-java-3.0.2",title:"Client Java 3.0.2",sidebar_label:"Client Java 3.0.2"}},o={},s=[],u={toc:s},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix print error log 'Auto getting partitions failed' when expend partition. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21485"},"#21485")),(0,n.kt)("li",{parentName:"ul"},"Fix reader.hasMessageAvailable return false when incoming queue is not empty ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21259"},"#21259")),(0,n.kt)("li",{parentName:"ul"},"Merge lookup requests for the same topic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21232"},"#21232")),(0,n.kt)("li",{parentName:"ul"},"Fix same producer/consumer use more than one connection per broker ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21144"},"#21144")),(0,n.kt)("li",{parentName:"ul"},"Fix repeat consume when using n-ack and batched messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21116"},"#21116")),(0,n.kt)("li",{parentName:"ul"},"Avoid ack hole for chunk message ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21101"},"#21101")),(0,n.kt)("li",{parentName:"ul"},"Fix logging problem in pulsar client ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21094"},"#21094")),(0,n.kt)("li",{parentName:"ul"},"Fix consumer can't consume resent chunked messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21070"},"#21070")),(0,n.kt)("li",{parentName:"ul"},"Fix cannot retry chunk messages and send to DLQ ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21048"},"#21048")),(0,n.kt)("li",{parentName:"ul"},"Fix RawReader hasMessageAvailable returns true when no messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21032"},"#21032")),(0,n.kt)("li",{parentName:"ul"},"Fix perf-producer get OOM with high publish latency ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20914"},"#20914")),(0,n.kt)("li",{parentName:"ul"},"Disable polling pattern topics when TopicListWatcher is enabled. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20779"},"#20779")),(0,n.kt)("li",{parentName:"ul"},"Fix subscribing pattern topics through Proxy not working ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20739"},"#20739")),(0,n.kt)("li",{parentName:"ul"},"Messages lost when consumer reconnect ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20695"},"#20695")),(0,n.kt)("li",{parentName:"ul"},"Fix the consumer stuck due to deduplicated messages in pending ack state ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/21177"},"#21177"))))}h.isMDXComponent=!0}}]);