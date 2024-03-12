"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[665],{3744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},9224:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(821),o={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)],a={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},null,-1)],c=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1)],i=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)],d=[(0,n.createElementVNode)("rect",{x:"0",y:"0",width:"24",height:"24",stroke:"none"},null,-1),(0,n.createElementVNode)("circle",{cx:"10",cy:"10",r:"7"},null,-1),(0,n.createElementVNode)("line",{x1:"21",y1:"21",x2:"15",y2:"15"},null,-1)],m=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)];const u={name:"Icon",props:{name:String,classes:{type:String,default:"w-6 h-6"}}};const p=(0,r(3744).Z)(u,[["render",function(e,t,r,u,p,f){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,["view"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",o,s)):(0,n.createCommentVNode)("",!0),"edit"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",a,l)):(0,n.createCommentVNode)("",!0),"delete"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:2,xmlns:"http://www.w3.org/2000/svg",class:(0,n.normalizeClass)(r.classes),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c,2)):(0,n.createCommentVNode)("",!0),"close"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:3,class:(0,n.normalizeClass)(r.classes),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i,2)):(0,n.createCommentVNode)("",!0),"search"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:4,xmlns:"http://www.w3.org/2000/svg",class:(0,n.normalizeClass)(r.classes),viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},d,2)):(0,n.createCommentVNode)("",!0),"chevron-down"===r.name?((0,n.openBlock)(),(0,n.createElementBlock)("svg",{key:5,xmlns:"http://www.w3.org/2000/svg",class:(0,n.normalizeClass)(r.classes),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},m,2)):(0,n.createCommentVNode)("",!0)],64)}]])},7763:(e,t,r)=>{r.d(t,{Z:()=>F});var n=r(821),o={class:"relative"};const s={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},setup:function(){var e=(0,n.ref)(!1),t=function(t){e.value&&27===t.keyCode&&(e.value=!1)};return(0,n.onMounted)((function(){return document.addEventListener("keydown",t)})),(0,n.onUnmounted)((function(){return document.removeEventListener("keydown",t)})),{open:e}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}}};var a=r(3744);const l=(0,a.Z)(s,[["render",function(e,t,r,s,a,l){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("div",{onClick:t[0]||(t[0]=function(e){return s.open=!s.open})},[(0,n.renderSlot)(e.$slots,"trigger")]),(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=function(e){return s.open=!1})},null,512),[[n.vShow,s.open]]),(0,n.createVNode)(n.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["absolute z-50 mt-2 rounded-md shadow-lg",[l.widthClass,l.alignmentClasses]]),style:{display:"none"},onClick:t[2]||(t[2]=function(e){return s.open=!1})},[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[(0,n.renderSlot)(e.$slots,"content")],2)],2),[[n.vShow,s.open]])]})),_:3})])}]]);var c=r(9224),i={class:"bg-gray-100 shadow"},d={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},m={class:"relative flex items-center justify-between h-16"},u={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},p=(0,n.createElementVNode)("span",{class:"sr-only"},"Open main menu",-1),f={class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},h=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],x={class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},g=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)],w={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},k=(0,n.createElementVNode)("div",{class:"flex-shrink-0 flex items-center"},[(0,n.createElementVNode)("img",{class:"h-12 w-auto",src:"/assets/images/logo.png",alt:"Enhance"})],-1),v={class:"hidden sm:block sm:ml-6 md:flex md:items-center"},y={class:"flex items-center md:space-x-2 lg:space-x-4"},N={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},V={class:"flex items-center"},C=["src","alt"],E=(0,n.createElementVNode)("span",{class:"sr-only"},"Open user menu",-1),B={class:"hidden md:block ml-3 text-gray-600"},b={class:"ml-3 text-gray-600"},_={class:"sm:hidden"},z={class:"px-2 pt-2 pb-3 space-y-1"};const S={__name:"Navbar",setup:function(e){var t=(0,n.inject)("hasAnyPermission"),r=(0,n.ref)(!1);return function(e,o){var s=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("nav",i,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("button",{type:"button",onClick:o[0]||(o[0]=function(e){r.value=!r.value}),class:"inline-flex items-center justify-center p-2 rounded-md text-tc-primary focus:outline-none","aria-expanded":"false"},[p,(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("svg",f,h,512)),[[n.vShow,!r.value]]),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("svg",x,g,512)),[[n.vShow,r.value]])])]),(0,n.createElementVNode)("div",w,[k,(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("div",y,[(0,n.createVNode)(s,{href:e.route("dashboard"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",["Dashboard"===e.$page.component?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Dashboard")]})),_:1},8,["href","class"]),(0,n.unref)(t)(["view-appointments","create-appointments","update-appointments","delete-appointments"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,href:e.route("calendar"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Calendar")?"text-tc-primary":"text-gray-600"],"hover:text-tc-primary px-3 py-2 rounded-md font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Calendar ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-hosts","create-hosts","update-hosts","delete-hosts"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,href:e.route("hosts.index"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Hosts")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Hosts")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-properties","create-properties","update-properties","delete-properties"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:2,href:e.route("properties.index"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Properties")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Properties ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-cleaners","create-cleaners","update-cleaners","delete-cleaners"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:3,href:e.route("cleaners.index"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Cleaners")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Employees ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:4,href:e.route("users.list"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("UsersList")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(s,{href:e.route("notification.new_job"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("Notifications")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Notifications ")]})),_:1},8,["href","class"])])])]),(0,n.createElementVNode)("div",N,[(0,n.createVNode)((0,n.unref)(l),{align:"right",width:"48"},{trigger:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("button",V,[(0,n.createElementVNode)("img",{class:"h-8 w-8 text-sm border-2 border-tc-primary-light rounded-full object-cover",src:e.$page.props.user.photo_url,alt:e.$page.props.user.first_name},null,8,C),E,(0,n.createElementVNode)("span",B,(0,n.toDisplayString)("".concat(e.$page.props.user.first_name," ").concat(e.$page.props.user.last_name)),1),(0,n.createElementVNode)("span",b,[(0,n.createVNode)((0,n.unref)(c.Z),{name:"chevron-down",classes:"w-4 h-4"})])])]})),content:(0,n.withCtx)((function(){return[(0,n.createVNode)(s,{href:e.route("profile"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Your Profile ")]})),_:1},8,["href"]),(0,n.createVNode)(s,{href:e.route("profile"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Settings")]})),_:1},8,["href"]),(0,n.createVNode)(s,{href:e.route("logout"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1",method:"post",as:"button"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Sign out")]})),_:1},8,["href"])]})),_:1})])])]),(0,n.withDirectives)((0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("div",z,[(0,n.createVNode)(s,{href:e.route("dashboard"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Dashboard")?"bg-tc-primary text-white":"text-gray-600"],"block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Dashboard")]})),_:1},8,["href","class"]),(0,n.unref)(t)(["view-appointments","create-appointments","update-appointments","delete-appointments"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,href:e.route("calendar"),class:(0,n.normalizeClass)(["block px-3 py-2 rounded-md text-base font-medium",[e.$page.component.startsWith("Calendar")?"bg-tc-primary text-white":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Calendar ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-hosts","create-hosts","update-hosts","delete-hosts"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,href:e.route("hosts.index"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Hosts")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Hosts ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-properties","create-properties","update-properties","delete-properties"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:2,href:e.route("properties.index"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Properties")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Properties ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-cleaners","create-cleaners","update-cleaners","delete-cleaners"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:3,href:e.route("cleaners.index"),class:(0,n.normalizeClass)([[e.$page.component.startsWith("Cleaners")?"bg-tc-primary text-white":"text-gray-600"],"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Employees ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0),(0,n.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,n.openBlock)(),(0,n.createBlock)(s,{key:4,href:e.route("users.list"),class:(0,n.normalizeClass)(["hover:text-tc-primary px-3 py-2 rounded-md font-medium",[e.$page.component.startsWith("UsersList")?"text-tc-primary":"text-gray-600"]])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)])],512),[[n.vShow,r.value]])])}}};var $={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8 mb-3"},T={class:"flex items-center justify-between flex-wrap"},j={class:"w-0 flex-1 flex items-center min-w-0"},D={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},M=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],L={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},U=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)],W={class:"ml-3 font-medium text-sm text-white truncate"},Z={class:"flex-shrink-0 sm:ml-3"},P=[(0,n.createElementVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)];const H={data:function(){return{show:!0}},computed:{style:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.bannerStyle)||"success"},message:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.banner)||""},timestamp:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.timestamp)||(new Date).getTime()}},watch:{style:function(){this.show=!0},message:function(){this.show=!0},timestamp:function(){this.show=!0}}},O=(0,a.Z)(H,[["render",function(e,t,r,o,s,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[s.show&&a.message?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:(0,n.normalizeClass)(["rounded",{"bg-tc-primary-dark":"success"===a.style,"bg-red-700":"danger"===a.style}])},[(0,n.createElementVNode)("div",$,[(0,n.createElementVNode)("div",T,[(0,n.createElementVNode)("div",j,[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)(["flex p-2 rounded-lg",{"bg-tc-primary":"success"===a.style,"bg-red-600":"danger"===a.style}])},["success"===a.style?((0,n.openBlock)(),(0,n.createElementBlock)("svg",D,M)):(0,n.createCommentVNode)("",!0),"danger"===a.style?((0,n.openBlock)(),(0,n.createElementBlock)("svg",L,U)):(0,n.createCommentVNode)("",!0)],2),(0,n.createElementVNode)("p",W,(0,n.toDisplayString)(a.message),1)]),(0,n.createElementVNode)("div",Z,[(0,n.createElementVNode)("button",{type:"button",class:(0,n.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-tc-primary focus:bg-tc-primary":"success"===a.style,"hover:bg-red-600 focus:bg-red-600":"danger"===a.style}]),"aria-label":"Dismiss",onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return s.show=!1}),["prevent"]))},P,2)])])])],2)):(0,n.createCommentVNode)("",!0)])}]]);var R={class:"max-w-7xl mx-auto py-3 px-2 sm:px-6 lg:px-8"};const F={__name:"AppLayout",setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(S)),(0,n.createElementVNode)("main",R,[(0,n.createVNode)((0,n.unref)(O)),(0,n.renderSlot)(e.$slots,"default")])],64)}}}},3005:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(821),o=r(7763),s={class:"grid grid-cols-5 gap-4"},a={class:"col-span-5 md:col-span-1 bg-white rounded shadow p-3"},l={class:"aside-nav"},c={class:"col-span-5 md:col-span-4"};const i={__name:"SettingsLayout",setup:function(e){var t=(0,n.inject)("hasAnyPermission");return function(e,r){var i=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.Z),null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("ul",l,[(0,n.createElementVNode)("li",null,[(0,n.createVNode)(i,{href:e.route("profile"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Profile")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Profile ")]})),_:1},8,["href","class"])]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-roles","create-roles","update-roles","delete-roles"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("roles.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Roles")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Roles ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-regions","create-regions","update-regions","delete-regions"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("regions.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Regions")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Regions ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-offices","create-offices","update-offices","delete-offices"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("offices.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Offices")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Offices ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("li",null,[(0,n.unref)(t)(["view-users","create-users","update-users","delete-users"])?((0,n.openBlock)(),(0,n.createBlock)(i,{key:0,href:e.route("users.index"),class:(0,n.normalizeClass)(["nav-item",{active:e.$page.component.startsWith("Settings/Users")}])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" Users ")]})),_:1},8,["href","class"])):(0,n.createCommentVNode)("",!0)])])]),(0,n.createElementVNode)("div",c,[(0,n.renderSlot)(e.$slots,"default")])])]})),_:3})}}}},2665:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var n=r(821),o=r(3005),s={class:"bg-white rounded shadow"},a={class:"flex items-center justify-between px-6 py-3"},l=(0,n.createElementVNode)("h3",{class:"text-lg font-medium text-gray-900"},"User Detail",-1),c={class:"pb-2 border-t px-6 py-4"},i={class:"grid grid-cols-2 lg:gap-x-4"},d={class:"col-span-2 lg:col-span-1 mb-2"},m={class:"flex items-center"},u=(0,n.createElementVNode)("p",{class:"w-48"},"First Name:",-1),p={class:"col-span-2 lg:col-span-1 mb-2"},f={class:"flex items-center"},h=(0,n.createElementVNode)("p",{class:"w-48"},"Last Name:",-1),x={class:"col-span-2 lg:col-span-1 mb-2"},g={class:"flex items-center"},w=(0,n.createElementVNode)("p",{class:"w-48"},"Email:",-1),k={class:"col-span-2 lg:col-span-1 mb-2"},v={key:0,class:"flex items-center"},y=(0,n.createElementVNode)("p",{class:"w-48"},"Office:",-1),N={class:"col-span-2 lg:col-span-1 mb-2"},V={key:0,class:"flex items-center"},C=(0,n.createElementVNode)("p",{class:"w-48"},"Region:",-1),E={class:"col-span-2 lg:col-span-1 mb-2"},B={class:"flex items-center"},b=(0,n.createElementVNode)("p",{class:"w-48"},"Roles:",-1);const _={__name:"Show",props:{selectedUser:Object},setup:function(e){return function(t,r){var _=(0,n.resolveComponent)("Head"),z=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(_,{title:"User Detail"}),(0,n.createVNode)((0,n.unref)(o.Z),null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",a,[l,(0,n.createVNode)(z,{href:t.route("users.index"),as:"button",class:"btn btn-default"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Back")]})),_:1},8,["href"])]),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",m,[u,(0,n.createElementVNode)("p",null,(0,n.toDisplayString)(e.selectedUser.first_name),1)])]),(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",f,[h,(0,n.createElementVNode)("p",null,(0,n.toDisplayString)(e.selectedUser.last_name),1)])]),(0,n.createElementVNode)("div",x,[(0,n.createElementVNode)("div",g,[w,(0,n.createElementVNode)("p",null,(0,n.toDisplayString)(e.selectedUser.email),1)])]),(0,n.createElementVNode)("div",k,[e.selectedUser.office?((0,n.openBlock)(),(0,n.createElementBlock)("div",v,[y,(0,n.createElementVNode)("p",null,(0,n.toDisplayString)(e.selectedUser.office.name),1)])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",N,[e.selectedUser.region?((0,n.openBlock)(),(0,n.createElementBlock)("div",V,[C,(0,n.createElementVNode)("p",null,(0,n.toDisplayString)(e.selectedUser.region.region_name),1)])):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("div",B,[b,((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.selectedUser.roles,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("label",{key:e.name,class:"badge badge-default mr-1"},(0,n.toDisplayString)(e.name),1)})),128))])])])])])]})),_:1})],64)}}}}}]);
//# sourceMappingURL=665.js.map