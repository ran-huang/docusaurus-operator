"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[3133],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3108:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={title:"Initialize a TiDB Cluster in Kubernetes",summary:"Learn how to initialize a TiDB cluster in K8s."},s="Initialize a TiDB Cluster in Kubernetes",c={unversionedId:"initialize-a-cluster",id:"initialize-a-cluster",title:"Initialize a TiDB Cluster in Kubernetes",description:"This document describes how to initialize a TiDB cluster in Kubernetes (K8s), specifically, how to configure the initial account and password and how to initialize the database by executing SQL statements automatically in batch.",source:"@site/docs/initialize-a-cluster.md",sourceDirName:".",slug:"/initialize-a-cluster",permalink:"/initialize-a-cluster",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/initialize-a-cluster.md",tags:[],version:"current",frontMatter:{title:"Initialize a TiDB Cluster in Kubernetes",summary:"Learn how to initialize a TiDB cluster in K8s."},sidebar:"mySidebar",previous:{title:"Deploy TiDB in General Kubernetes",permalink:"/deploy-on-general-kubernetes"},next:{title:"Access the TiDB Cluster in Kubernetes",permalink:"/access-tidb"}},p={},d=[{value:"Configure TidbInitializer",id:"configure-tidbinitializer",level:2},{value:"Set the cluster namespace and name",id:"set-the-cluster-namespace-and-name",level:3},{value:"Set initial account and password",id:"set-initial-account-and-password",level:3},{value:"Set a host that has access to TiDB",id:"set-a-host-that-has-access-to-tidb",level:2},{value:"Initialize SQL statements in batch",id:"initialize-sql-statements-in-batch",level:2},{value:"Initialize the cluster",id:"initialize-the-cluster",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initialize-a-tidb-cluster-in-kubernetes"},"Initialize a TiDB Cluster in Kubernetes"),(0,r.kt)("p",null,"This document describes how to initialize a TiDB cluster in Kubernetes (K8s), specifically, how to configure the initial account and password and how to initialize the database by executing SQL statements automatically in batch."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"After creating the TiDB cluster, if you manually change the password of the ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," account, the initialization will fail."),(0,r.kt)("li",{parentName:"ul"},"The following steps apply only when you have created a cluster for the first time. Further configuration or modification after the initial cluster creation is not valid.")))),(0,r.kt)("h2",{id:"configure-tidbinitializer"},"Configure TidbInitializer"),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/blob/master/manifests/initializer/tidb-initializer.yaml"},"TidbInitializer configuration example"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/blob/master/docs/api-references/docs.md"},"API documentation"),", and the following steps to complete TidbInitializer Custom Resource (CR), and save it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"${cluster_name}/tidb-initializer.yaml")," file. When referring to the TidbInitializer configuration example and API documentation, you need to switch the branch to the TiDB Operator version currently in use."),(0,r.kt)("h3",{id:"set-the-cluster-namespace-and-name"},"Set the cluster namespace and name"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"${cluster_name}/tidb-initializer.yaml")," file, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.cluster.namespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.cluster.name")," fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  # ...\n  cluster:\n    namespace: ${cluster_namespace}\n    name: ${cluster_name}\n")),(0,r.kt)("h3",{id:"set-initial-account-and-password"},"Set initial account and password"),(0,r.kt)("p",null,"When a cluster is created, a default account ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," is created with no password. This might cause security issues. You can set a password for the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," account in the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},(0,r.kt)("inlineCode",{parentName:"a"},"secret"))," to specify the password for ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic tidb-secret --from-literal=root=${root_password} --namespace=${namespace}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to create more than one user, add the desired username and the password in the above command. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic tidb-secret --from-literal=root=${root_password} --from-literal=developer=${developer_password} --namespace=${namespace}\n")),(0,r.kt)("p",{parentName:"li"},"  This command creates ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"developer")," users with their passwords, which are saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tidb-secret")," object. By default, the regular ",(0,r.kt)("inlineCode",{parentName:"p"},"developer")," user is only granted with the ",(0,r.kt)("inlineCode",{parentName:"p"},"USAGE")," privilege. You can set other privileges in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initSql")," configuration item."))),(0,r.kt)("h2",{id:"set-a-host-that-has-access-to-tidb"},"Set a host that has access to TiDB"),(0,r.kt)("p",null,"To set a host that has access to TiDB, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"permitHost: ${mysql_client_host_name}")," configuration item in ",(0,r.kt)("inlineCode",{parentName:"p"},"${cluster_name}/tidb-initializer.yaml"),". If it is not set, all hosts have access to TiDB. For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/grant.html"},"Mysql GRANT host name"),"."),(0,r.kt)("h2",{id:"initialize-sql-statements-in-batch"},"Initialize SQL statements in batch"),(0,r.kt)("p",null,"The cluster can also automatically execute the SQL statements in batch in ",(0,r.kt)("inlineCode",{parentName:"p"},"initSql")," during the initialization. This function can be used to create some databases or tables for the cluster and perform user privilege management operations."),(0,r.kt)("p",null,"For example, the following configuration automatically creates a database named ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," after the cluster creation, and grants the ",(0,r.kt)("inlineCode",{parentName:"p"},"developer")," account full management privileges on ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n...\ninitSql: |-\n    CREATE DATABASE app;\n    GRANT ALL PRIVILEGES ON app.* TO 'developer'@'%';\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently no verification has been implemented for ",(0,r.kt)("inlineCode",{parentName:"p"},"initSql"),". You can create accounts and set passwords in ",(0,r.kt)("inlineCode",{parentName:"p"},"initSql"),", but it is not recommended to do so because passwords created this way are saved as plaintext in the ",(0,r.kt)("inlineCode",{parentName:"p"},"initializer")," job object."))),(0,r.kt)("h2",{id:"initialize-the-cluster"},"Initialize the cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ${cluster_name}/tidb-initializer.yaml --namespace=${namespace}\n")),(0,r.kt)("p",null,"The above command automatically creates an initialized Job. This Job tries to set the initial password for the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," account using the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," object provided. It also tries to create other accounts and passwords, if they are specified."),(0,r.kt)("p",null,"After the initialization, the Pod state becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),". If you log in via MySQL client later, you need to specify the password created by the Job."),(0,r.kt)("p",null,"If the server does not have an external network, you need to download the Docker image used for cluster initialization on a machine with an external network and upload it to the server, and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker load")," to install the Docker image on the server."),(0,r.kt)("p",null,"The following Docker images are used to initialize a TiDB cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tnir/mysqlclient:latest\n")),(0,r.kt)("p",null,"Next, download all these images with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull tnir/mysqlclient:latest\ndocker save -o mysqlclient-latest.tar tnir/mysqlclient:latest\n")),(0,r.kt)("p",null,"Next, upload these Docker images to the server, and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"docker load")," to install these Docker images on the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker load -i mysqlclient-latest.tar\n")))}m.isMDXComponent=!0}}]);