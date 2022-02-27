"use strict";(self.webpackChunkpingcap_docs=self.webpackChunkpingcap_docs||[]).push([[7698],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),f=r,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||c;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4265:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return f}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),i=["components"],o={title:"Renew and Replace the TLS Certificate",summary:"Learn how to renew and replace TLS certificates between TiDB components."},l="Renew and Replace the TLS Certificate",s={unversionedId:"renew-tls-certificate",id:"renew-tls-certificate",title:"Renew and Replace the TLS Certificate",description:"This document introduces how to renew and replace certificates of the corresponding components before certificates expire, taking TLS certificates between PD, TiKV, and TiDB components in the TiDB cluster as an example.",source:"@site/docs/renew-tls-certificate.md",sourceDirName:".",slug:"/renew-tls-certificate",permalink:"/renew-tls-certificate",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/renew-tls-certificate.md",tags:[],version:"current",frontMatter:{title:"Renew and Replace the TLS Certificate",summary:"Learn how to renew and replace TLS certificates between TiDB components."},sidebar:"mySidebar",previous:{title:"Replicate Data to TLS-enabled Downstream Services",permalink:"/enable-tls-for-ticdc-sink"},next:{title:"Run Containers as a Non-root User",permalink:"/containers-run-as-non-root-user"}},p={},m=[{value:"Renew and replace certificates issued by the <code>cfssl</code> system",id:"renew-and-replace-certificates-issued-by-the-cfssl-system",level:2},{value:"Renew and replace the CA certificate",id:"renew-and-replace-the-ca-certificate",level:3},{value:"Renew and replace certificates between components",id:"renew-and-replace-certificates-between-components",level:3},{value:"Optional: Remove the original CA certificate from the combined CA certificate",id:"optional-remove-the-original-ca-certificate-from-the-combined-ca-certificate",level:3},{value:"Renew and replace the certificate issued by <code>cert-manager</code>",id:"renew-and-replace-the-certificate-issued-by-cert-manager",level:2},{value:"Renew and replace the CA certificate and certificates between components",id:"renew-and-replace-the-ca-certificate-and-certificates-between-components",level:3},{value:"Only renew and replace certificates between components",id:"only-renew-and-replace-certificates-between-components",level:3}],d={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"renew-and-replace-the-tls-certificate"},"Renew and Replace the TLS Certificate"),(0,c.kt)("p",null,"This document introduces how to renew and replace certificates of the corresponding components before certificates expire, taking TLS certificates between PD, TiKV, and TiDB components in the TiDB cluster as an example."),(0,c.kt)("p",null,"If you need to renew and replace certificates between other components in the TiDB cluster, TiDB server-side certificate, or MySQL client-side certificate, you can take similar steps to complete the operation."),(0,c.kt)("p",null,"The renewal and replacement operations in this document assume that the original certificates have not expired. If the original certificates expire or become invalid, to generate new certificates and restart the TiDB cluster, refer to ",(0,c.kt)("a",{parentName:"p",href:"/enable-tls-between-components"},"Enable TLS between TiDB components")," or ",(0,c.kt)("a",{parentName:"p",href:"/enable-tls-for-mysql-client"},"Enable TLS for MySQL client"),"."),(0,c.kt)("h2",{id:"renew-and-replace-certificates-issued-by-the-cfssl-system"},"Renew and replace certificates issued by the ",(0,c.kt)("inlineCode",{parentName:"h2"},"cfssl")," system"),(0,c.kt)("p",null,"If the original TLS certificates are issued by ",(0,c.kt)("a",{parentName:"p",href:"/enable-tls-between-components#using-cfssl"},"the ",(0,c.kt)("inlineCode",{parentName:"a"},"cfssl")," system")," and the original certificates have not expired, you can renew and replace the certificates between PD, TiKV and TiDB components as follows."),(0,c.kt)("h3",{id:"renew-and-replace-the-ca-certificate"},"Renew and replace the CA certificate"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"If you don't need to renew the CA certificate, you can skip the operations in this section and directly refer to ",(0,c.kt)("a",{parentName:"p",href:"#renew-and-replace-certificates-between-components"},"renew and replace certificates between components"),"."))),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Back up the original CA certificate and key."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"mv ca.pem ca.old.pem && \\\nmv ca-key.pem ca-key.old.pem\n"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Generate the new CA certificate and key based on the configuration of the original CA certificate and certificate signing request (CSR)."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"cfssl gencert -initca ca-csr.json | cfssljson -bare ca -\n")),(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")),(0,c.kt)("p",{parentName:"blockquote"},"If necessary, you can update ",(0,c.kt)("inlineCode",{parentName:"p"},"expiry")," in the configuration file and in CSR."))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Back up the new CA certificate and key, and generate a combined CA certificate based on the original CA certificate and the new CA certificate."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"mv ca.pem ca.new.pem && \\\nmv ca-key.pem ca-key.new.pem && \\\ncat ca.new.pem ca.old.pem > ca.pem\n"))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Update each corresponding Kubernetes Secret objects based on the combined CA certificate."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic ${cluster_name}-pd-cluster-secret --namespace=${namespace} --from-file=tls.crt=pd-server.pem --from-file=tls.key=pd-server-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-tikv-cluster-secret --namespace=${namespace} --from-file=tls.crt=tikv-server.pem --from-file=tls.key=tikv-server-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-tidb-cluster-secret --namespace=${namespace} --from-file=tls.crt=tidb-server.pem --from-file=tls.key=tidb-server-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-cluster-client-secret --namespace=${namespace} --from-file=tls.crt=client.pem --from-file=tls.key=client-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\n")),(0,c.kt)("p",{parentName:"li"},"In the above command, ",(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}")," is the name of the cluster, and ",(0,c.kt)("inlineCode",{parentName:"p"},"${namespace}")," is the namespace in which the TiDB cluster is deployed."),(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")),(0,c.kt)("p",{parentName:"blockquote"},"The above command only renews the server-side CA certificate and the client-side CA certificate between PD, TiKV, and TiDB components. If you need to renew the server-side CA certificates for other components, such as TiCDC and TiFlash, you can execute the similar command."))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("a",{parentName:"p",href:"/restart-a-tidb-cluster"},"Perform the rolling restart")," to components that need to load the combined CA certificate."),(0,c.kt)("p",{parentName:"li"},"After the completion of the rolling restart, based on the combined CA certificate, each component can accept the certificate issued by either the original CA certificate or the new CA certificate at the same time."))),(0,c.kt)("h3",{id:"renew-and-replace-certificates-between-components"},"Renew and replace certificates between components"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"Before renewing and replacing certificates between components, make sure that the CA certificate can verify the certificates between components before and after the renewal as valid. If you have ",(0,c.kt)("a",{parentName:"p",href:"#renew-and-replace-the-ca-certificate"},"renewed and replaced the CA certificate"),", make sure that the TiDB cluster is restarted based on the new CA certificate."))),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Generate new server-side and client-side certificates based on the original configuration information of each component."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"cfssl gencert -ca=ca.new.pem -ca-key=ca-key.new.pem -config=ca-config.json -profile=internal pd-server.json | cfssljson -bare pd-server\ncfssl gencert -ca=ca.new.pem -ca-key=ca-key.new.pem -config=ca-config.json -profile=internal tikv-server.json | cfssljson -bare tikv-server\ncfssl gencert -ca=ca.new.pem -ca-key=ca-key.new.pem -config=ca-config.json -profile=internal tidb-server.json | cfssljson -bare tidb-server\ncfssl gencert -ca=ca.new.pem -ca-key=ca-key.new.pem -config=ca-config.json -profile=client client.json | cfssljson -bare client\n")),(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")),(0,c.kt)("ul",{parentName:"blockquote"},(0,c.kt)("li",{parentName:"ul"},"The above command assumes that you have ",(0,c.kt)("a",{parentName:"li",href:"#renew-and-replace-the-tls-certificate"},"renewed and replaced the CA certificate")," and saved the new CA certificate as ",(0,c.kt)("inlineCode",{parentName:"li"},"ca.new.pem")," and the new key as ",(0,c.kt)("inlineCode",{parentName:"li"},"ca-key.new.pem"),". If you have not renewed the CA certificate and the key, modify the corresponding parameters in the command to ",(0,c.kt)("inlineCode",{parentName:"li"},"ca.pem")," and ",(0,c.kt)("inlineCode",{parentName:"li"},"ca-key.pem"),"."),(0,c.kt)("li",{parentName:"ul"},"The above command only generates the server-side and the client-side certificates between PD, TiKV, and TiDB components. If you need to generate the server-side CA certificates for other components, such as TiCDC and TiFlash, you can execute the similar command.")))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Update each corresponding Kubernetes Secret object based on the newly generated server-side and client-side certificates."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic ${cluster_name}-pd-cluster-secret --namespace=${namespace} --from-file=tls.crt=pd-server.pem --from-file=tls.key=pd-server-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-tikv-cluster-secret --namespace=${namespace} --from-file=tls.crt=tikv-server.pem --from-file=tls.key=tikv-server-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-tidb-cluster-secret --namespace=${namespace} --from-file=tls.crt=tidb-server.pem --from-file=tls.key=tidb-server-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-cluster-client-secret --namespace=${namespace} --from-file=tls.crt=client.pem --from-file=tls.key=client-key.pem --from-file=ca.crt=ca.pem --dry-run=client -o yaml | kubectl apply -f -\n")),(0,c.kt)("p",{parentName:"li"},"In the above command, ",(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}")," is the name of the cluster, and ",(0,c.kt)("inlineCode",{parentName:"p"},"${namespace}")," is the namespace in which the TiDB cluster is deployed."),(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")),(0,c.kt)("p",{parentName:"blockquote"}," The above command only renews the server-side and the client-side certificate between PD, TiKV, and TiDB components. If you need to renew the server-side certificates for other components, such as TiCDC and TiFlash, you can execute the similar command."))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("a",{parentName:"p",href:"/restart-a-tidb-cluster"},"Perform the rolling restart")," to components that need to load the new certificates."),(0,c.kt)("p",{parentName:"li"},"After the completion of the rolling restart, each component use the new certificate for TLS communication. If you refer to ",(0,c.kt)("a",{parentName:"p",href:"#renew-and-replace-the-ca-certificate"},"Renew and replace the CA certificate")," and make each component load the combined CA certificate, each component can still accept the certificate issued by the original CA certificate."))),(0,c.kt)("h3",{id:"optional-remove-the-original-ca-certificate-from-the-combined-ca-certificate"},"Optional: Remove the original CA certificate from the combined CA certificate"),(0,c.kt)("p",null,"After you ",(0,c.kt)("a",{parentName:"p",href:"#renew-and-replace-the-ca-certificate"},"renew and replace the combined CA certificate"),", ",(0,c.kt)("a",{parentName:"p",href:"#renew-and-replace-certificates-between-components"},"server-side and client-side certificates between components"),", you might want to remove the original CA certificate (for example, because the CA certificate has expired or the private key is compromised). To remove the original CA certificate, take steps as follows:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Renew the Kubernetes Secret objects based on the new CA certificate."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic ${cluster_name}-pd-cluster-secret --namespace=${namespace} --from-file=tls.crt=pd-server.pem --from-file=tls.key=pd-server-key.pem --from-file=ca.crt=ca.new.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-tikv-cluster-secret --namespace=${namespace} --from-file=tls.crt=tikv-server.pem --from-file=tls.key=tikv-server-key.pem --from-file=ca.crt=ca.new.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-tidb-cluster-secret --namespace=${namespace} --from-file=tls.crt=tidb-server.pem --from-file=tls.key=tidb-server-key.pem --from-file=ca.crt=ca.new.pem --dry-run=client -o yaml | kubectl apply -f -\nkubectl create secret generic ${cluster_name}-cluster-client-secret --namespace=${namespace} --from-file=tls.crt=client.pem --from-file=tls.key=client-key.pem --from-file=ca.crt=ca.new.pem --dry-run=client -o yaml | kubectl apply -f -\n")),(0,c.kt)("p",{parentName:"li"},"In the above command, ",(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}")," is the name of the cluster, and ",(0,c.kt)("inlineCode",{parentName:"p"},"${namespace}")," is the namespace in which the TiDB cluster is deployed."),(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")),(0,c.kt)("ul",{parentName:"blockquote"},(0,c.kt)("li",{parentName:"ul"},"The above command assumes that you have ",(0,c.kt)("a",{parentName:"li",href:"#renew-and-replace-the-tls-certificate"},"renewed and replaced the CA certificate")," and saved the new CA certificate as ",(0,c.kt)("inlineCode",{parentName:"li"},"ca.new.pem"),".")))),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("a",{parentName:"p",href:"/restart-a-tidb-cluster"},"Perform the rolling restart")," to components that need to load the new certificates."),(0,c.kt)("p",{parentName:"li"},"After the completion of the rolling restart, each component can only accept the certificate issued by the new CA certificate."))),(0,c.kt)("h2",{id:"renew-and-replace-the-certificate-issued-by-cert-manager"},"Renew and replace the certificate issued by ",(0,c.kt)("inlineCode",{parentName:"h2"},"cert-manager")),(0,c.kt)("p",null,"If the original TLS certificate is issued by ",(0,c.kt)("a",{parentName:"p",href:"/enable-tls-between-components#using-cert-manager"},"the ",(0,c.kt)("inlineCode",{parentName:"a"},"cert-manager")," system"),", and the original certificate has not expired, the procedure varies with whether to renew the CA certificate."),(0,c.kt)("h3",{id:"renew-and-replace-the-ca-certificate-and-certificates-between-components"},"Renew and replace the CA certificate and certificates between components"),(0,c.kt)("p",null,"When you use ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," to issue the certificate, if you specify the ",(0,c.kt)("inlineCode",{parentName:"p"},"spec.renewBefore")," of the ",(0,c.kt)("inlineCode",{parentName:"p"},"Certificate")," resource, ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," can automatically update the certificate before it expires."),(0,c.kt)("p",null,"Although ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," can automatically renew the CA certificate and the corresponding Kubernetes Secret objects, it currently does not support merging the old and new CA certificates into a combined CA certificate to accept certificates issued by the new and old CA certificates at the same time. Therefore, during the process of renewing and replacing the CA certificate, the cluster components cannot authenticate each other via TLS."),(0,c.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"Because the components cannot accept certificates issued by the new and old CAs at the same time, during the process of renewing and replacing certificates, some components' Pods need to be recreated. This might cause some requests to access the TiDB cluster to fail."))),(0,c.kt)("p",null,"The steps to renew and replace the CA certificates of PD, TiKV, TiDB and certificates between components are as follows."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"The ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," automatically renews the CA certificate and the Kubernetes Secret object ",(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}-ca-secret")," before the certificate expires."),(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}")," is the name of the cluster."),(0,c.kt)("p",{parentName:"li"},"To manually renew the CA certificate, you can directly delete the corresponding Kubernetes Secret objects and trigger ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," to regenerate the CA certificate.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Delete the Kubernetes Secret objects corresponding to the certificate of each component."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete secret ${cluster_name}-pd-cluster-secret --namespace=${namespace}\nkubectl delete secret ${cluster_name}-tikv-cluster-secret --namespace=${namespace}\nkubectl delete secret ${cluster_name}-tidb-cluster-secret --namespace=${namespace}\nkubectl delete secret ${cluster_name}-cluster-client-secret --namespace=${namespace}\n")),(0,c.kt)("p",{parentName:"li"},"In the above command, ",(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}")," is the name of the cluster, and ",(0,c.kt)("inlineCode",{parentName:"p"},"${namespace}")," is the namespace in which the TiDB cluster is deployed.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Wait for ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," to issue new certificates for each component based on the new CA certificate."),(0,c.kt)("p",{parentName:"li"},"Observe the output of ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl get secret --namespace=${namespace}")," until the Kubernetes Secret objects corresponding to all components are created.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Forcibly recreate the Pods of the PD, TiKV, and TiDB components in sequence."),(0,c.kt)("p",{parentName:"li"},"Because ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," does not support combined CA certificates, if you try to perform a rolling update of each component, the Pods using the different CAs to issue certificates cannot communicate with each other via TLS. Therefore, you need to delete the Pods forcibly and recreate the Pods based on the certificate issued by the new CA."),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"kubectl delete -n ${namespace} pod ${pod_name}\n")),(0,c.kt)("p",{parentName:"li"},"In the above command, ",(0,c.kt)("inlineCode",{parentName:"p"},"${namespace}")," is the namespace in which the TiDB cluster is deployed, and ",(0,c.kt)("inlineCode",{parentName:"p"},"${pod_name}")," is the Pod name of each replica of PD, TiKV, and TiDB."))),(0,c.kt)("h3",{id:"only-renew-and-replace-certificates-between-components"},"Only renew and replace certificates between components"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"The ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," automatically updates the certificate of each component and the Kubernetes Secret object before the certificate expires."),(0,c.kt)("p",{parentName:"li"},"For PD, TiKV, and TiDB components, the namespace in which the TiDB cluster is deployed contains the following Kubernetes Secret objects:"),(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"${cluster_name}-pd-cluster-secret\n${cluster_name}-tikv-cluster-secret\n${cluster_name}-tidb-cluster-secret\n${cluster_name}-cluster-client-secret\n")),(0,c.kt)("p",{parentName:"li"},"In the above command, ",(0,c.kt)("inlineCode",{parentName:"p"},"${cluster_name}")," is the name of the cluster."),(0,c.kt)("p",{parentName:"li"},"If you want to manually update the certificate between components, you can directly delete the corresponding Kubernetes Secret objects and trigger ",(0,c.kt)("inlineCode",{parentName:"p"},"cert-manager")," to regenerate the certificate between components.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"For certificates between components, each component automatically reloads the new certificates when creating the new connection later."),(0,c.kt)("blockquote",{parentName:"li"},(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note:")),(0,c.kt)("ul",{parentName:"blockquote"},(0,c.kt)("li",{parentName:"ul"},"Currently, each component does not support ",(0,c.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/stable/enable-tls-between-components#reload-certificates"},"reload CA certificates")," manually\uff0cyou need to refer to ",(0,c.kt)("a",{parentName:"li",href:"#renew-and-replace-the-ca-certificate-and-certificates-between-components"},"renew and replace the CA certificate and certificates between components"),"."),(0,c.kt)("li",{parentName:"ul"},"For the TiDB server-side certificate, you can manually reload by referring to any of the following methods:",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"Refer to ",(0,c.kt)("a",{parentName:"li",href:"https://docs.pingcap.com/tidb/stable/enable-tls-between-clients-and-servers#reload-certificate-key-and-ca"},"Reload certificate, key, and CA"),"."),(0,c.kt)("li",{parentName:"ul"},"Refer to ",(0,c.kt)("a",{parentName:"li",href:"/restart-a-tidb-cluster"},"Rolling restart the TiDB Cluster")," to perform a rolling restart of TiDB server."))))))))}f.isMDXComponent=!0}}]);