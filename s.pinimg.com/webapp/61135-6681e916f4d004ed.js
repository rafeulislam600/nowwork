(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61135],{267529:function(e){e.exports="https://s.pinimg.com/webapp/btn_base-3772d107.png"},204324:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(78714),i=n(609500),r=n(50286);function a(){var e=(0,i.useHistory)(),t=(0,r.HG)();return function(n){t?(0,o.Z)(n,{disableOriginCheck:!0}):e.push(n)}}},989392:function(e,t){"use strict";t.Z=function(e){var t=new Date;return new Date(1e3*e)<=new Date(t.getFullYear()-18,t.getMonth(),t.getDate())}},472644:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(515198);function i(e){var t=e.size;return(0,o.jsx)("svg",{height:t,viewBox:"0 0 512 512",width:t,xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,o.jsx)("path",{d:"M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z",fill:"#4285f4"}),(0,o.jsx)("path",{d:"M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z",fill:"#34a853"}),(0,o.jsx)("path",{d:"M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z",fill:"#fbbc05"}),(0,o.jsx)("path",{d:"M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z",fill:"#ea4335"}),(0,o.jsx)("path",{d:"M20 20h472v472H20V20z"})]})})}},830269:function(e,t){"use strict";t.Z={EMAIL:1,FACEBOOK:2,GPLUS:3,GOOGLE_ONE_TAP:4,SMARTLOCK:5,MULTIFACTOR:6,SWITCH_ACCOUNT:7,LINE:8}},553171:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(231486);var i=n(643913),r=n(226198),a=n(966113),l=n(696157),s=n(826067),c=n(844974);function u(e,t,n,o,i,r,a){try{var l=e[r](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(o,i)}var d="undefined"!=typeof window,_=d?"".concat(window.location.origin,"/oauth/line/redirect"):"",h=function(e){var t=e.origin,n=e.data;return n&&t===window.location.origin?String(n):null},p=function(e){var t=e.url,n=e.key;if(!t.startsWith(window.location.origin)||n!==l.MM)return null;var o=(0,c.qn)(l.MM);return(0,c.L_)(l.MM),o};function g(e,t){if(d){var n,l=function(){var e="abcdefghijklmnopqrstuvwxyz1234567890";return new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:5).fill("").map((function(){return e[Math.floor(Math.random()*e.length)]})).join("")}(10),c=function(){var e,a=(e=regeneratorRuntime.mark((function e(a){var u,d,g,f,m,b,v,x,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.isTrusted){e.next=2;break}return e.abrupt("return");case 2:if(u=a instanceof MessageEvent?h(a):p(a),!(d=(0,s.mB)(u)).state||!d.code||d.state!==l){e.next=26;break}return n&&!n.closed&&n.close(),e.prev=6,e.next=9,fetch("/oauth/line/verify",{headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrftoken":"".concat(String(o.U2(r.fS)))},method:"POST",body:(0,i.Z)({code:d.code,redirect_uri:_})});case 9:return g=e.sent,e.next=12,g.json();case 12:f=e.sent,m=f.id_token,b=f.access_token,m&&b?t.success({line_id_token:m,line_access_token:b}):null===(v=t.error)||void 0===v||v.call(t,{message:"No tokens returned"}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),null===(x=t.error)||void 0===x||x.call(t,e.t0);case 20:return e.prev=20,n&&!n.closed&&n.close(),window.removeEventListener("message",c),window.removeEventListener("storage",c),null===(y=t.complete)||void 0===y||y.call(t),e.finish(20);case 26:case"end":return e.stop()}}),e,null,[[6,17,20,26]])})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function a(e){u(r,o,i,a,l,"next",e)}function l(e){u(r,o,i,a,l,"throw",e)}a(void 0)}))});return function(e){return a.apply(this,arguments)}}();window.addEventListener("message",c),window.addEventListener("storage",c),n=window.open("https://access.line.me/oauth2/v2.1/authorize?response_type=code"+"&client_id=".concat(a.z)+"&redirect_uri=".concat(encodeURIComponent(_))+"&state=".concat(l)+"&ui_locales=".concat(e)+"&scope=profile%20openid%20email","_blank")}else{var g;null===(g=t.error)||void 0===g||g.call(t,{message:"Window is undefined"})}}},711781:function(e,t){"use strict";t.Z=function(e){return JSON.parse(decodeURIComponent(atob((t=e.split(".")[1],(t||"").replace(/-/g,"+").replace(/_/g,"/"))).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")));var t}},43186:function(e,t,n){"use strict";n.d(t,{u:function(){return v},Z:function(){return y}});var o=n(76911),i=n(515198);function r(){return(0,i.jsx)("svg",{width:"40px",height:"40px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,i.jsx)("path",{d:"M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",id:"",fill:"#FFFFFF",fillRule:"nonzero"})})})}var a=n(56641),l=n(499128),s=n(898781),c=n(529195),u=n(867820),d=n(275926),_=n(343341),h=n(844974),p=n(908390),g=n(609500);function f(e,t,n,o,i,r,a){try{var l=e[r](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(o,i)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,i,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var v="web_siwa_redirect_path",x="id_token=";function y(){var e=(0,s.ZP)(),t=(0,g.useLocation)(),n=(0,d.f0)(),b=(0,g.useHistory)(),y=(0,_.F9)().showToast,w=m((0,o.useState)(!1),2),k=w[0],j=w[1],A=t.hash.indexOf(x),P=A>=0?t.hash.substring(A+x.length):null,C=(0,o.useRef)(null);return(0,o.useEffect)((function(){var o=function(){var o,r=(o=regeneratorRuntime.mark((function o(r){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:(0,u.My)("in_app_oauth.login.siwa.returned_with_token"),j(!0),n({apple_token:r},b,t.pathname,{noImmediateRedirect:!0},{event_type:7534,view_type:10}).then((function(){j(!1),(0,u.My)("in_app_oauth.login.siwa.login_success");var e=(0,h.qn)(v);(0,h.L_)(v),(0,a.Z)(e||"/")})).catch((function(){j(!1),(0,u.My)("in_app_oauth.login.siwa.login_failure"),y((function(t){var n=t.hideToast;return(0,i.jsx)(l.ZP,{text:e._('Oops! You do not have an account connected with Apple. Please try another method.', 'mweb.unauth.oauth_apple_login.login_failure_toast', 'Toast to alert user they failed to login with Apple'),onHide:n,variant:"error"})}))}));case 3:case"end":return o.stop()}}),o)})),function(){var e=this,t=arguments;return new Promise((function(n,i){var r=o.apply(e,t);function a(e){f(r,n,i,a,l,"next",e)}function l(e){f(r,n,i,a,l,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}();C.current!==P&&P&&o(P),C.current=P}),[b,e,P,t,n,y]),k?(0,i.jsx)(p.$j,{accessibilityLabel:e._('Loading...', 'Loading', 'Loading'),show:!0}):(0,i.jsx)(p.iP,{onTap:function(){var e;(0,u.My)("in_app_oauth.login.siwa_button.tapped");var n=(null===(e=t.state)||void 0===e?void 0:e.next)||(0,c.Yy)(t),o=n?decodeURIComponent(n):null;(0,h.Nh)(v,o),(0,a.Z)("https://appleid.apple.com/auth/authorize?client_id=".concat("com.pinterest.signinwithapple","&redirect_uri=").concat(encodeURIComponent(window.location.origin.toString()+"/oauth/login"),"&response_type=").concat(encodeURIComponent("code id_token"),"&response_mode=fragment"))},children:(0,i.jsxs)(p.xu,{height:40,width:"100%",display:"flex",alignItems:"center",color:"dark",rounding:"pill",paddingX:2,paddingY:1,children:[(0,i.jsx)(p.xu,{marginStart:-3,marginTop:-2,children:(0,i.jsx)(r,{})}),(0,i.jsx)(p.xu,{marginStart:"auto",marginEnd:"auto",children:(0,i.jsx)(p.xv,{weight:"bold",color:"light",children:e._('Continue with Apple', 'mweb.unauth.oauth_apple_login.login_button', 'Text on button allowing users to login with their Apple account')})})]})})}},368095:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(121151),i=n(898781),r=n(908390),a=n(515198);function l(e){var t=e.onDismiss,n=(0,i.ZP)(),l=n._('Oops! Too many login attempts', 'LoginRateLimitedModal.Modal.Heading', 'Modal heading for user who have tried to login too many times');return(0,a.jsxs)(o.ZP,{accessibilityModalLabel:l,onDismiss:t,heading:(0,a.jsxs)(r.xu,{"data-test-id":"login-rate-limited-header",children:[(0,a.jsx)(r.xu,{justifyContent:"center",display:"flex",padding:6,children:(0,a.jsx)(r.JO,{icon:"pinterest",accessibilityLabel:n._('Pinterest logo', 'Accessibility label for Pinterest icon', 'Accessibility label for Pinterest icon'),color:"brandPrimary",size:40})}),(0,a.jsx)(r.X6,{align:"center",size:"500",accessibilityLevel:1,children:l})]}),children:[(0,a.jsx)(r.xu,{paddingX:12,marginTop:4,marginBottom:8,"data-test-id":"login-rate-limited-text",children:(0,a.jsx)(r.xv,{align:"center",children:n._('You have reached the maximum number of login attempts. Try again in 30 minutes.', 'LoginRateLimitedModal.Modal.Heading', 'Modal heading for user who have tried to login too many times')})}),(0,a.jsx)(r.xu,{paddingX:12,marginBottom:8,"data-test-id":"login-rate-limited-footer",children:(0,a.jsx)(r.zx,{fullWidth:!0,color:"red",text:n._('Okay', 'LoginRateLimitedModal.Modal.OkButton', 'Okay button used to close modal'),onClick:t})})]})}},160561:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var o=n(76911),i=n(711781),r=n(472644),a=n(107287),l=n(898781),s=n(348584),c=n(908390),u=n(515198);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,i,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function h(){var e=(0,l.ZP)(),t=d((0,o.useState)(),2),n=t[0],i=t[1];return(0,s.Z)()?null:(0,u.jsxs)(c.xu,{position:"relative",children:[(0,u.jsx)(c.iP,{onTap:function(){return i(!0)},children:(0,u.jsxs)(c.xu,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:40,rounding:"pill",color:"secondary",children:[(0,u.jsx)(c.xu,{height:24,width:24,marginTop:1,children:(0,u.jsx)(r.Z,{size:20})}),(0,u.jsx)(c.xu,{marginStart:2,children:(0,u.jsx)(c.xv,{weight:"bold",children:e._('Connect with Google', 'googleConnectButtonWithDisabledSDK.buttonText', 'Connect with Google button text')})})]})}),n&&(0,u.jsx)(a.Z,{type:"google",onDismiss:function(){return i(!1)}})]})}var p=n(83969),g=n(773285),f=n(524172),m=n(867820);function b(e,t,n,o,i,r,a){try{var l=e[r](a),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(o,i)}function v(e){var t=e.onGoogleConnectSuccess,n=e.onTouch,r=(0,o.useRef)(null),a=(0,f.M)(),l=(0,o.useRef)(t);return(0,o.useEffect)((function(){l.current=t}),[t]),(0,o.useEffect)((function(){var e,t=function(e){var t=e.credential,n=e.select_by;(0,m.My)("unauth_mweb.gsi_button.select_by.".concat(n)),(0,m.NC)("press_google_connect_button");var o=(0,i.Z)(t);l.current({google_open_id_token:t,autologin:!1},{type:"google",google_open_id_token:t,first_name:o.given_name,last_name:o.family_name,image_url:o.picture})};return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null==a?void 0:a.ensureInit("button",t);case 2:(0,p.ru)({buttonRef:r,isDesktop:!1});case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function a(e){b(r,o,i,a,l,"next",e)}function l(e){b(r,o,i,a,l,"throw",e)}a(void 0)}))})(),function(){null==a||a.removeButtonCallback(t)}}),[a]),(0,u.jsx)(c.xu,{position:"relative",children:(0,u.jsx)(c.iP,{onTap:function(){null==n||n(),(0,m.My)("gsi_personalized_button.tap")},children:(0,u.jsx)(c.xu,{"aria-label":"GOOGLE_SIGNIN_BUTTON",height:44,children:(0,u.jsx)(c.xu,{ref:r,position:"absolute",width:"100%"})})})})}function x(e){return(0,(0,g.F)().checkExperiment)("mweb_google_disabled").anyEnabled?(0,u.jsx)(h,{}):(0,u.jsx)(v,{onGoogleConnectSuccess:e.onGoogleConnectSuccess,onTouch:e.onTouch})}},107287:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(121151),i=n(898781),r=n(908390),a=n(515198);function l(e){var t=e.type,n=e.onDismiss,l=(0,i.ZP)(),s="facebook"===t?l._('Oops! Facebook isn\'t available', 'socialAuthDisabled.facebook.title', 'Title for the modal shown when Facebook services are not working'):l._('Oops! Google isn\'t available', 'socialAuthDisabled.google.title', 'Title for the modal shown when Google services are not working'),c="facebook"===t?l._('Looks like Facebook isn\'t available right now.\n\nGive another option a try or refresh the page and try again later.', 'socialAuthDisabled.facebook.description', 'Description for the modal shown when Facebook services are not working'):l._('Looks like Google isn\'t available right now.\n\nGive another option a try or refresh the page and try again later.', 'socialAuthDisabled.google.description', 'Description for the modal shown when Google services are not working');return(0,a.jsx)(o.ZP,{accessibilityModalLabel:"",mobileHideCloseIcon:!0,isOpen:!0,onDismiss:n,type:"social_auth_disabled_modal",children:(0,a.jsxs)(r.xu,{padding:5,children:[(0,a.jsx)(r.xu,{marginBottom:3,children:(0,a.jsx)(r.X6,{size:"500",accessibilityLevel:1,children:s})}),(0,a.jsx)(r.xu,{marginBottom:3,children:(0,a.jsx)(r.xv,{children:c})}),(0,a.jsx)(r.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:(0,a.jsx)(r.xu,{paddingY:1,children:(0,a.jsx)(r.zx,{accessibilityLabel:l._('OK', 'socialAuthDisabled.okButton', 'Button that closes modal shown when Facebook or Google services are not working'),size:"lg",color:"red",text:l._('OK', 'socialAuthDisabled.okButton', 'Button that closes modal shown when Facebook or Google services are not working'),onClick:n})})})]})})}},170377:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var o=n(76911),i=n(506979),r=n(43186),a=n(107287),l=n(898781),s=n(867820),c=n(773285),u=n(780280),d=n(908390),_=n(467570),h=n(515198);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,i,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function f(e){var t=e.onFacebookConnectError,n=e.onFacebookConnectSuccess,i=e.onTouch,r=e.isRerequest,g=(0,l.ZP)(),f=(0,c.F)().checkExperiment,m=(0,u.B)().locale,b=f("mweb_facebook_disabled").anyEnabled,v=p((0,o.useState)(!1),2),x=v[0],y=v[1],w=p((0,o.useState)(!1),2),k=w[0],j=w[1];return(0,o.useEffect)((function(){b||(0,_.we)(m).then((function(){y(!0)}))}),[m,b]),(0,h.jsxs)(d.xu,{position:"relative","data-test-id":"FacebookConnectContainer",children:[(0,h.jsx)(d.xu,{bottom:!0,left:!0,right:!0,top:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},position:"absolute",rounding:5,children:(0,h.jsx)("div",{className:"fb-login-button","data-width":"100%","data-max-rows":"1","data-size":"large","data-button-type":"continue_with","data-layout":"rounded","data-show-faces":"false","data-auth-type":r?"rerequest":void 0,"data-scope":_.$.join(","),"data-auto-logout-link":"false","data-use-continue-as":"true"})}),(0,h.jsxs)("button",{onClick:function(){(0,s.My)("unauth_mweb.facebook_connect.button_click"),null==i||i(),b?j(!0):x&&(0,_.JF)().then((function(e){var t=e.creds,o=e.signupOptions;n(t,o)}),t)},style:{display:"flex",alignItems:"center",backgroundColor:"#1877F2",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",minWidth:"240px",borderRadius:"20px",padding:"0px 0px 0px 8px"},type:"button","data-test-id":"FacebookConnectButton",children:[(0,h.jsx)(d.xu,{color:"default",rounding:3,dangerouslySetInlineStyle:{__style:{paddingTop:"5px",paddingLeft:"3px",paddingRight:"2px",marginLeft:"4px",marginRight:"4.4px"}},children:(0,h.jsx)(d.JO,{accessibilityLabel:g._('facebook', 'accessible label for facebook icon', 'accessible label for facebook icon'),color:"shopping",icon:"facebook",inline:!0,size:19})}),(0,h.jsx)(d.xu,{alignItems:"center",display:"flex",justifyContent:"center",flex:"grow",marginEnd:1,children:(0,h.jsx)("span",{style:{fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"8px",letterSpacing:"0.25px"},children:g._('Continue with Facebook', 'Login page button', 'Login page button')})})]}),k&&(0,h.jsx)(a.Z,{type:"facebook",onDismiss:function(){return j(!1)}})]})}var m=n(962482),b=n(989392),v=n(63552),x=n(553171),y=n(267529),w=n.n(y),k={defaultButton:{display:"flex",alignItems:"center",backgroundColor:"#00C300",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",borderRadius:"20px",padding:"0px 0px 0px 8px"},lineLogo:{borderRadius:"12px",backgroundColor:"#00C300",width:"32px",height:"32px"},buttonText:{fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"33px"}},j=function(e){var t=e.buttonText,n=e.onLineConnectSuccess,o=e.onLineConnectError,i=e.onTouch,r=(0,l.ZP)(),a=(0,u.B)(),c=a.country,_=a.locale,p={success:function(e){var t=e.line_id_token,o=e.line_access_token;t&&o&&n({line_id_token:t,line_access_token:o},{line_id_token:t,line_access_token:o,type:"line"})},error:o},g=k.defaultButton;return"JP"===c?(0,h.jsx)(d.xu,{position:"relative","data-test-id":"LineConnectContainer",children:(0,h.jsxs)("button",{onClick:function(){(0,s.My)("unauth_mweb.line_connect.button_click"),i&&i(),(0,x.Z)(_,p)},style:g,type:"button","data-test-id":"line-connect-button",children:[(0,h.jsx)("img",{style:k.lineLogo,src:w(),alt:r._('line', 'accessible label for line icon', 'accessible label for line icon')}),(0,h.jsx)(d.kC,{alignItems:"center",justifyContent:"center",flex:"grow",children:(0,h.jsx)("span",{style:k.buttonText,children:t})})]})}):null},A=n(368095),P=n(432300),C=n(160561),z=n(598615),S=n(53987),L=n(609500);function O(e){var t=e.within,n=(0,l.ZP)(),o=(0,L.useLocation)(),i=(0,u.B)().userAgent.platform,r=o.pathname;return(0,h.jsx)(d.xu,{"data-test-id":"continue-app-button",marginBottom:2,children:(0,h.jsx)(z.Z,{componentType:13858,within:null!=t?t:"unauth-signup-modal",children:function(e){var a=e.handleOpenApp;return(0,h.jsx)(d.zx,{text:n._('Get Pinterest App', 'unauth.modal.get_app.button_text', 'App download button text'),color:"red",fullWidth:!0,onClick:function(){(0,s.My)("homepage_top_module"===t?"mweb.unauth.homepage.top.download_app_button.click":"homepage_bottom_module"===t?"mweb.unauth.homepage.bottom.download_app_button.click":"mweb.unauth.signup_modal.download_app_button.click"),r&&a({deepLinkUri:"/"===r?"/":!(0,S.cD)(o)||"ios"!==i&&"ipad"!==i?r.substr(1):"user"+r})}})}})})}var T=n(830269),Z=n(499128),E=n(112690),M=n(204324),B=n(19121),I=n(155949),F=n(45169),D=n(639952),R=n(385740),U=n(597897),G=n(275926),N=n(122485),H=n(343341),W=n(52022),K=n(584595);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,i,r=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function V(e){var t=e.apple,n=e.facebook,a=e.fbConnectHandler,u=e.footer,_=e.from,p=e.google,g=e.isBusiness,x=e.isRerequest,y=e.line,w=e.next,k=void 0===w?"/":w,z=e.noImmediateRedirect,S=e.onFacebookTouch,q=e.onLoginTouch,$=e.onSignupTouch,J=e.showAppInstallButton,V=e.showEmailButton,Q=e.showTextDivider,ee=e.viewParameter,te=e.within,ne=e.component,oe=e.attributionLabel,ie=(0,L.useHistory)(),re=(0,L.useLocation)(),ae=(0,l.ZP)(),le=(0,H.F9)().showToast,se=(0,E.Z)(),ce=(0,R.SU)().viewType,ue=(0,W.Z)(),de=(0,i.useDispatch)(),_e=(0,G.f0)(),he=(0,U.U)(),pe=(0,c.F)().flush,ge=(0,N.m)(),fe=(0,M.Z)(),me=(0,B.Z)(),be=me.isAuth,ve=me.isLimitedLogin,xe=X((0,o.useState)(null),2),ye=xe[0],we=xe[1],ke=X((0,o.useState)(!1),2),je=ke[0],Ae=ke[1],Pe=X((0,o.useState)("default"),2),Ce=Pe[0],ze=Pe[1],Se=("facebook"===Ce?5e3:"google"===Ce&&4e3)||void 0;(0,o.useEffect)((function(){if(he){var e,t;if(u)null===(e=he.preload)||void 0===e||e.call(he,new URL("login.js","file://"));if(V)null===(t=he.preload)||void 0===t||t.call(he,new URL("signup.js","file://"))}}),[]);var Le=be?{login_state:ve?P.Z.LIMITED:P.Z.DEFAULT}:Object.freeze({}),Oe=function(e){se({view_type:10,view_parameter:ee,element:e,event_type:102,aux_data:Le})},Te=function(e){se({view_type:ce,view_parameter:ee,component:ne,element:e,event_type:10441,aux_data:{upsell_reason:oe}})},Ze=function(e,t){var n,o;switch(t){case"facebook":n=3205,o=T.Z.FACEBOOK;break;case"google":n=3204,o=T.Z.GPLUS;break;case"line":n=3556,o=T.Z.LINE}return{event_type:e,view_type:10,view_parameter:n,element:o===T.Z.GPLUS?12981:void 0,aux_data:Y(Y({},Le),{},{signup_login_method:o})}},Ee=function(e){return function(t,n){var o,i="google"===e?"gsi_btn":"other",r="true"===(null===(o=re.state)||void 0===o?void 0:o.switch_account)?{isSwitchAccount:!0,trigger:i}:{noImmediateRedirect:z,trigger:i};"facebook"===e&&(null==a||a("success")),(0,s.NC)(e+"_login_success"),_e(t,ie,k,r,Ze(7534,e)).catch((function(t){!function(e,t,n,o){if(we(null),t&&[K.xN,K.lg,K.Pv].includes(t.api_error_code))if("facebook"!==n.type||n.email)!function(){(0,s.My)("unauth_mweb.facebook_signup_attempt"),n.gender||(0,s.My)("unauth_mweb.facebook_signup_attempt.nogender");var e=n.birthday;if(void 0===e||!(0,b.Z)(e))return pe(),void ie.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:"facebook"===n.type?Y(Y({},n),{},{email_source_site:F.E_.FACEBOOK}):n,progressBarAnimationDuration:Se}});we("signup"),ze(o);var t="facebook"===n.type?Y(Y({},n),{},{email_source_site:F.E_.FACEBOOK,birthday_source_site:F.E_.FACEBOOK,birthday:e}):Y(Y({},n),{},{birthday:e});ge(t,{signupAttemptContextEvent:Ze(7537,o)}).then((function(){(0,s.NC)("signup_via_login_buttons"),["facebook","google"].includes(o)&&fe(k||"/"),we(null)}),(function(e){if("line"===n.type){var t=n;e.api_error_code===K.iZ?ie.push({pathname:"/signup/line-email-collect/",state:{signupOptions:t}}):e.api_error_code===K.NF&&ie.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:t}})}le((function(t){var n=t.hideToast;return(0,h.jsx)(Z.ZP,{text:e.api_error_code&&e.message?e.message:ae._('Sorry! Something went wrong on our end.', 'Error logging on', 'Error logging on'),onHide:n})})),we(null)}))}();else{var i=n;ie.push({pathname:"/signup/fbemailcollect/",state:{signupOptions:i}}),(0,s.My)("unauth_mweb.reg_via_fb.has_email_perm.false")}else t&&K.ik.includes(t.api_error_code)?Ae(!0):((0,s.My)(t?"mweb_login_button_skip_register.api_error_code.".concat(t.api_error_code):"unauth_mweb.login.unexpected_error"),le((function(e){var n=e.hideToast;return(0,h.jsx)(Z.ZP,{text:t&&t.api_error_code&&t.message?t.message:ae._('Sorry, we can\'t log you in.', 'Error message when user having trouble login in.', 'Error message when user having trouble login in.'),onHide:n})})))}(0,t,n,e)})),we("login"),ze(e)}},Me=function(e){var t=e.event;t.stopPropagation(),t.preventDefault(),null==q||q(),_&&de((0,D.rm)(_)),ue({action:"click",item:"login-button"}),Oe(30),(0,s.My)("unauth_mweb.login_buttons.footer.".concat((null==u?void 0:u.type)||"button")),(0,s.NC)("press_login"),ie.push({pathname:g?"/business/login/":"/login/",search:re.search,state:{next:k}})};return(0,h.jsxs)(d.xu,{marginTop:g?-5:0,maxWidth:400,marginStart:"auto",marginEnd:"auto","data-test-id":"LoginButtonsContainer",children:[je&&(0,h.jsx)(A.Z,{onDismiss:function(){return Ae(!1)}}),Q&&(0,h.jsx)(d.xu,{marginBottom:3,marginTop:3,children:(0,h.jsx)(d.xv,{align:"center",size:"100",weight:"bold",children:ae._('OR', 'Separator for email login button and social login button', 'Separator for email login button and social login button')})}),(0,h.jsx)(d.xu,{marginBottom:6,children:(0,h.jsxs)(o.Fragment,{children:[J&&(0,h.jsx)(O,{within:te}),V&&(0,h.jsx)(d.xu,{"data-test-id":"continue-email-button",marginBottom:g?-2:2,children:(0,h.jsx)(d.zx,{fullWidth:!0,color:J?"gray":"red",text:g?ae._('Create account', 'Button text for creating a business account', 'Button text for creating a business account'):ae._('Continue with email', 'Sign up button', 'Sign up button'),onClick:function(e){var t=e.event;t&&(t.stopPropagation(),t.preventDefault()),(0,s.NC)("press_email_signup"),ue({action:"click",item:"email-signup-button"}),null==$||$(),_&&de((0,D.rm)(_)),Te(13506),Oe(31),ie.push({pathname:g?"/business/signup/step1/":"/signup/step1/",search:re.search,state:{next:k}})}})}),n&&(0,h.jsx)(d.xu,{marginBottom:2,"data-test-id":"facebook-connect-button",children:(0,h.jsx)(f,{onFacebookConnectError:function(){null==a||a("error"),le((function(e){var t=e.hideToast;return(0,h.jsx)(Z.ZP,{text:ae._('Unable to connect to Facebook', 'Error logging on with Facebook', 'Error logging on with Facebook'),onHide:t})}))},onFacebookConnectSuccess:Ee("facebook"),onTouch:function(){null==S||S(),Te(13505),ue({action:"click",item:"facebook-connect-button"}),Oe(68)},isRerequest:x})}),p&&(0,h.jsx)(d.xu,{marginBottom:2,"data-test-id":"google-connect-button",children:(0,h.jsx)(C.Z,{isAuthenticated:be,onGoogleConnectSuccess:Ee("google"),onTouch:function(){Te(13504)}})}),y&&(0,h.jsx)(d.xu,{marginBottom:2,"data-test-id":"line-connect-button",children:(0,h.jsx)(j,{buttonText:ae._('Continue with LINE', 'Login page button', 'Login page button'),onLineConnectError:function(){le((function(e){var t=e.hideToast;return(0,h.jsx)(Z.ZP,{text:ae._('Unable to connect to Line', 'Error logging on with Line', 'Error logging on with Line'),onHide:t})}))},onLineConnectSuccess:Ee("line"),onTouch:function(){Te(13507),Oe(12277),ue({action:"click",item:"line-connect-button"})}})}),t&&(0,h.jsx)(d.xu,{marginBottom:2,"data-test-id":"apple-connect-button",children:(0,h.jsx)(r.Z,{})})]})}),u&&("member_link"===u.type?(0,h.jsx)(d.xu,{marginTop:-4,"data-test-id":"login-member",children:(0,h.jsx)(v.Z,{pressState:"none",onTouch:function(e){return Me({event:e})},children:(0,h.jsx)(d.xu,{paddingY:u.noPadding?0:4,marginBottom:u.increasedSpaceBelow?-1:-2,children:(0,h.jsx)(d.xv,{align:"center",size:"200",weight:"bold",color:u.textColorIsLight?"light":"dark",children:ae._('Already a member? Log in', 'Link on mobile web sign up modal to direct unauth users to the login page', 'Link on mobile web sign up modal to direct unauth users to the login page')})})})}):(0,h.jsx)(d.xu,{marginBottom:5,"data-test-id":"login-button",children:(0,h.jsx)(d.zx,{fullWidth:!0,color:"transparent",onClick:Me,text:ae._('Log in', 'Login page button', 'Login page button')})})),ye&&("signup"===ye?(0,h.jsx)(I.Z,{progressBarAnimationDuration:Se}):(0,h.jsx)(m.Z,{}))]})}},542837:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(898781),i=n(112690),r=n(52022),a=n(349700),l=n(385740),s=n(966113),c=n(908390),u=n(515198);function d(e){var t=e.isMobileHomepage,n=e.isBusiness,d=void 0!==n&&n,_=(e.size,e.alignText),h=void 0===_?"center":_,p=e.inModernizedNuxExperiment,g=(0,o.ZP)(),f=(0,i.Z)(),m=(0,r.Z)(),b=(0,l.SU)(),v=b.viewType,x=b.viewParameter,y=s.R_,w=s.cv,k=d?s.V$:s.U5;return(0,u.jsx)(c.xu,{display:"flex",alignItems:"left"===h?"start":"center",alignSelf:"center",direction:"row",justifyContent:"center",paddingX:4,wrap:!0,children:(0,u.jsx)(c.xv,{color:t?"inverse":"subtle",align:"left"===h?"start":"center",size:"100",overflow:"normal",inline:!0,children:(0,a.nk)(g._('By continuing, you agree to Pinterest\'s {{ termsOfService }} and acknowledge you\'ve read our {{ privacyPolicy }}. {{ noticeAtCollection }}.', ' - ', ' -- '),{termsOfService:(0,u.jsx)(c.xu,{display:"inlineBlock","data-test-id":"business-tos",children:(0,u.jsx)(c.xv,{color:(p?"default":t&&"inverse")||"subtle",inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(c.rU,{href:k,display:"inlineBlock",target:"blank",onClick:function(){m({action:"click",item:"business-tos"}),v&&f({view_type:v,view_parameter:x,element:8012,event_type:102})},underline:"hover",children:d?g._('Business Terms of Service', 'Mobile web business terms of service link for partners', 'Mobile web business terms of service link for partners'):g._('Terms of Service', 'Mobile web terms of service link', 'Mobile web terms of service link')})})},"termsOfService"),privacyPolicy:(0,u.jsx)(c.xu,{display:"inlineBlock","data-test-id":"privacy",children:(0,u.jsx)(c.xv,{color:(p?"default":t&&"inverse")||"subtle",inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(c.rU,{href:y,display:"inlineBlock",target:"blank",onClick:function(){m({action:"click",item:"privacy-policy"}),v&&f({view_type:v,view_parameter:x,element:8004,event_type:102})},underline:"hover",children:g._('Privacy Policy', 'Mobile web privacy policy link', 'Mobile web privacy policy link')})})},"privacyPolicy"),noticeAtCollection:(0,u.jsx)(c.xu,{display:"inlineBlock","data-test-id":"noticeAtCollection",children:(0,u.jsx)(c.xv,{color:t?"inverse":"subtle",inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(c.rU,{href:w,display:"inlineBlock",target:"blank",onClick:function(){m({action:"click",item:"notice-at-collection"})},underline:"hover",children:g._('Notice at collection', 'Mobile web notice at collection link', 'termOfService.link.noticeAtCollection')})})},"noticeAtCollection")})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61135-6681e916f4d004ed.js.map