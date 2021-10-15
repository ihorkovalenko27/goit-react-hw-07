(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={contacts:"ContactList_contacts__1KGWS",filter:"ContactList_filter__39y_U",btn:"ContactList_btn__1F4IF"}},30:function(t,e,n){t.exports={form:"ContactForm_form__2Dyg6"}},31:function(t,e,n){t.exports={input:"Filter_input__2bst2"}},69:function(t,e,n){"use strict";n.r(e);var c,r,a=n(0),s=n.n(a),u=n(14),o=n.n(u),i=n(7),b=n(2),j=n(4),f=n(32),l=n(6),p=Object(b.b)("contacts/fetchContactsRequest"),d=Object(b.b)("contacts/fetchContactsSuccess"),O=Object(b.b)("contacts/fetchContactsError"),h=Object(b.b)("contacts/addContactsRequest"),x=Object(b.b)("contacts/addContactsSuccess"),m=Object(b.b)("contacts/addContactsError"),v=Object(b.b)("contacts/deleteContactsRequest"),C=Object(b.b)("contacts/deleteContactsSuccess"),y=Object(b.b)("contacts/deleteContactsError"),w=Object(b.b)("contacts/filterContacts"),k=Object(b.c)([],(c={},Object(j.a)(c,d,(function(t,e){return e.payload})),Object(j.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(j.a)(c,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),g=Object(b.c)(!1,(r={},Object(j.a)(r,p,(function(){return!0})),Object(j.a)(r,d,(function(){return!1})),Object(j.a)(r,O,(function(){return!1})),Object(j.a)(r,h,(function(){return!0})),Object(j.a)(r,x,(function(){return!1})),Object(j.a)(r,m,(function(){return!1})),Object(j.a)(r,v,(function(){return!0})),Object(j.a)(r,C,(function(){return!1})),Object(j.a)(r,y,(function(){return!1})),r)),_=Object(b.c)("",Object(j.a)({},w,(function(t,e){return e.payload}))),L=Object(l.b)({items:k,filter:_,loading:g}),S=Object(b.a)({reducer:{contacts:L}}),F=n(1),A=function(t){var e=t.title,n=t.children;return Object(F.jsx)("div",{children:Object(F.jsxs)("section",{children:[e&&Object(F.jsx)("h1",{children:e}),n]})})},N=n(20),q=function(t){return t.contacts.items},E=function(t){return t.contacts.filter},z=function(t){var e=q(t),n=E(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},R=function(t){return t.contacts.loading},D=n(29),J=n.n(D),Z=n(30),B=n.n(Z),I=n(3),M=n.n(I),T=n(8),U=n(10),G=n.n(U);function K(){return P.apply(this,arguments)}function P(){return(P=Object(T.a)(M.a.mark((function t(){var e,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t,e,n){return $.apply(this,arguments)}function $(){return($=Object(T.a)(M.a.mark((function t(e,n,c){var r,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.post("/contacts",{id:e,name:n,number:c});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(t){return Q.apply(this,arguments)}function Q(){return(Q=Object(T.a)(M.a.mark((function t(e){var n,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.a.delete("/contacts/".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}G.a.defaults.baseURL="http://localhost:3000";var V=function(){var t=Object(a.useState)(""),e=Object(N.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(N.a)(r,2),u=s[0],o=s[1],b=J.a.generate(),j=Object(i.c)(q),f=Object(i.b)(),l=function(t,e,n){return f(function(t,e,n){return function(){var c=Object(T.a)(M.a.mark((function c(r){var a;return M.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r(h()),c.prev=1,c.next=4,W(t,e,n);case 4:a=c.sent,r(x(a)),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(1),r(m(c.t0));case 11:case"end":return c.stop()}}),c,null,[[1,8]])})));return function(t){return c.apply(this,arguments)}}()}(t,e,n))},p=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":c(r);break;case"number":o(r);break;default:return}},d=function(){c(""),o("")};return Object(F.jsxs)("form",{className:B.a.form,onSubmit:function(t){if(t.preventDefault(),j.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts")),void d();l(b,n,u),d()},children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)("input",{type:"text",name:"name",value:n,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)("input",{type:"tel",name:"number",value:u,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(F.jsx)("button",{type:"submit",children:"Add contacts"})]})},X=n(19),Y=n.n(X),tt=function(){var t=Object(i.c)(z),e=Object(i.b)(),n=Object(i.c)(R);Object(a.useEffect)((function(){e(function(){var t=Object(T.a)(M.a.mark((function t(e){var n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p()),t.prev=1,t.next=4,K();case 4:n=t.sent,e(d(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(O(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[e]);var c=function(t){return e(function(t){return function(){var e=Object(T.a)(M.a.mark((function e(n){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v()),e.prev=1,e.next=4,H(t);case 4:n(C(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(y(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h2",{children:"Contacts"}),n&&Object(F.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."}),Object(F.jsx)("ul",{className:Y.a.contacts,children:t.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(F.jsxs)("li",{children:[Object(F.jsxs)("span",{children:[n,":"]})," ",Object(F.jsx)("span",{children:r}),Object(F.jsx)("button",{className:Y.a.btn,type:"button",onClick:function(){return c(e)},children:"Delete"})]},e)}))})]})},et=n(31),nt=n.n(et),ct=function(){var t=Object(i.c)(E),e=Object(i.b)();return Object(F.jsxs)("label",{children:["Filter contacts by name"," ",Object(F.jsx)("input",{className:nt.a.input,type:"text",value:t,onChange:function(t){return e(w(t.currentTarget.value))}})]})},rt=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(A,{title:"Phonebook",children:[Object(F.jsx)(V,{}),Object(F.jsx)(ct,{}),Object(F.jsx)(tt,{})]})})};o.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(i.a,{store:S,children:Object(F.jsx)(rt,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.8bdf75c9.chunk.js.map