(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{3665:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return a(4769)}])},4769:function(e,n,a){"use strict";a.r(n);var t=a(5893),i=a(7294),s=a(8471),c=a(5247),_=a(8073),l=a(9877),g=a.n(l),o=a(9895),r=a(3799),d=a(1854),u=a(5675),p=a.n(u);n.default=function(){let[e,n]=(0,i.useState)(""),[a,l]=(0,i.useState)(void 0),[u,x]=(0,i.useState)(""),[h,k]=(0,i.useState)(!1),[b,A]=(0,i.useState)(0),S=e=>/^[가-힣a-z0-9-_]{3,10}$/.test(e),m=()=>{A(e=>e+.2)},P=async()=>{if(!S(e)){x("영어소문자, 한글, 숫자, 기호, 3글자~10글자, 공백 불가"),l(!1),m();return}try{let n="https://agrounds.com/api/login/nickname/?nickname=".concat(encodeURIComponent(e)),a=await fetch(n);(await a.json()).isAvailable?(x("사용 가능한 닉네임입니다."),l(!0)):(x("사용 불가능한 닉네임입니다."),l(!1))}catch(e){console.error("API 요청 중 오류 발생:",e)}},[j,f]=(0,i.useState)(""),[v,N]=(0,i.useState)(!0),[w,y]=(0,i.useState)("");return(0,t.jsxs)("div",{className:g().backg,children:[(0,t.jsx)(s.Z,{}),(0,t.jsx)("form",{children:(0,t.jsxs)("div",{className:g().back,children:[(0,t.jsxs)("div",{className:g().block1,children:[(0,t.jsx)(p(),{className:g().icon,src:_.Z}),"AGROUNDS로 회원가입"]}),(0,t.jsx)(o.Z,{text:"아이디",type:"email",placeholder:"이메일"}),(0,t.jsx)(o.Z,{text:"비밀번호",type:"password",placeholder:"비밀번호"}),(0,t.jsx)(o.Z,{text:"비밀번호 확인",type:"password",placeholder:"비밀번호 재입력"}),(0,t.jsxs)("div",{className:g().block2,children:[(0,t.jsx)("div",{className:g().name,children:"닉네임"}),(0,t.jsx)("input",{className:g().input,type:"text",placeholder:"닉네임",onChange:e=>n(e.target.value),value:e}),(0,t.jsx)("div",{className:g().checkdup,onClick:P,children:"중복확인"})]}),(0,t.jsx)("div",{className:!1===a?g().errorMessage:g().normalMessage,onAnimationEnd:()=>k(!1),children:u},b),(0,t.jsx)(o.Z,{text:"이름",type:"text",placeholder:"실명"}),(0,t.jsx)(o.Z,{text:"생년월일",type:"text",id:"birthday",placeholder:"8자리 (YYYYMMDD)",value:j,maxLength:8,onChange:e=>{let{value:n}=e.target;if(/^\d{0,8}$/.test(n)){if(f(n),8===n.length){let e=parseInt(n.substring(0,4),10),a=parseInt(n.substring(4,6),10)-1,t=parseInt(n.substring(6,8),10),i=new Date(e,a,t),s=new Date;i.getFullYear()===e&&i.getMonth()===a&&i.getDate()===t&&e>=1900&&i<=s?(N(!0),y("")):(N(!1),y("유효하지 않은 날짜입니다."))}else N(!1),y("생년월일은 8자리 숫자여야 합니다.")}}}),!v&&(0,t.jsx)("div",{style:{color:"red"},children:"유효하지 않은 날짜입니다."}),(0,t.jsx)("div",{children:(0,t.jsx)(r.Z,{color:"#055540"})}),(0,t.jsx)(d.Z,{color:"#055540"}),(0,t.jsx)("button",{className:g().submit,children:"가입하기"})]})}),(0,t.jsx)(c.Z,{})]})}},9877:function(e){e.exports={backg:"ASigninPage_backg__jAwde",back:"ASigninPage_back__xfYT6",block1:"ASigninPage_block1__pUgey",icon:"ASigninPage_icon__5i99W",block2:"ASigninPage_block2__CCpvH",name:"ASigninPage_name__92Tb3",input:"ASigninPage_input__U_1kP",checkdup:"ASigninPage_checkdup__lJ_fO",genderBtn:"ASigninPage_genderBtn__oqg_d",block4:"ASigninPage_block4__66XZs",block3:"ASigninPage_block3__OcQ7t",block5:"ASigninPage_block5__yiwhR",agreeAll:"ASigninPage_agreeAll__74TF0",block6:"ASigninPage_block6__xXfqR",accept:"ASigninPage_accept__vqA9d",text:"ASigninPage_text__4f_BC",look:"ASigninPage_look__PVj9w",submit:"ASigninPage_submit__AWDbr",a:"ASigninPage_a__IAQ1y",errorMessage:"ASigninPage_errorMessage__3uopR",shake:"ASigninPage_shake__ak9Cx",normalMessage:"ASigninPage_normalMessage__VEorC"}}},function(e){e.O(0,[873,517,54,888,774,179],function(){return e(e.s=3665)}),_N_E=e.O()}]);