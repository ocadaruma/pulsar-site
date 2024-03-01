"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27918],{91262:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(72389);function r(e){let{children:t,fallback:n}=e;return(0,l.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},74471:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var a=n(67294),l=n(10833),r=n(902);const o=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(87462),v=n(95999),h=n(32244);function p(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function b(){const{metadata:e}=s();return a.createElement(p,{previous:e.previous,next:e.next})}var g=n(52263),f=n(39960),E=n(80143),N=n(35281),L=n(60373),C=n(74477),_=n(91262);let k=n(44908);const x=k[0],Z=[k[1],k[2]];const w={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for Next.")},maintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.maintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is the documentation for {versionLabel}.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is the documentation for {versionLabel}, which is no longer actively maintained.")}};function y(e){let t=null;if("current"==e.versionMetadata.version)t=w.unreleased;else if(Z.includes(e.versionMetadata.version))t=w.maintained;else{if(e.versionMetadata.version==x)return a.createElement(a.Fragment,null);t=w.unmaintained}return a.createElement(t,e)}function T(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:l},t))}},"We recommend you use the {latestVersionLink}.")}function H(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,g.Z)(),{pluginId:r}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,L.J)(r),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,E.Jo)(r);var c;let m=(i??(c=s).docs.find((e=>e.id===c.mainDocId))).path,u=new RegExp("/"+n.version+"/");return m=m.replace(u,"/"),a.createElement("div",{className:(0,d.Z)(t,N.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(y,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(T,{versionLabel:x,onClick:()=>{o(s.name),window.location.href=m}})))}function A(e){let{className:t}=e;const n=(0,C.E)();return a.createElement(_.Z,null,(()=>n.version!=x&&location.pathname.startsWith("/docs")?a.createElement(H,{className:t,versionMetadata:n}):a.createElement(a.Fragment,null)))}function M(e){let{className:t}=e;const n=(0,C.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,N.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function I(e){let{lastUpdatedBy:t}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function B(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:N.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(I,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var O=n(32760),R=n(69652);const P={lastUpdated:"lastUpdated_vwxv"};function S(e){return a.createElement("div",{className:(0,d.Z)(N.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(R.Z,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(N.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(O.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",P.lastUpdated)},(n||l)&&a.createElement(B,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function j(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,i=o.length>0,c=!!(t||n||r);return i||c?a.createElement("footer",{className:(0,d.Z)(N.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(S,{tags:o}),c&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var D=n(86043),F=n(93743);const q={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",q.tocCollapsibleButton,!t&&q.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const W={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:i}=(0,D.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(W.tocCollapsible,!o&&W.tocCollapsibleExpanded,n)},a.createElement(z,{collapsed:o,onClick:i}),a.createElement(D.z,{lazy:!0,className:W.tocCollapsibleContent,collapsed:o},a.createElement(F.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const J={tocMobile:"tocMobile_ITEo"};function $(){const{toc:e,frontMatter:t}=s();return a.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(N.k.docs.docTocMobile,J.tocMobile)})}var Q=n(75087);function X(){const{toc:e,frontMatter:t}=s();return a.createElement(Q.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:N.k.docs.docTocDesktop})}var Y=n(41498),K=n(18823);function ee(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(N.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Y.Z,{as:"h1"},n)),a.createElement(K.Z,null,t))}var te=n(53438),ne=n(48596),ae=n(44996);function le(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const re={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function oe(){const e=(0,ae.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(le,{className:re.breadcrumbHomeIcon})))}const ie={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function se(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(f.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function ce(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function de(){const e=(0,te.s1)(),t=(0,ne.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(N.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(oe,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(ce,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(se,{href:t.href,isLast:l},t.label))})))):null}const me={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ue(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement($,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(X,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&me.docItemCol)},a.createElement(A,null),a.createElement("div",{className:me.docItemContainer},a.createElement("article",null,a.createElement(de,null),a.createElement(M,null),n.mobile,a.createElement(ee,null,t),a.createElement(j,null)),a.createElement(b,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ve(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(c,null),a.createElement(ue,null,a.createElement(n,null))))}},32760:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(95999),r=n(35281),o=n(87462),i=n(86010);const s={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...n}=e;return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(c,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(39960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},93743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const p=(0,r.L)(),b=d??p.tableOfContents.minHeadingLevel,g=u??p.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:g});return m((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:g}}),[s,c,b,g])),l.createElement(v,(0,a.Z)({toc:f,className:n,linkClassName:s},h))}},69652:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(86010),r=n(95999),o=n(39960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:n,count:r}=e;return a.createElement(o.Z,{href:t,className:(0,l.Z)(i.tag,r?i.tagWithCount:i.tagRegular)},n,r&&a.createElement("span",null,r))}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(c.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:c.tag},a.createElement(s,{label:t,permalink:n}))}))))}},74477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(67294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function i(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},75087:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),l=n(67294),r=n(86010),o=n(93743);const i={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",c({style:{width:"initial",height:"initial"},width:12,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,s||(s=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.563 3.316A1.31 1.31 0 0 0 19.687 3h-1.688v9h1.688a1.31 1.31 0 0 0 1.312-1.077V4.077a1.31 1.31 0 0 0-.436-.761ZM16 12.788l-3.608 8.117A1.999 1.999 0 0 1 11 19v-4a1 1 0 0 0-1-1H4.328a1.002 1.002 0 0 1-1-1.15l1.38-9a1 1 0 0 1 1-.85h10.291v9.788ZM19.661 1a3.31 3.31 0 0 1 3.329 2.866c.006.044.01.09.01.134v7c0 .045-.004.09-.01.134A3.31 3.31 0 0 1 19.661 14h-2.012l-3.736 8.406a1 1 0 0 1-.914.594 4 4 0 0 1-4-4v-3H4.344a3 3 0 0 1-2.994-3.45l1.38-9A3.002 3.002 0 0 1 5.724 1h13.937Z",fill:"currentColor"})))};var m;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const v=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",u({style:{width:"initial",height:"initial"},width:12,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,m||(m=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.086 1.594A1 1 0 0 1 11 1a4 4 0 0 1 4 4v3h4.655a3 3 0 0 1 2.994 3.45l-1.38 9A3.002 3.002 0 0 1 18.275 23H4a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h2.35l3.736-8.406ZM8 11.212l3.608-8.117A2 2 0 0 1 13 5v4a1 1 0 0 0 1 1h5.671a1 1 0 0 1 1 1.15l-1.38 9a1 1 0 0 1-1 .85H8v-9.788ZM6 21v-9H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2Z",fill:"currentColor"})))},h="Actions_uugI",p="Action_iBHd",b=()=>{const[e,t]=(0,l.useState)(),n=n=>{e||(t(n),window&&window._paq&&window._paq.push(["trackEvent","Website Feedback",n,location.pathname]))};let a={justifyContent:"center",display:"flex",borderRadius:"99999px",width:"2.5rem",height:"2.5rem"};return e||(a.cursor="pointer"),l.createElement("div",{className:"border"},l.createElement("div",{style:{color:"var(--ifm-toc-link-color)"}},"Was this helpful?"),l.createElement("div",{style:{borderWidth:"1px",padding:"3px",display:"flex"}},l.createElement("div",{style:{...a,background:"up"===e?"var(--text-color)":"",color:"up"===e?"#fff":""},onClick:()=>n("up")},l.createElement(v,null)),l.createElement("div",{style:{...a,background:"down"===e?"var(--text-color)":"",color:"down"===e?"#fff":""},onClick:()=>n("down")},l.createElement(d,null))),l.createElement("div",{className:h},l.createElement("a",{target:"_blank",className:p,href:"https://github.com/apache/pulsar/issues/new?assignees=&labels=doc-required&projects=&template=doc.yml&title=%5BDoc%5D+"},"\ud83d\udca1 Suggest changes"),l.createElement("a",{target:"_blank",className:p,href:"https://github.com/apache/pulsar/discussions/new?category=q-a"},"\ud83d\udedf Get support")))},g="table-of-contents__link toc-highlight",f="table-of-contents__link--active";function E(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(b,null),l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:g,linkActiveClassName:f})))}},44908:e=>{e.exports=JSON.parse('["3.2.x","3.1.x","3.0.x","2.11.x","2.10.x","2.9.x","2.8.x","2.7.5","2.7.4","2.7.3","2.7.2","2.7.1","2.7.0","2.6.4","2.6.3","2.6.2","2.6.1","2.6.0","2.5.2","2.5.1","2.5.0","2.4.2","2.4.1","2.4.0","2.3.2","2.3.1","2.3.0","2.2.1","2.2.0"]')}}]);