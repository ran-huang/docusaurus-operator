"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[1981],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),k=r,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(m,p(p({ref:t},s),{},{components:a})):n.createElement(m,p({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5346:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return k}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),p=["components"],i={title:"Back up Data to GCS Using BR",summary:"Learn how to back up data to Google Cloud Storage (GCS) using BR."},l="Back up Data to GCS Using BR",c={unversionedId:"backup-to-gcs-using-br",id:"backup-to-gcs-using-br",title:"Back up Data to GCS Using BR",description:"This document describes how to back up the data of a TiDB cluster in Kubernetes to Google Cloud Storage (GCS).",source:"@site/docs/backup-to-gcs-using-br.md",sourceDirName:".",slug:"/backup-to-gcs-using-br",permalink:"/backup-to-gcs-using-br",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backup-to-gcs-using-br.md",tags:[],version:"current",frontMatter:{title:"Back up Data to GCS Using BR",summary:"Learn how to back up data to Google Cloud Storage (GCS) using BR."},sidebar:"mySidebar",previous:{title:"Restore Data from S3-Compatible Storage Using TiDB Lightning",permalink:"/restore-from-s3"},next:{title:"Restore Data from GCS Using BR",permalink:"/restore-from-gcs-using-br"}},s={},u=[{value:"User scenarios",id:"user-scenarios",level:2},{value:"Ad-hoc backup",id:"ad-hoc-backup",level:2},{value:"Step 1: Prepare for an ad-hoc backup",id:"step-1-prepare-for-an-ad-hoc-backup",level:3},{value:"Step 2: Perform an ad-hoc backup",id:"step-2-perform-an-ad-hoc-backup",level:3},{value:"Scheduled full backup",id:"scheduled-full-backup",level:2},{value:"Step 1: Prepare for a scheduled full backup",id:"step-1-prepare-for-a-scheduled-full-backup",level:3},{value:"Step 2: Perform a scheduled full backup",id:"step-2-perform-a-scheduled-full-backup",level:3},{value:"Delete the backup CR",id:"delete-the-backup-cr",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"back-up-data-to-gcs-using-br"},"Back up Data to GCS Using BR"),(0,o.kt)("p",null,"This document describes how to back up the data of a TiDB cluster in Kubernetes to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/"},"Google Cloud Storage")," (GCS)."),(0,o.kt)("p",null,"The backup method described in this document is implemented based on CustomResourceDefinition (CRD) in TiDB Operator. For the underlying implementation, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/backup-and-restore-tool"},"BR")," is used to get the backup data of the TiDB cluster, and then send the data to the AWS storage. BR stands for Backup & Restore, which is a command-line tool for distributed backup and recovery of the TiDB cluster data."),(0,o.kt)("h2",{id:"user-scenarios"},"User scenarios"),(0,o.kt)("p",null,"If you have the following backup needs, you can use BR to make an ",(0,o.kt)("a",{parentName:"p",href:"#ad-hoc-backup"},"ad-hoc backup")," or ",(0,o.kt)("a",{parentName:"p",href:"#scheduled-full-backup"},"scheduled full backup")," of the TiDB cluster data to GCS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To back up a large volume of data at a fast speed"),(0,o.kt)("li",{parentName:"ul"},"To get a direct backup of data as SST files (key-value pairs)")),(0,o.kt)("p",null,"For other backup needs, refer to ",(0,o.kt)("a",{parentName:"p",href:"/backup-restore-overview"},"Backup and Restore Overview")," to choose an appropriate backup method."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"BR is only applicable to TiDB v3.1 or later releases."),(0,o.kt)("li",{parentName:"ul"},"Data that is backed up using BR can only be restored to TiDB instead of other databases.")))),(0,o.kt)("h2",{id:"ad-hoc-backup"},"Ad-hoc backup"),(0,o.kt)("p",null,"Ad-hoc backup supports both full backup and incremental backup."),(0,o.kt)("p",null,"To get an Ad-hoc backup, you need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," Custom Resource (CR) object to describe the backup details. Then, TiDB Operator performs the specific backup operation based on this ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," object. If an error occurs during the backup process, TiDB Operator does not retry, and you need to handle this error manually."),(0,o.kt)("p",null,"This document provides an example about how to back up the data of the ",(0,o.kt)("inlineCode",{parentName:"p"},"demo1")," TiDB cluster in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test1")," Kubernetes namespace to GCS. The following are the detailed steps."),(0,o.kt)("h3",{id:"step-1-prepare-for-an-ad-hoc-backup"},"Step 1: Prepare for an ad-hoc backup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pingcap/tidb-operator/blob/v1.2.0/manifests/backup/backup-rbac.yaml"},"backup-rbac.yaml"),", and execute the following command to create the role-based access control (RBAC) resources in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test1")," namespace:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f backup-rbac.yaml -n test1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Grant permissions to the remote storage."),(0,o.kt)("p",{parentName:"li"},"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/grant-permissions-to-remote-storage#gcs-account-permissions"},"GCS account permissions"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For a TiDB version earlier than v4.0.8, you also need to complete the following preparation steps. For TiDB v4.0.8 or a later version, skip these preparation steps."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UPDATE")," privileges on the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.tidb")," table of the backup database so that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," CR can adjust the GC time before and after the backup.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"backup-demo1-tidb-secret")," secret to store the root account and password to access the TiDB cluster:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic backup-demo1-tidb-secret --from-literal=password=<password> --namespace=test1\n")))))),(0,o.kt)("h3",{id:"step-2-perform-an-ad-hoc-backup"},"Step 2: Perform an ad-hoc backup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," CR to back up cluster data to GCS as described below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f backup-gcs.yaml\n")),(0,o.kt)("p",{parentName:"li"},"The content of ",(0,o.kt)("inlineCode",{parentName:"p"},"backup-gcs.yaml")," is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: pingcap.com/v1alpha1\nkind: Backup\nmetadata:\n  name: demo1-backup-gcs\n  namespace: test1\nspec:\n  # backupType: full\n  # Only needed for TiDB Operator < v1.1.10 or TiDB < v4.0.8\n  from:\n    host: ${tidb-host}\n    port: ${tidb-port}\n    user: ${tidb-user}\n    secretName: backup-demo1-tidb-secret\n  br:\n    cluster: demo1\n    clusterNamespace: test1\n    # logLevel: info\n    # statusAddr: ${status-addr}\n    # concurrency: 4\n    # rateLimit: 0\n    # checksum: true\n    # sendCredToTikv: true\n    # options:\n    # - --lastbackupts=420134118382108673\n  gcs:\n    projectId: ${project_id}\n    secretName: gcs-secret\n    bucket: ${bucket}\n    prefix: ${prefix}\n    # location: us-east1\n    # storageClass: STANDARD_IA\n    # objectAcl: private\n")),(0,o.kt)("p",{parentName:"li"},"When configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"backup-gcs.yaml"),", note the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Since TiDB Operator v1.1.6, if you want to back up data incrementally, you only need to specify the last backup timestamp ",(0,o.kt)("inlineCode",{parentName:"li"},"--lastbackupts")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.br.options"),". For the limitations of incremental backup, refer to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/stable/backup-and-restore-tool#back-up-incremental-data"},"Use BR to Back up and Restore Data"),"."),(0,o.kt)("li",{parentName:"ul"},"Some parameters in ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.br")," are optional, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"logLevel")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"statusAddr"),". For more information about BR configuration, refer to ",(0,o.kt)("a",{parentName:"li",href:"/backup-restore-overview#br-fields"},"BR fields"),"."),(0,o.kt)("li",{parentName:"ul"},"Some parameters in ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.gcs")," are optional, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"location"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"objectAcl"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"storageClass"),". For more information about GCS configuration, refer to ",(0,o.kt)("a",{parentName:"li",href:"/backup-restore-overview#gcs-fields"},"GCS fields"),"."),(0,o.kt)("li",{parentName:"ul"},"For v4.0.8 or a later version, BR can automatically adjust ",(0,o.kt)("inlineCode",{parentName:"li"},"tikv_gc_life_time"),". You do not need to configure ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.tikvGCLifeTime")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.from")," fields in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Backup")," CR."),(0,o.kt)("li",{parentName:"ul"},"For more information about the ",(0,o.kt)("inlineCode",{parentName:"li"},"Backup")," CR fields, refer to ",(0,o.kt)("a",{parentName:"li",href:"/backup-restore-overview#backup-cr-fields"},"Backup CR fields"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," CR, TiDB Operator starts the backup automatically. You can view the backup status by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get bk -n test1 -owide\n")))),(0,o.kt)("h2",{id:"scheduled-full-backup"},"Scheduled full backup"),(0,o.kt)("p",null,"You can set a backup policy to perform scheduled backups of the TiDB cluster, and set a backup retention policy to avoid excessive backup items. A scheduled full backup is described by a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"BackupSchedule")," CR object. A full backup is triggered at each backup time point. Its underlying implementation is the ad-hoc full backup."),(0,o.kt)("h3",{id:"step-1-prepare-for-a-scheduled-full-backup"},"Step 1: Prepare for a scheduled full backup"),(0,o.kt)("p",null,"The steps to prepare for a scheduled full backup are the same as that of ",(0,o.kt)("a",{parentName:"p",href:"#step-1-prepare-for-an-ad-hoc-backup"},"Prepare for an ad-hoc backup"),"."),(0,o.kt)("h3",{id:"step-2-perform-a-scheduled-full-backup"},"Step 2: Perform a scheduled full backup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"BackupSchedule")," CR to back up cluster data as described below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f backup-schedule-gcs.yaml\n")),(0,o.kt)("p",{parentName:"li"},"The content of ",(0,o.kt)("inlineCode",{parentName:"p"},"backup-schedule-gcs.yaml")," is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: pingcap.com/v1alpha1\nkind: BackupSchedule\nmetadata:\n  name: demo1-backup-schedule-gcs\n  namespace: test1\nspec:\n  #maxBackups: 5\n  #pause: true\n  maxReservedTime: "3h"\n  schedule: "*/2 * * * *"\n  backupTemplate:\n    # Only needed for TiDB Operator < v1.1.10 or TiDB < v4.0.8\n    from:\n      host: ${tidb_host}\n      port: ${tidb_port}\n      user: ${tidb_user}\n      secretName: backup-demo1-tidb-secret\n    br:\n      cluster: demo1\n      clusterNamespace: test1\n      # logLevel: info\n      # statusAddr: ${status-addr}\n      # concurrency: 4\n      # rateLimit: 0\n      # checksum: true\n      # sendCredToTikv: true\n    gcs:\n      secretName: gcs-secret\n      projectId: ${project_id}\n      bucket: ${bucket}\n      prefix: ${prefix}\n      # location: us-east1\n      # storageClass: STANDARD_IA\n      # objectAcl: private\n')),(0,o.kt)("p",{parentName:"li"},"From the above in ",(0,o.kt)("inlineCode",{parentName:"p"},"backup-schedule-gcs.yaml"),", you can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"backupSchedule")," configuration consists of two parts. One is the unique configuration of ",(0,o.kt)("inlineCode",{parentName:"p"},"backupSchedule"),", and the other is ",(0,o.kt)("inlineCode",{parentName:"p"},"backupTemplate"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For the unique configuration of ",(0,o.kt)("inlineCode",{parentName:"li"},"backupSchedule"),", refer to ",(0,o.kt)("a",{parentName:"li",href:"/backup-restore-overview#backupschedule-cr-fields"},"BackupSchedule CR fields"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backupTemplate")," specifies the configuration related to the cluster and remote storage, which is the same as the ",(0,o.kt)("inlineCode",{parentName:"li"},"spec")," configuration of ",(0,o.kt)("a",{parentName:"li",href:"/backup-restore-overview#backup-cr-fields"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"Backup")," CR"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After creating the scheduled full backup, use the following command to check the backup status:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get bks -n test1 -owide\n")),(0,o.kt)("p",{parentName:"li"},"Use the following command to check all the backup items:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get bk -l tidb.pingcap.com/backup-schedule=demo1-backup-schedule-gcs -n test1\n")))),(0,o.kt)("h2",{id:"delete-the-backup-cr"},"Delete the backup CR"),(0,o.kt)("p",null,"If you no longer need the backup CR, refer to ",(0,o.kt)("a",{parentName:"p",href:"/backup-restore-overview#delete-the-backup-cr"},"Delete the Backup CR"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you encounter any problem during the backup process, refer to ",(0,o.kt)("a",{parentName:"p",href:"/deploy-failures"},"Common Deployment Failures"),"."))}k.isMDXComponent=!0}}]);