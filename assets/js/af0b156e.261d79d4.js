"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[4010],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1567:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Prerequisites for TiDB in Kubernetes",summary:"Learn the prerequisites for TiDB in Kubernetes."},s="Prerequisites for TiDB in Kubernetes",p={unversionedId:"prerequisites",id:"prerequisites",title:"Prerequisites for TiDB in Kubernetes",description:"This document introduces the hardware and software prerequisites for deploying a TiDB cluster in Kubernetes.",source:"@site/docs/prerequisites.md",sourceDirName:".",slug:"/prerequisites",permalink:"/docusaurus-operator/prerequisites",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/prerequisites.md",tags:[],version:"current",frontMatter:{title:"Prerequisites for TiDB in Kubernetes",summary:"Learn the prerequisites for TiDB in Kubernetes."},sidebar:"mySidebar",previous:{title:"Get Started With TiDB Operator in Kubernetes",permalink:"/docusaurus-operator/get-started"},next:{title:"Persistent Storage Class Configuration in Kubernetes",permalink:"/docusaurus-operator/configure-storage-class"}},c={},d=[{value:"Software version",id:"software-version",level:2},{value:"Configure the firewall",id:"configure-the-firewall",level:2},{value:"Configure Iptables",id:"configure-iptables",level:2},{value:"Disable SELinux",id:"disable-selinux",level:2},{value:"Disable swap",id:"disable-swap",level:2},{value:"Configure kernel parameters",id:"configure-kernel-parameters",level:2},{value:"Configure the Irqbalance service",id:"configure-the-irqbalance-service",level:2},{value:"Configure the CPUfreq governor mode",id:"configure-the-cpufreq-governor-mode",level:2},{value:"Configure <code>ulimit</code>",id:"configure-ulimit",level:2},{value:"Docker service",id:"docker-service",level:2},{value:"Kubernetes service",id:"kubernetes-service",level:2},{value:"TiDB cluster&#39;s requirements for resources",id:"tidb-clusters-requirements-for-resources",level:2}],m={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisites-for-tidb-in-kubernetes"},"Prerequisites for TiDB in Kubernetes"),(0,i.kt)("p",null,"This document introduces the hardware and software prerequisites for deploying a TiDB cluster in Kubernetes."),(0,i.kt)("h2",{id:"software-version"},"Software version"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Software Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Docker"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Docker CE 18.09.6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Kubernetes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"v1.12.5+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"CentOS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.6 and kernel 3.10.0-957 or later")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Helm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"v3.0.0+")))),(0,i.kt)("h2",{id:"configure-the-firewall"},"Configure the firewall"),(0,i.kt)("p",null,"It is recommended that you disable the firewall."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld\nsystemctl disable firewalld\n")),(0,i.kt)("p",null,"If you cannot stop the firewalld service, to ensure the normal operation of Kubernetes, take the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the following ports on the master, and then restart the service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"firewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=2379-2380/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10251/tcp\nfirewall-cmd --permanent --add-port=10252/tcp\nfirewall-cmd --permanent --add-port=10255/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --add-masquerade --permanent\n\n# Set it when you need to expose NodePort on the master node.\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nsystemctl restart firewalld\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the following ports on the nodes, and then restart the service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"firewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10255/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --add-masquerade --permanent\n\nsystemctl restart firewalld\n")))),(0,i.kt)("h2",{id:"configure-iptables"},"Configure Iptables"),(0,i.kt)("p",null,"The FORWARD chain is configured to ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCEPT")," by default and is set in the startup script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"iptables -P FORWARD ACCEPT\n")),(0,i.kt)("h2",{id:"disable-selinux"},"Disable SELinux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"setenforce 0\nsed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config\n")),(0,i.kt)("h2",{id:"disable-swap"},"Disable swap"),(0,i.kt)("p",null,"To make kubelet work, you need to turn off swap and comment out the swap-related line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"swapoff -a\nsed -i 's/^\\(.*swap.*\\)$/#\\1/' /etc/fstab\n")),(0,i.kt)("h2",{id:"configure-kernel-parameters"},"Configure kernel parameters"),(0,i.kt)("p",null,"Configure the kernel parameters as follows. You can also adjust them according to your environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"modprobe br_netfilter\n\ncat <<EOF >  /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.bridge.bridge-nf-call-arptables = 1\nnet.core.somaxconn = 32768\nvm.swappiness = 0\nnet.ipv4.tcp_syncookies = 0\nnet.ipv4.ip_forward = 1\nfs.file-max = 1000000\nfs.inotify.max_user_watches = 1048576\nfs.inotify.max_user_instances = 1024\nnet.ipv4.conf.all.rp_filter = 1\nnet.ipv4.neigh.default.gc_thresh1 = 80000\nnet.ipv4.neigh.default.gc_thresh2 = 90000\nnet.ipv4.neigh.default.gc_thresh3 = 100000\nEOF\n\nsysctl --system\n")),(0,i.kt)("h2",{id:"configure-the-irqbalance-service"},"Configure the Irqbalance service"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/performance_tuning_guide/sect-red_hat_enterprise_linux-performance_tuning_guide-tool_reference-irqbalance"},"Irqbalance")," service binds the interrupts of each equipment to different CPUs respectively. This avoids the performance bottleneck when all interrupt requests are sent to the same CPU."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable irqbalance\nsystemctl start irqbalance\n")),(0,i.kt)("h2",{id:"configure-the-cpufreq-governor-mode"},"Configure the CPUfreq governor mode"),(0,i.kt)("p",null,"To make full use of CPU performance, set the CPUfreq governor mode to ",(0,i.kt)("inlineCode",{parentName:"p"},"performance"),". For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/v4.0/online-deployment-using-ansible#step-7-configure-the-cpufreq-governor-mode-on-the-target-machine"},"Configure the CPUfreq governor mode on the target machine"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cpupower frequency-set --governor performance\n")),(0,i.kt)("h2",{id:"configure-ulimit"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h2"},"ulimit")),(0,i.kt)("p",null,"The TiDB cluster uses many file descriptors by default. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ulimit")," of the worker node must be greater than or equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"1048576"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF >>  /etc/security/limits.conf\nroot        soft        nofile        1048576\nroot        hard        nofile        1048576\nroot        soft        stack         10240\nEOF\nsysctl --system\n")),(0,i.kt)("h2",{id:"docker-service"},"Docker service"),(0,i.kt)("p",null,"It is recommended to install Docker CE 18.09.6 or later versions. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/centos/"},"Install Docker")," for details."),(0,i.kt)("p",null,"After the installation, take the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the Docker data to a separate disk. The data mainly contains images and the container logs. To implement this, set the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/daemon/systemd/#runtime-directory-and-storage-driver"},(0,i.kt)("inlineCode",{parentName:"a"},"--data-root"))," parameter:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cat > /etc/docker/daemon.json <<EOF\n{\n  "exec-opts": ["native.cgroupdriver=systemd"],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "100m"\n  },\n  "storage-driver": "overlay2",\n  "storage-opts": [\n    "overlay2.override_kernel_check=true"\n  ],\n  "data-root": "/data1/docker"\n}\nEOF\n')),(0,i.kt)("p",{parentName:"li"},"The above command sets the data directory of Docker to ",(0,i.kt)("inlineCode",{parentName:"p"},"/data1/docker"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"ulimit")," for the Docker daemon:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the systemd drop-in directory for the docker service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /etc/systemd/system/docker.service.d\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a file named as ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/docker.service.d/limit-nofile.conf"),", and configure the value of the  ",(0,i.kt)("inlineCode",{parentName:"p"},"LimitNOFILE")," parameter. The value must be a number equal to or greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"1048576"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat > /etc/systemd/system/docker.service.d/limit-nofile.conf <<EOF\n[Service]\nLimitNOFILE=1048576\nEOF\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"DO NOT set the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"LimitNOFILE")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"infinity"),". Due to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/systemd/systemd/commit/6385cb31ef443be3e0d6da5ea62a267a49174688#diff-108b33cf1bd0765d116dd401376ca356L1186"},"a bug of ",(0,i.kt)("inlineCode",{parentName:"a"},"systemd")),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"infinity")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," in some versions is ",(0,i.kt)("inlineCode",{parentName:"p"},"65536"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reload the configuration."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload && systemctl restart docker\n")))))),(0,i.kt)("h2",{id:"kubernetes-service"},"Kubernetes service"),(0,i.kt)("p",null,"To deploy a multi-master, highly available cluster, see ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/"},"Kubernetes documentation"),"."),(0,i.kt)("p",null,"The configuration of the Kubernetes master depends on the number of nodes. More nodes consumes more resources. You can adjust the number of nodes as needed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Nodes in a Kubernetes cluster"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Kubernetes master configuration"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1-5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1vCPUs 4GB Memory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"6-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2vCPUs 8GB Memory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"11-100"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4vCPUs 16GB Memory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"101-250"),(0,i.kt)("td",{parentName:"tr",align:"left"},"8vCPUs 32GB Memory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"251-500"),(0,i.kt)("td",{parentName:"tr",align:"left"},"16vCPUs 64GB Memory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"501-5000"),(0,i.kt)("td",{parentName:"tr",align:"left"},"32vCPUs 128GB Memory")))),(0,i.kt)("p",null,"After Kubelet is installed, take the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the Kubelet data to a separate disk (it can share the same disk with Docker). The data mainly contains the data used by ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/#emptydir"},"emptyDir"),". To implement this, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"--root-dir")," parameter:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'echo "KUBELET_EXTRA_ARGS=--root-dir=/data1/kubelet" > /etc/sysconfig/kubelet\nsystemctl restart kubelet\n')),(0,i.kt)("p",{parentName:"li"},"The above command sets the data directory of Kubelet to ",(0,i.kt)("inlineCode",{parentName:"p"},"/data1/kubelet"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/"},"Reserve compute resources")," by using Kubelet, to ensure that the system process of the machine and the kernel process of Kubernetes have enough resources for operation in heavy workloads. This maintains the stability of the entire system."))),(0,i.kt)("h2",{id:"tidb-clusters-requirements-for-resources"},"TiDB cluster's requirements for resources"),(0,i.kt)("p",null,"To determine the machine configuration, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/v4.0/hardware-and-software-requirements#production-environment"},"Server recommendations"),"."),(0,i.kt)("p",null,"In a production environment, avoid deploying TiDB instances on a kubernetes master, or deploy as few TiDB instances as possible. Due to the NIC bandwidth, if the NIC of the master node works at full capacity, the heartbeat report between the worker node and the master node will be affected and might lead to serious problems."))}u.isMDXComponent=!0}}]);