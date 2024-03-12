"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[194],{3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},3833:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(821),o=["value"];const a={emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(e){this.$emit("update:checked",e)}}}};const l=(0,n(3744).Z)(a,[["render",function(e,t,n,a,l,s){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("input",{type:"checkbox",value:n.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.proxyChecked=e}),class:"rounded border-gray-300 text-tc-primary shadow-sm focus:border-tc-primary"},null,8,o)),[[r.vModelCheckbox,s.proxyChecked]])}]])},5968:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(821),o=["textContent"];const a={__name:"InputError",props:{message:null},setup:function(e){return function(t,n){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("div",{textContent:(0,r.toDisplayString)(e.message),class:"text-red-500 text-xs mt-1"},null,8,o)),[[r.vShow,e.message]])}}}},3502:(e,t,n)=>{n.d(t,{Z:()=>J});var r=n(821),o={class:"relative"};const a={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},setup:function(){var e=(0,r.ref)(!1),t=function(t){e.value&&27===t.keyCode&&(e.value=!1)};return(0,r.onMounted)((function(){return document.addEventListener("keydown",t)})),(0,r.onUnmounted)((function(){return document.removeEventListener("keydown",t)})),{open:e}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}}};var l=n(3744);const s=(0,l.Z)(a,[["render",function(e,t,n,a,l,s){return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",{onClick:t[0]||(t[0]=function(e){return a.open=!a.open})},[(0,r.renderSlot)(e.$slots,"trigger")]),(0,r.withDirectives)((0,r.createElementVNode)("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=function(e){return a.open=!1})},null,512),[[r.vShow,a.open]]),(0,r.createVNode)(r.Transition,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["absolute z-50 mt-2 rounded-md shadow-lg",[s.widthClass,s.alignmentClasses]]),style:{display:"none"},onClick:t[2]||(t[2]=function(e){return a.open=!1})},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[(0,r.renderSlot)(e.$slots,"content")],2)],2),[[r.vShow,a.open]])]})),_:3})])}]]);var c={class:"bg-gray-100 shadow"},i={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},d={class:"relative flex items-center justify-between h-16"},u={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},m=(0,r.createElementVNode)("span",{class:"sr-only"},"Open main menu",-1),p={class:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},f=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],h={class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},x=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)],v={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},g=(0,r.createElementVNode)("div",{class:"flex-shrink-0 flex items-center"},[(0,r.createElementVNode)("img",{class:"h-16 w-auto",src:"/assets/images/logo.png",alt:"Enhance"})],-1),w={class:"hidden sm:block sm:ml-6 lg:flex lg:items-center"},y={class:"flex items-center space-x-4"},k=(0,r.createTextVNode)("Dashboard"),V=(0,r.createTextVNode)("Calendar "),N=(0,r.createTextVNode)("Hosts"),b={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},E={type:"button",class:"flex text-sm hover:text-tc-primary","aria-expanded":"false","aria-haspopup":"true"},C=(0,r.createElementVNode)("span",{class:"sr-only"},"Open user menu",-1),B=(0,r.createTextVNode)("Your Profile "),_=(0,r.createTextVNode)("Settings"),S=(0,r.createTextVNode)("Sign out"),D={class:"sm:hidden"},M={class:"px-2 pt-2 pb-3 space-y-1"},T=(0,r.createTextVNode)("Dashboard"),j=(0,r.createTextVNode)("Calendar "),L=(0,r.createTextVNode)("Hosts ");const Z={__name:"Navbar",setup:function(e){var t=(0,r.ref)(!1);return function(e,n){var o=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("nav",c,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("button",{type:"button",onClick:n[0]||(n[0]=function(e){t.value=!t.value}),class:"inline-flex items-center justify-center p-2 rounded-md text-tc-primary focus:outline-none","aria-expanded":"false"},[m,(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("svg",p,f,512)),[[r.vShow,!t.value]]),(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("svg",h,x,512)),[[r.vShow,t.value]])])]),(0,r.createElementVNode)("div",v,[g,(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("div",y,[(0,r.createVNode)(o,{href:e.route("dashboard"),class:"text-gray-500 hover:text-tc-primary px-3 py-2 rounded-md font-medium"},{default:(0,r.withCtx)((function(){return[k]})),_:1},8,["href"]),(0,r.createVNode)(o,{href:"#",class:"text-gray-500 hover:text-tc-primary px-3 py-2 rounded-md font-medium"},{default:(0,r.withCtx)((function(){return[V]})),_:1}),(0,r.createVNode)(o,{href:e.route("hosts.index"),class:"text-gray-500 hover:text-tc-primary px-3 py-2 rounded-md font-medium"},{default:(0,r.withCtx)((function(){return[N]})),_:1},8,["href"])])])]),(0,r.createElementVNode)("div",b,[(0,r.createVNode)((0,r.unref)(s),{align:"right",width:"48"},{trigger:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("button",E,[C,(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.$page.props.user.first_name),1)])]})),content:(0,r.withCtx)((function(){return[(0,r.createVNode)(o,{href:"#",class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,r.withCtx)((function(){return[B]})),_:1}),(0,r.createVNode)(o,{href:e.route("roles.index"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1"},{default:(0,r.withCtx)((function(){return[_]})),_:1},8,["href"]),(0,r.createVNode)(o,{href:e.route("logout"),class:"block px-4 py-2 text-sm text-gray-700",role:"menuitem",tabindex:"-1",method:"post",as:"button"},{default:(0,r.withCtx)((function(){return[S]})),_:1},8,["href"])]})),_:1})])])]),(0,r.withDirectives)((0,r.createElementVNode)("div",D,[(0,r.createElementVNode)("div",M,[(0,r.createVNode)(o,{href:e.route("dashboard"),class:"bg-tc-primary text-white block px-3 py-2 rounded-md text-base font-medium"},{default:(0,r.withCtx)((function(){return[T]})),_:1},8,["href"]),(0,r.createVNode)(o,{href:e.route("dashboard"),class:"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"},{default:(0,r.withCtx)((function(){return[j]})),_:1},8,["href"]),(0,r.createVNode)(o,{href:e.route("hosts.index"),class:"text-gray-600 block px-3 py-2 rounded-md text-base font-medium"},{default:(0,r.withCtx)((function(){return[L]})),_:1},8,["href"])])],512),[[r.vShow,t.value]])])}}};var z={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8 mb-3"},$={class:"flex items-center justify-between flex-wrap"},F={class:"w-0 flex-1 flex items-center min-w-0"},A={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},O=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)],U={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},R=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)],H={class:"ml-3 font-medium text-sm text-white truncate"},P={class:"flex-shrink-0 sm:ml-3"},I=[(0,r.createElementVNode)("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)];const Y={data:function(){return{show:!0}},computed:{style:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.bannerStyle)||"success"},message:function(){var e;return(null===(e=this.$page.props.flash)||void 0===e?void 0:e.banner)||""}},watch:{style:function(){this.show=!0},message:function(){this.show=!0}}},q=(0,l.Z)(Y,[["render",function(e,t,n,o,a,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[a.show&&l.message?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,class:(0,r.normalizeClass)(["rounded",{"bg-tc-primary-dark":"success"===l.style,"bg-red-700":"danger"===l.style}])},[(0,r.createElementVNode)("div",z,[(0,r.createElementVNode)("div",$,[(0,r.createElementVNode)("div",F,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)(["flex p-2 rounded-lg",{"bg-tc-primary":"success"===l.style,"bg-red-600":"danger"===l.style}])},["success"===l.style?((0,r.openBlock)(),(0,r.createElementBlock)("svg",A,O)):(0,r.createCommentVNode)("",!0),"danger"===l.style?((0,r.openBlock)(),(0,r.createElementBlock)("svg",U,R)):(0,r.createCommentVNode)("",!0)],2),(0,r.createElementVNode)("p",H,(0,r.toDisplayString)(l.message),1)]),(0,r.createElementVNode)("div",P,[(0,r.createElementVNode)("button",{type:"button",class:(0,r.normalizeClass)(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-tc-primary focus:bg-tc-primary":"success"===l.style,"hover:bg-red-600 focus:bg-red-600":"danger"===l.style}]),"aria-label":"Dismiss",onClick:t[0]||(t[0]=(0,r.withModifiers)((function(e){return a.show=!1}),["prevent"]))},I,2)])])])],2)):(0,r.createCommentVNode)("",!0)])}]]);var G={class:"max-w-7xl mx-auto py-3 px-2 sm:px-6 lg:px-8"};const J={__name:"AppLayout",setup:function(e){return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)((0,r.unref)(Z)),(0,r.createElementVNode)("main",G,[(0,r.createVNode)((0,r.unref)(q)),(0,r.renderSlot)(e.$slots,"default")])],64)}}}},3005:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(821),o=n(3502),a={class:"grid grid-cols-5 gap-4"},l={class:"col-span-5 md:col-span-1 bg-white rounded shadow p-3"},s=(0,r.createTextVNode)("Profile"),c=(0,r.createTextVNode)(" Roles"),i={class:"col-span-5 md:col-span-4"};const d={__name:"SettingsLayout",setup:function(e){return function(e,t){var n=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(o.Z),null,{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("ul",null,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(n,{href:"#",class:"px-4 py-2 bg-gray-50 w-full block mb-1 hover:text-tc-primary"},{default:(0,r.withCtx)((function(){return[s]})),_:1})]),(0,r.createElementVNode)("li",null,[(0,r.createVNode)(n,{href:e.route("roles.index"),class:"px-4 py-2 bg-gray-50 w-full block mb-1 hover:text-tc-primary"},{default:(0,r.withCtx)((function(){return[c]})),_:1},8,["href"])])])]),(0,r.createElementVNode)("div",i,[(0,r.renderSlot)(e.$slots,"default")])])]})),_:3})}}}},4189:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(821),o=n(3005),a=n(5968),l=n(3833),s=n(9680),c=n(6486),i={class:"bg-white rounded shadow"},d={class:"flex items-center justify-between px-6 py-3"},u=(0,r.createElementVNode)("h1",null,"Add Role",-1),m=(0,r.createTextVNode)("Back"),p={class:"pb-2 border-t"},f={class:"grid grid-cols-2 gap-4"},h={class:"col-span-2 lg:col-span-1"},x=["onSubmit"],v={class:"px-6 py-4"},g={class:"mt-2"},w=(0,r.createElementVNode)("label",{class:"block font-medium text-sm text-gray-700",for:"name"},"Role Name",-1),y=(0,r.createElementVNode)("h2",{class:"font-semibold text-gray-800 my-3"},"Permissions",-1),k={class:"uppercase text-sm font-semibold mb-2 text-gray-700"},V={class:"inline-flex items-center mb-2 mr-3"},N={class:"inline-block ml-2"},b={class:"px-6 py-4 text-right"},E=["processing"];const C={__name:"Create",props:{permissions:Array},setup:function(e){var t=e,n=(0,r.ref)(!1),C=(0,r.ref)({}),B=(0,r.reactive)({name:"",permissions:[]});(0,r.watch)((function(){return c.cloneDeep(C.value)}),(function(e,t){var n=[];Object.keys(e).forEach((function(t){e[t].forEach((function(e){e.active&&n.push(e.id)}))})),console.log(n),B.permissions=n}));var _=function(){s.Inertia.post(route("roles.store"),B,{onStart:function(){n.value=!0},onFinish:function(){n.value=!1}})};return(0,r.onMounted)((function(){var e={};t.permissions.forEach((function(t){e[t.group]||(e[t.group]=[]),e[t.group].push({id:t.id,name:t.name.replace(/[-_]/g," "),active:!1})})),C.value=e})),function(e,t){var s=(0,r.resolveComponent)("Head"),c=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(s,{title:"Add Role"}),(0,r.createVNode)((0,r.unref)(o.Z),null,{default:(0,r.withCtx)((function(){var o;return[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",d,[u,(0,r.createVNode)(c,{class:"btn btn-primary",href:e.route("roles.index"),as:"button"},{default:(0,r.withCtx)((function(){return[m]})),_:1},8,["href"])]),(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("form",{onSubmit:(0,r.withModifiers)(_,["prevent"])},[(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",g,[w,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"name",type:"text",class:"mt-1 block w-full","onUpdate:modelValue":t[0]||(t[0]=function(e){return B.name=e}),autofocus:""},null,512),[[r.vModelText,B.name]]),(0,r.createVNode)((0,r.unref)(a.Z),{message:null===(o=e.errors)||void 0===o?void 0:o.name},null,8,["message"])]),y,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(Object.keys(C.value),(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:e},[(0,r.createElementVNode)("h2",k,(0,r.toDisplayString)(e),1),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(C.value[e],(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("label",V,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:e.active,"onUpdate:modelValue":function(t){return e.active=t},name:e.name,checked:e.active},null,8,["modelValue","onUpdate:modelValue","name","checked"]),(0,r.createElementVNode)("span",N,(0,r.toDisplayString)(e.name),1)])})),256))],64)})),128))]),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("button",{type:"submit",class:"ml-2 btn btn-primary",processing:n.value},"Save",8,E)])],40,x)])])])])]})),_:1})],64)}}}}}]);