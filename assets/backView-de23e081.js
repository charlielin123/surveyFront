import{d as f,a as g,o as h,e as l,w as _,v,f as u,l as x,F as c,k as p,u as w,b as a,t as m,q as b}from"./index-684f0b26.js";import{b as N,a as L}from"./QQ-752a948f.js";const M={key:0,class:"login-box"},A={class:"select"},V=["value"],D={class:"contain"},H=["innerHTML"],T=["innerHTML"],S=f({__name:"backView",setup(F){const r=g({list:[],selected:{},isLogin:!1}),d=g({userName:"",password:"",submit(){N.post("/survey/pickList",{userName:d.userName,password:d.password}).then(n=>{var t,e;if((t=n.data)!=null&&t.noAuth){alert((e=n.data)==null?void 0:e.noAuth);return}r.list=n==null?void 0:n.data,r.isLogin=!0})}}),k=n=>{const t=new Date(n);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()},y=n=>{if(!n)return"";if(Array.isArray(n))return n.map(s=>{const i=y(s)+"</br>";return console.log(i),i}).sort((s,i)=>Number.parseInt(s.split("-")[0])-Number.parseInt(i.split("-")[0]));const t=n.split("%");let e="";return t.forEach((s,i)=>{if(s.includes("&select")){let o=s.replace("&select","");o="<span class='highlight'>"+o,o+="</span>",e+=o}else if(s.includes("&")){let o=s.replace("&","");o="<span class='highlight'>"+o,o+="</span>",e+=o}else e+=s}),e};return h(()=>{}),(n,t)=>r.isLogin?(a(),l(c,{key:1},[u("div",A,[_(u("select",{name:"",id:"","onUpdate:modelValue":t[3]||(t[3]=e=>r.selected=e)},[(a(!0),l(c,null,p(r.list,e=>{var s;return a(),l("option",{key:e.id,value:(s=e.answer)==null?void 0:s[0]},m(e.userName+"-"+k(e.createdAt)),9,V)}),128))],512),[[x,r.selected]])]),u("div",D,[(a(!0),l(c,null,p(w(L),e=>(a(),l("div",{key:e.idx,class:"bg"},[u("h3",null,m(e.label),1),(a(!0),l(c,null,p(e.questions,s=>(a(),l("div",{key:s.idx,class:"sq"},[r.selected[s.idx]?(a(),l(c,{key:0},[u("h4",null,m(s.idx)+" "+m(s.question),1),Array.isArray(r.selected[s.idx])?(a(!0),l(c,{key:0},p(y(r.selected[s.idx]),i=>(a(),l("div",{class:"answer",innerHTML:i,key:i},null,8,H))),128)):(a(),l("div",{key:1,class:"answer",innerHTML:y(r.selected[s.idx])},null,8,T))],64)):b("",!0)]))),128))]))),128))])],64)):(a(),l("div",M,[_(u("input",{type:"text",placeholder:"請輸入帳號","onUpdate:modelValue":t[0]||(t[0]=e=>d.userName=e)},null,512),[[v,d.userName]]),_(u("input",{type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=e=>d.password=e)},null,512),[[v,d.password]]),u("button",{onClick:t[2]||(t[2]=()=>{d.submit()})}," 登入 ")]))}});export{S as default};
