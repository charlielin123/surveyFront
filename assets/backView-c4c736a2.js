import{d as f,a as v,o as h,e as l,w as _,v as g,f as u,l as x,F as c,k as p,u as w,b as a,t as m,q as b}from"./index-4792eb10.js";import{b as N,a as L}from"./QQ-752a948f.js";const M={key:0,class:"login-box"},A={class:"select"},V=["value"],D={class:"contain"},H=["innerHTML"],T=["innerHTML"],S=f({__name:"backView",setup(F){const r=v({list:[],selected:{},isLogin:!1}),d=v({userName:"",password:"",submit(){N.post("/survey/pickList",{userName:d.userName,password:d.password}).then(n=>{var s,e;if((s=n.data)!=null&&s.noAuth){alert((e=n.data)==null?void 0:e.noAuth);return}r.list=n==null?void 0:n.data,r.isLogin=!0})}}),k=n=>{const s=new Date(n);return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()},y=n=>{if(!n)return"";if(Array.isArray(n))return n.map(t=>{const i=y(t)+"</br>";return console.log(i),i}).sort((t,i)=>Number.parseInt(t.split("-")[0])-Number.parseInt(i.split("-")[0]));const s=n.split("%");let e="";return s.forEach((t,i)=>{if(t.includes("&select")){let o=t.replace("&select","");o="<span class='highlight'>"+o,o+="</span>",e+=o}else if(t.includes("&")){let o=t.replace("&","");o="<span class='highlight'>"+o,o+="</span>",e+=o}else e+=t}),e};return h(()=>{}),(n,s)=>r.isLogin?(a(),l(c,{key:1},[u("div",A,[_(u("select",{name:"",id:"","onUpdate:modelValue":s[3]||(s[3]=e=>r.selected=e)},[(a(!0),l(c,null,p(r.list,e=>{var t;return a(),l("option",{key:e.id,value:(t=e.answer)==null?void 0:t[0]},m(e.userName+"-"+k(e.createdAt)),9,V)}),128))],512),[[x,r.selected]])]),u("div",D,[(a(!0),l(c,null,p(w(L),e=>(a(),l("div",{key:e.idx,class:"bg"},[u("h3",null,m(e.label),1),(a(!0),l(c,null,p(e.questions,t=>(a(),l("div",{key:t.idx,class:"sq"},[r.selected[t.idx]?(a(),l(c,{key:0},[u("h4",null,m(t.idx)+" "+m(t.question),1),Array.isArray(r.selected[t.idx])?(a(!0),l(c,{key:0},p(y(r.selected[t.idx]),i=>(a(),l("div",{class:"answer",innerHTML:i,key:i},null,8,H))),128)):(a(),l("div",{key:1,class:"answer",innerHTML:y(r.selected[t.idx])},null,8,T))],64)):b("",!0)]))),128))]))),128))])],64)):(a(),l("div",M,[_(u("input",{type:"text",placeholder:"請輸入帳號","onUpdate:modelValue":s[0]||(s[0]=e=>d.userName=e)},null,512),[[g,d.userName]]),_(u("input",{type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":s[1]||(s[1]=e=>d.password=e)},null,512),[[g,d.password]]),u("button",{onClick:s[2]||(s[2]=e=>d.submit())},"登入")]))}});export{S as default};
