(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(0),r=n.n(c),s=n(30),i=n.n(s),l=(n(37),n(8)),u=n(9),o=n(11),j=n(10),h=(n(18),n(62)),b=n(63),d=n(31),x=(n(38),n(12)),O=n.n(x),f=n(14),p=n(13),m=n(15),v=n.n(m),g=n(64),y=n(66),k=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={color:"#4cb96b"},a.subject=null,a.author=null,a.message=null,a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(u.a)(n,[{key:"handleSubmit",value:function(){var t=Object(f.a)(O.a.mark((function t(){var e,n,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.subject.value,n=this.author.value,a=this.message.value,t.next=5,v.a.post("http://localhost:3001/post",{subject:e,author:n,message:a});case 5:this.subject.value="",this.author.value="",this.message.value="";case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(g.a.Group,{controlId:"formPost",children:[Object(a.jsx)(g.a.Label,{className:"text-white",children:"Subject"}),Object(a.jsx)(g.a.Control,{type:"text",placeholder:"Enter post subject",ref:function(e){return t.subject=e}}),Object(a.jsx)(g.a.Label,{className:"text-white",children:"Author"}),Object(a.jsx)(g.a.Control,{type:"text",placeholder:"Enter post author",ref:function(e){return t.author=e}}),Object(a.jsx)(g.a.Label,{className:"text-white",children:"Message"}),Object(a.jsx)(g.a.Control,{as:"textarea",rows:3,ref:function(e){return t.message=e}})]}),Object(a.jsx)(y.a,{variant:"primary",onClick:this.handleSubmit,children:"Submit"})]})}}]),n}(c.Component),w=n(65),N=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={posts:[]},a.interval=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.reloadData(),this.interval=setInterval((function(){t.reloadData()}),2e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"reloadData",value:function(){var t=Object(f.a)(O.a.mark((function t(){var e;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("http://localhost:3001/posts");case 2:e=t.sent,this.setState({posts:e.data});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"renderData",value:function(){return this.state.posts.map((function(t){return Object(a.jsx)(w.a,{children:Object(a.jsxs)(w.a.Body,{children:[Object(a.jsxs)(w.a.Title,{children:["#",t.postid," - Subject: ",t.subject]}),Object(a.jsxs)(w.a.Subtitle,{className:"mb-2 text-muted",children:["Author: ",t.author]}),Object(a.jsxs)(w.a.Text,{children:["Message: ",t.message]})]})},t.postid)}))}},{key:"render",value:function(){return Object(a.jsxs)(h.a,{children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{className:"text-center mt-2 mb-1 text-white",children:Object(a.jsx)("h1",{children:"Posts"})})}),Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{className:"text-center mb-3",children:this.renderData()})})]})}}]),n}(c.Component),S=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={force:!1},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(h.a,{fluid:!0,children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{className:"text-center",children:Object(a.jsx)("h1",{className:"text-white",children:"Fake Twitter"})})}),Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{className:"text-center",children:Object(a.jsx)(k,{})})}),Object(a.jsx)(b.a,{children:Object(a.jsx)(d.a,{className:"text-center",children:Object(a.jsx)(N,{})})})]})})}}]),n}(c.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),C()}},[[61,1,2]]]);
//# sourceMappingURL=main.c12ca301.chunk.js.map