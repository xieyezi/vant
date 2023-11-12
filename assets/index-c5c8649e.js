import{a as w}from"./Picker-c1509dc8.js";import{w as N}from"./with-install-a78877b5.js";import{V as b}from"./index-756978cf.js";import{V as S}from"./index-7758b450.js";import{a as T}from"./use-translate-0400f29b.js";import{s as p}from"./function-call-b65aa903.js";import{A as x,y as s,o as _,c as U,w as u,e as n,C as e,D as k,a as g,g as j,t as R,F as $,r as B}from"./vue-libs-83dbabed.js";import{V as z}from"./index-33a62985.js";import"./use-expose-efcfdee3.js";import"./index-e6476cbd.js";import"./use-touch-8cd17a21.js";import"./constant-ee6e27d7.js";import"./use-sync-prop-ref-60eae172.js";import"./index-3bb89b35.js";import"./use-id-c5eb2431.js";import"./use-route-b1061918.js";import"./index-c916422a.js";import"./index-d928a42a.js";import"./on-popup-reopen-bcf43cef.js";import"./use-refs-374c0fba.js";import"./index-e72b81d7.js";import"./interceptor-3c3c2616.js";import"./utils-52e6291f.js";import"./index-94895153.js";import"./mount-component-94eea14a.js";import"./index-5a7b6df9.js";import"./index-4c6d2d8c.js";import"./use-lock-scroll-1eff2e8c.js";import"./use-lazy-render-2383afef.js";import"./use-scope-id-e548748d.js";import"./index-b7134fb7.js";const y=N(w),C=y,P=x({__name:"SelectDateTime",setup(V){const t=T({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期"},"en-US":{date:"Date",time:"Time",title:"Title"}}),a=s(["12","00"]),l=s(["2022","06","01"]),o=new Date(2020,0,1),d=new Date(2025,5,1),v=()=>{p(`${l.value.join("/")} ${a.value.join(":")}`)},i=()=>{p("cancel")};return(D,r)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:v,onCancel:i},{default:u(()=>[n(e(S),{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=m=>l.value=m),"min-date":e(o),"max-date":e(d)},null,8,["modelValue","min-date","max-date"]),n(e(b),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),E=x({__name:"SelectTimeRange",setup(V){const t=T({"zh-CN":{startTime:"开始时间",endTime:"结束时间",title:"预约时间"},"en-US":{startTime:"Start Time",endTime:"End Time",title:"Title"}}),a=s(["12","00"]),l=s(["13","00"]),o=()=>{p(`${a.value.join(":")} - ${l.value.join(":")}`)},d=()=>{p("cancel")};return(v,i)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("startTime"),e(t)("endTime")],onConfirm:o,onCancel:d},{default:u(()=>[n(e(b),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=D=>a.value=D)},null,8,["modelValue"]),n(e(b),{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=D=>l.value=D)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),G=x({__name:"SelectDateRange",setup(V){const t=T({"zh-CN":{startDate:"开始日期",endDate:"结束日期",title:"预约日期"},"en-US":{startDate:"Start Date",endDate:"End Date",title:"Title"}}),a=s(["2022","06","01"]),l=s(["2023","06","01"]),o=new Date(2020,0,1),d=new Date(2025,5,1),v=k(()=>new Date(Number(a.value[0]),Number(a.value[1])-1,Number(a.value[2]))),i=()=>{p(`${a.value.join("/")} - ${l.value.join("/")}`)},D=()=>{p("cancel")};return(r,m)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("startDate"),e(t)("endDate")],onConfirm:i,onCancel:D},{default:u(()=>[n(e(S),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=c=>a.value=c),"min-date":e(o),"max-date":e(d)},null,8,["modelValue","min-date","max-date"]),n(e(S),{modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=c=>l.value=c),"min-date":v.value,"max-date":e(d)},null,8,["modelValue","min-date","max-date"])]),_:1},8,["title","tabs"]))}}),A=x({__name:"NextStepButton",setup(V){const t=T({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期",nextStep:"下一步"},"en-US":{date:"Date",time:"Time",title:"Title",nextStep:"Next Step"}}),a=s(["12","00"]),l=s(["2022","06","01"]),o=new Date(2020,0,1),d=new Date(2025,5,1),v=()=>{p(`${l.value.join("/")} ${a.value.join(":")}`)},i=()=>{p("cancel")};return(D,r)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],"next-step-text":e(t)("nextStep"),onConfirm:v,onCancel:i},{default:u(()=>[n(e(S),{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=m=>l.value=m),"min-date":e(o),"max-date":e(d)},null,8,["modelValue","min-date","max-date"]),n(e(b),{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs","next-step-text"]))}}),F=x({__name:"ControlTab",setup(V){const t=T({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期",btnText:"点击切换 tab，当前为 "},"en-US":{date:"Date",time:"Time",title:"Title",btnText:"toggle tab, current "}}),a=s(0),l=s(["12","00"]),o=s(["2022","06","01"]),d=new Date(2020,0,1),v=new Date(2025,5,1),i=()=>{p(`${o.value.join("/")} ${l.value.join(":")}`)},D=()=>{p("cancel")},r=()=>{a.value=a.value?0:1};return(m,c)=>(_(),g($,null,[n(e(z),{style:{margin:"10px 0"},type:"primary",onClick:r},{default:u(()=>[j(R(e(t)("btnText")+a.value),1)]),_:1}),n(e(C),{"active-tab":a.value,"onUpdate:activeTab":c[2]||(c[2]=f=>a.value=f),title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:i,onCancel:D},{default:u(()=>[n(e(S),{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=f=>o.value=f),"min-date":e(d),"max-date":e(v)},null,8,["modelValue","min-date","max-date"]),n(e(b),{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=f=>l.value=f)},null,8,["modelValue"])]),_:1},8,["active-tab","title","tabs"])],64))}}),xe=x({__name:"index",setup(V){const t=T({"zh-CN":{selectDateTime:"选择日期时间",selectDateRange:"选择日期范围",selectTimeRange:"选择时间范围",nextStepButton:"下一步按钮",controlled:"受控模式"},"en-US":{selectDateTime:"Select Date Time",selectDateRange:"Select Date Range",selectTimeRange:"Select Time Range",nextStepButton:"Next Step Button",controlled:"Controlled Mode"}});return(a,l)=>{const o=B("demo-block");return _(),g($,null,[n(o,{card:"",title:e(t)("selectDateTime")},{default:u(()=>[n(P)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("nextStepButton")},{default:u(()=>[n(A)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("selectDateRange")},{default:u(()=>[n(G)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("selectTimeRange")},{default:u(()=>[n(E)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("controlled")},{default:u(()=>[n(F)]),_:1},8,["title"])],64)}}});export{xe as default};
