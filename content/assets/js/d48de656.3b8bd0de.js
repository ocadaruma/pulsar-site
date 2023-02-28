"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5572],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return r?a.createElement(m,n(n({ref:t},p),{},{components:r})):a.createElement(m,n({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},54168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const s={id:"concepts-architecture-overview",title:"Architecture Overview",sidebar_label:"Architecture"},n=void 0,i={unversionedId:"concepts-architecture-overview",id:"version-2.4.2/concepts-architecture-overview",title:"Architecture Overview",description:"At the highest level, a Pulsar instance is composed of one or more Pulsar clusters. Clusters within an instance can replicate data amongst themselves.",source:"@site/versioned_docs/version-2.4.2/concepts-architecture-overview.md",sourceDirName:".",slug:"/concepts-architecture-overview",permalink:"/docs/2.4.2/concepts-architecture-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/concepts-architecture-overview.md",tags:[],version:"2.4.2",frontMatter:{id:"concepts-architecture-overview",title:"Architecture Overview",sidebar_label:"Architecture"},sidebar:"version-2.4.2/docsSidebar",previous:{title:"Messaging",permalink:"/docs/2.4.2/concepts-messaging"},next:{title:"Clients",permalink:"/docs/2.4.2/concepts-clients"}},l={},c=[{value:"Brokers",id:"brokers",level:2},{value:"Clusters",id:"clusters",level:2},{value:"Metadata store",id:"metadata-store",level:2},{value:"Configuration store",id:"configuration-store",level:2},{value:"Persistent storage",id:"persistent-storage",level:2},{value:"Apache BookKeeper",id:"apache-bookkeeper",level:3},{value:"Ledgers",id:"ledgers",level:3},{value:"Ledger read consistency",id:"ledger-read-consistency",level:4},{value:"Managed ledgers",id:"managed-ledgers",level:4},{value:"Journal storage",id:"journal-storage",level:3},{value:"Pulsar proxy",id:"pulsar-proxy",level:2},{value:"Service discovery",id:"service-discovery",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the highest level, a Pulsar instance is composed of one or more Pulsar clusters. Clusters within an instance can ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/concepts-replication"},"replicate")," data amongst themselves."),(0,o.kt)("p",null,"In a Pulsar cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One or more brokers handles and load balances incoming messages from producers, dispatches messages to consumers, communicates with the Pulsar configuration store to handle various coordination tasks, stores messages in BookKeeper instances (aka bookies), relies on a cluster-specific ZooKeeper cluster for certain tasks, and more."),(0,o.kt)("li",{parentName:"ul"},"A BookKeeper cluster consisting of one or more bookies handles ",(0,o.kt)("a",{parentName:"li",href:"#persistent-storage"},"persistent storage")," of messages."),(0,o.kt)("li",{parentName:"ul"},"A ZooKeeper cluster specific to that cluster handles coordination tasks between Pulsar clusters.")),(0,o.kt)("p",null,"The diagram below provides an illustration of a Pulsar cluster:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pulsar architecture diagram",src:r(83258).Z,width:"1181",height:"781"})),(0,o.kt)("p",null,"At the broader instance level, an instance-wide ZooKeeper cluster called the configuration store handles coordination tasks involving multiple clusters, for example ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/concepts-replication"},"geo-replication"),"."),(0,o.kt)("h2",{id:"brokers"},"Brokers"),(0,o.kt)("p",null,"The Pulsar message broker is a stateless component that's primarily responsible for running two other components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An HTTP server that exposes a ",(0,o.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API for both administrative tasks and ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/concepts-clients#client-setup-phase"},"topic lookup")," for producers and consumers. The producers connect to the brokers to publish messages and the consumers connect to the brokers to consume the messages."),(0,o.kt)("li",{parentName:"ul"},"A dispatcher, which is an asynchronous TCP server over a custom ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/developing-binary-protocol"},"binary protocol")," used for all data transfers")),(0,o.kt)("p",null,"Messages are typically dispatched out of a ",(0,o.kt)("a",{parentName:"p",href:"#managed-ledgers"},"managed ledger")," cache for the sake of performance, ",(0,o.kt)("em",{parentName:"p"},"unless")," the backlog exceeds the cache size. If the backlog grows too large for the cache, the broker will start reading entries from BookKeeper."),(0,o.kt)("p",null,"Finally, to support geo-replication on global topics, the broker manages replicators that tail the entries published in the local region and republish them to the remote region using the Pulsar ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/client-libraries-java"},"Java client library"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a guide to managing Pulsar brokers, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/admin-api-brokers"},"brokers")," guide.")),(0,o.kt)("h2",{id:"clusters"},"Clusters"),(0,o.kt)("p",null,"A Pulsar instance consists of one or more Pulsar ",(0,o.kt)("em",{parentName:"p"},"clusters"),". Clusters, in turn, consist of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One or more Pulsar ",(0,o.kt)("a",{parentName:"li",href:"#brokers"},"brokers")),(0,o.kt)("li",{parentName:"ul"},"A ZooKeeper quorum used for cluster-level configuration and coordination"),(0,o.kt)("li",{parentName:"ul"},"An ensemble of bookies used for ",(0,o.kt)("a",{parentName:"li",href:"#persistent-storage"},"persistent storage")," of messages")),(0,o.kt)("p",null,"Clusters can replicate amongst themselves using ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/concepts-replication"},"geo-replication"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For a guide to managing Pulsar clusters, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/admin-api-clusters"},"clusters")," guide.")),(0,o.kt)("h2",{id:"metadata-store"},"Metadata store"),(0,o.kt)("p",null,"The Pulsar metadata store maintains all the metadata of a Pulsar cluster, such as topic metadata, schema, broker load data, and so on. Pulsar uses ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/"},"Apache ZooKeeper")," for metadata storage, cluster configuration, and coordination. The Pulsar metadata store can be deployed on a separate ZooKeeper cluster or deployed on an existing ZooKeeper cluster. You can use one ZooKeeper cluster for both Pulsar metadata store and BookKeeper metadata store. If you want to deploy Pulsar brokers connected to an existing BookKeeper cluster, you need to deploy separate ZooKeeper clusters for Pulsar metadata store and BookKeeper metadata store respectively."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pulsar also supports more metadata backend services, including ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/"},"ETCD")," and ",(0,o.kt)("a",{parentName:"p",href:"http://rocksdb.org/"},"RocksDB")," (for standalone Pulsar only). ")),(0,o.kt)("p",null,"In a Pulsar instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A configuration store quorum stores configuration for tenants, namespaces, and other entities that need to be globally consistent."),(0,o.kt)("li",{parentName:"ul"},"Each cluster has its own local ZooKeeper ensemble that stores cluster-specific configuration and coordination such as which brokers are responsible for which topics as well as ownership metadata, broker load reports, BookKeeper ledger metadata, and more.")),(0,o.kt)("h2",{id:"configuration-store"},"Configuration store"),(0,o.kt)("p",null,"The configuration store maintains all the configurations of a Pulsar instance, such as clusters, tenants, namespaces, partitioned topic related configurations, and so on. A Pulsar instance can have a single local cluster, multiple local clusters, or multiple cross-region clusters. Consequently, the configuration store can share the configurations across multiple clusters under a Pulsar instance. The configuration store can be deployed on a separate ZooKeeper cluster or deployed on an existing ZooKeeper cluster."),(0,o.kt)("h2",{id:"persistent-storage"},"Persistent storage"),(0,o.kt)("p",null,"Pulsar provides guaranteed message delivery for applications. If a message successfully reaches a Pulsar broker, it will be delivered to its intended target."),(0,o.kt)("p",null,"This guarantee requires that non-acknowledged messages are stored in a durable manner until they can be delivered to and acknowledged by consumers. This mode of messaging is commonly called ",(0,o.kt)("em",{parentName:"p"},"persistent messaging"),". In Pulsar, N copies of all messages are stored and synced on disk, for example 4 copies across two servers with mirrored ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/RAID"},"RAID")," volumes on each server."),(0,o.kt)("h3",{id:"apache-bookkeeper"},"Apache BookKeeper"),(0,o.kt)("p",null,"Pulsar uses a system called ",(0,o.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org/"},"Apache BookKeeper")," for persistent message storage. BookKeeper is a distributed ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"write-ahead log")," (WAL) system that provides a number of crucial advantages for Pulsar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It enables Pulsar to utilize many independent logs, called ",(0,o.kt)("a",{parentName:"li",href:"#ledgers"},"ledgers"),". Multiple ledgers can be created for topics over time."),(0,o.kt)("li",{parentName:"ul"},"It offers very efficient storage for sequential data that handles entry replication."),(0,o.kt)("li",{parentName:"ul"},"It guarantees read consistency of ledgers in the presence of various system failures."),(0,o.kt)("li",{parentName:"ul"},"It offers even distribution of I/O across bookies."),(0,o.kt)("li",{parentName:"ul"},"It's horizontally scalable in both capacity and throughput. Capacity can be immediately increased by adding more bookies to a cluster."),(0,o.kt)("li",{parentName:"ul"},"Bookies are designed to handle thousands of ledgers with concurrent reads and writes. By using multiple disk devices---one for journal and another for general storage--bookies are able to isolate the effects of read operations from the latency of ongoing write operations.")),(0,o.kt)("p",null,"In addition to message data, ",(0,o.kt)("em",{parentName:"p"},"cursors")," are also persistently stored in BookKeeper. Cursors are ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/reference-terminology#subscription"},"subscription")," positions for ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/reference-terminology#consumer"},"consumers"),". BookKeeper enables Pulsar to store consumer position in a scalable fashion."),(0,o.kt)("p",null,"At the moment, Pulsar supports persistent message storage. This accounts for the ",(0,o.kt)("inlineCode",{parentName:"p"},"persistent")," in all topic names. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://my-tenant/my-namespace/my-topic\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pulsar also supports ephemeral (",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/concepts-messaging#non-persistent-topics"},"non-persistent"),") message storage.")),(0,o.kt)("p",null,"You can see an illustration of how brokers and bookies interact in the diagram below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Brokers and bookies",src:r(59328).Z,width:"947",height:"560"})),(0,o.kt)("h3",{id:"ledgers"},"Ledgers"),(0,o.kt)("p",null,"A ledger is an append-only data structure with a single writer that is assigned to multiple BookKeeper storage nodes, or bookies. Ledger entries are replicated to multiple bookies. Ledgers themselves have very simple semantics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Pulsar broker can create a ledger, append entries to the ledger, and close the ledger."),(0,o.kt)("li",{parentName:"ul"},"After the ledger has been closed---either explicitly or because the writer process crashed---it can then be opened only in read-only mode."),(0,o.kt)("li",{parentName:"ul"},"Finally, when entries in the ledger are no longer needed, the whole ledger can be deleted from the system (across all bookies).")),(0,o.kt)("h4",{id:"ledger-read-consistency"},"Ledger read consistency"),(0,o.kt)("p",null,"The main strength of Bookkeeper is that it guarantees read consistency in ledgers in the presence of failures. Since the ledger can only be written to by a single process, that process is free to append entries very efficiently, without need to obtain consensus. After a failure, the ledger will go through a recovery process that will finalize the state of the ledger and establish which entry was last committed to the log. After that point, all readers of the ledger are guaranteed to see the exact same content."),(0,o.kt)("h4",{id:"managed-ledgers"},"Managed ledgers"),(0,o.kt)("p",null,"Given that Bookkeeper ledgers provide a single log abstraction, a library was developed on top of the ledger called the ",(0,o.kt)("em",{parentName:"p"},"managed ledger")," that represents the storage layer for a single topic. A managed ledger represents the abstraction of a stream of messages with a single writer that keeps appending at the end of the stream and multiple cursors that are consuming the stream, each with its own associated position."),(0,o.kt)("p",null,"Internally, a single managed ledger uses multiple BookKeeper ledgers to store the data. There are two reasons to have multiple ledgers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After a failure, a ledger is no longer writable and a new one needs to be created."),(0,o.kt)("li",{parentName:"ol"},"A ledger can be deleted when all cursors have consumed the messages it contains. This allows for periodic rollover of ledgers.")),(0,o.kt)("h3",{id:"journal-storage"},"Journal storage"),(0,o.kt)("p",null,"In BookKeeper, ",(0,o.kt)("em",{parentName:"p"},"journal")," files contain BookKeeper transaction logs. Before making an update to a ",(0,o.kt)("a",{parentName:"p",href:"#ledgers"},"ledger"),", a bookie needs to ensure that a transaction describing the update is written to persistent (non-volatile) storage. A new journal file is created once the bookie starts or the older journal file reaches the journal file size threshold (configured using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/reference-configuration#bookkeeper-journalMaxSizeMB"},(0,o.kt)("inlineCode",{parentName:"a"},"journalMaxSizeMB"))," parameter)."),(0,o.kt)("h2",{id:"pulsar-proxy"},"Pulsar proxy"),(0,o.kt)("p",null,"One way for Pulsar clients to interact with a Pulsar ",(0,o.kt)("a",{parentName:"p",href:"#clusters"},"cluster")," is by connecting to Pulsar message ",(0,o.kt)("a",{parentName:"p",href:"#brokers"},"brokers")," directly. In some cases, however, this kind of direct connection is either infeasible or undesirable because the client doesn't have direct access to broker addresses. If you're running Pulsar in a cloud environment or on ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform, for example, then direct client connections to brokers are likely not possible."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Pulsar proxy")," provides a solution to this problem by acting as a single gateway for all of the brokers in a cluster. If you run the Pulsar proxy (which, again, is optional), all client connections with the Pulsar cluster will flow through the proxy rather than communicating with brokers."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For the sake of performance and fault tolerance, you can run as many instances of the Pulsar proxy as you'd like.")),(0,o.kt)("p",null,"Architecturally, the Pulsar proxy gets all the information it requires from ZooKeeper. When starting the proxy on a machine, you only need to provide metadata store connection strings for the cluster-specific and instance-wide configuration store clusters. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy \\\n  --metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181 \\\n  --configuration-metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"pulsar-proxy-docs"},"Pulsar proxy docs"),(0,o.kt)("p",{parentName:"blockquote"},"For documentation on using the Pulsar proxy, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/administration-proxy"},"Pulsar proxy admin documentation"),".")),(0,o.kt)("p",null,"Some important things to know about the Pulsar proxy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connecting clients don't need to provide ",(0,o.kt)("em",{parentName:"li"},"any")," specific configuration to use the Pulsar proxy. You won't need to update the client configuration for existing applications beyond updating the IP used for the service URL (for example if you're running a load balancer over the Pulsar proxy)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/security-tls-transport"},"TLS encryption")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.4.2/security-tls-authentication"},"authentication")," is supported by the Pulsar proxy")),(0,o.kt)("h2",{id:"service-discovery"},"Service discovery"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/concepts-clients"},"Clients")," connecting to Pulsar brokers need to be able to communicate with an entire Pulsar instance using a single URL."),(0,o.kt)("p",null,"You can use your own service discovery system if you'd like. If you use your own system, there is just one requirement: when a client performs an HTTP request to an endpoint, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"http://pulsar.us-west.example.com:8080"),", the client needs to be redirected to ",(0,o.kt)("em",{parentName:"p"},"some")," active broker in the desired cluster, whether via DNS, an HTTP or IP redirect, or some other means."),(0,o.kt)("p",null,"The diagram below illustrates Pulsar service discovery:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt-text",src:r(90337).Z,width:"1087",height:"1198"})),(0,o.kt)("p",null,"In this diagram, the Pulsar cluster is addressable via a single DNS name: ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-cluster.acme.com"),". A ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.4.2/client-libraries-python"},"Python client"),", for example, could access this Pulsar cluster like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client\n\nclient = Client('pulsar://pulsar-cluster.acme.com:6650')\n\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In Pulsar, each topic is handled by only one broker. Initial requests from a client to read, update or delete a topic are sent to a broker that may not be the topic owner. If the broker cannot handle the request for this topic, it redirects the request to the appropriate broker.")))}d.isMDXComponent=!0},59328:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/broker-bookie-52b99fa950195b8ab89bff61089fd892.png"},90337:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pulsar-service-discovery-82df27ebfa89540d04bf34dfa4fa1b8d.png"},83258:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"}}]);