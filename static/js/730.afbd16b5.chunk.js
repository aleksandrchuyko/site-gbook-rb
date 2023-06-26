"use strict";(self.webpackChunksite_gbook=self.webpackChunksite_gbook||[]).push([[730],{8310:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,a=t(885),i=t(2791),s=t(3855),o=t(3360),l=t(9457),u=t(184),d=function(e){var n=e.onSubmit,t=(0,i.useState)(""),r=(0,a.Z)(t,2),d=r[0],c=r[1],m=(0,i.useState)(""),x=(0,a.Z)(m,2),p=x[0],f=x[1],h=function(e){switch(e.currentTarget.name){case"name":c(e.currentTarget.value);break;case"surname":f(e.currentTarget.value);break;default:return}};return(0,u.jsx)(l.Box,{children:(0,u.jsxs)(s.Z,{onSubmit:function(e){e.preventDefault(),n({name:d,surname:p}),c(""),f("")},children:[(0,u.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,u.jsx)(s.Z.Label,{children:"Name"}),(0,u.jsx)(s.Z.Control,{type:"text",name:"name",value:d,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+(?:-[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",autoComplete:"off",required:!0})]}),(0,u.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicSurname",children:[(0,u.jsx)(s.Z.Label,{children:"Surname"}),(0,u.jsx)(s.Z.Control,{type:"text",name:"surname",value:p,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+(?:-[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+)*$",autoComplete:"off",required:!0})]}),(0,u.jsx)(o.Z,{variant:"primary",type:"submit",children:"Add"})]})})},c=t(3313),m=function(e){var n=e.id,t=e.openEditor,r=e.getVisitorById,i=e.handleDelete,s=(0,c.T6)(),l=(0,a.Z)(s,1)[0].isLoading;return(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,{variant:"outline-secondary",size:"sm",type:"button",onClick:function(){r(n),t()},children:"Edit"}),(0,u.jsx)(o.Z,{variant:"outline-secondary",size:"sm",type:"button",disabled:l,onClick:function(){r(n),i()},children:"Delete"})]})},x=(t(481),t(2002)),p=t(168),f=t(6444),h=t(7022),Z=(0,f.ZP)(h.Z)(r||(r=(0,p.Z)(["\n  padding: 0;\n  & table {\n    width: 100%;\n  }\n"]))),j=function(e){var n=e.visitors,t=e.openEditor,r=e.getVisitorById,a=e.handleDelete,i=n.map((function(e){return{id:e._id,name:e.name,surname:e.surname,createdAt:new Date(e.createdAt).toLocaleString(),action:(0,u.jsx)(m,{id:e._id,openEditor:t,getVisitorById:r,handleDelete:a})}}));return(0,u.jsx)(Z,{children:(0,u.jsx)(x.Z,{keyField:"id",data:i,columns:[{dataField:"id",text:"Visitor ID",hidden:!0},{dataField:"name",text:"Name",sort:!0},{dataField:"surname",text:"Surname",sort:!0},{dataField:"createdAt",text:"Date of visit",sort:!0},{dataField:"action",text:"Actions"}]})})},v=function(e){var n=e.name,t=e.onChange;return(0,u.jsx)(l.Box,{children:(0,u.jsx)(s.Z,{children:(0,u.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,u.jsx)(s.Z.Label,{children:"Filter by Name"}),(0,u.jsx)(s.Z.Control,{type:"text",name:"find",value:n,onChange:t})]})})})},y=t(7577),b=t(9140),g=function(e){var n=e.visitor,t=e.onSubmit,r=e.closeEditor,l=(0,i.useState)(n.name),d=(0,a.Z)(l,2),c=d[0],m=d[1],x=(0,i.useState)(n.surname),p=(0,a.Z)(x,2),f=p[0],h=p[1],Z=function(e){switch(e.currentTarget.name){case"name":m(e.currentTarget.value);break;case"surname":h(e.currentTarget.value);break;default:return}};return(0,u.jsx)(y.Z,{style:{height:"100%",width:"100%",position:"absolute",zIndex:1,backgroundColor:"#fff"},children:(0,u.jsx)(b.Z,{style:{padding:"20px"},children:(0,u.jsxs)(s.Z,{onSubmit:function(e){e.preventDefault(),t({id:n._id,name:c,surname:f}),m(""),h(""),r()},children:[(0,u.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,u.jsx)(s.Z.Label,{children:"Name"}),(0,u.jsx)(s.Z.Control,{type:"text",name:"name",value:c,onChange:Z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+(?:-[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",autoComplete:"off",required:!0})]}),(0,u.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicSurname",children:[(0,u.jsx)(s.Z.Label,{children:"Surname"}),(0,u.jsx)(s.Z.Control,{type:"text",name:"surname",value:f,onChange:Z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+(?:-[a-zA-Z\u0430-\u044f\u0410-\u042f\u0430-\u0457\u0491\u0404-\u042f\u0490]+)*$",autoComplete:"off",required:!0})]}),(0,u.jsx)(o.Z,{variant:"primary",type:"submit",children:"Save"}),(0,u.jsx)(o.Z,{variant:"primary",style:{marginLeft:"30px"},type:"button",onClick:function(){r()},children:"Cancel"})]})})})},C=function(e){var n=e.onSubmit,t=e.closeConfirm;return(0,u.jsx)(y.Z,{style:{height:"200px",width:"300px",position:"absolute",zIndex:1,top:"20vh",left:"35%",backgroundColor:"#fff"},children:(0,u.jsxs)(b.Z,{style:{padding:"50px",border:"1px solid blue"},children:[(0,u.jsx)("p",{style:{margin:"auto"},children:"Are you sure?"}),(0,u.jsxs)("div",{style:{padding:"20px",display:"flex",justifyContent:"center"},children:[(0,u.jsx)(o.Z,{variant:"secondary",type:"button",onClick:function(){n(),t()},children:"Confirm"}),(0,u.jsx)(o.Z,{variant:"secondary",style:{marginLeft:"30px"},type:"button",onClick:function(){t()},children:"Cancel"})]})]})})},S=t(5048),k=t(9538),N=function(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],r=n[1];return{isOpen:t,open:function(){return r(!0)},close:function(){return r(!1)},toggle:function(){return r((function(e){return!e}))}}},w=function(){var e=(0,S.I0)(),n=(0,i.useState)({}),t=(0,a.Z)(n,2),r=t[0],s=t[1],o=N(),l=o.isOpen,m=o.open,x=o.close,p=N(),f=p.isOpen,Z=p.open,w=p.close,A=(0,S.v9)(k.zK),I=(0,c.$0)("",{refetchOnMountOrArgChange:!0}),z=I.data,B=I.isLoading,L=I.isSuccess,T=(0,c.T6)(),D=(0,a.Z)(T,1)[0],E=(0,c.tx)(),F=(0,a.Z)(E,1)[0],_=(0,c.CJ)(),V=(0,a.Z)(_,1)[0],G=A.trim()?z.filter((function(e){return e.name.toLowerCase().includes(A.toLowerCase())})):z;return(0,u.jsxs)(h.Z,{className:"mt-2",style:{position:"relative"},children:[l&&(0,u.jsx)(g,{visitor:r,closeEditor:x,onSubmit:function(e){var n=e.id,t=e.name,r=e.surname,a=e.password;V({visitorId:n,name:t,surname:r,password:a})}}),f&&(0,u.jsx)(C,{visitor:r,closeConfirm:w,onSubmit:function(){D(r._id)}}),!B&&L&&(0,u.jsxs)(y.Z,{children:[(0,u.jsx)(b.Z,{children:(0,u.jsxs)(b.Z.Body,{children:[(0,u.jsx)(b.Z.Title,{children:"New visitor"}),(0,u.jsx)(d,{visitors:z,onSubmit:function(e){var n=e.name,t=e.surname,r=e.password;F({name:n,surname:t,password:r})}})]})}),(0,u.jsx)(b.Z,{children:(0,u.jsxs)(b.Z.Body,{children:[(0,u.jsx)(b.Z.Title,{children:"Visitor list"}),(0,u.jsx)(v,{name:A,onChange:function(n){e((0,k.Tv)(n.target.value))}}),(0,u.jsx)(j,{visitors:G,openEditor:m,getVisitorById:function(e){s(z.find((function(n){return n._id===e})))},handleDelete:function(){Z()}})]})})]})]})}}}]);
//# sourceMappingURL=730.afbd16b5.chunk.js.map