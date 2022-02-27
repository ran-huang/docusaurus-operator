"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[7266],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(o),h=n,d=p["".concat(u,".").concat(h)]||p[h]||m[h]||s;return o?r.createElement(d,i(i({ref:t},c),{},{components:o})):r.createElement(d,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8620:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return c},toc:function(){return m},default:function(){return h}});var r=o(7462),n=o(3366),s=(o(7294),o(3905)),i=["components"],a={title:"Monitoring and Alerts on Kubernetes",summary:"Learn the monitoring and alerts on Kubernetes."},u="Monitoring and Alerts on Kubernetes",l={unversionedId:"monitor-kubernetes",id:"monitor-kubernetes",title:"Monitoring and Alerts on Kubernetes",description:"This document describes how to monitor a Kubernetes cluster and configure alerts for the cluster.",source:"@site/docs/monitor-kubernetes.md",sourceDirName:".",slug:"/monitor-kubernetes",permalink:"/monitor-kubernetes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/monitor-kubernetes.md",tags:[],version:"current",frontMatter:{title:"Monitoring and Alerts on Kubernetes",summary:"Learn the monitoring and alerts on Kubernetes."},sidebar:"refSidebar",previous:{title:"TiDB Log Collection in Kubernetes",permalink:"/logs-collection"}},c={},m=[{value:"Monitor the Kubernetes cluster",id:"monitor-the-kubernetes-cluster",level:2},{value:"Monitor the host",id:"monitor-the-host",level:3},{value:"Monitor Kubernetes components",id:"monitor-kubernetes-components",level:3},{value:"Alerts in Kubernetes",id:"alerts-in-kubernetes",level:3}],p={toc:m};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"monitoring-and-alerts-on-kubernetes"},"Monitoring and Alerts on Kubernetes"),(0,s.kt)("p",null,"This document describes how to monitor a Kubernetes cluster and configure alerts for the cluster."),(0,s.kt)("h2",{id:"monitor-the-kubernetes-cluster"},"Monitor the Kubernetes cluster"),(0,s.kt)("p",null,"The TiDB monitoring system deployed with the cluster only focuses on the operation of the TiDB components themselves, and does not include the monitoring of container resources, hosts, Kubernetes components, or TiDB Operator. To monitor these components or resources, you need to deploy a monitoring system across the entire Kubernetes cluster."),(0,s.kt)("h3",{id:"monitor-the-host"},"Monitor the host"),(0,s.kt)("p",null,"Monitoring the host and its resources works in the same way as monitoring physical resources of a traditional server."),(0,s.kt)("p",null,"If you already have a monitoring system for your physical server in your existing infrastructure, you only need to add the host that holds Kubernetes to the existing monitoring system by conventional means; if there is no monitoring system available, or if you want to deploy a separate monitoring system to monitor the host that holds Kubernetes, then you can use any monitoring system that you are familiar with."),(0,s.kt)("p",null,"The newly deployed monitoring system can run on a separate server, directly on the host that holds Kubernetes, or in a Kubernetes cluster. Different deployment methods might have differences in the deployment configuration and resource utilization, but there are no major differences in usage."),(0,s.kt)("p",null,"Some common open source monitoring systems that can be used to monitor server resources are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://collectd.org/"},"CollectD")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.nagios.org/"},"Nagios")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," & ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/prometheus/node_exporter"},"node_exporter")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.zabbix.com/"},"Zabbix"))),(0,s.kt)("p",null,"Some cloud service providers or specialized performance monitoring service providers also have their own free or chargeable monitoring solutions that you can choose from."),(0,s.kt)("p",null,"It is recommended to deploy a host monitoring system in the Kubernetes cluster via ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/coreos/prometheus-operator"},"Prometheus Operator")," based on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"Node Exporter")," and Prometheus. This solution can also be compatible with and used for monitoring the Kubernetes' own components."),(0,s.kt)("h3",{id:"monitor-kubernetes-components"},"Monitor Kubernetes components"),(0,s.kt)("p",null,"For monitoring Kubernetes components, you can refer to the solutions provided in the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/"},"Kubernetes official documentation")," or use other Kubernetes-compatible monitoring systems."),(0,s.kt)("p",null,"Some cloud service providers may provide their own solutions for monitoring Kubernetes components. Some specialized performance monitoring service providers have their own Kubernetes integration solutions that you can choose from."),(0,s.kt)("p",null,"TiDB Operator is actually a container running in Kubernetes. For this reason, you can monitor TiDB Operator by choosing any monitoring system that can monitor the status and resources of a Kubernetes container without deploying additional monitoring components."),(0,s.kt)("p",null,"It is recommended to deploy a host monitoring system via ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/coreos/prometheus-operator"},"Prometheus Operator")," based on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"Node Exporter")," and Prometheus. This solution can also be compatible with and used for monitoring host resources."),(0,s.kt)("h3",{id:"alerts-in-kubernetes"},"Alerts in Kubernetes"),(0,s.kt)("p",null,"If you deploy a monitoring system for Kubernetes hosts and services using Prometheus Operator, some alert rules are configured by default, and an AlertManager service is deployed. For details, see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/coreos/kube-prometheus"},"kube-prometheus"),"."),(0,s.kt)("p",null,"If you monitor Kubernetes hosts and services by using other tools or services, you can consult the corresponding information provided by the tool or service provider."))}h.isMDXComponent=!0}}]);