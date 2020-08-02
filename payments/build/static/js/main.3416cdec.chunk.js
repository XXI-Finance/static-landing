(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=a(166),o=a(165),s=a(164),u=a(168),m=a(8),p=a.n(m),d=a(15),f=a(19),h=a(11),g=a(161),y=a(162),x=a(163),b=a(167),v=a(169),E=a(159),w=a(61),j=a(62),S=a(16),N=a.n(S),C=(a(94),a(95)),k=function(){function e(){Object(w.a)(this,e),this.baseUrl="https://api-sandbox.circle.com/v1/",this.mApiKey="QVBJX0tFWTo1NzBhMWI5YTM0NzRiNTc1MmQ5NGU5MzgwN2U5ZjJlNzo5MjA0NTA1ZTRiYWJiMzQxMGJlMmY0MGI5NmJmMDNmNw==",this.options={headers:{authorization:"Bearer "+this.mApiKey}},Object.assign(this,{getPCIPublicKey:function(){return N.a.get(this.baseUrl+"encryption/public",this.options).then((function(e){return e.data})).catch((function(e){console.log(e)}))}}),Object.assign(this,{uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}})}return Object(j.a)(e,[{key:"createWallet",value:function(e){var t={idempotencyKey:this.uuidv4(),description:e};return N.a.post(this.baseUrl+"wallets",t,this.options).then((function(e){return e.data})).catch((function(e){console.log(e)}))}},{key:"createWalletAddresss",value:function(e){var t={idempotencyKey:this.uuidv4(),currency:"USD",chain:"ETH"};return N.a.post(this.baseUrl+"wallets/"+e+"/addresses",t,this.options).then((function(e){return e.data})).catch((function(e){console.log(e)}))}},{key:"createWalletTransfer",value:function(e){var t={idempotencyKey:this.uuidv4(),source:{type:"wallet",id:e},destination:{type:"blockchain",address:"0x4750b9eCC57847de41129B03A8A531839f3CEd9f",chain:"ETH"},amount:{amount:"10",currency:"USD"}};return N.a.post(this.baseUrl+"transfers",t,this.options).then((function(e){return e.data})).catch((function(e){console.log(e)}))}},{key:"getTransferStatus",value:function(e){return N.a.get(this.baseUrl+"transfers/"+e,this.options).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))}},{key:"getWallet",value:function(e){return N.a.get(this.baseUrl+"wallets/"+e,this.options).then((function(e){return e.data})).catch((function(e){console.log(e)}))}},{key:"getCard",value:function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get(this.baseUrl+"cards",this.options).then((function(e){return e.data})).catch((function(e){console.log(e.response)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createCard",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={number:"4200000000000000".replace(/\s/g,""),cvv:"111"},e.next=3,this.encryptCardData(t);case 3:return a=e.sent,n={idempotencyKey:this.uuidv4(),keyId:a.keyId,expMonth:1,expYear:2023,billingDetails:{name:"RSMIT",country:"ZA",district:"FH",line1:"111",line2:"EC",city:"CT",postalCode:"7974"},metadata:{phoneNumber:"+27646909349",email:"ruan@segment.money",sessionId:"xxx",ipAddress:"172.33.222.1"},encryptedData:a},e.abrupt("return",N.a.post(this.baseUrl+"cards",n,this.options).then((function(e){return e.data})).catch((function(e){console.log(e.response)})));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createPayment",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.encryptCardData(t.cardNumber,t.cvv);case 2:return a=e.sent,n={idempotencyKey:this.uuidv4(),keyId:a.keyId,metadata:{email:t.email,phoneNumber:t.phoneNumber,sessionId:"xxx",ipAddress:"172.33.222.1"},amount:{amount:t.amount,currency:t.currency},verification:"none",source:{id:t.sourceId,type:"card"},encryptedData:a.encryptedMessage,cvv:t.cvv},e.abrupt("return",N.a.post(this.baseUrl+"payments",n,this.options).then((function(e){return e.data})).catch((function(e){console.log(e.response)})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPayment",value:function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.a.get(this.baseUrl+"payments/"+t,this.options).then((function(e){return e.data.data})).catch((function(e){console.log(e.response)})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"encryptCardData",value:function(){var e=Object(d.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getPCIPublicKey().then(function(){var e=Object(d.a)(p.a.mark((function e(n){var r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=atob(n.data.publicKey),e.t0=C.message.fromText(JSON.stringify({number:t,cvv:a})),e.next=4,C.key.readArmored(r);case 4:return e.t1=e.sent.keys,i={message:e.t0,publicKeys:e.t1},e.abrupt("return",C.encrypt(i).then((function(e){return{encryptedData:btoa(e.data),keyId:n.data.publicKey}})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),O=k=new k,W=a(157),B=a(35),A=a.n(B),T=Object(W.a)((function(e){var t,a,n;return{root:{margin:e.spacing(6,0,3)},label:{color:"#7B7F9E",fontSize:"12px",textAlign:"center"},heading:{color:"#fff",fontSize:"24px",textAlign:"left",lineHeight:"18px",marginTop:"10px"},subHeading:{color:"#7B7F9E",fontSize:"12px",textAlign:"left"},input:{padding:0,color:"#fff",textAlign:"center",fontSize:24,display:"inline-block",width:"75px !important"},select:(t={padding:0,color:"#fff",textAlign:"center",fontSize:24,display:"inline-block",borderColor:"#282a36",borderRadius:12,backgroundColor:"#212330"},Object(h.a)(t,"textAlign","center"),Object(h.a)(t,"paddingTop",13),Object(h.a)(t,"paddingBottom",13),Object(h.a)(t,"paddingLeft",5),Object(h.a)(t,"paddingRight",5),Object(h.a)(t,"lineHeight",50),t),cardWrapper:(a={padding:0,color:"#fff",textAlign:"center",fontSize:24,display:"block",borderColor:"#282a36",borderRadius:12,backgroundColor:"#212330"},Object(h.a)(a,"textAlign","center"),Object(h.a)(a,"paddingTop",13),Object(h.a)(a,"paddingBottom",13),Object(h.a)(a,"paddingLeft",5),Object(h.a)(a,"paddingRight",5),Object(h.a)(a,"marginTop",10),a),inputWrapper:(n={color:"#fff",textAlign:"center",fontSize:24,marginTop:10,borderWidth:2,borderColor:"#282a36",borderRadius:12,backgroundColor:"#212330"},Object(h.a)(n,"textAlign","center"),Object(h.a)(n,"paddingTop",13),Object(h.a)(n,"paddingBottom",13),Object(h.a)(n,"paddingLeft",25),Object(h.a)(n,"paddingRight",25),n),currency:{marginRight:10,position:"relative",top:5},cardIcon:{marginLeft:10,position:"relative",marginTop:-3,height:40},button:{backgroundColor:"#3936BE",color:"#fff",paddingTop:10,paddingBottom:10,paddingLeft:25,paddingRight:25,borderRadius:12,fontSize:36},loader:{width:235},success:{width:183,marginTop:71,marginBottom:71},circle:{width:44,height:44}}}));function z(){var e=r.a.useState([]),t=Object(f.a)(e,2),a=t[0],n=t[1],i=r.a.useState(!1),c=Object(f.a)(i,2),l=c[0],o=c[1],s=r.a.useState(!1),u=Object(f.a)(s,2),m=u[0],h=u[1],w=r.a.useState(!1),j=Object(f.a)(w,2),S=j[0],N=j[1],C=r.a.useState(!1),k=Object(f.a)(C,2),W=k[0],B=k[1],z=r.a.useState(null),D=Object(f.a)(z,2),I=(D[0],D[1]),M=r.a.useState(72.38),U=Object(f.a)(M,2),R=U[0],F=(U[1],r.a.useState(72.38)),H=Object(f.a)(F,2),K=H[0],P=H[1];function J(){return(J=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,O.createPayment({email:"ruan@segment.money",phoneNumber:"+27646909349",cvv:"111",cardId:"db18ed0c-69f4-4fb5-ae37-891e6067f434",amount:A()(K/R).format("0,0.00"),number:"4200000000000000",currency:"USD",sourceId:a[0].id});case 3:t=e.sent,I(t.data.id),n=setInterval((function(){(W||S)&&clearInterval(n),V(t.data.id)}),2e3),setTimeout((function(){clearInterval(n)}),5e3);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return $.apply(this,arguments)}function $(){return($=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t){e.next=5;break}return e.next=3,O.getPayment(t);case 3:"confirmed"==(a=e.sent).status||"success"==a.status?(h(!1),B(!0)):"failed"!=a.status&&"payment_failed"!=a.status||(h(!1),N(!0));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,O.getCard();case 3:if(0!=(t=e.sent).data.length){e.next=10;break}return e.next=7,O.createCard();case 7:e.sent,e.next=12;break;case 10:n(t.data),o(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.useEffect((function(){0===a.length&&function(){q.apply(this,arguments)}()}),[a]);var L=T();return l?r.a.createElement(E.a,null):m?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.label},"Processing payment"),r.a.createElement("div",{className:L.cardWrapper},r.a.createElement("img",{src:"loader.gif",alt:"alternative",className:L.loader})),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"row",padding:30}},r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"flex-start"}},r.a.createElement("img",{src:"circle.png",alt:"alternative",className:L.circle,style:{height:25,width:25,marginRight:10,position:"relative",top:10}}),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",flexDirection:"column"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading,style:{fontSize:14,lineHeight:"10px"}},"Circle Merch"),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.subHeading,style:{fontSize:10}},"Boston, MA"))),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading,style:{fontSize:18}},"ARS $",K,r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:12}},"USD $",A()(K/R).format("0,0.00"))))),r.a.createElement(y.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:L.selectWrapper},r.a.createElement(b.a,{variant:"filled",required:!0,id:"amount",classes:{root:L.select},fullWidth:!0,defaultValue:a[0],renderValue:function(e){return r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{lineHeight:"35px",maxWidth:"70%",overflow:"hidden",height:35}},e.id),r.a.createElement("img",{src:"marstercard.png",alt:"alternative",className:L.cardIcon,style:{height:"20"}})))}},a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,e.id))}))))),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading,style:{fontSize:16,textAlign:"center",marginTop:10}},"Cancel")):W?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.label},"Payment Successful"),r.a.createElement("div",{className:L.cardWrapper},r.a.createElement("img",{src:"success.gif",alt:"alternative",className:L.success})),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"row",padding:30}},r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"flex-start"}},r.a.createElement("img",{src:"circle.png",alt:"alternative",className:L.circle,style:{height:25,width:25,marginRight:10,position:"relative",top:10}}),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"flex-start",flexDirection:"column"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading,style:{fontSize:14,lineHeight:"10px"}},"Circle Merch"),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.subHeading,style:{fontSize:10}},"Boston, MA"))),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading,style:{fontSize:18}},"ARS $",K,r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:12}},"USD $",A()(K/R).format("0,0.00"))))),r.a.createElement(y.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:L.selectWrapper},r.a.createElement(b.a,{variant:"filled",required:!0,id:"amount",classes:{root:L.select},fullWidth:!0,defaultValue:a[0],renderValue:function(e){return r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{lineHeight:"35px",maxWidth:"70%",overflow:"hidden",height:35}},e.id),r.a.createElement("img",{src:"marstercard.png",alt:"alternative",className:L.cardIcon,style:{height:"20"}})))}},a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,e.id))}))))),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading,style:{fontSize:16,textAlign:"right",marginTop:10,marginRight:10}},"Email Receipt")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.label},"Confirm your payment to:"),r.a.createElement("div",{className:L.cardWrapper,style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"row",padding:30,marginBottom:20}},r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"flex-start"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.heading},"Circle Merch"),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.subHeading},"Boston, MA")),r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},r.a.createElement("img",{src:"circle.png",alt:"alternative",className:L.circle}))),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.label},"You are paying:"),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:L.inputWrapper},r.a.createElement("img",{src:"ars.png",alt:"alternative",className:L.currency}),"ARS $",r.a.createElement(x.a,{variant:"filled",required:!0,id:"amount",classes:{root:L.input},onChange:function(e){return P(e.target.value)},value:K,disableUnderline:!0})),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.label},"USD $",A()(K/R).format("0,0.00")))),r.a.createElement(g.a,{variant:"h6",gutterBottom:!0,color:"white",className:L.label,style:{marginTop:20}},"From:"),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:12,md:12},r.a.createElement("div",{className:L.selectWrapper},r.a.createElement(b.a,{variant:"filled",required:!0,id:"amount",classes:{root:L.select},fullWidth:!0,defaultValue:a[0],renderValue:function(e){return r.a.createElement("div",{style:{whiteSpace:"normal",display:"flex",flexWrap:"wrap",justifyContent:"center"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{lineHeight:"35px",maxWidth:"70%",overflow:"hidden",height:35}},e.id),r.a.createElement("img",{src:"marstercard.png",alt:"alternative",className:L.cardIcon,style:{height:"20"}})))}},a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,e.id))}))))),r.a.createElement(y.a,{item:!0,xs:12},S&&r.a.createElement(g.a,{color:"red"},"There was an error processing your payment"),r.a.createElement(v.a,{color:"secondary",variant:"primary",fullWidth:!0,className:L.button,onClick:function(){return function(){return J.apply(this,arguments)}()}},"Pay Now"))))}function D(){return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(u.a,{my:4},r.a.createElement(z,null)))}var I=a(45),M=a(63),U=Object(M.a)({palette:{primary:{main:"#3936BE"},secondary:{main:"#F47500"},error:{main:I.a.A400},background:{default:"#171822"}}});c.a.render(r.a.createElement(o.a,{theme:U},r.a.createElement(l.a,null),r.a.createElement(D,null)),document.querySelector("#root"))},71:function(e,t,a){e.exports=a(120)}},[[71,1,2]]]);
//# sourceMappingURL=main.3416cdec.chunk.js.map