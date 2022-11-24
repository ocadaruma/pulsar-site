"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97045],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(g,c(c({ref:n},l),{},{components:t})):a.createElement(g,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={id:"functions-deploy-cluster-package",title:"Enable package management service",sidebar_label:"Enable package management service"},c=void 0,i={unversionedId:"functions-deploy-cluster-package",id:"functions-deploy-cluster-package",title:"Enable package management service",description:"Package management service enables both version management and simplified upgrade/rollback processes for functions, sinks, and sources. When using the same function, sink, and source in different namespaces, you can upload them to a common package management system.",source:"@site/docs/functions-deploy-cluster-package.md",sourceDirName:".",slug:"/functions-deploy-cluster-package",permalink:"/docs/next/functions-deploy-cluster-package",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-deploy-cluster-package.md",tags:[],version:"current",frontMatter:{id:"functions-deploy-cluster-package",title:"Enable package management service",sidebar_label:"Enable package management service"},sidebar:"docsSidebar",previous:{title:"Enable end-to-end-encryption",permalink:"/docs/next/functions-deploy-cluster-encryption"},next:{title:"Use built-in functions",permalink:"/docs/next/functions-deploy-cluster-builtin"}},s={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/admin-api-packages"},"Package management service")," enables both version management and simplified upgrade/rollback processes for functions, sinks, and sources. When using the same function, sink, and source in different namespaces, you can upload them to a common package management system."),(0,r.kt)("p",null,"With the package management service enabled, you can ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"upload your function package")," to the service and get the package URL. Thus you can create the function by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--jar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--py"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"--go")," to the package URL."),(0,r.kt)("p",null,"By default, the package management service is disabled. To enable it in your cluster, set the properties in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"enablePackagesManagement=true\npackagesManagementStorageProvider=org.apache.pulsar.packages.management.storage.bookkeeper.BookKeeperPackagesStorageProvider\npackagesReplicas=1\npackagesManagementLedgerRootPath=/ledgers\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To ensure high availability in a production deployment (a cluster with multiple brokers), set ",(0,r.kt)("inlineCode",{parentName:"p"},"packagesReplicas")," to equal the number of bookies. The default value ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is only for one-node cluster deployment.")))}u.isMDXComponent=!0}}]);