"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[1703],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4196:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={title:"Deploy TiDB on GCP GKE",summary:"Learn how to deploy a TiDB cluster on GCP GKE."},s="Deploy TiDB on GCP GKE",c={unversionedId:"deploy-on-gcp-gke",id:"deploy-on-gcp-gke",title:"Deploy TiDB on GCP GKE",description:"This document describes how to deploy a GCP Google Kubernetes Engine (GKE) cluster and deploy a TiDB cluster on GCP GKE.",source:"@site/docs/deploy-on-gcp-gke.md",sourceDirName:".",slug:"/deploy-on-gcp-gke",permalink:"/docusaurus-operator/deploy-on-gcp-gke",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/deploy-on-gcp-gke.md",tags:[],version:"current",frontMatter:{title:"Deploy TiDB on GCP GKE",summary:"Learn how to deploy a TiDB cluster on GCP GKE."},sidebar:"mySidebar",previous:{title:"Deploy TiDB on AWS EKS",permalink:"/docusaurus-operator/deploy-on-aws-eks"},next:{title:"Deploy TiDB on Azure AKS",permalink:"/docusaurus-operator/deploy-on-azure-aks"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure the GCP service",id:"configure-the-gcp-service",level:2},{value:"Create a GKE cluster and node pool",id:"create-a-gke-cluster-and-node-pool",level:2},{value:"Deploy TiDB Operator",id:"deploy-tidb-operator",level:2},{value:"Deploy a TiDB cluster and the monitoring component",id:"deploy-a-tidb-cluster-and-the-monitoring-component",level:2},{value:"Create namespace",id:"create-namespace",level:3},{value:"Deploy",id:"deploy",level:3},{value:"View the cluster status",id:"view-the-cluster-status",level:3},{value:"Access the TiDB database",id:"access-the-tidb-database",level:2},{value:"Prepare a bastion host",id:"prepare-a-bastion-host",level:3},{value:"Install the MySQL client and connect",id:"install-the-mysql-client-and-connect",level:3},{value:"Access the Grafana monitoring dashboard",id:"access-the-grafana-monitoring-dashboard",level:3},{value:"Upgrade",id:"upgrade",level:2},{value:"Scale out",id:"scale-out",level:2},{value:"Scale out GKE node group",id:"scale-out-gke-node-group",level:3},{value:"Scale out TiDB components",id:"scale-out-tidb-components",level:3},{value:"Deploy TiFlash and TiCDC",id:"deploy-tiflash-and-ticdc",level:2},{value:"Create new node pools",id:"create-new-node-pools",level:3},{value:"Configure and deploy",id:"configure-and-deploy",level:3},{value:"Deploy TiDB Enterprise Edition",id:"deploy-tidb-enterprise-edition",level:2},{value:"Use local storage",id:"use-local-storage",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-tidb-on-gcp-gke"},"Deploy TiDB on GCP GKE"),(0,i.kt)("p",null,"This document describes how to deploy a GCP Google Kubernetes Engine (GKE) cluster and deploy a TiDB cluster on GCP GKE."),(0,i.kt)("p",null,"To deploy TiDB Operator and the TiDB cluster in a self-managed Kubernetes environment, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-tidb-operator"},"Deploy TiDB Operator")," and ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-on-general-kubernetes"},"Deploy TiDB in General Kubernetes"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before deploying a TiDB cluster on GCP GKE, make sure the following requirements are satisfied:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm 3"),": used for deploying TiDB Operator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud"},"gcloud"),": a command-line tool used for creating and managing GCP services.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Complete the operations in the ",(0,i.kt)("strong",{parentName:"p"},"Before you begin")," section of ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart#before-you-begin"},"GKE Quickstart"),"."),(0,i.kt)("p",{parentName:"li"},"  This guide includes the following contents:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enable Kubernetes APIs"),(0,i.kt)("li",{parentName:"ul"},"Configure enough quota")))),(0,i.kt)("h2",{id:"configure-the-gcp-service"},"Configure the GCP service"),(0,i.kt)("p",null,"Configure your GCP project and default region:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set core/project <gcp-project>\ngcloud config set compute/region <gcp-region>\n")),(0,i.kt)("h2",{id:"create-a-gke-cluster-and-node-pool"},"Create a GKE cluster and node pool"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a GKE cluster and a default node pool:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud container clusters create tidb --region us-east1 --machine-type n1-standard-4 --num-nodes=1\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The command above creates a regional cluster."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--num-nodes=1")," option indicates that one node is created in each zone. So if there are three zones in the region, there are three nodes in total, which ensures high availability."),(0,i.kt)("li",{parentName:"ul"},"It is recommended to use regional clusters in production environments. For other types of clusters, refer to ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters"},"Types of GKE clusters"),"."),(0,i.kt)("li",{parentName:"ul"},"The command above creates a cluster in the default network. If you want to specify a network, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"--network/subnet")," option. For more information, refer to ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-regional-cluster"},"Creating a regional cluster"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create separate node pools for PD, TiKV, and TiDB:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud container node-pools create pd --cluster tidb --machine-type n1-standard-4 --num-nodes=1 \\\n    --node-labels=dedicated=pd --node-taints=dedicated=pd:NoSchedule\ngcloud container node-pools create tikv --cluster tidb --machine-type n1-highmem-8 --num-nodes=1 \\\n    --node-labels=dedicated=tikv --node-taints=dedicated=tikv:NoSchedule\ngcloud container node-pools create tidb --cluster tidb --machine-type n1-standard-8 --num-nodes=1 \\\n    --node-labels=dedicated=tidb --node-taints=dedicated=tidb:NoSchedule\n")),(0,i.kt)("p",{parentName:"li"},"The process might take a few minutes."))),(0,i.kt)("h2",{id:"deploy-tidb-operator"},"Deploy TiDB Operator"),(0,i.kt)("p",null,"To deploy TiDB Operator on GKE, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/get-started#step-2-deploy-tidb-operator"},"deploy TiDB Operator"),"."),(0,i.kt)("h2",{id:"deploy-a-tidb-cluster-and-the-monitoring-component"},"Deploy a TiDB cluster and the monitoring component"),(0,i.kt)("p",null,"This section describes how to deploy a TiDB cluster and its monitoring component on GCP GKE."),(0,i.kt)("h3",{id:"create-namespace"},"Create namespace"),(0,i.kt)("p",null,"To create a namespace to deploy the TiDB cluster, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace tidb-cluster\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace"))," is a virtual cluster backed by the same physical cluster. This document takes ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-cluster")," as an example. If you want to use other namespace, modify the corresponding arguments of ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--namespace"),"."))),(0,i.kt)("h3",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"First, download the sample ",(0,i.kt)("inlineCode",{parentName:"p"},"TidbCluster")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TidbMonitor")," configuration files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/gcp/tidb-cluster.yaml && \\\ncurl -O https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/gcp/tidb-monitor.yaml\n")),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/configure-a-tidb-cluster"},"configure the TiDB cluster")," to further customize and configure the CR before applying."),(0,i.kt)("p",null,"To deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"TidbCluster")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TidbMonitor")," CR in the GKE cluster, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f tidb-cluster.yaml -n tidb-cluster && \\\nkubectl create -f tidb-monitor.yaml -n tidb-cluster\n")),(0,i.kt)("p",null,"After the yaml file above is applied to the Kubernetes cluster, TiDB Operator creates the desired TiDB cluster and its monitoring component according to the yaml file."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you need to deploy a TiDB cluster on ARM64 machines, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/deploy-cluster-on-arm64"},"Deploy a TiDB Cluster on ARM64 Machines"),"."))),(0,i.kt)("h3",{id:"view-the-cluster-status"},"View the cluster status"),(0,i.kt)("p",null,"To view the status of the starting TiDB cluster, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n tidb-cluster\n")),(0,i.kt)("p",null,"When all the Pods are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ready")," state, the TiDB cluster is successfully started. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                              READY   STATUS    RESTARTS   AGE\ntidb-discovery-5cb8474d89-n8cxk   1/1     Running   0          47h\ntidb-monitor-6fbcc68669-dsjlc     3/3     Running   0          47h\ntidb-pd-0                         1/1     Running   0          47h\ntidb-pd-1                         1/1     Running   0          46h\ntidb-pd-2                         1/1     Running   0          46h\ntidb-tidb-0                       2/2     Running   0          47h\ntidb-tidb-1                       2/2     Running   0          46h\ntidb-tikv-0                       1/1     Running   0          47h\ntidb-tikv-1                       1/1     Running   0          47h\ntidb-tikv-2                       1/1     Running   0          47h\n")),(0,i.kt)("h2",{id:"access-the-tidb-database"},"Access the TiDB database"),(0,i.kt)("p",null,"After you deploy a TiDB cluster, you can access the TiDB database via MySQL client."),(0,i.kt)("h3",{id:"prepare-a-bastion-host"},"Prepare a bastion host"),(0,i.kt)("p",null,"The LoadBalancer created for your TiDB cluster is an intranet LoadBalancer. You can create a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/solutions/connecting-securely#bastion"},"bastion host")," in the cluster VPC to access the database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud compute instances create bastion \\\n    --machine-type=n1-standard-4 \\\n    --image-project=centos-cloud \\\n    --image-family=centos-7 \\\n    --zone=${your-region}-a\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"${your-region}-a")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," zone in the region of the cluster, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"us-central1-a"),". You can also create the bastion host in other zones in the same region."))),(0,i.kt)("h3",{id:"install-the-mysql-client-and-connect"},"Install the MySQL client and connect"),(0,i.kt)("p",null,"After the bastion host is created, you can connect to the bastion host via SSH and access the TiDB cluster via the MySQL client."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect to the bastion host via SSH:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud compute ssh tidb@bastion\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the MySQL client:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install mysql -y\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the client to the TiDB cluster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h ${tidb-nlb-dnsname} -P 4000 -u root\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"${tidb-nlb-dnsname}")," is the LoadBalancer IP of the TiDB service. You can view the IP in the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get svc basic-tidb -n tidb-cluster")," execution result."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mysql -h 10.128.15.243 -P 4000 -u root\nWelcome to the MariaDB monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 7823\nServer version: 5.7.25-TiDB-v4.0.4 TiDB Server (Apache License 2.0) Community Edition, MySQL 5.7 compatible\n\nCopyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nMySQL [(none)]> show status;\n+--------------------+--------------------------------------+\n| Variable_name      | Value                                |\n+--------------------+--------------------------------------+\n| Ssl_cipher         |                                      |\n| Ssl_cipher_list    |                                      |\n| Ssl_verify_mode    | 0                                    |\n| Ssl_version        |                                      |\n| ddl_schema_version | 22                                   |\n| server_id          | 717420dc-0eeb-4d4a-951d-0d393aff295a |\n+--------------------+--------------------------------------+\n6 rows in set (0.01 sec)\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin"},"The default authentication plugin of MySQL 8.0")," is updated from ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql_native_password")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"caching_sha2_password"),". Therefore, if you use MySQL client from MySQL 8.0 to access the TiDB service (TiDB version < v4.0.7), and if the user account has a password, you need to explicitly specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"--default-auth=mysql_native_password")," parameter."),(0,i.kt)("li",{parentName:"ul"},"By default, TiDB (starting from v4.0.2) periodically shares usage details with PingCAP to help understand how to improve the product. For details about what is shared and how to disable the sharing, see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/stable/telemetry"},"Telemetry"),".")))),(0,i.kt)("h3",{id:"access-the-grafana-monitoring-dashboard"},"Access the Grafana monitoring dashboard"),(0,i.kt)("p",null,"Obtain the LoadBalancer IP of Grafana:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n tidb-cluster get svc basic-grafana\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n tidb-cluster get svc basic-grafana\nNAME                     TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)               AGE\nbasic-grafana            LoadBalancer   10.15.255.169   34.123.168.114   3000:30657/TCP        35m\n")),(0,i.kt)("p",null,"In the output above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column is the LoadBalancer IP."),(0,i.kt)("p",null,"You can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"${grafana-lb}:3000")," address using your web browser to view monitoring metrics. Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"${grafana-lb}")," with the LoadBalancer IP."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default Grafana username and password are both ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"."))),(0,i.kt)("h2",{id:"upgrade"},"Upgrade"),(0,i.kt)("p",null,"To upgrade the TiDB cluster, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl patch tc basic -n tidb-cluster --type merge -p \'{"spec":{"version":"${version}"}}`.\n')),(0,i.kt)("p",null,"The upgrade process does not finish immediately. You can watch the upgrade progress by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n tidb-cluster --watch"),"."),(0,i.kt)("h2",{id:"scale-out"},"Scale out"),(0,i.kt)("p",null,"Before scaling out the cluster, you need to scale out the corresponding node pool so that the new instances have enough resources for operation."),(0,i.kt)("p",null,"This section describes how to scale out the EKS node group and TiDB components."),(0,i.kt)("h3",{id:"scale-out-gke-node-group"},"Scale out GKE node group"),(0,i.kt)("p",null,"The following example shows how to scale out the ",(0,i.kt)("inlineCode",{parentName:"p"},"tikv")," node pool of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb")," cluster to 6 nodes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud container clusters resize tidb --node-pool tikv --num-nodes 2\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the regional cluster, the nodes are created in 3 zones. Therefore, after scaling out, the number of nodes is ",(0,i.kt)("inlineCode",{parentName:"p"},"2 * 3 = 6"),"."))),(0,i.kt)("h3",{id:"scale-out-tidb-components"},"Scale out TiDB components"),(0,i.kt)("p",null,"After that, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl edit tc basic -n tidb-cluster")," and modify each component's ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," to the desired number of replicas. The scaling-out process is then completed."),(0,i.kt)("p",null,"For more information on managing node pools, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools"},"GKE Node pools"),"."),(0,i.kt)("h2",{id:"deploy-tiflash-and-ticdc"},"Deploy TiFlash and TiCDC"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/tiflash-overview"},"TiFlash")," is the columnar storage extension of TiKV."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/ticdc-overview"},"TiCDC")," is a tool for replicating the incremental data of TiDB by pulling TiKV change logs."),(0,i.kt)("p",null,"The two components are ",(0,i.kt)("em",{parentName:"p"},"not required")," in the deployment. This section shows a quick start example."),(0,i.kt)("h3",{id:"create-new-node-pools"},"Create new node pools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a node pool for TiFlash:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud container node-pools create tiflash --cluster tidb --machine-type n1-highmem-8 --num-nodes=1 \\\n    --node-labels dedicated=tiflash --node-taints dedicated=tiflash:NoSchedule\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a node pool for TiCDC:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud container node-pools create ticdc --cluster tidb --machine-type n1-standard-4 --num-nodes=1 \\\n    --node-labels dedicated=ticdc --node-taints dedicated=ticdc:NoSchedule\n")))),(0,i.kt)("h3",{id:"configure-and-deploy"},"Configure and deploy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To deploy TiFlash, configure ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.tiflash")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-cluster.yaml"),". For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  tiflash:\n    baseImage: pingcap/tiflash\n    maxFailoverCount: 0\n    replicas: 1\n    storageClaims:\n    - resources:\n        requests:\n        storage: 100Gi\n    nodeSelector:\n      dedicated: tiflash\n    tolerations:\n    - effect: NoSchedule\n      key: dedicated\n      operator: Equal\n      value: tiflash\n")),(0,i.kt)("p",{parentName:"li"},"  To configure other parameters, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/configure-a-tidb-cluster"},"Configure a TiDB Cluster"),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")),(0,i.kt)("p",{parentName:"blockquote"},"TiDB Operator automatically mounts PVs ",(0,i.kt)("strong",{parentName:"p"},"in the order of the configuration")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageClaims")," list. Therefore, if you need to add disks for TiFlash, make sure that you add the disks ",(0,i.kt)("strong",{parentName:"p"},"only to the end of the original configuration")," in the list. In addition, you must ",(0,i.kt)("strong",{parentName:"p"},"not")," alter the order of the original configuration."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To deploy TiCDC, configure ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ticdc")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-cluster.yaml"),". For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  ticdc:\n    baseImage: pingcap/ticdc\n    replicas: 1\n    nodeSelector:\n      dedicated: ticdc\n    tolerations:\n    - effect: NoSchedule\n      key: dedicated\n      operator: Equal\n      value: ticdc\n")),(0,i.kt)("p",{parentName:"li"},"  Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," according to your needs."))),(0,i.kt)("p",null,"Finally, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl -n tidb-cluster apply -f tidb-cluster.yaml")," to update the TiDB cluster configuration."),(0,i.kt)("p",null,"For detailed CR configuration, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/blob/master/docs/api-references/docs.md"},"API references")," and ",(0,i.kt)("a",{parentName:"p",href:"/docusaurus-operator/configure-a-tidb-cluster"},"Configure a TiDB Cluster"),"."),(0,i.kt)("h2",{id:"deploy-tidb-enterprise-edition"},"Deploy TiDB Enterprise Edition"),(0,i.kt)("p",null,"To deploy TiDB/PD/TiKV/TiFlash/TiCDC Enterprise Edition, configure ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.[tidb|pd|tikv|tiflash|ticdc].baseImage")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-cluster.yaml")," as the enterprise image. The enterprise image format is ",(0,i.kt)("inlineCode",{parentName:"p"},"pingcap/[tidb|pd|tikv|tiflash|ticdc]-enterprise"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  pd:\n    baseImage: pingcap/pd-enterprise\n  ...\n  tikv:\n    baseImage: pingcap/tikv-enterprise\n")),(0,i.kt)("h2",{id:"use-local-storage"},"Use local storage"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/disks#pdspecs"},"Zonal Persistent disks")," as a primary production configuration. To simulate bare metal performance, some GCP instance types provide additional ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/local-ssd"},"local store volumes"),". You can choose such instances for the TiKV node pool to achieve higher IOPS and lower latency."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You cannot dynamically change the storage class of a running TiDB cluster. You can create a new cluster for testing."),(0,i.kt)("p",{parentName:"div"},"During the GKE upgrade, ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/local-ssd"},"data in the local storage will be lost")," due to the node reconstruction. When the node reconstruction occurs, you need to migrate data in TiKV. If you do not want to migrate data, it is recommended not to use the local disk in the production environment."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a node pool with local storage for TiKV:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud container node-pools create tikv --cluster tidb --machine-type n1-standard-4 --num-nodes=1 --local-ssd-count 1 \\\n  --node-labels dedicated=tikv --node-taints dedicated=tikv:NoSchedule\n")),(0,i.kt)("p",{parentName:"li"},"If the TiKV node pool already exists, you can either delete the old pool and then create a new one, or change the pool name to avoid conflict.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy the local volume provisioner."),(0,i.kt)("p",{parentName:"li"},"You need to use the ",(0,i.kt)("a",{parentName:"p",href:"https://sigs.k8s.io/sig-storage-local-static-provisioner"},"local-volume-provisioner")," to discover and manage the local storage. Executing the following command deploys and creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"local-storage")," storage class:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/manifests/gke/local-ssd-provision/local-ssd-provision.yaml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the local storage."),(0,i.kt)("p",{parentName:"li"},"After the steps above, the local volume provisioner can discover all the local NVMe SSD disks in the cluster."),(0,i.kt)("p",{parentName:"li"},"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"tikv.storageClassName")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tidb-cluster.yaml")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"local-storage"),"."))))}m.isMDXComponent=!0}}]);