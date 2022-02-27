"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[5606],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9206:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Run Containers as a Non-root User",summary:"Learn how to make TiDB Operator related containers run as a non-root user."},u="Run Containers as a Non-root User",c={unversionedId:"containers-run-as-non-root-user",id:"containers-run-as-non-root-user",title:"Run Containers as a Non-root User",description:"In some Kubernetes environments, containers cannot be run as the root user. In this case, you can set securityContext to run containers as a non-root user.",source:"@site/docs/containers-run-as-non-root-user.md",sourceDirName:".",slug:"/containers-run-as-non-root-user",permalink:"/containers-run-as-non-root-user",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/containers-run-as-non-root-user.md",tags:[],version:"current",frontMatter:{title:"Run Containers as a Non-root User",summary:"Learn how to make TiDB Operator related containers run as a non-root user."},sidebar:"mySidebar",previous:{title:"Renew and Replace the TLS Certificate",permalink:"/renew-tls-certificate"},next:{title:"Manually Scale TiDB in Kubernetes",permalink:"/scale-a-tidb-cluster"}},l={},p=[{value:"Configure TiDB Operator containers",id:"configure-tidb-operator-containers",level:2},{value:"Configure containers controlled by CR",id:"configure-containers-controlled-by-cr",level:2}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-containers-as-a-non-root-user"},"Run Containers as a Non-root User"),(0,a.kt)("p",null,"In some Kubernetes environments, containers cannot be run as the root user. In this case, you can set ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod"},(0,a.kt)("inlineCode",{parentName:"a"},"securityContext"))," to run containers as a non-root user."),(0,a.kt)("h2",{id:"configure-tidb-operator-containers"},"Configure TiDB Operator containers"),(0,a.kt)("p",null,"For TiDB Operator containers, you can configure security context in the Helm ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. All TiDB Operator components (at ",(0,a.kt)("inlineCode",{parentName:"p"},"<controllerManager/scheduler/advancedStatefulset/admissionWebhook>.securityContext"),") support this configuration."),(0,a.kt)("p",null,"The following is an example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"controllerManager:\n  securityContext:\n    runAsUser: 1000\n    runAsGroup: 2000\n    fsGroup: 2000\n")),(0,a.kt)("h2",{id:"configure-containers-controlled-by-cr"},"Configure containers controlled by CR"),(0,a.kt)("p",null,"For the containers controlled by Custom Resource (CR), you can configure security context in any CRs (",(0,a.kt)("inlineCode",{parentName:"p"},"TidbCluster"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"DmCluster"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"TidbInitializer"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"TidbMonitor"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Backup"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"BackupSchedule"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Restore"),") to make the containers run as a non-root user."),(0,a.kt)("p",null,"You can use either of the following two types of configuration. If you configure both the cluster level and the component level for a component, only the configuration of the component level takes effect."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure ",(0,a.kt)("inlineCode",{parentName:"p"},"podSecurityContext")," at the cluster level (",(0,a.kt)("inlineCode",{parentName:"p"},"spec.podSecurityContext"),") for all components. The following is an example configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  podSecurityContext:\n    runAsUser: 1000\n    runAsGroup: 2000\n    fsGroup: 2000\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure at the component level for a specific component. For example, configuring  ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.tidb.podSecurityContext")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"TidbCluster"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.master.podSecurityContext")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"DMCluster"),". The following is an example configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  pd:\n    podSecurityContext:\n      runAsUser: 1000\n      runAsGroup: 2000\n      fsGroup: 2000\n  tidb:\n    podSecurityContext:\n      runAsUser: 1000\n      runAsGroup: 2000\n      fsGroup: 2000\n")))))}m.isMDXComponent=!0}}]);