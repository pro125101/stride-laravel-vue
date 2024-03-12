"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[518],{3744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},3833:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o=["value"];const a={emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(e){this.$emit("update:checked",e)}}}};const s=(0,r(3744).Z)(a,[["render",function(e,t,r,a,s,l){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("input",{type:"checkbox",value:r.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.proxyChecked=e}),class:"rounded border-gray-300 text-tc-primary shadow-sm focus:border-tc-primary"},null,8,o)),[[n.vModelCheckbox,l.proxyChecked]])}]])},9224:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(821),o={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)],s={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)],c=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],i=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],u=[(0,n.createElementVNode)("rect",{x:"0",y:"0",width:"24",height:"24",stroke:"none"},null,-1),(0,n.createElementVNode)("circle",{cx:"10",cy:"10",r:"7"},null,-1),(0,n.createElementVNode)("line",{x1:"21",y1:"21",x2:"15",y2:"15"},null,-1)],d=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)];const m={name:"Icon",props:{name:String,classes:{type:String,default:"w-6 h-6"}}};const p=(0,r(3744).Z)(m,[["render",function(e,t,r,m,p,f){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,["view"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",o,a)):(0,n.createCommentVNode)("",!0),"edit"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",s,l)):(0,n.createCommentVNode)("",!0),"delete"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",class:(0,n.normalizeClass)(r.classes),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c,2)):(0,n.createCommentVNode)("",!0),"close"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:3,class:(0,n.normalizeClass)(r.classes),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i,2)):(0,n.createCommentVNode)("",!0),"search"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:4,xmlns:"http://www.w3.org/2000/svg",class:(0,n.normalizeClass)(r.classes),viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},u,2)):(0,n.createCommentVNode)("",!0),"chevron-down"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:5,xmlns:"http://www.w3.org/2000/svg",class:(0,n.normalizeClass)(r.classes),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},d,2)):(0,n.createCommentVNode)("",!0)],64)}]])},5968:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o=["textContent"];const a={__name:"InputError",props:{message:null},setup:function(e){return function(t,r){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("div",{textContent:(0,n.toDisplayString)(e.message),class:"text-red-500 text-sm mt-1"},null,8,o)),[[n.vShow,e.message]])}}}},7763:(e,t,r)=>{r.d(t,{Z:()=>F});var n=r(821),o={class:"relative"};const a={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},setup:function(){var e=(0,n.ref)(!1),t=function(t){e.value&&27===t.keyCode&&(e.value=!1)};return(0,n.onMounted)((function(){return document.addEventListener("keydown",t)})),(0,n.onUnmounted)((function(){return document.removeEventListener("keydown",t)})),{open:e}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}}};var s=r(3744);const l=(0,s.Z)(a,[["render",function(e,t,r,a,s,l){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",{onClick:t[0]||(t[0]=function(e){return a.open=!a.open})},[(0,n.renderSlot)(e.$slots,"trigger")]),(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=function(e){return a.open=!1})},null,512),[[n.vShow,a.open]]),(0,n.createVNode)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["absolute z-50 mt-2 rounded-md shadow-lg",[l.widthClass,l.alignmentClasses]]),style:{display:"none"},onClick:t[2]||(t[2]=function(e){return a.open=!1})},[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[(0,n.renderSlot)(e.$slots,"content")],2)],2),[[n.vShow,a.open]])]})),_:3})])}]]);var c=r(9224),i={class:"bg-gray-100 shadow"},u={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},d={class:"relative flex items-center justify-between h-16"},m={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},p=(0,n.createElementVNode)("span",{class:"sr-only"},"Open main menu",-1),f={class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},h=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],v={class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},x=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)],g={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},k=(0,n.createElementVNode)("div",{class:"flex-shrink-0 flex items-center"},[(0,n.createElementVNode)("img",{class:"h-12 w-auto",src:"/assets/images/logo.png",alt:"Enhance"})],-1),w={class:"hidden sm:block sm:ml-6 md:flex md:items-center"},y={class:"flex items-center md:space-x-2 lg:space-x-4"},V={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},N={class:"flex items-center"},b=["src","alt"],C=(0,n.createElementVNode)("span",{class:"sr-only"},"Open user menu",-1),E={class:"hidden md:block ml-3 text-gray-600"},B={class:"ml-3 text-gray-600"},_={class:"sm:hidden"},j={class:"px-2 pt-2 pb-3 space-y-1"};const S={__name:"Navbar",setup:function(e){var t=(0,n.inject)("hasAnyPermission"),r=(0,n.ref)(!1);return function(e,o){var a=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("nav",i,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("button",{type:"button",onClick:o[0]||(o[0]=function(e){r.value=!r.value}),class:"inline-flex items-center justify-center p-2 rounded-md text-tc-primary focus:outline-none","aria-expanded":"false"},[p,(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("svg",f,h,512)),[[n.vShow,!r.value]]),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("svg",v,x,512)),[[n.vShow,r.value]])])]),(0,n.createElementVNode)("div",g,[k,(0,n.createElementVNode)("div",w,[(0,n.createElementVNode)("div",y,[(0,n.createVNode)(a,{href:e.route("dashboard"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",["Dashboard"===e.$page.component?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Dashboard")]})),_:1},8,["href","class"]),(0,n.unref)(t)(["view-appointments","create-appointments","update-appointments","delete-appointments"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:0,href:e.route("calendar"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Calendar")?"text-tc-primary":"text-gray-600"],"hover:text-tc-primary px-3 py-2 rounded-md font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Calendar ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-hosts","create-hosts","update-hosts","delete-hosts"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:1,href:e.route("hosts.index"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Hosts")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Hosts")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-properties","create-properties","update-properties","delete-properties"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:2,href:e.route("properties.index"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Properties")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Properties ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-cleaners","create-cleaners","update-cleaners","delete-cleaners"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:3,href:e.route("cleaners.index"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Cleaners")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Employees ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:4,href:e.route("users.list"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("UsersList")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(a,{href:e.route("notification.new_job"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Notifications")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Notifications ")]})),_:1},8,["href","class"])])])]),(0,n.createElementVNode)("div",V,[(0,n.createVNode)((0,n.unref)(l),{align:"right",width:"48"},{trigger:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("button",N,[(0,n.createElementVNode)("img",{class:"h-8 w-8 text-sm border-2 border-tc-primary-light rounded-full object-cover",src:e.$page.props.user.photo_url,alt:e.$page.props.user.first_name},null,8,b),C,(0,n.createElementVNode)("span",E,(0,n.toDisplayString)("".concat(e.$page.props.user.first_name," ").concat(e.$page.props.user.last_name)),1),(0,n.createElementVNode)("span",B,[(0,n.createVNode)((0,n.unref)(c.Z),{name:"chevron-down",classes:"w-4 h-4"})])])]})),content:(0,n.withCtx)((function(){return[(0,n.createVNode)(a,{href:e.route("profile"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Your Profile ")]})),_:1},8,["href"]),(0,n.createVNode)(a,{href:e.route("profile"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Settings")]})),_:1},8,["href"]),(0,n.createVNode)(a,{href:e.route("logout"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1",method:"post",as:"button"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Sign out")]})),_:1},8,["href"])]})),_:1})])])]),(0,n.withDirectives)((0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("div",j,[(0,n.createVNode)(a,{href:e.route("dashboard"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Dashboard")?"bg-tc-primary text-white":"text-gray-600"],"block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Dashboard")]})),_:1},8,["href","class"]),(0,n.unref)(t)(["view-appointments","create-appointments","update-appointments","delete-appointments"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:0,href:e.route("calendar"),class:(0,n.normalizeClass)(["block px-3 py-2 rounded-md text-base font-medium",[e.$page.component.startsWith("Calendar")?"bg-tc-primary text-white":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Calendar ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-hosts","create-hosts","update-hosts","delete-hosts"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:1,href:e.route("hosts.index"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Hosts")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Hosts ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-properties","create-properties","update-properties","delete-properties"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:2,href:e.route("properties.index"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Properties")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Properties ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-cleaners","create-cleaners","update-cleaners","delete-cleaners"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:3,href:e.route("cleaners.index"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Cleaners")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Employees ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,n.openBlock)(),(0,n.createBlock)(a,{key:4,href:e.route("users.list"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("UsersList")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)])],512),[[n.vShow,r.value]])])}}};var z={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8 mb-3"},$={class:"flex items-center justify-between flex-wrap"},O={class:"w-0 flex-1 flex items-center min-w-0"},T={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},D=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],M={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},P=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)],L={class:"ml-3 font-medium text-sm text-white truncate"},Z={class:"flex-shrink-0 sm:ml-3"},W=[(0,n.createElementVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)];const U={data:function(){return{show:!0}},computed:{style:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.bannerStyle)||"success"},message:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.banner)||""},timestamp:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.timestamp)||(new Date).getTime()}},watch:{style:function(){this.show=!0},message:function(){this.show=!0},timestamp:function(){this.show=!0}}},H=(0,s.Z)(U,[["render",function(e,t,r,o,a,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[a.show&&s.message?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:(0,n.normalizeClass)(["rounded",{"bg-tc-primary-dark":"success"===s.style,"bg-red-700":"danger"===s.style}])},[(0,n.createElementVNode)("div",z,[(0,n.createElementVNode)("div",$,[(0,n.createElementVNode)("div",O,[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)(["flex p-2 rounded-lg",{"bg-tc-primary":"success"===s.style,"bg-red-600":"danger"===s.style}])},["success"===s.style?((0,n.openBlock)(),(0,n.createElementBlock)("svg",T,D)):(0,n.createCommentVNode)("",!0),"danger"===s.style?((0,n.openBlock)(),(0,n.createElementBlock)("svg",M,P)):(0,n.createCommentVNode)("",!0)],2),(0,n.createElementVNode)("p",L,(0,n.toDisplayString)(s.message),1)]),(0,n.createElementVNode)("div",Z,[(0,n.createElementVNode)("button",{type:"button",class:(0,n.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-tc-primary focus:bg-tc-primary":"success"===s.style,"hover:bg-red-600 focus:bg-red-600":"danger"===s.style}]),"aria-label":"Dismiss",onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return a.show=!1}),["prevent"]))},W,2)])])])],2)):(0,n.createCommentVNode)("",!0)])}]]);var A={class:"max-w-7xl mx-auto py-3 px-2 sm:px-6 lg:px-8"};const F={__name:"AppLayout",setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(S)),(0,n.createElementVNode)("main",A,[(0,n.createVNode)((0,n.unref)(H)),(0,n.renderSlot)(e.$slots,"default")])],64)}}}},3005:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(821),o=r(7763),a={class:"grid grid-cols-5 gap-4"},s={class:"col-span-5 md:col-span-1 bg-white rounded shadow p-3"},l={class:"aside-nav"},c={class:"col-span-5 md:col-span-4"};const i={__name:"SettingsLayout",setup:function(e){var t=(0,n.inject)("hasAnyPermission");return function(e,r){var i=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.Z),null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("ul",l,[(0,n.createElementVNode)("li",null,[(0,n.createVNode)(i,{href:e.route("profile"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Profile")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Profile ")]})),_:1},8,["href","class"])]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-roles","create-roles","update-roles","delete-roles"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("roles.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Roles")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Roles ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-regions","create-regions","update-regions","delete-regions"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("regions.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Regions")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Regions ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-offices","create-offices","update-offices","delete-offices"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("offices.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Offices")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Offices ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("users.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Users")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)])])]),(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(e.$slots,"default")])])]})),_:3})}}}},2518:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(821),o=r(3005),a=r(5968),s=r(3833),l=r(9680),c=r(6486);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={class:"bg-white rounded shadow"},f={class:"flex items-center justify-between px-6 py-3"},h=(0,n.createElementVNode)("h3",{class:"text-lg font-medium text-gray-900"},"Update Role",-1),v={class:"border-t"},x=["onSubmit"],g={class:"px-6 py-4"},k={class:"grid grid-cols-2 gap-4"},w={class:"col-span-2 lg:col-span-1"},y={class:"mt-2"},V=(0,n.createElementVNode)("label",{class:"block font-medium text-sm text-gray-700 required",for:"name"},"Role Name",-1),N=(0,n.createElementVNode)("h2",{class:"font-semibold text-gray-800 mt-3"},"Permissions",-1),b=(0,n.createElementVNode)("p",{class:"mb-3 text-sm text-red-700"},"Please select at least one permission",-1),C={class:"inline-flex items-center mb-2 mr-3"},E=(0,n.createElementVNode)("span",{class:"inline-block ml-2"},"Select/De-select All",-1),B={class:"mb-2"},_={class:"inline-flex items-center mr-3"},j={class:"inline-block ml-2 uppercase text-sm font-semibold text-gray-500"},S={class:"inline-flex items-center mb-2 mr-3"},z={class:"inline-block ml-2 capitalize"},$={class:"px-6 pb-4 text-right"},O=["disabled"];const T={__name:"Edit",props:{errors:Object,role:Object,permissions:Array},setup:function(e){var t=e,r=(0,n.ref)(!1),i=(0,n.ref)(!1),u=(0,n.ref)({}),m=(0,n.ref)({}),T=(0,n.reactive)({name:t.role.name,permissions:[]}),D=function(e){var t=[];Object.keys(e).forEach((function(r){e[r].forEach((function(e){e.active&&t.push(e.id)}))})),T.permissions=t};(0,n.watch)((function(){return i.value}),(function(e){Object.keys(u.value).forEach((function(t){u.value[t]=u.value[t].map((function(t){return d(d({},t),{},{active:e})}))}))}));(0,n.watch)((function(){return c.cloneDeep(u.value)}),(function(e,t){Object.keys(u).length>0&&D(e)}));var M=function(){l.Inertia.put(route("roles.update",t.role.id),T,{onStart:function(){r.value=!0},onFinish:function(){r.value=!1}})};return(0,n.onMounted)((function(){var e={};t.permissions.forEach((function(r){var n;e[r.group]||(e[r.group]=[],m.value[r.group]=[],m.value[r.group].push({selected:!1})),e[r.group].push({id:r.id,name:r.name.replace(/[-_]/g," "),active:(n=r.id,-1!==c.findIndex(t.role.permissions,{id:n}))})})),u.value=e,D(e)})),function(t,l){var c=(0,n.resolveComponent)("Head"),D=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(c,{title:"Update Role"}),(0,n.createVNode)((0,n.unref)(o.Z),null,{default:(0,n.withCtx)((function(){var o,c;return[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",f,[h,(0,n.createVNode)(D,{class:"btn btn-default",href:t.route("roles.index"),as:"button"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Back")]})),_:1},8,["href"])]),(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("form",{onSubmit:(0,n.withModifiers)(M,["prevent"])},[(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("div",k,[(0,n.createElementVNode)("div",w,[(0,n.createElementVNode)("div",y,[V,(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"name",type:"text",class:"form-input mt-1 block w-full","onUpdate:modelValue":l[0]||(l[0]=function(e){return T.name=e}),autofocus:""},null,512),[[n.vModelText,T.name]]),(0,n.createVNode)((0,n.unref)(a.Z),{message:null===(o=e.errors)||void 0===o?void 0:o.name},null,8,["message"])])])]),N,b,(0,n.createElementVNode)("label",C,[(0,n.createVNode)((0,n.unref)(s.Z),{class:"form-checkbox",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=function(e){return i.value=e})},null,8,["modelValue"]),E]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(Object.keys(u.value),(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:e},[(0,n.createElementVNode)("h2",B,[(0,n.createElementVNode)("label",_,[(0,n.createVNode)((0,n.unref)(s.Z),{modelValue:m.value[e].selected,"onUpdate:modelValue":function(t){return m.value[e].selected=t},checked:m.value[e].selected,name:e,class:"form-checkbox",onChange:function(t){return function(e){var t=m.value[e].selected;u.value[e]=u.value[e].map((function(e){return d(d({},e),{},{active:t})}))}(e)}},null,8,["modelValue","onUpdate:modelValue","checked","name","onChange"]),(0,n.createElementVNode)("span",j,(0,n.toDisplayString)(e),1)])]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(u.value[e],(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("label",S,[(0,n.createVNode)((0,n.unref)(s.Z),{class:"form-checkbox",modelValue:e.active,"onUpdate:modelValue":function(t){return e.active=t},name:e.name,checked:e.active},null,8,["modelValue","onUpdate:modelValue","name","checked"]),(0,n.createElementVNode)("span",z,(0,n.toDisplayString)(e.name),1)])})),256))],64)})),128)),(0,n.createVNode)((0,n.unref)(a.Z),{message:null===(c=e.errors)||void 0===c?void 0:c.permissions},null,8,["message"])]),(0,n.createElementVNode)("div",$,[(0,n.createElementVNode)("button",{type:"submit",class:"ml-2 btn btn-primary",disabled:r.value},"Save",8,O)])],40,x)])])]})),_:1})],64)}}}}}]);
//# sourceMappingURL=518.js.map