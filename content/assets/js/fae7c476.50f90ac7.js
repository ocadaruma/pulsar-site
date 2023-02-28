"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5862],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={id:"helm-deploy",title:"Deploying a Pulsar cluster using Helm",sidebar_label:"Deployment",original_id:"helm-deploy"},o=void 0,i={unversionedId:"helm-deploy",id:"version-2.4.0/helm-deploy",title:"Deploying a Pulsar cluster using Helm",description:"Before running helm install, you need to make some decisions about how you will run Pulsar.",source:"@site/versioned_docs/version-2.4.0/helm-deploy.md",sourceDirName:".",slug:"/helm-deploy",permalink:"/docs/2.4.0/helm-deploy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/helm-deploy.md",tags:[],version:"2.4.0",frontMatter:{id:"helm-deploy",title:"Deploying a Pulsar cluster using Helm",sidebar_label:"Deployment",original_id:"helm-deploy"}},s={},p=[{value:"Selecting configuration options",id:"selecting-configuration-options",level:2},{value:"Kubernetes Namespace",id:"kubernetes-namespace",level:3},{value:"Persistence",id:"persistence",level:3},{value:"Affinity",id:"affinity",level:3},{value:"Components",id:"components",level:3},{value:"Docker Images",id:"docker-images",level:3},{value:"TLS",id:"tls",level:3},{value:"Provision TLS certs using cert-manager",id:"provision-tls-certs-using-cert-manager",level:4},{value:"Enable TLS",id:"enable-tls",level:4},{value:"Authentication",id:"authentication",level:3},{value:"Authorization",id:"authorization",level:3},{value:"CPU and RAM resource requirements",id:"cpu-and-ram-resource-requirements",level:3},{value:"Install Dependent Charts",id:"install-dependent-charts",level:2},{value:"Install Local Storage Provisioner",id:"install-local-storage-provisioner",level:3},{value:"Install Cert Manager",id:"install-cert-manager",level:3},{value:"Prepare the Helm Release",id:"prepare-the-helm-release",level:2},{value:"Deploy using Helm",id:"deploy-using-helm",level:2},{value:"Monitoring the Deployment",id:"monitoring-the-deployment",level:2},{value:"Accessing the Pulsar Cluster",id:"accessing-the-pulsar-cluster",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before running ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),", you need to make some decisions about how you will run Pulsar.\nOptions can be specified using Helm's ",(0,r.kt)("inlineCode",{parentName:"p"},"--set option.name=value")," command line option."),(0,r.kt)("h2",{id:"selecting-configuration-options"},"Selecting configuration options"),(0,r.kt)("p",null,"In each section collect the options that will be combined to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,r.kt)("h3",{id:"kubernetes-namespace"},"Kubernetes Namespace"),(0,r.kt)("p",null,"By default, the chart is installed to a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nnamespace: pulsar\n\n")),(0,r.kt)("p",null,"If you decide to install the chart into a different k8s namespace, you can include this option in your Helm install command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set namespace=<different-k8s-namespace>\n\n")),(0,r.kt)("p",null,"By default, the chart doesn't create the namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nnamespaceCreate: false\n\n")),(0,r.kt)("p",null,"If you want the chart to create the k8s namespace automatically, you can include this option in your Helm install command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set namespaceCreate=true\n\n")),(0,r.kt)("h3",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"By default the chart creates Volume Claims with the expectation that a dynamic provisioner will create the underlying Persistent Volumes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nvolumes:\n  persistence: true\n  # configure the components to use local persistent volume\n  # the local provisioner should be installed prior to enable local persistent volume\n  local_storage: false\n\n")),(0,r.kt)("p",null,"If you would like to use local persistent volumes as the persistent storage for your Helm release, you can install ",(0,r.kt)("a",{parentName:"p",href:"#install-local-storage-provisioner"},"local-storage-provisioner")," and include the following option in your Helm install command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set volumes.local_storage=true\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important"),": After initial installation, making changes to your storage settings requires manually editing Kubernetes objects,\nso it's best to plan ahead before installing your production instance of Pulsar to avoid extra storage migration work.")),(0,r.kt)("p",null,"This chart is designed for production use, To use this chart in a development environment (e.g. minikube), you can disable persistence by including this option in your Helm install command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set volumes.persistence=false\n\n")),(0,r.kt)("h3",{id:"affinity"},"Affinity"),(0,r.kt)("p",null,"By default ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity")," is turned on to ensure pods of same component can run on different nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\naffinity:\n  anti_affinity: true\n\n")),(0,r.kt)("p",null,"If you are planning to use this chart in a development environment (e.g. Minikube), you can disable ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity")," by including this option in your Helm install command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set affinity.anti_affinity=false\n\n")),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,"This chart is designed for production usage. It deploys a production-ready Pulsar cluster including Pulsar core components and monitoring components."),(0,r.kt)("p",null,"You can customize the components to deploy by turning on/off individual components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n## Components\n##\n## Control what components of Apache Pulsar to deploy for the cluster\ncomponents:\n  # zookeeper\n  zookeeper: true\n  # bookkeeper\n  bookkeeper: true\n  # bookkeeper - autorecovery\n  autorecovery: true\n  # broker\n  broker: true\n  # functions\n  functions: true\n  # proxy\n  proxy: true\n  # toolset\n  toolset: true\n  # pulsar manager\n  pulsar_manager: true\n\n## Monitoring Components\n##\n## Control what components of the monitoring stack to deploy for the cluster\nmonitoring:\n  # monitoring - prometheus\n  prometheus: true\n  # monitoring - grafana\n  grafana: true\n\n")),(0,r.kt)("h3",{id:"docker-images"},"Docker Images"),(0,r.kt)("p",null,"This chart is designed to enable controlled upgrades. So it provides the capability to configure independent image versions for components. You can customize the images by setting individual component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n## Images\n##\n## Control what images to use for each component\nimages:\n  zookeeper:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  bookie:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  autorecovery:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  broker:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  proxy:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  functions:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n  prometheus:\n    repository: prom/prometheus\n    tag: v1.6.3\n    pullPolicy: IfNotPresent\n  grafana:\n    repository: streamnative/apache-pulsar-grafana-dashboard-k8s\n    tag: 0.0.4\n    pullPolicy: IfNotPresent\n  pulsar_manager:\n    repository: apachepulsar/pulsar-manager\n    tag: v0.1.0\n    pullPolicy: IfNotPresent\n    hasCommand: false\n\n")),(0,r.kt)("h3",{id:"tls"},"TLS"),(0,r.kt)("p",null,"This Pulsar Chart can be configured to enable TLS to protect all the traffic between components. Before you enable TLS, you have to provision TLS certificates\nfor the components you have configured to enable TLS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#provision-tls-certs-using-cert-manager"},"Provision TLS certs using ",(0,r.kt)("inlineCode",{parentName:"a"},"cert-manager")))),(0,r.kt)("h4",{id:"provision-tls-certs-using-cert-manager"},"Provision TLS certs using cert-manager"),(0,r.kt)("p",null,"In order to using ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," to provision the TLS certificates, you have to install ",(0,r.kt)("a",{parentName:"p",href:"#install-cert-manager"},"cert-manager")," before installing the Pulsar chart. After\nsuccessfully install cert manager, you can then set ",(0,r.kt)("inlineCode",{parentName:"p"},"certs.internal_issuer.enabled"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". So the Pulsar chart will use ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager")," to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"selfsigning")," TLS\ncerts for the configured components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncerts:\n  internal_issuer:\n    enabled: false\n    component: internal-cert-issuer\n    type: selfsigning\n\n")),(0,r.kt)("p",null,"You can also customize the generated TLS certificates by configuring the fields as the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ntls:\n  # common settings for generating certs\n  common:\n    # 90d\n    duration: 2160h\n    # 15d\n    renewBefore: 360h\n    organization:\n      - pulsar\n    keySize: 4096\n    keyAlgorithm: rsa\n    keyEncoding: pkcs8\n\n")),(0,r.kt)("h4",{id:"enable-tls"},"Enable TLS"),(0,r.kt)("p",null,"After installing ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),", you can then set ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable TLS encryption for the entire cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ntls:\n  enabled: false\n\n")),(0,r.kt)("p",null,"You can also control whether to enable TLS encryption for individual component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ntls:\n  # settings for generating certs for proxy\n  proxy:\n    enabled: false\n    cert_name: tls-proxy\n  # settings for generating certs for broker\n  broker:\n    enabled: false\n    cert_name: tls-broker\n  # settings for generating certs for bookies\n  bookie:\n    enabled: false\n    cert_name: tls-bookie\n  # settings for generating certs for zookeeper\n  zookeeper:\n    enabled: false\n    cert_name: tls-zookeeper\n  # settings for generating certs for recovery\n  autorecovery:\n    cert_name: tls-recovery\n  # settings for generating certs for toolset\n  toolset:\n    cert_name: tls-toolset\n\n")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Authentication is disabled by default. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.authentication.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to turn on authentication.\nCurrently this chart only supports JWT authentication provider. You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.authentication.provider")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt")," to use JWT authentication provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# Enable or disable broker authentication and authorization.\nauth:\n  authentication:\n    enabled: false\n    provider: "jwt"\n    jwt:\n      # Enable JWT authentication\n      # If the token is generated by a secret key, set the usingSecretKey as true.\n      # If the token is generated by a private key, set the usingSecretKey as false.\n      usingSecretKey: false\n  superUsers:\n    # broker to broker communication\n    broker: "broker-admin"\n    # proxy to broker communication\n    proxy: "proxy-admin"\n    # pulsar-admin client to broker/proxy communication\n    client: "admin"\n\n')),(0,r.kt)("p",null,"If you decide to enable authentication, you can run ",(0,r.kt)("a",{parentName:"p",href:"#prepare-the-helm-release"},"prepare helm release")," to generate token secret keys and tokens for three super users specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.superUsers")," field. The generated token keys and super user tokens are uploaded and stored as kubernetes secrets prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"<pulsar-release-name>-token-"),". You can use following command to find those secrets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl get secrets -n <k8s-namespace>\n\n")),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"Authorization is disabled by default. Authorization can be enabled\nonly if Authentication is enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\nauth:\n  authorization:\n    enabled: false\n\n")),(0,r.kt)("p",null,"You can include this option to turn on authorization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n--set auth.authorization.enabled=true\n\n")),(0,r.kt)("h3",{id:"cpu-and-ram-resource-requirements"},"CPU and RAM resource requirements"),(0,r.kt)("p",null,"The resource requests, and number of replicas for the Pulsar components in this Chart are set by default to be adequate for a small production deployment. If you are trying to deploy a non-production instance, you can reduce the defaults in order to fit into a smaller cluster."),(0,r.kt)("p",null,"Once you have all of your configuration options collected, we need\nto install dependent charts before proceeding to install the Pulsar\nChart."),(0,r.kt)("h2",{id:"install-dependent-charts"},"Install Dependent Charts"),(0,r.kt)("h3",{id:"install-local-storage-provisioner"},"Install Local Storage Provisioner"),(0,r.kt)("p",null,"If you decide to use local persistent volumes as the persistent storage, you need to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2019/04/04/kubernetes-1.14-local-persistent-volumes-ga/"},"install a storage provisioner for local persistent volumes"),"."),(0,r.kt)("p",null,"One of the easiest way to get started is to use the local storage provisioner provided along with the Pulsar Helm chart."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nhelm repo add streamnative https://charts.streamnative.io\nhelm repo update\nhelm install pulsar-storage-provisioner streamnative/local-storage-provisioner\n\n")),(0,r.kt)("h3",{id:"install-cert-manager"},"Install Cert Manager"),(0,r.kt)("p",null,"The Pulsar Chart uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jetstack/cert-manager"},"cert-manager")," to automate provisioning and managing TLS certificates. If you decide to enable TLS encryption for brokers or proxies, you need to install cert-manager first."),(0,r.kt)("p",null,"You can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm"},"official instructions")," to install cert-manager."),(0,r.kt)("p",null,"Alternatively, we provide a bash script ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/cert-manager/install-cert-manager.sh"},"install-cert-manager.sh")," to install a cert-manager release to namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cert-manager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/cert-manager/install-cert-manager.sh\n\n")),(0,r.kt)("h2",{id:"prepare-the-helm-release"},"Prepare the Helm Release"),(0,r.kt)("p",null,"Once you have install all the dependent charts and collected all of your configuration options, you can run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare_helm_release.sh")," to prepare the helm release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/pulsar/prepare_helm_release.sh -n <k8s-namespace> -k <helm-release-name>\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare_helm_release")," creates following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A k8s namespace for installing the Pulsar release"),(0,r.kt)("li",{parentName:"ul"},"Create a secret for storing the username and password of control center administrator. The username and password can be passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"prepare_helm_release.sh")," through flags ",(0,r.kt)("inlineCode",{parentName:"li"},"--control-center-admin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"--control-center-password"),". The username and password is used for logging into Grafana dashboard and Pulsar Manager."),(0,r.kt)("li",{parentName:"ul"},"Create the JWT secret keys and tokens for three superusers: ",(0,r.kt)("inlineCode",{parentName:"li"},"broker-admin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy-admin"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"admin"),". By default, it generates asymmetric pubic/private key pair. You can choose to generate symmeric secret key by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"--symmetric"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy-admin")," role is used for proxies to communicate to brokers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"broker-admin")," role is used for inter-broker communications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"admin")," role is used by the admin tools.")))),(0,r.kt)("h2",{id:"deploy-using-helm"},"Deploy using Helm"),(0,r.kt)("p",null,"Once you have done the following three things, you can proceed to install a Helm release."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collect all of your configuration options"),(0,r.kt)("li",{parentName:"ul"},"Install dependent charts"),(0,r.kt)("li",{parentName:"ul"},"Prepare the Helm release")),(0,r.kt)("p",null,"In this example, we've named our Helm release ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\nhelm upgrade --install pulsar charts/pulsar \\\n    --timeout 600 \\\n    --set [your configuration options]\n\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For the first deployment, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set initialize=true")," option to initialize bookie and Pulsar cluster metadata.")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"--version <installation version>")," option if you would like to install a specific version of Pulsar Helm chart."),(0,r.kt)("h2",{id:"monitoring-the-deployment"},"Monitoring the Deployment"),(0,r.kt)("p",null,"This will output the list of resources installed once the deployment finishes which may take 5-10 minutes."),(0,r.kt)("p",null,"The status of the deployment can be checked by running ",(0,r.kt)("inlineCode",{parentName:"p"},"helm status pulsar")," which can also be done while the deployment is taking place if you run the command in another terminal."),(0,r.kt)("h2",{id:"accessing-the-pulsar-cluster"},"Accessing the Pulsar Cluster"),(0,r.kt)("p",null,"The default values will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," for the following resources you can use to interact with the cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proxy: You can use the IP address to produce and consume messages to the installed Pulsar cluster."),(0,r.kt)("li",{parentName:"ul"},"Pulsar Manager: You can access the pulsar manager UI at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<pulsar-manager-ip>:9527"),"."),(0,r.kt)("li",{parentName:"ul"},"Grafana Dashboard: You can access the Grafana dashboard at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<grafana-dashboard-ip>:3000"),".")),(0,r.kt)("p",null,"To find the IP address of those components use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl get service -n <k8s-namespace>\n\n")))}m.isMDXComponent=!0}}]);