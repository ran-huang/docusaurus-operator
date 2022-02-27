"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[5507],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],o={title:"Deploy TiCDC in Kubernetes",summary:"Learn how to deploy TiCDC in Kubernetes.",draft:!1},l="Deploy TiCDC in Kubernetes",p={unversionedId:"deploy-ticdc",id:"deploy-ticdc",title:"Deploy TiCDC in Kubernetes",description:"TiCDC is a tool for replicating the incremental data of TiDB. This document describes how to deploy TiCDC in Kubernetes using TiDB Operator.",source:"@site/docs/deploy-ticdc.md",sourceDirName:".",slug:"/deploy-ticdc",permalink:"/docusaurus-operator/deploy-ticdc",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy-ticdc.md",tags:[],version:"current",frontMatter:{title:"Deploy TiCDC in Kubernetes",summary:"Learn how to deploy TiCDC in Kubernetes.",draft:!1},sidebar:"mySidebar",previous:{title:"Deploy TiDB Enterprise Edition in Kubernetes",permalink:"/docusaurus-operator/deploy-tidb-enterprise-edition"},next:{title:"Deploy TiDB Binlog",permalink:"/docusaurus-operator/deploy-tidb-binlog"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Fresh TiCDC deployment",id:"fresh-ticdc-deployment",level:2},{value:"Add TiCDC to an existing TiDB cluster",id:"add-ticdc-to-an-existing-tidb-cluster",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-ticdc-in-kubernetes"},"Deploy TiCDC in Kubernetes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/ticdc-overview"},"TiCDC")," is a tool for replicating the incremental data of TiDB. This document describes how to deploy TiCDC in Kubernetes using TiDB Operator."),(0,i.kt)("p",null,"You can deploy TiCDC when deploying a new TiDB cluster, or add the TiCDC component to an existing TiDB cluster."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"TiDB Operator is ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-tidb-operator"},"deployed"),"."),(0,i.kt)("h2",{id:"fresh-ticdc-deployment"},"Fresh TiCDC deployment"),(0,i.kt)("p",null,"To deploy TiCDC when deploying the TiDB cluster, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-on-general-kubernetes"},"Deploy TiDB in General Kubernetes"),"."),(0,i.kt)("h2",{id:"add-ticdc-to-an-existing-tidb-cluster"},"Add TiCDC to an existing TiDB cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"TidbCluster")," Custom Resource:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit tc ${cluster_name} -n ${namespace}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the TiCDC configuration as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ticdc:\n    baseImage: pingcap/ticdc\n    replicas: 3\n")),(0,i.kt)("p",{parentName:"li"},"To deploy Enterprise Edition of TiCDC, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"db.yaml")," file to set ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ticdc.baseImage")," to the enterprise image (",(0,i.kt)("inlineCode",{parentName:"p"},"pingcap/ticdc-enterprise"),")."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n ticdc:\n   baseImage: pingcap/ticdc-enterprise\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the deployment, enter a TiCDC Pod by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl exec"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it ${pod_name} -n ${namespace} -- sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://pingcap.com/docs/stable/ticdc/manage-ticdc/#use-cdc-cli-to-manage-cluster-status-and-data-replication-task"},"Manage the cluster and data replication tasks")," by using ",(0,i.kt)("inlineCode",{parentName:"p"},"cdc cli"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/cdc cli capture list --pd=http://${cluster_name}-pd:2379\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[\n  {\n    "id": "3ed24f6c-22cf-446f-9fe0-bf4a66d00f5b",\n    "is-owner": false,\n    "address": "${cluster_name}-ticdc-2.${cluster_name}-ticdc-peer.${namespace}.svc:8301"\n  },\n  {\n    "id": "60e98ed7-cd49-45f4-b5ae-d3b85ba3cd96",\n    "is-owner": false,\n    "address": "${cluster_name}-ticdc-0.${cluster_name}-ticdc-peer.${namespace}.svc:8301"\n  },\n  {\n    "id": "dc3592c0-dace-42a0-8afc-fb8506e8271c",\n    "is-owner": true,\n    "address": "${cluster_name}-ticdc-1.${cluster_name}-ticdc-peer.${namespace}.svc:8301"\n  }\n]\n')),(0,i.kt)("p",{parentName:"li"},"Starting from v4.0.3, TiCDC supports TLS. TiDB Operator supports enabling TLS for TiCDC since v1.1.3."),(0,i.kt)("p",{parentName:"li"},"If TLS is enabled when you create the TiDB cluster, add TLS certificate-related parameters when you use ",(0,i.kt)("inlineCode",{parentName:"p"},"cdc cli"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/cdc cli capture list --pd=https://${cluster_name}-pd:2379 --ca=/var/lib/cluster-client-tls/ca.crt --cert=/var/lib/cluster-client-tls/tls.crt --key=/var/lib/cluster-client-tls/tls.key\n")),(0,i.kt)("p",{parentName:"li"},"If the server does not have an external network, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-on-general-kubernetes#deploy-the-tidb-cluster"},"deploy TiDB cluster")," to download the required Docker image on the machine with an external network and upload it to the server."))))}m.isMDXComponent=!0}}]);