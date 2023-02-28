"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6496],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),o=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return r.createElement(u.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(t),d=n,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(k,s(s({ref:a},p),{},{components:t})):r.createElement(k,s({ref:a},p))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294),n=t(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var r=t(87462),n=t(67294),l=t(86010),s=t(72389),i=t(67392),u=t(7094),o=t(12466);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){const{lazy:a,block:t,defaultValue:s,values:c,groupId:m,className:d}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??k.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),h=(0,i.l)(v,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,u.U)(),[N,T]=(0,n.useState)(f),y=[],{blockElementScrollPositionUntilNextRender:A}=(0,o.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&v.some((a=>a.value===e))&&T(e)}const I=e=>{const a=e.currentTarget,t=y.indexOf(a),r=v[t].value;r!==N&&(A(a),T(r),null!=m&&g(m,String(r)))},P=e=>{let a=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}a?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p.tabList)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},d)},v.map((e=>{let{value:a,label:t,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>y.push(e),onKeyDown:P,onClick:I},s,{className:(0,l.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":N===a})}),t??a)}))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function m(e){const a=(0,s.Z)();return n.createElement(c,(0,r.Z)({key:String(a)},e))}},47065:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(87462),n=(t(67294),t(3905)),l=t(65488),s=t(85162);const i={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},u=void 0,o={unversionedId:"admin-api-clusters",id:"version-2.5.0/admin-api-clusters",title:"Managing Clusters",description:"Important",source:"@site/versioned_docs/version-2.5.0/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/2.5.0/admin-api-clusters",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.0/admin-api-clusters.md",tags:[],version:"2.5.0",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},sidebar:"version-2.5.0/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.5.0/admin-api-overview"},next:{title:"Tenants",permalink:"/docs/2.5.0/admin-api-tenants"}},p={},c=[{value:"Clusters resources",id:"clusters-resources",level:2},{value:"Provision",id:"provision",level:3},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"List",id:"list",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3}],m={toc:c},d="wrapper";function k(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important")),(0,n.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,n.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,n.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,n.kt)("p",null,"Pulsar clusters consist of one or more Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-terminology#broker"},"brokers"),", one or more ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-terminology#bookkeeper"},"BookKeeper"),"\nservers (aka ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-terminology#bookie"},"bookies"),"), and a ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," cluster that provides configuration and coordination management."),(0,n.kt)("p",null,"Clusters can be managed via:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"clusters")," command of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.5.0/reference-pulsar-admin"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"/admin/v2/clusters")," endpoint of the admin ",(0,n.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"clusters")," method of the ",(0,n.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.5.0/client-libraries-java"},"Java API"))),(0,n.kt)("h2",{id:"clusters-resources"},"Clusters resources"),(0,n.kt)("h3",{id:"provision"},"Provision"),(0,n.kt)("p",null,"New clusters can be provisioned using the admin interface."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Please note that this operation requires superuser privileges.")),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"You can provision a new cluster using the ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-create"},(0,n.kt)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters create cluster-1 \\\n  --url http://my-cluster.org.com:8080 \\\n  --broker-url pulsar://my-cluster.org.com:6650\n\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.0&apiversion=v2#operation/createCluster"},"PUT /admin/v2/clusters/:cluster"))),(0,n.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n\n")))),(0,n.kt)("h3",{id:"initialize-cluster-metadata"},"Initialize cluster metadata"),(0,n.kt)("p",null,"When provision a new cluster, you need to initialize that cluster's ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/concepts-architecture-overview#metadata-store"},"metadata"),". When initializing cluster metadata, you need to specify all of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name of the cluster"),(0,n.kt)("li",{parentName:"ul"},"The local metadata store connection string for the cluster"),(0,n.kt)("li",{parentName:"ul"},"The configuration store connection string for the entire instance"),(0,n.kt)("li",{parentName:"ul"},"The web service URL for the cluster"),(0,n.kt)("li",{parentName:"ul"},"A broker service URL enabling interaction with the ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.5.0/reference-terminology#broker"},"brokers")," in the cluster")),(0,n.kt)("p",null,"You must initialize cluster metadata ",(0,n.kt)("em",{parentName:"p"},"before")," starting up any ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/admin-api-brokers"},"brokers")," that will belong to the cluster."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"No cluster metadata initialization through the REST API or the Java admin API")),(0,n.kt)("p",{parentName:"blockquote"},"Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-cli-tools#pulsar"},(0,n.kt)("inlineCode",{parentName:"a"},"pulsar"))," CLI tool, in particular\nthe ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-cli-tools#pulsar-initialize-cluster-metadata"},(0,n.kt)("inlineCode",{parentName:"a"},"initialize-cluster-metadata"))," command.")),(0,n.kt)("p",null,"Here's an example cluster metadata initialization command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --configuration-metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n")),(0,n.kt)("p",null,"You'll need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"--*-tls")," flags only if you're using ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/security-tls-authentication"},"TLS authentication")," in your instance."),(0,n.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,n.kt)("p",null,"You can fetch the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-configuration"},"configuration")," for an existing cluster at any time."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-get"},(0,n.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin clusters get cluster-1\n{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n\n'))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.0&apiversion=v2#operation/getCluster"},"GET /admin/v2/clusters/:cluster"))),(0,n.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getCluster(clusterName);\n\n")))),(0,n.kt)("h3",{id:"update"},"Update"),(0,n.kt)("p",null,"You can update the configuration for an existing cluster at any time."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-update"},(0,n.kt)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters update cluster-1 \\\n  --url http://my-cluster.org.com:4081 \\\n  --broker-url pulsar://my-cluster.org.com:3350\n\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.0&apiversion=v2#operation/updateCluster"},"POST /admin/v2/clusters/:cluster"))),(0,n.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n\n")))),(0,n.kt)("h3",{id:"delete"},"Delete"),(0,n.kt)("p",null,"Clusters can be deleted from a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-terminology#instance"},"instance"),"."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-delete"},(0,n.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n$ pulsar-admin clusters delete cluster-1\n\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.0&apiversion=v2#operation/deleteCluster"},"DELETE /admin/v2/clusters/:cluster"))),(0,n.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().deleteCluster(clusterName);\n\n")))),(0,n.kt)("h3",{id:"list"},"List"),(0,n.kt)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-terminology#instance"},"instance"),"."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-list"},(0,n.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin clusters list\ncluster-1\ncluster-2\n\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.0&apiversion=v2#operation/getClusters"},"GET /admin/v2/clusters"))),(0,n.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().getClusters();\n\n")))),(0,n.kt)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,n.kt)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.0/reference-terminology#instance"},"instance"),"."),(0,n.kt)(l.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#clusters-update-peer-clusters"},(0,n.kt)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n$ pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.5.0&apiversion=v2#operation/setPeerClusterNames"},"POST /admin/v2/clusters/:cluster/peers"))),(0,n.kt)(s.Z,{value:"JAVA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n\n")))))}k.isMDXComponent=!0}}]);