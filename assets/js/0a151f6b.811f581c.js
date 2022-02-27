"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[6834],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},473:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Tools in Kubernetes",summary:"Learn about operation tools for TiDB in Kubernetes."},s="Tools in Kubernetes",p={unversionedId:"tidb-toolkit",id:"tidb-toolkit",title:"Tools in Kubernetes",description:"Operations on TiDB in Kubernetes require some open source tools. In the meantime, there are some special requirements for operations using TiDB tools in the Kubernetes environment. This documents introduces in details the related operation tools for TiDB in Kubernetes.",source:"@site/docs/tidb-toolkit.md",sourceDirName:".",slug:"/tidb-toolkit",permalink:"/docusaurus-operator/tidb-toolkit",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tidb-toolkit.md",tags:[],version:"current",frontMatter:{title:"Tools in Kubernetes",summary:"Learn about operation tools for TiDB in Kubernetes."},sidebar:"refSidebar",previous:{title:"TiDB Kubernetes Control User Guide",permalink:"/docusaurus-operator/use-tkctl"},next:{title:"TiDB Binlog Drainer Configurations in Kubernetes",permalink:"/docusaurus-operator/configure-tidb-binlog-drainer"}},c={},m=[{value:"Use PD Control in Kubernetes",id:"use-pd-control-in-kubernetes",level:2},{value:"Use TiKV Control in Kubernetes",id:"use-tikv-control-in-kubernetes",level:2},{value:"Use TiDB Control in Kubernetes",id:"use-tidb-control-in-kubernetes",level:2},{value:"Use Helm",id:"use-helm",level:2},{value:"Install the Helm client",id:"install-the-helm-client",level:3},{value:"Configure the Helm repo",id:"configure-the-helm-repo",level:3},{value:"Helm common operations",id:"helm-common-operations",level:3},{value:"Use Helm chart offline",id:"use-helm-chart-offline",level:3},{value:"Use Terraform",id:"use-terraform",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-in-kubernetes"},"Tools in Kubernetes"),(0,o.kt)("p",null,"Operations on TiDB in Kubernetes require some open source tools. In the meantime, there are some special requirements for operations using TiDB tools in the Kubernetes environment. This documents introduces in details the related operation tools for TiDB in Kubernetes."),(0,o.kt)("h2",{id:"use-pd-control-in-kubernetes"},"Use PD Control in Kubernetes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pingcap.com/docs/stable/reference/tools/pd-control"},"PD Control")," is the command-line tool for PD (Placement Driver). To use PD Control to operate on TiDB clusters in Kubernetes, firstly you need to establish the connection from local to the PD service using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} svc/${cluster_name}-pd 2379:2379 &>/tmp/portforward-pd.log &\n")),(0,o.kt)("p",null,"After the above command is executed, you can access the PD service via ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:2379"),", and then use the default parameters of ",(0,o.kt)("inlineCode",{parentName:"p"},"pd-ctl")," to operate. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pd-ctl -d config show\n")),(0,o.kt)("p",null,"Assume that your local port ",(0,o.kt)("inlineCode",{parentName:"p"},"2379")," has been occupied and you want to switch to another port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} svc/${cluster_name}-pd ${local_port}:2379 &>/tmp/portforward-pd.log &\n")),(0,o.kt)("p",null,"Then you need to explicitly assign a PD port for ",(0,o.kt)("inlineCode",{parentName:"p"},"pd-ctl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"pd-ctl -u 127.0.0.1:${local_port} -d config show\n")),(0,o.kt)("h2",{id:"use-tikv-control-in-kubernetes"},"Use TiKV Control in Kubernetes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pingcap.com/docs/stable/reference/tools/tikv-control"},"TiKV Control")," is the command-line tool for TiKV. When using TiKV Control for TiDB clusters in Kubernetes, be aware that each operation mode involves different steps, as described below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Remote Mode"),": In this mode, ",(0,o.kt)("inlineCode",{parentName:"p"},"tikv-ctl")," accesses the TiKV service or the PD service through network. Firstly you need to establish the connection from local to the PD service and the target TiKV node using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} svc/${cluster_name}-pd 2379:2379 &>/tmp/portforward-pd.log &\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} ${pod_name} 20160:20160 &>/tmp/portforward-tikv.log &\n")),(0,o.kt)("p",{parentName:"li"},"  After the connection is established, you can access the PD service and the TiKV node via the corresponding port in local:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tikv-ctl --host 127.0.0.1:20160 ${subcommands}\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tikv-ctl --pd 127.0.0.1:2379 compact-cluster\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Local Mode"),"\uff1aIn this mode, ",(0,o.kt)("inlineCode",{parentName:"p"},"tikv-ctl")," accesses data files of TiKV, and the running TiKV instances must be stopped. To operate in the local mode, first you need to enter the ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/tips#use-the-diagnostic-mode"},"Diagnostic Mode")," to turn off automatic re-starting for the TiKV instance, stop the TiKV process, and enter the target TiKV Pod and use ",(0,o.kt)("inlineCode",{parentName:"p"},"tikv-ctl")," to perform the operation. The steps are as follows:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the Diagnostic mode:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl annotate pod ${pod_name} -n ${namespace} runmode=debug\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the TiKV process:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec ${pod_name} -n ${namespace} -c tikv -- kill -s TERM 1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for the TiKV container to restart, and enter the container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it ${pod_name} -n ${namespace} -- sh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start using ",(0,o.kt)("inlineCode",{parentName:"p"},"tikv-ctl")," in local mode. The default db path in the TiKV container is ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/tikv/db"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./tikv-ctl --data-dir /var/lib/tikv size -r 2\n")))))),(0,o.kt)("h2",{id:"use-tidb-control-in-kubernetes"},"Use TiDB Control in Kubernetes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pingcap.com/docs/stable/reference/tools/tidb-control"},"TiDB Control")," is the command-line tool for TiDB. To use TiDB Control in Kubernetes, you need to access the TiDB node and the PD service from local. It is suggested you turn on the connection from local to the TiDB node and the PD service using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} svc/${cluster_name}-pd 2379:2379 &>/tmp/portforward-pd.log &\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n ${namespace} ${pod_name} 10080:10080 &>/tmp/portforward-tidb.log &\n")),(0,o.kt)("p",null,"Then you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb-ctl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tidb-ctl schema in mysql\n")),(0,o.kt)("h2",{id:"use-helm"},"Use Helm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a package management tool for Kubernetes. The installation steps are as follows:"),(0,o.kt)("h3",{id:"install-the-helm-client"},"Install the Helm client"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm official documentation")," to install the Helm client."),(0,o.kt)("p",null,"If the server does not have access to the Internet, you need to download Helm on a machine with Internet access, and then copy it to the server. Here is an example of installing the Helm client ",(0,o.kt)("inlineCode",{parentName:"p"},"3.4.1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.helm.sh/helm-v3.4.1-linux-amd64.tar.gz\ntar zxvf helm-v3.4.1-linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"After decompression, you can see the following files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"linux-amd64/\nlinux-amd64/README.md\nlinux-amd64/helm\nlinux-amd64/LICENSE\n")),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"linux-amd64/helm")," file to the server and place it under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," directory."),(0,o.kt)("p",null,"Then execute ",(0,o.kt)("inlineCode",{parentName:"p"},"helm verison"),". If the command outputs normally, the Helm installation is successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'version.BuildInfo{Version:"v3.4.1", GitCommit:"c4e74854886b2efe3321e185578e6db9be0a6e29", GitTreeState:"clean", GoVersion:"go1.14.11"}\n')),(0,o.kt)("h3",{id:"configure-the-helm-repo"},"Configure the Helm repo"),(0,o.kt)("p",null,"Kubernetes applications are packed as charts in Helm. PingCAP provides the following Helm charts for TiDB in Kubernetes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tidb-operator"),": used to deploy TiDB Operator;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tidb-cluster"),": used to deploy TiDB clusters;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tidb-backup"),": used to back up or restore TiDB clusters;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tidb-lightning"),": used to import data into a TiDB cluster;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tidb-drainer"),": used to deploy TiDB Drainer;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tikv-importer"),": used to deploy TiKV Importer.")),(0,o.kt)("p",null,"These charts are hosted in the Helm chart repository ",(0,o.kt)("inlineCode",{parentName:"p"},"https://charts.pingcap.org/")," maintained by PingCAP. You can add this repository to your local server or computer using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add pingcap https://charts.pingcap.org/\n")),(0,o.kt)("p",null,"Then you can search the chart provided by PingCAP using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm search repo pingcap\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                    CHART VERSION   APP VERSION     DESCRIPTION\npingcap/tidb-backup     v1.2.7                  A Helm chart for TiDB Backup or Restore\npingcap/tidb-cluster    v1.2.7                  A Helm chart for TiDB Cluster\npingcap/tidb-drainer    v1.2.7                  A Helm chart for TiDB Binlog drainer.\npingcap/tidb-lightning  v1.2.7                  A Helm chart for TiDB Lightning\npingcap/tidb-operator   v1.2.7  v1.2.7  tidb-operator Helm chart for Kubernetes\npingcap/tikv-importer   v1.2.7                  A Helm chart for TiKV Importer\n")),(0,o.kt)("p",null,"When a new version of chart has been released, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"helm repo update")," to update the repository cached locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo update\n")),(0,o.kt)("h3",{id:"helm-common-operations"},"Helm common operations"),(0,o.kt)("p",null,"Common Helm operations include ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"helm uninstall"),". Helm chart usually contains many configurable parameters which could be tedious to configure manually. For convenience, it is recommended that you configure using a YAML file. Based on the conventions in the Helm community, the YAML file used for Helm configuration is named ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," in this document."),(0,o.kt)("p",null,"Before performing the deploy, upgrade and deploy, you can view the deployed applications via ",(0,o.kt)("inlineCode",{parentName:"p"},"helm ls"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm ls\n")),(0,o.kt)("p",null,"When performing a deployment or upgrade, you must specify the chart name (",(0,o.kt)("inlineCode",{parentName:"p"},"chart-name"),") and the name for the deployed application (",(0,o.kt)("inlineCode",{parentName:"p"},"release-name"),"). You can also specify one or multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," files to configure charts. In addition, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"chart-version")," to specify the chart version (by default the latest GA is used). The steps in command line are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm install ${release_name} ${chart_name} --namespace=${namespace} --version=${chart_version} -f ${values_file}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upgrade (the upgrade can be either modifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"chart-version")," to upgrade to the latest chart version, or editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to update the configuration):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade ${release_name} ${chart_name} --version=${chart_version} -f ${values_file}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Delete:"),(0,o.kt)("p",{parentName:"li"},"  To delete the application deployed by Helm, run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall ${release_name} -n ${namespace}\n")))),(0,o.kt)("p",null,"For more information on Helm, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"Helm Documentation"),"."),(0,o.kt)("h3",{id:"use-helm-chart-offline"},"Use Helm chart offline"),(0,o.kt)("p",null,"If the server has no Internet access, you cannot configure the Helm repo to install the TiDB Operator component and other applications. At this time, you need to download the chart file needed for cluster installation on a machine with Internet access, and then copy it to the server."),(0,o.kt)("p",null,"Use the following command to download the chart file required for cluster installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget http://charts.pingcap.org/tidb-operator-v1.2.7.tgz\nwget http://charts.pingcap.org/tidb-drainer-v1.2.7.tgz\nwget http://charts.pingcap.org/tidb-lightning-v1.2.7.tgz\n")),(0,o.kt)("p",null,"Copy these chart files to the server and decompress them. You can use these charts to install the corresponding components by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install")," command. Take ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb-operator")," as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf tidb-operator.v1.2.7.tgz\nhelm install ${release_name} ./tidb-operator --namespace=${namespace}\n")),(0,o.kt)("h2",{id:"use-terraform"},"Use Terraform"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," is a Infrastructure as Code management tool. It enables users to define their own infrastructure in a  manifestation style, based on which execution plans are generated to create or schedule real world compute resources. TiDB in Kubernetes use Terraform to create and manage TiDB clusters on public clouds."),(0,o.kt)("p",null,"Follow the steps in ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/downloads.html"},"Terraform Documentation")," to install Terraform."))}d.isMDXComponent=!0}}]);