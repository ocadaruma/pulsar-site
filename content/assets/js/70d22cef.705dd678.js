"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55256],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},25315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const i={id:"client-java-3.2.1",title:"Client Java 3.2.1",sidebar_label:"Client Java 3.2.1"},l=void 0,o={unversionedId:"versioned/client-java-3.2.1",id:"versioned/client-java-3.2.1",title:"Client Java 3.2.1",description:"- fix Consumer lost message ack due to race condition in acknowledge with batch message (#22353)",source:"@site/release-notes/versioned/client-java-3.2.2.md",sourceDirName:"versioned",slug:"/versioned/client-java-3.2.1",permalink:"/release-notes/versioned/client-java-3.2.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-3.2.2.md",tags:[],version:"current",frontMatter:{id:"client-java-3.2.1",title:"Client Java 3.2.1",sidebar_label:"Client Java 3.2.1"}},c={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Consumer lost message ack due to race condition in acknowledge with batch message (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22353"},"#22353"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Do no retrying for error subscription not found when disabled allowAutoSubscriptionCreation (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22164"},"#22164"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Fix wrong results of hasMessageAvailable and readNext after seeking by timestamp (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22363"},"#22363"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," GenericProtobufNativeSchema not implement getNativeSchema method. (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22204"},"#22204"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," Unclear error message when creating a consumer with two same topics (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22255"},"#22255"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][client]"," fix Reader.hasMessageAvailable might return true after seeking to latest (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22201"},"#22201"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][client]","Fixed getting an incorrect ",(0,n.yg)("inlineCode",{parentName:"li"},"maxMessageSize")," value when accessing multiple clusters in the same process (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22306"},"#22306"),")"),(0,n.yg)("li",{parentName:"ul"},"[fix][misc]"," Make ConcurrentBitSet thread safe (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22361"},"#22361"),")"),(0,n.yg)("li",{parentName:"ul"},"[improve][misc]"," Remove the call to sun InetAddressCachePolicy (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22329"},"#22329"),")")))}m.isMDXComponent=!0}}]);