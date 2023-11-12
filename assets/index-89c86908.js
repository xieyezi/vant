import{V as d}from"./index-f5629326.js";import{V as c}from"./index-fcac6cfc.js";import{a as V}from"./use-translate-0400f29b.js";import{A as h,y as m,r as f,o as _,c as g,w as u,e as o,C as e,a as x,F as P,g as w,t as C}from"./vue-libs-83dbabed.js";import{V as U}from"./index-1869f856.js";import{V as k}from"./index-33a62985.js";import"./index-3124e750.js";import"./use-route-b1061918.js";import"./index-5a7b6df9.js";import"./index-c916422a.js";import"./with-install-a78877b5.js";import"./use-id-c5eb2431.js";import"./use-expose-efcfdee3.js";import"./constant-ee6e27d7.js";import"./use-scope-id-e548748d.js";import"./index-e6476cbd.js";const I=h({__name:"BasicUsage",setup(b){const l=V({"zh-CN":{label:"文本",placeholder:"请输入文本"},"en-US":{label:"Label",placeholder:"Text"}}),a=m("");return(s,n)=>{const t=f("demo-block");return _(),g(t,{title:e(l)("basicUsage")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),label:e(l)("label"),placeholder:e(l)("placeholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),y=h({__name:"CustomType",setup(b){const l=V({"zh-CN":{text:"文本",digit:"整数",phone:"手机号",number:"数字",customType:"自定义类型",smsPlaceholder:"请输入短信验证码",textPlaceholder:"请输入文本",digitPlaceholder:"请输入整数",phonePlaceholder:"请输入手机号",numberPlaceholder:"请输入数字（支持小数）",passwordPlaceholder:"请输入密码"},"en-US":{text:"Text",digit:"Digit",phone:"Phone",number:"Number",customType:"Custom Type",smsPlaceholder:"SMS",textPlaceholder:"Text",digitPlaceholder:"Digit",phonePlaceholder:"Phone",numberPlaceholder:"Number",passwordPlaceholder:"Password"}}),a=m(""),s=m(""),n=m(""),t=m(""),r=m("");return(p,i)=>{const S=f("demo-block");return _(),g(S,{title:e(l)("customType")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(U),null,{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=v=>a.value=v),label:e(l)("text"),placeholder:e(l)("textPlaceholder"),autocomplete:"off"},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:s.value,"onUpdate:modelValue":i[1]||(i[1]=v=>s.value=v),type:"tel",label:e(l)("phone"),placeholder:e(l)("phonePlaceholder")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:n.value,"onUpdate:modelValue":i[2]||(i[2]=v=>n.value=v),type:"digit",label:e(l)("digit"),placeholder:e(l)("digitPlaceholder")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:t.value,"onUpdate:modelValue":i[3]||(i[3]=v=>t.value=v),type:"number",label:e(l)("number"),placeholder:e(l)("numberPlaceholder")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:r.value,"onUpdate:modelValue":i[4]||(i[4]=v=>r.value=v),type:"password",label:e(l)("password"),placeholder:e(l)("passwordPlaceholder"),autocomplete:"off"},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1})]),_:1},8,["title"])}}}),z=h({__name:"Disabled",setup(b){const l=V({"zh-CN":{text:"文本",disabled:"禁用输入框",inputReadonly:"输入框只读",inputDisabled:"输入框已禁用"},"en-US":{text:"Text",inputReadonly:"Input Readonly",inputDisabled:"Input Disabled"}});return(a,s)=>{const n=f("demo-block");return _(),g(n,{title:e(l)("disabled")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{"model-value":e(l)("inputReadonly"),label:e(l)("text"),readonly:""},null,8,["model-value","label"]),o(e(d),{"model-value":e(l)("inputDisabled"),label:e(l)("text"),disabled:""},null,8,["model-value","label"])]),_:1})]),_:1},8,["title"])}}}),A=h({__name:"ShowIcon",setup(b){const l=V({"zh-CN":{text:"文本",showIcon:"显示图标",showClearIcon:"显示清除图标"},"en-US":{text:"Text",showIcon:"Show Icon",showClearIcon:"Show Clear Icon"}}),a=m(""),s=m("123");return(n,t)=>{const r=f("demo-block");return _(),g(r,{title:e(l)("showIcon")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=p=>a.value=p),label:e(l)("text"),"left-icon":"smile-o","right-icon":"warning-o",placeholder:e(l)("showIcon")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=p=>s.value=p),clearable:"",label:e(l)("text"),"left-icon":"music-o",placeholder:e(l)("showClearIcon")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),N=h({__name:"Required",setup(b){const l=V({"zh-CN":{phone:"手机号",required:"必填星号",autoRequired:"自动展示星号",phonePlaceholder:"请输入手机号",usernamePlaceholder:"请输入用户名"},"en-US":{phone:"Phone",required:"Required",autoRequired:"Auto Required",phonePlaceholder:"Phone",usernamePlaceholder:"Username"}}),a=m("123"),s=m("");return(n,t)=>{const r=f("demo-block");return _(),x(P,null,[o(r,{title:e(l)("required")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),required:"",label:e(l)("username"),placeholder:e(l)("usernamePlaceholder")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=p=>a.value=p),required:"",label:e(l)("phone"),placeholder:e(l)("phonePlaceholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"]),o(r,{title:e(l)("autoRequired")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(U),{required:"auto"},{default:u(()=>[o(e(d),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=p=>s.value=p),rules:[{required:!0}],label:e(l)("username"),placeholder:e(l)("usernamePlaceholder")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:a.value,"onUpdate:modelValue":t[3]||(t[3]=p=>a.value=p),rules:[{required:!1}],label:e(l)("phone"),placeholder:e(l)("phonePlaceholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1})]),_:1},8,["title"])],64)}}}),B=h({__name:"ErrorInfo",setup(b){const l=V({"zh-CN":{phone:"手机号",errorInfo:"错误提示",phoneError:"手机号格式错误",phonePlaceholder:"请输入手机号",usernamePlaceholder:"请输入用户名"},"en-US":{phone:"Phone",errorInfo:"Error Info",phoneError:"Invalid phone",phonePlaceholder:"Phone",usernamePlaceholder:"Username"}}),a=m("123"),s=m("");return(n,t)=>{const r=f("demo-block");return _(),g(r,{title:e(l)("errorInfo")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),error:"",label:e(l)("username"),placeholder:e(l)("usernamePlaceholder")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=p=>a.value=p),label:e(l)("phone"),placeholder:e(l)("phonePlaceholder"),"error-message":e(l)("phoneError")},null,8,["modelValue","label","placeholder","error-message"])]),_:1})]),_:1},8,["title"])}}}),T=h({__name:"InsertButton",setup(b){const l=V({"zh-CN":{sms:"短信验证码",sendSMS:"发送验证码",insertButton:"插入按钮",smsPlaceholder:"请输入短信验证码"},"en-US":{sms:"SMS",sendSMS:"Send SMS",insertButton:"Insert Button",smsPlaceholder:"SMS"}}),a=m("");return(s,n)=>{const t=f("demo-block");return _(),g(t,{title:e(l)("insertButton")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),center:"",clearable:"",label:e(l)("sms"),placeholder:e(l)("smsPlaceholder")},{button:u(()=>[o(e(k),{size:"small",type:"primary"},{default:u(()=>[w(C(e(l)("sendSMS")),1)]),_:1})]),_:1},8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),q=h({__name:"FormatValue",setup(b){const l=V({"zh-CN":{text:"文本",formatValue:"格式化输入内容",formatOnBlur:"在失焦时执行格式化",formatOnChange:"在输入时执行格式化"},"en-US":{text:"Text",formatValue:"Format Value",formatOnBlur:"Format On Blur",formatOnChange:"Format On Change"}}),a=m(""),s=m(""),n=t=>t.replace(/\d/g,"");return(t,r)=>{const p=f("demo-block");return _(),g(p,{title:e(l)("formatValue")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=i=>a.value=i),label:e(l)("text"),formatter:n,placeholder:e(l)("formatOnChange")},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=i=>s.value=i),label:e(l)("text"),formatter:n,"format-trigger":"onBlur",placeholder:e(l)("formatOnBlur")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),R=h({__name:"Autosize",setup(b){const l=V({"zh-CN":{message:"留言",autosize:"高度自适应",placeholder:"请输入留言"},"en-US":{sms:"SMS",autosize:"Auto Resize",placeholder:"Message"}}),a=m("");return(s,n)=>{const t=f("demo-block");return _(),g(t,{title:e(l)("autosize")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),autosize:"",rows:"1",type:"textarea",label:e(l)("message"),placeholder:e(l)("placeholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),$=h({__name:"ShowWordLimit",setup(b){const l=V({"zh-CN":{message:"留言",placeholder:"请输入留言",showWordLimit:"显示字数统计"},"en-US":{message:"Message",placeholder:"Message",showWordLimit:"Show Word Limit"}}),a=m("");return(s,n)=>{const t=f("demo-block");return _(),g(t,{title:e(l)("showWordLimit")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),autosize:"","show-word-limit":"",rows:"2",type:"textarea",maxlength:"50",label:e(l)("message"),placeholder:e(l)("placeholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),M=h({__name:"InputAlign",setup(b){const l=V({"zh-CN":{text:"文本",inputAlign:"输入框内容对齐",alignPlaceHolder:"输入框内容右对齐"},"en-US":{text:"Text",inputAlign:"Input Align",alignPlaceHolder:"Input Align Right"}}),a=m("");return(s,n)=>{const t=f("demo-block");return _(),g(t,{title:e(l)("inputAlign")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),label:e(l)("text"),placeholder:e(l)("alignPlaceHolder"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),L=h({__name:"LabelAlign",setup(b){const l=V({"zh-CN":{label:"文本",top:"顶部对齐",center:"居中对齐",left:"左对齐",right:"右对齐",labelAlign:"输入框文本位置"},"en-US":{label:"Label",top:"Align Top",center:"Align Center",left:"Align Left",right:"Align Right",labelAlign:"Label Align"}}),a=m("");return(s,n)=>{const t=f("demo-block");return _(),g(t,{title:e(l)("labelAlign")},{default:u(()=>[o(e(c),{inset:""},{default:u(()=>[o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=r=>a.value=r),label:e(l)("label"),placeholder:e(l)("top"),"label-align":"top"},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=r=>a.value=r),label:e(l)("label"),placeholder:e(l)("left"),"label-align":"left"},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=r=>a.value=r),label:e(l)("label"),placeholder:e(l)("center"),"label-align":"center"},null,8,["modelValue","label","placeholder"]),o(e(d),{modelValue:a.value,"onUpdate:modelValue":n[3]||(n[3]=r=>a.value=r),label:e(l)("label"),placeholder:e(l)("right"),"label-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),oe=h({__name:"index",setup(b){return(l,a)=>(_(),x(P,null,[o(I),o(y),o(z),o(A),o(N),o(B),o(T),o(q),o(R),o($),o(M),o(L)],64))}});export{oe as default};
