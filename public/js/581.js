(self.webpackChunk=self.webpackChunk||[]).push([[581,619],{2705:(e,t,o)=>{var r=o(5639).Symbol;e.exports=r},4239:(e,t,o)=>{var r=o(2705),n=o(9607),a=o(2333),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?n(e):a(e)}},7561:(e,t,o)=>{var r=o(7990),n=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(n,""):e}},1957:(e,t,o)=>{var r="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;e.exports=r},9607:(e,t,o)=>{var r=o(2705),n=Object.prototype,a=n.hasOwnProperty,l=n.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),o=e[s];try{e[s]=void 0;var r=!0}catch(e){}var n=l.call(e);return r&&(t?e[s]=o:delete e[s]),n}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,o)=>{var r=o(1957),n="object"==typeof self&&self&&self.Object===Object&&self,a=r||n||Function("return this")();e.exports=a},7990:e=>{var t=/\s/;e.exports=function(e){for(var o=e.length;o--&&t.test(e.charAt(o)););return o}},3279:(e,t,o)=>{var r=o(3218),n=o(7771),a=o(4841),l=Math.max,s=Math.min;e.exports=function(e,t,o){var c,i,d,u,m,p,f=0,h=!1,x=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var o=c,r=i;return c=i=void 0,f=t,u=e.apply(r,o)}function w(e){var o=e-p;return void 0===p||o>=t||o<0||x&&e-f>=d}function g(){var e=n();if(w(e))return k(e);m=setTimeout(g,function(e){var o=t-(e-p);return x?s(o,d-(e-f)):o}(e))}function k(e){return m=void 0,v&&c?y(e):(c=i=void 0,u)}function N(){var e=n(),o=w(e);if(c=arguments,i=this,p=e,o){if(void 0===m)return function(e){return f=e,m=setTimeout(g,t),h?y(e):u}(p);if(x)return clearTimeout(m),m=setTimeout(g,t),y(p)}return void 0===m&&(m=setTimeout(g,t)),u}return t=a(t)||0,r(o)&&(h=!!o.leading,d=(x="maxWait"in o)?l(a(o.maxWait)||0,t):d,v="trailing"in o?!!o.trailing:v),N.cancel=function(){void 0!==m&&clearTimeout(m),f=0,c=p=i=m=void 0},N.flush=function(){return void 0===m?u:k(n())},N}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,o)=>{var r=o(4239),n=o(7005);e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==r(e)}},7771:(e,t,o)=>{var r=o(5639);e.exports=function(){return r.Date.now()}},4841:(e,t,o)=>{var r=o(7561),n=o(3218),a=o(3448),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,i=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var o=s.test(e);return o||c.test(e)?i(e.slice(2),o?2:8):l.test(e)?NaN:+e}},3744:(e,t)=>{"use strict";t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}},9224:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var r=o(821),n={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)],l={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)],c=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],i=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],d=[(0,r.createElementVNode)("rect",{x:"0",y:"0",width:"24",height:"24",stroke:"none"},null,-1),(0,r.createElementVNode)("circle",{cx:"10",cy:"10",r:"7"},null,-1),(0,r.createElementVNode)("line",{x1:"21",y1:"21",x2:"15",y2:"15"},null,-1)],u=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)];const m={name:"Icon",props:{name:String,classes:{type:String,default:"w-6 h-6"}}};const p=(0,o(3744).Z)(m,[["render",function(e,t,o,m,p,f){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,["view"===o.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",n,a)):(0,r.createCommentVNode)("",!0),"edit"===o.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",l,s)):(0,r.createCommentVNode)("",!0),"delete"===o.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(o.classes),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c,2)):(0,r.createCommentVNode)("",!0),"close"===o.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:3,class:(0,r.normalizeClass)(o.classes),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i,2)):(0,r.createCommentVNode)("",!0),"search"===o.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:4,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(o.classes),viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},d,2)):(0,r.createCommentVNode)("",!0),"chevron-down"===o.name?((0,r.openBlock)(),(0,r.createElementBlock)("svg",{key:5,xmlns:"http://www.w3.org/2000/svg",class:(0,r.normalizeClass)(o.classes),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},u,2)):(0,r.createCommentVNode)("",!0)],64)}]])},7687:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var r=o(821),n={class:"px-6 py-3 border-b border-gray-200"},a={class:"text-lg"},l={class:"flex items-center justify-between"};var s=[(0,r.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)],c={class:"fixed inset-0 px-4 py-6 sm:px-0 z-50 overflow-hidden scrollbar-thin scrollbar-thumb-tc-primary scrollbar-track-gray-100"};const i={emits:["close"],components:{ModalLayout:{__name:"ModalLayout",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup:function(e,t){var o=t.emit,n=e;(0,r.watch)((function(){return n.show}),(function(){n.show?document.body.style.overflow="hidden":document.body.style.overflow=null}));var a=function(){n.closeable&&o("close")},l=function(e){"Escape"===e.key&&n.show&&a()};(0,r.onMounted)((function(){return document.addEventListener("keydown",l)})),(0,r.onUnmounted)((function(){document.removeEventListener("keydown",l),document.body.style.overflow=null}));var i=(0,r.computed)((function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl"}[n.maxWidth]}));return function(t,o){return(0,r.openBlock)(),(0,r.createBlock)(r.Teleport,{to:"body"},[(0,r.createVNode)(r.Transition,{"leave-active-class":"duration-200"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",null,[(0,r.createVNode)(r.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",{class:"fixed z-40 inset-0 transform transition-all",onClick:a},s,512),[[r.vShow,e.show]])]})),_:1}),(0,r.createElementVNode)("div",c,[(0,r.createVNode)(r.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["mb-6 bg-white rounded overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",i.value])},[e.show?(0,r.renderSlot)(t.$slots,"default",{key:0}):(0,r.createCommentVNode)("",!0)],2),[[r.vShow,e.show]])]})),_:3})])],512),[[r.vShow,e.show]])]})),_:3})])}}},Icon:o(9224).Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}};const d=(0,o(3744).Z)(i,[["render",function(e,t,o,s,c,i){var d=(0,r.resolveComponent)("Icon"),u=(0,r.resolveComponent)("ModalLayout");return(0,r.openBlock)(),(0,r.createBlock)(u,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:i.close},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",null,[(0,r.renderSlot)(e.$slots,"title")]),(0,r.createElementVNode)("button",{class:"cursor-pointer text-gray-800 hover:text-gray-400",onClick:t[0]||(t[0]=function(){return i.close&&i.close.apply(i,arguments)})},[(0,r.createVNode)(d,{name:"close"})])])])]),(0,r.renderSlot)(e.$slots,"content")]})),_:3},8,["show","max-width","closeable","onClose"])}]])},6879:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var r=o(821),n={class:"flex justify-end px-6 border-t py-3"},a={class:"relative"},l={class:"text-gray-500 absolute left-2 top-2.5"},s=["value"];const c={props:["modelValue"],emits:["update:modelValue"],components:{Icon:o(9224).Z},methods:{focus:function(){this.$refs.input.focus()},clearSearch:function(){this.$emit("update:modelValue","")}}};const i=(0,o(3744).Z)(c,[["render",function(e,t,o,c,i,d){var u=(0,r.resolveComponent)("Icon");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("span",l,[(0,r.createVNode)(u,{name:"search"})]),(0,r.createElementVNode)("input",{class:"form-input px-10",value:o.modelValue,placeholder:"Search...",onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,s),o.modelValue?((0,r.openBlock)(),(0,r.createElementBlock)("span",{key:0,class:"cursor-pointer text-gray-500 absolute right-2 top-2.5",onClick:t[1]||(t[1]=function(){return d.clearSearch&&d.clearSearch.apply(d,arguments)})},[(0,r.createVNode)(u,{name:"close"})])):(0,r.createCommentVNode)("",!0)])])}]])},7763:(e,t,o)=>{"use strict";o.d(t,{Z:()=>U});var r=o(821),n={class:"relative"};const a={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},setup:function(){var e=(0,r.ref)(!1),t=function(t){e.value&&27===t.keyCode&&(e.value=!1)};return(0,r.onMounted)((function(){return document.addEventListener("keydown",t)})),(0,r.onUnmounted)((function(){return document.removeEventListener("keydown",t)})),{open:e}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}}};var l=o(3744);const s=(0,l.Z)(a,[["render",function(e,t,o,a,l,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",{onClick:t[0]||(t[0]=function(e){return a.open=!a.open})},[(0,r.renderSlot)(e.$slots,"trigger")]),(0,r.withDirectives)((0,r.createElementVNode)("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=function(e){return a.open=!1})},null,512),[[r.vShow,a.open]]),(0,r.createVNode)(r.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["absolute z-50 mt-2 rounded-md shadow-lg",[s.widthClass,s.alignmentClasses]]),style:{display:"none"},onClick:t[2]||(t[2]=function(e){return a.open=!1})},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[(0,r.renderSlot)(e.$slots,"content")],2)],2),[[r.vShow,a.open]])]})),_:3})])}]]);var c=o(9224),i={class:"bg-gray-100 shadow"},d={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},u={class:"relative flex items-center justify-between h-16"},m={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},p=(0,r.createElementVNode)("span",{class:"sr-only"},"Open main menu",-1),f={class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},h=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],x={class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},v=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)],y={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},w=(0,r.createElementVNode)("div",{class:"flex-shrink-0 flex items-center"},[(0,r.createElementVNode)("img",{class:"h-12 w-auto",src:"/assets/images/logo.png",alt:"Enhance"})],-1),g={class:"hidden sm:block sm:ml-6 md:flex md:items-center"},k={class:"flex items-center md:space-x-2 lg:space-x-4"},N={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},V={class:"flex items-center"},b=["src","alt"],E=(0,r.createElementVNode)("span",{class:"sr-only"},"Open user menu",-1),C={class:"hidden md:block ml-3 text-gray-600"},B={class:"ml-3 text-gray-600"},_={class:"sm:hidden"},S={class:"px-2 pt-2 pb-3 space-y-1"};const j={__name:"Navbar",setup:function(e){var t=(0,r.inject)("hasAnyPermission"),o=(0,r.ref)(!1);return function(e,n){var a=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("nav",i,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("button",{type:"button",onClick:n[0]||(n[0]=function(e){o.value=!o.value}),class:"inline-flex items-center justify-center p-2 rounded-md text-tc-primary focus:outline-none","aria-expanded":"false"},[p,(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("svg",f,h,512)),[[r.vShow,!o.value]]),(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("svg",x,v,512)),[[r.vShow,o.value]])])]),(0,r.createElementVNode)("div",y,[w,(0,r.createElementVNode)("div",g,[(0,r.createElementVNode)("div",k,[(0,r.createVNode)(a,{href:e.route("dashboard"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",["Dashboard"===e.$page.component?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Dashboard")]})),_:1},8,["href","class"]),(0,r.unref)(t)(["view-appointments","create-appointments","update-appointments","delete-appointments"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:0,href:e.route("calendar"),class:(0,r.normalizeClass)([[e.$page.component.startsWith("Calendar")?"text-tc-primary":"text-gray-600"],"hover:text-tc-primary px-3 py-2 rounded-md font-medium"])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Calendar ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-hosts","create-hosts","update-hosts","delete-hosts"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:1,href:e.route("hosts.index"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Hosts")?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Hosts")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-properties","create-properties","update-properties","delete-properties"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:2,href:e.route("properties.index"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Properties")?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Properties ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-cleaners","create-cleaners","update-cleaners","delete-cleaners"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:3,href:e.route("cleaners.index"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Cleaners")?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Employees ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:4,href:e.route("users.list"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("UsersList")?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(a,{href:e.route("notification.new_job"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Notifications")?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Notifications ")]})),_:1},8,["href","class"])])])]),(0,r.createElementVNode)("div",N,[(0,r.createVNode)((0,r.unref)(s),{align:"right",width:"48"},{trigger:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("button",V,[(0,r.createElementVNode)("img",{class:"h-8 w-8 text-sm border-2 border-tc-primary-light rounded-full object-cover",src:e.$page.props.user.photo_url,alt:e.$page.props.user.first_name},null,8,b),E,(0,r.createElementVNode)("span",C,(0,r.toDisplayString)("".concat(e.$page.props.user.first_name," ").concat(e.$page.props.user.last_name)),1),(0,r.createElementVNode)("span",B,[(0,r.createVNode)((0,r.unref)(c.Z),{name:"chevron-down",classes:"w-4 h-4"})])])]})),content:(0,r.withCtx)((function(){return[(0,r.createVNode)(a,{href:e.route("profile"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Your Profile ")]})),_:1},8,["href"]),(0,r.createVNode)(a,{href:e.route("profile"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Settings")]})),_:1},8,["href"]),(0,r.createVNode)(a,{href:e.route("logout"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1",method:"post",as:"button"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Sign out")]})),_:1},8,["href"])]})),_:1})])])]),(0,r.withDirectives)((0,r.createElementVNode)("div",_,[(0,r.createElementVNode)("div",S,[(0,r.createVNode)(a,{href:e.route("dashboard"),class:(0,r.normalizeClass)([[e.$page.component.startsWith("Dashboard")?"bg-tc-primary text-white":"text-gray-600"],"block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Dashboard")]})),_:1},8,["href","class"]),(0,r.unref)(t)(["view-appointments","create-appointments","update-appointments","delete-appointments"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:0,href:e.route("calendar"),class:(0,r.normalizeClass)(["block px-3 py-2 rounded-md text-base font-medium",[e.$page.component.startsWith("Calendar")?"bg-tc-primary text-white":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Calendar ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-hosts","create-hosts","update-hosts","delete-hosts"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:1,href:e.route("hosts.index"),class:(0,r.normalizeClass)([[e.$page.component.startsWith("Hosts")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Hosts ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-properties","create-properties","update-properties","delete-properties"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:2,href:e.route("properties.index"),class:(0,r.normalizeClass)([[e.$page.component.startsWith("Properties")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Properties ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-cleaners","create-cleaners","update-cleaners","delete-cleaners"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:3,href:e.route("cleaners.index"),class:(0,r.normalizeClass)([[e.$page.component.startsWith("Cleaners")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Employees ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,r.openBlock)(),(0,r.createBlock)(a,{key:4,href:e.route("users.list"),class:(0,r.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("UsersList")?"text-tc-primary":"text-gray-600"]])},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,r.createCommentVNode)("",!0)])],512),[[r.vShow,o.value]])])}}};var D={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8 mb-3"},T={class:"flex items-center justify-between flex-wrap"},z={class:"w-0 flex-1 flex items-center min-w-0"},$={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},M=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],W={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},L=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)],Z={class:"ml-3 font-medium text-sm text-white truncate"},H={class:"flex-shrink-0 sm:ml-3"},P=[(0,r.createElementVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)];const O={data:function(){return{show:!0}},computed:{style:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.bannerStyle)||"success"},message:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.banner)||""},timestamp:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.timestamp)||(new Date).getTime()}},watch:{style:function(){this.show=!0},message:function(){this.show=!0},timestamp:function(){this.show=!0}}},A=(0,l.Z)(O,[["render",function(e,t,o,n,a,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[a.show&&l.message?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,class:(0,r.normalizeClass)(["rounded",{"bg-tc-primary-dark":"success"===l.style,"bg-red-700":"danger"===l.style}])},[(0,r.createElementVNode)("div",D,[(0,r.createElementVNode)("div",T,[(0,r.createElementVNode)("div",z,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)(["flex p-2 rounded-lg",{"bg-tc-primary":"success"===l.style,"bg-red-600":"danger"===l.style}])},["success"===l.style?((0,r.openBlock)(),(0,r.createElementBlock)("svg",$,M)):(0,r.createCommentVNode)("",!0),"danger"===l.style?((0,r.openBlock)(),(0,r.createElementBlock)("svg",W,L)):(0,r.createCommentVNode)("",!0)],2),(0,r.createElementVNode)("p",Z,(0,r.toDisplayString)(l.message),1)]),(0,r.createElementVNode)("div",H,[(0,r.createElementVNode)("button",{type:"button",class:(0,r.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-tc-primary focus:bg-tc-primary":"success"===l.style,"hover:bg-red-600 focus:bg-red-600":"danger"===l.style}]),"aria-label":"Dismiss",onClick:t[0]||(t[0]=(0,r.withModifiers)((function(e){return a.show=!1}),["prevent"]))},P,2)])])])],2)):(0,r.createCommentVNode)("",!0)])}]]);var I={class:"max-w-7xl mx-auto py-3 px-2 sm:px-6 lg:px-8"};const U={__name:"AppLayout",setup:function(e){return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)((0,r.unref)(j)),(0,r.createElementVNode)("main",I,[(0,r.createVNode)((0,r.unref)(A)),(0,r.renderSlot)(e.$slots,"default")])],64)}}}},581:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>E});var r=o(821),n=o(7763),a=o(9224),l=o(6879),s=o(9680),c=o(3279),i=o.n(c),d=o(6486),u=o(6619),m={class:"bg-white rounded shadow"},p={class:"md:flex md:items-center md:justify-between px-6 py-3"},f=(0,r.createElementVNode)("h3",{class:"text-lg font-medium text-gray-900 mb-2 lg:mb-0 text-left"},"Hosts",-1),h={class:"flex items-center"},x={class:"pb-2"},v={class:"overflow-hidden scrollbar-thin scrollbar-thumb-tc-primary scrollbar-track-gray-100"},y={class:"mb-1"},w=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",null,"Name"),(0,r.createElementVNode)("th",null,"Email"),(0,r.createElementVNode)("th",null,"Phone Number"),(0,r.createElementVNode)("th",null,"# of Properties"),(0,r.createElementVNode)("th",{class:"w-24"},"Actions")])],-1),g=["onClick"],k={class:"actions"},N=["onClick"],V={key:1},b=[(0,r.createElementVNode)("td",{colspan:"4"},"No record found!",-1)];const E={__name:"Index",props:{hosts:Object,filters:Object},setup:function(e){var t=e,o=((0,r.ref)(null),(0,r.inject)("swal")),c=(0,r.inject)("emitter"),E=(0,r.inject)("hasAnyPermission"),C=(0,r.ref)(t.filters.q);(0,r.watch)(C,i()((function(e){s.Inertia.get(route("hosts.index"),{q:e},{preserveState:!0,replace:!0})}),300));return function(i,B){var _=(0,r.resolveComponent)("Head"),S=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(_,{title:"Hosts"}),(0,r.createVNode)((0,r.unref)(n.Z),null,{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("div",p,[f,(0,r.createElementVNode)("div",h,[(0,r.unref)(E)("create-properties")?((0,r.openBlock)(),(0,r.createBlock)(S,{key:0,class:"btn btn-primary px-3 md:px-4 mr-2",href:i.route("properties.create"),as:"button"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Add New Property ")]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(E)("create-hosts")?((0,r.openBlock)(),(0,r.createBlock)(S,{key:1,class:"btn btn-primary px-3 md:px-4",href:i.route("hosts.create"),as:"button"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Add New Host")]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0)])]),(0,r.createElementVNode)("div",x,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:C.value,"onUpdate:modelValue":B[0]||(B[0]=function(e){return C.value=e})},null,8,["modelValue"]),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("table",y,[w,(0,r.createElementVNode)("tbody",null,[e.hosts.length>0?((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,{key:0},(0,r.renderList)(e.hosts,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:e.id},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)("".concat(e.first_name," ").concat(e.last_name)),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.email),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.phone_number),1),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("label",{class:"badge badge-default cursor-pointer",onClick:function(o){return function(e,o){c.emit("showHostProperties",{host:d.cloneDeep(e),confirm:function(){e.properties_count-=1,t.hosts.data.splice(o,1,e)}})}(e)}},(0,r.toDisplayString)(e.properties_count),9,g)]),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("div",k,[(0,r.createVNode)(S,{href:i.route("hosts.show",e.id)},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(a.Z),{name:"view"})]})),_:2},1032,["href"]),(0,r.unref)(E)("update-properties")?((0,r.openBlock)(),(0,r.createBlock)(S,{key:0,href:i.route("hosts.edit",e.id)},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(a.Z),{name:"edit"})]})),_:2},1032,["href"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(E)("delete-properties")?((0,r.openBlock)(),(0,r.createElementBlock)("a",{key:1,class:"danger",href:"javascript:void(0)",onClick:function(t){return n=e,(r=t).preventDefault(),r.stopPropagation(),void o.fire({title:"",html:"<h1 class='text-lg text-gray-800 mb-1'>Delete Host</h1><p class='text-base'>Are you sure want to delete this record?</p>",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete Record",customClass:{confirmButton:"danger"}}).then((function(e){e.value&&s.Inertia.delete(route("hosts.destroy",n.id),n,{onStart:function(){showWaitDialog()},onFinish:function(){hideWaitDialog()}})}));var r,n}},[(0,r.createVNode)((0,r.unref)(a.Z),{name:"delete"})],8,N)):(0,r.createCommentVNode)("",!0)])])])})),128)):((0,r.openBlock)(),(0,r.createElementBlock)("tr",V,b))])])])])])]})),_:1}),(0,r.createVNode)(u.default)],64)}}}},6619:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>y});var r=o(821),n=o(7687),a=o(9224),l=o(9669),s=o.n(l),c={key:0,class:"text-lg font-medium capitalize text-gray-900"},i={class:"px-6 py-4"},d={class:"overflow-hidden scrollbar-thin scrollbar-thumb-tc-primary scrollbar-track-gray-100"},u={class:"mb-1 table-sm"},m=(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",null,"Account Number"),(0,r.createElementVNode)("th",null,"Host"),(0,r.createElementVNode)("th",null,"Office"),(0,r.createElementVNode)("th",null,"Name"),(0,r.createElementVNode)("th",null,"Address"),(0,r.createElementVNode)("th",{class:"w-24"},"Actions")])],-1),p={class:"actions"},f=["onClick"],h={key:1},x=[(0,r.createElementVNode)("td",{colspan:"6"},"No record found!",-1)],v={class:"px-6 py-4 bg-gray-100 text-right"};const y={__name:"ShowHostPropertiesModal",setup:function(e){var t=(0,r.ref)(!1),o=(0,r.inject)("emitter"),l=(0,r.inject)("hasAnyPermission"),y=(0,r.ref)(null),w=(0,r.ref)([]),g=(0,r.reactive)({confirmHook:function(){}}),k=function(){t.value=!1},N=function(e){y.value=null!=e&&e.host?e.host:null,g.confirmHook=e.confirm,s().get(route("properties.index",{host:y.value.id})).then((function(e){w.value=e.data.properties})).catch((function(e){console.log(e)})),t.value=!0};return(0,r.onMounted)((function(){o.on("showHostProperties",N)})),(0,r.onUnmounted)((function(){o.off("showHostProperties",N)})),function(e,o){var N=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(n.Z),{show:t.value,onClose:o[1]||(o[1]=function(e){return k()}),closeable:!1,"max-width":"3xl"},{title:(0,r.withCtx)((function(){return[y.value?((0,r.openBlock)(),(0,r.createElementBlock)("h3",c,(0,r.toDisplayString)("".concat(y.value.first_name," ").concat(y.value.last_name))+"'s Properties",1)):(0,r.createCommentVNode)("",!0)]})),content:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("table",u,[m,(0,r.createElementVNode)("tbody",null,[w.value.length>0?((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,{key:0},(0,r.renderList)(w.value,(function(t){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:t.id},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.property_number),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)("".concat(t.host.first_name," ").concat(t.host.last_name)),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.office.name),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.name),1),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(t.address),1),(0,r.createElementVNode)("p",null,(0,r.toDisplayString)("".concat(t.zip_code,", ").concat(t.city,", ").concat(t.state)),1),(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(t.country),1)]),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("div",p,[(0,r.createVNode)(N,{href:e.route("properties.show",t.id)},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(a.Z,{name:"view"})]})),_:2},1032,["href"]),(0,r.unref)(l)("update-properties")?((0,r.openBlock)(),(0,r.createBlock)(N,{key:0,href:e.route("properties.edit",t.id)},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(a.Z,{name:"edit"})]})),_:2},1032,["href"])):(0,r.createCommentVNode)("",!0),(0,r.unref)(l)("delete-properties")?((0,r.openBlock)(),(0,r.createElementBlock)("a",{key:1,class:"danger",href:"javascript:void(0)",onClick:function(e){return function(e,t){e.preventDefault(),e.stopPropagation();var o=w.value.indexOf(t);swal.fire({title:"",html:"<h1 class='text-lg text-gray-800 mb-1'>Delete Property</h1><p class='text-base'>Are you sure want to delete this record?</p>",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete Record",customClass:{confirmButton:"danger"}}).then((function(e){e.value&&(showWaitDialog(),s().delete(route("properties.destroy",t.id)).then((function(e){hideWaitDialog(),-1!==o&&w.value.splice(o,1),toast.fire({icon:"success",title:e.data.message}),g.confirmHook()})).catch((function(e){console.log(e),hideWaitDialog(),toast.fire({icon:"error",title:e.response.data.error})})))}))}(e,t)}},[(0,r.createVNode)(a.Z,{name:"delete"})],8,f)):(0,r.createCommentVNode)("",!0)])])])})),128)):((0,r.openBlock)(),(0,r.createElementBlock)("tr",h,x))])])])]),(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("button",{type:"button",class:"btn btn-default",onClick:o[0]||(o[0]=function(e){return k()})},"Close")])]})),_:1},8,["show"])}}}}}]);
//# sourceMappingURL=581.js.map