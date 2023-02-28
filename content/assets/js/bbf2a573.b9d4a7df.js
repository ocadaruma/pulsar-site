"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=l,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const o={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"},a=void 0,i={unversionedId:"helm-install",id:"version-2.4.1/helm-install",title:"Install Apache Pulsar using Helm",description:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.",source:"@site/versioned_docs/version-2.4.1/helm-install.md",sourceDirName:".",slug:"/helm-install",permalink:"/docs/2.4.1/helm-install",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/helm-install.md",tags:[],version:"2.4.1",frontMatter:{id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Deploy Pulsar",id:"deploy-pulsar",level:2},{value:"Upgrade Pulsar",id:"upgrade-pulsar",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"In order to deploy Apache Pulsar on Kubernetes, the following are required."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"kubectl 1.14 or higher, compatible with your cluster (",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin"},"+/- 1 minor release from your cluster"),")"),(0,l.kt)("li",{parentName:"ol"},"Helm v3 (3.0.2 or higher)"),(0,l.kt)("li",{parentName:"ol"},"A Kubernetes cluster, version 1.14 or higher.")),(0,l.kt)("h2",{id:"environment-setup"},"Environment setup"),(0,l.kt)("p",null,"Before proceeding to deploying Pulsar, you need to prepare your environment."),(0,l.kt)("h3",{id:"tools"},"Tools"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," need to be ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/helm-tools"},"installed on your computer"),"."),(0,l.kt)("h2",{id:"cloud-cluster-preparation"},"Cloud cluster preparation"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: Kubernetes 1.14 or higher is required, due to the usage of certain Kubernetes features.")),(0,l.kt)("p",null,"Follow the instructions to create and connect to the Kubernetes cluster of your choice:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/2.4.1/helm-prepare#google-kubernetes-engine"},"Google Kubernetes Engine"))),(0,l.kt)("h2",{id:"deploy-pulsar"},"Deploy Pulsar"),(0,l.kt)("p",null,"With the environment set up and configuration generated, you can now proceed to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/helm-deploy"},"deployment of Pulsar"),"."),(0,l.kt)("h2",{id:"upgrade-pulsar"},"Upgrade Pulsar"),(0,l.kt)("p",null,"If you are upgrading an existing Kubernetes installation, follow the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.4.1/helm-upgrade"},"upgrade documentation")," instead."))}d.isMDXComponent=!0}}]);