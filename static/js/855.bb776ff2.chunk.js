"use strict";(self.webpackChunksite_gbook=self.webpackChunksite_gbook||[]).push([[855],{2677:function(e,a,s){var i=s(885),r=s(1413),l=s(5987),o=s(1694),t=s.n(o),n=s(2791),c=s(162),d=s(184),f=["as","bsPrefix","className"],v=["className"];var m=n.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,i=e.className,o=(0,l.Z)(e,f);s=(0,c.vE)(s,"col");var n=(0,c.pi)(),d=(0,c.zG)(),v=[],m=[];return n.forEach((function(e){var a,i,r,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var t=e!==d?"-".concat(e):"";a&&v.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=r&&m.push("order".concat(t,"-").concat(r)),null!=i&&m.push("offset".concat(t,"-").concat(i))})),[(0,r.Z)((0,r.Z)({},o),{},{className:t().apply(void 0,[i].concat(v,m))}),{as:a,bsPrefix:s,spans:v}]}(e),o=(0,i.Z)(s,2),n=o[0],m=n.className,u=(0,l.Z)(n,v),p=o[1],b=p.as,x=void 0===b?"div":b,N=p.bsPrefix,h=p.spans;return(0,d.jsx)(x,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:t()(m,!h.length&&N)}))}));m.displayName="Col",a.Z=m},3855:function(e,a,s){s.d(a,{Z:function(){return ae}});var i=s(1413),r=s(5987),l=s(1694),o=s.n(l),t=s(2007),n=s.n(t),c=s(2791),d=s(184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,t=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:o()(t,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,N=void 0!==u&&u,h=e.as,Z=void 0===h?"input":h,y=(0,r.Z)(e,x),j=(0,c.useContext)(p).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,d.jsx)(Z,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:f,id:s||j,className:o()(t,l,m&&"is-valid",N&&"is-invalid")}))}));N.displayName="FormCheckInput";var h=N,Z=["bsPrefix","className","htmlFor"],y=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.htmlFor,n=(0,r.Z)(e,Z),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:t||f,className:o()(l,s)}))}));y.displayName="FormCheckLabel";var j=y;var I=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,t=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,N=void 0!==x&&x,Z=e.isValid,y=void 0!==Z&&Z,P=e.isInvalid,k=void 0!==P&&P,w=e.feedbackTooltip,F=void 0!==w&&w,g=e.feedback,C=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,L=e.label,O=e.children,G=e.as,H=void 0===G?"input":G,_=(0,r.Z)(e,I);l=(0,b.vE)(l,"form-check"),t=(0,b.vE)(t,"form-switch");var M=(0,c.useContext)(p).controlId,A=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),q=!O&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,j),B=(0,d.jsx)(h,(0,i.Z)((0,i.Z)({},_),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:y,isInvalid:k,disabled:N,as:H}));return(0,d.jsx)(p.Provider,{value:A,children:(0,d.jsx)("div",{style:E,className:o()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&t),children:O||(0,d.jsxs)(d.Fragment,{children:[B,q&&(0,d.jsx)(j,{title:S,children:L}),g&&(0,d.jsx)(u,{type:C,tooltip:F,children:g})]})})})}));P.displayName="FormCheck";var k=Object.assign(P,{Input:h,Label:j}),w=s(4942),F=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),g=c.forwardRef((function(e,a){var s,l,t=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,N=void 0!==x&&x,h=e.isInvalid,Z=void 0!==h&&h,y=e.plaintext,j=e.readOnly,I=e.as,P=void 0===I?"input":I,k=(0,r.Z)(e,F),g=(0,c.useContext)(p).controlId;(t=(0,b.vE)(t,"form-control"),y)?s=(0,w.Z)({},"".concat(t,"-plaintext"),!0):(l={},(0,w.Z)(l,t,!0),(0,w.Z)(l,"".concat(t,"-").concat(f),f),s=l);return(0,d.jsx)(P,(0,i.Z)((0,i.Z)({},k),{},{type:n,size:v,ref:a,readOnly:j,id:m||g,className:o()(u,s,N&&"is-valid",Z&&"is-invalid","color"===n&&"".concat(t,"-color"))}))}));g.displayName="FormControl";var C=Object.assign(g,{Feedback:u}),R=(0,s(6543).Z)("form-floating"),E=["controlId","as"],z=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,o=void 0===l?"div":l,t=(0,r.Z)(e,E),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(p.Provider,{value:n,children:(0,d.jsx)(o,(0,i.Z)((0,i.Z)({},t),{},{ref:a}))})}));z.displayName="FormGroup";var S=z,T=s(2677),V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,t=e.bsPrefix,n=e.column,f=e.visuallyHidden,v=e.className,m=e.htmlFor,u=(0,r.Z)(e,V),x=(0,c.useContext)(p).controlId;t=(0,b.vE)(t,"form-label");var N="col-form-label";"string"===typeof n&&(N="".concat(N," ").concat(N,"-").concat(n));var h=o()(v,t,f&&"visually-hidden",n&&N);return m=m||x,n?(0,d.jsx)(T.Z,(0,i.Z)({ref:a,as:"label",className:h,htmlFor:m},u)):(0,d.jsx)(l,(0,i.Z)({ref:a,className:h,htmlFor:m},u))}));L.displayName="FormLabel",L.defaultProps={column:!1,visuallyHidden:!1};var O=L,G=["bsPrefix","className","id"],H=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.id,n=(0,r.Z)(e,G),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:o()(l,s),id:t||f}))}));H.displayName="FormRange";var _=H,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],A=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,t=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,N=(0,r.Z)(e,M),h=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},N),{},{size:t,ref:a,className:o()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));A.displayName="FormSelect";var q=A,B=["bsPrefix","className","as","muted"],D=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.as,n=void 0===t?"small":t,c=e.muted,f=(0,r.Z)(e,B);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:o()(l,s,c&&"text-muted")}))}));D.displayName="FormText";var J=D,K=c.forwardRef((function(e,a){return(0,d.jsx)(k,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));K.displayName="Switch";var Q=Object.assign(K,{Input:k.Input,Label:k.Label}),U=["bsPrefix","className","children","controlId","label"],W=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,t=e.children,n=e.controlId,c=e.label,f=(0,r.Z)(e,U);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(S,(0,i.Z)((0,i.Z)({ref:a,className:o()(l,s),controlId:n},f),{},{children:[t,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));W.displayName="FloatingLabel";var X=W,Y=["className","validated","as"],$={_ref:n().any,validated:n().bool,as:n().elementType},ee=c.forwardRef((function(e,a){var s=e.className,l=e.validated,t=e.as,n=void 0===t?"form":t,c=(0,r.Z)(e,Y);return(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:o()(s,l&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:S,Control:C,Floating:R,Check:k,Switch:Q,Label:O,Text:J,Range:_,Select:q,FloatingLabel:X})},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=855.bb776ff2.chunk.js.map