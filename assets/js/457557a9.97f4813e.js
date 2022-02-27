"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[1929],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3204:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={title:"Configuration of tidb-backup Chart",summary:"Learn the configurations of the tidb-backup chart."},l="Configuration of tidb-backup Chart",p={unversionedId:"configure-backup",id:"configure-backup",title:"Configuration of tidb-backup Chart",description:"tidb-backup is a helm chart used for backing up and restoring TiDB clusters in Kubernetes. This document describes the configuration of tidb-backup.",source:"@site/docs/configure-backup.md",sourceDirName:".",slug:"/configure-backup",permalink:"/docusaurus-operator/configure-backup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configure-backup.md",tags:[],version:"current",frontMatter:{title:"Configuration of tidb-backup Chart",summary:"Learn the configurations of the tidb-backup chart."},sidebar:"refSidebar",previous:{title:"Configuration of tidb-cluster Chart",permalink:"/docusaurus-operator/tidb-cluster-chart-config"},next:{title:"TiDB Log Collection in Kubernetes",permalink:"/docusaurus-operator/logs-collection"}},u={},s=[{value:"Configuration",id:"configuration",level:2},{value:"<code>mode</code>",id:"mode",level:3},{value:"<code>clusterName</code>",id:"clustername",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>secretName</code>",id:"secretname",level:3},{value:"<code>storage.className</code>",id:"storageclassname",level:3},{value:"<code>storage.size</code>",id:"storagesize",level:3},{value:"<code>backupOptions</code>",id:"backupoptions",level:3},{value:"<code>restoreOptions</code>",id:"restoreoptions",level:3},{value:"<code>gcp.bucket</code>",id:"gcpbucket",level:3},{value:"<code>gcp.secretName</code>",id:"gcpsecretname",level:3},{value:"<code>ceph.endpoint</code>",id:"cephendpoint",level:3},{value:"<code>ceph.bucket</code>",id:"cephbucket",level:3},{value:"<code>ceph.secretName</code>",id:"cephsecretname",level:3}],d={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-of-tidb-backup-chart"},"Configuration of tidb-backup Chart"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tidb-backup")," is a helm chart used for backing up and restoring TiDB clusters in Kubernetes. This document describes the configuration of ",(0,o.kt)("inlineCode",{parentName:"p"},"tidb-backup"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For TiDB Operator v1.1 and later versions, it is recommended not to use the tidb-backup chart to deploy and manage the TiDB cluster backup. For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-operator/notes-tidb-operator-v1.1"},"Notes for TiDB Operator v1.1"),"."))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"mode"},(0,o.kt)("inlineCode",{parentName:"h3"},"mode")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The operating mode"),(0,o.kt)("li",{parentName:"ul"},'Default: "backup"'),(0,o.kt)("li",{parentName:"ul"},"Options: ",(0,o.kt)("inlineCode",{parentName:"li"},"backup")," (for backing up the data of a cluster) or ",(0,o.kt)("inlineCode",{parentName:"li"},"restore")," (for restoring the data of a cluster)")),(0,o.kt)("h3",{id:"clustername"},(0,o.kt)("inlineCode",{parentName:"h3"},"clusterName")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the target cluster"),(0,o.kt)("li",{parentName:"ul"},'Default: "demo"'),(0,o.kt)("li",{parentName:"ul"},"The name of the TiDB cluster from which data is backed up or to which data is restored")),(0,o.kt)("h3",{id:"name"},(0,o.kt)("inlineCode",{parentName:"h3"},"name")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the backup"),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},'"fullbackup-{{ date "200601021504" .Release.Time }}"'),". ",(0,o.kt)("inlineCode",{parentName:"li"},"date")," is the starting time of the backup, which is accurate to minute.")),(0,o.kt)("h3",{id:"secretname"},(0,o.kt)("inlineCode",{parentName:"h3"},"secretName")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," which stores the credential of the target cluster. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes Secret")," for reference.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Default: "backup-secret"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic backup-secret -n ${namespace} --from-literal=user=root --from-literal=password=${password}\n")))),(0,o.kt)("h3",{id:"storageclassname"},(0,o.kt)("inlineCode",{parentName:"h3"},"storage.className")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"StorageClass")," is used to store backup data."),(0,o.kt)("li",{parentName:"ul"},'Default: "local-storage"'),(0,o.kt)("li",{parentName:"ul"},"The backup job needs a Persistent Volume (PV) to store the backup data. You must ensure that ",(0,o.kt)("inlineCode",{parentName:"li"},"StorageClass")," is available in your Kubernetes cluster.")),(0,o.kt)("h3",{id:"storagesize"},(0,o.kt)("inlineCode",{parentName:"h3"},"storage.size")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The storage size of the Persistence Volume"),(0,o.kt)("li",{parentName:"ul"},'Default: "100Gi"')),(0,o.kt)("h3",{id:"backupoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"backupOptions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The optional parameter specified to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/maxbube/mydumper/blob/master/docs/mydumper_usage.rst#options"},(0,o.kt)("inlineCode",{parentName:"a"},"mydumper"))," used when backing up data"),(0,o.kt)("li",{parentName:"ul"},'Default: "--chunk-filesize=100"')),(0,o.kt)("h3",{id:"restoreoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"restoreOptions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The optional parameter specified to ",(0,o.kt)("a",{parentName:"li",href:"https://pingcap.com/docs/stable/reference/tools/loader"},(0,o.kt)("inlineCode",{parentName:"a"},"loader"))," used when backing up data"),(0,o.kt)("li",{parentName:"ul"},'Default: "-t 16"')),(0,o.kt)("h3",{id:"gcpbucket"},(0,o.kt)("inlineCode",{parentName:"h3"},"gcp.bucket")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the GCP bucket used to store backup data"),(0,o.kt)("li",{parentName:"ul"},'Default: ""')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once you set any variable under the ",(0,o.kt)("inlineCode",{parentName:"p"},"gcp")," section, the backup data will be uploaded to Google Cloud Storage, which means that you must keep the configuration intact."))),(0,o.kt)("h3",{id:"gcpsecretname"},(0,o.kt)("inlineCode",{parentName:"h3"},"gcp.secretName")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," that stores the credential of Google Cloud Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Default: ""')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually"},"Google Cloud Documentation")," to download the credential file and create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," by the running following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic gcp-backup-secret -n ${namespace} --from-file=./credentials.json\n")))),(0,o.kt)("h3",{id:"cephendpoint"},(0,o.kt)("inlineCode",{parentName:"h3"},"ceph.endpoint")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The endpoint of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ceph")," object storage"),(0,o.kt)("li",{parentName:"ul"},'Default: ""')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once you set any variable under the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph")," section, the backup data will be uploaded to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph")," object storage, which means that you must keep the configuration intact."))),(0,o.kt)("h3",{id:"cephbucket"},(0,o.kt)("inlineCode",{parentName:"h3"},"ceph.bucket")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The bucket name of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ceph")," object storage"),(0,o.kt)("li",{parentName:"ul"},'Default: ""')),(0,o.kt)("h3",{id:"cephsecretname"},(0,o.kt)("inlineCode",{parentName:"h3"},"ceph.secretName")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," that stores the credential of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph")," object store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Default: ""')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic ceph-backup-secret -n ${namespace} --from-literal=access_key=${access_key} --from-literal=secret_key=${secret_key}\n")))))}m.isMDXComponent=!0}}]);