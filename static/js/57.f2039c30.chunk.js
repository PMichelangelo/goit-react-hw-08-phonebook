"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[57],{6057:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(4942),o=t(1413),a=t(9439),c=t(2791),s=t(4420),i=t(422),u=t(296),l="phonebookForm_wrapper__0oQRA",h="phonebookForm_formWrapper__RUNBU",d="phonebookForm_inputName__uHWQr",p="phonebookForm_addContactBtn__trIze",m=t(3329),f={contacts:[],filter:"",name:"",number:""},_=function(){var e=(0,c.useState)((0,o.Z)({},f)),n=(0,a.Z)(e,2),t=n[0],_=n[1],x=(0,s.I0)(),b=function(e){var n=e.target,a=n.name,c=n.value;_((0,o.Z)((0,o.Z)({},t),{},(0,r.Z)({},a,c)))},j=function(){_((0,o.Z)({},f))},v=(0,i.x0)(),k=(0,i.x0)(),N=t.name,C=t.number;return(0,m.jsx)("div",{className:l,children:(0,m.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e){var n=(0,u.uK)(e);x(n)}((0,o.Z)({},t)),j()},children:(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("label",{htmlFor:v,children:"Name"}),(0,m.jsx)("input",{value:N,type:"text",name:"name",placeholder:"Name",className:d,id:v,onChange:b,required:!0}),(0,m.jsx)("label",{htmlFor:k,children:"Phone"}),(0,m.jsx)("input",{value:C,type:"tel",name:"number",placeholder:"Phone",className:d,id:k,onChange:b,pattern:"^[+0-9\\-\\(\\)\\s]+$",required:!0}),(0,m.jsx)("button",{type:"submit",className:p,children:"Add contact"})]})})})},x=t(3553),b=function(e){return e.filter},j=function(e){return e.contacts},v=(0,x.P1)([function(e){return e.contacts.items},b],(function(e,n){if(!n)return e;var t=n.toLowerCase();return e.filter((function(e){var n=e.name,r=e.number;return n.toLowerCase().includes(t)||r.includes(t)}))})),k="contactsList_contactsList__t4Fe-",N="contactsList_listItem__CQMCs",C="contactsList_deleteContactBtn__odAQp",g=function(){var e=(0,s.v9)(v),n=(0,s.v9)(j),t=n.isLoading,r=n.error,o=(0,s.I0)();(0,c.useEffect)((function(){o((0,u.yF)())}),[o]);var a=e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,m.jsxs)("li",{className:N,children:[t,": ",r," ",(0,m.jsx)("button",{type:"button",className:C,onClick:function(){return function(e){o((0,u.GK)(e))}(n)},children:"Delete"})]},n)}));return(0,m.jsxs)("ul",{className:k,children:[t&&(0,m.jsx)("p",{children:"...Loading"}),r&&(0,m.jsx)("p",{children:r}),a]})},F=t(5653),L={},w=function(){var e=(0,s.I0)(),n=(0,s.v9)(b);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:"Find contact by name"}),(0,m.jsx)("input",{type:"text",value:n,onChange:function(n){var t=n.target;return e((0,F.T)(t.value))},className:L.searchInput,name:"filter",placeholder:"Search"})]})},y={phonebookWrapper:"phonebook_phonebookWrapper__dTcCO"},Z=function(){return(0,m.jsxs)("div",{className:y.phonebookWrapper,children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(_,{}),(0,m.jsxs)("div",{className:y.listWrapper,children:[(0,m.jsx)("h1",{children:"Contacts"}),(0,m.jsx)(w,{}),(0,m.jsx)(g,{})]})]})},I=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(Z,{})})}}}]);
//# sourceMappingURL=57.f2039c30.chunk.js.map