"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[255],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={},s="Choosing a region that is the closest to users when transferring data",i={unversionedId:"catalog/cloud/choosing-region-closest-to-users",id:"catalog/cloud/choosing-region-closest-to-users",title:"Choosing a region that is the closest to users when transferring data",description:"Version",source:"@site/docs/catalog/cloud/choosing-region-closest-to-users.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/choosing-region-closest-to-users",permalink:"/catalog/cloud/choosing-region-closest-to-users",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/choosing-region-closest-to-users.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cache static data",permalink:"/catalog/cloud/cache-static-data"},next:{title:"Delete unused storage resources",permalink:"/catalog/cloud/delete-unused-storage-resources"}},l={},u=[{value:"Version",id:"version",level:2},{value:"Submitted By",id:"submitted-by",level:2},{value:"Published Date",id:"published-date",level:2},{value:"Intent",id:"intent",level:2},{value:"Tags",id:"tags",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"choosing-a-region-that-is-the-closest-to-users-when-transferring-data"},"Choosing a region that is the closest to users when transferring data"),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"1.0"),(0,o.kt)("h2",{id:"submitted-by"},"Submitted By"),(0,o.kt)("p",null,"Sarah Hsu (@greenhsu123)"),(0,o.kt)("h2",{id:"published-date"},"Published Date"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h2",{id:"intent"},"Intent"),(0,o.kt)("p",null,"Choosing a region that is the closest to users when transferring data"),(0,o.kt)("h2",{id:"tags"},"Tags"),(0,o.kt)("p",null,"Cloud, Networking, Cloud Engineer, Small"),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"From an energy-efficiency perspective, it's better to shorten the distance a network packet travels so that less energy is required to transmit it. Similarly, from an embodied-carbon perspective, when a network packet traverses through less computing equipment, we are more efficient with hardware. "),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Choose a region that is the closest to the majority of where the network packets are going. "),(0,o.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,o.kt)("p",null,"Concerning the SCI equation. Reducing the distance will impact two parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total number of computing equipment traversed, we reduce the total embodied carbon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"E"),": By reducing the distance a packet travels, we reduce the total electricity required. ")),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"Suppose we choose a region that is further away from our users to deploy our applications because the region is more popular and may be first in line to receive new features or updates. A better solution would be to consider choosing a region closer to our users, so the data we transmit doesn't need to travel as far. "),(0,o.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PRO"),": It may reduce cloud bills because shortening the path that a network packet travel will cost less. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CON"),": If the closer region to your users is missing some features, there may be an overhead to finding a workaround in the meantime.")))}p.isMDXComponent=!0}}]);