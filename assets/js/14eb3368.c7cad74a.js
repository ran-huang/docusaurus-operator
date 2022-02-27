"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[9817],{4067:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),r=n(5450),i="breadcrumbsContainer_Xlws",l="breadcrumbsItemLink_e5ie",c=n(6010),s=n(9960),o=n(4996);function m(e){var t=e.children,n=e.href,r=(0,c.Z)("breadcrumbs__link",l);return n?a.createElement(s.Z,{className:r,href:n},t):a.createElement("span",{className:r},t)}function u(e){var t=e.children,n=e.active;return a.createElement("li",{className:(0,c.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t)}function d(){var e=(0,o.Z)("/");return a.createElement(u,null,a.createElement(m,{href:e},"\ud83c\udfe0"))}function v(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,c.Z)(r.kM.docs.docBreadcrumbs,i),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs"},t&&a.createElement(d,null),e.map((function(t,n){return a.createElement(u,{key:n,active:n===e.length-1},a.createElement(m,{href:t.href},t.label))})))):null}},5360:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(7294),r=n(9960),i=n(5450),l=n(6010),c="cardContainer_woeA",s="cardContainerLink_iOSj",o="cardTitle_pNjP",m="cardDescription_qC_k",u=n(3919),d=n(5999);function v(e){var t=e.href,n=e.children,i=(0,l.Z)("card margin-bottom--lg padding--lg",c,t&&s);return t?a.createElement(r.Z,{href:t,className:i},n):a.createElement("div",{className:i},n)}function h(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(v,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",o),title:r},n," ",r),a.createElement("div",{className:(0,l.Z)("text--truncate",m),title:i},i))}function b(e){var t=e.item,n=(0,i.Wl)(t);return a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function f(e){var t,n=e.item,r=(0,u.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(h,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function g(e){var t=e.item;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items;return a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6"},a.createElement(g,{item:e}))})))}},7305:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(7294),r=n(5450),i=n(5360),l=n(5214),c=n(1217),s=n(4474),o=n(7597),m=n(4067),u=n(9649),d=n(4996),v="generatedIndexPage_vzzw",h="title_qBh7";function b(e){var t=e.categoryGeneratedIndex,n=(0,r.jA)();return a.createElement(a.Fragment,null,a.createElement(c.Z,{title:t.title,description:t.description,keywords:t.keywords,image:(0,d.Z)(t.image)}),a.createElement("div",{className:v},a.createElement(s.Z,null),a.createElement(m.Z,null),a.createElement(o.Z,null),a.createElement("header",null,a.createElement(u.Z,{as:"h1",className:h},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(i.Z,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(l.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}},5214:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(7294),i=n(5999),l=n(9960);function c(e){var t=e.permalink,n=e.title,a=e.subLabel;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(c,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(c,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(5999),i=n(5450),l=n(6010);function c(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},4474:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),r=n(2263),i=n(9960),l=n(5999),c=n(5551),s=n(5450),o=n(6010);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function d(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,i=e.versionMetadata,l=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,v=(0,s.J)(m).savePreferredVersionName,h=(0,c.Jo)(m),b=h.latestDocSuggestion,f=h.latestVersionSuggestion,g=null!=b?b:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,o.Z)(n,s.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(u,{siteTitle:l,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(d,{versionLabel:f.label,to:g.path,onClick:function(){return v(f.name)}})))}function h(e){var t=e.className,n=(0,s.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},9649:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),i=n(7294),l=n(6010),c=n(5999),s=n(5450),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function v(e){var t,n=e.as,d=e.id,v=(0,r.Z)(e,u),h=(0,s.LU)().navbar.hideOnScroll;return d?i.createElement(n,(0,a.Z)({},v,{className:(0,l.Z)("anchor",(t={},t[m]=h,t[o]=!h,t)),id:d}),v.children,i.createElement("a",{className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,v)}function h(e){var t=e.as,n=(0,r.Z)(e,d);return"h1"===t?i.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):i.createElement(v,(0,a.Z)({as:t},n))}}}]);