"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[7113],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||n;return r?a.createElement(g,p(p({ref:t},s),{},{components:r})):a.createElement(g,p({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var d=2;d<n;d++)p[d]=r[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},522:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return s},toc:function(){return c},default:function(){return u}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),p=["components"],i={title:"Upgrade TiDB Operator",summary:"Learn how to perform online upgrade and offline upgrade to TiDB Operator in the Kubernetes cluster."},l="Upgrade TiDB Operator",d={unversionedId:"upgrade-tidb-operator",id:"upgrade-tidb-operator",title:"Upgrade TiDB Operator",description:"This document describes how to upgrade TiDB Operator to a specific version. You can choose either online upgrade or offline upgrade.",source:"@site/docs/upgrade-tidb-operator.md",sourceDirName:".",slug:"/upgrade-tidb-operator",permalink:"/upgrade-tidb-operator",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/upgrade-tidb-operator.md",tags:[],version:"current",frontMatter:{title:"Upgrade TiDB Operator",summary:"Learn how to perform online upgrade and offline upgrade to TiDB Operator in the Kubernetes cluster."},sidebar:"mySidebar",previous:{title:"Upgrade a TiDB Cluster in Kubernetes",permalink:"/upgrade-a-tidb-cluster"},next:{title:"Perform a Canary Upgrade on TiDB Operator",permalink:"/canary-upgrade-tidb-operator"}},s={},c=[{value:"Online upgrade",id:"online-upgrade",level:2},{value:"offline upgrade",id:"offline-upgrade",level:2}],m={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,p);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upgrade-tidb-operator"},"Upgrade TiDB Operator"),(0,n.kt)("p",null,"This document describes how to upgrade TiDB Operator to a specific version. You can choose either ",(0,n.kt)("a",{parentName:"p",href:"#online-upgrade"},"online upgrade")," or ",(0,n.kt)("a",{parentName:"p",href:"#offline-upgrade"},"offline upgrade"),"."),(0,n.kt)("h2",{id:"online-upgrade"},"Online upgrade"),(0,n.kt)("p",null,"If your server has access to the internet, you can perform online upgrade by taking the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before upgrading TiDB Operator, make sure that the Helm repo contains the TiDB Operator version you want to upgrade to. To check the TiDB Operator versions in the Helm repo, run the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo -l tidb-operator\n")),(0,n.kt)("p",{parentName:"li"},"If the command output does not include the version you need, update the repo using the ",(0,n.kt)("inlineCode",{parentName:"p"},"helm repo update")," command. For details, refer to ",(0,n.kt)("a",{parentName:"p",href:"/tidb-toolkit#configure-the-helm-repo"},"Configure the Help repo"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/"},"CustomResourceDefinition")," (CRD) for Kubernetes:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/v1.2.7/manifests/crd.yaml && \\\nkubectl get crd tidbclusters.pingcap.com\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get the ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file of the ",(0,n.kt)("inlineCode",{parentName:"p"},"tidb-operator")," chart:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ${HOME}/tidb-operator/v1.2.7 && \\\nhelm inspect values pingcap/tidb-operator --version=v1.2.7 > ${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml")," file, modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"operatorImage")," version to the new TiDB Operator version.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you have added customized configuration in the old ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file, merge your customized configuration to the ",(0,n.kt)("inlineCode",{parentName:"p"},"${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml")," file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Perform upgrade:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade tidb-operator pingcap/tidb-operator --version=v1.2.7 -f ${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After all the Pods start normally, check the image of TiDB Operator:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n tidb-admin -l app.kubernetes.io/instance=tidb-operator -o yaml | grep 'image:.*operator:'\n")),(0,n.kt)("p",{parentName:"li"},"If you see a similar output as follows, TiDB Operator is successfully upgraded. ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.2.7")," represents the TiDB Operator version you have upgraded to."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"image: pingcap/tidb-operator:v1.2.7\nimage: docker.io/pingcap/tidb-operator:v1.2.7\nimage: pingcap/tidb-operator:v1.2.7\nimage: docker.io/pingcap/tidb-operator:v1.2.7\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"After TiDB Operator is upgraded, the ",(0,n.kt)("inlineCode",{parentName:"p"},"discovery")," Deployment in all TiDB clusters is automatically upgraded to the corresponding version of TiDB Operator.")))),(0,n.kt)("h2",{id:"offline-upgrade"},"offline upgrade"),(0,n.kt)("p",null,"If your server cannot access the Internet, you can offline upgrade by taking the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the files and images required for the upgrade using a machine with Internet access:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("inlineCode",{parentName:"p"},"crd.yaml")," file for the new TiDB Operator version. For more information about CRD, see ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/"},"CustomResourceDefinition"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/pingcap/tidb-operator/v1.2.7/manifests/crd.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("inlineCode",{parentName:"p"},"tidb-operator")," chart package file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://charts.pingcap.org/tidb-operator-v1.2.7.tgz\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the Docker images required for the new TiDB Operator version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull pingcap/tidb-operator:v1.2.7\ndocker pull pingcap/tidb-backup-manager:v1.2.7\n\ndocker save -o tidb-operator-v1.2.7.tar pingcap/tidb-operator:v1.2.7\ndocker save -o tidb-backup-manager-v1.2.7.tar pingcap/tidb-backup-manager:v1.2.7\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload the downloaded files and images to the server where TiDB Operator is deployed, and install the new TiDB Operator version:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"crd.yaml")," file for TiDB Operator:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl replace -f ./crd.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Unpack the ",(0,n.kt)("inlineCode",{parentName:"p"},"tidb-operator")," chart package file, and copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to the directory of the new TiDB Operator:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tar zxvf tidb-operator-v1.2.7.tgz && \\\nmkdir -p ${HOME}/tidb-operator/v1.2.7 && \\\ncp tidb-operator/values.yaml ${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the Docker images on the server:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker load -i tidb-operator-v1.2.7.tar && \\\ndocker load -i tidb-backup-manager-v1.2.7.tar\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml")," file, modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"operatorImage")," version to the new TiDB Operator version.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you have added customized configuration in the old ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file, merge your customized configuration to the ",(0,n.kt)("inlineCode",{parentName:"p"},"${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml")," file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Perform upgrade:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade tidb-operator ./tidb-operator --version=v1.2.7 -f ${HOME}/tidb-operator/v1.2.7/values-tidb-operator.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After all the Pods start normally, check the image version of TiDB Operator:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n tidb-admin -l app.kubernetes.io/instance=tidb-operator -o yaml | grep 'image:.*operator:'\n")),(0,n.kt)("p",{parentName:"li"},"If you see a similar output as follows, TiDB Operator is successfully upgraded. ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.2.7")," represents the TiDB Operator version you have upgraded to."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"image: pingcap/tidb-operator:v1.2.7\nimage: docker.io/pingcap/tidb-operator:v1.2.7\nimage: pingcap/tidb-operator:v1.2.7\nimage: docker.io/pingcap/tidb-operator:v1.2.7\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",{parentName:"blockquote"},"After TiDB Operator is upgraded, the ",(0,n.kt)("inlineCode",{parentName:"p"},"discovery")," Deployment in all TiDB clusters is automatically upgraded to the corresponding version of TiDB Operator.")))))}u.isMDXComponent=!0}}]);