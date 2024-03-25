"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91182],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,h=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),o=r(20053);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,i),hidden:r},t)}},89089:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(58168),o=r(96540),a=r(20053),i=r(23104),s=r(56347),l=r(57485),u=r(31682),c=r(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function g(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=g(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,u]=h({queryString:r,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=l??p;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,a]),tabValues:a}}var f=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),g=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(p(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:g},i,{className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=y(e);return o.createElement("div",{className:(0,a.A)("tabs-container",m.tabList)},o.createElement(b,(0,n.A)({},e,t)),o.createElement(v,(0,n.A)({},e,t)))}function T(e){const t=(0,f.A)();return o.createElement(S,(0,n.A)({key:String(t)},e))}},9394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(58168),o=(r(96540),r(15680)),a=r(89089),i=r(19365);const s={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing"},l=void 0,u={unversionedId:"concepts-proxy-sni-routing",id:"version-2.11.x/concepts-proxy-sni-routing",title:"Proxy support with SNI routing",description:'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.',source:"@site/versioned_docs/version-2.11.x/concepts-proxy-sni-routing.md",sourceDirName:".",slug:"/concepts-proxy-sni-routing",permalink:"/docs/2.11.x/concepts-proxy-sni-routing",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/concepts-proxy-sni-routing.md",tags:[],version:"2.11.x",frontMatter:{id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing"},sidebar:"docsSidebar",previous:{title:"Message throttling",permalink:"/docs/2.11.x/concepts-throttling"},next:{title:"Multiple advertised listeners",permalink:"/docs/2.11.x/concepts-multiple-advertised-listeners"}},c={},p=[{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",level:2},{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",level:3},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",level:3},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",level:3}],g={toc:p},d="wrapper";function h(e){let{components:t,...s}=e;return(0,o.yg)(d,(0,n.A)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'),(0,o.yg)("p",null,"The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,o.yg)("strong",{parentName:"p"},"SNI routing"),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."),(0,o.yg)("p",null,"Pulsar clients (Java, C++, Python) support ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing"},"SNI routing protocol"),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."),(0,o.yg)("h2",{id:"ats-sni-routing-in-pulsar"},"ATS-SNI Routing in Pulsar"),(0,o.yg)("p",null,"To support ",(0,o.yg)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html"},"layer-4 SNI routing")," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."),(0,o.yg)("p",null,"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."),(0,o.yg)("p",null,"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."),(0,o.yg)("h3",{id:"set-up-ats-proxy-for-layer-4-sni-routing"},"Set up ATS Proxy for layer-4 SNI routing"),(0,o.yg)("p",null,"To support layer 4 SNI routing, you need to configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"records.conf")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ssl_server_name.conf")," files."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Pulsar client SNI",src:r(12527).A,width:"1518",height:"974"})),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html"},"records.config")," file is located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/usr/local/etc/trafficserver/")," directory by default. The file lists configurable variables used by the ATS."),(0,o.yg)("p",null,"To configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"records.config")," files, complete the following steps."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Update TLS port (",(0,o.yg)("inlineCode",{parentName:"li"},"http.server_ports"),") on which proxy listens, and update proxy certs (",(0,o.yg)("inlineCode",{parentName:"li"},"ssl.client.cert.path")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"ssl.client.cert.filename"),") to secure TLS tunneling."),(0,o.yg)("li",{parentName:"ol"},"Configure server ports (",(0,o.yg)("inlineCode",{parentName:"li"},"http.connect_ports"),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,o.yg)("inlineCode",{parentName:"li"},"4443")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"6651")," ports, add the brokers service port in the ",(0,o.yg)("inlineCode",{parentName:"li"},"http.connect_ports")," configuration.")),(0,o.yg)("p",null,"The following is an example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-conf"},"# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ssl_server_name")," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,o.yg)("inlineCode",{parentName:"p"},"fqdn"),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."),(0,o.yg)("p",null,"The following example shows the mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where requests should be redirected. For example, if the client sends the SNI header ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar-broker1"),", the proxy creates a TLS tunnel by redirecting the request to the ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar-broker1:6651")," service URL."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-conf"},"server_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n")),(0,o.yg)("p",null,"After you configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"ssl_server_name.config")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"records.config")," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."),(0,o.yg)("h3",{id:"configure-pulsar-client-with-sni-routing"},"Configure Pulsar-client with SNI routing"),(0,o.yg)("p",null,"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."),(0,o.yg)(a.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'String brokerServiceUrl = "pulsar+ssl://pulsar-broker-vip:6651/";\nString proxyUrl = "pulsar+ssl://ats-proxy:443";\nClientBuilder clientBuilder = PulsarClient.builder()\n        .serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n'))),(0,o.yg)(i.A,{value:"C++",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'ClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://ats-proxy:443", config);\n'))),(0,o.yg)(i.A,{value:"Python",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://ats-proxy:443",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n')))),(0,o.yg)("h3",{id:"pulsar-geo-replication-with-sni-routing"},"Pulsar geo-replication with SNI routing"),(0,o.yg)("p",null,"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Pulsar client SNI",src:r(63479).A,width:"1494",height:"598"})),(0,o.yg)("p",null,"In this example, a Pulsar cluster is deployed into two separate regions, ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east"),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."),(0,o.yg)("p",null,"(a) Configure the cluster metadata for ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east")," broker service URL and ",(0,o.yg)("inlineCode",{parentName:"p"},"us-east")," ATS proxy URL with SNI proxy-protocol."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"./pulsar-admin clusters update \\\n    --broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n    --url http://east-broker-vip:8080 \\\n    --proxy-protocol SNI \\\n    --proxy-url pulsar+ssl://east-ats-proxy:443\n")),(0,o.yg)("p",null,"(b) Configure the cluster metadata for ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," broker service URL and ",(0,o.yg)("inlineCode",{parentName:"p"},"us-west")," ATS proxy URL with SNI proxy-protocol."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"./pulsar-admin clusters update \\\n    --broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n    --url http://west-broker-vip:8080 \\\n    --proxy-protocol SNI \\\n    --proxy-url pulsar+ssl://west-ats-proxy:443\n")))}h.isMDXComponent=!0},12527:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},63479:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"}}]);