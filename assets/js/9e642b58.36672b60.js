"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[8456],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(4137));const a={},i="Choose A Region That Is Closest To Users",s={unversionedId:"catalog/cloud/choose-region-closest-to-users",id:"catalog/cloud/choose-region-closest-to-users",title:"Choose A Region That Is Closest To Users",description:"Version",source:"@site/docs/catalog/cloud/choose-region-closest-to-users.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/choose-region-closest-to-users",permalink:"/catalog/cloud/choose-region-closest-to-users",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/choose-region-closest-to-users.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cache Static Data",permalink:"/catalog/cloud/cache-static-data"},next:{title:"Compress Transmitted Data",permalink:"/catalog/cloud/compress-transmitted-data"}},l={},c=[{value:"Version",id:"version",level:2},{value:"Submitted By",id:"submitted-by",level:2},{value:"Published Date",id:"published-date",level:2},{value:"Tag Category",id:"tag-category",level:2},{value:"Tags",id:"tags",level:2},{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"choose-a-region-that-is-closest-to-users"},"Choose A Region That Is Closest To Users"),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("p",null,"1.0"),(0,n.kt)("h2",{id:"submitted-by"},"Submitted By"),(0,n.kt)("p",null,"Sarah Hsu (@greenhsu123)"),(0,n.kt)("h2",{id:"published-date"},"Published Date"),(0,n.kt)("p",null,"TBD"),(0,n.kt)("h2",{id:"tag-category"},"Tag Category"),(0,n.kt)("p",null,"Cloud"),(0,n.kt)("h2",{id:"tags"},"Tags"),(0,n.kt)("p",null,"Networking, Cloud Engineer, Small"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware. "),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Choose a region that is the closest to the majority of where the network packets are going. "),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,n.kt)("p",null,"Concerning the SCI equation. Reducing the distance will impact two parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total number of computing equipment traversed, we reduce the total embodied carbon."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": By reducing the distance a packet travels, we reduce the total electricity required. ")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"Suppose we choose a region that is further away from our users to deploy our applications because the region is more popular and may be first in line to receive new features or updates. A better solution would be to consider choosing a region closer to our users, so the data we transmit doesn't need to travel as far. "),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It may reduce cloud bills because shortening the path that a network packet travel will cost less. "),(0,n.kt)("li",{parentName:"ul"},"If the closer region to your users is missing some features, there may be an overhead to finding a workaround in the meantime.")))}p.isMDXComponent=!0}}]);