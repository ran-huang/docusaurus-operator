"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[4500],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return h}});var r,o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={title:"Deploy a Heterogeneous Cluster for an Existing TiDB Cluster",summary:"Learn how to deploy a heterogeneous cluster for an existing TiDB cluster."},u="Deploy a Heterogeneous Cluster for an Existing TiDB Cluster",c={unversionedId:"deploy-heterogeneous-tidb-cluster",id:"deploy-heterogeneous-tidb-cluster",title:"Deploy a Heterogeneous Cluster for an Existing TiDB Cluster",description:"This document describes how to deploy a heterogeneous cluster for an existing TiDB cluster. A heterogeneous cluster consists of nodes with different configurations from the existing TiDB cluster.",source:"@site/docs/deploy-heterogeneous-tidb-cluster.md",sourceDirName:".",slug:"/deploy-heterogeneous-tidb-cluster",permalink:"/docusaurus-operator/deploy-heterogeneous-tidb-cluster",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy-heterogeneous-tidb-cluster.md",tags:[],version:"current",frontMatter:{title:"Deploy a Heterogeneous Cluster for an Existing TiDB Cluster",summary:"Learn how to deploy a heterogeneous cluster for an existing TiDB cluster."},sidebar:"mySidebar",previous:{title:"Deploy a TiDB Cluster across Multiple Kubernetes Clusters",permalink:"/docusaurus-operator/deploy-tidb-cluster-across-multiple-kubernetes"},next:{title:"Deploy TiDB Enterprise Edition in Kubernetes",permalink:"/docusaurus-operator/deploy-tidb-enterprise-edition"}},p={},m=[{value:"User scenarios",id:"user-scenarios",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy a heterogeneous cluster",id:"deploy-a-heterogeneous-cluster",level:2},{value:"Deploy a heterogeneous cluster",id:"deploy-a-heterogeneous-cluster-1",level:3},{value:"Deploy a TLS-enabled heterogeneous cluster",id:"deploy-a-tls-enabled-heterogeneous-cluster",level:3},{value:"Deploy a cluster monitoring component",id:"deploy-a-cluster-monitoring-component",level:3}],d=(r="SimpleTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),g={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-a-heterogeneous-cluster-for-an-existing-tidb-cluster"},"Deploy a Heterogeneous Cluster for an Existing TiDB Cluster"),(0,i.kt)("p",null,"This document describes how to deploy a heterogeneous cluster for an existing TiDB cluster. A heterogeneous cluster consists of nodes with different configurations from the existing TiDB cluster."),(0,i.kt)("h2",{id:"user-scenarios"},"User scenarios"),(0,i.kt)("p",null,"This document is applicable to scenarios in which you need to create differentiated instances for an existing TiDB cluster, such as the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create TiKV clusters with different configurations and different labels for hotspot scheduling."),(0,i.kt)("li",{parentName:"ul"},"Create TiDB clusters with different configurations for OLTP and OLAP queries.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You already have a TiDB cluster. If not, ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-on-general-kubernetes"},"deploy a TiDB cluster in Kubernetes")," first."),(0,i.kt)("h2",{id:"deploy-a-heterogeneous-cluster"},"Deploy a heterogeneous cluster"),(0,i.kt)("p",null,"Depending on whether you need to enable Transport Layer Security (TLS) for a heterogeneous cluster, choose one of the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deploy a heterogeneous cluster"),(0,i.kt)("li",{parentName:"ul"},"Deploy a TLS-enabled heterogeneous cluster")),(0,i.kt)(d,{mdxType:"SimpleTab"},(0,i.kt)("div",{label:"non-TLS"},(0,i.kt)("h3",{id:"deploy-a-heterogeneous-cluster-1"},"Deploy a heterogeneous cluster"),(0,i.kt)("p",null,"To deploy a heterogeneous cluster, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a cluster configuration file for the heterogeneous cluster."),(0,i.kt)("p",{parentName:"li"},"For example, save the following configuration as the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," file. Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${heterogeneous_cluster_name}")," with the desired name of your heterogeneous cluster, and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${origin_cluster_name}")," with the name of the existing cluster."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("p",{parentName:"blockquote"},"Comparing with the the configuration file of a normal TiDB cluster, the only difference in the configuration file of a heterogeneous TiDB cluster is that you need to additionally specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.cluster.name")," field as the name of an existing TiDB cluster. According to this field, TiDB Operator adds the heterogeneous cluster to the existing TiDB cluster.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: pingcap.com/v1alpha1\nkind: TidbCluster\nmetadata:\n  name: ${heterogeneous_cluster_name}\nspec:\n  configUpdateStrategy: RollingUpdate\n  version: v5.3.0\n  timezone: UTC\n  pvReclaimPolicy: Delete\n  discovery: {}\n  cluster:\n    name: ${origin_cluster_name}\n  tikv:\n    baseImage: pingcap/tikv\n    maxFailoverCount: 0\n    replicas: 1\n    # If storageClassName is not set, the default Storage Class of the Kubernetes cluster is used.\n    # storageClassName: local-storage\n    requests:\n      storage: "100Gi"\n    config: {}\n  tidb:\n    baseImage: pingcap/tidb\n    maxFailoverCount: 0\n    replicas: 1\n    service:\n      type: ClusterIP\n    config: {}\n  tiflash:\n    baseImage: pingcap/tiflash\n    maxFailoverCount: 0\n    replicas: 1\n    storageClaims:\n      - resources:\n          requests:\n            storage: 100Gi\n')),(0,i.kt)("p",{parentName:"li"},"For more configurations and field meanings of TiDB cluster, see the ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/configure-a-tidb-cluster"},"TiDB cluster configuration document"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the configuration file of your heterogeneous cluster, modify the configurations of each node according to your need."),(0,i.kt)("p",{parentName:"li"},"For example, you can modify the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," for each component in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," file, or remove components that are not needed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the heterogeneous cluster by running the following command. You need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," with the configuration filename of your heterogeneous cluster."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f cluster.yaml -n ${namespace}\n")),(0,i.kt)("p",{parentName:"li"},"If the output shows ",(0,i.kt)("inlineCode",{parentName:"p"},"tidbcluster.pingcap.com/${heterogeneous_cluster_name} created"),", the execution is successful. Then, TiDB Operator will create the TiDB cluster with the configurations according to the cluster configuration file.")))),(0,i.kt)("div",{label:"TLS"},(0,i.kt)("h3",{id:"deploy-a-tls-enabled-heterogeneous-cluster"},"Deploy a TLS-enabled heterogeneous cluster"),(0,i.kt)("p",null,"To enable TLS for a heterogeneous cluster, you need to explicitly declare the TLS configuration, issue the certificates using the same certification authority (CA) as the target cluster and create new secrets with the certificates."),(0,i.kt)("p",null,"If you want to issue the certificate using ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager"),", choose the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuer")," as that of the target cluster to create your ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificate"),"."),(0,i.kt)("p",null,"For detailed procedures to create certificates for the heterogeneous cluster, refer to the following two documents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus-operator/enable-tls-between-components"},"Enable TLS between TiDB Components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docusaurus-operator/enable-tls-for-mysql-client"},"Enable TLS for the MySQL Client"))),(0,i.kt)("p",null,"After creating certificates, take the following steps to deploy a TLS-enabled heterogeneous cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a cluster configuration file for the heterogeneous cluster."),(0,i.kt)("p",{parentName:"li"},"For example, save the following configuration as the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," file. Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${heterogeneous_cluster_name}")," with the desired name of your heterogeneous cluster, and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${origin_cluster_name}")," with the name of the existing cluster."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("p",{parentName:"blockquote"},"Comparing with the the configuration file of a normal TiDB cluster, the only difference in the configuration file of a heterogeneous TiDB cluster is that you need to additionally specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.cluster.name")," field as the name of an existing TiDB cluster. According to this field, TiDB Operator adds the heterogeneous cluster to the existing TiDB cluster.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: pingcap.com/v1alpha1\nkind: TidbCluster\nmetadata:\n  name: ${heterogeneous_cluster_name}\nspec:\n  tlsCluster:\n    enabled: true\n  configUpdateStrategy: RollingUpdate\n  version: v5.3.0\n  timezone: UTC\n  pvReclaimPolicy: Delete\n  discovery: {}\n  cluster:\n    name: ${origin_cluster_name}\n  tikv:\n    baseImage: pingcap/tikv\n    maxFailoverCount: 0\n    replicas: 1\n    # If storageClassName is not set, the default Storage Class of the Kubernetes cluster is used.\n    # storageClassName: local-storage\n    requests:\n      storage: "100Gi"\n    config: {}\n  tidb:\n    baseImage: pingcap/tidb\n    maxFailoverCount: 0\n    replicas: 1\n    service:\n      type: ClusterIP\n    config: {}\n    tlsClient:\n      enabled: true\n  tiflash:\n    baseImage: pingcap/tiflash\n    maxFailoverCount: 0\n    replicas: 1\n    storageClaims:\n      - resources:\n          requests:\n            storage: 100Gi\n')),(0,i.kt)("p",{parentName:"li"},"In the configuration file, ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.tlsCluster.enabled"),"controls whether to enable TLS between the components and ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.tidb.tlsClient.enabled"),"controls whether to enable TLS for the MySQL client."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For more configurations of a TLS-enabled heterogeneous cluster, see the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb-operator/tree/master/examples/heterogeneous-tls"},"'heterogeneous-tls'")," example."),(0,i.kt)("li",{parentName:"ul"},"For more configurations and field meanings of a TiDB cluster, see the ",(0,i.kt)("a",{parentName:"li",href:"/docusaurus-operator/configure-a-tidb-cluster"},"TiDB cluster configuration document"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the configuration file of your heterogeneous cluster, modify the configurations of each node according to your need."),(0,i.kt)("p",{parentName:"li"},"For example, you can modify the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," for each component in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," file, or remove components that are not needed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the TLS-enabled heterogeneous cluster by running the following command. You need to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yaml")," with the configuration filename of the heterogeneous cluster."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f cluster.yaml -n ${namespace}\n")),(0,i.kt)("p",{parentName:"li"},"If the output shows ",(0,i.kt)("inlineCode",{parentName:"p"},"tidbcluster.pingcap.com/${heterogeneous_cluster_name} created"),", the execution is successful. Then, TiDB Operator will create the TiDB cluster with the configurations according to your cluster configuration file."))))),(0,i.kt)("h3",{id:"deploy-a-cluster-monitoring-component"},"Deploy a cluster monitoring component"),(0,i.kt)("p",null,"If you need to deploy a monitoring component for a heterogeneous cluster, take the following steps to add the heterogeneous cluster name to the TidbMonitor CR file of an existing TiDB cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the TidbMonitor Custom Resource (CR) of the existing TiDB cluster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl edit tm ${cluster_name} -n ${namespace}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${heterogeneous_cluster_name}")," with the desired name of your heterogeneous cluster, and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${origin_cluster_name}")," with the name of the existing cluster. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\nname: heterogeneous\nspec:\nclusters:\n    - name: ${origin_cluster_name}\n    - name: ${heterogeneous_cluster_name}\nprometheus:\n    baseImage: prom/prometheus\n    version: v2.11.1\ngrafana:\n    baseImage: grafana/grafana\n    version: 6.1.6\ninitializer:\n    baseImage: pingcap/tidb-monitor-initializer\n    version: v5.3.0\nreloader:\n    baseImage: pingcap/tidb-monitor-reloader\n    version: v1.0.1\nimagePullPolicy: IfNotPresent\n")))))}h.isMDXComponent=!0}}]);