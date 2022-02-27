"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[6548],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Deploy a TiDB Cluster on ARM64 Machines",summary:"Learn how to deploy a TiDB cluster on ARM64 machines."},s="Deploy a TiDB Cluster on ARM64 Machines",p={unversionedId:"deploy-cluster-on-arm64",id:"deploy-cluster-on-arm64",title:"Deploy a TiDB Cluster on ARM64 Machines",description:"This document describes how to deploy a TiDB cluster on ARM64 machines.",source:"@site/docs/deploy-cluster-on-arm64.md",sourceDirName:".",slug:"/deploy-cluster-on-arm64",permalink:"/docusaurus-operator/deploy-cluster-on-arm64",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy-cluster-on-arm64.md",tags:[],version:"current",frontMatter:{title:"Deploy a TiDB Cluster on ARM64 Machines",summary:"Learn how to deploy a TiDB cluster on ARM64 machines."},sidebar:"mySidebar",previous:{title:"Deploy TiDB on Alibaba Cloud Kubernetes",permalink:"/docusaurus-operator/deploy-on-alibaba-cloud"},next:{title:"Deploy the HTAP Storage Engine Tiflash for an Existing TiDB Cluster",permalink:"/docusaurus-operator/deploy-tiflash"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy TiDB operator",id:"deploy-tidb-operator",level:2},{value:"Deploy a TiDB cluster",id:"deploy-a-tidb-cluster",level:2},{value:"Initialize a TiDB cluster",id:"initialize-a-tidb-cluster",level:2},{value:"Deploy monitoring for a TiDB cluster",id:"deploy-monitoring-for-a-tidb-cluster",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-a-tidb-cluster-on-arm64-machines"},"Deploy a TiDB Cluster on ARM64 Machines"),(0,o.kt)("p",null,"This document describes how to deploy a TiDB cluster on ARM64 machines."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before starting the process, make sure that Kubernetes clusters are deployed on your ARM64 machines. If Kubernetes clusters are not deployed, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-tidb-operator#deploy-the-kubernetes-cluster"},"Deploy the Kubernetes cluster"),"."),(0,o.kt)("h2",{id:"deploy-tidb-operator"},"Deploy TiDB operator"),(0,o.kt)("p",null,"The process of deploying TiDB operator on ARM64 machines is the same as the process of ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-tidb-operator"},"Deploy TiDB Operator in Kubernetes"),". The only difference is the following configuration in the step ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-tidb-operator#customize-tidb-operator-deployment"},"Customize TiDB operator deployment"),": after getting the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb-operator")," chart, you need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"operatorImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tidbBackupManagerImage")," fields in that file to the ARM64 image versions. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\noperatorImage: pingcap/tidb-operator-arm64:v1.2.7\n# ...\ntidbBackupManagerImage: pingcap/tidb-backup-manager-arm64:v1.2.7\n# ...\n")),(0,o.kt)("h2",{id:"deploy-a-tidb-cluster"},"Deploy a TiDB cluster"),(0,o.kt)("p",null,"The process of deploying a TiDB cluster on ARM64 machines is the same as the process of ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-on-general-kubernetes"},"Deploy TiDB in General Kubernetes"),". The only difference is that, in the TidbCluster definition file, you need to set the images of the related components to the ARM64 versions. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: pingcap.com/v1alpha1\nkind: TidbCluster\nmetadata:\n  name: ${cluster_name}\n  namespace: ${cluster_namespace}\nspec:\n  version: "v5.3.0"\n  # ...\n  helper:\n    image: busybox:1.33.0\n  # ...\n  pd:\n    baseImage: pingcap/pd-arm64\n    # ...\n  tidb:\n    baseImage: pingcap/tidb-arm64\n    # ...\n  tikv:\n    baseImage: pingcap/tikv-arm64\n    # ...\n  pump:\n    baseImage: pingcap/tidb-binlog-arm64\n    # ...\n  ticdc:\n    baseImage: pingcap/ticdc-arm64\n    # ...\n  tiflash:\n    baseImage: pingcap/tiflash-arm64\n    # ...\n')),(0,o.kt)("h2",{id:"initialize-a-tidb-cluster"},"Initialize a TiDB cluster"),(0,o.kt)("p",null,"The process of initializing a TiDB cluster on ARM64 machines is the same as the process of ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/initialize-a-cluster"},"Initialize a TiDB Cluster in Kubernetes"),". The only difference is that you need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.image")," field in the TidbInitializer definition file to the ARM64 image version. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbInitializer\nmetadata:\n  name: ${initializer_name}\n  namespace: ${cluster_namespace}\nspec:\n  image: kanshiori/mysqlclient-arm64\n  # ...\n")),(0,o.kt)("h2",{id:"deploy-monitoring-for-a-tidb-cluster"},"Deploy monitoring for a TiDB cluster"),(0,o.kt)("p",null,"The process of deploying monitoring for a TiDB cluster on ARM64 machines is the same as the process of ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/monitor-a-tidb-cluster"},"Deploy Monitoring and Alerts for a TiDB Cluster"),". The only difference is that you need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.initializer.baseImage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.reloader.baseImage")," fields in the TidbMonitor definition file to the ARM64 image versions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\n  name: ${monitor_name}\nspec:\n  # ...\n  initializer:\n    baseImage: pingcap/tidb-monitor-initializer-arm64\n    version: v5.3.0\n  reloader:\n    baseImage: pingcap/tidb-monitor-reloader-arm64\n    version: v1.0.1\n  # ...\n")))}m.isMDXComponent=!0}}]);