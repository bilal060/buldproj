"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{6242:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var i=a(5893),r=a(7294),n=a(1852),l=a(4358),t=a(1422);let c=e=>{if(e>=1&&e<=15)return 15*e;if(e>=16&&e<=49)return(12.5*e).toFixed(2);if(e>=50&&e<=99)return 7*e;if(e>=100&&e<=249)return 6*e;if(e>=250&&e<=499)return 5*e;if(e>=500&&e<=999)return 4*e;if(e>=1e3&&e<=4999)return 3*e;else if(e>=5e3)return e;else return 0};var d=a(2782),o=function(e){return(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:e.link,target:"_blank",className:"btn-primary-outline-hover",children:e.title})})},x=a(5868),h=a(2430),m=a(1277);a(5213);var j=r.memo(function(e){let{dcpCountry:s,handleDspRadioChange:a,dspRadio:r,onDspCountryChange:n,dspMonths:t,setDspMonths:c,renderDCPSliderMarks:d,dspValue:o,handleDspInputChange:j}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"two-cols",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"proxy_box",children:l.VQ[s].radio.map((e,s)=>(0,i.jsxs)("div",{className:"inner_proxy_box",onClick:()=>a(e),children:[(0,i.jsx)("input",{type:"radio",id:e,name:e,value:e,checked:r===e,onChange:e=>n(e)},e),(0,i.jsx)("label",{htmlFor:e,children:(0,x.H)(e)})]},s))})})]}),(0,i.jsxs)("div",{className:"countries-dropdown-wrapper two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Select Country:"})}),(0,i.jsx)(h.Z,{value:s.toUpperCase(),onChange:e=>n(e),options:l.TK})]}),(0,i.jsxs)("div",{className:"price-slider-range two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Length of Subscription:"})}),(0,i.jsx)("div",{className:"price-slider-range-container",children:(0,i.jsx)(m.Z,{className:"price-slider",min:10,max:40,step:10,onChange:e=>{c(l.w1[e])},value:l.n7[t],marks:d(),activeDotStyle:{borderColor:"#fff",backgroundColor:"#07b6bf"},trackStyle:{backgroundColor:"#07b6bf",height:6},railStyle:{height:6},dotStyle:{height:4,width:4,bottom:"-2px",display:"none"},handleStyle:{borderColor:"#07b6bf",backgroundColor:"#07b6bf",opacity:1}})})]}),(0,i.jsxs)("div",{className:"no-of-proxies two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Number of Proxies:"})}),(0,i.jsxs)("div",{className:"content-box",children:[(0,i.jsx)("input",{"aria-label":"proxy-input",className:"proxy-input ".concat(o<5&&"border-red"),placeholder:"",type:"number",value:o,onChange:j,max:9999}),(0,i.jsx)("br",{}),o<5&&(0,i.jsx)("span",{className:"validation-error",children:"Minimum 5 proxies required"}),(0,i.jsxs)("div",{className:"stats",children:[(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Starter:"})," ",(0,i.jsx)("i",{children:"5 to 99"})," "]}),(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Personal:"})," ",(0,i.jsx)("i",{children:"100 to 999"})," ",(0,i.jsx)("span",{className:"discount-value",children:"-15%"})]}),(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Corporate:"})," ",(0,i.jsx)("i",{children:"1k to 4,999"})," ",(0,i.jsx)("span",{className:"discount-value",children:"-25%"})]}),(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Enterprise:"})," ",(0,i.jsx)("i",{children:"5k+"})," ",(0,i.jsx)("span",{className:"discount-value",children:"-30%"})]})]})]})]})]})}),u=r.memo(function(e){let{resedentialInput:s,handleChangeResidentialProxies:a}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"two-cols",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"proxy_box",children:(0,i.jsxs)("div",{className:"inner_proxy_box",children:[(0,i.jsx)("input",{type:"radio",id:"test2",defaultChecked:!0,name:"radio-group"}),(0,i.jsx)("label",{htmlFor:"test2",children:"Rotating"})]})})})]}),(0,i.jsxs)("div",{className:"no-of-proxies residential-gbs two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Gigabytes:"})}),(0,i.jsxs)("div",{className:"content-box",children:[(0,i.jsx)("input",{"aria-label":"proxy-input",className:"proxy-input ".concat(s<1&&"border-red"),placeholder:"",value:s,onChange:a,type:"number",max:1e3}),(0,i.jsx)("br",{}),s<1&&(0,i.jsx)("span",{className:"validation-error",children:"Minimum 1 proxy required"}),(0,i.jsxs)("div",{className:"table-responsive",children:[(0,i.jsx)("table",{className:"table custom-table",children:(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Starter:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"1 - 15 GB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$15/GB"})})]})}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Personal:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"16 - 49 GB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$12.50/GB"})})]})}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Consumer:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"50 - 99 GB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$7/GB"})})]})}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Professional:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"100 - 249 GB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$6/GB"})})]})})]})})}),(0,i.jsx)("table",{className:"table custom-table",children:(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Business:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"250 - 499 GB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$5/GB"})})]})}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Corporate:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"500 - 999 GB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$4/GB"})})]})}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Enterprise:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"1 - 4.9 TB"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"$3/GB"})})]})}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"header",children:"Custom:"}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("i",{children:"5TB +"})}),(0,i.jsx)("div",{className:"data",children:(0,i.jsx)("a",{className:"contact-us-text-blue",href:"mailto:sales@rayobyte.com",children:(0,i.jsx)("i",{children:"Contact Us"})})})]})})]})})})]})]})]})]})}),p=r.memo(function(e){let{ispProxyInput:s,handleRadioChange:a,onCountrySelect:r,setIspProxyInput:n,renderDCPSliderMarks:t,ispProxyValue:c,handleIspProxyInputChange:d}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"two-cols",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"proxy_box",children:[(0,i.jsxs)("div",{className:"inner_proxy_box",children:[(0,i.jsx)("input",{type:"radio",id:"test1",checked:"dedicated"===s.mainType,onChange:e=>a(e,"dedicated"),name:"radio-group"}),(0,i.jsx)("label",{htmlFor:"test1",children:"Dedicated"})]}),(0,i.jsxs)("div",{className:"inner_proxy_box",children:[(0,i.jsx)("input",{type:"radio",id:"test3",name:"radio-group",checked:"semiDedicated"===s.mainType,onChange:e=>a(e,"semiDedicated")}),(0,i.jsx)("label",{htmlFor:"test3",children:"Semi-Dedicated"})]})]})})]}),(0,i.jsxs)("div",{className:"countries-dropdown-wrapper two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Select Country:"})}),(0,i.jsx)(h.Z,{value:s.country.toUpperCase(),onChange:e=>r(e),options:l.hW})]}),(0,i.jsxs)("div",{className:"price-slider-range two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Length of Subscription:"})}),(0,i.jsx)("div",{className:"price-slider-range-container",children:(0,i.jsx)(m.Z,{"aria-label":"price slider",className:"price-slider",min:10,max:40,step:10,onChange:e=>{n({...s,length:l.w1[e]})},value:l.n7[s.length],marks:t(),activeDotStyle:{borderColor:"#fff",backgroundColor:"#07b6bf"},trackStyle:{backgroundColor:"#07b6bf",height:6},railStyle:{height:6},dotStyle:{height:4,width:4,bottom:"-2px",display:"none"},handleStyle:{borderColor:"#07b6bf",backgroundColor:"#07b6bf",opacity:1}})})]}),(0,i.jsxs)("div",{className:"no-of-proxies two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Number of Proxies:"})}),(0,i.jsxs)("div",{className:"content-box",children:[(0,i.jsx)("input",{"aria-label":"proxy-input",className:"proxy-input ".concat(c<5&&"border-red"),onChange:d,value:c,placeholder:"",type:"number"}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"validation-error",children:c<5&&""!==c&&"Minimum 5 proxies required"}),(0,i.jsxs)("div",{className:"stats",children:[(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Starter:"})," ",(0,i.jsx)("i",{children:"5 to 99"})," "]}),(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Personal:"})," ",(0,i.jsx)("i",{children:"100 to 999"})," ",(0,i.jsx)("span",{className:"discount-value",children:"-4%"})]}),(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Corporate:"})," ",(0,i.jsx)("i",{children:"1k to 4,999"})," ",(0,i.jsx)("span",{className:"discount-value",children:"-8%"})]}),(0,i.jsxs)("span",{className:"stat-item",children:[(0,i.jsx)("b",{children:"Enterprise:"})," ",(0,i.jsx)("i",{children:"5k+"})," ",(0,i.jsx)("span",{className:"discount-value",children:"-12%"})]})]})]})]})]})});let b=()=>{let e={};for(let[s,a]of Object.entries(l.gV)){let r=l.nH[s];e[s]={label:(0,i.jsxs)("div",{className:"mark-label",children:[(0,i.jsxs)("div",{className:"duration",children:[(0,i.jsx)("p",{children:a}),(0,i.jsx)("p",{children:1===a?"MONTH":"MONTHS"})]}),"10"!==s&&(0,i.jsxs)("span",{className:"discount",children:[r," %"]})]})}}return e},N=e=>{var s;let{className:a}=e,x=(0,n.useMediaQuery)({maxWidth:390}),h=(0,n.useMediaQuery)({maxWidth:767}),m=(0,n.useMediaQuery)({minWidth:768,maxWidth:1023}),N=(0,n.useMediaQuery)({minWidth:1024,maxWidth:1439}),v=(0,n.useMediaQuery)({minWidth:1440}),[y,g]=(0,r.useState)(l.Lz.DataCenterProxies),[C,P]=(0,r.useState)(1),[D,f]=(0,r.useState)(c(Number(C)));(0,r.useInsertionEffect)(()=>{console.log("Component inserted into the DOM")});let[M,z]=(0,r.useState)({country:"us",mainType:"dedicated",length:"threeMonthDisc",proxyType:"starterDisc"}),[S,L]=(0,r.useState)(5),[w,k]=(0,r.useState)(0),[T,I]=(0,r.useState)("us"),[_,B]=(0,r.useState)("us"),[G,F]=(0,r.useState)(l.VQ[T].radio[0]),[R,Q]=(0,r.useState)("threeMonthDisc"),[$,E]=(0,r.useState)(5),[V,H]=(0,r.useState)("starterDisc"),[W,q]=(0,r.useState)(0),U=e=>{z({...M,country:e.toLowerCase()}),B(e.toLowerCase())},Z=e=>{var s;I(e.toLowerCase()),F(null===(s=l.VQ[e.toLowerCase()])||void 0===s?void 0:s.radio[0])};(0,r.useEffect)(()=>{let e=0,s=0,a=0;if("oneMonthDisc"!==R){let e=Number(l.VQ[T][G].basicPrice*l.VQ[T][G][R]);s=(0,t.G)(l.VQ[T][G].basicPrice-e)}else s=l.VQ[T][G].basicPrice;"starterDisc"!==V?(a=s*Number(l.VQ[T][G][V]),e=(0,t.G)(s-a)):e=s,q(Number((Number(e)*Number($)*Number(l.HM[R])).toFixed(2)))},[G,R,$,T,V]);let O=e=>{let{target:{value:s}}=e;(/^[0-9\b]+$/.test(s)||""==s)&&(P(s),f(c(Number(s))))},Y=(e,s)=>{z({...M,mainType:s})},K=e=>{e.target.value>=5&&e.target.value<=99?z({...M,proxyType:"starterDisc"}):e.target.value>=100&&e.target.value<=999?z({...M,proxyType:"personalDisc"}):e.target.value>=1e3&&e.target.value<=4999&&z({...M,proxyType:"corporate"}),L(e.target.value)};(0,r.useEffect)(()=>{let e=0,s=0,a=S*l.Ml[M.country][M.mainType][M.length];"starterDisc"!==M.proxyType?(s=a*Number(l.Ml[M.country][M.mainType][M.proxyType]),e=a-s):e=a,k(e)},[M,S]);let A=e=>{let{target:s}=e,a=s.value;a>=5&&a<=99?H("starterDisc"):a>=100&&a<=999?H("personalDisc"):a>=1e3&&a<=4999&&H("corporate"),E(a)},J=e=>{F(e)};return(0,i.jsx)("section",{className:"pricing-header ".concat(a),children:(0,i.jsx)("div",{className:"section-container",children:(0,i.jsxs)("div",{className:"pricing-row",children:[(0,i.jsxs)("div",{className:"left-col",children:[(0,i.jsxs)("div",{className:"proxy-types two-cols",children:[(0,i.jsx)("div",{className:"lable-box",children:(0,i.jsx)("label",{children:"Proxy Type:"})}),(0,i.jsx)("div",{className:"content-box",children:(0,i.jsxs)("div",{className:"proxy_side",children:[(0,i.jsx)("button",{className:"btn-proxy ".concat(y==l.Lz.DataCenterProxies&&"active"),onClick:()=>{g(l.Lz.DataCenterProxies)},children:"Data Center Proxies"}),(0,i.jsx)("button",{className:"btn-proxy ".concat(y==l.Lz.ResidentialProxies&&"active"),onClick:()=>{g(l.Lz.ResidentialProxies)},children:"Residential Proxies"}),(0,i.jsx)("button",{className:"btn-proxy ".concat(y==l.Lz.ISPProxies&&"active"),onClick:()=>{g(l.Lz.ISPProxies)},children:"ISP Proxies"})]})})]}),(()=>{switch(y){case l.Lz.DataCenterProxies:return(0,i.jsx)(j,{dcpCountry:T,handleDspRadioChange:J,dspRadio:G,onDspCountryChange:Z,setDspMonths:Q,dspMonths:R,renderDCPSliderMarks:b,dspValue:$,handleDspInputChange:A});case l.Lz.ResidentialProxies:return(0,i.jsx)(u,{resedentialInput:C,handleChangeResidentialProxies:O});case l.Lz.ISPProxies:return(0,i.jsx)(p,{ispProxyInput:M,setIspProxyInput:z,handleRadioChange:Y,onCountrySelect:U,renderDCPSliderMarks:b,ispProxyValue:S,handleIspProxyInputChange:K});default:return null}})()]}),(0,i.jsxs)("div",{className:"right-col",children:[(0,i.jsxs)("div",{className:"chart-wrapper",children:[(0,i.jsx)("div",{className:"chart-content",children:y==l.Lz.DataCenterProxies&&$>5e3||y==l.Lz.ISPProxies&&S>5e3||y==l.Lz.ResidentialProxies&&C>5e3?(0,i.jsxs)("div",{className:"contact-us",children:[(0,i.jsxs)("p",{className:"contact-us-text",children:["Get a custom plan for your business and save upto"," ",(0,i.jsx)("em",{children:(0,i.jsx)("strong",{children:"30%"})})," ","or more on orders of"," ",(0,i.jsx)("em",{children:(0,i.jsx)("strong",{children:"5000+"})})," ",y==l.Lz.ResidentialProxies?"GBs.":"proxies."]}),(0,i.jsx)("a",{href:"https://rayobyte.com/contact-us/",className:"contact-us-btn",target:"_blank",children:"Contact Us"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h1",{children:[(0,i.jsx)("sup",{children:"$"}),y==l.Lz.ResidentialProxies&&Number(D).toFixed(2),y==l.Lz.ISPProxies&&Number(w).toFixed(2),y==l.Lz.DataCenterProxies&&Number(W).toFixed(2)]}),(0,i.jsx)("hr",{}),y===l.Lz.ResidentialProxies?(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:[C," GB"]})}):(0,i.jsxs)("div",{className:"chart-sub-content",children:[(0,i.jsxs)("div",{className:"col-1",children:[(0,i.jsxs)("p",{children:[y==l.Lz.ResidentialProxies&&(0,i.jsxs)(i.Fragment,{children:[" ","$",D?D/Number(C):"-","/GB"]}),y==l.Lz.ISPProxies&&(0,i.jsxs)(i.Fragment,{children:[" ","$",w?Number(w/(Number(S)*l.HM[M.length])).toFixed(2):"-","/IP"]}),y==l.Lz.DataCenterProxies&&(0,i.jsxs)(i.Fragment,{children:["number"==typeof W&&W?Number(W/(Number($)*l.HM[R])).toFixed(2):"--","/IP"]})]}),(0,i.jsxs)("p",{children:[$," IPs"]}),(0,i.jsxs)("p",{children:["$","isp"==(s=y===l.Lz.DataCenterProxies?"dataCenter":y===l.Lz.ISPProxies?"isp":"dataCenter")?Number((Number(w)/Number(l.HM[M.length])).toFixed(2)):"dataCenter"===s?Number((Number(W)/Number(l.HM[R])).toFixed(2)):0,"/Mo"]})]}),(0,i.jsxs)("div",{className:"col-2",children:[(0,i.jsx)("p",{className:"radio-label",children:y==l.Lz.DataCenterProxies?G:y==l.Lz.ISPProxies&&M.mainType}),(0,i.jsxs)("p",{children:[{oneMonthDisc:"1 month",threeMonthDisc:"3 month",sixMonthDisc:"6 month",twelveMonthDisc:"12 month"}[R]," "]}),y!==l.Lz.ResidentialProxies&&(0,i.jsx)("p",{className:"country-name",children:y==l.Lz.DataCenterProxies?T:M.country})]})]})]})}),void 0!==window&&(0,i.jsx)("div",{id:"chart",children:(0,i.jsx)(d.Z,{progress:y==l.Lz.ResidentialProxies?.1*D:y==l.Lz.ISPProxies?"oneMonthDisc"===M.length?25:"threeMonthDisc"===M.length?50:"sixMonthDisc"===M.length?75:"twelveMonthDisc"===M.length?100:0:"oneMonthDisc"===R?25:"threeMonthDisc"===R?50:"sixMonthDisc"===R?75:"twelveMonthDisc"===R?100:0,color:"#7c8585",progressColor:"#06b6bf",dimension:x?330:h?360:m?400:N?300:v?400:500})})]}),(y==l.Lz.DataCenterProxies&&$<=5e3||y==l.Lz.ISPProxies&&S<=5e3||y==l.Lz.ResidentialProxies&&C<=5e3)&&(0,i.jsx)(o,{title:"Buy Now",link:y==l.Lz.ResidentialProxies?"https://dashboard.residential.rayobyte.com/user-area/#/signup":"https://dashboard.proxy.rayobyte.com/purchase?country=".concat(y===l.Lz.DataCenterProxies?T:_,"&category=").concat(y===l.Lz.DataCenterProxies?"semi-dedicated"===G?"semi-3":"dedicated":"dedicated"===M.mainType?"dedicated":"semi-3","&quantity=").concat(y===l.Lz.DataCenterProxies?$:S,"&billingCycle=").concat(y===l.Lz.DataCenterProxies?"oneMonthDisc"===R?"monthly":"threeMonthDisc"===R?"quarterly":"sixMonthDisc"===R?"semiannually":"annually":"oneMonthDisc"===M.length?"monthly":"threeMonthDisc"===M.length?"quarterly":"sixMonthDisc"===M.length?"semiannually":"annually","&_gl=1%2a116hez4%2a_ga%2aNzExNzM2NzMxLjE2NzYzMTA5NzQ.%2a_ga_TK61YTK3F7%2aMTY3NzUwNzk2Ni4yNS4xLjE2Nzc1MDg2MjQuNTYuMC4w")})]})]})})})};var v=N}}]);