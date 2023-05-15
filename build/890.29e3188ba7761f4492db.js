"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[890],{890:(e,n,r)=>{r.r(n),r.d(n,{default:()=>P});var t=r(893),o=r(611),a=r(887),i=r(150),l=r(168),c=(0,l.hg)("profile/fetchProfileData",(function(e,n){return r=void 0,t=void 0,a=function(){var e,r,t;return function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(o){switch(o.label){case 0:e=n.extra,r=n.rejectWithValue,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,e.api.get("/profile")];case 2:return[2,o.sent().data];case 3:return t=o.sent(),console.log(t),[2,r("error")];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{c(a.next(e))}catch(e){n(e)}}function l(e){try{c(a.throw(e))}catch(e){n(e)}}function c(n){var r;n.done?e(n.value):(r=n.value,r instanceof o?r:new o((function(e){e(r)}))).then(i,l)}c((a=a.apply(r,t||[])).next())}));var r,t,o,a})),u=(0,l.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{},extraReducers:function(e){e.addCase(c.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(c.fulfilled,(function(e,n){e.isLoading=!1,e.data=n.payload})).addCase(c.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),s=(u.actions,u.reducer),d=r(704),f=r(161),v=r(809),p=function(e){var n;return null===(n=null==e?void 0:e.profile)||void 0===n?void 0:n.data},h=function(e){var n;return null===(n=null==e?void 0:e.profile)||void 0===n?void 0:n.isLoading},y=function(e){var n;return null===(n=null==e?void 0:e.profile)||void 0===n?void 0:n.error},m=r(925);const x="ZTyX8_n9";var b=function(){return b=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},b.apply(this,arguments)},j=function(e){var n=e.className,r=(0,a.$G)("profile").t,i=(0,d.v9)(p);return(0,d.v9)(h),(0,d.v9)(y),(0,t.jsxs)("div",b({className:(0,o.A)("wW9jgKKD",{},[n])},{children:[(0,t.jsxs)("div",b({className:"nP7J5SWY"},{children:[(0,t.jsx)(v.x,{title:r("Профиль")},void 0),(0,t.jsx)(f.zx,b({className:"LGXZAu9G",theme:f.bn.OUTLINE},{children:r("Редактировать")}),void 0)]}),void 0),(0,t.jsxs)("div",b({className:"mem1neCT"},{children:[(0,t.jsx)(m.I,{value:null==i?void 0:i.first,placeholder:r("Ваше имя")||"",className:x},void 0),(0,t.jsx)(m.I,{value:null==i?void 0:i.lastname,placeholder:r("Ваша фамилия")||"",className:x},void 0)]}),void 0)]}),void 0)},g=r(461),O=r(294),N=function(){return N=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},N.apply(this,arguments)},w={profile:s};const P=function(e){var n=e.className,r=((0,a.$G)().t,(0,g.T)());return(0,O.useEffect)((function(){r(c())}),[r]),(0,t.jsx)(i.W,N({reducers:w,removeAfterUnmount:!0},{children:(0,t.jsx)("div",N({className:(0,o.A)("",{},[n])},{children:(0,t.jsx)(j,{},void 0)}),void 0)}),void 0)}},150:(e,n,r)=>{r.d(n,{W:()=>i});var t=r(893),o=r(294),a=r(704),i=function(e){var n=e.children,r=e.reducers,i=e.removeAfterUnmount,l=(0,a.oR)(),c=(0,a.I0)();return(0,o.useEffect)((function(){return Object.entries(r).forEach((function(e){var n=e[0],r=e[1];l.reducerManager.add(n,r),c({type:"@INIT ".concat(n," reducer")})})),function(){i&&Object.entries(r).forEach((function(e){var n=e[0];l.reducerManager.remove(n),c({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,t.jsx)(t.Fragment,{children:n},void 0)}},925:(e,n,r)=>{r.d(n,{I:()=>l});var t=r(893),o=r(611),a=r(294);var i=function(){return i=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},l=(0,a.memo)((function(e){var n=e.className,r=e.value,l=e.onChange,c=e.type,u=void 0===c?"text":c,s=e.placeholder,d=e.autofocus,f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r}(e,["className","value","onChange","type","placeholder","autofocus"]),v=(0,a.useRef)(null),p=(0,a.useState)(!1),h=p[0],y=p[1],m=(0,a.useState)(0),x=m[0],b=m[1];return(0,a.useEffect)((function(){var e;d&&(y(!0),null===(e=v.current)||void 0===e||e.focus())}),[d]),(0,t.jsxs)("div",i({className:(0,o.A)("LuFDUWoP",{},[n])},{children:[s&&(0,t.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(s,">")}),void 0),(0,t.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,t.jsx)("input",i({ref:v,type:u,value:r,onChange:function(e){null==l||l(e.target.value),b(e.target.value.length)},className:"LVdIPwcx",onBlur:function(){y(!1)},onFocus:function(){y(!0)},onSelect:function(e){var n;b((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)}},f),void 0),h&&(0,t.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*x,"px")}},void 0)]}),void 0)]}),void 0)}))},809:(e,n,r)=>{r.d(n,{x:()=>u,l:()=>l});var t=r(893),o=r(611),a=r(294);const i={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var l,c=function(){return c=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(l||(l={}));var u=(0,a.memo)((function(e){var n,r=e.className,a=e.title,u=e.text,s=e.theme,d=void 0===s?l.PRIMARY:s;return(0,t.jsxs)("div",c({className:(0,o.A)(i.Text,(n={},n[i[d]]=!0,n),[r])},{children:[a&&(0,t.jsx)("p",c({className:i.title},{children:a}),void 0),u&&(0,t.jsx)("p",c({className:i.text},{children:u}),void 0)]}),void 0)}))},461:(e,n,r)=>{r.d(n,{T:()=>o});var t=r(704),o=function(){return(0,t.I0)()}}}]);