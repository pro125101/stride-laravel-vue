"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[207],{5968:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(821),o=["textContent"];const a={__name:"InputError",props:{message:null},setup:function(e){return function(t,r){return(0,s.withDirectives)(((0,s.openBlock)(),(0,s.createElementBlock)("div",{textContent:(0,s.toDisplayString)(e.message),class:"text-red-500 text-sm mt-1"},null,8,o)),[[s.vShow,e.message]])}}}},8207:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var s=r(821),o=r(5968),a=r(9680),n={class:"bg-white rounded shadow"},l=(0,s.createElementVNode)("div",{class:"flex items-center justify-between px-6 py-3"},[(0,s.createElementVNode)("h3",{class:"text-lg font-medium text-gray-900"},"Update Password")],-1),d={class:"border-t"},c=["onSubmit"],i={class:"max-w-lg mx-auto"},u={class:"px-6 py-4"},m={class:"mt-2"},p=(0,s.createElementVNode)("label",{class:"block font-medium text-sm text-gray-700 required",for:"current_password"},"Current Password",-1),w={class:"mt-2"},f=(0,s.createElementVNode)("label",{class:"block font-medium text-sm text-gray-700 required",for:"password"},"New Password",-1),v={class:"mt-2"},x=(0,s.createElementVNode)("label",{class:"block font-medium text-sm text-gray-700 required",for:"password_confirmation"},"Confirm Password",-1),b={class:"px-6 pb-4 text-right"},V=["disabled"];const E={__name:"UpdatePassword",setup:function(e){var t=(0,s.ref)(null),r=(0,s.ref)(!1),E=(0,s.reactive)({current_password:"",password:"",password_confirmation:""}),N=function(){a.Inertia.put(route("update-password"),E,{preserveScroll:!0,onStart:function(){r.value=!0},onFinish:function(){r.value=!1,E.current_password="",E.password="",E.password_confirmation=""},onError:function(e){t.value=e}})};return function(e,a){var g,_,h;return(0,s.openBlock)(),(0,s.createElementBlock)("div",n,[l,(0,s.createElementVNode)("div",d,[(0,s.createElementVNode)("form",{onSubmit:(0,s.withModifiers)(N,["prevent"])},[(0,s.createElementVNode)("div",i,[(0,s.createElementVNode)("div",u,[(0,s.createElementVNode)("div",m,[p,(0,s.withDirectives)((0,s.createElementVNode)("input",{type:"password",id:"current_password",class:"form-textarea mt-1 block w-full","onUpdate:modelValue":a[0]||(a[0]=function(e){return E.current_password=e})},null,512),[[s.vModelText,E.current_password]]),(0,s.createVNode)((0,s.unref)(o.Z),{message:null===(g=t.value)||void 0===g?void 0:g.current_password},null,8,["message"])]),(0,s.createElementVNode)("div",w,[f,(0,s.withDirectives)((0,s.createElementVNode)("input",{type:"password",id:"password",class:"form-textarea mt-1 block w-full","onUpdate:modelValue":a[1]||(a[1]=function(e){return E.password=e})},null,512),[[s.vModelText,E.password]]),(0,s.createVNode)((0,s.unref)(o.Z),{message:null===(_=t.value)||void 0===_?void 0:_.password},null,8,["message"])]),(0,s.createElementVNode)("div",v,[x,(0,s.withDirectives)((0,s.createElementVNode)("input",{type:"password",id:"password_confirmation",class:"form-textarea mt-1 block w-full","onUpdate:modelValue":a[2]||(a[2]=function(e){return E.password_confirmation=e})},null,512),[[s.vModelText,E.password_confirmation]]),(0,s.createVNode)((0,s.unref)(o.Z),{message:null===(h=t.value)||void 0===h?void 0:h.password_confirmation},null,8,["message"])])]),(0,s.createElementVNode)("div",b,[(0,s.createElementVNode)("button",{type:"submit",class:"ml-2 btn btn-primary",disabled:r.value},"Save",8,V)])])],40,c)])])}}}}}]);
//# sourceMappingURL=207.js.map