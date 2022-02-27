"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[835],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Deploy Monitoring and Alerts for a TiDB Cluster",summary:"Learn how to monitor a TiDB cluster in Kubernetes."},l="Deploy Monitoring and Alerts for a TiDB Cluster",p={unversionedId:"monitor-a-tidb-cluster",id:"monitor-a-tidb-cluster",title:"Deploy Monitoring and Alerts for a TiDB Cluster",description:"This document describes how to monitor a TiDB cluster deployed using TiDB Operator and configure alerts for the cluster.",source:"@site/docs/monitor-a-tidb-cluster.md",sourceDirName:".",slug:"/monitor-a-tidb-cluster",permalink:"/monitor-a-tidb-cluster",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/monitor-a-tidb-cluster.md",tags:[],version:"current",frontMatter:{title:"Deploy Monitoring and Alerts for a TiDB Cluster",summary:"Learn how to monitor a TiDB cluster in Kubernetes."},sidebar:"mySidebar",previous:{title:"Migrate from Helm 2 to Helm 3",permalink:"/migrate-to-helm3"},next:{title:"Access TiDB Dashboard",permalink:"/access-dashboard"}},m={},c=[{value:"Monitor the TiDB cluster",id:"monitor-the-tidb-cluster",level:2},{value:"Persist monitoring data",id:"persist-monitoring-data",level:3},{value:"Customize the Prometheus configuration",id:"customize-the-prometheus-configuration",level:3},{value:"Use a customized configuration file",id:"use-a-customized-configuration-file",level:4},{value:"Add extra options to the command",id:"add-extra-options-to-the-command",level:4},{value:"Access the Grafana monitoring dashboard",id:"access-the-grafana-monitoring-dashboard",level:3},{value:"Access the Prometheus monitoring data",id:"access-the-prometheus-monitoring-data",level:3},{value:"Set kube-prometheus and AlertManager",id:"set-kube-prometheus-and-alertmanager",level:3},{value:"Enable Ingress",id:"enable-ingress",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Access TidbMonitor using Ingress",id:"access-tidbmonitor-using-ingress",level:3},{value:"Configure alert",id:"configure-alert",level:2},{value:"Monitor multiple clusters",id:"monitor-multiple-clusters",level:2},{value:"Configure the monitoring of multiple clusters using YAML files",id:"configure-the-monitoring-of-multiple-clusters-using-yaml-files",level:3},{value:"Monitor multiple clusters using Grafana",id:"monitor-multiple-clusters-using-grafana",level:3}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-monitoring-and-alerts-for-a-tidb-cluster"},"Deploy Monitoring and Alerts for a TiDB Cluster"),(0,o.kt)("p",null,"This document describes how to monitor a TiDB cluster deployed using TiDB Operator and configure alerts for the cluster."),(0,o.kt)("h2",{id:"monitor-the-tidb-cluster"},"Monitor the TiDB cluster"),(0,o.kt)("p",null,"You can monitor the TiDB cluster with Prometheus and Grafana. When you create a new TiDB cluster using TiDB Operator, you can deploy a separate monitoring system for the TiDB cluster. The monitoring system must run in the same namespace as the TiDB cluster, and includes two components: Prometheus and Grafana."),(0,o.kt)("p",null,"For configuration details on the monitoring system, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://pingcap.com/docs/stable/how-to/monitor/monitor-a-cluster"},"TiDB Cluster Monitoring"),"."),(0,o.kt)("p",null,"In TiDB Operator v1.1 or later versions, you can monitor a TiDB cluster on a Kubernetes cluster by using a simple Custom Resource (CR) file called ",(0,o.kt)("inlineCode",{parentName:"p"},"TidbMonitor"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec.clusters[].name")," should be set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"TidbCluster")," name of the corresponding TiDB cluster.")))),(0,o.kt)("h3",{id:"persist-monitoring-data"},"Persist monitoring data"),(0,o.kt)("p",null,"The monitoring data is not persisted by default. To persist the monitoring data, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.persistent")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"TidbMonitor"),". When you enable this option, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.storageClassName")," to an existing storage in the current cluster. This storage must support persisting data; otherwise, there is a risk of data loss."),(0,o.kt)("p",null,"A configuration example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\n  name: basic\nspec:\n  clusters:\n    - name: basic\n  persistent: true\n  storageClassName: ${storageClassName}\n  storage: 5G\n  prometheus:\n    baseImage: prom/prometheus\n    version: v2.18.1\n    service:\n      type: NodePort\n  grafana:\n    baseImage: grafana/grafana\n    version: 6.1.6\n    service:\n      type: NodePort\n  initializer:\n    baseImage: pingcap/tidb-monitor-initializer\n    version: v5.3.0\n  reloader:\n    baseImage: pingcap/tidb-monitor-reloader\n    version: v1.0.1\n  imagePullPolicy: IfNotPresent\n")),(0,o.kt)("p",null,"To verify the PVC status, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pvc -l app.kubernetes.io/instance=basic,app.kubernetes.io/component=monitor -n ${namespace}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME            STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nbasic-monitor   Bound    pvc-6db79253-cc9e-4730-bbba-ba987c29db6f   5G         RWO            standard       51s\n")),(0,o.kt)("h3",{id:"customize-the-prometheus-configuration"},"Customize the Prometheus configuration"),(0,o.kt)("p",null,"You can customize the Prometheus configuration by using a customized configuration file or by adding extra options to the command."),(0,o.kt)("h4",{id:"use-a-customized-configuration-file"},"Use a customized configuration file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ConfigMap for your customized configuration, and set the key name of ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"prometheus-config"),"."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.prometheus.config.configMapRef.name")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.prometheus.config.configMapRef.namespace")," to the name and namespace of the customized ConfigMap respectively.")),(0,o.kt)("p",null,"For the complete configuration, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/blob/master/examples/monitor-with-externalConfigMap/prometheus/README.md"},"tidb-operator example"),"."),(0,o.kt)("h4",{id:"add-extra-options-to-the-command"},"Add extra options to the command"),(0,o.kt)("p",null,"To add extra options to the command that starts Prometheus, configure ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.prometheus.config.commandOptions"),"."),(0,o.kt)("p",null,"For the complete configuration, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/blob/master/examples/monitor-with-externalConfigMap/prometheus/README.md"},"tidb-operator example"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following options are automatically configured by the TidbMonitor controller and cannot be specified again via ",(0,o.kt)("inlineCode",{parentName:"p"},"commandOptions"),"."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config.file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"log.level")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"web.enable-admin-api")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"web.enable-lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage.tsdb.path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage.tsdb.retention")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage.tsdb.max-block-duration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage.tsdb.min-block-duration"))))),(0,o.kt)("h3",{id:"access-the-grafana-monitoring-dashboard"},"Access the Grafana monitoring dashboard"),(0,o.kt)("p",null,"You can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," command to access the Grafana monitoring dashboard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} svc/${cluster_name}-grafana 3000:3000 &>/tmp/portforward-grafana.log &\n")),(0,o.kt)("p",null,"Then open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," in your browser and log on with the default username and password ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,o.kt)("p",null,"You can also set ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.grafana.service.type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", and then view the monitoring dashboard through ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"."),(0,o.kt)("p",null,"If there is no need to use Grafana, you can delete the part of ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.grafana")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"TidbMonitor")," during deployment. In this case, you need to use other existing or newly deployed data visualization tools to directly access the monitoring data."),(0,o.kt)("h3",{id:"access-the-prometheus-monitoring-data"},"Access the Prometheus monitoring data"),(0,o.kt)("p",null,"To access the monitoring data directly, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," command to access Prometheus:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} svc/${cluster_name}-prometheus 9090:9090 &>/tmp/portforward-prometheus.log &\n")),(0,o.kt)("p",null,"Then open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090"},"http://localhost:9090")," in your browser or access this address via a client tool."),(0,o.kt)("p",null,"You can also set ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.prometheus.service.type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),", and then view the monitoring data through ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),"."),(0,o.kt)("h3",{id:"set-kube-prometheus-and-alertmanager"},"Set kube-prometheus and AlertManager"),(0,o.kt)("p",null,"Nodes-Info and Pods-Info monitoring dashboards are built into TidbMonitor Grafana by default to view the corresponding monitoring metrics of Kubernetes."),(0,o.kt)("p",null,"To view these monitoring metrics in TidbMonitor Grafana, take the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy Kubernetes cluster monitoring manually."),(0,o.kt)("p",{parentName:"li"},"There are multiple ways to deploy Kubernetes cluster monitoring. To use kube-prometheus for deployment, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coreos/kube-prometheus"},"kube-prometheus documentation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"TidbMonitor.spec.kubePrometheusURL")," to obtain Kubernetes monitoring data."))),(0,o.kt)("p",null,"Similarly, you can configure TidbMonitor to push the monitoring alert to ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/alertmanager/"},"AlertManager"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\n  name: basic\nspec:\n  clusters:\n    - name: basic\n  kubePrometheusURL: http://prometheus-k8s.monitoring:9090\n  alertmanagerURL: alertmanager-main.monitoring:9093\n  prometheus:\n    baseImage: prom/prometheus\n    version: v2.18.1\n    service:\n      type: NodePort\n  grafana:\n    baseImage: grafana/grafana\n    version: 6.1.6\n    service:\n      type: NodePort\n  initializer:\n    baseImage: pingcap/tidb-monitor-initializer\n    version: v5.3.0\n  reloader:\n    baseImage: pingcap/tidb-monitor-reloader\n    version: v1.0.1\n  imagePullPolicy: IfNotPresent\n")),(0,o.kt)("h2",{id:"enable-ingress"},"Enable Ingress"),(0,o.kt)("p",null,"This section introduces how to enable Ingress for TidbMonitor. ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress")," is an API object that exposes HTTP and HTTPS routes from outside the cluster to services within the cluster."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before using Ingress, you need to install the Ingress controller. Simply creating the Ingress resource does not take effect."),(0,o.kt)("p",null,"You need to deploy the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"NGINX Ingress controller"),", or choose from various ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Ingress controllers"),"."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#prerequisites"},"Ingress Prerequisites"),"."),(0,o.kt)("h3",{id:"access-tidbmonitor-using-ingress"},"Access TidbMonitor using Ingress"),(0,o.kt)("p",null,"Currently, TidbMonitor provides a method to expose the Prometheus/Grafana service through Ingress. For details about Ingress, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress official documentation"),"."),(0,o.kt)("p",null,"The following example shows how to enable Prometheus and Grafana in TidbMonitor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\n  name: ingress-demo\nspec:\n  clusters:\n    - name: demo\n  persistent: false\n  prometheus:\n    baseImage: prom/prometheus\n    version: v2.18.1\n    ingress:\n      hosts:\n      - example.com\n      annotations:\n        foo: "bar"\n  grafana:\n    baseImage: grafana/grafana\n    version: 6.1.6\n    service:\n      type: ClusterIP\n    ingress:\n      hosts:\n        - example.com\n      annotations:\n        foo: "bar"\n  initializer:\n    baseImage: pingcap/tidb-monitor-initializer\n    version: v5.3.0\n  reloader:\n    baseImage: pingcap/tidb-monitor-reloader\n    version: v1.0.1\n  imagePullPolicy: IfNotPresent\n')),(0,o.kt)("p",null,"To modify the setting of Ingress Annotations, configure ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.prometheus.ingress.annotations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.grafana.ingress.annotations"),". If you use the default NGINX Ingress, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"NGINX Ingress Controller Annotation")," for details."),(0,o.kt)("p",null,"The TidbMonitor Ingress setting also supports TLS. The following example shows how to configure TLS for Ingress. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#tls"},"Ingress TLS")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\n  name: ingress-demo\nspec:\n  clusters:\n    - name: demo\n  persistent: false\n  prometheus:\n    baseImage: prom/prometheus\n    version: v2.18.1\n    ingress:\n      hosts:\n      - example.com\n      tls:\n      - hosts:\n        - example.com\n        secretName: testsecret-tls\n  grafana:\n    baseImage: grafana/grafana\n    version: 6.1.6\n    service:\n      type: ClusterIP\n  initializer:\n    baseImage: pingcap/tidb-monitor-initializer\n    version: v5.3.0\n  reloader:\n    baseImage: pingcap/tidb-monitor-reloader\n    version: v1.0.1\n  imagePullPolicy: IfNotPresent\n")),(0,o.kt)("p",null,"TLS Secret must include the ",(0,o.kt)("inlineCode",{parentName:"p"},"tls.crt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tls.key")," keys, which include the certificate and private key used for TLS. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: testsecret-tls\n  namespace: ${namespace}\ndata:\n  tls.crt: base64 encoded cert\n  tls.key: base64 encoded key\ntype: kubernetes.io/tls\n")),(0,o.kt)("p",null,"In a public cloud-deployed Kubernetes cluster, you can usually ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"configure Loadbalancer")," to access Ingress through a domain name. If you cannot configure the Loadbalancer service (for example, when you use NodePort as the service type of Ingress), you can access the service in a way equivalent to the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Host: example.com" ${node_ip}:${NodePort}\n')),(0,o.kt)("h2",{id:"configure-alert"},"Configure alert"),(0,o.kt)("p",null,"When Prometheus is deployed with a TiDB cluster, some default alert rules are automatically imported. You can view all alert rules and statuses in the current system by accessing the Alerts page of Prometheus through a browser."),(0,o.kt)("p",null,"The custom configuration of alert rules is supported. You can modify the alert rules by taking the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When deploying the monitoring system for the TiDB cluster, set ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.reloader.service.type")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"NodePort")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"LoadBalancer"),"."),(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("inlineCode",{parentName:"li"},"reloader")," service through ",(0,o.kt)("inlineCode",{parentName:"li"},"NodePort")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"LoadBalancer"),". Click the ",(0,o.kt)("inlineCode",{parentName:"li"},"Files")," button above to select the alert rule file to be modified, and make the custom configuration. Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save")," after the modification.")),(0,o.kt)("p",null,"The default Prometheus and alert configuration do not support sending alert messages. To send an alert message, you can integrate Prometheus with any tool that supports Prometheus alerts. It is recommended to manage and send alert messages via ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/alertmanager/"},"AlertManager"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you already have an available AlertManager service in your existing infrastructure, you can set the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.alertmanagerURL")," to the address of ",(0,o.kt)("inlineCode",{parentName:"p"},"AlertManager"),", which will be used by Prometheus. For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"#set-kube-prometheus-and-alertmanager"},"Set kube-prometheus and AlertManager"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If no AlertManager service is available, or if you want to deploy a separate AlertManager service, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/alertmanager"},"Prometheus official document"),"."))),(0,o.kt)("h2",{id:"monitor-multiple-clusters"},"Monitor multiple clusters"),(0,o.kt)("p",null,"Starting from TiDB Operator 1.2, TidbMonitor supports monitoring multiple clusters across namespaces."),(0,o.kt)("h3",{id:"configure-the-monitoring-of-multiple-clusters-using-yaml-files"},"Configure the monitoring of multiple clusters using YAML files"),(0,o.kt)("p",null,"For the clusters to be monitored, regardless of whether ",(0,o.kt)("inlineCode",{parentName:"p"},"TLS")," is enabled or not, you can monitor them by configuring TidbMonitor's YAML file."),(0,o.kt)("p",null,"A configuration example is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pingcap.com/v1alpha1\nkind: TidbMonitor\nmetadata:\n  name: basic\nspec:\n  clusters:\n    - name: ns1\n      namespace: ns1\n    - name: ns2\n      namespace: ns2\n  persistent: true\n  storage: 5G\n  prometheus:\n    baseImage: prom/prometheus\n    version: v2.18.1\n    service:\n      type: NodePort\n  grafana:\n    baseImage: grafana/grafana\n    version: 6.7.6\n    service:\n      type: NodePort\n  initializer:\n    baseImage: pingcap/tidb-monitor-initializer\n    version: v5.3.0\n  reloader:\n    baseImage: pingcap/tidb-monitor-reloader\n    version: v1.0.1\n  imagePullPolicy: IfNotPresent\n")),(0,o.kt)("p",null,"For a complete configuration example, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/tree/master/examples/monitor-multiple-cluster-non-tls"},"Example")," in the TiDB Operator repository."),(0,o.kt)("h3",{id:"monitor-multiple-clusters-using-grafana"},"Monitor multiple clusters using Grafana"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb-monitor-initializer")," image is earlier than v4.0.14 or v5.0.3, to monitor multiple clusters, you can take the following steps in each Grafana Dashboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On Grafana Dashboard, click ",(0,o.kt)("strong",{parentName:"li"},"Dashboard settings")," to open the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," panel."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," panel, select the ",(0,o.kt)("strong",{parentName:"li"},"tidb_cluster")," variable from ",(0,o.kt)("strong",{parentName:"li"},"Variables"),", and then set the ",(0,o.kt)("strong",{parentName:"li"},"Hide")," property of the ",(0,o.kt)("strong",{parentName:"li"},"tidb_cluster")," variable to the null option in the drop-down list."),(0,o.kt)("li",{parentName:"ol"},"Get back to the current Grafana Dashboard (changes to the ",(0,o.kt)("strong",{parentName:"li"},"Hide")," property cannot be saved currently), and you can see the drop-down list for cluster selection. The cluster name in the drop-down list is in the ",(0,o.kt)("inlineCode",{parentName:"li"},"${namespace}-${name}")," format.")),(0,o.kt)("p",null,"If you need to save changes to the Grafana Dashboard, Grafana must be ",(0,o.kt)("inlineCode",{parentName:"p"},"6.5")," or later, and TiDB Operator must be v1.2.0-rc.2 or later."))}d.isMDXComponent=!0}}]);