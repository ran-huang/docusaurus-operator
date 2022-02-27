"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[1623],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3653:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={title:"TiDB Kubernetes Control User Guide",summary:"Learn how to use the tkctl (TiDB Kubernetes Control) tool."},p="TiDB Kubernetes Control User Guide",s={unversionedId:"use-tkctl",id:"use-tkctl",title:"TiDB Kubernetes Control User Guide",description:"TiDB Kubernetes Control (tkctl) is a command line utility that is used for TiDB Operator to maintain and diagnose the TiDB cluster in Kubernetes.",source:"@site/docs/use-tkctl.md",sourceDirName:".",slug:"/use-tkctl",permalink:"/use-tkctl",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-tkctl.md",tags:[],version:"current",frontMatter:{title:"TiDB Kubernetes Control User Guide",summary:"Learn how to use the tkctl (TiDB Kubernetes Control) tool."},sidebar:"refSidebar",previous:{title:"RBAC rules required by TiDB Operator",permalink:"/tidb-operator-rbac"},next:{title:"Tools in Kubernetes",permalink:"/tidb-toolkit"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Download the latest pre-built binary",id:"download-the-latest-pre-built-binary",level:3},{value:"Build from source",id:"build-from-source",level:3},{value:"Shell auto-completion",id:"shell-auto-completion",level:3},{value:"Kubernetes configuration",id:"kubernetes-configuration",level:3},{value:"Commands",id:"commands",level:2},{value:"tkctl version",id:"tkctl-version",level:3},{value:"tkctl list",id:"tkctl-list",level:3},{value:"tkctl use",id:"tkctl-use",level:3},{value:"tkctl info",id:"tkctl-info",level:3},{value:"tkctl get component",id:"tkctl-get-component",level:3},{value:"tkctl debug pod_name",id:"tkctl-debug-pod_name",level:3},{value:"GDB",id:"gdb",level:4},{value:"Perf and flame graphs",id:"perf-and-flame-graphs",level:4},{value:"tkctl ctop",id:"tkctl-ctop",level:3},{value:"tkctl help command",id:"tkctl-help-command",level:3},{value:"tkctl options",id:"tkctl-options",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tidb-kubernetes-control-user-guide"},"TiDB Kubernetes Control User Guide"),(0,r.kt)("p",null,"TiDB Kubernetes Control (",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl"),") is a command line utility that is used for TiDB Operator to maintain and diagnose the TiDB cluster in Kubernetes."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"PingCAP is no longer maintaining ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl")," from v1.1.x, some of the following functions may not be usable, please use the equivalent ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," commands directly."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl"),", you can download the pre-built binary or build ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl")," from source."),(0,r.kt)("h3",{id:"download-the-latest-pre-built-binary"},"Download the latest pre-built binary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://download.pingcap.org/tkctl-darwin-amd64-latest.tgz"},"MacOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://download.pingcap.org/tkctl-linux-amd64-latest.tgz"},"Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://download.pingcap.org/tkctl-windows-amd64-latest.tgz"},"Windows"))),(0,r.kt)("p",null,"After unzipping the downloaded file, you can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl")," executable file to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," to finish the installation."),(0,r.kt)("h3",{id:"build-from-source"},"Build from source"),(0,r.kt)("p",null,"Requirement: ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go")," >= the 1.11 version or later"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/pingcap/tidb-operator.git && \\\nGOOS=<YOUR_GOOS> make cli &&\\\nmv tkctl /usr/local/bin/tkctl\n")),(0,r.kt)("h3",{id:"shell-auto-completion"},"Shell auto-completion"),(0,r.kt)("p",null,"You can configure the shell auto-completion for ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl")," to simplify its usage."),(0,r.kt)("p",null,"To configure the auto-completion for ",(0,r.kt)("inlineCode",{parentName:"p"},"BASH"),", you need to first install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scop/bash-completion"},"bash-completion")," package, and configure with either of the two methods below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure auto-completion in the current shell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"source <(tkctl completion bash)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add auto-completion permanently to your bash shell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "if hash tkctl 2>/dev/null; then source <(tkctl completion bash); fi" >> ~/.bashrc\n')))),(0,r.kt)("p",null,"To configure the auto-completion for ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSH"),", you can choose from either of the two methods below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure auto-completion in the current shell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"source <(tkctl completion zsh)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add auto-completion permanently to your zsh shell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "if hash tkctl 2>/dev/null; then source <(tkctl completion zsh); fi" >> ~/.zshrc\n')))),(0,r.kt)("h3",{id:"kubernetes-configuration"},"Kubernetes configuration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tkctl")," reuses the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file (the default location is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),") to connect with the Kubernetes cluster. You can verify whether ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," is correctly configured by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl version\n")),(0,r.kt)("p",null,"If the above command correctly outputs the version of TiDB Operator on the server side, then ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," is correctly configured."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"tkctl-version"},"tkctl version"),(0,r.kt)("p",null,"This command is used to show the version of the local ",(0,r.kt)("strong",{parentName:"p"},"tkctl")," and ",(0,r.kt)("strong",{parentName:"p"},"tidb-operator")," installed in the target cluster."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl version\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Client Version: v1.0.0-beta.1-p2-93-g6598b4d3e75705-dirty\nTiDB Controller Manager Version: pingcap/tidb-operator:latest\nTiDB Scheduler Version: pingcap/tidb-operator:latest\n")),(0,r.kt)("h3",{id:"tkctl-list"},"tkctl list"),(0,r.kt)("p",null,"This command is used to list all installed TiDB clusters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--all-namespaces"),(0,r.kt)("td",{parentName:"tr",align:null},"-A"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to search all Kubernetes namespaces")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--output"),(0,r.kt)("td",{parentName:"tr",align:null},"-o"),(0,r.kt)("td",{parentName:"tr",align:null},"The output format; you can choose from ","[default,json,yaml]",", and the default format is ",(0,r.kt)("inlineCode",{parentName:"td"},"default"))))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl list -A\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAMESPACE NAME           PD    TIKV   TIDB   AGE\nfoo       demo-cluster   3/3   3/3    2/2    11m\nbar       demo-cluster   3/3   3/3    1/2    11m\n")),(0,r.kt)("h3",{id:"tkctl-use"},"tkctl use"),(0,r.kt)("p",null,"This command is used to specify the TiDB cluster that the current ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl")," command operates on. After you specify a TiDB cluster by using this command, all commands that operates on a cluster will automatically select this cluster so the ",(0,r.kt)("inlineCode",{parentName:"p"},"--tidbcluster")," option can be omitted."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl use --namespace=foo demo-cluster\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Tidb cluster switched to foo/demo-cluster\n")),(0,r.kt)("h3",{id:"tkctl-info"},"tkctl info"),(0,r.kt)("p",null,"This command is used to display information about the TiDB cluster."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--tidb-cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"-t"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a TiDB cluster; default to the TiDB cluster that is being used")))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl info\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Name:               demo-cluster\nNamespace:          foo\nCreationTimestamp:  2019-04-17 17:33:41 +0800 CST\nOverview:\n         Phase    Ready  Desired  CPU    Memory  Storage  Version\n         -----    -----  -------  ---    ------  -------  -------\n  PD:    Normal   3      3        200m   1Gi     1Gi      pingcap/pd:v3.0.0-rc.1\n  TiKV:  Normal   3      3        1000m  2Gi     10Gi     pingcap/tikv:v3.0.0-rc.1\n  TiDB   Upgrade  1      2        500m   1Gi              pingcap/tidb:v3.0.0-rc.1\nEndpoints(NodePort):\n  - 172.16.4.158:31441\n  - 172.16.4.155:31441\n")),(0,r.kt)("h3",{id:"tkctl-get-component"},"tkctl get ","[component]"),(0,r.kt)("p",null,"This is a group of commands that are used to get the details of TiDB cluster components."),(0,r.kt)("p",null,"You can query the following components: ",(0,r.kt)("inlineCode",{parentName:"p"},"pd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tikv"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"volume")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"all")," (to query all components)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--tidb-cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"-t"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a TiDB cluster; default to the TiDB cluster that is being used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--output"),(0,r.kt)("td",{parentName:"tr",align:null},"-o"),(0,r.kt)("td",{parentName:"tr",align:null},"The output format; you can choose from ","[default,json,yaml]",", and the default format is ",(0,r.kt)("inlineCode",{parentName:"td"},"default"))))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl get tikv\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                  READY   STATUS    MEMORY          CPU   RESTARTS   AGE     NODE\ndemo-cluster-tikv-0   2/2     Running   2098Mi/4196Mi   2/2   0          3m19s   172.16.4.155\ndemo-cluster-tikv-1   2/2     Running   2098Mi/4196Mi   2/2   0          4m8s    172.16.4.160\ndemo-cluster-tikv-2   2/2     Running   2098Mi/4196Mi   2/2   0          4m45s   172.16.4.157\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl get volume\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"VOLUME              CLAIM                      STATUS   CAPACITY   NODE           LOCAL\nlocal-pv-d5dad2cf   tikv-demo-cluster-tikv-0   Bound    1476Gi     172.16.4.155   /mnt/disks/local-pv56\nlocal-pv-5ade8580   tikv-demo-cluster-tikv-1   Bound    1476Gi     172.16.4.160   /mnt/disks/local-pv33\nlocal-pv-ed2ffe50   tikv-demo-cluster-tikv-2   Bound    1476Gi     172.16.4.157   /mnt/disks/local-pv13\nlocal-pv-74ee0364   pd-demo-cluster-pd-0       Bound    1476Gi     172.16.4.155   /mnt/disks/local-pv46\nlocal-pv-842034e6   pd-demo-cluster-pd-1       Bound    1476Gi     172.16.4.158   /mnt/disks/local-pv74\nlocal-pv-e54c122a   pd-demo-cluster-pd-2       Bound    1476Gi     172.16.4.156   /mnt/disks/local-pv72\n")),(0,r.kt)("h3",{id:"tkctl-debug-pod_name"},"tkctl debug ","[pod_name]"),(0,r.kt)("p",null,"This command is used to diagnose the Pods in a TiDB cluster. It launches a debug launcher Pod which then starts a debug container using the specified docker image on the same host of the target Pod. The container has necessary troubleshooting tools and shares the same namespaces with the container in the target Pod, so you can diagnose the target container by using various tools in the debug container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--image"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the docker image used by the debug container; default to ",(0,r.kt)("inlineCode",{parentName:"td"},"pingcap/tidb-debug:lastest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--launcher-image"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the docker image for the debug launcher pod which is responsible for launching the debug container; default to ",(0,r.kt)("inlineCode",{parentName:"td"},"pingcap/debug-launcher:latest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--container"),(0,r.kt)("td",{parentName:"tr",align:null},"-c"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the container to be diagnosed; default to the first container of the target Pod")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--docker-socket"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the docker socket on the target node; default to ",(0,r.kt)("inlineCode",{parentName:"td"},"/var/run/docker.sock"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--privileged"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities"},"privileged")," mode for the debug container")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The default image of the debug container contains various troubleshooting tools, so the image size is relatively large. If you only need ",(0,r.kt)("inlineCode",{parentName:"p"},"pd-ctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb-ctl"),", you can specify using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb-control")," image by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--image=pingcap/tidb-control:latest")," command line option."))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl debug demo-cluster-tikv-0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ps -ef\n")),(0,r.kt)("p",null,"Using tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"GDB")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"perf")," in the debug container requires special operations because of the difference in root filesystems of the target container and the debug container."),(0,r.kt)("h4",{id:"gdb"},"GDB"),(0,r.kt)("p",null,"When you use GDB to debug the process in the target container, make sure you set the ",(0,r.kt)("inlineCode",{parentName:"p"},"program")," option to the binary in the ",(0,r.kt)("strong",{parentName:"p"},"target container"),". Additionally, if you use images other than ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb-debug")," as the debug container or if the ",(0,r.kt)("inlineCode",{parentName:"p"},"pid")," of the target process is not 1, you have to configure the location of dynamic libraries via the ",(0,r.kt)("inlineCode",{parentName:"p"},"set sysroot")," command as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl debug demo-cluster-tikv-0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gdb /proc/${pid:-1}/root/tikv-server 1\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".gdbinit")," pre-configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb-debug")," image will set ",(0,r.kt)("inlineCode",{parentName:"p"},"sysroot")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/proc/1/root/")," automatically. For this reason, you can omit this following step if you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb-debug")," image and the ",(0,r.kt)("inlineCode",{parentName:"p"},"pid")," of the target process is 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"(gdb) set sysroot /proc/${pid}/root/\n")),(0,r.kt)("p",null,"Start debugging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"(gdb) thread apply all bt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"(gdb) info threads\n")),(0,r.kt)("h4",{id:"perf-and-flame-graphs"},"Perf and flame graphs"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"perf")," command and the ",(0,r.kt)("inlineCode",{parentName:"p"},"run_flamegraph.sh")," script properly, you must copy the program from the target container to the same location in the debug container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl debug demo-cluster-tikv-0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp /proc/1/root/tikv-server /\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./run_flamegraph.sh 1\n")),(0,r.kt)("p",null,"This script automatically uploads the generated flame graph (SVG format) to ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer.sh"),", and you can visit the link outputted by the script to download the flame graph."),(0,r.kt)("h3",{id:"tkctl-ctop"},"tkctl ctop"),(0,r.kt)("p",null,"The complete form of the command is ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl ctop [pod_name | node/node_name ]"),"."),(0,r.kt)("p",null,"This command is used to view the real-time monitoring stats of the target Pod or node in the cluster. Compared with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl top"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl ctop")," also provides network and disk stats, which are important for diagnosing problems in the TiDB cluster."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Abbreviation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--image"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the docker image of ctop; default to ",(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/vektorlab/ctop:0.7.2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--docker-socket"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the docker socket that ctop uses; default to ",(0,r.kt)("inlineCode",{parentName:"td"},"/var/run/docker.sock"))))),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl ctop node/172.16.4.155\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl ctop demo-cluster-tikv-0\n")),(0,r.kt)("h3",{id:"tkctl-help-command"},"tkctl help ","[command]"),(0,r.kt)("p",null,"This command is used to print help messages of the sub commands."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl help debug\n")),(0,r.kt)("h3",{id:"tkctl-options"},"tkctl options"),(0,r.kt)("p",null,"This command is used to view the global flags of ",(0,r.kt)("inlineCode",{parentName:"p"},"tkctl"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tkctl options\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The following options can be passed to any command:\n\n      --alsologtostderr=false: log to standard error as well as files\n      --as='': Username to impersonate for the operation\n      --as-group=[]: Group to impersonate for the operation, this flag can be repeated to specify multiple groups.\n      --cache-dir='/Users/alei/.kube/http-cache': Default HTTP cache directory\n      --certificate-authority='': Path to a cert file for the certificate authority\n      --client-certificate='': Path to a client certificate file for TLS\n      --client-key='': Path to a client key file for TLS\n      --cluster='': The name of the kubeconfig cluster to use\n      --context='': The name of the kubeconfig context to use\n      --insecure-skip-tls-verify=false: If true, the server's certificate will not be checked for validity. This will\nmake your HTTPS connections insecure\n      --kubeconfig='': Path to the kubeconfig file to use for CLI requests.\n      --log_backtrace_at=:0: when logging hits line file:N, emit a stack trace\n      --log_dir='': If non-empty, write log files in this directory\n      --logtostderr=true: log to standard error instead of files\n  -n, --namespace='': If present, the namespace scope for this CLI request\n      --request-timeout='0': The length of time to wait before giving up on a single server request. Non-zero values\nshould contain a corresponding time unit (e.g. 1s, 2m, 3h). A value of zero means don't timeout requests.\n  -s, --server='': The address and port of the Kubernetes API server\n      --stderrthreshold=2: logs at or above this threshold go to stderr\n  -t, --tidbcluster='': Tidb cluster name\n      --token='': Bearer token for authentication to the API server\n      --user='': The name of the kubeconfig user to use\n  -v, --v=0: log level for V logs\n      --vmodule=: comma-separated list of pattern=N settings for file-filtered logging\n")),(0,r.kt)("p",null,"These options are mainly used to connect with the Kubernetes cluster and two commonly used options among them are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--context"),": specify the target Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--namespace"),": specify the Kubernetes namespace")))}m.isMDXComponent=!0}}]);