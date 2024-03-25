(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9311],{15680:(e,t,s)=>{"use strict";s.d(t,{xA:()=>l,yg:()=>w});var a=s(96540);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,a,o=function(e,t){if(null==e)return{};var s,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var g=a.createContext({}),c=function(e){var t=a.useContext(g),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},l=function(e){var t=c(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,o=e.mdxType,n=e.originalType,g=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=c(s),m=o,w=p["".concat(g,".").concat(m)]||p[m]||u[m]||n;return s?a.createElement(w,i(i({ref:t},l),{},{components:s})):a.createElement(w,i({ref:t},l))}));function w(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=s.length,i=new Array(n);i[0]=m;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<n;c++)i[c]=s[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},76231:(e,t,s)=>{"use strict";s.r(t),s.d(t,{contentTitle:()=>c,default:()=>w,frontMatter:()=>g,metadata:()=>l,toc:()=>p});var a=s(58168),o=(s(96540),s(15680)),n=s(6715),i=s(59678);const r=[{feature:"Produce / Exclusive",experimentalSince:"2.11.0",betaSince:"3.0.0",stableSince:"3.0.0",document:[{text:"Concept",link:"concepts-clients/#access-mode"},{text:"PIP-161",link:"https://github.com/apache/pulsar/issues/15528"}]},{feature:"Produce / Shared",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-clients/#access-mode"}]},{feature:"Subscription / Exclusive",experimentalSince:"",betaSince:"",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-messaging/#exclusive"}]},{feature:"Subscription / Failover",experimentalSince:"",betaSince:"",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-messaging/#failover"}]},{feature:"Subscription / Shared",experimentalSince:"",betaSince:"",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-messaging/#shared"}]},{feature:"Subscription / KeyShared",experimentalSince:"2.4.0",betaSince:"2.6.0",stableSince:"2.9.5",document:[{text:"Concept",link:"concepts-messaging/#key_shared"}]},{feature:"Messaging / Retry Letter Topic",experimentalSince:"",betaSince:"",stableSince:"",document:[{text:"Concept",link:"concepts-messaging/#retry-letter-topic"}]},{feature:"Messaging / Dead Letter Topic",experimentalSince:"2.2.0",betaSince:"2.3.0",stableSince:"2.4.0",document:[{text:"Concept",link:"concepts-messaging/#dead-letter-topic"}]},{feature:"Messaging / Delay Message Delivery",experimentalSince:"2.4.0",betaSince:"2.5.0",stableSince:"2.6.0",document:[{text:"Concept",link:"concepts-messaging/#delayed-message-delivery"}]},{feature:"Messaging / Batching",experimentalSince:"",betaSince:"",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-messaging/#batching"}]},{feature:"Messaging / Chunking",experimentalSince:"",betaSince:"",stableSince:"",document:[{text:"Concept",link:"concepts-messaging/#chunking"}]},{feature:"Transaction / Failover Subscription",experimentalSince:"",betaSince:"",stableSince:"",document:[]},{feature:"Transaction / Shared Subscription",experimentalSince:"2.8.0",betaSince:"2.9.0",stableSince:"2.9.3",document:[]},{feature:"Transaction / Segmented Snapshot",experimentalSince:"",betaSince:"",stableSince:"",document:[]},{feature:"Schema / KeyValue",experimentalSince:"",betaSince:"",stableSince:"2.6.0",document:[{text:"Quickstart",link:"schema-get-started/#keyvalue"}]},{feature:"Schema / Avro",experimentalSince:"",betaSince:"",stableSince:"2.6.0",document:[{text:"Quickstart",link:"schema-get-started/#avro"}]},{feature:"Schema / JSON",experimentalSince:"",betaSince:"",stableSince:"2.6.0",document:[{text:"Quickstart",link:"schema-get-started/#json"}]},{feature:"Functions / Java",experimentalSince:"",betaSince:"",stableSince:"2.8.0",document:[{text:"Concept",link:"functions-concepts"},{text:"Quickstart",link:"functions-quickstart"}]},{feature:"Functions / Golang",experimentalSince:"",betaSince:"",stableSince:"",document:[{text:"Concept",link:"functions-concepts"}]},{feature:"Functions / Python",experimentalSince:"",betaSince:"",stableSince:"",document:[{text:"Concept",link:"functions-concepts"}]},{feature:"Multitenancy",experimentalSince:"",betaSince:"",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-multi-tenancy"}]},{feature:"Geo Replication",experimentalSince:"",betaSince:"",stableSince:"2.2.0",document:[{text:"Concept",link:"concepts-replication"},{text:"Operation",link:"administration-geo"}]}],g={id:"pulsar-broker-feature-matrix",title:"Pulsar Broker Feature Matrix"},c="Pulsar Broker Feature Matrix",l={type:"mdx",permalink:"/broker-feature-matrix",source:"@site/src/pages/broker-feature-matrix.mdx",title:"Pulsar Broker Feature Matrix",description:"Feature",frontMatter:{id:"pulsar-broker-feature-matrix",title:"Pulsar Broker Feature Matrix"}},p=[],u={toc:p},m="wrapper";function w(e){let{components:t,...s}=e;return(0,o.yg)(m,(0,a.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"pulsar-broker-feature-matrix"},"Pulsar Broker Feature Matrix"),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,(0,o.yg)("b",null,"Feature")),(0,o.yg)("th",null,(0,o.yg)("b",null,"Experimental Since")),(0,o.yg)("th",null,(0,o.yg)("b",null,"Beta Since")),(0,o.yg)("th",null,(0,o.yg)("b",null,"Stable Since")),(0,o.yg)("th",null,(0,o.yg)("b",null,"Document")))),(0,o.yg)("tbody",null,r.map((e=>(0,o.yg)("tr",{key:e.feature},(0,o.yg)("td",null,e.feature),(0,o.yg)("td",null,e.experimentalSince),(0,o.yg)("td",null,e.betaSince),(0,o.yg)("td",null,e.stableSince),(0,o.yg)("td",null,(0,o.yg)("ul",null,e.document.map((e=>(0,o.yg)("li",null,(0,o.yg)("a",{href:e.link.startsWith("https://")?e.link:(0,i.yJ)(e.link,"",n[0])},e.text))))))))))))}w.isMDXComponent=!0},9763:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a=[{name:"Kingsoft Cloud",url:"https://www.ksyun.com/",logo:"https://fe.ksyun.com/header/images/pc/logo.png?a048d39f",logo_white:!0},{name:"Narvar",url:"https://corp.narvar.com/",logo:"https://assets-global.website-files.com/5d278e4646ba9e55d6c67475/5d49ce69c03a64b2d8466816_Logo%20-%20Colored.svg"},{name:"Giggso",url:"https://giggso.com/",logo:"https://www.giggso.com/wp-content/uploads/2021/06/logo-giggs.png"},{name:"STICorp",url:"https://www.sticorp.com.br/",logo:"https://sticorp.com.br/wp-content/uploads/2021/02/logo-sticorp.png"},{name:"Verizon Media",url:"https://www.verizonmedia.com/",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Verizon_Media_2019_logo.svg/1200px-Verizon_Media_2019_logo.svg.png",featured:1},{name:"Yahoo! JAPAN",url:"https://www.yahoo.co.jp/",logo:"https://s.yimg.jp/images/top/sp2/cmn/logo-170307.png",featured:2},{name:"Zhaopin",url:"https://www.zhaopin.com/",logo:"https://fecdn5.zhaopin.cn/www/assets/zhaopin.4659478df1ec9a2e6ed76997a64884f6.png"},{name:"Onde",url:"https://onde.app/",logo:"https://pbs.twimg.com/profile_images/1142024893229346818/JlCmThRZ_200x200.png"},{name:"Overstock",url:"https://www.overstock.com/",logo:"https://ak1.ostkcdn.com/img/mxc/OSTK_MAIN_LOGO_20181127KCH.jpg"},{name:"Ndustrial.io",url:"https://www.ndustrial.io/",logo:"https://images.squarespace-cdn.com/content/v1/56df41f2f699bb94c7a2c6fc/1552657060081-WX86GJXHX7UK81RGE6YU/ke17ZwdGBToddI8pDm48kKCofG1A85AnHnyK5g0bGkJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzRPjxD400fzchYtVcY_asIzZyz67rHxPkx39rBmDbrxrXjNbFEDrPRRKbjQDhrWWQ/ndustrial.png"},{name:"Nutanix",url:"https://www.nutanix.com/",logo:"https://www.zuora.com/wp-content/uploads/2017/05/nutanix.png",featured:4},{name:"The Hut Group",url:"https://www.thg.com",logo:"https://1000logos.net/wp-content/uploads/2020/09/THG-Logo-1024x640.png"},{name:"Turtlequeue",url:"https://turtlequeue.com",logo:"https://i.ibb.co/28MHsWV/Turtle-Queue.png"},{name:"ProxyClick",url:"https://www.proxyclick.com/",logo:"https://www.proxyclick.com/hubfs/assets/images/logo-positive.svg"},{name:"Toast",url:"https://toasttab.com",logo:"https://cdn2.hubspot.net/hubfs/412971/toast-restaurant-pos.png"},{name:"Quantel AI",url:"http://quantel.ai/",logo:"https://static.wixstatic.com/media/7c19eb_41a090c255c94d19bc37cca9777c1d90~mv2.jpg/v1/fill/w_314,h_270,al_c,q_80,usm_0.66_1.00_0.01/Quantel-final%20white%20bg.webp"},{name:"Splunk",url:"https://splunk.com/",logo:"https://www.splunk.com/content/dam/splunk-blogs/images/2017/02/splunk-logo.png",featured:5},{name:"StreamNative",url:"https://streamnative.io/",logo:"https://global-uploads.webflow.com/638a1dc72083d166ed6e3d76/63926c17a52727a15e13decd_Logo-streamnative-150px.svg"},{name:"EMQ",url:"https://www.emqx.io/",logo:"https://www.emqx.io/images/logo.png"},{name:"Tencent",url:"https://www.tencent.com",logo:"http://pluspng.com/img-png/tencent-png-tencent-logo-logotype-emblem-2-7537.png",featured:3},{name:"Comcast",url:"https://corporate.comcast.com/",logo:"https://corporate.comcast.com/resources/corporate/assets/images/svg/logo-desktop.svg"},{name:"China Mobile",url:"https://www.chinamobileltd.com/",logo:"https://www.chinamobileltd.com/en/images/global/logo.svg"},{name:"VipKid",url:"https://t.vipkid.com.cn/",logo:"https://s.vipkidstatic.com/fe-static/teacher/mkt-pc/img/e74f189.svg"},{name:"Vivy",url:"https://www.vivy.com/",logo:"https://uploads-ssl.webflow.com/62a1bf609247c3abc6b62738/62a1c3b4294f88b6a9d748f9_vivy-logo.svg"},{name:"IoTium",url:"https://www.iotium.io/",logo:"https://www.iotium.io/site/wp-content/uploads/2018/04/IoTium-logo.jpg"},{name:"One Click Retail",url:"https://oneclickretail.com/",logo:"https://www.ascentialedge.com/themes/contrib/custom/images/edge-by-ascential.svg",logo_white:!0},{name:"Tuya",url:"https://en.tuya.com/",logo:"https://static1.tuyaus.com/static/portal_intl/img/e25eefa.png"},{name:"China Telecom",url:"https://www.chinatelecom-h.com/",logo:"https://www.chinatelecom-h.com/en/images/global/logo.png"},{name:"OKCoin",url:"https://www.okcoin.com/",logo:"https://i0.wp.com/blog.okcoin.com/wp-content/uploads/2019/08/OKCoin-Logo-Spring2019-250x60px-01.png?fit=251%2C62&ssl=1"},{name:"BestPay",url:"https://www.bestpay.com.cn/",logo:"https://www.bestpay.com.cn/assets/newindex/images/logo-78d1d51487.png"},{name:"360",url:"https://www.360.cn/",logo:"http://p2.ssl.qhimg.com/t01d91636862957f76e.png"},{name:"Lakala",url:"http://www.lakala.com/",logo:"https://www.lakala.com/storage/topic/20200904/476e4e31e53175f17e15d3055d8ab189.png"},{name:"Huya",url:"https://www.huya.com/",logo:"https://a.msstatic.com/huya/main/img/logo2.png",logo_white:!0},{name:"CTWing",url:"https://www.ctwing.cn/"},{name:"YunZhiHuLian",url:"https://www.weihudashi.com",logo:"https://www.weihudashi.com/image/header-logo.png"},{name:"XiaoDuoAI",url:"https://www.xiaoduoai.com/",logo:"https://cdn.xiaoduoai.com/official-site/dist/assets/img/indexPage/xiaoduo_logo_en_white.843927.png",logo_white:!0},{name:"CleverCloud",url:"https://www.clever-cloud.com/en/",logo:"/img/clever-cloud.svg"},{name:"OVHcloud",url:"https://www.ovhcloud.com/",logo:"https://www.ovh.com/world/images/logo/ovhLogoColor.svg"},{name:"BrandsEye",url:"https://www.brandseye.com/",logo:"https://www.brandseye.com/theme-images/brandseye-logo-v2.png"},{name:"Max Kelsen",url:"https://maxkelsen.com/",logo:"https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/87278353-03a7-4a1e-be1f-e4257312bded.png?w=3840"},{name:"HSL Developer Community of Helsinki Regional Transport Authority",url:"https://dev.hsl.fi/",logo:"https://pbs.twimg.com/profile_images/2507371771/9toyr6r5ngcozfwg42zv_400x400.png"},{name:"MercadoLibre",url:"https://www.mercadolibre.com/",logo:"https://d1.awsstatic.com/case-studies/LATAM/mercadolibre.1d9d3766bb06e60948f1c5ce8851ce0eac63b349.png"},{name:"BIGO",url:"https://www.bigo.sg/",logo:"https://static-web.bigolive.tv/as/bigo-static/official_website/pc/img/about/logo-blue-big.png"},{name:"Keytop",url:"https://www.ikeytop.com/",logo:"https://static.wixstatic.com/media/ecbdea_434ae22f85ed4e93ba3fdc39c7141c3f~mv2.png/v1/fill/w_424,h_116,al_c,usm_0.66_1.00_0.01/Keytop_logo.png"},{name:"Zhihu",url:"https://www.zhihu.com/",logo:"https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"},{name:"Newland",url:"http://www.nlsoft.com.cn/",logo:"http://www.nlsoft.com.cn/images/common/logo.png"},{name:"PalFish",url:"https://www.ipalfish.com/",logo:"https://s04.cdn.ipalfish.com/kid/img/logo.ad4731cb.png"},{name:"Dada Group",url:"https://about.imdada.cn",logo:"https://fe.imdada.cn/alaskan/static/logo_color-aaed10c6738b703ad2b54c17f4c3f114.png"},{name:"Huawei Cloud",url:"https://www.huaweicloud.com",logo:"https://res.hc-cdn.com/cnpm-common-resource/2.0.2/base/header/components/images/logo.png"},{name:"Su Ning",url:"https://www.suning.com",logo:"https://image1.suning.cn/uimg/cms/img/159642507148437980.png"},{name:"Pingan Securites",url:"https://stock.pingan.com",logo:"https://stock.pingan.com/static/uploads/softdowm/2018-10-9/upload_c9ac4929e293f5109623b541740618ba.png"},{name:"Ge Tui",url:"https://www.getui.com",logo:"https://gt-static.getui.com/getui_pc/client/img/e33ecd9.svg",logo_white:!0},{name:"DataStax",url:"https://datastax.com",logo:"https://cdn.sanity.io/images/bbnkhnhl/production/5c1de73e536af727ee06e88cb370d2fea510b792-400x38.png?w=640&q=75&fit=clip&auto=format",logo_white:!0},{name:"KAISA",url:"https://www.kaisafin.com",logo:"https://www.kaisafin.com/images/logo.svg"},{name:"Bairong Inc.",url:"http://www.brgroup.com"},{name:"Itcast.cn",url:"http://www.itcast.cn",logo:"http://www.itcast.cn/2018czgw/images/logo2.png"},{name:"Appen",url:"https://www.appen.com.cn/",logo:"https://www.appen.com.cn/wp-content/uploads/2020/03/no-tagline.svg"},{name:"Pandio",url:"https://pandio.com",logo:"https://pandio-public-assets.s3-us-west-2.amazonaws.com/pandio_225-05.png"},{name:"Deposit Solutions",url:"https://www.deposit-solutions.com/",logo:"/img/deposit-solutions.png"},{name:"Macrometa",url:"https://macrometa.com",logo:"https://uploads-ssl.webflow.com/5fa9e94bc848ae335afdd627/602ae50ae801b44f15185683_logo-moc-blue.png"},{name:"Softtech",url:"https://softtech.com.tr/en/homepage/",logo:"https://softtech.com.tr/wp-content/uploads/2017/12/SOFTTECH-LOGO.png"},{name:"Baidu",url:"https://www.baidu.com",logo:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"},{name:"Dominos-Pizza",url:"https://www.dominos.com.cn/home",logo:"/img/dominos-pizza.svg"},{name:"MGTV",url:"https://www.mgtv.com",logo:"http://honey.mgtv.com/klyg.official/images/nav/logo.png",logo_white:!0},{name:"AsiaInfo",url:"https://www.asiainfo.com/en_us/index.html",logo:"https://www.asiainfo.com/include/images/logo.svg"}].sort(((e,t)=>e.name>t.name?1:-1))},89236:(e,t,s)=>{const a=s(2543),o=s(70312),{renderAnnouncementBar:n}=s(88391),i=s(6715),r=i[0],g={...a.keyBy(i.map((e=>({label:e,path:e}))),"label"),current:{label:"Next",path:"next"}};let c=["current"];try{c=s(50658)}catch(N){}const l="https://pulsar.apache.org",p=l+"/api",u=l+"/admin-rest-api",m=l+"/functions-rest-api",w=l+"/source-rest-api",d=l+"/sink-rest-api",f=l+"/packages-rest-api",h=l+"/transactions-rest-api",v=l+"/lookup-rest-api",b="https://github.com/apache/pulsar",k="https://github.com/apache/pulsar-site",y=s(7830),x=s(62864);e.exports={title:"Apache Pulsar",tagline:"Apache Pulsar is a distributed, open source pub-sub messaging and streaming platform for real-time workloads, managing hundreds of billions of events per day.",url:"https://pulsar.apache.org",baseUrl:"/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.ico",organizationName:"apache",projectName:"pulsar",customFields:{githubUrl:b,oldUrl:"https://pulsar.apache.org"},trailingSlash:!0,themeConfig:{image:"img/pulsar-social-media-card.png",announcementBar:{id:"summit",content:n("Get your free pass for Pulsar Virtual Summit Europe 2024 on May 14, 2024 \ud83d\uddd3\ufe0f","https://registration.socio.events/e/pulsarvirtualsummiteurope2024"),backgroundColor:"#282826",textColor:"#fff",isCloseable:!1},colorMode:{disableSwitch:!0},zoom:{selector:".markdown img",background:{light:"#fff",dark:"#111"},config:{}},navbar:{title:"",logo:{alt:"Apache Pulsar logo",src:"img/logo-black.svg",width:127,height:25},items:[{type:"dropdown",label:"Get Started",position:"left",items:[{to:`/docs/${r}/concepts-overview/`,activeBaseRegex:`docs/(${i.join("|")})/concepts-overview/$`,label:"Concepts"},{to:`/docs/${r}/`,activeBaseRegex:`docs/(${i.join("|")})/$`,label:"Quickstart"},{to:"/ecosystem/",label:"Ecosystem"}]},{type:"doc",docId:"about",position:"left",label:"Docs"},{to:"/features/",position:"left",label:"Features"},{to:"/use-cases/",position:"left",label:"Use Cases"},{type:"dropdown",label:"Community",position:"left",className:"community-dropdown",items:[{to:"/community",activeBaseRegex:"^$",label:"Welcome",className:"scroll-link scroll-welcome",id:"scroll-welcome"},{to:"/community#section-discussions",activeBaseRegex:"^$",label:"Discussions",className:"scroll-link scroll-discussions",id:"scroll-discussions"},{to:"/community#section-governance",activeBaseRegex:"^$",label:"Governance",className:"scroll-link",id:"scroll-governance"},{to:"/community#section-community",activeBaseRegex:"^$",label:"Meet the Community",className:"scroll-link",id:"scroll-community"},{to:"/community#section-contribute",activeBaseRegex:"^$",label:"Contribute",className:"scroll-link",id:"scroll-contribute"},{to:"/contribute/",label:"Contribution Guide"},{to:"https://github.com/apache/pulsar/wiki",label:"Wiki"},{to:"https://github.com/apache/pulsar/issues",label:"Issue Tracking"}]},{type:"dropdown",label:"Learn",position:"left",items:[{to:"/blog",label:"Blog"},{to:"/books",label:"Books"},{to:"/case-studies",label:"Case Studies"},{to:"/articles",label:"Articles"},{to:"/presentations",label:"Presentations"},{to:"/events",label:"Events"}]},{to:"/download",label:"Download",position:"right",className:"navbar_download_button"}]},footer:{logo:{alt:"Pulsar Logo",src:"img/pulsar-white.svg",href:"/"},links:[{items:[{label:"Foundation",href:"https://www.apache.org/"},{label:"Events",href:"https://www.apache.org/events/current-event.html"}]},{items:[{label:"License",href:"https://www.apache.org/licenses/"},{label:"Thanks",href:"https://www.apache.org/foundation/thanks"},{label:"Sponsorship",href:"https://www.apache.org/foundation/sponsorship"}]},{items:[{label:"Security",to:"/security"},{label:"Privacy",href:"https://www.apache.org/foundation/policies/privacy.html"},{label:"Contact",to:"/contact"}]},{items:[{html:'\n                <div class="social-icons">\n                  <a\n                    target="_blank"\n                    href="https://communityinviter.com/apps/apache-pulsar/apache-pulsar"\n                    aria-label="Join the Apache Pulsar Slack workspace"\n                  >\n                    <img alt="Slack logo" src="/img/slack-white.svg" width="26">\n                  </a>\n                  <a\n                    target="_blank"\n                    href="https://github.com/apache/pulsar/"\n                    aria-label="View the Apache Pulsar project on GitHub"\n                  >\n                    <img alt="GitHub logo" src="/img/github-white.svg" width="26">\n                  </a>\n                </div>\n              '}]}],copyright:`\n        <div>\n          <img class="footer-apache-logo" src="/img/feather-logo-white.svg" alt="" width="20">\n          The Apache Software Foundation\n        </div>\n        <p>Apache Pulsar is available under the Apache License, version 2.0. Apache Pulsar is an open-source, distributed messaging and streaming platform built for the cloud.</p>\n        <p>Copyright \xa9 ${(new Date).getFullYear()} The Apache Software Foundation. All Rights Reserved. Apache, Pulsar, Apache Pulsar, and the Apache feather logo are trademarks or registered trademarks of The Apache Software Foundation.</p>\n      `},prism:{theme:s(76062),additionalLanguages:["csharp","groovy","http","ini","java","powershell","properties","protobuf","yaml"]},algolia:{appId:"WK2YL0SALL",apiKey:"42d24d221fbd8eb59804a078208aaec0",indexName:"apache_pulsar"}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",sidebarPath:5469,editUrl:`${k}/edit/main`,remarkPlugins:[o(/{\@inject\:\s?(((?!endpoint)[^}])+):([^}]+):([^}]+)}/,(e=>{let[,t,,s,a]=e;return"javadoc"==t?{link:p+a,text:s}:"github"==t?{link:b+"/tree/master/"+a,text:s}:"rest"==t?{link:u+"#"+a,text:s}:"functions"==t?{link:m+"#"+a,text:s}:"source"==t?{link:w+"#"+a,text:s}:"sink"==t?{link:d+"#"+a,text:s}:"packages"==t?{link:f+"#"+a,text:s}:{link:a,text:s}})),o(/{\@inject\:\s?endpoint\|([^}]+)}/,(e=>{let[,t]=e,[s,a,o]=t.split("|");o||(o="");let n=a.split("/");const i=n[2],r=n[3],g={functions:m,source:w,sink:d,packages:f,transactions:h,lookup:v}[r]||u;let c;if(o.indexOf("?version=")>=0){const e=o.split("?version=");c="version="+e[1]+"&apiversion="+i+"#"+e[0],e[0].startsWith("operation/")&&(a+=e[0].slice(9))}else c="version=master&apiversion="+i+"#"+o,o.startsWith("operation/")&&(a+=o.slice(9));return{text:s+" "+a,link:g+"?"+c}})),y],rehypePlugins:[x],versions:g,onlyIncludeVersions:c||["current"]},blog:{blogSidebarCount:0,showReadingTime:!0,editUrl:`${k}/edit/main/`},theme:{customCss:[51043,50943,1870,68733,78499,99339,26400,53355,92503,95886]}}]],plugins:["docusaurus-plugin-image-zoom",["content-docs",{id:"contribute",path:"contribute",routeBasePath:"contribute",showLastUpdateAuthor:!0,showLastUpdateTime:!0,sidebarPath:31352,editUrl:`${k}/edit/main`}],["content-docs",{id:"release-notes",path:"release-notes",routeBasePath:"release-notes",editUrl:`${k}/edit/main`,sidebarPath:86039}],["content-docs",{id:"security",path:"security",routeBasePath:"security",sidebarPath:!1}],["content-docs",{id:"client-feature-matrix",path:"client-feature-matrix",routeBasePath:"client-feature-matrix",sidebarPath:!1}]],scripts:[{src:"/js/sine-waves.min.js",async:!0},"/js/matomo-agent.js"],clientModules:[73342],stylesheets:[{href:"/css/katex-0.13.24.min.css",type:"text/css",media:"print",onload:"this.media='all'"}]}},70312:(e,t,s)=>{const a=s(26311),o=s(88995);function n(e,t,s){if("text"===e)return function(e){return{type:"text",value:e.value}}(t);if("link"===e)return function(e,t){return{type:"link",title:e.title?e.title:null,url:e.url,children:t}}(t,s);throw new Error("mdast hyperscript not supported for type "+e)}function i(e,t,s){const a=e.value,o=function(e,t){return new RegExp(e.source+"(?! *\\))(?! *])",t||e.flags)}(function(e,t){return new RegExp(e.source.replace(/^\^/,"").replace(/\$$/,""),t||e.flags)}(t),"g"),i=[];let r,g=0;for(;null!==(r=o.exec(a));){const e=r.index;g!==e&&i.push(n("text",{value:a.slice(g,e)}));const{link:t,text:c}=s(r);i.push(n("link",{url:t},[n("text",{value:c})])),g=o.lastIndex}const c=a.slice(g);return c.length>0&&i.push(n("text",{value:c})),i}e.exports=function(e,t){return()=>s=>(a(s,"text",((e,t)=>{t.length>0&&"link"===t[t.length-1].type&&(e._ignoreMe=!0)})),o(s,(s=>"text"!==s.type?[s]:s._ignoreMe?(delete s._ignoreMe,[s]):i(s,e,t))),s)}},5469:(e,t,s)=>{s(47403)},31352:e=>{e.exports={sidebarDevelopment:["about",{type:"category",label:"Getting started",items:["setup-building","setup-ide","setup-mergetool","setup-debugging"]},{type:"category",label:"Development",items:["develop-coding-conventions","develop-triage","develop-labels","develop-semantic-title"]},{type:"category",label:"Testing and CI",items:["testing-licenses","personal-ci"]},{type:"category",label:"Website",items:["site-intro","document-preview","document-syntax"]},{type:"category",label:"Documentation",items:["document-intro","document-contribution"]},{type:"category",label:"Releases",items:["release-policy",{type:"category",label:"Release process",link:{type:"doc",id:"release-process"},items:["create-gpg-keys","release-note-guide"]},"validate-release-candidate"]},{type:"category",label:"Committers",items:["become-core-developer"]}]}},86039:e=>{e.exports={releaseNote:["pulsar",{type:"category",label:"Clients Release Notes",link:{type:"doc",id:"clients"},items:["client-java","client-ws","client-cpp","client-python","client-go","client-node","client-cs"],collapsed:!1},"pulsar-manager"]}},88391:e=>{e.exports={renderAnnouncementBar:function(e,t){return`\n    <a class="announcement-bar" href="${t}" target="_blank">\n      <div class="announcement-bar__content">\n        <svg class="announcement-bar__icon">\n          \n<svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.5 19.6001H16.1L15.3 29.2001L26.5 12.4H17.06L18.1 2.80005L6.5 19.6001Z" stroke="#F7F7F7" stroke-width="1.5" stroke-linejoin="round"/>\n</svg>\n\n        </svg>\n\n        <span>\n          ${e}\n        </span>\n\n        <svg class="announcement-bar__icon">\n          \n<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="20" height="20" transform="translate(6 6)" fill="white" fill-opacity="0.01"/>\n<path d="M17.6667 10.1667L23.5 16.0001M23.5 16.0001L17.6667 21.8334M23.5 16.0001L8.5 16.0001" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>\n<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white"/>\n</svg>\n\n        </svg>\n      </div>\n    </a>\n  `}}},59678:(e,t,s)=>{"use strict";s.d(t,{yJ:()=>g,L0:()=>p,tv:()=>c,HF:()=>l});var a=s(83362),o=(s(9763),s(6715));const n=JSON.parse('{"2.10.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.10.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.10.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.10.3":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.10.4":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.10.5":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"2.10.6":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.11.0":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"2.11.1":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"2.11.2":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"2.11.3":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"2.11.4":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"2.3.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.3.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.3.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.4.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.4.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.4.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.5.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.5.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.5.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.6.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.6.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.6.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.7.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.7.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.7.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.7.3":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.7.4":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.7.5":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggersink","swaggersource"],"version":"v3"}],"2.8.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.8.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.8.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.8.3":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.8.4":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.9.0":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.9.1":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.9.2":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.9.3":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.9.4":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"2.9.5":[{"fileName":["swagger"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource"],"version":"v3"}],"3.0.0":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.0.1":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.0.2":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.0.3":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.1.0":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.1.1":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.1.2":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.1.3":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.2.0":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"3.2.1":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}],"master":[{"fileName":["swagger","swaggerlookup"],"version":"v2"},{"fileName":["swaggerfunctions","swaggerpackages","swaggersink","swaggersource","swaggertransactions"],"version":"v3"}]}');var i=s(89236),r=s.n(i);o[0];function g(e,t,s){return r().baseUrl+(t?t+"/":"")+"docs/"+(s?s+"/":"")+(e||"")}function c(){const e="undefined"!=typeof window&&window;return e?e.localStorage:null}function l(){try{if(/version=[0-9.x]+/.test(location.href))return location.href.match(/version=([0-9.x]+)/)[1]}catch(e){console.error(e)}return"master"}function p(e){let t=l(),s="",o={},i={};for(let[r,g]of Object.entries(n))if("master"==r||a.Ay.compare(r,"2.8.0","<"))o[r]=g;else{o[r]=g;let[e,t]=r.split("."),s=e+"."+t+".x";i[s]=[...i[s]||[],r]}for(let[r,g]of Object.entries(i)){let e=g.sort(((e,t)=>-a.Ay.compare(t,e,"<")))[0];o[r]=n[e]}return s=0==o[t][0].fileName.indexOf(e)?o[t][0].version:o[t][1].version,s}},50658:e=>{"use strict";e.exports=["2.11.x"]},47403:e=>{"use strict";e.exports={}},6715:e=>{"use strict";e.exports=JSON.parse('["3.2.x","3.1.x","3.0.x","2.11.x","2.10.x","2.9.x","2.8.x","2.7.5","2.7.4","2.7.3","2.7.2","2.7.1","2.7.0","2.6.4","2.6.3","2.6.2","2.6.1","2.6.0","2.5.2","2.5.1","2.5.0","2.4.2","2.4.1","2.4.0","2.3.2","2.3.1","2.3.0","2.2.1","2.2.0"]')}}]);