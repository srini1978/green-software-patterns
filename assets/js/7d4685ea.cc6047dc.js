"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[797],{4137:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:5},o="Guide",s={unversionedId:"guide/index",id:"guide/index",title:"Guide",description:"What is a green software pattern?",source:"@site/docs/guide/index.md",sourceDirName:"guide",slug:"/guide/",permalink:"/guide/",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/guide/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Web",permalink:"/catalog/web/"},next:{title:"Initial Review Guide",permalink:"/guide/initial-reviewer-guide"}},l={},p=[{value:"What is a green software pattern?",id:"what-is-a-green-software-pattern",level:2},{value:"How to <strong>propose</strong> a new pattern or a change to a pattern?",id:"how-to-propose-a-new-pattern-or-a-change-to-a-pattern",level:2},{value:"How to <strong>submit</strong> a new pattern or a change to a pattern?",id:"how-to-submit-a-new-pattern-or-a-change-to-a-pattern",level:2},{value:"What are the stages if a Green Software Pattern?",id:"what-are-the-stages-if-a-green-software-pattern",level:2},{value:"Discussion",id:"discussion",level:3},{value:"Draft",id:"draft",level:3},{value:"Initial Review",id:"initial-review",level:3},{value:"SME Review",id:"sme-review",level:3},{value:"Team Consensus",id:"team-consensus",level:3},{value:"Consistency Review",id:"consistency-review",level:3},{value:"What are the timelines for each stage?",id:"what-are-the-timelines-for-each-stage",level:2},{value:"Roles and Responsibilities",id:"roles-and-responsibilities",level:2},{value:"What are the expectations for an Internal Reviewer?",id:"what-are-the-expectations-for-an-internal-reviewer",level:3},{value:"What are the expectations for a Subject Matter Experts review?",id:"what-are-the-expectations-for-a-subject-matter-experts-review",level:3},{value:"What are the expectations on the Team to reach consensus?",id:"what-are-the-expectations-on-the-team-to-reach-consensus",level:3},{value:"What are the expectations on the broader GSF members in a consistency review?",id:"what-are-the-expectations-on-the-broader-gsf-members-in-a-consistency-review",level:3},{value:"How granular should my pattern be?",id:"how-granular-should-my-pattern-be",level:2},{value:"Least number of solutions per pattern",id:"least-number-of-solutions-per-pattern",level:3},{value:"Touching on two or more SCI components is a sign it can be decomposed further",id:"touching-on-two-or-more-sci-components-is-a-sign-it-can-be-decomposed-further",level:3},{value:"Smallest SCI Impact",id:"smallest-sci-impact",level:3},{value:"Available Guides",id:"available-guides",level:2}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide"},"Guide"),(0,r.kt)("h2",{id:"what-is-a-green-software-pattern"},"What is a green software pattern?"),(0,r.kt)("p",null,"A green software pattern if applied correctly will reduce the emissions of your software. Every pattern in the database contains these sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Title"),": Title of the pattern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version"),": Designation of iteration on the pattern. This will initially be assigned by the patterns working group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Submitted By"),": The name of the person(s) submitting the pattern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Published Date"),": The date this version of the pattern is published. This will be provided by the patterns working group upon approval"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tag Category"),": Select the most appropriate category from: Artificial Intelligence, Cloud, or Web which might apply to this pattern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tags"),": A ",(0,r.kt)("a",{parentName:"li",href:"/tags"},"pre-defined list of additional tags")," which might apply to the pattern (e.g. Machine Learning, Gaming, Mobile)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": A full description of what problem this pattern is solving"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Solution"),": How will this patter solve the problem"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SCI Impact"),": How will this pattern affect an SCI score of an application and why"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assumptions"),": What are the assumptions being made"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Considerations"),": Discussion section anything that should be taken into consideration when implementing this pattern ")),(0,r.kt)("h2",{id:"how-to-propose-a-new-pattern-or-a-change-to-a-pattern"},"How to ",(0,r.kt)("strong",{parentName:"h2"},"propose")," a new pattern or a change to a pattern?"),(0,r.kt)("p",null,"Whether you are proposing a new pattern or a change to an existing pattern. The first step is to discuss the change with others."),(0,r.kt)("p",null,"Open a GitHub issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/green-software-patterns/issues"},"https://github.com/Green-Software-Foundation/green-software-patterns/issues")," to discuss your changes."),(0,r.kt)("p",null,"Use the appropriate GitHub issue template for the change you would like to make."),(0,r.kt)("h2",{id:"how-to-submit-a-new-pattern-or-a-change-to-a-pattern"},"How to ",(0,r.kt)("strong",{parentName:"h2"},"submit")," a new pattern or a change to a pattern?"),(0,r.kt)("p",null,"You will need experience with GitHub and Pull Requests in order to submit a change."),(0,r.kt)("p",null,"All changes follow a series of approval stages that starts with a PULL REQUEST made to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch."),(0,r.kt)("p",null,"Fork the repository\nCheckout the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch make the changes that you see fit. You can edit an existing pattern or creating a new markdown file for a new pattern. For any new patterns, please follow the Pattern Template provided in root of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/green-software-patterns"},"GitHub repository"),(0,r.kt)("br",{parentName:"p"}),"\n","Create a PULL REQUEST to merge your changes in with the official repository, remember it should be against the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch."),(0,r.kt)("p",null,"This starts an approval process."),(0,r.kt)("h2",{id:"what-are-the-stages-if-a-green-software-pattern"},"What are the stages if a Green Software Pattern?"),(0,r.kt)("h3",{id:"discussion"},"Discussion"),(0,r.kt)("p",null,"Anyone (member or non-members) can discuss patterns via the GitHub Issues tab of the repository. There will be an issue template to suggest new patterns or suggest changes to existing patterns. Once they are ready then can go ahead and create a PR to add a pattern to the database."),(0,r.kt)("h3",{id:"draft"},"Draft"),(0,r.kt)("p",null,"Anyone (member or non-members) can create a PR matching the template for Green Software Patterns to be merged into the dev branch. This starts an internal process of review."),(0,r.kt)("h3",{id:"initial-review"},"Initial Review"),(0,r.kt)("p",null,"An initial review by one member of the patterns project. The goal of this stage is just to make sure the pattern meets core requirements for what a pattern should contain, is it the right format, syntax etc\u2026?  "),(0,r.kt)("p",null,"The initial reviewer will also decide what subject matter experts are required to review this pattern.  "),(0,r.kt)("p",null,"This needs an explicit approval from the initial reviewer before the pattern can move to the next stage.  "),(0,r.kt)("h3",{id:"sme-review"},"SME Review"),(0,r.kt)("p",null,"One or more subject matter experts in the GSF are asked to review the pattern and give their feedback. E.g. If the pattern is in the machine-learning catalog we ask a machine learning expert to review."),(0,r.kt)("p",null,"This needs an explicit approval from the SME reviewer before the pattern can move to the next stage."),(0,r.kt)("h3",{id:"team-consensus"},"Team Consensus"),(0,r.kt)("p",null,"Once the pattern has been approved by the SME it starts the team review phase. The principles and patterns team has 2 weeks to comment/object to the pattern. It needs consensus before the PR can be approved and merged into dev."),(0,r.kt)("p",null,"At the end of this stage the pattern is merged into ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," but is ",(0,r.kt)("strong",{parentName:"p"},"not published on our official catalog"),"."),(0,r.kt)("h3",{id:"consistency-review"},"Consistency Review"),(0,r.kt)("p",null,"Every quarter the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," branch is merged to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch and this triggers a consistency review where anyone in the Foundation has 2 weeks to comment or object. We need GSF wide consensus for the patterns to be published."),(0,r.kt)("p",null,"This is done in batches every quarter to reduce the noise to the rest of the Foundation."),(0,r.kt)("h2",{id:"what-are-the-timelines-for-each-stage"},"What are the timelines for each stage?"),(0,r.kt)("p",null,"The working group will regularly review submitted patterns along the following timeline:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial Review: 1 week"),(0,r.kt)("li",{parentName:"ul"},"SME Review: 2 weeks (plus additional iteration time based on feedback)"),(0,r.kt)("li",{parentName:"ul"},"Team Consensus: 2 weeks")),(0,r.kt)("h2",{id:"roles-and-responsibilities"},"Roles and Responsibilities"),(0,r.kt)("h3",{id:"what-are-the-expectations-for-an-internal-reviewer"},"What are the expectations for an Internal Reviewer?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Determine the if the submitted pattern aligns to green software and is clearly written"),(0,r.kt)("li",{parentName:"ul"},"Ensure the submitted pattern provides enough detail for the Subject Matter Expert to effectively evaluate"),(0,r.kt)("li",{parentName:"ul"},"Ensure the submitted pattern follows the defined pattern template"),(0,r.kt)("li",{parentName:"ul"},"Provide clear feedback to the submitter if any of these areas are missing or not up to the defined standard "),(0,r.kt)("li",{parentName:"ul"},"Assign the pattern to a relevant Subject Matter Expert for further review")),(0,r.kt)("h3",{id:"what-are-the-expectations-for-a-subject-matter-experts-review"},"What are the expectations for a Subject Matter Experts review?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Determine if this pattern already exists in the catalog"),(0,r.kt)("li",{parentName:"ul"},"Ensure there is appropriate level of detail for this pattern to be implemented"),(0,r.kt)("li",{parentName:"ul"},"Determine the efficacy and accuracy of the submitted pattern"),(0,r.kt)("li",{parentName:"ul"},"Explore splitting or combining patterns as necessary to meet the defined level of depth for a pattern "),(0,r.kt)("li",{parentName:"ul"},"Provide clear feedback to the submitter if any of these areas are missing or not up to the defined standard ")),(0,r.kt)("h3",{id:"what-are-the-expectations-on-the-team-to-reach-consensus"},"What are the expectations on the Team to reach consensus?"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",{id:"what-are-the-expectations-on-the-broader-gsf-members-in-a-consistency-review"},"What are the expectations on the broader GSF members in a consistency review?"),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h2",{id:"how-granular-should-my-pattern-be"},"How granular should my pattern be?"),(0,r.kt)("p",null,"We prefer smaller atomic patterns larger patterns. A helpful way to approach a pattern is defining a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," to take on a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Write efficient code")," would be rejected as too generic since there is no specific action to take on a specific resource. Whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache Static Data")," provides a specific action of Caching to a specific resource of Static Data.  "),(0,r.kt)("h3",{id:"least-number-of-solutions-per-pattern"},"Least number of solutions per pattern"),(0,r.kt)("p",null,"If your pattern has multiple solutions in the solutions section, that's a good hint that the pattern can be decomposed into smaller patterns, try one per solution."),(0,r.kt)("h3",{id:"touching-on-two-or-more-sci-components-is-a-sign-it-can-be-decomposed-further"},"Touching on two or more SCI components is a sign it can be decomposed further"),(0,r.kt)("p",null,"If your pattern touches on multiple components of the SCI equation simultaneously then thats a hint that your pattern can be decomposed further into multiple smaller patterns."),(0,r.kt)("h3",{id:"smallest-sci-impact"},"Smallest SCI Impact"),(0,r.kt)("p",null,"If decomposing your pattern allows the sub patterns to impact smaller areas of the SCI equation then that's a good signal to break down your pattern into smaller patterns."),(0,r.kt)("p",null,"For instance if your pattern affects, ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," but it could be broken down further into two smaller patterns one that impacts only ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," and the other that impacts ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"I"),". Then break down the pattern until breaking it down further doesn't create any more changes to the SCI impact section."),(0,r.kt)("h2",{id:"available-guides"},"Available Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/guide/initial-reviewer-guide"},"Initial Reviewer Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"sme-reviewer-guide.md"},"Subject Matter Expert Reviewer Guide"))))}u.isMDXComponent=!0}}]);