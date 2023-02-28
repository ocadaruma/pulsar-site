"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging"},i=void 0,s={unversionedId:"cookbooks-non-persistent",id:"version-2.5.2/cookbooks-non-persistent",title:"Non-persistent messaging",description:"Non-persistent topics are Pulsar topics in which message data is never persistently stored and kept only in memory. This cookbook provides:",source:"@site/versioned_docs/version-2.5.2/cookbooks-non-persistent.md",sourceDirName:".",slug:"/cookbooks-non-persistent",permalink:"/docs/2.5.2/cookbooks-non-persistent",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/cookbooks-non-persistent.md",tags:[],version:"2.5.2",frontMatter:{id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging"},sidebar:"version-2.5.2/docsSidebar",previous:{title:"Message deduplication ",permalink:"/docs/2.5.2/cookbooks-deduplication"},next:{title:"Partitioned Topics",permalink:"/docs/2.5.2/cookbooks-partitioned"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Using",id:"using",level:2},{value:"Enabling",id:"enabling",level:2},{value:"Managing with cli",id:"managing-with-cli",level:2},{value:"Using with Pulsar clients",id:"using-with-pulsar-clients",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Non-persistent topics")," are Pulsar topics in which message data is ",(0,o.kt)("em",{parentName:"p"},"never")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/concepts-architecture-overview#persistent-storage"},"persistently stored")," and kept only in memory. This cookbook provides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A basic ",(0,o.kt)("a",{parentName:"li",href:"#overview"},"conceptual overview")," of non-persistent topics"),(0,o.kt)("li",{parentName:"ul"},"Information about ",(0,o.kt)("a",{parentName:"li",href:"#configuration"},"configurable parameters")," related to non-persistent topics"),(0,o.kt)("li",{parentName:"ul"},"A guide to the ",(0,o.kt)("a",{parentName:"li",href:"#cli"},"CLI interface")," for managing non-persistent topics")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"By default, Pulsar persistently stores ",(0,o.kt)("em",{parentName:"p"},"all")," unacknowledged messages on multiple ",(0,o.kt)("a",{parentName:"p",href:"#persistent-storage"},"BookKeeper")," bookies (storage nodes). Data for messages on persistent topics can thus survive broker restarts and subscriber failover."),(0,o.kt)("p",null,"Pulsar also, however, supports ",(0,o.kt)("strong",{parentName:"p"},"non-persistent topics"),", which are topics on which messages are ",(0,o.kt)("em",{parentName:"p"},"never")," persisted to disk and live only in memory. When using non-persistent delivery, killing a Pulsar ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-terminology#broker"},"broker")," or disconnecting a subscriber to a topic means that all in-transit messages are lost on that (non-persistent) topic, meaning that clients may see message loss."),(0,o.kt)("p",null,"Non-persistent topics have names of this form (note the ",(0,o.kt)("inlineCode",{parentName:"p"},"non-persistent")," in the name):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"\nnon-persistent://tenant/namespace/topic\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more high-level information about non-persistent topics, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/concepts-messaging#non-persistent-topics"},"Concepts and Architecture")," documentation.")),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In order to use non-persistent topics, they must be ",(0,o.kt)("a",{parentName:"p",href:"#enabling"},"enabled")," in your Pulsar broker configuration.")),(0,o.kt)("p",null,"In order to use non-persistent topics, you only need to differentiate them by name when interacting with them. This ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-cli-tools#pulsar-client-produce"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-client produce"))," command, for example, would produce one message on a non-persistent topic in a standalone cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce non-persistent://public/default/example-np-topic \\\n  --num-produce 1 \\\n  --messages "This message will be stored only in memory"\n\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a more thorough guide to non-persistent topics from an administrative perspective, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/admin-api-topics"},"Non-persistent topics")," guide.")),(0,o.kt)("h2",{id:"enabling"},"Enabling"),(0,o.kt)("p",null,"In order to enable non-persistent topics in a Pulsar broker, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-configuration#broker-enableNonPersistentTopics"},(0,o.kt)("inlineCode",{parentName:"a"},"enableNonPersistentTopics"))," must be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". This is the default, and so you won't need to take any action to enable non-persistent messaging."),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"configuration-for-standalone-mode"},"Configuration for standalone mode"),(0,o.kt)("p",{parentName:"blockquote"},"If you're running Pulsar in standalone mode, the same configurable parameters are available but in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-configuration#standalone"},(0,o.kt)("inlineCode",{parentName:"a"},"standalone.conf"))," configuration file. ")),(0,o.kt)("p",null,"If you'd like to enable ",(0,o.kt)("em",{parentName:"p"},"only")," non-persistent topics in a broker, you can set the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-configuration#broker-enablePersistentTopics"},(0,o.kt)("inlineCode",{parentName:"a"},"enablePersistentTopics"))," parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"enableNonPersistentTopics")," parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h2",{id:"managing-with-cli"},"Managing with cli"),(0,o.kt)("p",null,"Non-persistent topics can be managed using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-pulsar-admin#non-persistent"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-admin non-persistent"))," command-line interface. With that interface you can perform actions like ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-pulsar-admin#non-persistent-create-partitioned-topic"},"create a partitioned non-persistent topic"),", get ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-pulsar-admin#non-persistent-stats"},"stats")," for a non-persistent topic, ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.5.2/reference-pulsar-admin"},"list")," non-persistent topics under a namespace, and more."),(0,o.kt)("h2",{id:"using-with-pulsar-clients"},"Using with Pulsar clients"),(0,o.kt)("p",null,"You shouldn't need to make any changes to your Pulsar clients to use non-persistent messaging beyond making sure that you use proper ",(0,o.kt)("a",{parentName:"p",href:"#using"},"topic names")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"non-persistent")," as the topic type."))}m.isMDXComponent=!0}}]);