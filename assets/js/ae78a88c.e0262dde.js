"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[1350],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2023:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=o(7462),r=o(3366),l=(o(7294),o(3905)),a=["components"],i={title:"TiDB Log Collection in Kubernetes",summary:"Learn the methods of collecting logs of TiDB and its related components."},s="TiDB Log Collection in Kubernetes",c={unversionedId:"logs-collection",id:"logs-collection",title:"TiDB Log Collection in Kubernetes",description:"The system and application logs can be useful for troubleshooting issues and automating operations. This article briefly introduces the methods of collecting logs of TiDB and its related components.",source:"@site/docs/logs-collection.md",sourceDirName:".",slug:"/logs-collection",permalink:"/docusaurus-operator/logs-collection",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/logs-collection.md",tags:[],version:"current",frontMatter:{title:"TiDB Log Collection in Kubernetes",summary:"Learn the methods of collecting logs of TiDB and its related components."},sidebar:"refSidebar",previous:{title:"Configuration of tidb-backup Chart",permalink:"/docusaurus-operator/configure-backup"},next:{title:"Monitoring and Alerts on Kubernetes",permalink:"/docusaurus-operator/monitor-kubernetes"}},u={},p=[{value:"Collect logs of TiDB and Kubernetes components",id:"collect-logs-of-tidb-and-kubernetes-components",level:2},{value:"Collect system logs",id:"collect-system-logs",level:2}],d={toc:p};function f(e){var t=e.components,o=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tidb-log-collection-in-kubernetes"},"TiDB Log Collection in Kubernetes"),(0,l.kt)("p",null,"The system and application logs can be useful for troubleshooting issues and automating operations. This article briefly introduces the methods of collecting logs of TiDB and its related components."),(0,l.kt)("h2",{id:"collect-logs-of-tidb-and-kubernetes-components"},"Collect logs of TiDB and Kubernetes components"),(0,l.kt)("p",null,"The TiDB components deployed by TiDB Operator output the logs in the ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," of the container by default. For Kubernetes, these logs are stored in the host's ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/containers")," directory, and the file name contains information such as the Pod name and the container name. For this reason, you can collect the logs of the application in the container directly on the host."),(0,l.kt)("p",null,"If you already have a system for collecting logs in your existing infrastructure, you only need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/containers/*.log")," file on the host in which Kubernetes is located in the collection scope by common methods; if there is no available log collection system, or you want to deploy a separate system for collecting relevant logs, you are free to use any system or solution that you are familiar with."),(0,l.kt)("p",null,"Common open source tools that can be used to collect Kubernetes logs are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fluentd.org/"},"Fluentd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fluentbit.io/"},"Fluent-bit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/products/beats/filebeat"},"Filebeat")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.elastic.co/products/logstash"},"Logstash"))),(0,l.kt)("p",null,"Collected Logs can usually be aggregated and stored on a specific server or in a dedicated storage and analysis system such as ElasticSearch."),(0,l.kt)("p",null,"Some cloud service providers or specialized performance monitoring service providers also have their own free or charged log collection options that you can choose from."),(0,l.kt)("h2",{id:"collect-system-logs"},"Collect system logs"),(0,l.kt)("p",null,"System logs can be collected on Kubernetes hosts in the usual way. If you already have a system for collecting logs in your existing infrastructure, you only need to add the relevant servers and log files in the collection scope by conventional means; if there is no available log collection system, or you want to deploy a separate set of systems for collecting relevant logs, you are free to use any system or solution that you are familiar with."),(0,l.kt)("p",null,"All of the common log collection tools mentioned above support collecting system logs. Some cloud service providers or specialized performance monitoring service providers also have their own free or charged log collection options that you can choose from."))}f.isMDXComponent=!0}}]);