"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[38],{166:function(e,n,i){i.d(n,{II:function(){return u},n5:function(){return s}});var r,a,l,t,o=i(168),d=i(6778),s=(d.ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n  list-style-type: none;\n  margin: 0 auto;\n  padding: 0;\n  margin-top: 20px;\n"]))),d.ZP.form(a||(a=(0,o.Z)(['\ndisplay: flex;\nflex-direction: column;\n  margin: 0 auto;\n  padding: 10px;\n  gap: 20px;\n  width: 100%;\n  alignItems="center"\n  justifyContent="center"\n\n\n'])))),u=(d.ZP.button(l||(l=(0,o.Z)(["\n    display: block;\n    width: auto;\n    text-align: center;\n    vertical-align: middle;\n    padding: 12px 24px;\n    margin: 0 auto;\n    margin-bottom: 30px;\n    margin-top: 30px;\n    border: 1px solid #131468;\n    border-radius: 8px;\n    background: #3537ff;\n    background: -webkit-gradient(linear, left top, left bottom, from(#3537ff), to(#131468));\n    background: -moz-linear-gradient(top, #3537ff, #131468);\n    background: linear-gradient(to bottom, #3537ff, #131468);\n    -webkit-box-shadow: #4042ff 0px 0px 40px 0px;\n    -moz-box-shadow: #4042ff 0px 0px 40px 0px;\n    box-shadow: #4042ff 0px 0px 40px 0px;\n    text-shadow: #0b0b3a 1px 1px 1px;\n    font: normal normal bold 20px comic sans ms;\n    color: #ffffff;\n    cursor: pointer;\n    text-decoration: none;"]))),d.ZP.input(t||(t=(0,o.Z)(["\ndisplay: block;\n margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-color: #d4bfd3;\n  color: #50174c;\n  font-weight: 100;\n  border: 1px solid #d4bfd3;\n  height: 50px;\n  width: auto;\n  font-size: 20px;\n  border-radius: 4px;\n  padding: 0 20px;\n  transition: 300ms;\n  cursor: pointer;\n  ::placeholder {\n    color:#50174c;\n  }\n"]))))},4038:function(e,n,i){i.r(n);var r=i(9439),a=i(8206),l=i(8208),t=i(5442),o=i(4224),d=i(2791),s=i(166),u=i(3855),c=i(714),p=i(7689),m=i(184);n.default=function(){var e=(0,d.useState)(""),n=(0,r.Z)(e,2),i=n[0],f=n[1],v=(0,d.useState)(""),x=(0,r.Z)(v,2),h=x[0],b=x[1],g=(0,p.s0)(),Z=(0,u.I0)(),y=function(e){var n=e.target,i=n.name,r=n.value;switch(i){case"email":return f(r);case"password":return b(r);default:return}};return(0,m.jsx)(a.W,{p:10,children:(0,m.jsxs)(s.n5,{action:"",onSubmit:function(e){e.preventDefault(),Z((0,c.x4)({email:i,password:h})),g("/contacts"),f(""),b("")},children:[(0,m.jsx)(l.l,{mt:10,children:"Email"}),(0,m.jsx)(t.I,{placeholder:"Input your email",type:"email",name:"email",value:i,onChange:y}),(0,m.jsx)(l.l,{mt:10,children:"Password"}),(0,m.jsx)(t.I,{placeholder:"Input your password",name:"password",type:"password",value:h,onChange:y}),(0,m.jsx)(o.z,{type:"submit",size:"lg",w:"full",mt:10,children:"Login"})]})})}},2392:function(e,n,i){i.d(n,{NJ:function(){return R},e:function(){return Z}});var r=i(1413),a=i(4925),l=i(9439),t=i(9886),o=i(4591),d=i(7872),s=i(9219),u=i(2996),c=i(5715),p=i(6992),m=i(2791),f=i(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],x=["getRootProps","htmlProps"],h=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(h,2),g=b[0],Z=b[1],y=(0,t.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),k=I[0],R=I[1];var q=(0,d.G)((function(e,n){var i=(0,s.jC)("Form",e),t=function(e){var n=e.id,i=e.isRequired,t=e.isInvalid,d=e.isDisabled,s=e.isReadOnly,u=(0,a.Z)(e,v),c=(0,m.useId)(),f=n||"field-".concat(c),x="".concat(f,"-label"),h="".concat(f,"-feedback"),b="".concat(f,"-helptext"),g=(0,m.useState)(!1),Z=(0,l.Z)(g,2),y=Z[0],I=Z[1],k=(0,m.useState)(!1),R=(0,l.Z)(k,2),q=R[0],w=R[1],P=(0,m.useState)(!1),F=(0,l.Z)(P,2),N=F[0],j=F[1],_=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&w(!0)}))})}),[b]),C=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(N),"data-disabled":(0,p.PB)(d),"data-invalid":(0,p.PB)(t),"data-readonly":(0,p.PB)(s),id:void 0!==e.id?e.id:x,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,d,N,t,s,x]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:h},e),{},{ref:(0,o.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[h]),T=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!s,isDisabled:!!d,isFocused:!!N,onFocus:function(){return j(!0)},onBlur:function(){return j(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:q,setHasHelpText:w,id:f,labelId:x,feedbackId:h,helpTextId:b,htmlProps:u,getHelpTextProps:_,getErrorMessageProps:O,getRootProps:T,getLabelProps:C,getRequiredIndicatorProps:S}}((0,u.Lr)(e)),d=t.getRootProps,h=(t.htmlProps,(0,a.Z)(t,x)),b=(0,p.cx)("chakra-form-control",e.className);return(0,f.jsx)(k,{value:h,children:(0,f.jsx)(g,{value:i,children:(0,f.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},d({},n)),{},{className:b,__css:i.container}))})})}));q.displayName="FormControl",(0,d.G)((function(e,n){var i=R(),a=Z(),l=(0,p.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:a.helperText,className:l}))})).displayName="FormHelperText"},8208:function(e,n,i){i.d(n,{l:function(){return m}});var r=i(1413),a=i(4925),l=i(2392),t=i(7872),o=i(9219),d=i(2996),s=i(5715),u=i(6992),c=i(184),p=["className","children","requiredIndicator","optionalIndicator"],m=(0,t.G)((function(e,n){var i,t=(0,o.mq)("FormLabel",e),m=(0,d.Lr)(e),v=(m.className,m.children),x=m.requiredIndicator,h=void 0===x?(0,c.jsx)(f,{}):x,b=m.optionalIndicator,g=void 0===b?null:b,Z=(0,a.Z)(m,p),y=(0,l.NJ)(),I=null!=(i=null==y?void 0:y.getLabelProps(Z,n))?i:(0,r.Z)({ref:n},Z);return(0,c.jsxs)(s.m.label,(0,r.Z)((0,r.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,r.Z)({display:"block",textAlign:"start"},t),children:[v,(null==y?void 0:y.isRequired)?h:g]}))}));m.displayName="FormLabel";var f=(0,t.G)((function(e,n){var i=(0,l.NJ)(),a=(0,l.e)();if(!(null==i?void 0:i.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(s.m.span,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:t}))}));f.displayName="RequiredIndicator"},5442:function(e,n,i){i.d(n,{I:function(){return x}});var r=i(1413),a=i(4925),l=i(2392),t=i(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function s(e){var n=function(e){var n,i,o,s=(0,l.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,m=e.required,f=e.isRequired,v=e.isInvalid,x=e.isReadOnly,h=e.isDisabled,b=e.onFocus,g=e.onBlur,Z=(0,a.Z)(e,d),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==s?void 0:s.hasFeedbackText)&&(null==s?void 0:s.isInvalid)&&y.push(s.feedbackId);(null==s?void 0:s.hasHelpText)&&y.push(s.helpTextId);return(0,r.Z)((0,r.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==s?void 0:s.id,isDisabled:null!=(n=null!=c?c:h)?n:null==s?void 0:s.isDisabled,isReadOnly:null!=(i=null!=p?p:x)?i:null==s?void 0:s.isReadOnly,isRequired:null!=(o=null!=m?m:f)?o:null==s?void 0:s.isRequired,isInvalid:null!=v?v:null==s?void 0:s.isInvalid,onFocus:(0,t.v0)(null==s?void 0:s.onFocus,b),onBlur:(0,t.v0)(null==s?void 0:s.onBlur,g)})}(e),i=n.isDisabled,s=n.isInvalid,u=n.isReadOnly,c=n.isRequired,p=(0,a.Z)(n,o);return(0,r.Z)((0,r.Z)({},p),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(s),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=i(7872),c=i(9219),p=i(2996),m=i(5715),f=i(184),v=["htmlSize"],x=(0,u.G)((function(e,n){var i=e.htmlSize,l=(0,a.Z)(e,v),o=(0,c.jC)("Input",l),d=s((0,p.Lr)(l)),u=(0,t.cx)("chakra-input",e.className);return(0,f.jsx)(m.m.input,(0,r.Z)((0,r.Z)({size:i},d),{},{__css:o.field,ref:n,className:u}))}));x.displayName="Input",x.id="Input"}}]);
//# sourceMappingURL=38.caf4f257.chunk.js.map