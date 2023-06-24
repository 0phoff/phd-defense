import i9 from"/02-satellite/annotation_size.svg?url";import _4 from"/02-satellite/ap_legend.svg?url";import r9 from"/03-fusion/fuse_layer.svg?url";import c9 from"/04-plane/annotation_size.svg?url";import n9 from"/04-plane/nms-neighbour-diagram.svg?url";import l9 from"/04-plane/ioa-diagram.svg?url";import d9 from"/04-plane/architecture-resnetyolo.svg?url";import h9 from"/04-plane/architecture-resnetyolo-fusion.svg?url";import s9 from"/04-plane/det-examples-solar.svg?url";import o9 from"/04-plane/det-examples-pool.svg?url";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}})();function Ze(t,e){const a=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)a[i[r]]=!0;return e?r=>!!a[r.toLowerCase()]:r=>!!a[r]}const Wt=Object.freeze({}),j2=Object.freeze([]),x1=()=>{},$4=()=>!1,p9=/^on[^a-z]/,Ba=t=>p9.test(t),X6=t=>t.startsWith("onUpdate:"),Qt=Object.assign,q5=(t,e)=>{const a=t.indexOf(e);a>-1&&t.splice(a,1)},f9=Object.prototype.hasOwnProperty,St=(t,e)=>f9.call(t,e),nt=Array.isArray,p2=t=>Da(t)==="[object Map]",t7=t=>Da(t)==="[object Set]",v9=t=>Da(t)==="[object RegExp]",st=t=>typeof t=="function",Gt=t=>typeof t=="string",b5=t=>typeof t=="symbol",Xt=t=>t!==null&&typeof t=="object",V5=t=>Xt(t)&&st(t.then)&&st(t.catch),e7=Object.prototype.toString,Da=t=>e7.call(t),y5=t=>Da(t).slice(8,-1),a7=t=>Da(t)==="[object Object]",k5=t=>Gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,R6=Ze(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),u9=Ze("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),c3=t=>{const e=Object.create(null);return a=>e[a]||(e[a]=t(a))},m9=/-(\w)/g,ne=c3(t=>t.replace(m9,(e,a)=>a?a.toUpperCase():"")),q9=/\B([A-Z])/g,Ve=c3(t=>t.replace(q9,"-$1").toLowerCase()),y2=c3(t=>t.charAt(0).toUpperCase()+t.slice(1)),e2=c3(t=>t?`on${y2(t)}`:""),Ka=(t,e)=>!Object.is(t,e),a2=(t,e)=>{for(let a=0;a<t.length;a++)t[a](e)},J6=(t,e,a)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:a})},b9=t=>{const e=parseFloat(t);return isNaN(e)?t:e},V9=t=>{const e=Gt(t)?Number(t):NaN;return isNaN(e)?t:e};let N0;const j6=()=>N0||(N0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yt(t){if(nt(t)){const e={};for(let a=0;a<t.length;a++){const i=t[a],r=Gt(i)?g9(i):Yt(i);if(r)for(const c in r)e[c]=r[c]}return e}else{if(Gt(t))return t;if(Xt(t))return t}}const y9=/;(?![^(]*\))/g,k9=/:([^]+)/,x9=/\/\*[^]*?\*\//g;function g9(t){const e={};return t.replace(x9,"").split(y9).forEach(a=>{if(a){const i=a.split(k9);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ct(t){let e="";if(Gt(t))e=t;else if(nt(t))for(let a=0;a<t.length;a++){const i=Ct(t[a]);i&&(e+=i+" ")}else if(Xt(t))for(const a in t)t[a]&&(e+=a+" ");return e.trim()}function yt(t){if(!t)return null;let{class:e,style:a}=t;return e&&!Gt(e)&&(t.class=Ct(e)),a&&(t.style=Yt(a)),t}const R9="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",T9="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",i7=Ze(R9),S9=Ze(T9),I9="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",E9=Ze(I9);function r7(t){return!!t||t===""}const L1=t=>Gt(t)?t:t==null?"":nt(t)||Xt(t)&&(t.toString===e7||!st(t.toString))?JSON.stringify(t,c7,2):String(t),c7=(t,e)=>e&&e.__v_isRef?c7(t,e.value):p2(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[i,r])=>(a[`${i} =>`]=r,a),{})}:t7(e)?{[`Set(${e.size})`]:[...e.values()]}:Xt(e)&&!nt(e)&&!a7(e)?String(e):e;function F6(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let I1;class n7{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=I1,!e&&I1&&(this.index=(I1.scopes||(I1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const a=I1;try{return I1=this,e()}finally{I1=a}}else F6("cannot run an inactive effect scope.")}on(){I1=this}off(){I1=this.parent}stop(e){if(this._active){let a,i;for(a=0,i=this.effects.length;a<i;a++)this.effects[a].stop();for(a=0,i=this.cleanups.length;a<i;a++)this.cleanups[a]();if(this.scopes)for(a=0,i=this.scopes.length;a<i;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function w9(t){return new n7(t)}function U9(t,e=I1){e&&e.active&&e.effects.push(t)}function x5(){return I1}function l7(t){I1?I1.cleanups.push(t):F6("onScopeDispose() is called when there is no active effect scope to be associated with.")}const g5=t=>{const e=new Set(t);return e.w=0,e.n=0,e},d7=t=>(t.w&Ce)>0,h7=t=>(t.n&Ce)>0,N9=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ce},K9=t=>{const{deps:e}=t;if(e.length){let a=0;for(let i=0;i<e.length;i++){const r=e[i];d7(r)&&!h7(r)?r.delete(t):e[a++]=r,r.w&=~Ce,r.n&=~Ce}e.length=a}},A6=new WeakMap;let fa=0,Ce=1;const ui=30;let q1;const f2=Symbol("iterate"),mi=Symbol("Map key iterate");class R5{constructor(e,a=null,i){this.fn=e,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,U9(this,i)}run(){if(!this.active)return this.fn();let e=q1,a=je;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=q1,q1=this,je=!0,Ce=1<<++fa,fa<=ui?N9(this):K0(this),this.fn()}finally{fa<=ui&&K9(this),Ce=1<<--fa,q1=this.parent,je=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){q1===this?this.deferStop=!0:this.active&&(K0(this),this.onStop&&this.onStop(),this.active=!1)}}function K0(t){const{deps:e}=t;if(e.length){for(let a=0;a<e.length;a++)e[a].delete(t);e.length=0}}let je=!0;const s7=[];function x2(){s7.push(je),je=!1}function g2(){const t=s7.pop();je=t===void 0?!0:t}function p1(t,e,a){if(je&&q1){let i=A6.get(t);i||A6.set(t,i=new Map);let r=i.get(a);r||i.set(a,r=g5()),o7(r,{effect:q1,target:t,type:e,key:a})}}function o7(t,e){let a=!1;fa<=ui?h7(t)||(t.n|=Ce,a=!d7(t)):a=!t.has(q1),a&&(t.add(q1),q1.deps.push(t),q1.onTrack&&q1.onTrack(Qt({effect:q1},e)))}function le(t,e,a,i,r,c){const n=A6.get(t);if(!n)return;let l=[];if(e==="clear")l=[...n.values()];else if(a==="length"&&nt(t)){const h=Number(i);n.forEach((s,p)=>{(p==="length"||p>=h)&&l.push(s)})}else switch(a!==void 0&&l.push(n.get(a)),e){case"add":nt(t)?k5(a)&&l.push(n.get("length")):(l.push(n.get(f2)),p2(t)&&l.push(n.get(mi)));break;case"delete":nt(t)||(l.push(n.get(f2)),p2(t)&&l.push(n.get(mi)));break;case"set":p2(t)&&l.push(n.get(f2));break}const d={target:t,type:e,key:a,newValue:i,oldValue:r,oldTarget:c};if(l.length===1)l[0]&&qi(l[0],d);else{const h=[];for(const s of l)s&&h.push(...s);qi(g5(h),d)}}function qi(t,e){const a=nt(t)?t:[...t];for(const i of a)i.computed&&X0(i,e);for(const i of a)i.computed||X0(i,e)}function X0(t,e){(t!==q1||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Qt({effect:t},e)),t.scheduler?t.scheduler():t.run())}function X9(t,e){var a;return(a=A6.get(t))==null?void 0:a.get(e)}const J9=Ze("__proto__,__v_isRef,__isVue"),p7=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(b5)),j9=n3(),F9=n3(!1,!0),A9=n3(!0),O9=n3(!0,!0),J0=M9();function M9(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...a){const i=ft(this);for(let c=0,n=this.length;c<n;c++)p1(i,"get",c+"");const r=i[e](...a);return r===-1||r===!1?i[e](...a.map(ft)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...a){x2();const i=ft(this)[e].apply(this,a);return g2(),i}}),t}function L9(t){const e=ft(this);return p1(e,"has",t),e.hasOwnProperty(t)}function n3(t=!1,e=!1){return function(i,r,c){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&c===(t?e?y7:V7:e?b7:q7).get(i))return i;const n=nt(i);if(!t){if(n&&St(J0,r))return Reflect.get(J0,r,c);if(r==="hasOwnProperty")return L9}const l=Reflect.get(i,r,c);return(b5(r)?p7.has(r):J9(r))||(t||p1(i,"get",r),e)?l:Ut(l)?n&&k5(r)?l:l.value:Xt(l)?t?ae(l):Pt(l):l}}const z9=f7(),W9=f7(!0);function f7(t=!1){return function(a,i,r,c){let n=a[i];if(Qe(n)&&Ut(n)&&!Ut(r))return!1;if(!t&&(!O6(r)&&!Qe(r)&&(n=ft(n),r=ft(r)),!nt(a)&&Ut(n)&&!Ut(r)))return n.value=r,!0;const l=nt(a)&&k5(i)?Number(i)<a.length:St(a,i),d=Reflect.set(a,i,r,c);return a===ft(c)&&(l?Ka(r,n)&&le(a,"set",i,r,n):le(a,"add",i,r)),d}}function C9(t,e){const a=St(t,e),i=t[e],r=Reflect.deleteProperty(t,e);return r&&a&&le(t,"delete",e,void 0,i),r}function Q9(t,e){const a=Reflect.has(t,e);return(!b5(e)||!p7.has(e))&&p1(t,"has",e),a}function H9(t){return p1(t,"iterate",nt(t)?"length":f2),Reflect.ownKeys(t)}const v7={get:j9,set:z9,deleteProperty:C9,has:Q9,ownKeys:H9},u7={get:A9,set(t,e){return F6(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return F6(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},Z9=Qt({},v7,{get:F9,set:W9}),G9=Qt({},u7,{get:O9}),T5=t=>t,l3=t=>Reflect.getPrototypeOf(t);function n6(t,e,a=!1,i=!1){t=t.__v_raw;const r=ft(t),c=ft(e);a||(e!==c&&p1(r,"get",e),p1(r,"get",c));const{has:n}=l3(r),l=i?T5:a?S5:Xa;if(n.call(r,e))return l(t.get(e));if(n.call(r,c))return l(t.get(c));t!==r&&t.get(e)}function l6(t,e=!1){const a=this.__v_raw,i=ft(a),r=ft(t);return e||(t!==r&&p1(i,"has",t),p1(i,"has",r)),t===r?a.has(t):a.has(t)||a.has(r)}function d6(t,e=!1){return t=t.__v_raw,!e&&p1(ft(t),"iterate",f2),Reflect.get(t,"size",t)}function j0(t){t=ft(t);const e=ft(this);return l3(e).has.call(e,t)||(e.add(t),le(e,"add",t,t)),this}function F0(t,e){e=ft(e);const a=ft(this),{has:i,get:r}=l3(a);let c=i.call(a,t);c?m7(a,i,t):(t=ft(t),c=i.call(a,t));const n=r.call(a,t);return a.set(t,e),c?Ka(e,n)&&le(a,"set",t,e,n):le(a,"add",t,e),this}function A0(t){const e=ft(this),{has:a,get:i}=l3(e);let r=a.call(e,t);r?m7(e,a,t):(t=ft(t),r=a.call(e,t));const c=i?i.call(e,t):void 0,n=e.delete(t);return r&&le(e,"delete",t,void 0,c),n}function O0(){const t=ft(this),e=t.size!==0,a=p2(t)?new Map(t):new Set(t),i=t.clear();return e&&le(t,"clear",void 0,void 0,a),i}function h6(t,e){return function(i,r){const c=this,n=c.__v_raw,l=ft(n),d=e?T5:t?S5:Xa;return!t&&p1(l,"iterate",f2),n.forEach((h,s)=>i.call(r,d(h),d(s),c))}}function s6(t,e,a){return function(...i){const r=this.__v_raw,c=ft(r),n=p2(c),l=t==="entries"||t===Symbol.iterator&&n,d=t==="keys"&&n,h=r[t](...i),s=a?T5:e?S5:Xa;return!e&&p1(c,"iterate",d?mi:f2),{next(){const{value:p,done:f}=h.next();return f?{value:p,done:f}:{value:l?[s(p[0]),s(p[1])]:s(p),done:f}},[Symbol.iterator](){return this}}}}function Se(t){return function(...e){{const a=e[0]?`on key "${e[0]}" `:"";console.warn(`${y2(t)} operation ${a}failed: target is readonly.`,ft(this))}return t==="delete"?!1:this}}function P9(){const t={get(c){return n6(this,c)},get size(){return d6(this)},has:l6,add:j0,set:F0,delete:A0,clear:O0,forEach:h6(!1,!1)},e={get(c){return n6(this,c,!1,!0)},get size(){return d6(this)},has:l6,add:j0,set:F0,delete:A0,clear:O0,forEach:h6(!1,!0)},a={get(c){return n6(this,c,!0)},get size(){return d6(this,!0)},has(c){return l6.call(this,c,!0)},add:Se("add"),set:Se("set"),delete:Se("delete"),clear:Se("clear"),forEach:h6(!0,!1)},i={get(c){return n6(this,c,!0,!0)},get size(){return d6(this,!0)},has(c){return l6.call(this,c,!0)},add:Se("add"),set:Se("set"),delete:Se("delete"),clear:Se("clear"),forEach:h6(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(c=>{t[c]=s6(c,!1,!1),a[c]=s6(c,!0,!1),e[c]=s6(c,!1,!0),i[c]=s6(c,!0,!0)}),[t,a,e,i]}const[Y9,B9,D9,_9]=P9();function d3(t,e){const a=e?t?_9:D9:t?B9:Y9;return(i,r,c)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(St(a,r)&&r in i?a:i,r,c)}const $9={get:d3(!1,!1)},tl={get:d3(!1,!0)},el={get:d3(!0,!1)},al={get:d3(!0,!0)};function m7(t,e,a){const i=ft(a);if(i!==a&&e.call(t,i)){const r=y5(t);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const q7=new WeakMap,b7=new WeakMap,V7=new WeakMap,y7=new WeakMap;function il(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rl(t){return t.__v_skip||!Object.isExtensible(t)?0:il(y5(t))}function Pt(t){return Qe(t)?t:h3(t,!1,v7,$9,q7)}function cl(t){return h3(t,!1,Z9,tl,b7)}function ae(t){return h3(t,!0,u7,el,V7)}function va(t){return h3(t,!0,G9,al,y7)}function h3(t,e,a,i,r){if(!Xt(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const c=r.get(t);if(c)return c;const n=rl(t);if(n===0)return t;const l=new Proxy(t,n===2?i:a);return r.set(t,l),l}function v2(t){return Qe(t)?v2(t.__v_raw):!!(t&&t.__v_isReactive)}function Qe(t){return!!(t&&t.__v_isReadonly)}function O6(t){return!!(t&&t.__v_isShallow)}function M6(t){return v2(t)||Qe(t)}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function s3(t){return J6(t,"__v_skip",!0),t}const Xa=t=>Xt(t)?Pt(t):t,S5=t=>Xt(t)?ae(t):t;function I5(t){je&&q1&&(t=ft(t),o7(t.dep||(t.dep=g5()),{target:t,type:"get",key:"value"}))}function E5(t,e){t=ft(t);const a=t.dep;a&&qi(a,{target:t,type:"set",key:"value",newValue:e})}function Ut(t){return!!(t&&t.__v_isRef===!0)}function G(t){return k7(t,!1)}function de(t){return k7(t,!0)}function k7(t,e){return Ut(t)?t:new nl(t,e)}class nl{constructor(e,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?e:ft(e),this._value=a?e:Xa(e)}get value(){return I5(this),this._value}set value(e){const a=this.__v_isShallow||O6(e)||Qe(e);e=a?e:ft(e),Ka(e,this._rawValue)&&(this._rawValue=e,this._value=a?e:Xa(e),E5(this,e))}}function U(t){return Ut(t)?t.value:t}const ll={get:(t,e,a)=>U(Reflect.get(t,e,a)),set:(t,e,a,i)=>{const r=t[e];return Ut(r)&&!Ut(a)?(r.value=a,!0):Reflect.set(t,e,a,i)}};function x7(t){return v2(t)?t:new Proxy(t,ll)}class dl{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:i}=e(()=>I5(this),()=>E5(this));this._get=a,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function w5(t){return new dl(t)}function hl(t){M6(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=nt(t)?new Array(t.length):{};for(const a in t)e[a]=g7(t,a);return e}class sl{constructor(e,a,i){this._object=e,this._key=a,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return X9(ft(this._object),this._key)}}class ol{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function pl(t,e,a){return Ut(t)?t:st(t)?new ol(t):Xt(t)&&arguments.length>1?g7(t,e,a):G(t)}function g7(t,e,a){const i=t[e];return Ut(i)?i:new sl(t,e,a)}class fl{constructor(e,a,i,r){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new R5(e,()=>{this._dirty||(this._dirty=!0,E5(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=ft(this);return I5(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function vl(t,e,a=!1){let i,r;const c=st(t);c?(i=t,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=t.get,r=t.set);const n=new fl(i,r,c||!r,a);return e&&!a&&(n.effect.onTrack=e.onTrack,n.effect.onTrigger=e.onTrigger),n}const u2=[];function T6(t){u2.push(t)}function S6(){u2.pop()}function O(t,...e){x2();const a=u2.length?u2[u2.length-1].component:null,i=a&&a.appContext.config.warnHandler,r=ul();if(i)be(i,a,11,[t+e.join(""),a&&a.proxy,r.map(({vnode:c})=>`at <${y3(a,c.type)}>`).join(`
`),r]);else{const c=[`[Vue warn]: ${t}`,...e];r.length&&c.push(`
`,...ml(r)),console.warn(...c)}g2()}function ul(){let t=u2[u2.length-1];if(!t)return[];const e=[];for(;t;){const a=e[0];a&&a.vnode===t?a.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function ml(t){const e=[];return t.forEach((a,i)=>{e.push(...i===0?[]:[`
`],...ql(a))}),e}function ql({vnode:t,recurseCount:e}){const a=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,r=` at <${y3(t.component,t.type,i)}`,c=">"+a;return t.props?[r,...bl(t.props),c]:[r+c]}function bl(t){const e=[],a=Object.keys(t);return a.slice(0,3).forEach(i=>{e.push(...R7(i,t[i]))}),a.length>3&&e.push(" ..."),e}function R7(t,e,a){return Gt(e)?(e=JSON.stringify(e),a?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?a?e:[`${t}=${e}`]:Ut(e)?(e=R7(t,ft(e.value),!0),a?e:[`${t}=Ref<`,e,">"]):st(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ft(e),a?e:[`${t}=`,e])}function Vl(t,e){t!==void 0&&(typeof t!="number"?O(`${e} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&O(`${e} is NaN - the duration expression might be incorrect.`))}const U5={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function be(t,e,a,i){let r;try{r=i?t(...i):t()}catch(c){o3(c,e,a)}return r}function M1(t,e,a,i){if(st(t)){const c=be(t,e,a,i);return c&&V5(c)&&c.catch(n=>{o3(n,e,a)}),c}const r=[];for(let c=0;c<t.length;c++)r.push(M1(t[c],e,a,i));return r}function o3(t,e,a,i=!0){const r=e?e.vnode:null;if(e){let c=e.parent;const n=e.proxy,l=U5[a];for(;c;){const h=c.ec;if(h){for(let s=0;s<h.length;s++)if(h[s](t,n,l)===!1)return}c=c.parent}const d=e.appContext.config.errorHandler;if(d){be(d,null,10,[t,n,l]);return}}yl(t,a,r,i)}function yl(t,e,a,i=!0){{const r=U5[e];if(a&&T6(a),O(`Unhandled error${r?` during execution of ${r}`:""}`),a&&S6(),i)throw t;console.error(t)}}let Ja=!1,bi=!1;const l1=[];let te=0;const F2=[];let $1=null,Ue=0;const T7=Promise.resolve();let N5=null;const kl=100;function d1(t){const e=N5||T7;return t?e.then(this?t.bind(this):t):e}function xl(t){let e=te+1,a=l1.length;for(;e<a;){const i=e+a>>>1;ja(l1[i])<t?e=i+1:a=i}return e}function p3(t){(!l1.length||!l1.includes(t,Ja&&t.allowRecurse?te+1:te))&&(t.id==null?l1.push(t):l1.splice(xl(t.id),0,t),S7())}function S7(){!Ja&&!bi&&(bi=!0,N5=T7.then(w7))}function gl(t){const e=l1.indexOf(t);e>te&&l1.splice(e,1)}function I7(t){nt(t)?F2.push(...t):(!$1||!$1.includes(t,t.allowRecurse?Ue+1:Ue))&&F2.push(t),S7()}function M0(t,e=Ja?te+1:0){for(t=t||new Map;e<l1.length;e++){const a=l1[e];if(a&&a.pre){if(K5(t,a))continue;l1.splice(e,1),e--,a()}}}function E7(t){if(F2.length){const e=[...new Set(F2)];if(F2.length=0,$1){$1.push(...e);return}for($1=e,t=t||new Map,$1.sort((a,i)=>ja(a)-ja(i)),Ue=0;Ue<$1.length;Ue++)K5(t,$1[Ue])||$1[Ue]();$1=null,Ue=0}}const ja=t=>t.id==null?1/0:t.id,Rl=(t,e)=>{const a=ja(t)-ja(e);if(a===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return a};function w7(t){bi=!1,Ja=!0,t=t||new Map,l1.sort(Rl);const e=a=>K5(t,a);try{for(te=0;te<l1.length;te++){const a=l1[te];if(a&&a.active!==!1){if(e(a))continue;be(a,null,14)}}}finally{te=0,l1.length=0,E7(t),Ja=!1,N5=null,(l1.length||F2.length)&&w7(t)}}function K5(t,e){if(!t.has(e))t.set(e,1);else{const a=t.get(e);if(a>kl){const i=e.ownerInstance,r=i&&Ma(i.type);return O(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,a+1)}}let Fe=!1;const X2=new Set;j6().__VUE_HMR_RUNTIME__={createRecord:F3(U7),rerender:F3(Il),reload:F3(El)};const k2=new Map;function Tl(t){const e=t.type.__hmrId;let a=k2.get(e);a||(U7(e,t.type),a=k2.get(e)),a.instances.add(t)}function Sl(t){k2.get(t.type.__hmrId).instances.delete(t)}function U7(t,e){return k2.has(t)?!1:(k2.set(t,{initialDef:ya(e),instances:new Set}),!0)}function ya(t){return dr(t)?t.__vccOpts:t}function Il(t,e){const a=k2.get(t);a&&(a.initialDef.render=e,[...a.instances].forEach(i=>{e&&(i.render=e,ya(i.type).render=e),i.renderCache=[],Fe=!0,i.update(),Fe=!1}))}function El(t,e){const a=k2.get(t);if(!a)return;e=ya(e),L0(a.initialDef,e);const i=[...a.instances];for(const r of i){const c=ya(r.type);X2.has(c)||(c!==a.initialDef&&L0(c,e),X2.add(c)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(X2.add(c),r.ceReload(e.styles),X2.delete(c)):r.parent?p3(r.parent.update):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}I7(()=>{for(const r of i)X2.delete(ya(r.type))})}function L0(t,e){Qt(t,e);for(const a in t)a!=="__file"&&!(a in e)&&delete t[a]}function F3(t){return(e,a)=>{try{return t(e,a)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let ee,ua=[],Vi=!1;function _a(t,...e){ee?ee.emit(t,...e):Vi||ua.push({event:t,args:e})}function N7(t,e){var a,i;ee=t,ee?(ee.enabled=!0,ua.forEach(({event:r,args:c})=>ee.emit(r,...c)),ua=[]):typeof window<"u"&&window.HTMLElement&&!((i=(a=window.navigator)==null?void 0:a.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(c=>{N7(c,e)}),setTimeout(()=>{ee||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Vi=!0,ua=[])},3e3)):(Vi=!0,ua=[])}function wl(t,e){_a("app:init",t,e,{Fragment:wt,Text:e6,Comment:s1,Static:M2})}function Ul(t){_a("app:unmount",t)}const yi=X5("component:added"),K7=X5("component:updated"),Nl=X5("component:removed"),Kl=t=>{ee&&typeof ee.cleanupBuffer=="function"&&!ee.cleanupBuffer(t)&&Nl(t)};function X5(t){return e=>{_a(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const Xl=X7("perf:start"),Jl=X7("perf:end");function X7(t){return(e,a,i)=>{_a(t,e.appContext.app,e.uid,e,a,i)}}function jl(t,e,a){_a("component:emit",t.appContext.app,t,e,a)}function Fl(t,e,...a){if(t.isUnmounted)return;const i=t.vnode.props||Wt;{const{emitsOptions:s,propsOptions:[p]}=t;if(s)if(!(e in s))(!p||!(e2(e)in p))&&O(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${e2(e)}" prop.`);else{const f=s[e];st(f)&&(f(...a)||O(`Invalid event arguments: event validation failed for event "${e}".`))}}let r=a;const c=e.startsWith("update:"),n=c&&e.slice(7);if(n&&n in i){const s=`${n==="modelValue"?"model":n}Modifiers`,{number:p,trim:f}=i[s]||Wt;f&&(r=a.map(v=>Gt(v)?v.trim():v)),p&&(r=a.map(b9))}jl(t,e,r);{const s=e.toLowerCase();s!==e&&i[e2(s)]&&O(`Event "${s}" is emitted in component ${y3(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ve(e)}" instead of "${e}".`)}let l,d=i[l=e2(e)]||i[l=e2(ne(e))];!d&&c&&(d=i[l=e2(Ve(e))]),d&&M1(d,t,6,r);const h=i[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,M1(h,t,6,r)}}function J7(t,e,a=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const c=t.emits;let n={},l=!1;if(!st(t)){const d=h=>{const s=J7(h,e,!0);s&&(l=!0,Qt(n,s))};!a&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}return!c&&!l?(Xt(t)&&i.set(t,null),null):(nt(c)?c.forEach(d=>n[d]=null):Qt(n,c),Xt(t)&&i.set(t,n),n)}function f3(t,e){return!t||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),St(t,e[0].toLowerCase()+e.slice(1))||St(t,Ve(e))||St(t,e))}let e1=null,v3=null;function L6(t){const e=e1;return e1=t,v3=t&&t.type.__scopeId||null,e}function At(t){v3=t}function Ot(){v3=null}function j(t,e=e1,a){if(!e||t._n)return t;const i=(...r)=>{i._d&&t8(-1);const c=L6(e);let n;try{n=t(...r)}finally{L6(c),i._d&&t8(1)}return K7(e),n};return i._n=!0,i._c=!0,i._d=!0,i}let ki=!1;function z6(){ki=!0}function A3(t){const{type:e,vnode:a,proxy:i,withProxy:r,props:c,propsOptions:[n],slots:l,attrs:d,emit:h,render:s,renderCache:p,data:f,setupState:v,ctx:u,inheritAttrs:V}=t;let x,k;const g=L6(t);ki=!1;try{if(a.shapeFlag&4){const R=r||i;x=G1(s.call(R,R,p,c,v,f,u)),k=d}else{const R=e;d===c&&z6(),x=G1(R.length>1?R(c,{get attrs(){return z6(),d},slots:l,emit:h}):R(c,null)),k=e.props?d:Ol(d)}}catch(R){ka.length=0,o3(R,t,1),x=A(s1)}let q=x,T;if(x.patchFlag>0&&x.patchFlag&2048&&([q,T]=Al(x)),k&&V!==!1){const R=Object.keys(k),{shapeFlag:I}=q;if(R.length){if(I&7)n&&R.some(X6)&&(k=Ml(k,n)),q=se(q,k);else if(!ki&&q.type!==s1){const F=Object.keys(d),w=[],L=[];for(let et=0,ht=F.length;et<ht;et++){const Z=F[et];Ba(Z)?X6(Z)||w.push(Z[2].toLowerCase()+Z.slice(3)):L.push(Z)}L.length&&O(`Extraneous non-props attributes (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),w.length&&O(`Extraneous non-emits event listeners (${w.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(z0(q)||O("Runtime directive used on component with non-element root node. The directives will not function as intended."),q=se(q),q.dirs=q.dirs?q.dirs.concat(a.dirs):a.dirs),a.transition&&(z0(q)||O("Component inside <Transition> renders non-element root node that cannot be animated."),q.transition=a.transition),T?T(q):x=q,L6(g),x}const Al=t=>{const e=t.children,a=t.dynamicChildren,i=j7(e);if(!i)return[t,void 0];const r=e.indexOf(i),c=a?a.indexOf(i):-1,n=l=>{e[r]=l,a&&(c>-1?a[c]=l:l.patchFlag>0&&(t.dynamicChildren=[...a,l]))};return[G1(i),n]};function j7(t){let e;for(let a=0;a<t.length;a++){const i=t[a];if(he(i)){if(i.type!==s1||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Ol=t=>{let e;for(const a in t)(a==="class"||a==="style"||Ba(a))&&((e||(e={}))[a]=t[a]);return e},Ml=(t,e)=>{const a={};for(const i in t)(!X6(i)||!(i.slice(9)in e))&&(a[i]=t[i]);return a},z0=t=>t.shapeFlag&7||t.type===s1;function Ll(t,e,a){const{props:i,children:r,component:c}=t,{props:n,children:l,patchFlag:d}=e,h=c.emitsOptions;if((r||l)&&Fe||e.dirs||e.transition)return!0;if(a&&d>=0){if(d&1024)return!0;if(d&16)return i?W0(i,n,h):!!n;if(d&8){const s=e.dynamicProps;for(let p=0;p<s.length;p++){const f=s[p];if(n[f]!==i[f]&&!f3(h,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:i===n?!1:i?n?W0(i,n,h):!0:!!n;return!1}function W0(t,e,a){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const c=i[r];if(e[c]!==t[c]&&!f3(a,c))return!0}return!1}function zl({vnode:t,parent:e},a){for(;e&&e.subTree===t;)(t=e.vnode).el=a,e=e.parent}const F7=t=>t.__isSuspense;function Wl(t,e){e&&e.pendingBranch?nt(t)?e.effects.push(...t):e.effects.push(t):I7(t)}function Z2(t,e){return u3(t,null,e)}function Cl(t,e){return u3(t,null,Qt({},e,{flush:"post"}))}const o6={};function ut(t,e,a){return st(e)||O("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),u3(t,e,a)}function u3(t,e,{immediate:a,deep:i,flush:r,onTrack:c,onTrigger:n}=Wt){var l;e||(a!==void 0&&O('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&O('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const d=R=>{O("Invalid watch source: ",R,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},h=x5()===((l=t1)==null?void 0:l.scope)?t1:null;let s,p=!1,f=!1;if(Ut(t)?(s=()=>t.value,p=O6(t)):v2(t)?(s=()=>t,i=!0):nt(t)?(f=!0,p=t.some(R=>v2(R)||O6(R)),s=()=>t.map(R=>{if(Ut(R))return R.value;if(v2(R))return h2(R);if(st(R))return be(R,h,2);d(R)})):st(t)?e?s=()=>be(t,h,2):s=()=>{if(!(h&&h.isUnmounted))return v&&v(),M1(t,h,3,[u])}:(s=x1,d(t)),e&&i){const R=s;s=()=>h2(R())}let v,u=R=>{v=q.onStop=()=>{be(R,h,4)}},V;if(Oa)if(u=x1,e?a&&M1(e,h,3,[s(),f?[]:void 0,u]):s(),r==="sync"){const R=Dd();V=R.__watcherHandles||(R.__watcherHandles=[])}else return x1;let x=f?new Array(t.length).fill(o6):o6;const k=()=>{if(q.active)if(e){const R=q.run();(i||p||(f?R.some((I,F)=>Ka(I,x[F])):Ka(R,x)))&&(v&&v(),M1(e,h,3,[R,x===o6?void 0:f&&x[0]===o6?[]:x,u]),x=R)}else q.run()};k.allowRecurse=!!e;let g;r==="sync"?g=k:r==="post"?g=()=>c1(k,h&&h.suspense):(k.pre=!0,h&&(k.id=h.uid),g=()=>p3(k));const q=new R5(s,g);q.onTrack=c,q.onTrigger=n,e?a?k():x=q.run():r==="post"?c1(q.run.bind(q),h&&h.suspense):q.run();const T=()=>{q.stop(),h&&h.scope&&q5(h.scope.effects,q)};return V&&V.push(T),T}function Ql(t,e,a){const i=this.proxy,r=Gt(t)?t.includes(".")?A7(i,t):()=>i[t]:t.bind(i,i);let c;st(e)?c=e:(c=e.handler,a=e);const n=t1;W2(this);const l=u3(r,c.bind(i),a);return n?W2(n):q2(),l}function A7(t,e){const a=e.split(".");return()=>{let i=t;for(let r=0;r<a.length&&i;r++)i=i[a[r]];return i}}function h2(t,e){if(!Xt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ut(t))h2(t.value,e);else if(nt(t))for(let a=0;a<t.length;a++)h2(t[a],e);else if(t7(t)||p2(t))t.forEach(a=>{h2(a,e)});else if(a7(t))for(const a in t)h2(t[a],e);return t}function O7(t){u9(t)&&O("Do not use built-in directive ids as custom directive id: "+t)}function D(t,e){const a=e1;if(a===null)return O("withDirectives can only be used inside render functions."),t;const i=V3(a)||a.proxy,r=t.dirs||(t.dirs=[]);for(let c=0;c<e.length;c++){let[n,l,d,h=Wt]=e[c];n&&(st(n)&&(n={mounted:n,updated:n}),n.deep&&h2(l),r.push({dir:n,instance:i,value:l,oldValue:void 0,arg:d,modifiers:h}))}return t}function Be(t,e,a,i){const r=t.dirs,c=e&&e.dirs;for(let n=0;n<r.length;n++){const l=r[n];c&&(l.oldValue=c[n].value);let d=l.dir[i];d&&(x2(),M1(d,a,8,[t.el,l,t,e]),g2())}}function Hl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ge(()=>{t.isMounted=!0}),$a(()=>{t.isUnmounting=!0}),t}const j1=[Function,Array],Zl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:j1,onEnter:j1,onAfterEnter:j1,onEnterCancelled:j1,onBeforeLeave:j1,onLeave:j1,onAfterLeave:j1,onLeaveCancelled:j1,onBeforeAppear:j1,onAppear:j1,onAfterAppear:j1,onAppearCancelled:j1};function Gl(t,e){const{leavingVNodes:a}=t;let i=a.get(e.type);return i||(i=Object.create(null),a.set(e.type,i)),i}function xi(t,e,a,i){const{appear:r,mode:c,persisted:n=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:h,onEnterCancelled:s,onBeforeLeave:p,onLeave:f,onAfterLeave:v,onLeaveCancelled:u,onBeforeAppear:V,onAppear:x,onAfterAppear:k,onAppearCancelled:g}=e,q=String(t.key),T=Gl(a,t),R=(w,L)=>{w&&M1(w,i,9,L)},I=(w,L)=>{const et=L[1];R(w,L),nt(w)?w.every(ht=>ht.length<=1)&&et():w.length<=1&&et()},F={mode:c,persisted:n,beforeEnter(w){let L=l;if(!a.isMounted)if(r)L=V||l;else return;w._leaveCb&&w._leaveCb(!0);const et=T[q];et&&i2(t,et)&&et.el._leaveCb&&et.el._leaveCb(),R(L,[w])},enter(w){let L=d,et=h,ht=s;if(!a.isMounted)if(r)L=x||d,et=k||h,ht=g||s;else return;let Z=!1;const vt=w._enterCb=bt=>{Z||(Z=!0,bt?R(ht,[w]):R(et,[w]),F.delayedLeave&&F.delayedLeave(),w._enterCb=void 0)};L?I(L,[w,vt]):vt()},leave(w,L){const et=String(t.key);if(w._enterCb&&w._enterCb(!0),a.isUnmounting)return L();R(p,[w]);let ht=!1;const Z=w._leaveCb=vt=>{ht||(ht=!0,L(),vt?R(u,[w]):R(v,[w]),w._leaveCb=void 0,T[et]===t&&delete T[et])};T[et]=t,f?I(f,[w,Z]):Z()},clone(w){return xi(w,e,a,i)}};return F}function W6(t,e){t.shapeFlag&6&&t.component?W6(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function M7(t,e=!1,a){let i=[],r=0;for(let c=0;c<t.length;c++){let n=t[c];const l=a==null?n.key:String(a)+String(n.key!=null?n.key:c);n.type===wt?(n.patchFlag&128&&r++,i=i.concat(M7(n.children,e,l))):(e||n.type!==s1)&&i.push(l!=null?se(n,{key:l}):n)}if(r>1)for(let c=0;c<i.length;c++)i[c].patchFlag=-2;return i}function jt(t,e){return st(t)?(()=>Qt({name:t.name},e,{setup:t}))():t}const A2=t=>!!t.type.__asyncLoader,J5=t=>t.type.__isKeepAlive,Pl={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const a=K1(),i=a.ctx;if(!i.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const r=new Map,c=new Set;let n=null;a.__v_cache=r;const l=a.suspense,{renderer:{p:d,m:h,um:s,o:{createElement:p}}}=i,f=p("div");i.activate=(g,q,T,R,I)=>{const F=g.component;h(g,q,T,0,l),d(F.vnode,g,q,T,F,l,R,g.slotScopeIds,I),c1(()=>{F.isDeactivated=!1,F.a&&a2(F.a);const w=g.props&&g.props.onVnodeMounted;w&&F1(w,F.parent,g)},l),yi(F)},i.deactivate=g=>{const q=g.component;h(g,f,null,1,l),c1(()=>{q.da&&a2(q.da);const T=g.props&&g.props.onVnodeUnmounted;T&&F1(T,q.parent,g),q.isDeactivated=!0},l),yi(q)};function v(g){O3(g),s(g,a,l,!0)}function u(g){r.forEach((q,T)=>{const R=Ma(q.type);R&&(!g||!g(R))&&V(T)})}function V(g){const q=r.get(g);!n||!i2(q,n)?v(q):n&&O3(n),r.delete(g),c.delete(g)}ut(()=>[t.include,t.exclude],([g,q])=>{g&&u(T=>ma(g,T)),q&&u(T=>!ma(q,T))},{flush:"post",deep:!0});let x=null;const k=()=>{x!=null&&r.set(x,M3(a.subTree))};return Ge(k),q3(k),$a(()=>{r.forEach(g=>{const{subTree:q,suspense:T}=a,R=M3(q);if(g.type===R.type&&g.key===R.key){O3(R);const I=R.component.da;I&&c1(I,T);return}v(g)})}),()=>{if(x=null,!e.default)return null;const g=e.default(),q=g[0];if(g.length>1)return O("KeepAlive should contain exactly one component child."),n=null,g;if(!he(q)||!(q.shapeFlag&4)&&!(q.shapeFlag&128))return n=null,q;let T=M3(q);const R=T.type,I=Ma(A2(T)?T.type.__asyncResolved||{}:R),{include:F,exclude:w,max:L}=t;if(F&&(!I||!ma(F,I))||w&&I&&ma(w,I))return n=T,q;const et=T.key==null?R:T.key,ht=r.get(et);return T.el&&(T=se(T),q.shapeFlag&128&&(q.ssContent=T)),x=et,ht?(T.el=ht.el,T.component=ht.component,T.transition&&W6(T,T.transition),T.shapeFlag|=512,c.delete(et),c.add(et)):(c.add(et),L&&c.size>parseInt(L,10)&&V(c.values().next().value)),T.shapeFlag|=256,n=T,F7(q.type)?q:T}}},L7=Pl;function ma(t,e){return nt(t)?t.some(a=>ma(a,e)):Gt(t)?t.split(",").includes(e):v9(t)?t.test(e):!1}function z7(t,e){C7(t,"a",e)}function W7(t,e){C7(t,"da",e)}function C7(t,e,a=t1){const i=t.__wdc||(t.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(m3(e,i,a),a){let r=a.parent;for(;r&&r.parent;)J5(r.parent.vnode)&&Yl(i,e,a,r),r=r.parent}}function Yl(t,e,a,i){const r=m3(e,t,i,!0);t6(()=>{q5(i[e],r)},a)}function O3(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function M3(t){return t.shapeFlag&128?t.ssContent:t}function m3(t,e,a=t1,i=!1){if(a){const r=a[t]||(a[t]=[]),c=e.__weh||(e.__weh=(...n)=>{if(a.isUnmounted)return;x2(),W2(a);const l=M1(e,a,t,n);return q2(),g2(),l});return i?r.unshift(c):r.push(c),c}else{const r=e2(U5[t].replace(/ hook$/,""));O(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ge=t=>(e,a=t1)=>(!Oa||t==="sp")&&m3(t,(...i)=>e(...i),a),Bl=ge("bm"),Ge=ge("m"),Dl=ge("bu"),q3=ge("u"),$a=ge("bum"),t6=ge("um"),_l=ge("sp"),$l=ge("rtg"),td=ge("rtc");function ed(t,e=t1){m3("ec",t,e)}const gi="components",ad="directives";function C6(t,e){return Q7(gi,t,!0,e)||t}const id=Symbol.for("v-ndc");function mt(t){return Q7(ad,t)}function Q7(t,e,a=!0,i=!1){const r=e1||t1;if(r){const c=r.type;if(t===gi){const l=Ma(c,!1);if(l&&(l===e||l===ne(e)||l===y2(ne(e))))return c}const n=C0(r[t]||c[t],e)||C0(r.appContext[t],e);if(!n&&i)return c;if(a&&!n){const l=t===gi?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";O(`Failed to resolve ${t.slice(0,-1)}: ${e}${l}`)}return n}else O(`resolve${y2(t.slice(0,-1))} can only be used in render() or setup().`)}function C0(t,e){return t&&(t[e]||t[ne(e)]||t[y2(ne(e))])}function G2(t,e,a,i){let r;const c=a&&a[i];if(nt(t)||Gt(t)){r=new Array(t.length);for(let n=0,l=t.length;n<l;n++)r[n]=e(t[n],n,void 0,c&&c[n])}else if(typeof t=="number"){Number.isInteger(t)||O(`The v-for range expect an integer value but got ${t}.`),r=new Array(t);for(let n=0;n<t;n++)r[n]=e(n+1,n,void 0,c&&c[n])}else if(Xt(t))if(t[Symbol.iterator])r=Array.from(t,(n,l)=>e(n,l,void 0,c&&c[l]));else{const n=Object.keys(t);r=new Array(n.length);for(let l=0,d=n.length;l<d;l++){const h=n[l];r[l]=e(t[h],h,l,c&&c[l])}}else r=[];return a&&(a[i]=r),r}function z1(t,e,a={},i,r){if(e1.isCE||e1.parent&&A2(e1.parent)&&e1.parent.isCE)return e!=="default"&&(a.name=e),A("slot",a,i&&i());let c=t[e];c&&c.length>1&&(O("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),c=()=>[]),c&&c._c&&(c._d=!1),y();const n=c&&H7(c(a)),l=C(wt,{key:a.key||n&&n.key||`_${e}`},n||(i?i():[]),n&&t._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),c&&c._c&&(c._d=!0),l}function H7(t){return t.some(e=>he(e)?!(e.type===s1||e.type===wt&&!H7(e.children)):!0)?t:null}const Ri=t=>t?cr(t)?V3(t)||t.proxy:Ri(t.parent):null,m2=Qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>va(t.props),$attrs:t=>va(t.attrs),$slots:t=>va(t.slots),$refs:t=>va(t.refs),$parent:t=>Ri(t.parent),$root:t=>Ri(t.root),$emit:t=>t.emit,$options:t=>F5(t),$forceUpdate:t=>t.f||(t.f=()=>p3(t.update)),$nextTick:t=>t.n||(t.n=d1.bind(t.proxy)),$watch:t=>Ql.bind(t)}),j5=t=>t==="_"||t==="$",L3=(t,e)=>t!==Wt&&!t.__isScriptSetup&&St(t,e),Z7={get({_:t},e){const{ctx:a,setupState:i,data:r,props:c,accessCache:n,type:l,appContext:d}=t;if(e==="__isVue")return!0;let h;if(e[0]!=="$"){const v=n[e];if(v!==void 0)switch(v){case 1:return i[e];case 2:return r[e];case 4:return a[e];case 3:return c[e]}else{if(L3(i,e))return n[e]=1,i[e];if(r!==Wt&&St(r,e))return n[e]=2,r[e];if((h=t.propsOptions[0])&&St(h,e))return n[e]=3,c[e];if(a!==Wt&&St(a,e))return n[e]=4,a[e];Ti&&(n[e]=0)}}const s=m2[e];let p,f;if(s)return e==="$attrs"?(p1(t,"get",e),z6()):e==="$slots"&&p1(t,"get",e),s(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(a!==Wt&&St(a,e))return n[e]=4,a[e];if(f=d.config.globalProperties,St(f,e))return f[e];e1&&(!Gt(e)||e.indexOf("__v")!==0)&&(r!==Wt&&j5(e[0])&&St(r,e)?O(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===e1&&O(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,a){const{data:i,setupState:r,ctx:c}=t;return L3(r,e)?(r[e]=a,!0):r.__isScriptSetup&&St(r,e)?(O(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):i!==Wt&&St(i,e)?(i[e]=a,!0):St(t.props,e)?(O(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(O(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(c,e,{enumerable:!0,configurable:!0,value:a}):c[e]=a,!0)},has({_:{data:t,setupState:e,accessCache:a,ctx:i,appContext:r,propsOptions:c}},n){let l;return!!a[n]||t!==Wt&&St(t,n)||L3(e,n)||(l=c[0])&&St(l,n)||St(i,n)||St(m2,n)||St(r.config.globalProperties,n)},defineProperty(t,e,a){return a.get!=null?t._.accessCache[e]=0:St(a,"value")&&this.set(t,e,a.value,null),Reflect.defineProperty(t,e,a)}};Z7.ownKeys=t=>(O("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function rd(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(m2).forEach(a=>{Object.defineProperty(e,a,{configurable:!0,enumerable:!1,get:()=>m2[a](t),set:x1})}),e}function cd(t){const{ctx:e,propsOptions:[a]}=t;a&&Object.keys(a).forEach(i=>{Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>t.props[i],set:x1})})}function nd(t){const{ctx:e,setupState:a}=t;Object.keys(ft(a)).forEach(i=>{if(!a.__isScriptSetup){if(j5(i[0])){O(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a[i],set:x1})}})}function ld(){return dd().slots}function dd(){const t=K1();return t||O("useContext() called without active instance."),t.setupContext||(t.setupContext=lr(t))}function Q0(t){return nt(t)?t.reduce((e,a)=>(e[a]=null,e),{}):t}function hd(){const t=Object.create(null);return(e,a)=>{t[a]?O(`${e} property "${a}" is already defined in ${t[a]}.`):t[a]=e}}let Ti=!0;function sd(t){const e=F5(t),a=t.proxy,i=t.ctx;Ti=!1,e.beforeCreate&&H0(e.beforeCreate,t,"bc");const{data:r,computed:c,methods:n,watch:l,provide:d,inject:h,created:s,beforeMount:p,mounted:f,beforeUpdate:v,updated:u,activated:V,deactivated:x,beforeDestroy:k,beforeUnmount:g,destroyed:q,unmounted:T,render:R,renderTracked:I,renderTriggered:F,errorCaptured:w,serverPrefetch:L,expose:et,inheritAttrs:ht,components:Z,directives:vt,filters:bt}=e,kt=hd();{const[_]=t.propsOptions;if(_)for(const lt in _)kt("Props",lt)}if(h&&od(h,i,kt),n)for(const _ in n){const lt=n[_];st(lt)?(Object.defineProperty(i,_,{value:lt.bind(a),configurable:!0,enumerable:!0,writable:!0}),kt("Methods",_)):O(`Method "${_}" has type "${typeof lt}" in the component definition. Did you reference the function correctly?`)}if(r){st(r)||O("The data option must be a function. Plain object usage is no longer supported.");const _=r.call(a,a);if(V5(_)&&O("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Xt(_))O("data() should return an object.");else{t.data=Pt(_);for(const lt in _)kt("Data",lt),j5(lt[0])||Object.defineProperty(i,lt,{configurable:!0,enumerable:!0,get:()=>_[lt],set:x1})}}if(Ti=!0,c)for(const _ in c){const lt=c[_],Tt=st(lt)?lt.bind(a,a):st(lt.get)?lt.get.bind(a,a):x1;Tt===x1&&O(`Computed property "${_}" has no getter.`);const Ft=!st(lt)&&st(lt.set)?lt.set.bind(a):()=>{O(`Write operation failed: computed property "${_}" is readonly.`)},X1=N({get:Tt,set:Ft});Object.defineProperty(i,_,{enumerable:!0,configurable:!0,get:()=>X1.value,set:n1=>X1.value=n1}),kt("Computed",_)}if(l)for(const _ in l)G7(l[_],i,a,_);if(d){const _=st(d)?d.call(a):d;Reflect.ownKeys(_).forEach(lt=>{E1(lt,_[lt])})}s&&H0(s,t,"c");function Mt(_,lt){nt(lt)?lt.forEach(Tt=>_(Tt.bind(a))):lt&&_(lt.bind(a))}if(Mt(Bl,p),Mt(Ge,f),Mt(Dl,v),Mt(q3,u),Mt(z7,V),Mt(W7,x),Mt(ed,w),Mt(td,I),Mt($l,F),Mt($a,g),Mt(t6,T),Mt(_l,L),nt(et))if(et.length){const _=t.exposed||(t.exposed={});et.forEach(lt=>{Object.defineProperty(_,lt,{get:()=>a[lt],set:Tt=>a[lt]=Tt})})}else t.exposed||(t.exposed={});R&&t.render===x1&&(t.render=R),ht!=null&&(t.inheritAttrs=ht),Z&&(t.components=Z),vt&&(t.directives=vt)}function od(t,e,a=x1){nt(t)&&(t=Si(t));for(const i in t){const r=t[i];let c;Xt(r)?"default"in r?c=H(r.from||i,r.default,!0):c=H(r.from||i):c=H(r),Ut(c)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:n=>c.value=n}):e[i]=c,a("Inject",i)}}function H0(t,e,a){M1(nt(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,a)}function G7(t,e,a,i){const r=i.includes(".")?A7(a,i):()=>a[i];if(Gt(t)){const c=e[t];st(c)?ut(r,c):O(`Invalid watch handler specified by key "${t}"`,c)}else if(st(t))ut(r,t.bind(a));else if(Xt(t))if(nt(t))t.forEach(c=>G7(c,e,a,i));else{const c=st(t.handler)?t.handler.bind(a):e[t.handler];st(c)?ut(r,c,t):O(`Invalid watch handler specified by key "${t.handler}"`,c)}else O(`Invalid watch option: "${i}"`,t)}function F5(t){const e=t.type,{mixins:a,extends:i}=e,{mixins:r,optionsCache:c,config:{optionMergeStrategies:n}}=t.appContext,l=c.get(e);let d;return l?d=l:!r.length&&!a&&!i?d=e:(d={},r.length&&r.forEach(h=>Q6(d,h,n,!0)),Q6(d,e,n)),Xt(e)&&c.set(e,d),d}function Q6(t,e,a,i=!1){const{mixins:r,extends:c}=e;c&&Q6(t,c,a,!0),r&&r.forEach(n=>Q6(t,n,a,!0));for(const n in e)if(i&&n==="expose")O('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const l=pd[n]||a&&a[n];t[n]=l?l(t[n],e[n]):e[n]}return t}const pd={data:Z0,props:G0,emits:G0,methods:qa,computed:qa,beforeCreate:v1,created:v1,beforeMount:v1,mounted:v1,beforeUpdate:v1,updated:v1,beforeDestroy:v1,beforeUnmount:v1,destroyed:v1,unmounted:v1,activated:v1,deactivated:v1,errorCaptured:v1,serverPrefetch:v1,components:qa,directives:qa,watch:vd,provide:Z0,inject:fd};function Z0(t,e){return e?t?function(){return Qt(st(t)?t.call(this,this):t,st(e)?e.call(this,this):e)}:e:t}function fd(t,e){return qa(Si(t),Si(e))}function Si(t){if(nt(t)){const e={};for(let a=0;a<t.length;a++)e[t[a]]=t[a];return e}return t}function v1(t,e){return t?[...new Set([].concat(t,e))]:e}function qa(t,e){return t?Qt(Object.create(null),t,e):e}function G0(t,e){return t?nt(t)&&nt(e)?[...new Set([...t,...e])]:Qt(Object.create(null),Q0(t),Q0(e??{})):e}function vd(t,e){if(!t)return e;if(!e)return t;const a=Qt(Object.create(null),t);for(const i in e)a[i]=v1(t[i],e[i]);return a}function P7(){return{app:null,config:{isNativeTag:$4,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ud=0;function md(t,e){return function(i,r=null){st(i)||(i=Qt({},i)),r!=null&&!Xt(r)&&(O("root props passed to app.mount() must be an object."),r=null);const c=P7();Object.defineProperty(c.config,"unwrapInjectedRef",{get(){return!0},set(){O("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const n=new Set;let l=!1;const d=c.app={_uid:ud++,_component:i,_props:r,_container:null,_context:c,_instance:null,version:P6,get config(){return c.config},set config(h){O("app.config cannot be replaced. Modify individual options instead.")},use(h,...s){return n.has(h)?O("Plugin has already been applied to target app."):h&&st(h.install)?(n.add(h),h.install(d,...s)):st(h)?(n.add(h),h(d,...s)):O('A plugin must either be a function or an object with an "install" function.'),d},mixin(h){return c.mixins.includes(h)?O("Mixin has already been applied to target app"+(h.name?`: ${h.name}`:"")):c.mixins.push(h),d},component(h,s){return Ni(h,c.config),s?(c.components[h]&&O(`Component "${h}" has already been registered in target app.`),c.components[h]=s,d):c.components[h]},directive(h,s){return O7(h),s?(c.directives[h]&&O(`Directive "${h}" has already been registered in target app.`),c.directives[h]=s,d):c.directives[h]},mount(h,s,p){if(l)O("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{h.__vue_app__&&O("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=A(i,r);return f.appContext=c,c.reload=()=>{t(se(f),h,p)},s&&e?e(f,h):t(f,h,p),l=!0,d._container=h,h.__vue_app__=d,d._instance=f.component,wl(d,P6),V3(f.component)||f.component.proxy}},unmount(){l?(t(null,d._container),d._instance=null,Ul(d),delete d._container.__vue_app__):O("Cannot unmount an app that is not mounted.")},provide(h,s){return h in c.provides&&O(`App already provides property with key "${String(h)}". It will be overwritten with the new value.`),c.provides[h]=s,d},runWithContext(h){H6=d;try{return h()}finally{H6=null}}};return d}}let H6=null;function E1(t,e){if(!t1)O("provide() can only be used inside setup().");else{let a=t1.provides;const i=t1.parent&&t1.parent.provides;i===a&&(a=t1.provides=Object.create(i)),a[t]=e}}function H(t,e,a=!1){const i=t1||e1;if(i||H6){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:H6._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return a&&st(e)?e.call(i&&i.proxy):e;O(`injection "${String(t)}" not found.`)}else O("inject() can only be used inside setup() or functional components.")}function qd(t,e,a,i=!1){const r={},c={};J6(c,b3,1),t.propsDefaults=Object.create(null),Y7(t,e,r,c);for(const n in t.propsOptions[0])n in r||(r[n]=void 0);D7(e||{},r,t),a?t.props=i?r:cl(r):t.type.props?t.props=r:t.props=c,t.attrs=c}function bd(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function Vd(t,e,a,i){const{props:r,attrs:c,vnode:{patchFlag:n}}=t,l=ft(r),[d]=t.propsOptions;let h=!1;if(!bd(t)&&(i||n>0)&&!(n&16)){if(n&8){const s=t.vnode.dynamicProps;for(let p=0;p<s.length;p++){let f=s[p];if(f3(t.emitsOptions,f))continue;const v=e[f];if(d)if(St(c,f))v!==c[f]&&(c[f]=v,h=!0);else{const u=ne(f);r[u]=Ii(d,l,u,v,t,!1)}else v!==c[f]&&(c[f]=v,h=!0)}}}else{Y7(t,e,r,c)&&(h=!0);let s;for(const p in l)(!e||!St(e,p)&&((s=Ve(p))===p||!St(e,s)))&&(d?a&&(a[p]!==void 0||a[s]!==void 0)&&(r[p]=Ii(d,l,p,void 0,t,!0)):delete r[p]);if(c!==l)for(const p in c)(!e||!St(e,p))&&(delete c[p],h=!0)}h&&le(t,"set","$attrs"),D7(e||{},r,t)}function Y7(t,e,a,i){const[r,c]=t.propsOptions;let n=!1,l;if(e)for(let d in e){if(R6(d))continue;const h=e[d];let s;r&&St(r,s=ne(d))?!c||!c.includes(s)?a[s]=h:(l||(l={}))[s]=h:f3(t.emitsOptions,d)||(!(d in i)||h!==i[d])&&(i[d]=h,n=!0)}if(c){const d=ft(a),h=l||Wt;for(let s=0;s<c.length;s++){const p=c[s];a[p]=Ii(r,d,p,h[p],t,!St(h,p))}}return n}function Ii(t,e,a,i,r,c){const n=t[a];if(n!=null){const l=St(n,"default");if(l&&i===void 0){const d=n.default;if(n.type!==Function&&!n.skipFactory&&st(d)){const{propsDefaults:h}=r;a in h?i=h[a]:(W2(r),i=h[a]=d.call(null,e),q2())}else i=d}n[0]&&(c&&!l?i=!1:n[1]&&(i===""||i===Ve(a))&&(i=!0))}return i}function B7(t,e,a=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const c=t.props,n={},l=[];let d=!1;if(!st(t)){const s=p=>{d=!0;const[f,v]=B7(p,e,!0);Qt(n,f),v&&l.push(...v)};!a&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}if(!c&&!d)return Xt(t)&&i.set(t,j2),j2;if(nt(c))for(let s=0;s<c.length;s++){Gt(c[s])||O("props must be strings when using array syntax.",c[s]);const p=ne(c[s]);P0(p)&&(n[p]=Wt)}else if(c){Xt(c)||O("invalid props options",c);for(const s in c){const p=ne(s);if(P0(p)){const f=c[s],v=n[p]=nt(f)||st(f)?{type:f}:Qt({},f);if(v){const u=B0(Boolean,v.type),V=B0(String,v.type);v[0]=u>-1,v[1]=V<0||u<V,(u>-1||St(v,"default"))&&l.push(p)}}}}const h=[n,l];return Xt(t)&&i.set(t,h),h}function P0(t){return t[0]!=="$"?!0:(O(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Ei(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Y0(t,e){return Ei(t)===Ei(e)}function B0(t,e){return nt(e)?e.findIndex(a=>Y0(a,t)):st(e)&&Y0(e,t)?0:-1}function D7(t,e,a){const i=ft(e),r=a.propsOptions[0];for(const c in r){let n=r[c];n!=null&&yd(c,i[c],n,!St(t,c)&&!St(t,Ve(c)))}}function yd(t,e,a,i){const{type:r,required:c,validator:n,skipCheck:l}=a;if(c&&i){O('Missing required prop: "'+t+'"');return}if(!(e==null&&!c)){if(r!=null&&r!==!0&&!l){let d=!1;const h=nt(r)?r:[r],s=[];for(let p=0;p<h.length&&!d;p++){const{valid:f,expectedType:v}=xd(e,h[p]);s.push(v||""),d=f}if(!d){O(gd(t,e,s));return}}n&&!n(e)&&O('Invalid prop: custom validator check failed for prop "'+t+'".')}}const kd=Ze("String,Number,Boolean,Function,Symbol,BigInt");function xd(t,e){let a;const i=Ei(e);if(kd(i)){const r=typeof t;a=r===i.toLowerCase(),!a&&r==="object"&&(a=t instanceof e)}else i==="Object"?a=Xt(t):i==="Array"?a=nt(t):i==="null"?a=t===null:a=t instanceof e;return{valid:a,expectedType:i}}function gd(t,e,a){let i=`Invalid prop: type check failed for prop "${t}". Expected ${a.map(y2).join(" | ")}`;const r=a[0],c=y5(e),n=D0(e,r),l=D0(e,c);return a.length===1&&_0(r)&&!Rd(r,c)&&(i+=` with value ${n}`),i+=`, got ${c} `,_0(c)&&(i+=`with value ${l}.`),i}function D0(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function _0(t){return["string","number","boolean"].some(a=>t.toLowerCase()===a)}function Rd(...t){return t.some(e=>e.toLowerCase()==="boolean")}const _7=t=>t[0]==="_"||t==="$stable",A5=t=>nt(t)?t.map(G1):[G1(t)],Td=(t,e,a)=>{if(e._n)return e;const i=j((...r)=>(t1&&O(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),A5(e(...r))),a);return i._c=!1,i},$7=(t,e,a)=>{const i=t._ctx;for(const r in t){if(_7(r))continue;const c=t[r];if(st(c))e[r]=Td(r,c,i);else if(c!=null){O(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const n=A5(c);e[r]=()=>n}}},tr=(t,e)=>{J5(t.vnode)||O("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=A5(e);t.slots.default=()=>a},Sd=(t,e)=>{if(t.vnode.shapeFlag&32){const a=e._;a?(t.slots=ft(e),J6(e,"_",a)):$7(e,t.slots={})}else t.slots={},e&&tr(t,e);J6(t.slots,b3,1)},Id=(t,e,a)=>{const{vnode:i,slots:r}=t;let c=!0,n=Wt;if(i.shapeFlag&32){const l=e._;l?Fe?(Qt(r,e),le(t,"set","$slots")):a&&l===1?c=!1:(Qt(r,e),!a&&l===1&&delete r._):(c=!e.$stable,$7(e,r)),n=e}else e&&(tr(t,e),n={default:1});if(c)for(const l in r)!_7(l)&&!(l in n)&&delete r[l]};function wi(t,e,a,i,r=!1){if(nt(t)){t.forEach((f,v)=>wi(f,e&&(nt(e)?e[v]:e),a,i,r));return}if(A2(i)&&!r)return;const c=i.shapeFlag&4?V3(i.component)||i.component.proxy:i.el,n=r?null:c,{i:l,r:d}=t;if(!l){O("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const h=e&&e.r,s=l.refs===Wt?l.refs={}:l.refs,p=l.setupState;if(h!=null&&h!==d&&(Gt(h)?(s[h]=null,St(p,h)&&(p[h]=null)):Ut(h)&&(h.value=null)),st(d))be(d,l,12,[n,s]);else{const f=Gt(d),v=Ut(d);if(f||v){const u=()=>{if(t.f){const V=f?St(p,d)?p[d]:s[d]:d.value;r?nt(V)&&q5(V,c):nt(V)?V.includes(c)||V.push(c):f?(s[d]=[c],St(p,d)&&(p[d]=s[d])):(d.value=[c],t.k&&(s[t.k]=d.value))}else f?(s[d]=n,St(p,d)&&(p[d]=n)):v?(d.value=n,t.k&&(s[t.k]=n)):O("Invalid template ref type:",d,`(${typeof d})`)};n?(u.id=-1,c1(u,a)):u()}else O("Invalid template ref type:",d,`(${typeof d})`)}}let ta,Xe;function pe(t,e){t.appContext.config.performance&&Z6()&&Xe.mark(`vue-${e}-${t.uid}`),Xl(t,e,Z6()?Xe.now():Date.now())}function fe(t,e){if(t.appContext.config.performance&&Z6()){const a=`vue-${e}-${t.uid}`,i=a+":end";Xe.mark(i),Xe.measure(`<${y3(t,t.type)}> ${e}`,a,i),Xe.clearMarks(a),Xe.clearMarks(i)}Jl(t,e,Z6()?Xe.now():Date.now())}function Z6(){return ta!==void 0||(typeof window<"u"&&window.performance?(ta=!0,Xe=window.performance):ta=!1),ta}function Ed(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const c1=Wl;function wd(t){return Ud(t)}function Ud(t,e){Ed();const a=j6();a.__VUE__=!0,N7(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:i,remove:r,patchProp:c,createElement:n,createText:l,createComment:d,setText:h,setElementText:s,parentNode:p,nextSibling:f,setScopeId:v=x1,insertStaticContent:u}=t,V=(m,b,S,J=null,K=null,W=null,Y=!1,z=null,Q=Fe?!1:!!b.dynamicChildren)=>{if(m===b)return;m&&!i2(m,b)&&(J=P(m),V1(m,K,W,!0),m=null),b.patchFlag===-2&&(Q=!1,b.dynamicChildren=null);const{type:M,ref:ct,shapeFlag:rt}=b;switch(M){case e6:x(m,b,S,J);break;case s1:k(m,b,S,J);break;case M2:m==null?g(b,S,J,Y):q(m,b,S,Y);break;case wt:vt(m,b,S,J,K,W,Y,z,Q);break;default:rt&1?I(m,b,S,J,K,W,Y,z,Q):rt&6?bt(m,b,S,J,K,W,Y,z,Q):rt&64||rt&128?M.process(m,b,S,J,K,W,Y,z,Q,$):O("Invalid VNode type:",M,`(${typeof M})`)}ct!=null&&K&&wi(ct,m&&m.ref,W,b||m,!b)},x=(m,b,S,J)=>{if(m==null)i(b.el=l(b.children),S,J);else{const K=b.el=m.el;b.children!==m.children&&h(K,b.children)}},k=(m,b,S,J)=>{m==null?i(b.el=d(b.children||""),S,J):b.el=m.el},g=(m,b,S,J)=>{[m.el,m.anchor]=u(m.children,b,S,J,m.el,m.anchor)},q=(m,b,S,J)=>{if(b.children!==m.children){const K=f(m.anchor);R(m),[b.el,b.anchor]=u(b.children,S,K,J)}else b.el=m.el,b.anchor=m.anchor},T=({el:m,anchor:b},S,J)=>{let K;for(;m&&m!==b;)K=f(m),i(m,S,J),m=K;i(b,S,J)},R=({el:m,anchor:b})=>{let S;for(;m&&m!==b;)S=f(m),r(m),m=S;r(b)},I=(m,b,S,J,K,W,Y,z,Q)=>{Y=Y||b.type==="svg",m==null?F(b,S,J,K,W,Y,z,Q):et(m,b,K,W,Y,z,Q)},F=(m,b,S,J,K,W,Y,z)=>{let Q,M;const{type:ct,props:rt,shapeFlag:dt,transition:pt,dirs:It}=m;if(Q=m.el=n(m.type,W,rt&&rt.is,rt),dt&8?s(Q,m.children):dt&16&&L(m.children,Q,null,J,K,W&&ct!=="foreignObject",Y,z),It&&Be(m,null,J,"created"),w(Q,m,m.scopeId,Y,J),rt){for(const zt in rt)zt!=="value"&&!R6(zt)&&c(Q,zt,null,rt[zt],W,m.children,J,K,E);"value"in rt&&c(Q,"value",null,rt.value),(M=rt.onVnodeBeforeMount)&&F1(M,J,m)}Object.defineProperty(Q,"__vnode",{value:m,enumerable:!1}),Object.defineProperty(Q,"__vueParentComponent",{value:J,enumerable:!1}),It&&Be(m,null,J,"beforeMount");const Ht=(!K||K&&!K.pendingBranch)&&pt&&!pt.persisted;Ht&&pt.beforeEnter(Q),i(Q,b,S),((M=rt&&rt.onVnodeMounted)||Ht||It)&&c1(()=>{M&&F1(M,J,m),Ht&&pt.enter(Q),It&&Be(m,null,J,"mounted")},K)},w=(m,b,S,J,K)=>{if(S&&v(m,S),J)for(let W=0;W<J.length;W++)v(m,J[W]);if(K){let W=K.subTree;if(W.patchFlag>0&&W.patchFlag&2048&&(W=j7(W.children)||W),b===W){const Y=K.vnode;w(m,Y,Y.scopeId,Y.slotScopeIds,K.parent)}}},L=(m,b,S,J,K,W,Y,z,Q=0)=>{for(let M=Q;M<m.length;M++){const ct=m[M]=z?Ne(m[M]):G1(m[M]);V(null,ct,b,S,J,K,W,Y,z)}},et=(m,b,S,J,K,W,Y)=>{const z=b.el=m.el;let{patchFlag:Q,dynamicChildren:M,dirs:ct}=b;Q|=m.patchFlag&16;const rt=m.props||Wt,dt=b.props||Wt;let pt;S&&De(S,!1),(pt=dt.onVnodeBeforeUpdate)&&F1(pt,S,b,m),ct&&Be(b,m,S,"beforeUpdate"),S&&De(S,!0),Fe&&(Q=0,Y=!1,M=null);const It=K&&b.type!=="foreignObject";if(M?(ht(m.dynamicChildren,M,z,S,J,It,W),G6(m,b)):Y||Tt(m,b,z,null,S,J,It,W,!1),Q>0){if(Q&16)Z(z,b,rt,dt,S,J,K);else if(Q&2&&rt.class!==dt.class&&c(z,"class",null,dt.class,K),Q&4&&c(z,"style",rt.style,dt.style,K),Q&8){const Ht=b.dynamicProps;for(let zt=0;zt<Ht.length;zt++){const Dt=Ht[zt],Q1=rt[Dt],I2=dt[Dt];(I2!==Q1||Dt==="value")&&c(z,Dt,Q1,I2,K,m.children,S,J,E)}}Q&1&&m.children!==b.children&&s(z,b.children)}else!Y&&M==null&&Z(z,b,rt,dt,S,J,K);((pt=dt.onVnodeUpdated)||ct)&&c1(()=>{pt&&F1(pt,S,b,m),ct&&Be(b,m,S,"updated")},J)},ht=(m,b,S,J,K,W,Y)=>{for(let z=0;z<b.length;z++){const Q=m[z],M=b[z],ct=Q.el&&(Q.type===wt||!i2(Q,M)||Q.shapeFlag&70)?p(Q.el):S;V(Q,M,ct,null,J,K,W,Y,!0)}},Z=(m,b,S,J,K,W,Y)=>{if(S!==J){if(S!==Wt)for(const z in S)!R6(z)&&!(z in J)&&c(m,z,S[z],null,Y,b.children,K,W,E);for(const z in J){if(R6(z))continue;const Q=J[z],M=S[z];Q!==M&&z!=="value"&&c(m,z,M,Q,Y,b.children,K,W,E)}"value"in J&&c(m,"value",S.value,J.value)}},vt=(m,b,S,J,K,W,Y,z,Q)=>{const M=b.el=m?m.el:l(""),ct=b.anchor=m?m.anchor:l("");let{patchFlag:rt,dynamicChildren:dt,slotScopeIds:pt}=b;(Fe||rt&2048)&&(rt=0,Q=!1,dt=null),pt&&(z=z?z.concat(pt):pt),m==null?(i(M,S,J),i(ct,S,J),L(b.children,S,ct,K,W,Y,z,Q)):rt>0&&rt&64&&dt&&m.dynamicChildren?(ht(m.dynamicChildren,dt,S,K,W,Y,z),G6(m,b)):Tt(m,b,S,ct,K,W,Y,z,Q)},bt=(m,b,S,J,K,W,Y,z,Q)=>{b.slotScopeIds=z,m==null?b.shapeFlag&512?K.ctx.activate(b,S,J,Y,Q):kt(b,S,J,K,W,Y,Q):Mt(m,b,Q)},kt=(m,b,S,J,K,W,Y)=>{const z=m.component=zd(m,J,K);if(z.type.__hmrId&&Tl(z),T6(m),pe(z,"mount"),J5(m)&&(z.ctx.renderer=$),pe(z,"init"),Cd(z),fe(z,"init"),z.asyncDep){if(K&&K.registerDep(z,_),!m.el){const Q=z.subTree=A(s1);k(null,Q,b,S)}return}_(z,m,b,S,K,W,Y),S6(),fe(z,"mount")},Mt=(m,b,S)=>{const J=b.component=m.component;if(Ll(m,b,S))if(J.asyncDep&&!J.asyncResolved){T6(b),lt(J,b,S),S6();return}else J.next=b,gl(J.update),J.update();else b.el=m.el,J.vnode=b},_=(m,b,S,J,K,W,Y)=>{const z=()=>{if(m.isMounted){let{next:ct,bu:rt,u:dt,parent:pt,vnode:It}=m,Ht=ct,zt;T6(ct||m.vnode),De(m,!1),ct?(ct.el=It.el,lt(m,ct,Y)):ct=It,rt&&a2(rt),(zt=ct.props&&ct.props.onVnodeBeforeUpdate)&&F1(zt,pt,ct,It),De(m,!0),pe(m,"render");const Dt=A3(m);fe(m,"render");const Q1=m.subTree;m.subTree=Dt,pe(m,"patch"),V(Q1,Dt,p(Q1.el),P(Q1),m,K,W),fe(m,"patch"),ct.el=Dt.el,Ht===null&&zl(m,Dt.el),dt&&c1(dt,K),(zt=ct.props&&ct.props.onVnodeUpdated)&&c1(()=>F1(zt,pt,ct,It),K),K7(m),S6()}else{let ct;const{el:rt,props:dt}=b,{bm:pt,m:It,parent:Ht}=m,zt=A2(b);if(De(m,!1),pt&&a2(pt),!zt&&(ct=dt&&dt.onVnodeBeforeMount)&&F1(ct,Ht,b),De(m,!0),rt&&Lt){const Dt=()=>{pe(m,"render"),m.subTree=A3(m),fe(m,"render"),pe(m,"hydrate"),Lt(rt,m.subTree,m,K,null),fe(m,"hydrate")};zt?b.type.__asyncLoader().then(()=>!m.isUnmounted&&Dt()):Dt()}else{pe(m,"render");const Dt=m.subTree=A3(m);fe(m,"render"),pe(m,"patch"),V(null,Dt,S,J,m,K,W),fe(m,"patch"),b.el=Dt.el}if(It&&c1(It,K),!zt&&(ct=dt&&dt.onVnodeMounted)){const Dt=b;c1(()=>F1(ct,Ht,Dt),K)}(b.shapeFlag&256||Ht&&A2(Ht.vnode)&&Ht.vnode.shapeFlag&256)&&m.a&&c1(m.a,K),m.isMounted=!0,yi(m),b=S=J=null}},Q=m.effect=new R5(z,()=>p3(M),m.scope),M=m.update=()=>Q.run();M.id=m.uid,De(m,!0),Q.onTrack=m.rtc?ct=>a2(m.rtc,ct):void 0,Q.onTrigger=m.rtg?ct=>a2(m.rtg,ct):void 0,M.ownerInstance=m,M()},lt=(m,b,S)=>{b.component=m;const J=m.vnode.props;m.vnode=b,m.next=null,Vd(m,b.props,J,S),Id(m,b.children,S),x2(),M0(),g2()},Tt=(m,b,S,J,K,W,Y,z,Q=!1)=>{const M=m&&m.children,ct=m?m.shapeFlag:0,rt=b.children,{patchFlag:dt,shapeFlag:pt}=b;if(dt>0){if(dt&128){X1(M,rt,S,J,K,W,Y,z,Q);return}else if(dt&256){Ft(M,rt,S,J,K,W,Y,z,Q);return}}pt&8?(ct&16&&E(M,K,W),rt!==M&&s(S,rt)):ct&16?pt&16?X1(M,rt,S,J,K,W,Y,z,Q):E(M,K,W,!0):(ct&8&&s(S,""),pt&16&&L(rt,S,J,K,W,Y,z,Q))},Ft=(m,b,S,J,K,W,Y,z,Q)=>{m=m||j2,b=b||j2;const M=m.length,ct=b.length,rt=Math.min(M,ct);let dt;for(dt=0;dt<rt;dt++){const pt=b[dt]=Q?Ne(b[dt]):G1(b[dt]);V(m[dt],pt,S,null,K,W,Y,z,Q)}M>ct?E(m,K,W,!0,!1,rt):L(b,S,J,K,W,Y,z,Q,rt)},X1=(m,b,S,J,K,W,Y,z,Q)=>{let M=0;const ct=b.length;let rt=m.length-1,dt=ct-1;for(;M<=rt&&M<=dt;){const pt=m[M],It=b[M]=Q?Ne(b[M]):G1(b[M]);if(i2(pt,It))V(pt,It,S,null,K,W,Y,z,Q);else break;M++}for(;M<=rt&&M<=dt;){const pt=m[rt],It=b[dt]=Q?Ne(b[dt]):G1(b[dt]);if(i2(pt,It))V(pt,It,S,null,K,W,Y,z,Q);else break;rt--,dt--}if(M>rt){if(M<=dt){const pt=dt+1,It=pt<ct?b[pt].el:J;for(;M<=dt;)V(null,b[M]=Q?Ne(b[M]):G1(b[M]),S,It,K,W,Y,z,Q),M++}}else if(M>dt)for(;M<=rt;)V1(m[M],K,W,!0),M++;else{const pt=M,It=M,Ht=new Map;for(M=It;M<=dt;M++){const f1=b[M]=Q?Ne(b[M]):G1(b[M]);f1.key!=null&&(Ht.has(f1.key)&&O("Duplicate keys found during update:",JSON.stringify(f1.key),"Make sure keys are unique."),Ht.set(f1.key,M))}let zt,Dt=0;const Q1=dt-It+1;let I2=!1,E0=0;const $2=new Array(Q1);for(M=0;M<Q1;M++)$2[M]=0;for(M=pt;M<=rt;M++){const f1=m[M];if(Dt>=Q1){V1(f1,K,W,!0);continue}let _1;if(f1.key!=null)_1=Ht.get(f1.key);else for(zt=It;zt<=dt;zt++)if($2[zt-It]===0&&i2(f1,b[zt])){_1=zt;break}_1===void 0?V1(f1,K,W,!0):($2[_1-It]=M+1,_1>=E0?E0=_1:I2=!0,V(f1,b[_1],S,null,K,W,Y,z,Q),Dt++)}const w0=I2?Nd($2):j2;for(zt=w0.length-1,M=Q1-1;M>=0;M--){const f1=It+M,_1=b[f1],U0=f1+1<ct?b[f1+1].el:J;$2[M]===0?V(null,_1,S,U0,K,W,Y,z,Q):I2&&(zt<0||M!==w0[zt]?n1(_1,S,U0,2):zt--)}}},n1=(m,b,S,J,K=null)=>{const{el:W,type:Y,transition:z,children:Q,shapeFlag:M}=m;if(M&6){n1(m.component.subTree,b,S,J);return}if(M&128){m.suspense.move(b,S,J);return}if(M&64){Y.move(m,b,S,$);return}if(Y===wt){i(W,b,S);for(let rt=0;rt<Q.length;rt++)n1(Q[rt],b,S,J);i(m.anchor,b,S);return}if(Y===M2){T(m,b,S);return}if(J!==2&&M&1&&z)if(J===0)z.beforeEnter(W),i(W,b,S),c1(()=>z.enter(W),K);else{const{leave:rt,delayLeave:dt,afterLeave:pt}=z,It=()=>i(W,b,S),Ht=()=>{rt(W,()=>{It(),pt&&pt()})};dt?dt(W,It,Ht):Ht()}else i(W,b,S)},V1=(m,b,S,J=!1,K=!1)=>{const{type:W,props:Y,ref:z,children:Q,dynamicChildren:M,shapeFlag:ct,patchFlag:rt,dirs:dt}=m;if(z!=null&&wi(z,null,S,m,!0),ct&256){b.ctx.deactivate(m);return}const pt=ct&1&&dt,It=!A2(m);let Ht;if(It&&(Ht=Y&&Y.onVnodeBeforeUnmount)&&F1(Ht,b,m),ct&6)J1(m.component,S,J);else{if(ct&128){m.suspense.unmount(S,J);return}pt&&Be(m,null,b,"beforeUnmount"),ct&64?m.type.remove(m,b,S,K,$,J):M&&(W!==wt||rt>0&&rt&64)?E(M,b,S,!1,!0):(W===wt&&rt&384||!K&&ct&16)&&E(Q,b,S),J&&D1(m)}(It&&(Ht=Y&&Y.onVnodeUnmounted)||pt)&&c1(()=>{Ht&&F1(Ht,b,m),pt&&Be(m,null,b,"unmounted")},S)},D1=m=>{const{type:b,el:S,anchor:J,transition:K}=m;if(b===wt){m.patchFlag>0&&m.patchFlag&2048&&K&&!K.persisted?m.children.forEach(Y=>{Y.type===s1?r(Y.el):D1(Y)}):Ye(S,J);return}if(b===M2){R(m);return}const W=()=>{r(S),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(m.shapeFlag&1&&K&&!K.persisted){const{leave:Y,delayLeave:z}=K,Q=()=>Y(S,W);z?z(m.el,W,Q):Q()}else W()},Ye=(m,b)=>{let S;for(;m!==b;)S=f(m),r(m),m=S;r(b)},J1=(m,b,S)=>{m.type.__hmrId&&Sl(m);const{bum:J,scope:K,update:W,subTree:Y,um:z}=m;J&&a2(J),K.stop(),W&&(W.active=!1,V1(Y,m,b,S)),z&&c1(z,b),c1(()=>{m.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),Kl(m)},E=(m,b,S,J=!1,K=!1,W=0)=>{for(let Y=W;Y<m.length;Y++)V1(m[Y],b,S,J,K)},P=m=>m.shapeFlag&6?P(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),B=(m,b,S)=>{m==null?b._vnode&&V1(b._vnode,null,null,!0):V(b._vnode||null,m,b,null,null,null,S),M0(),E7(),b._vnode=m},$={p:V,um:V1,m:n1,r:D1,mt:kt,mc:L,pc:Tt,pbc:ht,n:P,o:t};let gt,Lt;return e&&([gt,Lt]=e($)),{render:B,hydrate:gt,createApp:md(B,gt)}}function De({effect:t,update:e},a){t.allowRecurse=e.allowRecurse=a}function G6(t,e,a=!1){const i=t.children,r=e.children;if(nt(i)&&nt(r))for(let c=0;c<i.length;c++){const n=i[c];let l=r[c];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[c]=Ne(r[c]),l.el=n.el),a||G6(n,l)),l.type===e6&&(l.el=n.el),l.type===s1&&!l.el&&(l.el=n.el)}}function Nd(t){const e=t.slice(),a=[0];let i,r,c,n,l;const d=t.length;for(i=0;i<d;i++){const h=t[i];if(h!==0){if(r=a[a.length-1],t[r]<h){e[i]=r,a.push(i);continue}for(c=0,n=a.length-1;c<n;)l=c+n>>1,t[a[l]]<h?c=l+1:n=l;h<t[a[c]]&&(c>0&&(e[i]=a[c-1]),a[c]=i)}}for(c=a.length,n=a[c-1];c-- >0;)a[c]=n,n=e[n];return a}const Kd=t=>t.__isTeleport,O2=t=>t&&(t.disabled||t.disabled===""),$0=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ui=(t,e)=>{const a=t&&t.to;if(Gt(a))if(e){const i=e(a);return i||O(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),i}else return O("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!O2(t)&&O(`Invalid Teleport target: ${a}`),a},Xd={__isTeleport:!0,process(t,e,a,i,r,c,n,l,d,h){const{mc:s,pc:p,pbc:f,o:{insert:v,querySelector:u,createText:V,createComment:x}}=h,k=O2(e.props);let{shapeFlag:g,children:q,dynamicChildren:T}=e;if(Fe&&(d=!1,T=null),t==null){const R=e.el=x("teleport start"),I=e.anchor=x("teleport end");v(R,a,i),v(I,a,i);const F=e.target=Ui(e.props,u),w=e.targetAnchor=V("");F?(v(w,F),n=n||$0(F)):k||O("Invalid Teleport target on mount:",F,`(${typeof F})`);const L=(et,ht)=>{g&16&&s(q,et,ht,r,c,n,l,d)};k?L(a,I):F&&L(F,w)}else{e.el=t.el;const R=e.anchor=t.anchor,I=e.target=t.target,F=e.targetAnchor=t.targetAnchor,w=O2(t.props),L=w?a:I,et=w?R:F;if(n=n||$0(I),T?(f(t.dynamicChildren,T,L,r,c,n,l),G6(t,e,!0)):d||p(t,e,L,et,r,c,n,l,!1),k)w||p6(e,a,R,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ht=e.target=Ui(e.props,u);ht?p6(e,ht,null,h,0):O("Invalid Teleport target on update:",I,`(${typeof I})`)}else w&&p6(e,I,F,h,1)}er(e)},remove(t,e,a,i,{um:r,o:{remove:c}},n){const{shapeFlag:l,children:d,anchor:h,targetAnchor:s,target:p,props:f}=t;if(p&&c(s),(n||!O2(f))&&(c(h),l&16))for(let v=0;v<d.length;v++){const u=d[v];r(u,e,a,!0,!!u.dynamicChildren)}},move:p6,hydrate:Jd};function p6(t,e,a,{o:{insert:i},m:r},c=2){c===0&&i(t.targetAnchor,e,a);const{el:n,anchor:l,shapeFlag:d,children:h,props:s}=t,p=c===2;if(p&&i(n,e,a),(!p||O2(s))&&d&16)for(let f=0;f<h.length;f++)r(h[f],e,a,2);p&&i(l,e,a)}function Jd(t,e,a,i,r,c,{o:{nextSibling:n,parentNode:l,querySelector:d}},h){const s=e.target=Ui(e.props,d);if(s){const p=s._lpa||s.firstChild;if(e.shapeFlag&16)if(O2(e.props))e.anchor=h(n(t),e,l(t),a,i,r,c),e.targetAnchor=p;else{e.anchor=n(t);let f=p;for(;f;)if(f=n(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,s._lpa=e.targetAnchor&&n(e.targetAnchor);break}h(p,e,s,a,i,r,c)}er(e)}return e.anchor&&n(e.anchor)}const jd=Xd;function er(t){const e=t.ctx;if(e&&e.ut){let a=t.children[0].el;for(;a!==t.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",e.uid),a=a.nextSibling;e.ut()}}const wt=Symbol.for("v-fgt"),e6=Symbol.for("v-txt"),s1=Symbol.for("v-cmt"),M2=Symbol.for("v-stc"),ka=[];let P1=null;function y(t=!1){ka.push(P1=t?null:[])}function Fd(){ka.pop(),P1=ka[ka.length-1]||null}let Fa=1;function t8(t){Fa+=t}function ar(t){return t.dynamicChildren=Fa>0?P1||j2:null,Fd(),Fa>0&&P1&&P1.push(t),t}function X(t,e,a,i,r,c){return ar(o(t,e,a,i,r,c,!0))}function C(t,e,a,i,r){return ar(A(t,e,a,i,r,!0))}function he(t){return t?t.__v_isVNode===!0:!1}function i2(t,e){return e.shapeFlag&6&&X2.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const Ad=(...t)=>Od(...t),b3="__vInternal",ir=({key:t})=>t??null,I6=({ref:t,ref_key:e,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?Gt(t)||Ut(t)||st(t)?{i:e1,r:t,k:e,f:!!a}:t:null);function o(t,e=null,a=null,i=0,r=null,c=t===wt?0:1,n=!1,l=!1){const d={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ir(e),ref:e&&I6(e),scopeId:v3,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:e1};return l?(O5(d,a),c&128&&t.normalize(d)):a&&(d.shapeFlag|=Gt(a)?8:16),d.key!==d.key&&O("VNode created with invalid key (NaN). VNode type:",d.type),Fa>0&&!n&&P1&&(d.patchFlag>0||c&6)&&d.patchFlag!==32&&P1.push(d),d}const A=Ad;function Od(t,e=null,a=null,i=0,r=null,c=!1){if((!t||t===id)&&(t||O(`Invalid vnode type when creating vnode: ${t}.`),t=s1),he(t)){const l=se(t,e,!0);return a&&O5(l,a),Fa>0&&!c&&P1&&(l.shapeFlag&6?P1[P1.indexOf(t)]=l:P1.push(l)),l.patchFlag|=-2,l}if(dr(t)&&(t=t.__vccOpts),e){e=qt(e);let{class:l,style:d}=e;l&&!Gt(l)&&(e.class=Ct(l)),Xt(d)&&(M6(d)&&!nt(d)&&(d=Qt({},d)),e.style=Yt(d))}const n=Gt(t)?1:F7(t)?128:Kd(t)?64:Xt(t)?4:st(t)?2:0;return n&4&&M6(t)&&(t=ft(t),O("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),o(t,e,a,i,r,n,c,!0)}function qt(t){return t?M6(t)||b3 in t?Qt({},t):t:null}function se(t,e,a=!1){const{props:i,ref:r,patchFlag:c,children:n}=t,l=e?Aa(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ir(l),ref:e&&e.ref?a&&r?nt(r)?r.concat(I6(e)):[r,I6(e)]:I6(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c===-1&&nt(n)?n.map(rr):n,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?c===-1?16:c|16:c,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&se(t.ssContent),ssFallback:t.ssFallback&&se(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rr(t){const e=se(t);return nt(t.children)&&(e.children=t.children.map(rr)),e}function it(t=" ",e=0){return A(e6,null,t,e)}function Zt(t,e){const a=A(M2,null,t);return a.staticCount=e,a}function xt(t="",e=!1){return e?(y(),C(s1,null,t)):A(s1,null,t)}function G1(t){return t==null||typeof t=="boolean"?A(s1):nt(t)?A(wt,null,t.slice()):typeof t=="object"?Ne(t):A(e6,null,String(t))}function Ne(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:se(t)}function O5(t,e){let a=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(nt(e))a=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),O5(t,r()),r._c&&(r._d=!0));return}else{a=32;const r=e._;!r&&!(b3 in e)?e._ctx=e1:r===3&&e1&&(e1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else st(e)?(e={default:e,_ctx:e1},a=32):(e=String(e),i&64?(a=16,e=[it(e)]):a=8);t.children=e,t.shapeFlag|=a}function Aa(...t){const e={};for(let a=0;a<t.length;a++){const i=t[a];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ct([e.class,i.class]));else if(r==="style")e.style=Yt([e.style,i.style]);else if(Ba(r)){const c=e[r],n=i[r];n&&c!==n&&!(nt(c)&&c.includes(n))&&(e[r]=c?[].concat(c,n):n)}else r!==""&&(e[r]=i[r])}return e}function F1(t,e,a,i=null){M1(t,e,7,[a,i])}const Md=P7();let Ld=0;function zd(t,e,a){const i=t.type,r=(e?e.appContext:t.appContext)||Md,c={uid:Ld++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new n7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B7(i,r),emitsOptions:J7(i,r),emit:null,emitted:null,propsDefaults:Wt,inheritAttrs:i.inheritAttrs,ctx:Wt,data:Wt,props:Wt,attrs:Wt,slots:Wt,refs:Wt,setupState:Wt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx=rd(c),c.root=e?e.root:c,c.emit=Fl.bind(null,c),t.ce&&t.ce(c),c}let t1=null;const K1=()=>t1||e1;let M5,E2,e8="__VUE_INSTANCE_SETTERS__";(E2=j6()[e8])||(E2=j6()[e8]=[]),E2.push(t=>t1=t),M5=t=>{E2.length>1?E2.forEach(e=>e(t)):E2[0](t)};const W2=t=>{M5(t),t.scope.on()},q2=()=>{t1&&t1.scope.off(),M5(null)},Wd=Ze("slot,component");function Ni(t,e){const a=e.isNativeTag||$4;(Wd(t)||a(t))&&O("Do not use built-in or reserved HTML elements as component id: "+t)}function cr(t){return t.vnode.shapeFlag&4}let Oa=!1;function Cd(t,e=!1){Oa=e;const{props:a,children:i}=t.vnode,r=cr(t);qd(t,a,r,e),Sd(t,i);const c=r?Qd(t,e):void 0;return Oa=!1,c}function Qd(t,e){var a;const i=t.type;{if(i.name&&Ni(i.name,t.appContext.config),i.components){const c=Object.keys(i.components);for(let n=0;n<c.length;n++)Ni(c[n],t.appContext.config)}if(i.directives){const c=Object.keys(i.directives);for(let n=0;n<c.length;n++)O7(c[n])}i.compilerOptions&&Hd()&&O('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=s3(new Proxy(t.ctx,Z7)),cd(t);const{setup:r}=i;if(r){const c=t.setupContext=r.length>1?lr(t):null;W2(t),x2();const n=be(r,t,0,[va(t.props),c]);if(g2(),q2(),V5(n)){if(n.then(q2,q2),e)return n.then(l=>{a8(t,l,e)}).catch(l=>{o3(l,t,0)});if(t.asyncDep=n,!t.suspense){const l=(a=i.name)!=null?a:"Anonymous";O(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else a8(t,n,e)}else nr(t,e)}function a8(t,e,a){st(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xt(e)?(he(e)&&O("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=x7(e),nd(t)):e!==void 0&&O(`setup() should return an object. Received: ${e===null?"null":typeof e}`),nr(t,a)}let Ki;const Hd=()=>!Ki;function nr(t,e,a){const i=t.type;if(!t.render){if(!e&&Ki&&!i.render){const r=i.template||F5(t).template;if(r){pe(t,"compile");const{isCustomElement:c,compilerOptions:n}=t.appContext.config,{delimiters:l,compilerOptions:d}=i,h=Qt(Qt({isCustomElement:c,delimiters:l},n),d);i.render=Ki(r,h),fe(t,"compile")}}t.render=i.render||x1}W2(t),x2(),sd(t),g2(),q2(),!i.render&&t.render===x1&&!e&&(i.template?O('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):O("Component is missing template or render function."))}function Zd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,a){return z6(),p1(t,"get","$attrs"),e[a]},set(){return O("setupContext.attrs is readonly."),!1},deleteProperty(){return O("setupContext.attrs is readonly."),!1}}))}function Gd(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,a){return p1(t,"get","$slots"),e[a]}}))}function lr(t){return Object.freeze({get attrs(){return Zd(t)},get slots(){return Gd(t)},get emit(){return(a,...i)=>t.emit(a,...i)},expose:a=>{if(t.exposed&&O("expose() should be called only once per setup()."),a!=null){let i=typeof a;i==="object"&&(nt(a)?i="array":Ut(a)&&(i="ref")),i!=="object"&&O(`expose() should be passed a plain object, received ${i}.`)}t.exposed=a||{}}})}function V3(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(x7(s3(t.exposed)),{get(e,a){if(a in e)return e[a];if(a in m2)return m2[a](t)},has(e,a){return a in e||a in m2}}))}const Pd=/(?:^|[-_])(\w)/g,Yd=t=>t.replace(Pd,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ma(t,e=!0){return st(t)?t.displayName||t.name:t.name||e&&t.__name}function y3(t,e,a=!1){let i=Ma(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&t&&t.parent){const r=c=>{for(const n in c)if(c[n]===e)return n};i=r(t.components||t.parent.type.components)||r(t.appContext.components)}return i?Yd(i):a?"App":"Anonymous"}function dr(t){return st(t)&&"__vccOpts"in t}const N=(t,e)=>vl(t,e,Oa);function i1(t,e,a){const i=arguments.length;return i===2?Xt(e)&&!nt(e)?he(e)?A(t,null,[e]):A(t,e):A(t,null,e):(i>3?a=Array.prototype.slice.call(arguments,2):i===3&&he(a)&&(a=[a]),A(t,e,a))}const Bd=Symbol.for("v-scx"),Dd=()=>{{const t=H(Bd);return t||O("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function z3(t){return!!(t&&t.__v_isShallow)}function _d(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},a={style:"color:#b62e24"},i={style:"color:#9d288c"},r={header(p){return Xt(p)?p.__isVue?["div",t,"VueInstance"]:Ut(p)?["div",{},["span",t,s(p)],"<",l(p.value),">"]:v2(p)?["div",{},["span",t,z3(p)?"ShallowReactive":"Reactive"],"<",l(p),`>${Qe(p)?" (readonly)":""}`]:Qe(p)?["div",{},["span",t,z3(p)?"ShallowReadonly":"Readonly"],"<",l(p),">"]:null:null},hasBody(p){return p&&p.__isVue},body(p){if(p&&p.__isVue)return["div",{},...c(p.$)]}};function c(p){const f=[];p.type.props&&p.props&&f.push(n("props",ft(p.props))),p.setupState!==Wt&&f.push(n("setup",p.setupState)),p.data!==Wt&&f.push(n("data",ft(p.data)));const v=d(p,"computed");v&&f.push(n("computed",v));const u=d(p,"inject");return u&&f.push(n("injected",u)),f.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:p}]]),f}function n(p,f){return f=Qt({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},p],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(v=>["div",{},["span",i,v+": "],l(f[v],!1)])]]:["span",{}]}function l(p,f=!0){return typeof p=="number"?["span",e,p]:typeof p=="string"?["span",a,JSON.stringify(p)]:typeof p=="boolean"?["span",i,p]:Xt(p)?["object",{object:f?ft(p):p}]:["span",a,String(p)]}function d(p,f){const v=p.type;if(st(v))return;const u={};for(const V in p.ctx)h(v,V,f)&&(u[V]=p.ctx[V]);return u}function h(p,f,v){const u=p[v];if(nt(u)&&u.includes(f)||Xt(u)&&f in u||p.extends&&h(p.extends,f,v)||p.mixins&&p.mixins.some(V=>h(V,f,v)))return!0}function s(p){return z3(p)?"ShallowRef":p.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const P6="3.3.4",$d="http://www.w3.org/2000/svg",r2=typeof document<"u"?document:null,i8=r2&&r2.createElement("template"),th={insert:(t,e,a)=>{e.insertBefore(t,a||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,a,i)=>{const r=e?r2.createElementNS($d,t):r2.createElement(t,a?{is:a}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>r2.createTextNode(t),createComment:t=>r2.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>r2.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,a,i,r,c){const n=a?a.previousSibling:e.lastChild;if(r&&(r===c||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),a),!(r===c||!(r=r.nextSibling)););else{i8.innerHTML=i?`<svg>${t}</svg>`:t;const l=i8.content;if(i){const d=l.firstChild;for(;d.firstChild;)l.appendChild(d.firstChild);l.removeChild(d)}e.insertBefore(l,a)}return[n?n.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}};function eh(t,e,a){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):a?t.setAttribute("class",e):t.className=e}function ah(t,e,a){const i=t.style,r=Gt(a);if(a&&!r){if(e&&!Gt(e))for(const c in e)a[c]==null&&Xi(i,c,"");for(const c in a)Xi(i,c,a[c])}else{const c=i.display;r?e!==a&&(i.cssText=a):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=c)}}const ih=/[^\\];\s*$/,r8=/\s*!important$/;function Xi(t,e,a){if(nt(a))a.forEach(i=>Xi(t,e,i));else if(a==null&&(a=""),ih.test(a)&&O(`Unexpected semicolon at the end of '${e}' style value: '${a}'`),e.startsWith("--"))t.setProperty(e,a);else{const i=rh(t,e);r8.test(a)?t.setProperty(Ve(i),a.replace(r8,""),"important"):t[i]=a}}const c8=["Webkit","Moz","ms"],W3={};function rh(t,e){const a=W3[e];if(a)return a;let i=ne(e);if(i!=="filter"&&i in t)return W3[e]=i;i=y2(i);for(let r=0;r<c8.length;r++){const c=c8[r]+i;if(c in t)return W3[e]=c}return e}const n8="http://www.w3.org/1999/xlink";function ch(t,e,a,i,r){if(i&&e.startsWith("xlink:"))a==null?t.removeAttributeNS(n8,e.slice(6,e.length)):t.setAttributeNS(n8,e,a);else{const c=E9(e);a==null||c&&!r7(a)?t.removeAttribute(e):t.setAttribute(e,c?"":a)}}function nh(t,e,a,i,r,c,n){if(e==="innerHTML"||e==="textContent"){i&&n(i,r,c),t[e]=a??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=a;const h=l==="OPTION"?t.getAttribute("value"):t.value,s=a??"";h!==s&&(t.value=s),a==null&&t.removeAttribute(e);return}let d=!1;if(a===""||a==null){const h=typeof t[e];h==="boolean"?a=r7(a):a==null&&h==="string"?(a="",d=!0):h==="number"&&(a=0,d=!0)}try{t[e]=a}catch(h){d||O(`Failed setting prop "${e}" on <${l.toLowerCase()}>: value ${a} is invalid.`,h)}d&&t.removeAttribute(e)}function lh(t,e,a,i){t.addEventListener(e,a,i)}function dh(t,e,a,i){t.removeEventListener(e,a,i)}function hh(t,e,a,i,r=null){const c=t._vei||(t._vei={}),n=c[e];if(i&&n)n.value=i;else{const[l,d]=sh(e);if(i){const h=c[e]=fh(i,r);lh(t,l,h,d)}else n&&(dh(t,l,n,d),c[e]=void 0)}}const l8=/(?:Once|Passive|Capture)$/;function sh(t){let e;if(l8.test(t)){e={};let i;for(;i=t.match(l8);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ve(t.slice(2)),e]}let C3=0;const oh=Promise.resolve(),ph=()=>C3||(oh.then(()=>C3=0),C3=Date.now());function fh(t,e){const a=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=a.attached)return;M1(vh(i,a.value),e,5,[i])};return a.value=t,a.attached=ph(),a}function vh(t,e){if(nt(e)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const d8=/^on[a-z]/,uh=(t,e,a,i,r=!1,c,n,l,d)=>{e==="class"?eh(t,i,r):e==="style"?ah(t,a,i):Ba(e)?X6(e)||hh(t,e,a,i,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mh(t,e,i,r))?nh(t,e,i,c,n,l,d):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ch(t,e,i,r))};function mh(t,e,a,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&d8.test(e)&&st(a)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||d8.test(e)&&Gt(a)?!1:e in t}function qh(t){const e=K1();if(!e){O("useCssVars is called without current active component instance.");return}const a=e.ut=(r=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(c=>ji(c,r))},i=()=>{const r=t(e.proxy);Ji(e.subTree,r),a(r)};Cl(i),Ge(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),t6(()=>r.disconnect())})}function Ji(t,e){if(t.shapeFlag&128){const a=t.suspense;t=a.activeBranch,a.pendingBranch&&!a.isHydrating&&a.effects.push(()=>{Ji(a.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ji(t.el,e);else if(t.type===wt)t.children.forEach(a=>Ji(a,e));else if(t.type===M2){let{el:a,anchor:i}=t;for(;a&&(ji(a,e),a!==i);)a=a.nextSibling}}function ji(t,e){if(t.nodeType===1){const a=t.style;for(const i in e)a.setProperty(`--${i}`,e[i])}}const Ie="transition",ea="animation",hr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bh=Qt({},Zl,hr),_e=(t,e=[])=>{nt(t)?t.forEach(a=>a(...e)):t&&t(...e)},h8=t=>t?nt(t)?t.some(e=>e.length>1):t.length>1:!1;function Vh(t){const e={};for(const Z in t)Z in hr||(e[Z]=t[Z]);if(t.css===!1)return e;const{name:a="v",type:i,duration:r,enterFromClass:c=`${a}-enter-from`,enterActiveClass:n=`${a}-enter-active`,enterToClass:l=`${a}-enter-to`,appearFromClass:d=c,appearActiveClass:h=n,appearToClass:s=l,leaveFromClass:p=`${a}-leave-from`,leaveActiveClass:f=`${a}-leave-active`,leaveToClass:v=`${a}-leave-to`}=t,u=yh(r),V=u&&u[0],x=u&&u[1],{onBeforeEnter:k,onEnter:g,onEnterCancelled:q,onLeave:T,onLeaveCancelled:R,onBeforeAppear:I=k,onAppear:F=g,onAppearCancelled:w=q}=e,L=(Z,vt,bt)=>{we(Z,vt?s:l),we(Z,vt?h:n),bt&&bt()},et=(Z,vt)=>{Z._isLeaving=!1,we(Z,p),we(Z,v),we(Z,f),vt&&vt()},ht=Z=>(vt,bt)=>{const kt=Z?F:g,Mt=()=>L(vt,Z,bt);_e(kt,[vt,Mt]),s8(()=>{we(vt,Z?d:c),ve(vt,Z?s:l),h8(kt)||o8(vt,i,V,Mt)})};return Qt(e,{onBeforeEnter(Z){_e(k,[Z]),ve(Z,c),ve(Z,n)},onBeforeAppear(Z){_e(I,[Z]),ve(Z,d),ve(Z,h)},onEnter:ht(!1),onAppear:ht(!0),onLeave(Z,vt){Z._isLeaving=!0;const bt=()=>et(Z,vt);ve(Z,p),or(),ve(Z,f),s8(()=>{Z._isLeaving&&(we(Z,p),ve(Z,v),h8(T)||o8(Z,i,x,bt))}),_e(T,[Z,bt])},onEnterCancelled(Z){L(Z,!1),_e(q,[Z])},onAppearCancelled(Z){L(Z,!0),_e(w,[Z])},onLeaveCancelled(Z){et(Z),_e(R,[Z])}})}function yh(t){if(t==null)return null;if(Xt(t))return[Q3(t.enter),Q3(t.leave)];{const e=Q3(t);return[e,e]}}function Q3(t){const e=V9(t);return Vl(e,"<transition> explicit duration"),e}function ve(t,e){e.split(/\s+/).forEach(a=>a&&t.classList.add(a)),(t._vtc||(t._vtc=new Set)).add(e)}function we(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:a}=t;a&&(a.delete(e),a.size||(t._vtc=void 0))}function s8(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let kh=0;function o8(t,e,a,i){const r=t._endId=++kh,c=()=>{r===t._endId&&i()};if(a)return setTimeout(c,a);const{type:n,timeout:l,propCount:d}=sr(t,e);if(!n)return i();const h=n+"end";let s=0;const p=()=>{t.removeEventListener(h,f),c()},f=v=>{v.target===t&&++s>=d&&p()};setTimeout(()=>{s<d&&p()},l+1),t.addEventListener(h,f)}function sr(t,e){const a=window.getComputedStyle(t),i=u=>(a[u]||"").split(", "),r=i(`${Ie}Delay`),c=i(`${Ie}Duration`),n=p8(r,c),l=i(`${ea}Delay`),d=i(`${ea}Duration`),h=p8(l,d);let s=null,p=0,f=0;e===Ie?n>0&&(s=Ie,p=n,f=c.length):e===ea?h>0&&(s=ea,p=h,f=d.length):(p=Math.max(n,h),s=p>0?n>h?Ie:ea:null,f=s?s===Ie?c.length:d.length:0);const v=s===Ie&&/\b(transform|all)(,|$)/.test(i(`${Ie}Property`).toString());return{type:s,timeout:p,propCount:f,hasTransform:v}}function p8(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((a,i)=>f8(a)+f8(t[i])))}function f8(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function or(){return document.body.offsetHeight}const pr=new WeakMap,fr=new WeakMap,vr={name:"TransitionGroup",props:Qt({},bh,{tag:String,moveClass:String}),setup(t,{slots:e}){const a=K1(),i=Hl();let r,c;return q3(()=>{if(!r.length)return;const n=t.moveClass||`${t.name||"v"}-move`;if(!Ih(r[0].el,a.vnode.el,n))return;r.forEach(Rh),r.forEach(Th);const l=r.filter(Sh);or(),l.forEach(d=>{const h=d.el,s=h.style;ve(h,n),s.transform=s.webkitTransform=s.transitionDuration="";const p=h._moveCb=f=>{f&&f.target!==h||(!f||/transform$/.test(f.propertyName))&&(h.removeEventListener("transitionend",p),h._moveCb=null,we(h,n))};h.addEventListener("transitionend",p)})}),()=>{const n=ft(t),l=Vh(n);let d=n.tag||wt;r=c,c=e.default?M7(e.default()):[];for(let h=0;h<c.length;h++){const s=c[h];s.key!=null?W6(s,xi(s,l,i,a)):O("<TransitionGroup> children must be keyed.")}if(r)for(let h=0;h<r.length;h++){const s=r[h];W6(s,xi(s,l,i,a)),pr.set(s,s.el.getBoundingClientRect())}return A(d,null,c)}}},xh=t=>delete t.mode;vr.props;const gh=vr;function Rh(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Th(t){fr.set(t,t.el.getBoundingClientRect())}function Sh(t){const e=pr.get(t),a=fr.get(t),i=e.left-a.left,r=e.top-a.top;if(i||r){const c=t.el.style;return c.transform=c.webkitTransform=`translate(${i}px,${r}px)`,c.transitionDuration="0s",t}}function Ih(t,e,a){const i=t.cloneNode();t._vtc&&t._vtc.forEach(n=>{n.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),a.split(/\s+/).forEach(n=>n&&i.classList.add(n)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:c}=sr(i);return r.removeChild(i),c}const Eh=["ctrl","shift","alt","meta"],wh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Eh.some(a=>t[`${a}Key`]&&!e.includes(a))},Uh=(t,e)=>(a,...i)=>{for(let r=0;r<e.length;r++){const c=wh[e[r]];if(c&&c(a,e))return}return t(a,...i)},Nh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},f6=(t,e)=>a=>{if(!("key"in a))return;const i=Ve(a.key);if(e.some(r=>r===i||Nh[r]===i))return t(a)},ur={beforeMount(t,{value:e},{transition:a}){t._vod=t.style.display==="none"?"":t.style.display,a&&e?a.beforeEnter(t):aa(t,e)},mounted(t,{value:e},{transition:a}){a&&e&&a.enter(t)},updated(t,{value:e,oldValue:a},{transition:i}){!e!=!a&&(i?e?(i.beforeEnter(t),aa(t,!0),i.enter(t)):i.leave(t,()=>{aa(t,!1)}):aa(t,e))},beforeUnmount(t,{value:e}){aa(t,e)}};function aa(t,e){t.style.display=e?t._vod:"none"}const Kh=Qt({patchProp:uh},th);let v8;function Xh(){return v8||(v8=wd(Kh))}const Jh=(...t)=>{const e=Xh().createApp(...t);jh(e),Fh(e);const{mount:a}=e;return e.mount=i=>{const r=Ah(i);if(!r)return;const c=e._component;!st(c)&&!c.render&&!c.template&&(c.template=r.innerHTML),r.innerHTML="";const n=a(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},e};function jh(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>i7(e)||S9(e),writable:!1})}function Fh(t){{const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){O("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=t.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return O(i),a},set(){O(i)}})}}function Ah(t){if(Gt(t)){const e=document.querySelector(t);return e||O(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&O('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function Oh(){_d()}Oh();function Fi(t,e={},a){for(const i in t){const r=t[i],c=a?`${a}:${i}`:i;typeof r=="object"&&r!==null?Fi(r,e,c):typeof r=="function"&&(e[c]=r)}return e}const Mh={run:t=>t()},Lh=()=>Mh,mr=typeof console.createTask<"u"?console.createTask:Lh;function zh(t,e){const a=e.shift(),i=mr(a);return t.reduce((r,c)=>r.then(()=>i.run(()=>c(...e))),Promise.resolve())}function Wh(t,e){const a=e.shift(),i=mr(a);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function H3(t,e){for(const a of[...t])a(e)}class Ch{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,a,i={}){if(!e||typeof a!="function")return()=>{};const r=e;let c;for(;this._deprecatedHooks[e];)c=this._deprecatedHooks[e],e=c.to;if(c&&!i.allowDeprecated){let n=c.message;n||(n=`${r} hook has been deprecated`+(c.to?`, please use ${c.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(n)||(console.warn(n),this._deprecatedMessages.add(n))}if(!a.name)try{Object.defineProperty(a,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(a),()=>{a&&(this.removeHook(e,a),a=void 0)}}hookOnce(e,a){let i,r=(...c)=>(typeof i=="function"&&i(),i=void 0,r=void 0,a(...c));return i=this.hook(e,r),i}removeHook(e,a){if(this._hooks[e]){const i=this._hooks[e].indexOf(a);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,a){this._deprecatedHooks[e]=typeof a=="string"?{to:a}:a;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const a in e)this.deprecateHook(a,e[a])}addHooks(e){const a=Fi(e),i=Object.keys(a).map(r=>this.hook(r,a[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const a=Fi(e);for(const i in a)this.removeHook(i,a[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...a){return a.unshift(e),this.callHookWith(zh,e,...a)}callHookParallel(e,...a){return a.unshift(e),this.callHookWith(Wh,e,...a)}callHookWith(e,a,...i){const r=this._before||this._after?{name:a,args:i,context:{}}:void 0;this._before&&H3(this._before,r);const c=e(a in this._hooks?[...this._hooks[a]]:[],i);return c instanceof Promise?c.finally(()=>{this._after&&r&&H3(this._after,r)}):(this._after&&r&&H3(this._after,r),c)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const a=this._before.indexOf(e);a!==-1&&this._before.splice(a,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const a=this._after.indexOf(e);a!==-1&&this._after.splice(a,1)}}}}function Qh(){return new Ch}function Hh(t){return Array.isArray(t)?t:[t]}const qr=["title","script","style","noscript"],br=["base","meta","link","style","script","noscript"],Zh=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Gh=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Ph=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Vr(t){let e=9;for(let a=0;a<t.length;)e=Math.imul(e^t.charCodeAt(a++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ai(t){return Vr(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,a])=>`${e}:${String(a)}`).join(",")}`)}function Yh(t){let e=9;for(const a of t)for(let i=0;i<a.length;)e=Math.imul(e^a.charCodeAt(i++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function yr(t,e){const{props:a,tag:i}=t;if(Gh.includes(i))return i;if(i==="link"&&a.rel==="canonical")return"canonical";if(a.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const c of r)if(typeof a[c]<"u"){const n=String(a[c]);return e&&!e(n)?!1:`${i}:${c}:${n}`}return!1}function u8(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function v6(t,e=!1,a){const{tag:i,$el:r}=t;r&&(Object.entries(i.props).forEach(([c,n])=>{n=String(n);const l=`attr:${c}`;if(c==="class"){if(!n)return;for(const d of n.split(" ")){const h=`${l}:${d}`;a&&a(t,h,()=>r.classList.remove(d)),r.classList.contains(d)||r.classList.add(d)}return}a&&!c.startsWith("data-h-")&&a(t,l,()=>r.removeAttribute(c)),(e||r.getAttribute(c)!==n)&&r.setAttribute(c,n)}),qr.includes(i.tag)&&(i.textContent&&i.textContent!==r.textContent?r.textContent=i.textContent:i.innerHTML&&i.innerHTML!==r.innerHTML&&(r.innerHTML=i.innerHTML)))}let ia=!1;async function kr(t,e={}){var f,v;const a={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",a),!a.shouldRender)return;const i=e.document||t.resolvedOptions.document||window.document,r=(await t.resolveTags()).map(l);if(t.resolvedOptions.experimentalHashHydration&&(ia=ia||t._hash||!1,ia)){const u=Yh(r.map(V=>V.tag._h));if(ia===u)return;ia=u}const c=t._popSideEffectQueue();t.headEntries().map(u=>u._sde).forEach(u=>{Object.entries(u).forEach(([V,x])=>{c[V]=x})});const n=(u,V,x)=>{V=`${u.renderId}:${V}`,u.entry&&(u.entry._sde[V]=x),delete c[V]};function l(u){const V=t.headEntries().find(k=>k._i===u._e),x={renderId:u._d||Ai(u),$el:null,shouldRender:!0,tag:u,entry:V,markSideEffect:(k,g)=>n(x,k,g)};return x}const d=[],h={body:[],head:[]},s=u=>{t._elMap[u.renderId]=u.$el,d.push(u),n(u,"el",()=>{var V;(V=u.$el)==null||V.remove(),delete t._elMap[u.renderId]})};for(const u of r){if(await t.hooks.callHook("dom:beforeRenderTag",u),!u.shouldRender)continue;const{tag:V}=u;if(V.tag==="title"){i.title=V.textContent||"",d.push(u);continue}if(V.tag==="htmlAttrs"||V.tag==="bodyAttrs"){u.$el=i[V.tag==="htmlAttrs"?"documentElement":"body"],v6(u,!1,n),d.push(u);continue}if(u.$el=t._elMap[u.renderId],!u.$el&&V.key&&(u.$el=i.querySelector(`${(f=V.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${V.tag}[data-h-${V._h}]`)),u.$el){u.tag._d&&v6(u),s(u);continue}h[(v=V.tagPosition)!=null&&v.startsWith("body")?"body":"head"].push(u)}const p={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(h).forEach(([u,V])=>{var k;if(!V.length)return;const x=(k=i==null?void 0:i[u])==null?void 0:k.children;if(x){for(const g of[...x].reverse()){const q=g.tagName.toLowerCase();if(!br.includes(q))continue;const T=g.getAttributeNames().reduce((w,L)=>({...w,[L]:g.getAttribute(L)}),{}),R={tag:q,props:T};g.innerHTML&&(R.innerHTML=g.innerHTML);const I=Ai(R);let F=V.findIndex(w=>(w==null?void 0:w.renderId)===I);if(F===-1){const w=yr(R);F=V.findIndex(L=>(L==null?void 0:L.tag._d)&&L.tag._d===w)}if(F!==-1){const w=V[F];w.$el=g,v6(w),s(w),delete V[F]}}V.forEach(g=>{const q=g.tag.tagPosition||"head";p[q]=p[q]||i.createDocumentFragment(),g.$el||(g.$el=i.createElement(g.tag.tag),v6(g,!0)),p[q].appendChild(g.$el),s(g)})}}),p.head&&i.head.appendChild(p.head),p.bodyOpen&&i.body.insertBefore(p.bodyOpen,i.body.firstChild),p.bodyClose&&i.body.appendChild(p.bodyClose);for(const u of d)await t.hooks.callHook("dom:renderTag",u);Object.values(c).forEach(u=>u())}let Z3=null;async function xr(t,e={}){function a(){return Z3=null,kr(t,e)}const i=e.delayFn||(r=>setTimeout(r,10));return Z3=Z3||new Promise(r=>i(()=>r(a())))}function Bh(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let a=t==null?void 0:t.delayFn;!a&&typeof requestAnimationFrame<"u"&&(a=requestAnimationFrame),xr(e,{document:(t==null?void 0:t.document)||window.document,delayFn:a})}}}}function Dh(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const m8={critical:2,high:9,low:12,base:-1,title:1,meta:10};function q8(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in m8?m8[e]:10}const _h=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function $h(){return{hooks:{"tags:resolve":t=>{const e=a=>{var i;return(i=t.tags.find(r=>r._d===a))==null?void 0:i._p};for(const{prefix:a,offset:i}of _h)for(const r of t.tags.filter(c=>typeof c.tagPriority=="string"&&c.tagPriority.startsWith(a))){const c=e(r.tagPriority.replace(a,""));typeof c<"u"&&(r._p=c+i)}t.tags.sort((a,i)=>a._p-i._p).sort((a,i)=>q8(a)-q8(i))}}}}function ts(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let a=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&a!==-1){const r=u8(e[a].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(a!==-1){const r=u8(e[a].textContent);r!==null&&(e[a].textContent=r,e[a].tag="title",a=-1)}a!==-1&&delete e[a],t.tags=e.filter(Boolean)}}}}function es(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const as=["link","style","script","noscript"];function is(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=Ai(t)),t.key&&as.includes(t.tag)&&(t._h=Vr(t.key),t.props[`data-h-${t._h}`]="")}}}}const b8=["script","link","bodyAttrs"];function rs(){const t=(e,a)=>{const i={},r={};Object.entries(a.props).forEach(([n,l])=>{n.startsWith("on")&&typeof l=="function"?r[n]=l:i[n]=l});let c;return e==="dom"&&a.tag==="script"&&typeof i.src=="string"&&typeof r.onload<"u"&&(c=i.src,delete i.src),{props:i,eventHandlers:r,delayedSrc:c}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(a=>(!b8.includes(a.tag)||!Object.entries(a.props).find(([i,r])=>i.startsWith("on")&&typeof r=="function")||(a.props=t("ssr",a).props),a))},"dom:beforeRenderTag":function(e){if(!b8.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([c,n])=>c.startsWith("on")&&typeof n=="function"))return;const{props:a,eventHandlers:i,delayedSrc:r}=t("dom",e.tag);Object.keys(i).length&&(e.tag.props=a,e.tag._eventHandlers=i,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const a=e.$el;if(!e.tag._eventHandlers||!a)return;const i=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:a;Object.entries(e.tag._eventHandlers).forEach(([r,c])=>{const n=`${e.tag._d||e.tag._p}:${r}`,l=r.slice(2).toLowerCase(),d=`data-h-${l}`;if(e.markSideEffect(n,()=>{}),a.hasAttribute(d))return;const h=c;a.setAttribute(d,""),i.addEventListener(l,h),e.entry&&(e.entry._sde[n]=()=>{i.removeEventListener(l,h),a.removeAttribute(d)})}),e.tag._delayedSrc&&a.setAttribute("src",e.tag._delayedSrc)}}}}const cs=["templateParams","htmlAttrs","bodyAttrs"];function ns(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const a=yr(t)||(t.key?`${t.tag}:${t.key}`:!1);a&&(t._d=a)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,c=e[r];if(c){let l=i==null?void 0:i.tagDuplicateStrategy;if(!l&&cs.includes(i.tag)&&(l="merge"),l==="merge"){const d=c.props;["class","style"].forEach(h=>{i.props[h]&&d[h]&&(h==="style"&&!d[h].endsWith(";")&&(d[h]+=";"),i.props[h]=`${d[h]} ${i.props[h]}`)}),e[r].props={...d,...i.props};return}else if(i._e===c._e){c._duped=c._duped||[],i._d=`${c._d}:${c._duped.length+1}`,c._duped.push(i);return}}const n=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if(br.includes(i.tag)&&n===0){delete e[r];return}e[r]=i});const a=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,a.push(i),r&&a.push(...r)}),t.tags=a}}}}function u6(t,e){function a(c){if(["s","pageTitle"].includes(c))return e.pageTitle;let n;return c.includes(".")?n=c.split(".").reduce((l,d)=>l&&l[d]||void 0,e):n=e[c],typeof n<"u"?n||"":!1}let i=t;try{i=decodeURI(t)}catch{}return(i.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(c=>{const n=a(c.slice(1));typeof n=="string"&&(t=t.replace(new RegExp(`\\${c}(\\W|$)`,"g"),`${n}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function ls(){return{hooks:{"tags:resolve":t=>{var c;const{tags:e}=t,a=(c=e.find(n=>n.tag==="title"))==null?void 0:c.textContent,i=e.findIndex(n=>n.tag==="templateParams"),r=i!==-1?e[i].props:{};r.pageTitle=r.pageTitle||a||"";for(const n of e)if(["titleTemplate","title"].includes(n.tag)&&typeof n.textContent=="string")n.textContent=u6(n.textContent,r);else if(n.tag==="meta"&&typeof n.props.content=="string")n.props.content=u6(n.props.content,r);else if(n.tag==="link"&&typeof n.props.href=="string")n.props.href=u6(n.props.href,r);else if(n.tag==="script"&&["application/json","application/ld+json"].includes(n.props.type)&&typeof n.innerHTML=="string")try{n.innerHTML=JSON.stringify(JSON.parse(n.innerHTML),(l,d)=>typeof d=="string"?u6(d,r):d)}catch{}t.tags=e.filter(n=>n.tag!=="templateParams")}}}}const ds=typeof window<"u";let gr;function hs(t){return gr=t}function ss(){return gr}async function os(t,e){const a={tag:t,props:{}};return t==="templateParams"?(a.props=e,a):["title","titleTemplate"].includes(t)?(a.textContent=e instanceof Promise?await e:e,a):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?a.props.src=e:a.innerHTML=e,a):!1:(a.props=await fs(t,{...e}),a.props.children&&(a.props.innerHTML=a.props.children),delete a.props.children,Object.keys(a.props).filter(i=>Ph.includes(i)).forEach(i=>{(!["innerHTML","textContent"].includes(i)||qr.includes(a.tag))&&(a[i]=a.props[i]),delete a.props[i]}),["innerHTML","textContent"].forEach(i=>{if(a.tag==="script"&&typeof a[i]=="string"&&["application/ld+json","application/json"].includes(a.props.type))try{a[i]=JSON.parse(a[i])}catch{a[i]=""}typeof a[i]=="object"&&(a[i]=JSON.stringify(a[i]))}),a.props.class&&(a.props.class=ps(a.props.class)),a.props.content&&Array.isArray(a.props.content)?a.props.content.map(i=>({...a,props:{...a.props,content:i}})):a)}function ps(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function fs(t,e){for(const a of Object.keys(e)){const i=a.startsWith("data-");e[a]instanceof Promise&&(e[a]=await e[a]),String(e[a])==="true"?e[a]=i?"true":"":String(e[a])==="false"&&(i?e[a]="false":delete e[a])}return e}const vs=10;async function us(t){const e=[];return Object.entries(t.resolvedInput).filter(([a,i])=>typeof i<"u"&&Zh.includes(a)).forEach(([a,i])=>{const r=Hh(i);e.push(...r.map(c=>os(a,c)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((a,i)=>(a._e=t._i,a._p=(t._i<<vs)+i,a))}function ms(){return[ns(),$h(),ls(),ts(),is(),rs(),es()]}function qs(t={}){return[Bh({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function bs(t={}){const e=Vs({...t,plugins:[...qs(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=Dh(e.resolvedOptions.document)),hs(e),e}function Vs(t={}){let e=[],a={},i=0;const r=Qh();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...ms(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(l=>l.hooks&&r.addHooks(l.hooks)),t.document=t.document||(ds?document:void 0);const c=()=>r.callHook("entries:updated",n),n={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(l){l.hooks&&r.addHooks(l.hooks)},push(l,d){const h={_i:i++,input:l,_sde:{}};return d!=null&&d.mode&&(h._m=d==null?void 0:d.mode),d!=null&&d.transform&&(h._t=d==null?void 0:d.transform),e.push(h),c(),{dispose(){e=e.filter(s=>s._i!==h._i?!0:(a={...a,...s._sde||{}},s._sde={},c(),!1))},patch(s){e=e.map(p=>(p._i===h._i&&(h.input=p.input=s,c()),p))}}},async resolveTags(){const l={tags:[],entries:[...e]};await r.callHook("entries:resolve",l);for(const d of l.entries){const h=d._t||(s=>s);if(d.resolvedInput=h(d.resolvedInput||d.input),d.resolvedInput)for(const s of await us(d)){const p={tag:s,entry:d,resolvedOptions:n.resolvedOptions};await r.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await r.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...a};return a={},l},_elMap:{}};return n.hooks.callHook("init",n),n}function ys(t){return typeof t=="function"?t():U(t)}function Y6(t,e=""){if(t instanceof Promise)return t;const a=ys(t);return!t||!a?a:Array.isArray(a)?a.map(i=>Y6(i,e)):typeof a=="object"?Object.fromEntries(Object.entries(a).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,U(r)]:[i,Y6(r,i)])):a}const ks=P6.startsWith("3"),xs=typeof window<"u",Rr="usehead";function L5(){return K1()&&H(Rr)||ss()}function gs(t){return{install(a){ks&&(a.config.globalProperties.$unhead=t,a.config.globalProperties.$head=t,a.provide(Rr,t))}}.install}function Rs(t={}){const e=bs({...t,domDelayFn:a=>setTimeout(()=>d1(()=>a()),10),plugins:[Ts(),...(t==null?void 0:t.plugins)||[]]});return e.install=gs(e),e}function Ts(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Y6(e.input)}}}}function Ss(t,e={}){const a=L5(),i=G(!1),r=G({});Z2(()=>{r.value=i.value?{}:Y6(t)});const c=a.push(r.value,e);return ut(r,l=>{c.patch(l)}),K1()&&($a(()=>{c.dispose()}),W7(()=>{i.value=!0}),z7(()=>{i.value=!1})),c}function Is(t,e={}){return L5().push(t,e)}function Tr(t,e={}){var i;const a=L5();if(a){const r=xs||!!((i=a.resolvedOptions)!=null&&i.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?Ss(t,e):Is(t,e)}}function Es(t,e){const a=Rs(e||{}),i={unhead:a,install(r){P6.startsWith("3")&&(r.config.globalProperties.$head=a,r.provide("usehead",a))},use(r){a.use(r)},resolveTags(){return a.resolveTags()},headEntries(){return a.headEntries()},headTags(){return a.resolveTags()},push(r,c){return a.push(r,c)},addEntry(r,c){return a.push(r,c)},addHeadObjs(r,c){return a.push(r,c)},addReactiveEntry(r,c){const n=Tr(r,c);return typeof n<"u"?n.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,c){c?kr(a,{document:r}):xr(a,{delayFn:n=>setTimeout(()=>n(),50),document:r})},internalHooks:a.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return a.addHeadObjs=i.addHeadObjs,a.updateDOM=i.updateDOM,a.hooks.hook("dom:beforeRender",r=>{for(const c of i.hooks["before:dom"])c()===!1&&(r.shouldRender=!1)}),t&&i.addHeadObjs(t),i}const xa=Symbol("v-click-clicks"),c2=Symbol("v-click-clicks-elements"),Oi=Symbol("v-click-clicks-order-map"),L2=Symbol("v-click-clicks-disabled"),Sr=Symbol("slidev-slide-scale"),tt=Symbol("slidev-slidev-context"),ws=Symbol("slidev-route"),Us=Symbol("slidev-slide-context"),w2="slidev-vclick-target",G3="slidev-vclick-hidden",Ns="slidev-vclick-fade",P3="slidev-vclick-hidden-explicitly",ra="slidev-vclick-current",m6="slidev-vclick-prior",Ks=["localhost","127.0.0.1"];let Xs=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,a)=>(a&=63,a<36?e+=a.toString(36):a<62?e+=(a-26).toString(36).toUpperCase():a>62?e+="-":e+="_",e),"");function Js(t){return t=t??[],Array.isArray(t)?t:[t]}function V8(t,e){if(!t)return!1;const a=t.indexOf(e);return a>=0?(t.splice(a,1),!0):!1}function js(t){return t!=null}function Fs(t,e){return Object.fromEntries(Object.entries(t).map(([a,i])=>e(a,i)).filter(js))}const ba={theme:"eavise",title:"Aerial Object Detection",titleTemplate:"%s - Slidev",addons:["slidev-addon-animattr"],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:1280,exportFilename:"",selectable:!1,themeConfig:{primary:"var(--kul-blue-800)",secondary:"var(--kul-blue-400)"},fonts:{sans:['"Roboto"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"Electrolize"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Roboto","Electrolize","Fira Code"],provider:"google",local:[],italic:!0,weights:["100","200","300","400","500","600","700","900"]},favicon:"https://gitlab.com/EAVISE/branding/logo/-/raw/master/color/icon_eavise.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"fade",author:"Tanguy Ophoff",date:"26 June 2023",image:"/earthobservation.jpg","image-transform":"scale(1.1)","image-filter":"grayscale(0.4)","color-opacity":.5},Kt=ba,Ae=Kt.aspectRatio??16/9,Oe=Kt.canvasWidth??980,z5=Math.ceil(Oe/Ae),W5=N(()=>Fs(Kt.themeConfig||{},(t,e)=>[`--slidev-theme-${t}`,e]));function Ir(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function C1(t,e,a){Object.defineProperty(t,e,{value:a,writable:!0,enumerable:!1})}const R2=Pt({page:0,clicks:0});let As=[],Os=[];C1(R2,"$syncUp",!0);C1(R2,"$syncDown",!0);C1(R2,"$paused",!1);C1(R2,"$onSet",t=>As.push(t));C1(R2,"$onPatch",t=>Os.push(t));Ir();C1(R2,"$patch",async()=>!1);function Er(t,e,a=!1){const i=[];let r=!1,c=!1,n,l;const d=Pt(e);function h(v){i.push(v)}function s(v,u){d[v]!==u&&(clearTimeout(n),r=!0,d[v]=u,n=setTimeout(()=>r=!1,0))}function p(v){r||(clearTimeout(l),c=!0,Object.entries(v).forEach(([u,V])=>{d[u]=V}),l=setTimeout(()=>c=!1,0))}function f(v){let u;a?a&&window.addEventListener("storage",x=>{x&&x.key===v&&x.newValue&&p(JSON.parse(x.newValue))}):(u=new BroadcastChannel(v),u.addEventListener("message",x=>p(x.data)));function V(){!a&&u&&!c?u.postMessage(ft(d)):a&&!c&&window.localStorage.setItem(v,JSON.stringify(d)),r||i.forEach(x=>x(d))}if(ut(d,V,{deep:!0,flush:"sync"}),a){const x=window.localStorage.getItem(v);x&&p(JSON.parse(x))}}return{init:f,onPatch:h,patch:s,state:d}}const{init:Ms,onPatch:Ls,patch:ca,state:Y3}=Er(R2,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),T2=Pt({});let zs=[],Ws=[];C1(T2,"$syncUp",!0);C1(T2,"$syncDown",!0);C1(T2,"$paused",!1);C1(T2,"$onSet",t=>zs.push(t));C1(T2,"$onPatch",t=>Ws.push(t));Ir();C1(T2,"$patch",async()=>!1);const{init:Cs,onPatch:Qs,patch:wr,state:B6}=Er(T2,{},!1),Hs="modulepreload",Zs=function(t){return"/phd-defense/"+t},y8={},Me=function(e,a,i){if(!a||a.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(a.map(c=>{if(c=Zs(c),c in y8)return;y8[c]=!0;const n=c.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(!!i)for(let s=r.length-1;s>=0;s--){const p=r[s];if(p.href===c&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${l}`))return;const h=document.createElement("link");if(h.rel=n?"stylesheet":Hs,n||(h.as="script",h.crossOrigin=""),h.href=c,document.head.appendChild(h),n)return new Promise((s,p)=>{h.addEventListener("load",s),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())};function Gs(t,e){let a,i,r;const c=G(!0),n=()=>{c.value=!0,r()};ut(t,n,{flush:"sync"});const l=typeof e=="function"?e:e.get,d=typeof e=="function"?void 0:e.set,h=w5((s,p)=>(i=s,r=p,{get(){return c.value&&(a=l(),c.value=!1),i(),a},set(f){d==null||d(f)}}));return Object.isExtensible(h)&&(h.trigger=n),h}function ye(t){return x5()?(l7(t),!0):!1}function a1(t){return typeof t=="function"?t():U(t)}function Ps(t){if(!Ut(t))return Pt(t);const e=new Proxy({},{get(a,i,r){return U(Reflect.get(t.value,i,r))},set(a,i,r){return Ut(t.value[i])&&!Ut(r)?t.value[i].value=r:t.value[i]=r,!0},deleteProperty(a,i){return Reflect.deleteProperty(t.value,i)},has(a,i){return Reflect.has(t.value,i)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Pt(e)}const ke=typeof window<"u",Ys=t=>typeof t<"u",Bs=t=>t!=null,Ds=Object.prototype.toString,Mi=t=>Ds.call(t)==="[object Object]",Li=()=>+Date.now(),b2=()=>{},_s=$s();function $s(){var t;return ke&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function to(t,e){function a(...i){return new Promise((r,c)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(c)})}return a}const Ur=t=>t();function eo(t=Ur){const e=G(!0);function a(){e.value=!1}function i(){e.value=!0}const r=(...c)=>{e.value&&t(...c)};return{isActive:ae(e),pause:a,resume:i,eventFilter:r}}function ao(t,e){var a;if(typeof t=="number")return t+e;const i=((a=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",r=t.slice(i.length),c=Number.parseFloat(i)+e;return Number.isNaN(c)?t:c+r}function Nr(...t){if(t.length!==1)return pl(...t);const e=t[0];return typeof e=="function"?ae(w5(()=>({get:e,set:b2}))):G(e)}var io=Object.defineProperty,ro=Object.defineProperties,co=Object.getOwnPropertyDescriptors,k8=Object.getOwnPropertySymbols,no=Object.prototype.hasOwnProperty,lo=Object.prototype.propertyIsEnumerable,x8=(t,e,a)=>e in t?io(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,ho=(t,e)=>{for(var a in e||(e={}))no.call(e,a)&&x8(t,a,e[a]);if(k8)for(var a of k8(e))lo.call(e,a)&&x8(t,a,e[a]);return t},so=(t,e)=>ro(t,co(e));function oo(t){if(!Ut(t))return hl(t);const e=Array.isArray(t.value)?new Array(t.value.length):{};for(const a in t.value)e[a]=w5(()=>({get(){return t.value[a]},set(i){if(Array.isArray(t.value)){const r=[...t.value];r[a]=i,t.value=r}else{const r=so(ho({},t.value),{[a]:i});Object.setPrototypeOf(r,t.value),t.value=r}}}));return e}function Kr(t,e=!0){K1()?Ge(t):e?t():d1(t)}function po(t){K1()&&t6(t)}function fo(t,e=1e3,a={}){const{immediate:i=!0,immediateCallback:r=!1}=a;let c=null;const n=G(!1);function l(){c&&(clearInterval(c),c=null)}function d(){n.value=!1,l()}function h(){const s=a1(e);s<=0||(n.value=!0,r&&t(),l(),c=setInterval(t,s))}if(i&&ke&&h(),Ut(e)||typeof e=="function"){const s=ut(e,()=>{n.value&&ke&&h()});ye(s)}return ye(d),{isActive:n,pause:d,resume:h}}function Xr(t=!1,e={}){const{truthyValue:a=!0,falsyValue:i=!1}=e,r=Ut(t),c=G(t);function n(l){if(arguments.length)return c.value=l,c.value;{const d=a1(a);return c.value=c.value===d?a1(i):d,c.value}}return r?n:[c,n]}var g8=Object.getOwnPropertySymbols,vo=Object.prototype.hasOwnProperty,uo=Object.prototype.propertyIsEnumerable,mo=(t,e)=>{var a={};for(var i in t)vo.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&g8)for(var i of g8(t))e.indexOf(i)<0&&uo.call(t,i)&&(a[i]=t[i]);return a};function qo(t,e,a={}){const i=a,{eventFilter:r=Ur}=i,c=mo(i,["eventFilter"]);return ut(t,to(r,e),c)}var bo=Object.defineProperty,Vo=Object.defineProperties,yo=Object.getOwnPropertyDescriptors,D6=Object.getOwnPropertySymbols,Jr=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable,R8=(t,e,a)=>e in t?bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,ko=(t,e)=>{for(var a in e||(e={}))Jr.call(e,a)&&R8(t,a,e[a]);if(D6)for(var a of D6(e))jr.call(e,a)&&R8(t,a,e[a]);return t},xo=(t,e)=>Vo(t,yo(e)),go=(t,e)=>{var a={};for(var i in t)Jr.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&D6)for(var i of D6(t))e.indexOf(i)<0&&jr.call(t,i)&&(a[i]=t[i]);return a};function Ro(t,e,a={}){const i=a,{eventFilter:r}=i,c=go(i,["eventFilter"]),{eventFilter:n,pause:l,resume:d,isActive:h}=eo(r);return{stop:qo(t,e,xo(ko({},c),{eventFilter:n})),pause:l,resume:d,isActive:h}}function h1(t){var e;const a=a1(t);return(e=a==null?void 0:a.$el)!=null?e:a}const r1=ke?window:void 0,Fr=ke?window.document:void 0;function Rt(...t){let e,a,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([a,i,r]=t,e=r1):[e,a,i,r]=t,!e)return b2;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const c=[],n=()=>{c.forEach(s=>s()),c.length=0},l=(s,p,f,v)=>(s.addEventListener(p,f,v),()=>s.removeEventListener(p,f,v)),d=ut(()=>[h1(e),a1(r)],([s,p])=>{n(),s&&c.push(...a.flatMap(f=>i.map(v=>l(s,f,v,p))))},{immediate:!0,flush:"post"}),h=()=>{d(),n()};return ye(h),h}let T8=!1;function To(t,e,a={}){const{window:i=r1,ignore:r=[],capture:c=!0,detectIframe:n=!1}=a;if(!i)return;_s&&!T8&&(T8=!0,Array.from(i.document.body.children).forEach(f=>f.addEventListener("click",b2)));let l=!0;const d=f=>r.some(v=>{if(typeof v=="string")return Array.from(i.document.querySelectorAll(v)).some(u=>u===f.target||f.composedPath().includes(u));{const u=h1(v);return u&&(f.target===u||f.composedPath().includes(u))}}),s=[Rt(i,"click",f=>{const v=h1(t);if(!(!v||v===f.target||f.composedPath().includes(v))){if(f.detail===0&&(l=!d(f)),!l){l=!0;return}e(f)}},{passive:!0,capture:c}),Rt(i,"pointerdown",f=>{const v=h1(t);v&&(l=!f.composedPath().includes(v)&&!d(f))},{passive:!0}),n&&Rt(i,"blur",f=>{setTimeout(()=>{var v;const u=h1(t);((v=i.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(u!=null&&u.contains(i.document.activeElement))&&e(f)},0)})].filter(Boolean);return()=>s.forEach(f=>f())}function So(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function Io(...t){let e,a,i={};t.length===3?(e=t[0],a=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,a=t[0],i=t[1]):(e=t[0],a=t[1]):(e=!0,a=t[0]);const{target:r=r1,eventName:c="keydown",passive:n=!1,dedupe:l=!1}=i,d=So(e);return Rt(r,c,s=>{s.repeat&&a1(l)||d(s)&&a(s)},n)}function Eo(t={}){var e;const{window:a=r1}=t,i=(e=t.document)!=null?e:a==null?void 0:a.document,r=Gs(()=>null,()=>i==null?void 0:i.activeElement);return a&&(Rt(a,"blur",c=>{c.relatedTarget===null&&r.trigger()},!0),Rt(a,"focus",r.trigger,!0)),r}function wo(){const t=G(!1);return K1()&&Ge(()=>{t.value=!0}),t}function k3(t){const e=wo();return N(()=>(e.value,!!t()))}function Uo(t,e={}){const{immediate:a=!0,window:i=r1}=e,r=G(!1);let c=0,n=null;function l(s){if(!r.value||!i)return;const p=s-c;t({delta:p,timestamp:s}),c=s,n=i.requestAnimationFrame(l)}function d(){!r.value&&i&&(r.value=!0,n=i.requestAnimationFrame(l))}function h(){r.value=!1,n!=null&&i&&(i.cancelAnimationFrame(n),n=null)}return a&&d(),ye(h),{isActive:ae(r),pause:h,resume:d}}function n2(t,e={}){const{window:a=r1}=e,i=k3(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let r;const c=G(!1),n=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},l=()=>{i.value&&(n(),r=a.matchMedia(Nr(t).value),c.value=!!(r!=null&&r.matches),r&&("addEventListener"in r?r.addEventListener("change",l):r.addListener(l)))};return Z2(l),ye(()=>n()),c}const No={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};function Ko(t,e={}){function a(l,d){let h=t[l];return d!=null&&(h=ao(h,d)),typeof h=="number"&&(h=`${h}px`),h}const{window:i=r1}=e;function r(l){return i?i.matchMedia(l).matches:!1}const c=l=>n2(`(min-width: ${a(l)})`,e),n=Object.keys(t).reduce((l,d)=>(Object.defineProperty(l,d,{get:()=>c(d),enumerable:!0,configurable:!0}),l),{});return Object.assign(n,{greater(l){return n2(`(min-width: ${a(l,.1)})`,e)},greaterOrEqual:c,smaller(l){return n2(`(max-width: ${a(l,-.1)})`,e)},smallerOrEqual(l){return n2(`(max-width: ${a(l)})`,e)},between(l,d){return n2(`(min-width: ${a(l)}) and (max-width: ${a(d,-.1)})`,e)},isGreater(l){return r(`(min-width: ${a(l,.1)})`)},isGreaterOrEqual(l){return r(`(min-width: ${a(l)})`)},isSmaller(l){return r(`(max-width: ${a(l,-.1)})`)},isSmallerOrEqual(l){return r(`(max-width: ${a(l)})`)},isInBetween(l,d){return r(`(min-width: ${a(l)}) and (max-width: ${a(d,-.1)})`)},current(){const l=Object.keys(t).map(d=>[d,c(d)]);return N(()=>l.filter(([,d])=>d.value).map(([d])=>d))}})}function Xo(t){return JSON.parse(JSON.stringify(t))}const q6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b6="__vueuse_ssr_handlers__",Jo=jo();function jo(){return b6 in q6||(q6[b6]=q6[b6]||{}),q6[b6]}function Fo(t,e){return Jo[t]||e}function Ao(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Oo=Object.defineProperty,S8=Object.getOwnPropertySymbols,Mo=Object.prototype.hasOwnProperty,Lo=Object.prototype.propertyIsEnumerable,I8=(t,e,a)=>e in t?Oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,E8=(t,e)=>{for(var a in e||(e={}))Mo.call(e,a)&&I8(t,a,e[a]);if(S8)for(var a of S8(e))Lo.call(e,a)&&I8(t,a,e[a]);return t};const zo={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},w8="vueuse-storage";function Wo(t,e,a,i={}){var r;const{flush:c="pre",deep:n=!0,listenToStorageChanges:l=!0,writeDefaults:d=!0,mergeDefaults:h=!1,shallow:s,window:p=r1,eventFilter:f,onError:v=w=>{console.error(w)}}=i,u=(s?de:G)(e);if(!a)try{a=Fo("getDefaultStorage",()=>{var w;return(w=r1)==null?void 0:w.localStorage})()}catch(w){v(w)}if(!a)return u;const V=a1(e),x=Ao(V),k=(r=i.serializer)!=null?r:zo[x],{pause:g,resume:q}=Ro(u,()=>T(u.value),{flush:c,deep:n,eventFilter:f});return p&&l&&(Rt(p,"storage",F),Rt(p,w8,I)),F(),u;function T(w){try{if(w==null)a.removeItem(t);else{const L=k.write(w),et=a.getItem(t);et!==L&&(a.setItem(t,L),p&&p.dispatchEvent(new CustomEvent(w8,{detail:{key:t,oldValue:et,newValue:L,storageArea:a}})))}}catch(L){v(L)}}function R(w){const L=w?w.newValue:a.getItem(t);if(L==null)return d&&V!==null&&a.setItem(t,k.write(V)),V;if(!w&&h){const et=k.read(L);return typeof h=="function"?h(et,V):x==="object"&&!Array.isArray(et)?E8(E8({},V),et):et}else return typeof L!="string"?L:k.read(L)}function I(w){F(w.detail)}function F(w){if(!(w&&w.storageArea!==a)){if(w&&w.key==null){u.value=V;return}if(!(w&&w.key!==t)){g();try{u.value=R(w)}catch(L){v(L)}finally{w?d1(q):q()}}}}}function Co(t){return n2("(prefers-color-scheme: dark)",t)}var Qo=Object.defineProperty,Ho=Object.defineProperties,Zo=Object.getOwnPropertyDescriptors,U8=Object.getOwnPropertySymbols,Go=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable,N8=(t,e,a)=>e in t?Qo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,Yo=(t,e)=>{for(var a in e||(e={}))Go.call(e,a)&&N8(t,a,e[a]);if(U8)for(var a of U8(e))Po.call(e,a)&&N8(t,a,e[a]);return t},Bo=(t,e)=>Ho(t,Zo(e));function oK(t,e={}){var a,i;const{pointerTypes:r,preventDefault:c,stopPropagation:n,exact:l,onMove:d,onEnd:h,onStart:s,initialValue:p,axis:f="both",draggingElement:v=r1,handle:u=t}=e,V=G((a=a1(p))!=null?a:{x:0,y:0}),x=G(),k=I=>r?r.includes(I.pointerType):!0,g=I=>{a1(c)&&I.preventDefault(),a1(n)&&I.stopPropagation()},q=I=>{if(!k(I)||a1(l)&&I.target!==a1(t))return;const F=a1(t).getBoundingClientRect(),w={x:I.clientX-F.left,y:I.clientY-F.top};(s==null?void 0:s(w,I))!==!1&&(x.value=w,g(I))},T=I=>{if(!k(I)||!x.value)return;let{x:F,y:w}=V.value;(f==="x"||f==="both")&&(F=I.clientX-x.value.x),(f==="y"||f==="both")&&(w=I.clientY-x.value.y),V.value={x:F,y:w},d==null||d(V.value,I),g(I)},R=I=>{k(I)&&x.value&&(x.value=void 0,h==null||h(V.value,I),g(I))};if(ke){const I={capture:(i=e.capture)!=null?i:!0};Rt(u,"pointerdown",q,I),Rt(v,"pointermove",T,I),Rt(v,"pointerup",R,I)}return Bo(Yo({},oo(V)),{position:V,isDragging:N(()=>!!x.value),style:N(()=>`left:${V.value.x}px;top:${V.value.y}px;`)})}var K8=Object.getOwnPropertySymbols,Do=Object.prototype.hasOwnProperty,_o=Object.prototype.propertyIsEnumerable,$o=(t,e)=>{var a={};for(var i in t)Do.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&K8)for(var i of K8(t))e.indexOf(i)<0&&_o.call(t,i)&&(a[i]=t[i]);return a};function tp(t,e,a={}){const i=a,{window:r=r1}=i,c=$o(i,["window"]);let n;const l=k3(()=>r&&"ResizeObserver"in r),d=()=>{n&&(n.disconnect(),n=void 0)},h=N(()=>Array.isArray(t)?t.map(f=>h1(f)):[h1(t)]),s=ut(h,f=>{if(d(),l.value&&r){n=new ResizeObserver(e);for(const v of f)v&&n.observe(v,c)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{d(),s()};return ye(p),{isSupported:l,stop:p}}function ep(t,e={width:0,height:0},a={}){const{window:i=r1,box:r="content-box"}=a,c=N(()=>{var d,h;return(h=(d=h1(t))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),n=G(e.width),l=G(e.height);return tp(t,([d])=>{const h=r==="border-box"?d.borderBoxSize:r==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(i&&c.value){const s=h1(t);if(s){const p=i.getComputedStyle(s);n.value=Number.parseFloat(p.width),l.value=Number.parseFloat(p.height)}}else if(h){const s=Array.isArray(h)?h:[h];n.value=s.reduce((p,{inlineSize:f})=>p+f,0),l.value=s.reduce((p,{blockSize:f})=>p+f,0)}else n.value=d.contentRect.width,l.value=d.contentRect.height},a),ut(()=>h1(t),d=>{n.value=d?e.width:0,l.value=d?e.height:0}),{width:n,height:l}}function ap(t,e,a={}){const{root:i,rootMargin:r="0px",threshold:c=.1,window:n=r1,immediate:l=!0}=a,d=k3(()=>n&&"IntersectionObserver"in n),h=N(()=>{const u=a1(t);return(Array.isArray(u)?u:[u]).map(h1).filter(Bs)});let s=b2;const p=G(l),f=d.value?ut(()=>[h.value,h1(i),p.value],([u,V])=>{if(s(),!p.value||!u.length)return;const x=new IntersectionObserver(e,{root:h1(V),rootMargin:r,threshold:c});u.forEach(k=>k&&x.observe(k)),s=()=>{x.disconnect(),s=b2}},{immediate:l,flush:"post"}):b2,v=()=>{s(),f(),p.value=!1};return ye(v),{isSupported:d,isActive:p,pause(){s(),p.value=!1},resume(){p.value=!0},stop:v}}const X8=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ip(t,e={}){const{document:a=Fr,autoExit:i=!1}=e,r=N(()=>{var k;return(k=h1(t))!=null?k:a==null?void 0:a.querySelector("html")}),c=G(!1),n=N(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(k=>a&&k in a||r.value&&k in r.value)),l=N(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(k=>a&&k in a||r.value&&k in r.value)),d=N(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(k=>a&&k in a||r.value&&k in r.value)),h=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(k=>a&&k in a),s=k3(()=>r.value&&a&&n.value!==void 0&&l.value!==void 0&&d.value!==void 0),p=()=>h?(a==null?void 0:a[h])===r.value:!1,f=()=>{if(d.value){if(a&&a[d.value]!=null)return a[d.value];{const k=r.value;if((k==null?void 0:k[d.value])!=null)return!!k[d.value]}}return!1};async function v(){if(s.value){if(l.value)if((a==null?void 0:a[l.value])!=null)await a[l.value]();else{const k=r.value;(k==null?void 0:k[l.value])!=null&&await k[l.value]()}c.value=!1}}async function u(){if(!s.value)return;f()&&await v();const k=r.value;n.value&&(k==null?void 0:k[n.value])!=null&&(await k[n.value](),c.value=!0)}async function V(){await(c.value?v():u())}const x=()=>{const k=f();(!k||k&&p())&&(c.value=k)};return Rt(a,X8,x,!1),Rt(()=>h1(r),X8,x,!1),i&&ye(v),{isSupported:s,isFullscreen:c,enter:u,exit:v,toggle:V}}function Y1(t,e,a={}){const{window:i=r1}=a;return Wo(t,e,i==null?void 0:i.localStorage,a)}const rp={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function cp(t={}){const{reactive:e=!1,target:a=r1,aliasMap:i=rp,passive:r=!0,onEventFired:c=b2}=t,n=Pt(new Set),l={toJSON(){return{}},current:n},d=e?Pt(l):l,h=new Set,s=new Set;function p(V,x){V in d&&(e?d[V]=x:d[V].value=x)}function f(){n.clear();for(const V of s)p(V,!1)}function v(V,x){var k,g;const q=(k=V.key)==null?void 0:k.toLowerCase(),R=[(g=V.code)==null?void 0:g.toLowerCase(),q].filter(Boolean);q&&(x?n.add(q):n.delete(q));for(const I of R)s.add(I),p(I,x);q==="meta"&&!x?(h.forEach(I=>{n.delete(I),p(I,!1)}),h.clear()):typeof V.getModifierState=="function"&&V.getModifierState("Meta")&&x&&[...n,...R].forEach(I=>h.add(I))}Rt(a,"keydown",V=>(v(V,!0),c(V)),{passive:r}),Rt(a,"keyup",V=>(v(V,!1),c(V)),{passive:r}),Rt("blur",f,{passive:!0}),Rt("focus",f,{passive:!0});const u=new Proxy(d,{get(V,x,k){if(typeof x!="string")return Reflect.get(V,x,k);if(x=x.toLowerCase(),x in i&&(x=i[x]),!(x in d))if(/[+_-]/.test(x)){const q=x.split(/[+_-]/g).map(T=>T.trim());d[x]=N(()=>q.every(T=>a1(u[T])))}else d[x]=G(!1);const g=Reflect.get(V,x,k);return e?a1(g):g}});return u}const np={page:t=>[t.pageX,t.pageY],client:t=>[t.clientX,t.clientY],screen:t=>[t.screenX,t.screenY],movement:t=>t instanceof Touch?null:[t.movementX,t.movementY]};function pK(t={}){const{type:e="page",touch:a=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:c=r1,target:n=c,eventFilter:l}=t,d=G(r.x),h=G(r.y),s=G(null),p=typeof e=="function"?e:np[e],f=k=>{const g=p(k);g&&([d.value,h.value]=g,s.value="mouse")},v=k=>{if(k.touches.length>0){const g=p(k.touches[0]);g&&([d.value,h.value]=g,s.value="touch")}},u=()=>{d.value=r.x,h.value=r.y},V=l?k=>l(()=>f(k),{}):k=>f(k),x=l?k=>l(()=>v(k),{}):k=>v(k);return n&&(Rt(n,"mousemove",V,{passive:!0}),Rt(n,"dragover",V,{passive:!0}),a&&e!=="movement"&&(Rt(n,"touchstart",x,{passive:!0}),Rt(n,"touchmove",x,{passive:!0}),i&&Rt(n,"touchend",u,{passive:!0}))),{x:d,y:h,sourceType:s}}function lp(t,e={}){const a=Nr(t),{threshold:i=50,onSwipe:r,onSwipeEnd:c,onSwipeStart:n}=e,l=Pt({x:0,y:0}),d=(I,F)=>{l.x=I,l.y=F},h=Pt({x:0,y:0}),s=(I,F)=>{h.x=I,h.y=F},p=N(()=>l.x-h.x),f=N(()=>l.y-h.y),{max:v,abs:u}=Math,V=N(()=>v(u(p.value),u(f.value))>=i),x=G(!1),k=G(!1),g=N(()=>V.value?u(p.value)>u(f.value)?p.value>0?"left":"right":f.value>0?"up":"down":"none"),q=I=>{var F,w,L;const et=I.buttons===0,ht=I.buttons===1;return(L=(w=(F=e.pointerTypes)==null?void 0:F.includes(I.pointerType))!=null?w:et||ht)!=null?L:!0},T=[Rt(t,"pointerdown",I=>{var F,w;if(!q(I))return;k.value=!0,(w=(F=a.value)==null?void 0:F.style)==null||w.setProperty("touch-action","none");const L=I.target;L==null||L.setPointerCapture(I.pointerId);const{clientX:et,clientY:ht}=I;d(et,ht),s(et,ht),n==null||n(I)}),Rt(t,"pointermove",I=>{if(!q(I)||!k.value)return;const{clientX:F,clientY:w}=I;s(F,w),!x.value&&V.value&&(x.value=!0),x.value&&(r==null||r(I))}),Rt(t,"pointerup",I=>{var F,w;q(I)&&(x.value&&(c==null||c(I,g.value)),k.value=!1,x.value=!1,(w=(F=a.value)==null?void 0:F.style)==null||w.setProperty("touch-action","initial"))})],R=()=>T.forEach(I=>I());return{isSwiping:ae(x),direction:ae(g),posStart:ae(l),posEnd:ae(h),distanceX:p,distanceY:f,stop:R}}let dp=0;function fK(t,e={}){const a=G(!1),{document:i=Fr,immediate:r=!0,manual:c=!1,id:n=`vueuse_styletag_${++dp}`}=e,l=G(t);let d=()=>{};const h=()=>{if(!i)return;const p=i.getElementById(n)||i.createElement("style");p.isConnected||(p.type="text/css",p.id=n,e.media&&(p.media=e.media),i.head.appendChild(p)),!a.value&&(d=ut(l,f=>{p.textContent=f},{immediate:!0}),a.value=!0)},s=()=>{!i||!a.value||(d(),i.head.removeChild(i.getElementById(n)),a.value=!1)};return r&&!c&&Kr(h),c||ye(s),{id:n,css:l,unload:s,load:h,isLoaded:ae(a)}}var hp=Object.defineProperty,J8=Object.getOwnPropertySymbols,sp=Object.prototype.hasOwnProperty,op=Object.prototype.propertyIsEnumerable,j8=(t,e,a)=>e in t?hp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,pp=(t,e)=>{for(var a in e||(e={}))sp.call(e,a)&&j8(t,a,e[a]);if(J8)for(var a of J8(e))op.call(e,a)&&j8(t,a,e[a]);return t};function vK(t={}){const{controls:e=!1,offset:a=0,immediate:i=!0,interval:r="requestAnimationFrame",callback:c}=t,n=G(Li()+a),l=()=>n.value=Li()+a,d=c?()=>{l(),c(n.value)}:l,h=r==="requestAnimationFrame"?Uo(d,{immediate:i}):fo(d,r,{immediate:i});return e?pp({timestamp:n},h):n}function ie(t,e,a,i={}){var r,c,n;const{clone:l=!1,passive:d=!1,eventName:h,deep:s=!1,defaultValue:p,shouldEmit:f}=i,v=K1(),u=a||(v==null?void 0:v.emit)||((r=v==null?void 0:v.$emit)==null?void 0:r.bind(v))||((n=(c=v==null?void 0:v.proxy)==null?void 0:c.$emit)==null?void 0:n.bind(v==null?void 0:v.proxy));let V=h;e||(e="modelValue"),V=V||`update:${e.toString()}`;const x=q=>l?typeof l=="function"?l(q):Xo(q):q,k=()=>Ys(t[e])?x(t[e]):p,g=q=>{f?f(q)&&u(V,q):u(V,q)};if(d){const q=k(),T=G(q);return ut(()=>t[e],R=>T.value=x(R)),ut(T,R=>{(R!==t[e]||s)&&g(R)},{deep:s}),T}else return N({get(){return k()},set(q){g(q)}})}function uK({window:t=r1}={}){if(!t)return G(!1);const e=G(t.document.hasFocus());return Rt(t,"blur",()=>{e.value=!1}),Rt(t,"focus",()=>{e.value=!0}),e}function fp(t={}){const{window:e=r1,initialWidth:a=1/0,initialHeight:i=1/0,listenOrientation:r=!0,includeScrollbar:c=!0}=t,n=G(a),l=G(i),d=()=>{e&&(c?(n.value=e.innerWidth,l.value=e.innerHeight):(n.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight))};if(d(),Kr(d),Rt("resize",d,{passive:!0}),r){const h=n2("(orientation: portrait)");ut(h,()=>d())}return{width:n,height:l}}function vp(){return Ar().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ar(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const up=typeof Proxy=="function",mp="devtools-plugin:setup",qp="plugin:settings:set";let U2,zi;function bp(){var t;return U2!==void 0||(typeof window<"u"&&window.performance?(U2=!0,zi=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(U2=!0,zi=global.perf_hooks.performance):U2=!1),U2}function Vp(){return bp()?zi.now():Date.now()}class yp{constructor(e,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=a;const i={};if(e.settings)for(const n in e.settings){const l=e.settings[n];i[n]=l.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let c=Object.assign({},i);try{const n=localStorage.getItem(r),l=JSON.parse(n);Object.assign(c,l)}catch{}this.fallbacks={getSettings(){return c},setSettings(n){try{localStorage.setItem(r,JSON.stringify(n))}catch{}c=n},now(){return Vp()}},a&&a.on(qp,(n,l)=>{n===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(n,l)=>this.target?this.target.on[l]:(...d)=>{this.onQueue.push({method:l,args:d})}}),this.proxiedTarget=new Proxy({},{get:(n,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...d)=>(this.targetQueue.push({method:l,args:d,resolve:()=>{}}),this.fallbacks[l](...d)):(...d)=>new Promise(h=>{this.targetQueue.push({method:l,args:d,resolve:h})})})}async setRealTarget(e){this.target=e;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function kp(t,e){const a=t,i=Ar(),r=vp(),c=up&&a.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!c))r.emit(mp,t,e);else{const n=c?new yp(a,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:e,proxy:n}),n&&e(n.proxiedTarget)}}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const me=typeof window<"u";function xp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Jt=Object.assign;function B3(t,e){const a={};for(const i in e){const r=e[i];a[i]=N1(r)?r.map(t):t(r)}return a}const ga=()=>{},N1=Array.isArray;function Et(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const gp=/\/$/,Rp=t=>t.replace(gp,"");function D3(t,e,a="/"){let i,r={},c="",n="";const l=e.indexOf("#");let d=e.indexOf("?");return l<d&&l>=0&&(d=-1),d>-1&&(i=e.slice(0,d),c=e.slice(d+1,l>-1?l:e.length),r=t(c)),l>-1&&(i=i||e.slice(0,l),n=e.slice(l,e.length)),i=Ip(i??e,a),{fullPath:i+(c&&"?")+c+n,path:i,query:r,hash:n}}function Tp(t,e){const a=e.query?t(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function F8(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function A8(t,e,a){const i=e.matched.length-1,r=a.matched.length-1;return i>-1&&i===r&&He(e.matched[i],a.matched[r])&&Or(e.params,a.params)&&t(e.query)===t(a.query)&&e.hash===a.hash}function He(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Or(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const a in t)if(!Sp(t[a],e[a]))return!1;return!0}function Sp(t,e){return N1(t)?O8(t,e):N1(e)?O8(e,t):t===e}function O8(t,e){return N1(e)?t.length===e.length&&t.every((a,i)=>a===e[i]):t.length===1&&t[0]===e}function Ip(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return Et(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const a=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let c=a.length-1,n,l;for(n=0;n<i.length;n++)if(l=i[n],l!==".")if(l==="..")c>1&&c--;else break;return a.slice(0,c).join("/")+"/"+i.slice(n-(n===i.length?1:0)).join("/")}var La;(function(t){t.pop="pop",t.push="push"})(La||(La={}));var Ra;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ra||(Ra={}));function Ep(t){if(!t)if(me){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rp(t)}const wp=/^[^#]+#/;function Up(t,e){return t.replace(wp,"#")+e}function Np(t,e){const a=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-a.left-(e.left||0),top:i.top-a.top-(e.top||0)}}const x3=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kp(t){let e;if("el"in t){const a=t.el,i=typeof a=="string"&&a.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const c=document.querySelector(t.el);if(i&&c){Et(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Et(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const r=typeof a=="string"?i?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!r){Et(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=Np(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function M8(t,e){return(history.state?history.state.position-e:-1)+t}const Wi=new Map;function Xp(t,e){Wi.set(t,e)}function Jp(t){const e=Wi.get(t);return Wi.delete(t),e}let jp=()=>location.protocol+"//"+location.host;function Mr(t,e){const{pathname:a,search:i,hash:r}=e,c=t.indexOf("#");if(c>-1){let l=r.includes(t.slice(c))?t.slice(c).length:1,d=r.slice(l);return d[0]!=="/"&&(d="/"+d),F8(d,"")}return F8(a,t)+i+r}function Fp(t,e,a,i){let r=[],c=[],n=null;const l=({state:f})=>{const v=Mr(t,location),u=a.value,V=e.value;let x=0;if(f){if(a.value=v,e.value=f,n&&n===u){n=null;return}x=V?f.position-V.position:0}else i(v);r.forEach(k=>{k(a.value,u,{delta:x,type:La.pop,direction:x?x>0?Ra.forward:Ra.back:Ra.unknown})})};function d(){n=a.value}function h(f){r.push(f);const v=()=>{const u=r.indexOf(f);u>-1&&r.splice(u,1)};return c.push(v),v}function s(){const{history:f}=window;f.state&&f.replaceState(Jt({},f.state,{scroll:x3()}),"")}function p(){for(const f of c)f();c=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:d,listen:h,destroy:p}}function L8(t,e,a,i=!1,r=!1){return{back:t,current:e,forward:a,replaced:i,position:window.history.length,scroll:r?x3():null}}function Ap(t){const{history:e,location:a}=window,i={value:Mr(t,a)},r={value:e.state};r.value||c(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function c(d,h,s){const p=t.indexOf("#"),f=p>-1?(a.host&&document.querySelector("base")?t:t.slice(p))+d:jp()+t+d;try{e[s?"replaceState":"pushState"](h,"",f),r.value=h}catch(v){Et("Error with push/replace State",v),a[s?"replace":"assign"](f)}}function n(d,h){const s=Jt({},e.state,L8(r.value.back,d,r.value.forward,!0),h,{position:r.value.position});c(d,s,!0),i.value=d}function l(d,h){const s=Jt({},r.value,e.state,{forward:d,scroll:x3()});e.state||Et(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),c(s.current,s,!0);const p=Jt({},L8(i.value,d,null),{position:s.position+1},h);c(d,p,!1),i.value=d}return{location:i,state:r,push:l,replace:n}}function Op(t){t=Ep(t);const e=Ap(t),a=Fp(t,e.state,e.location,e.replace);function i(c,n=!0){n||a.pauseListeners(),history.go(c)}const r=Jt({location:"",base:t,go:i,createHref:Up.bind(null,t)},e,a);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Mp(t){return typeof t=="string"||t&&typeof t=="object"}function Lr(t){return typeof t=="string"||typeof t=="symbol"}const Ee={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zr=Symbol("navigation failure");var z8;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(z8||(z8={}));const Lp={[1]({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},[2]({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${Wp(e)}" via a navigation guard.`},[4]({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},[8]({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},[16]({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function C2(t,e){return Jt(new Error(Lp[t](e)),{type:t,[zr]:!0},e)}function oe(t,e){return t instanceof Error&&zr in t&&(e==null||!!(t.type&e))}const zp=["params","query","hash"];function Wp(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const a of zp)a in t&&(e[a]=t[a]);return JSON.stringify(e,null,2)}const W8="[^/]+?",Cp={sensitive:!1,strict:!1,start:!0,end:!0},Qp=/[.+*?^${}()[\]/\\]/g;function Hp(t,e){const a=Jt({},Cp,e),i=[];let r=a.start?"^":"";const c=[];for(const h of t){const s=h.length?[]:[90];a.strict&&!h.length&&(r+="/");for(let p=0;p<h.length;p++){const f=h[p];let v=40+(a.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(Qp,"\\$&"),v+=40;else if(f.type===1){const{value:u,repeatable:V,optional:x,regexp:k}=f;c.push({name:u,repeatable:V,optional:x});const g=k||W8;if(g!==W8){v+=10;try{new RegExp(`(${g})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${u}" (${g}): `+T.message)}}let q=V?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;p||(q=x&&h.length<2?`(?:/${q})`:"/"+q),x&&(q+="?"),r+=q,v+=20,x&&(v+=-8),V&&(v+=-20),g===".*"&&(v+=-50)}s.push(v)}i.push(s)}if(a.strict&&a.end){const h=i.length-1;i[h][i[h].length-1]+=.7000000000000001}a.strict||(r+="/?"),a.end?r+="$":a.strict&&(r+="(?:/|$)");const n=new RegExp(r,a.sensitive?"":"i");function l(h){const s=h.match(n),p={};if(!s)return null;for(let f=1;f<s.length;f++){const v=s[f]||"",u=c[f-1];p[u.name]=v&&u.repeatable?v.split("/"):v}return p}function d(h){let s="",p=!1;for(const f of t){(!p||!s.endsWith("/"))&&(s+="/"),p=!1;for(const v of f)if(v.type===0)s+=v.value;else if(v.type===1){const{value:u,repeatable:V,optional:x}=v,k=u in h?h[u]:"";if(N1(k)&&!V)throw new Error(`Provided param "${u}" is an array but it is not repeatable (* or + modifiers)`);const g=N1(k)?k.join("/"):k;if(!g)if(x)f.length<2&&(s.endsWith("/")?s=s.slice(0,-1):p=!0);else throw new Error(`Missing required param "${u}"`);s+=g}}return s||"/"}return{re:n,score:i,keys:c,parse:l,stringify:d}}function Zp(t,e){let a=0;for(;a<t.length&&a<e.length;){const i=e[a]-t[a];if(i)return i;a++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gp(t,e){let a=0;const i=t.score,r=e.score;for(;a<i.length&&a<r.length;){const c=Zp(i[a],r[a]);if(c)return c;a++}if(Math.abs(r.length-i.length)===1){if(C8(i))return 1;if(C8(r))return-1}return r.length-i.length}function C8(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pp={type:0,value:""},Yp=/[a-zA-Z0-9_]/;function Bp(t){if(!t)return[[]];if(t==="/")return[[Pp]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(v){throw new Error(`ERR (${a})/"${h}": ${v}`)}let a=0,i=a;const r=[];let c;function n(){c&&r.push(c),c=[]}let l=0,d,h="",s="";function p(){h&&(a===0?c.push({type:0,value:h}):a===1||a===2||a===3?(c.length>1&&(d==="*"||d==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:h,regexp:s,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):e("Invalid state to consume buffer"),h="")}function f(){h+=d}for(;l<t.length;){if(d=t[l++],d==="\\"&&a!==2){i=a,a=4;continue}switch(a){case 0:d==="/"?(h&&p(),n()):d===":"?(p(),a=1):f();break;case 4:f(),a=i;break;case 1:d==="("?a=2:Yp.test(d)?f():(p(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&l--);break;case 2:d===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+d:a=3:s+=d;break;case 3:p(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&l--,s="";break;default:e("Unknown state");break}}return a===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),n(),r}function Dp(t,e,a){const i=Hp(Bp(t.path),a);{const c=new Set;for(const n of i.keys)c.has(n.name)&&Et(`Found duplicated params with name "${n.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),c.add(n.name)}const r=Jt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function _p(t,e){const a=[],i=new Map;e=Z8({strict:!1,end:!0,sensitive:!1},e);function r(s){return i.get(s)}function c(s,p,f){const v=!f,u=$p(s);rf(u,p),u.aliasOf=f&&f.record;const V=Z8(e,s),x=[u];if("alias"in s){const q=typeof s.alias=="string"?[s.alias]:s.alias;for(const T of q)x.push(Jt({},u,{components:f?f.record.components:u.components,path:T,aliasOf:f?f.record:u}))}let k,g;for(const q of x){const{path:T}=q;if(p&&T[0]!=="/"){const R=p.record.path,I=R[R.length-1]==="/"?"":"/";q.path=p.record.path+(T&&I+T)}if(q.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(k=Dp(q,p,V),p&&T[0]==="/"&&cf(k,p),f?(f.alias.push(k),af(f,k)):(g=g||k,g!==k&&g.alias.push(k),v&&s.name&&!H8(k)&&n(s.name)),u.children){const R=u.children;for(let I=0;I<R.length;I++)c(R[I],k,f&&f.children[I])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&d(k)}return g?()=>{n(g)}:ga}function n(s){if(Lr(s)){const p=i.get(s);p&&(i.delete(s),a.splice(a.indexOf(p),1),p.children.forEach(n),p.alias.forEach(n))}else{const p=a.indexOf(s);p>-1&&(a.splice(p,1),s.record.name&&i.delete(s.record.name),s.children.forEach(n),s.alias.forEach(n))}}function l(){return a}function d(s){let p=0;for(;p<a.length&&Gp(s,a[p])>=0&&(s.record.path!==a[p].record.path||!Wr(s,a[p]));)p++;a.splice(p,0,s),s.record.name&&!H8(s)&&i.set(s.record.name,s)}function h(s,p){let f,v={},u,V;if("name"in s&&s.name){if(f=i.get(s.name),!f)throw C2(1,{location:s});{const g=Object.keys(s.params||{}).filter(q=>!f.keys.find(T=>T.name===q));g.length&&Et(`Discarded invalid param(s) "${g.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}V=f.record.name,v=Jt(Q8(p.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),s.params&&Q8(s.params,f.keys.map(g=>g.name))),u=f.stringify(v)}else if("path"in s)u=s.path,u.startsWith("/")||Et(`The Matcher cannot resolve relative paths but received "${u}". Unless you directly called \`matcher.resolve("${u}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=a.find(g=>g.re.test(u)),f&&(v=f.parse(u),V=f.record.name);else{if(f=p.name?i.get(p.name):a.find(g=>g.re.test(p.path)),!f)throw C2(1,{location:s,currentLocation:p});V=f.record.name,v=Jt({},p.params,s.params),u=f.stringify(v)}const x=[];let k=f;for(;k;)x.unshift(k.record),k=k.parent;return{name:V,path:u,params:v,matched:x,meta:ef(x)}}return t.forEach(s=>c(s)),{addRoute:c,resolve:h,removeRoute:n,getRoutes:l,getRecordMatcher:r}}function Q8(t,e){const a={};for(const i of e)i in t&&(a[i]=t[i]);return a}function $p(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function tf(t){const e={},a=t.props||!1;if("component"in t)e.default=a;else for(const i in t.components)e[i]=typeof a=="boolean"?a:a[i];return e}function H8(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ef(t){return t.reduce((e,a)=>Jt(e,a.meta),{})}function Z8(t,e){const a={};for(const i in t)a[i]=i in e?e[i]:t[i];return a}function Ci(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function af(t,e){for(const a of t.keys)if(!a.optional&&!e.keys.find(Ci.bind(null,a)))return Et(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${a.name}"`);for(const a of e.keys)if(!a.optional&&!t.keys.find(Ci.bind(null,a)))return Et(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${a.name}"`)}function rf(t,e){e&&e.record.name&&!t.name&&!t.path&&Et(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function cf(t,e){for(const a of e.keys)if(!t.keys.find(Ci.bind(null,a)))return Et(`Absolute path "${t.record.path}" must have the exact same param named "${a.name}" as its parent "${e.record.path}".`)}function Wr(t,e){return e.children.some(a=>a===t||Wr(t,a))}const Cr=/#/g,nf=/&/g,lf=/\//g,df=/=/g,hf=/\?/g,Qr=/\+/g,sf=/%5B/g,of=/%5D/g,Hr=/%5E/g,pf=/%60/g,Zr=/%7B/g,ff=/%7C/g,Gr=/%7D/g,vf=/%20/g;function C5(t){return encodeURI(""+t).replace(ff,"|").replace(sf,"[").replace(of,"]")}function uf(t){return C5(t).replace(Zr,"{").replace(Gr,"}").replace(Hr,"^")}function Qi(t){return C5(t).replace(Qr,"%2B").replace(vf,"+").replace(Cr,"%23").replace(nf,"%26").replace(pf,"`").replace(Zr,"{").replace(Gr,"}").replace(Hr,"^")}function mf(t){return Qi(t).replace(df,"%3D")}function qf(t){return C5(t).replace(Cr,"%23").replace(hf,"%3F")}function bf(t){return t==null?"":qf(t).replace(lf,"%2F")}function za(t){try{return decodeURIComponent(""+t)}catch{Et(`Error decoding "${t}". Using original value`)}return""+t}function Vf(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const c=i[r].replace(Qr," "),n=c.indexOf("="),l=za(n<0?c:c.slice(0,n)),d=n<0?null:za(c.slice(n+1));if(l in e){let h=e[l];N1(h)||(h=e[l]=[h]),h.push(d)}else e[l]=d}return e}function G8(t){let e="";for(let a in t){const i=t[a];if(a=mf(a),i==null){i!==void 0&&(e+=(e.length?"&":"")+a);continue}(N1(i)?i.map(c=>c&&Qi(c)):[i&&Qi(i)]).forEach(c=>{c!==void 0&&(e+=(e.length?"&":"")+a,c!=null&&(e+="="+c))})}return e}function yf(t){const e={};for(const a in t){const i=t[a];i!==void 0&&(e[a]=N1(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const kf=Symbol("router view location matched"),P8=Symbol("router view depth"),Q5=Symbol("router"),Pr=Symbol("route location"),Hi=Symbol("router view location");function na(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function a(){t=[]}return{add:e,list:()=>t,reset:a}}function Ke(t,e,a,i,r){const c=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((n,l)=>{const d=p=>{p===!1?l(C2(4,{from:a,to:e})):p instanceof Error?l(p):Mp(p)?l(C2(2,{from:e,to:p})):(c&&i.enterCallbacks[r]===c&&typeof p=="function"&&c.push(p),n())},h=t.call(i&&i.instances[r],e,a,xf(d,e,a));let s=Promise.resolve(h);if(t.length<3&&(s=s.then(d)),t.length>2){const p=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof h=="object"&&"then"in h)s=s.then(f=>d._called?f:(Et(p),Promise.reject(new Error("Invalid navigation guard"))));else if(h!==void 0&&!d._called){Et(p),l(new Error("Invalid navigation guard"));return}}s.catch(p=>l(p))})}function xf(t,e,a){let i=0;return function(){i++===1&&Et(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function _3(t,e,a,i){const r=[];for(const c of t){!c.components&&!c.children.length&&Et(`Record with path "${c.path}" is either missing a "component(s)" or "children" property.`);for(const n in c.components){let l=c.components[n];{if(!l||typeof l!="object"&&typeof l!="function")throw Et(`Component "${n}" in record with path "${c.path}" is not a valid component. Received "${String(l)}".`),new Error("Invalid route component");if("then"in l){Et(`Component "${n}" in record with path "${c.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const d=l;l=()=>d}else l.__asyncLoader&&!l.__warnedDefineAsync&&(l.__warnedDefineAsync=!0,Et(`Component "${n}" in record with path "${c.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!c.instances[n]))if(gf(l)){const h=(l.__vccOpts||l)[e];h&&r.push(Ke(h,a,i,c,n))}else{let d=l();"catch"in d||(Et(`Component "${n}" in record with path "${c.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),d=Promise.resolve(d)),r.push(()=>d.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${c.path}"`));const s=xp(h)?h.default:h;c.components[n]=s;const f=(s.__vccOpts||s)[e];return f&&Ke(f,a,i,c,n)()}))}}}return r}function gf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Y8(t){const e=H(Q5),a=H(Pr),i=N(()=>e.resolve(U(t.to))),r=N(()=>{const{matched:d}=i.value,{length:h}=d,s=d[h-1],p=a.matched;if(!s||!p.length)return-1;const f=p.findIndex(He.bind(null,s));if(f>-1)return f;const v=B8(d[h-2]);return h>1&&B8(s)===v&&p[p.length-1].path!==v?p.findIndex(He.bind(null,d[h-2])):f}),c=N(()=>r.value>-1&&If(a.params,i.value.params)),n=N(()=>r.value>-1&&r.value===a.matched.length-1&&Or(a.params,i.value.params));function l(d={}){return Sf(d)?e[U(t.replace)?"replace":"push"](U(t.to)).catch(ga):Promise.resolve()}if(me){const d=K1();if(d){const h={route:i.value,isActive:c.value,isExactActive:n.value};d.__vrl_devtools=d.__vrl_devtools||[],d.__vrl_devtools.push(h),Z2(()=>{h.route=i.value,h.isActive=c.value,h.isExactActive=n.value},{flush:"post"})}}return{route:i,href:N(()=>i.value.href),isActive:c,isExactActive:n,navigate:l}}const Rf=jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Y8,setup(t,{slots:e}){const a=Pt(Y8(t)),{options:i}=H(Q5),r=N(()=>({[D8(t.activeClass,i.linkActiveClass,"router-link-active")]:a.isActive,[D8(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const c=e.default&&e.default(a);return t.custom?c:i1("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:r.value},c)}}}),Tf=Rf;function Sf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function If(t,e){for(const a in e){const i=e[a],r=t[a];if(typeof i=="string"){if(i!==r)return!1}else if(!N1(r)||r.length!==i.length||i.some((c,n)=>c!==r[n]))return!1}return!0}function B8(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const D8=(t,e,a)=>t??e??a,Ef=jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:a}){Uf();const i=H(Hi),r=N(()=>t.route||i.value),c=H(P8,0),n=N(()=>{let h=U(c);const{matched:s}=r.value;let p;for(;(p=s[h])&&!p.components;)h++;return h}),l=N(()=>r.value.matched[n.value]);E1(P8,N(()=>n.value+1)),E1(kf,l),E1(Hi,r);const d=G();return ut(()=>[d.value,l.value,t.name],([h,s,p],[f,v,u])=>{s&&(s.instances[p]=h,v&&v!==s&&h&&h===f&&(s.leaveGuards.size||(s.leaveGuards=v.leaveGuards),s.updateGuards.size||(s.updateGuards=v.updateGuards))),h&&s&&(!v||!He(s,v)||!f)&&(s.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=r.value,s=t.name,p=l.value,f=p&&p.components[s];if(!f)return _8(a.default,{Component:f,route:h});const v=p.props[s],u=v?v===!0?h.params:typeof v=="function"?v(h):v:null,x=i1(f,Jt({},u,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(p.instances[s]=null)},ref:d}));if(me&&x.ref){const k={depth:n.value,name:p.name,path:p.path,meta:p.meta};(N1(x.ref)?x.ref.map(q=>q.i):[x.ref.i]).forEach(q=>{q.__vrv_devtools=k})}return _8(a.default,{Component:x,route:h})||x}}});function _8(t,e){if(!t)return null;const a=t(e);return a.length===1?a[0]:a}const wf=Ef;function Uf(){const t=K1(),e=t.parent&&t.parent.type.name,a=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof a=="object"&&a.name==="RouterView"){const i=e==="KeepAlive"?"keep-alive":"transition";Et(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${i}>
    <component :is="Component" />
  </${i}>
</router-view>`)}}function la(t,e){const a=Jt({},t,{matched:t.matched.map(i=>Mf(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:a}}}function V6(t){return{_custom:{display:t}}}let Nf=0;function Kf(t,e,a){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=Nf++;kp({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},r=>{typeof r.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),r.on.inspectComponent((s,p)=>{s.instanceData&&s.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:la(e.currentRoute.value,"Current Route")})}),r.on.visitComponentTree(({treeNode:s,componentInstance:p})=>{if(p.__vrv_devtools){const f=p.__vrv_devtools;s.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Yr})}N1(p.__vrl_devtools)&&(p.__devtoolsApi=r,p.__vrl_devtools.forEach(f=>{let v=_r,u="";f.isExactActive?(v=Dr,u="This is exactly active"):f.isActive&&(v=Br,u="This link is active"),s.tags.push({label:f.route.path,textColor:0,tooltip:u,backgroundColor:v})}))}),ut(e.currentRoute,()=>{d(),r.notifyComponentUpdate(),r.sendInspectorTree(l),r.sendInspectorState(l)});const c="router:navigations:"+i;r.addTimelineLayer({id:c,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((s,p)=>{r.addTimelineEvent({layerId:c,event:{title:"Error during Navigation",subtitle:p.fullPath,logType:"error",time:r.now(),data:{error:s},groupId:p.meta.__navigationId}})});let n=0;e.beforeEach((s,p)=>{const f={guard:V6("beforeEach"),from:la(p,"Current Location during this navigation"),to:la(s,"Target location")};Object.defineProperty(s.meta,"__navigationId",{value:n++}),r.addTimelineEvent({layerId:c,event:{time:r.now(),title:"Start of navigation",subtitle:s.fullPath,data:f,groupId:s.meta.__navigationId}})}),e.afterEach((s,p,f)=>{const v={guard:V6("afterEach")};f?(v.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},v.status=V6("❌")):v.status=V6("✅"),v.from=la(p,"Current Location during this navigation"),v.to=la(s,"Target location"),r.addTimelineEvent({layerId:c,event:{title:"End of navigation",subtitle:s.fullPath,time:r.now(),data:v,logType:f?"warning":"default",groupId:s.meta.__navigationId}})});const l="router-inspector:"+i;r.addInspector({id:l,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function d(){if(!h)return;const s=h;let p=a.getRoutes().filter(f=>!f.parent);p.forEach(ec),s.filter&&(p=p.filter(f=>Zi(f,s.filter.toLowerCase()))),p.forEach(f=>tc(f,e.currentRoute.value)),s.rootNodes=p.map($r)}let h;r.on.getInspectorTree(s=>{h=s,s.app===t&&s.inspectorId===l&&d()}),r.on.getInspectorState(s=>{if(s.app===t&&s.inspectorId===l){const f=a.getRoutes().find(v=>v.record.__vd_id===s.nodeId);f&&(s.state={options:Jf(f)})}}),r.sendInspectorTree(l),r.sendInspectorState(l)})}function Xf(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function Jf(t){const{record:e}=t,a=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&a.push({editable:!1,key:"name",value:e.name}),a.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${Xf(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&a.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&a.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&a.push({editable:!1,key:"meta",value:t.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),a}const Yr=15485081,Br=2450411,Dr=8702998,jf=2282478,_r=16486972,Ff=6710886;function $r(t){const e=[],{record:a}=t;a.name!=null&&e.push({label:String(a.name),textColor:0,backgroundColor:jf}),a.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:_r}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Yr}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Dr}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Br}),a.redirect&&e.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:Ff});let i=a.__vd_id;return i==null&&(i=String(Af++),a.__vd_id=i),{id:i,label:a.path,tags:e,children:t.children.map($r)}}let Af=0;const Of=/^\/(.*)\/([a-z]*)$/;function tc(t,e){const a=e.matched.length&&He(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=a,a||(t.__vd_active=e.matched.some(i=>He(i,t.record))),t.children.forEach(i=>tc(i,e))}function ec(t){t.__vd_match=!1,t.children.forEach(ec)}function Zi(t,e){const a=String(t.re).match(Of);if(t.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(e))return t.children.forEach(n=>Zi(n,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const r=t.record.path.toLowerCase(),c=za(r);return!e.startsWith("/")&&(c.includes(e)||r.includes(e))||c.startsWith(e)||r.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(n=>Zi(n,e))}function Mf(t,e){const a={};for(const i in t)e.includes(i)||(a[i]=t[i]);return a}function Lf(t){const e=_p(t.routes,t),a=t.parseQuery||Vf,i=t.stringifyQuery||G8,r=t.history;if(!r)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const c=na(),n=na(),l=na(),d=de(Ee);let h=Ee;me&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=B3.bind(null,E=>""+E),p=B3.bind(null,bf),f=B3.bind(null,za);function v(E,P){let B,$;return Lr(E)?(B=e.getRecordMatcher(E),$=P):$=E,e.addRoute($,B)}function u(E){const P=e.getRecordMatcher(E);P?e.removeRoute(P):Et(`Cannot remove non-existent route "${String(E)}"`)}function V(){return e.getRoutes().map(E=>E.record)}function x(E){return!!e.getRecordMatcher(E)}function k(E,P){if(P=Jt({},P||d.value),typeof E=="string"){const b=D3(a,E,P.path),S=e.resolve({path:b.path},P),J=r.createHref(b.fullPath);return J.startsWith("//")?Et(`Location "${E}" resolved to "${J}". A resolved location cannot start with multiple slashes.`):S.matched.length||Et(`No match found for location with path "${E}"`),Jt(b,S,{params:f(S.params),hash:za(b.hash),redirectedFrom:void 0,href:J})}let B;if("path"in E)"params"in E&&!("name"in E)&&Object.keys(E.params).length&&Et(`Path "${E.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),B=Jt({},E,{path:D3(a,E.path,P.path).path});else{const b=Jt({},E.params);for(const S in b)b[S]==null&&delete b[S];B=Jt({},E,{params:p(b)}),P.params=p(P.params)}const $=e.resolve(B,P),gt=E.hash||"";gt&&!gt.startsWith("#")&&Et(`A \`hash\` should always start with the character "#". Replace "${gt}" with "#${gt}".`),$.params=s(f($.params));const Lt=Tp(i,Jt({},E,{hash:uf(gt),path:$.path})),m=r.createHref(Lt);return m.startsWith("//")?Et(`Location "${E}" resolved to "${m}". A resolved location cannot start with multiple slashes.`):$.matched.length||Et(`No match found for location with path "${"path"in E?E.path:E}"`),Jt({fullPath:Lt,hash:gt,query:i===G8?yf(E.query):E.query||{}},$,{redirectedFrom:void 0,href:m})}function g(E){return typeof E=="string"?D3(a,E,d.value.path):Jt({},E)}function q(E,P){if(h!==E)return C2(8,{from:P,to:E})}function T(E){return F(E)}function R(E){return T(Jt(g(E),{replace:!0}))}function I(E){const P=E.matched[E.matched.length-1];if(P&&P.redirect){const{redirect:B}=P;let $=typeof B=="function"?B(E):B;if(typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=g($):{path:$},$.params={}),!("path"in $)&&!("name"in $))throw Et(`Invalid redirect found:
${JSON.stringify($,null,2)}
 when navigating to "${E.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Jt({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function F(E,P){const B=h=k(E),$=d.value,gt=E.state,Lt=E.force,m=E.replace===!0,b=I(B);if(b)return F(Jt(g(b),{state:typeof b=="object"?Jt({},gt,b.state):gt,force:Lt,replace:m}),P||B);const S=B;S.redirectedFrom=P;let J;return!Lt&&A8(i,$,B)&&(J=C2(16,{to:S,from:$}),X1($,$,!0,!1)),(J?Promise.resolve(J):et(S,$)).catch(K=>oe(K)?oe(K,2)?K:Ft(K):lt(K,S,$)).then(K=>{if(K){if(oe(K,2))return A8(i,k(K.to),S)&&P&&(P._count=P._count?P._count+1:1)>30?(Et(`Detected a possibly infinite redirection in a navigation guard when going from "${$.fullPath}" to "${S.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):F(Jt({replace:m},g(K.to),{state:typeof K.to=="object"?Jt({},gt,K.to.state):gt,force:Lt}),P||S)}else K=Z(S,$,!0,m,gt);return ht(S,$,K),K})}function w(E,P){const B=q(E,P);return B?Promise.reject(B):Promise.resolve()}function L(E){const P=D1.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(E):E()}function et(E,P){let B;const[$,gt,Lt]=zf(E,P);B=_3($.reverse(),"beforeRouteLeave",E,P);for(const b of $)b.leaveGuards.forEach(S=>{B.push(Ke(S,E,P))});const m=w.bind(null,E,P);return B.push(m),J1(B).then(()=>{B=[];for(const b of c.list())B.push(Ke(b,E,P));return B.push(m),J1(B)}).then(()=>{B=_3(gt,"beforeRouteUpdate",E,P);for(const b of gt)b.updateGuards.forEach(S=>{B.push(Ke(S,E,P))});return B.push(m),J1(B)}).then(()=>{B=[];for(const b of E.matched)if(b.beforeEnter&&!P.matched.includes(b))if(N1(b.beforeEnter))for(const S of b.beforeEnter)B.push(Ke(S,E,P));else B.push(Ke(b.beforeEnter,E,P));return B.push(m),J1(B)}).then(()=>(E.matched.forEach(b=>b.enterCallbacks={}),B=_3(Lt,"beforeRouteEnter",E,P),B.push(m),J1(B))).then(()=>{B=[];for(const b of n.list())B.push(Ke(b,E,P));return B.push(m),J1(B)}).catch(b=>oe(b,8)?b:Promise.reject(b))}function ht(E,P,B){for(const $ of l.list())L(()=>$(E,P,B))}function Z(E,P,B,$,gt){const Lt=q(E,P);if(Lt)return Lt;const m=P===Ee,b=me?history.state:{};B&&($||m?r.replace(E.fullPath,Jt({scroll:m&&b&&b.scroll},gt)):r.push(E.fullPath,gt)),d.value=E,X1(E,P,B,m),Ft()}let vt;function bt(){vt||(vt=r.listen((E,P,B)=>{if(!Ye.listening)return;const $=k(E),gt=I($);if(gt){F(Jt(gt,{replace:!0}),$).catch(ga);return}h=$;const Lt=d.value;me&&Xp(M8(Lt.fullPath,B.delta),x3()),et($,Lt).catch(m=>oe(m,12)?m:oe(m,2)?(F(m.to,$).then(b=>{oe(b,20)&&!B.delta&&B.type===La.pop&&r.go(-1,!1)}).catch(ga),Promise.reject()):(B.delta&&r.go(-B.delta,!1),lt(m,$,Lt))).then(m=>{m=m||Z($,Lt,!1),m&&(B.delta&&!oe(m,8)?r.go(-B.delta,!1):B.type===La.pop&&oe(m,20)&&r.go(-1,!1)),ht($,Lt,m)}).catch(ga)}))}let kt=na(),Mt=na(),_;function lt(E,P,B){Ft(E);const $=Mt.list();return $.length?$.forEach(gt=>gt(E,P,B)):(Et("uncaught error during route navigation:"),console.error(E)),Promise.reject(E)}function Tt(){return _&&d.value!==Ee?Promise.resolve():new Promise((E,P)=>{kt.add([E,P])})}function Ft(E){return _||(_=!E,bt(),kt.list().forEach(([P,B])=>E?B(E):P()),kt.reset()),E}function X1(E,P,B,$){const{scrollBehavior:gt}=t;if(!me||!gt)return Promise.resolve();const Lt=!B&&Jp(M8(E.fullPath,0))||($||!B)&&history.state&&history.state.scroll||null;return d1().then(()=>gt(E,P,Lt)).then(m=>m&&Kp(m)).catch(m=>lt(m,E,P))}const n1=E=>r.go(E);let V1;const D1=new Set,Ye={currentRoute:d,listening:!0,addRoute:v,removeRoute:u,hasRoute:x,getRoutes:V,resolve:k,options:t,push:T,replace:R,go:n1,back:()=>n1(-1),forward:()=>n1(1),beforeEach:c.add,beforeResolve:n.add,afterEach:l.add,onError:Mt.add,isReady:Tt,install(E){const P=this;E.component("RouterLink",Tf),E.component("RouterView",wf),E.config.globalProperties.$router=P,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>U(d)}),me&&!V1&&d.value===Ee&&(V1=!0,T(r.location).catch(gt=>{Et("Unexpected error when starting the router:",gt)}));const B={};for(const gt in Ee)B[gt]=N(()=>d.value[gt]);E.provide(Q5,P),E.provide(Pr,Pt(B)),E.provide(Hi,d);const $=E.unmount;D1.add(E),E.unmount=function(){D1.delete(E),D1.size<1&&(h=Ee,vt&&vt(),vt=null,d.value=Ee,V1=!1,_=!1),$()},me&&Kf(E,P,e)}};function J1(E){return E.reduce((P,B)=>P.then(()=>L(B)),Promise.resolve())}return Ye}function zf(t,e){const a=[],i=[],r=[],c=Math.max(e.matched.length,t.matched.length);for(let n=0;n<c;n++){const l=e.matched[n];l&&(t.matched.find(h=>He(h,l))?i.push(l):a.push(l));const d=t.matched[n];d&&(e.matched.find(h=>He(h,d))||r.push(d))}return[a,i,r]}const $3=G(!1),Ta=G(!1),J2=G(!1),Wf=G(!0),Gi=Ko({xs:460,...No}),V2=fp(),ac=cp(),Cf=N(()=>V2.height.value-V2.width.value/Ae>180),ic=ip(ke?document.body:null),Le=Eo(),Qf=N(()=>{var t,e;return["INPUT","TEXTAREA"].includes(((t=Le.value)==null?void 0:t.tagName)||"")||((e=Le.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),Hf=N(()=>{var t;return["BUTTON","A"].includes(((t=Le.value)==null?void 0:t.tagName)||"")});Y1("slidev-camera","default");Y1("slidev-mic","default");const E6=Y1("slidev-scale",0),u1=Y1("slidev-show-overview",!1),ti=Y1("slidev-presenter-cursor",!0),$8=Y1("slidev-show-editor",!1);Y1("slidev-editor-width",ke?window.innerWidth*.4:100);const rc=Xr(u1);function t4(t,e,a,i=r=>r){return t*i(.5-e*(.5-a))}function Zf(t){return[-t[0],-t[1]]}function Z1(t,e){return[t[0]+e[0],t[1]+e[1]]}function A1(t,e){return[t[0]-e[0],t[1]-e[1]]}function H1(t,e){return[t[0]*e,t[1]*e]}function Gf(t,e){return[t[0]/e,t[1]/e]}function da(t){return[t[1],-t[0]]}function e4(t,e){return t[0]*e[0]+t[1]*e[1]}function Pf(t,e){return t[0]===e[0]&&t[1]===e[1]}function Yf(t){return Math.hypot(t[0],t[1])}function Bf(t){return t[0]*t[0]+t[1]*t[1]}function a4(t,e){return Bf(A1(t,e))}function cc(t){return Gf(t,Yf(t))}function Df(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function ha(t,e,a){let i=Math.sin(a),r=Math.cos(a),c=t[0]-e[0],n=t[1]-e[1],l=c*r-n*i,d=c*i+n*r;return[l+e[0],d+e[1]]}function Pi(t,e,a){return Z1(t,H1(A1(e,t),a))}function i4(t,e,a){return Z1(t,H1(e,a))}var{min:N2,PI:_f}=Math,r4=.275,sa=_f+1e-4;function $f(t,e={}){let{size:a=16,smoothing:i=.5,thinning:r=.5,simulatePressure:c=!0,easing:n=_=>_,start:l={},end:d={},last:h=!1}=e,{cap:s=!0,easing:p=_=>_*(2-_)}=l,{cap:f=!0,easing:v=_=>--_*_*_+1}=d;if(t.length===0||a<=0)return[];let u=t[t.length-1].runningLength,V=l.taper===!1?0:l.taper===!0?Math.max(a,u):l.taper,x=d.taper===!1?0:d.taper===!0?Math.max(a,u):d.taper,k=Math.pow(a*i,2),g=[],q=[],T=t.slice(0,10).reduce((_,lt)=>{let Tt=lt.pressure;if(c){let Ft=N2(1,lt.distance/a),X1=N2(1,1-Ft);Tt=N2(1,_+(X1-_)*(Ft*r4))}return(_+Tt)/2},t[0].pressure),R=t4(a,r,t[t.length-1].pressure,n),I,F=t[0].vector,w=t[0].point,L=w,et=w,ht=L,Z=!1;for(let _=0;_<t.length;_++){let{pressure:lt}=t[_],{point:Tt,vector:Ft,distance:X1,runningLength:n1}=t[_];if(_<t.length-1&&u-n1<3)continue;if(r){if(c){let $=N2(1,X1/a),gt=N2(1,1-$);lt=N2(1,T+(gt-T)*($*r4))}R=t4(a,r,lt,n)}else R=a/2;I===void 0&&(I=R);let V1=n1<V?p(n1/V):1,D1=u-n1<x?v((u-n1)/x):1;R=Math.max(.01,R*Math.min(V1,D1));let Ye=(_<t.length-1?t[_+1]:t[_]).vector,J1=_<t.length-1?e4(Ft,Ye):1,E=e4(Ft,F)<0&&!Z,P=J1!==null&&J1<0;if(E||P){let $=H1(da(F),R);for(let gt=1/13,Lt=0;Lt<=1;Lt+=gt)et=ha(A1(Tt,$),Tt,sa*Lt),g.push(et),ht=ha(Z1(Tt,$),Tt,sa*-Lt),q.push(ht);w=et,L=ht,P&&(Z=!0);continue}if(Z=!1,_===t.length-1){let $=H1(da(Ft),R);g.push(A1(Tt,$)),q.push(Z1(Tt,$));continue}let B=H1(da(Pi(Ye,Ft,J1)),R);et=A1(Tt,B),(_<=1||a4(w,et)>k)&&(g.push(et),w=et),ht=Z1(Tt,B),(_<=1||a4(L,ht)>k)&&(q.push(ht),L=ht),T=lt,F=Ft}let vt=t[0].point.slice(0,2),bt=t.length>1?t[t.length-1].point.slice(0,2):Z1(t[0].point,[1,1]),kt=[],Mt=[];if(t.length===1){if(!(V||x)||h){let _=i4(vt,cc(da(A1(vt,bt))),-(I||R)),lt=[];for(let Tt=1/13,Ft=Tt;Ft<=1;Ft+=Tt)lt.push(ha(_,vt,sa*2*Ft));return lt}}else{if(!(V||x&&t.length===1))if(s)for(let lt=1/13,Tt=lt;Tt<=1;Tt+=lt){let Ft=ha(q[0],vt,sa*Tt);kt.push(Ft)}else{let lt=A1(g[0],q[0]),Tt=H1(lt,.5),Ft=H1(lt,.51);kt.push(A1(vt,Tt),A1(vt,Ft),Z1(vt,Ft),Z1(vt,Tt))}let _=da(Zf(t[t.length-1].vector));if(x||V&&t.length===1)Mt.push(bt);else if(f){let lt=i4(bt,_,R);for(let Tt=1/29,Ft=Tt;Ft<1;Ft+=Tt)Mt.push(ha(lt,bt,sa*3*Ft))}else Mt.push(Z1(bt,H1(_,R)),Z1(bt,H1(_,R*.99)),A1(bt,H1(_,R*.99)),A1(bt,H1(_,R)))}return g.concat(Mt,q.reverse(),kt)}function tv(t,e={}){var a;let{streamline:i=.5,size:r=16,last:c=!1}=e;if(t.length===0)return[];let n=.15+(1-i)*.85,l=Array.isArray(t[0])?t:t.map(({x:v,y:u,pressure:V=.5})=>[v,u,V]);if(l.length===2){let v=l[1];l=l.slice(0,-1);for(let u=1;u<5;u++)l.push(Pi(l[0],v,u/4))}l.length===1&&(l=[...l,[...Z1(l[0],[1,1]),...l[0].slice(2)]]);let d=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],h=!1,s=0,p=d[0],f=l.length-1;for(let v=1;v<l.length;v++){let u=c&&v===f?l[v].slice(0,2):Pi(p.point,l[v],n);if(Pf(p.point,u))continue;let V=Df(u,p.point);if(s+=V,v<f&&!h){if(s<r)continue;h=!0}p={point:u,pressure:l[v][2]>=0?l[v][2]:.5,vector:cc(A1(p.point,u)),distance:V,runningLength:s},d.push(p)}return d[0].vector=((a=d[1])==null?void 0:a.vector)||[0,0],d}function ev(t,e={}){return $f(tv(t,e),e)}var av=()=>({events:{},emit(t,...e){let a=this.events[t]||[];for(let i=0,r=a.length;i<r;i++)a[i](...e)},on(t,e){var a;return(a=this.events[t])!=null&&a.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(r=>e!==r)}}});function _6(t,e){return t-e}function iv(t){return t<0?-1:1}function $6(t){return[Math.abs(t),iv(t)]}function nc(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var rv=2,qe=rv,P2=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e;const a=this.drauu.el,i=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*i,y:(t.pageY-r.top)*i,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const c=r.matrixTransform((e=a.getScreenCTM())==null?void 0:e.inverse());return{x:c.x*i,y:c.y*i,pressure:t.pressure}}}createElement(t,e){const a=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?{...this.brush,...e}:this.brush;return a.setAttribute("fill",i.fill??"transparent"),a.setAttribute("stroke",i.color),a.setAttribute("stroke-width",i.size.toString()),a.setAttribute("stroke-linecap","round"),i.dasharray&&a.setAttribute("stroke-dasharray",i.dasharray),a}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(qe))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},cv=class extends P2{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const e=ev(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!e.length)return"";const a=e.reduce((i,[r,c],n,l)=>{const[d,h]=l[(n+1)%l.length];return i.push(r,c,(r+d)/2,(c+h)/2),i},["M",...e[0],"Q"]);return a.push("Z"),a.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},nv=class extends P2{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,a]=$6(t.x-this.start.x),[i,r]=$6(t.y-this.start.y);if(this.shiftPressed){const c=Math.min(e,i);e=c,i=c}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",i);else{const[c,n]=[this.start.x,this.start.x+e*a].sort(_6),[l,d]=[this.start.y,this.start.y+i*r].sort(_6);this.attr("cx",(c+n)/2),this.attr("cy",(l+d)/2),this.attr("rx",(n-c)/2),this.attr("ry",(d-l)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function lc(t,e){const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),i=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),i.setAttribute("id",t),i.setAttribute("viewBox","0 -5 10 10"),i.setAttribute("refX","5"),i.setAttribute("refY","0"),i.setAttribute("markerWidth","4"),i.setAttribute("markerHeight","4"),i.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),i.appendChild(r),a.appendChild(i),a}var lv=class extends P2{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=nc(),a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.append(lc(e,this.brush.color)),a.append(this.el),this.attr("marker-end",`url(#${e})`),a}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:a}=t;if(this.shiftPressed){const i=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let c=i/r;c=Math.round(c),Math.abs(c)<=1?(e=this.start.x+r*c,a=this.start.y+r):(e=this.start.x+i,a=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-a),this.attr("x2",e),this.attr("y2",a)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",a)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},dv=class extends P2{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,a]=$6(t.x-this.start.x),[i,r]=$6(t.y-this.start.y);if(this.shiftPressed){const c=Math.min(e,i);e=c,i=c}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-i),this.attr("width",e*2),this.attr("height",i*2);else{const[c,n]=[this.start.x,this.start.x+e*a].sort(_6),[l,d]=[this.start.y,this.start.y+i*r].sort(_6);this.attr("x",c),this.attr("y",l),this.attr("width",n-c),this.attr("height",d-l)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function hv(t,e){const a=t.x-e.x,i=t.y-e.y;return a*a+i*i}function sv(t,e,a){let i=e.x,r=e.y,c=a.x-i,n=a.y-r;if(c!==0||n!==0){const l=((t.x-i)*c+(t.y-r)*n)/(c*c+n*n);l>1?(i=a.x,r=a.y):l>0&&(i+=c*l,r+=n*l)}return c=t.x-i,n=t.y-r,c*c+n*n}function ov(t,e){let a=t[0];const i=[a];let r;for(let c=1,n=t.length;c<n;c++)r=t[c],hv(r,a)>e&&(i.push(r),a=r);return a!==r&&r&&i.push(r),i}function Yi(t,e,a,i,r){let c=i,n=0;for(let l=e+1;l<a;l++){const d=sv(t[l],t[e],t[a]);d>c&&(n=l,c=d)}c>i&&(n-e>1&&Yi(t,e,n,i,r),r.push(t[n]),a-n>1&&Yi(t,n,a,i,r))}function pv(t,e){const a=t.length-1,i=[t[0]];return Yi(t,0,a,e,i),i.push(t[a]),i}function c4(t,e,a=!1){if(t.length<=2)return t;const i=e!==void 0?e*e:1;return t=a?t:ov(t,i),t=pv(t,i),t}var fv=class extends P2{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=nc();const e=lc(this.arrowId,this.brush.color);this.el.appendChild(e)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=c4(this.points,1,!0),this.count=0),this.attr("d",l4(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",l4(c4(this.points,1,!0))),!t.getTotalLength()))}};function vv(t,e){const a=e.x-t.x,i=e.y-t.y;return{length:Math.sqrt(a**2+i**2),angle:Math.atan2(i,a)}}function n4(t,e,a,i){const r=e||t,c=a||t,n=.2,l=vv(r,c),d=l.angle+(i?Math.PI:0),h=l.length*n,s=t.x+Math.cos(d)*h,p=t.y+Math.sin(d)*h;return{x:s,y:p}}function uv(t,e,a){const i=n4(a[e-1],a[e-2],t),r=n4(t,a[e-1],a[e+1],!0);return`C ${i.x.toFixed(qe)},${i.y.toFixed(qe)} ${r.x.toFixed(qe)},${r.y.toFixed(qe)} ${t.x.toFixed(qe)},${t.y.toFixed(qe)}`}function l4(t){return t.reduce((e,a,i,r)=>i===0?`M ${a.x.toFixed(qe)},${a.y.toFixed(qe)}`:`${e} ${uv(a,i,r)}`,"")}var mv=class extends P2{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const e=(a,i)=>{if(a&&a.length)for(let r=0;r<a.length;r++){const c=a[r];if(c.getTotalLength){const n=c.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const d=c.getPointAtLength(n*l/this.pathSubFactor),h=c.getPointAtLength(n*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:d.x,x2:h.x,y1:d.y,y2:h.y,segment:l,element:i||c})}}else c.children&&e(c.children,c)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let e=0;e<this.pathFragments.length;e++){const a=this.pathFragments[e],i={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(a,i)&&(a.element.remove(),t.push(e))}return t.length&&(this.pathFragments=this.pathFragments.filter((e,a)=>!t.includes(a))),t.length>0}lineLineIntersect(t,e){const a=t.x1,i=t.x2,r=e.x1,c=e.x2,n=t.y1,l=t.y2,d=e.y1,h=e.y2,s=(a-i)*(d-h)-(n-l)*(r-c),p=(a*l-n*i)*(r-c)-(a-i)*(r*h-d*c),f=(a*l-n*i)*(d-h)-(n-l)*(r*h-d*c),v=(u,V,x)=>u>=V&&u<=x?!0:u>=x&&u<=V;if(s===0)return!1;{const u={x:p/s,y:f/s};return v(u.x,a,i)&&v(u.y,n,l)&&v(u.x,r,c)&&v(u.y,d,h)}}};function qv(t){return{draw:new fv(t),stylus:new cv(t),line:new lv(t),rectangle:new dv(t),ellipse:new nv(t),eraseLine:new mv(t)}}var bv=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=av(),this._models=qv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const a=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),r=this.eventMove.bind(this),c=this.eventEnd.bind(this),n=this.eventKeyboard.bind(this);a.addEventListener("pointerdown",i,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",c,{passive:!1}),window.addEventListener("pointercancel",c,{passive:!1}),window.addEventListener("keydown",n,!1),window.addEventListener("keyup",n,!1),this._disposables.push(()=>{a.removeEventListener("pointerdown",i),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",n,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);e?(e instanceof Element&&e!==this._currentNode&&(this._currentNode=e),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function Vv(t){return new bv(t)}const Bi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],re=Y1("slidev-drawing-enabled",!1),mK=Y1("slidev-drawing-pinned",!1),yv=G(!1),kv=G(!1),xv=G(!1),Wa=G(!1),s2=Ps(Y1("slidev-drawing-brush",{color:Bi[0],size:4,mode:"stylus"})),d4=G("stylus"),dc=N(()=>Kt.drawings.syncAll||k1.value);let Ca=!1;const oa=N({get(){return d4.value},set(t){d4.value=t,t==="arrow"?(s2.mode="line",s2.arrowEnd=!0):(s2.mode=t,s2.arrowEnd=!1)}}),gv=Pt({brush:s2,acceptsInputTypes:N(()=>re.value&&(!Kt.drawings.presenterOnly||k1.value)?void 0:["pen"]),coordinateTransform:!1}),b1=s3(Vv(gv));function Rv(){b1.clear(),dc.value&&wr(Bt.value,"")}function H5(){var t;kv.value=b1.canRedo(),yv.value=b1.canUndo(),xv.value=!!((t=b1.el)!=null&&t.children.length)}function Tv(t){Ca=!0;const e=B6[t||Bt.value];e!=null?b1.load(e):b1.clear(),H5(),Ca=!1}b1.on("changed",()=>{if(H5(),!Ca){const t=b1.dump(),e=Bt.value;(B6[e]||"")!==t&&dc.value&&wr(e,b1.dump())}});Qs(t=>{Ca=!0,t[Bt.value]!=null&&b1.load(t[Bt.value]||""),Ca=!1,H5()});d1(()=>{ut(Bt,()=>{b1.mounted&&Tv()},{immediate:!0})});b1.on("start",()=>Wa.value=!0);b1.on("end",()=>Wa.value=!1);window.addEventListener("keydown",t=>{if(!re.value)return;const e=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let a=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?b1.redo():b1.undo():t.code==="Escape"?re.value=!1:t.code==="KeyL"&&e?oa.value="line":t.code==="KeyA"&&e?oa.value="arrow":t.code==="KeyS"&&e?oa.value="stylus":t.code==="KeyR"&&e?oa.value="rectangle":t.code==="KeyE"&&e?oa.value="ellipse":t.code==="KeyC"&&e?Rv():t.code.startsWith("Digit")&&e&&+t.code[5]<=Bi.length?s2.color=Bi[+t.code[5]-1]:a=!1,a&&(t.preventDefault(),t.stopPropagation())},!1);function $t(...t){return N(()=>t.every(e=>a1(e)))}function S1(t){return N(()=>!a1(t))}const h4=Co(),ei=Y1("slidev-color-schema","auto"),Di=N(()=>Kt.colorSchema!=="auto"),Z5=N({get(){return Di.value?Kt.colorSchema==="dark":ei.value==="auto"?h4.value:ei.value==="dark"},set(t){Di.value||(ei.value=t===h4.value?"auto":t?"dark":"light")}}),hc=Xr(Z5);ke&&ut(Z5,t=>{const e=document.querySelector("html");e.classList.toggle("dark",t),e.classList.toggle("light",!t)},{immediate:!0});const w6=G(1),U6=N(()=>_t.length),U1=G(0),G5=G(0);function Sv(){U1.value>w6.value&&(U1.value-=1)}function Iv(){U1.value<U6.value&&(U1.value+=1)}function Ev(){if(U1.value>w6.value){let t=U1.value-G5.value;t<w6.value&&(t=w6.value),U1.value=t}}function wv(){if(U1.value<U6.value){let t=U1.value+G5.value;t>U6.value&&(t=U6.value),U1.value=t}}function Uv(){const{escape:t,space:e,shift:a,left:i,right:r,up:c,down:n,enter:l,d,g:h,o:s}=ac;let p=[{name:"next_space",key:$t(e,S1(a)),fn:ze,autoRepeat:!0},{name:"prev_space",key:$t(e,a),fn:We,autoRepeat:!0},{name:"next_right",key:$t(r,S1(a),S1(u1)),fn:ze,autoRepeat:!0},{name:"prev_left",key:$t(i,S1(a),S1(u1)),fn:We,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:ze,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:We,autoRepeat:!0},{name:"next_down",key:$t(n,S1(u1)),fn:Ha,autoRepeat:!0},{name:"prev_up",key:$t(c,S1(u1)),fn:()=>Za(!1),autoRepeat:!0},{name:"next_shift",key:$t(r,a),fn:Ha,autoRepeat:!0},{name:"prev_shift",key:$t(i,a),fn:()=>Za(!1),autoRepeat:!0},{name:"toggle_dark",key:$t(d,S1(re)),fn:hc},{name:"toggle_overview",key:$t(s,S1(re)),fn:rc},{name:"hide_overview",key:$t(t,S1(re)),fn:()=>u1.value=!1},{name:"goto",key:$t(h,S1(re)),fn:()=>J2.value=!J2.value},{name:"next_overview",key:$t(r,u1),fn:Iv},{name:"prev_overview",key:$t(i,u1),fn:Sv},{name:"up_overview",key:$t(c,u1),fn:Ev},{name:"down_overview",key:$t(n,u1),fn:wv},{name:"goto_from_overview",key:$t(l,u1),fn:()=>{H2(U1.value),u1.value=!1}}];const f=new Set(p.map(u=>u.name));if(p.filter(u=>u.name&&f.has(u.name)).length===0){const u=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(u),console.warn(u)}return p}const sc=$t(S1(Qf),S1(Hf),Wf);function Nv(t,e,a=!1){typeof t=="string"&&(t=ac[t]);const i=$t(t,sc);let r=0,c;const n=()=>{if(clearTimeout(c),!i.value){r=0;return}a&&(c=setTimeout(n,Math.max(1e3-r*250,150)),r++),e()};return ut(i,n,{flush:"sync"})}function Kv(t,e){return Io(t,a=>{sc.value&&(a.repeat||e())})}function Xv(){const t=Uv();new Map(t.map(a=>[a.key,a])).forEach(a=>{a.fn&&Nv(a.key,a.fn,a.autoRepeat)}),Kv("f",()=>ic.toggle())}const Jv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jv=o("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Fv=[jv];function Av(t,e){return y(),X("svg",Jv,Fv)}const Ov={name:"carbon-close",render:Av};function P5(t,e=""){var r,c;const a=["slidev-page",e],i=(c=(r=t==null?void 0:t.meta)==null?void 0:r.slide)==null?void 0:c.no;return i!=null&&a.push(`slidev-page-${i}`),a.filter(Boolean).join(" ")}const Mv=jt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const e=t;H(tt);const a=G(),i=ep(a),r=N(()=>e.width?e.width:i.width.value),c=N(()=>e.width?e.width/Ae:i.height.value);e.width&&Z2(()=>{a.value&&(a.value.style.width=`${r.value}px`,a.value.style.height=`${c.value}px`)});const n=N(()=>r.value/c.value),l=N(()=>e.scale&&!Q2.value?e.scale:n.value<Ae?r.value/Oe:c.value*Ae/Oe),d=N(()=>({height:`${z5}px`,width:`${Oe}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),h=N(()=>({"select-none":!Kt.selectable}));return E1(Sr,l),(s,p)=>(y(),X("div",{id:"slide-container",ref_key:"root",ref:a,class:Ct(h.value)},[o("div",{id:"slide-content",style:Yt(d.value)},[z1(s.$slots,"default")],4),z1(s.$slots,"controls")],2))}});const at=(t,e)=>{const a=t.__vccOpts||t;for(const[i,r]of e)a[i]=r;return a},oc=at(Mv,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Y5=jt({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:e}){const a=ie(t,"clicks",e),i=ie(t,"clicksElements",e),r=ie(t,"clicksDisabled",e),c=ie(t,"clicksOrderMap",e);i.value.length=0,E1(ws,t.route),E1(Us,t.context),E1(xa,a),E1(L2,r),E1(c2,i),E1(Oi,c)},render(){var t,e;return this.$props.is?i1(this.$props.is):(e=(t=this.$slots)==null?void 0:t.default)==null?void 0:e.call(t)}}),Lv=["innerHTML"],zv=jt({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return H(tt),(e,a)=>U(B6)[e.page]?(y(),X("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:U(B6)[e.page]},null,8,Lv)):xt("v-if",!0)}}),pc=at(zv,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Wv=Object.freeze(Object.defineProperty({__proto__:null,default:pc},Symbol.toStringTag,{value:"Module"})),Cv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Qv=["onClick"],ai=4*16*2,s4=2*16,Hv=jt({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:e}){const a=t;H(tt);const i=ie(a,"modelValue",e);function r(){i.value=!1}function c(p){H2(p),r()}function n(p){return p===U1.value}const l=Gi.smaller("xs"),d=Gi.smaller("sm"),h=N(()=>l.value?V2.width.value-ai:d.value?(V2.width.value-ai-s4)/2:300),s=N(()=>Math.floor((V2.width.value-ai)/(h.value+s4)));return Z2(()=>{U1.value=Bt.value,G5.value=s.value}),(p,f)=>{const v=Ov;return y(),X(wt,null,[D(o("div",Cv,[o("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Yt(`grid-template-columns: repeat(auto-fit,minmax(${h.value}px,1fr))`)},[(y(!0),X(wt,null,G2(U(_t),(u,V)=>(y(),X("div",{key:u.path,class:"relative"},[o("div",{class:Ct(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":n(V+1),"border-gray-400":!n(V+1)}]),style:Yt(U(W5)),onClick:x=>c(+u.path)},[(y(),C(oc,{key:u.path,width:h.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:j(()=>[u!=null&&u.component?(y(),C(U(Y5),{key:0,is:u.component,"clicks-disabled":!0,class:Ct(U(P5)(u)),route:u,context:"overview"},null,8,["is","class","route"])):xt("v-if",!0),A(pc,{page:+u.path},null,8,["page"])]),_:2},1032,["width"]))],14,Qv),o("div",{class:"absolute top-0 opacity-50",style:Yt(`left: ${h.value+5}px`)},L1(V+1),5)]))),128))],4)],512),[[ur,U(i)]]),U(i)?(y(),X("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:r},[A(v)])):xt("v-if",!0)],64)}}});const Zv=at(Hv,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Gv="/phd-defense/assets/logo-b72bde5d.png",Pv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Yv=jt({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:e}){const a=t;H(tt);const i=ie(a,"modelValue",e);function r(){i.value=!1}return(c,n)=>(y(),C(L7,null,[U(i)?(y(),X("div",Pv,[o("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:n[0]||(n[0]=l=>r())}),o("div",{class:Ct(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[z1(c.$slots,"default")],2)])):xt("v-if",!0)],1024))}}),Bv=at(Yv,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Modal.vue"]]),Dv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},_v=["innerHTML"],$v=o("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[o("div",{class:"flex gap-1 children:my-auto"},[o("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),o("img",{class:"w-5 h-5",src:Gv,alt:"Slidev"}),o("div",{style:{color:"#2082A6"}},[o("b",null,"Sli"),it("dev ")])])],-1),tu=jt({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:e}){const a=t;H(tt);const i=ie(a,"modelValue",e),r=N(()=>typeof Kt.info=="string");return(c,n)=>(y(),C(Bv,{modelValue:U(i),"onUpdate:modelValue":n[0]||(n[0]=l=>Ut(i)?i.value=l:null),class:"px-6 py-4"},{default:j(()=>[o("div",Dv,[r.value?(y(),X("div",{key:0,class:"mb-4",innerHTML:U(Kt).info},null,8,_v)):xt("v-if",!0),$v])]),_:1},8,["modelValue"]))}});const eu=at(tu,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/InfoDialog.vue"]]);function xe(t){return Array.isArray?Array.isArray(t):uc(t)==="[object Array]"}const au=1/0;function iu(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-au?"-0":e}function ru(t){return t==null?"":iu(t)}function ce(t){return typeof t=="string"}function fc(t){return typeof t=="number"}function cu(t){return t===!0||t===!1||nu(t)&&uc(t)=="[object Boolean]"}function vc(t){return typeof t=="object"}function nu(t){return vc(t)&&t!==null}function w1(t){return t!=null}function ii(t){return!t.trim().length}function uc(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const lu="Incorrect 'index' type",du=t=>`Invalid value for key ${t}`,hu=t=>`Pattern length exceeds max of ${t}.`,su=t=>`Missing ${t} property in key`,ou=t=>`Property 'weight' in key '${t}' must be a positive integer`,o4=Object.prototype.hasOwnProperty;class pu{constructor(e){this._keys=[],this._keyMap={};let a=0;e.forEach(i=>{let r=mc(i);a+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,a+=r.weight}),this._keys.forEach(i=>{i.weight/=a})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function mc(t){let e=null,a=null,i=null,r=1,c=null;if(ce(t)||xe(t))i=t,e=p4(t),a=_i(t);else{if(!o4.call(t,"name"))throw new Error(su("name"));const n=t.name;if(i=n,o4.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(ou(n));e=p4(n),a=_i(n),c=t.getFn}return{path:e,id:a,weight:r,src:i,getFn:c}}function p4(t){return xe(t)?t:t.split(".")}function _i(t){return xe(t)?t.join("."):t}function fu(t,e){let a=[],i=!1;const r=(c,n,l)=>{if(w1(c))if(!n[l])a.push(c);else{let d=n[l];const h=c[d];if(!w1(h))return;if(l===n.length-1&&(ce(h)||fc(h)||cu(h)))a.push(ru(h));else if(xe(h)){i=!0;for(let s=0,p=h.length;s<p;s+=1)r(h[s],n,l+1)}else n.length&&r(h,n,l+1)}};return r(t,ce(e)?e.split("."):e,0),i?a:a[0]}const vu={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},uu={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},mu={location:0,threshold:.6,distance:100},qu={useExtendedSearch:!1,getFn:fu,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ot={...uu,...vu,...mu,...qu};const bu=/[^ ]+/g;function Vu(t=1,e=3){const a=new Map,i=Math.pow(10,e);return{get(r){const c=r.match(bu).length;if(a.has(c))return a.get(c);const n=1/Math.pow(c,.5*t),l=parseFloat(Math.round(n*i)/i);return a.set(c,l),l},clear(){a.clear()}}}class B5{constructor({getFn:e=ot.getFn,fieldNormWeight:a=ot.fieldNormWeight}={}){this.norm=Vu(a,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((a,i)=>{this._keysMap[a.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ce(this.docs[0])?this.docs.forEach((e,a)=>{this._addString(e,a)}):this.docs.forEach((e,a)=>{this._addObject(e,a)}),this.norm.clear())}add(e){const a=this.size();ce(e)?this._addString(e,a):this._addObject(e,a)}removeAt(e){this.records.splice(e,1);for(let a=e,i=this.size();a<i;a+=1)this.records[a].i-=1}getValueForItemAtKeyId(e,a){return e[this._keysMap[a]]}size(){return this.records.length}_addString(e,a){if(!w1(e)||ii(e))return;let i={v:e,i:a,n:this.norm.get(e)};this.records.push(i)}_addObject(e,a){let i={i:a,$:{}};this.keys.forEach((r,c)=>{let n=r.getFn?r.getFn(e):this.getFn(e,r.path);if(w1(n)){if(xe(n)){let l=[];const d=[{nestedArrIndex:-1,value:n}];for(;d.length;){const{nestedArrIndex:h,value:s}=d.pop();if(w1(s))if(ce(s)&&!ii(s)){let p={v:s,i:h,n:this.norm.get(s)};l.push(p)}else xe(s)&&s.forEach((p,f)=>{d.push({nestedArrIndex:f,value:p})})}i.$[c]=l}else if(ce(n)&&!ii(n)){let l={v:n,n:this.norm.get(n)};i.$[c]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function qc(t,e,{getFn:a=ot.getFn,fieldNormWeight:i=ot.fieldNormWeight}={}){const r=new B5({getFn:a,fieldNormWeight:i});return r.setKeys(t.map(mc)),r.setSources(e),r.create(),r}function yu(t,{getFn:e=ot.getFn,fieldNormWeight:a=ot.fieldNormWeight}={}){const{keys:i,records:r}=t,c=new B5({getFn:e,fieldNormWeight:a});return c.setKeys(i),c.setIndexRecords(r),c}function y6(t,{errors:e=0,currentLocation:a=0,expectedLocation:i=0,distance:r=ot.distance,ignoreLocation:c=ot.ignoreLocation}={}){const n=e/t.length;if(c)return n;const l=Math.abs(i-a);return r?n+l/r:l?1:n}function ku(t=[],e=ot.minMatchCharLength){let a=[],i=-1,r=-1,c=0;for(let n=t.length;c<n;c+=1){let l=t[c];l&&i===-1?i=c:!l&&i!==-1&&(r=c-1,r-i+1>=e&&a.push([i,r]),i=-1)}return t[c-1]&&c-i>=e&&a.push([i,c-1]),a}const l2=32;function xu(t,e,a,{location:i=ot.location,distance:r=ot.distance,threshold:c=ot.threshold,findAllMatches:n=ot.findAllMatches,minMatchCharLength:l=ot.minMatchCharLength,includeMatches:d=ot.includeMatches,ignoreLocation:h=ot.ignoreLocation}={}){if(e.length>l2)throw new Error(hu(l2));const s=e.length,p=t.length,f=Math.max(0,Math.min(i,p));let v=c,u=f;const V=l>1||d,x=V?Array(p):[];let k;for(;(k=t.indexOf(e,u))>-1;){let F=y6(e,{currentLocation:k,expectedLocation:f,distance:r,ignoreLocation:h});if(v=Math.min(F,v),u=k+s,V){let w=0;for(;w<s;)x[k+w]=1,w+=1}}u=-1;let g=[],q=1,T=s+p;const R=1<<s-1;for(let F=0;F<s;F+=1){let w=0,L=T;for(;w<L;)y6(e,{errors:F,currentLocation:f+L,expectedLocation:f,distance:r,ignoreLocation:h})<=v?w=L:T=L,L=Math.floor((T-w)/2+w);T=L;let et=Math.max(1,f-L+1),ht=n?p:Math.min(f+L,p)+s,Z=Array(ht+2);Z[ht+1]=(1<<F)-1;for(let bt=ht;bt>=et;bt-=1){let kt=bt-1,Mt=a[t.charAt(kt)];if(V&&(x[kt]=+!!Mt),Z[bt]=(Z[bt+1]<<1|1)&Mt,F&&(Z[bt]|=(g[bt+1]|g[bt])<<1|1|g[bt+1]),Z[bt]&R&&(q=y6(e,{errors:F,currentLocation:kt,expectedLocation:f,distance:r,ignoreLocation:h}),q<=v)){if(v=q,u=kt,u<=f)break;et=Math.max(1,2*f-u)}}if(y6(e,{errors:F+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:h})>v)break;g=Z}const I={isMatch:u>=0,score:Math.max(.001,q)};if(V){const F=ku(x,l);F.length?d&&(I.indices=F):I.isMatch=!1}return I}function gu(t){let e={};for(let a=0,i=t.length;a<i;a+=1){const r=t.charAt(a);e[r]=(e[r]||0)|1<<i-a-1}return e}class bc{constructor(e,{location:a=ot.location,threshold:i=ot.threshold,distance:r=ot.distance,includeMatches:c=ot.includeMatches,findAllMatches:n=ot.findAllMatches,minMatchCharLength:l=ot.minMatchCharLength,isCaseSensitive:d=ot.isCaseSensitive,ignoreLocation:h=ot.ignoreLocation}={}){if(this.options={location:a,threshold:i,distance:r,includeMatches:c,findAllMatches:n,minMatchCharLength:l,isCaseSensitive:d,ignoreLocation:h},this.pattern=d?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const s=(f,v)=>{this.chunks.push({pattern:f,alphabet:gu(f),startIndex:v})},p=this.pattern.length;if(p>l2){let f=0;const v=p%l2,u=p-v;for(;f<u;)s(this.pattern.substr(f,l2),f),f+=l2;if(v){const V=p-l2;s(this.pattern.substr(V),V)}}else s(this.pattern,0)}searchIn(e){const{isCaseSensitive:a,includeMatches:i}=this.options;if(a||(e=e.toLowerCase()),this.pattern===e){let u={isMatch:!0,score:0};return i&&(u.indices=[[0,e.length-1]]),u}const{location:r,distance:c,threshold:n,findAllMatches:l,minMatchCharLength:d,ignoreLocation:h}=this.options;let s=[],p=0,f=!1;this.chunks.forEach(({pattern:u,alphabet:V,startIndex:x})=>{const{isMatch:k,score:g,indices:q}=xu(e,u,V,{location:r+x,distance:c,threshold:n,findAllMatches:l,minMatchCharLength:d,includeMatches:i,ignoreLocation:h});k&&(f=!0),p+=g,k&&q&&(s=[...s,...q])});let v={isMatch:f,score:f?p/this.chunks.length:1};return f&&i&&(v.indices=s),v}}class Pe{constructor(e){this.pattern=e}static isMultiMatch(e){return f4(e,this.multiRegex)}static isSingleMatch(e){return f4(e,this.singleRegex)}search(){}}function f4(t,e){const a=t.match(e);return a?a[1]:null}class Ru extends Pe{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const a=e===this.pattern;return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class Tu extends Pe{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class Su extends Pe{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const a=e.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,this.pattern.length-1]}}}class Iu extends Pe{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const a=!e.startsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,e.length-1]}}}class Eu extends Pe{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const a=e.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class wu extends Pe{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const a=!e.endsWith(this.pattern);return{isMatch:a,score:a?0:1,indices:[0,e.length-1]}}}class Vc extends Pe{constructor(e,{location:a=ot.location,threshold:i=ot.threshold,distance:r=ot.distance,includeMatches:c=ot.includeMatches,findAllMatches:n=ot.findAllMatches,minMatchCharLength:l=ot.minMatchCharLength,isCaseSensitive:d=ot.isCaseSensitive,ignoreLocation:h=ot.ignoreLocation}={}){super(e),this._bitapSearch=new bc(e,{location:a,threshold:i,distance:r,includeMatches:c,findAllMatches:n,minMatchCharLength:l,isCaseSensitive:d,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class yc extends Pe{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let a=0,i;const r=[],c=this.pattern.length;for(;(i=e.indexOf(this.pattern,a))>-1;)a=i+c,r.push([i,a-1]);const n=!!r.length;return{isMatch:n,score:n?0:1,indices:r}}}const $i=[Ru,yc,Su,Iu,wu,Eu,Tu,Vc],v4=$i.length,Uu=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Nu="|";function Ku(t,e={}){return t.split(Nu).map(a=>{let i=a.trim().split(Uu).filter(c=>c&&!!c.trim()),r=[];for(let c=0,n=i.length;c<n;c+=1){const l=i[c];let d=!1,h=-1;for(;!d&&++h<v4;){const s=$i[h];let p=s.isMultiMatch(l);p&&(r.push(new s(p,e)),d=!0)}if(!d)for(h=-1;++h<v4;){const s=$i[h];let p=s.isSingleMatch(l);if(p){r.push(new s(p,e));break}}}return r})}const Xu=new Set([Vc.type,yc.type]);class Ju{constructor(e,{isCaseSensitive:a=ot.isCaseSensitive,includeMatches:i=ot.includeMatches,minMatchCharLength:r=ot.minMatchCharLength,ignoreLocation:c=ot.ignoreLocation,findAllMatches:n=ot.findAllMatches,location:l=ot.location,threshold:d=ot.threshold,distance:h=ot.distance}={}){this.query=null,this.options={isCaseSensitive:a,includeMatches:i,minMatchCharLength:r,findAllMatches:n,ignoreLocation:c,location:l,threshold:d,distance:h},this.pattern=a?e:e.toLowerCase(),this.query=Ku(this.pattern,this.options)}static condition(e,a){return a.useExtendedSearch}searchIn(e){const a=this.query;if(!a)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let c=0,n=[],l=0;for(let d=0,h=a.length;d<h;d+=1){const s=a[d];n.length=0,c=0;for(let p=0,f=s.length;p<f;p+=1){const v=s[p],{isMatch:u,indices:V,score:x}=v.search(e);if(u){if(c+=1,l+=x,i){const k=v.constructor.type;Xu.has(k)?n=[...n,...V]:n.push(V)}}else{l=0,c=0,n.length=0;break}}if(c){let p={isMatch:!0,score:l/c};return i&&(p.indices=n),p}}return{isMatch:!1,score:1}}}const t5=[];function ju(...t){t5.push(...t)}function e5(t,e){for(let a=0,i=t5.length;a<i;a+=1){let r=t5[a];if(r.condition(t,e))return new r(t,e)}return new bc(t,e)}const t3={AND:"$and",OR:"$or"},a5={PATH:"$path",PATTERN:"$val"},i5=t=>!!(t[t3.AND]||t[t3.OR]),Fu=t=>!!t[a5.PATH],Au=t=>!xe(t)&&vc(t)&&!i5(t),u4=t=>({[t3.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function kc(t,e,{auto:a=!0}={}){const i=r=>{let c=Object.keys(r);const n=Fu(r);if(!n&&c.length>1&&!i5(r))return i(u4(r));if(Au(r)){const d=n?r[a5.PATH]:c[0],h=n?r[a5.PATTERN]:r[d];if(!ce(h))throw new Error(du(d));const s={keyId:_i(d),pattern:h};return a&&(s.searcher=e5(h,e)),s}let l={children:[],operator:c[0]};return c.forEach(d=>{const h=r[d];xe(h)&&h.forEach(s=>{l.children.push(i(s))})}),l};return i5(t)||(t=u4(t)),i(t)}function Ou(t,{ignoreFieldNorm:e=ot.ignoreFieldNorm}){t.forEach(a=>{let i=1;a.matches.forEach(({key:r,norm:c,score:n})=>{const l=r?r.weight:null;i*=Math.pow(n===0&&l?Number.EPSILON:n,(l||1)*(e?1:c))}),a.score=i})}function Mu(t,e){const a=t.matches;e.matches=[],w1(a)&&a.forEach(i=>{if(!w1(i.indices)||!i.indices.length)return;const{indices:r,value:c}=i;let n={indices:r,value:c};i.key&&(n.key=i.key.src),i.idx>-1&&(n.refIndex=i.idx),e.matches.push(n)})}function Lu(t,e){e.score=t.score}function zu(t,e,{includeMatches:a=ot.includeMatches,includeScore:i=ot.includeScore}={}){const r=[];return a&&r.push(Mu),i&&r.push(Lu),t.map(c=>{const{idx:n}=c,l={item:e[n],refIndex:n};return r.length&&r.forEach(d=>{d(c,l)}),l})}class Y2{constructor(e,a={},i){this.options={...ot,...a},this.options.useExtendedSearch,this._keyStore=new pu(this.options.keys),this.setCollection(e,i)}setCollection(e,a){if(this._docs=e,a&&!(a instanceof B5))throw new Error(lu);this._myIndex=a||qc(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){w1(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const a=[];for(let i=0,r=this._docs.length;i<r;i+=1){const c=this._docs[i];e(c,i)&&(this.removeAt(i),i-=1,r-=1,a.push(c))}return a}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:a=-1}={}){const{includeMatches:i,includeScore:r,shouldSort:c,sortFn:n,ignoreFieldNorm:l}=this.options;let d=ce(e)?ce(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Ou(d,{ignoreFieldNorm:l}),c&&d.sort(n),fc(a)&&a>-1&&(d=d.slice(0,a)),zu(d,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e){const a=e5(e,this.options),{records:i}=this._myIndex,r=[];return i.forEach(({v:c,i:n,n:l})=>{if(!w1(c))return;const{isMatch:d,score:h,indices:s}=a.searchIn(c);d&&r.push({item:c,idx:n,matches:[{score:h,value:c,norm:l,indices:s}]})}),r}_searchLogical(e){const a=kc(e,this.options),i=(l,d,h)=>{if(!l.children){const{keyId:p,searcher:f}=l,v=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(d,p),searcher:f});return v&&v.length?[{idx:h,item:d,matches:v}]:[]}const s=[];for(let p=0,f=l.children.length;p<f;p+=1){const v=l.children[p],u=i(v,d,h);if(u.length)s.push(...u);else if(l.operator===t3.AND)return[]}return s},r=this._myIndex.records,c={},n=[];return r.forEach(({$:l,i:d})=>{if(w1(l)){let h=i(a,l,d);h.length&&(c[d]||(c[d]={idx:d,item:l,matches:[]},n.push(c[d])),h.forEach(({matches:s})=>{c[d].matches.push(...s)}))}}),n}_searchObjectList(e){const a=e5(e,this.options),{keys:i,records:r}=this._myIndex,c=[];return r.forEach(({$:n,i:l})=>{if(!w1(n))return;let d=[];i.forEach((h,s)=>{d.push(...this._findMatches({key:h,value:n[s],searcher:a}))}),d.length&&c.push({idx:l,item:n,matches:d})}),c}_findMatches({key:e,value:a,searcher:i}){if(!w1(a))return[];let r=[];if(xe(a))a.forEach(({v:c,i:n,n:l})=>{if(!w1(c))return;const{isMatch:d,score:h,indices:s}=i.searchIn(c);d&&r.push({score:h,key:e,value:c,idx:n,norm:l,indices:s})});else{const{v:c,n}=a,{isMatch:l,score:d,indices:h}=i.searchIn(c);l&&r.push({score:d,key:e,value:c,norm:n,indices:h})}return r}}Y2.version="6.6.2";Y2.createIndex=qc;Y2.parseIndex=yu;Y2.config=ot;Y2.parseQuery=kc;ju(Ju);const Wu={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Cu=["value","disabled","onKeydown"],Qu=["border","onClick"],Hu={"w-4":"","text-right":"",op50:"","text-sm":""},Zu=jt({__name:"Goto",setup(t){H(tt);const e=G(),a=G(),i=G(),r=G(),c=G(""),n=G(0);function l(q){return q!=null}const d=N(()=>new Y2(_t.map(q=>{var T;return(T=q.meta)==null?void 0:T.slide}).filter(l),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=N(()=>c.value.startsWith("/")?c.value.substring(1):c.value),s=N(()=>d.value.search(h.value).map(q=>q.item)),p=N(()=>!!s.value.length);function f(){if(p.value){const q=s.value.at(n.value||0);q&&H2(q.no)}v()}function v(){c.value="",J2.value=!1}function u(q){q.preventDefault(),n.value++,n.value>=s.value.length&&(n.value=0),x()}function V(q){q.preventDefault(),n.value--,n.value<=-2&&(n.value=s.value.length-1),x()}function x(){var T;const q=(T=r.value)==null?void 0:T[n.value];q&&i.value&&(q.offsetTop+q.offsetHeight>i.value.offsetHeight+i.value.scrollTop?i.value.scrollTo({behavior:"smooth",top:q.offsetTop+q.offsetHeight-i.value.offsetHeight+1}):q.offsetTop<i.value.scrollTop&&i.value.scrollTo({behavior:"smooth",top:q.offsetTop}))}function k(q){n.value=0,c.value=q.target.value}function g(q){H2(q),v()}return ut(J2,async q=>{var T;q?(c.value="",n.value=0,setTimeout(()=>{var R;return(R=a.value)==null?void 0:R.focus()},0)):(T=a.value)==null||T.blur()}),ut(Le,()=>{var q;(q=e.value)!=null&&q.contains(Le.value)||v()}),(q,T)=>(y(),X("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:Ct(["fixed right-5 transition-all",U(J2)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[o("div",Wu,[o("input",{id:"slidev-goto-input",ref_key:"input",ref:a,value:c.value,type:"text",disabled:!U(J2),class:Ct(["outline-none bg-transparent",{"text-red-400":!p.value&&c.value}]),placeholder:"Goto...",onKeydown:[f6(f,["enter"]),f6(v,["escape"]),f6(u,["down"]),f6(V,["up"])],onInput:k},null,42,Cu)]),s.value.length>0?(y(),X("ul",{key:0,ref_key:"list",ref:i,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(y(!0),X(wt,null,G2(s.value,(R,I)=>(y(),X("li",{ref_for:!0,ref_key:"items",ref:r,key:R.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:I===0?"":"t main",class:Ct(n.value===I?"bg-active op100":"op80"),onClick:Uh(F=>g(R.no),["stop"])},[o("div",Hu,L1(R.no),1),it(" "+L1(R.title),1)],10,Qu))),128))],512)):xt("v-if",!0)],2))}});const Gu=at(Zu,[["__scopeId","data-v-4a3e8424"],["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Goto.vue"]]),Pu=jt({__name:"Controls",setup(t){H(tt);const e=de(),a=de();return(i,r)=>(y(),X(wt,null,[A(Zv,{modelValue:U(u1),"onUpdate:modelValue":r[0]||(r[0]=c=>Ut(u1)?u1.value=c:null)},null,8,["modelValue"]),A(Gu),e.value?(y(),C(U(e),{key:0})):xt("v-if",!0),a.value?(y(),C(U(a),{key:1,modelValue:U($3),"onUpdate:modelValue":r[1]||(r[1]=c=>Ut($3)?$3.value=c:null)},null,8,["modelValue"])):xt("v-if",!0),U(Kt).info?(y(),C(eu,{key:2,modelValue:U(Ta),"onUpdate:modelValue":r[2]||(r[2]=c=>Ut(Ta)?Ta.value=c:null)},null,8,["modelValue"])):xt("v-if",!0)],64))}}),Yu=at(Pu,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Controls.vue"]]),Bu={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Du=o("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),_u=[Du];function $u(t,e){return y(),X("svg",Bu,_u)}const tm={name:"carbon-settings-adjust",render:$u},em={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},am=o("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),im=o("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),rm=[am,im];function cm(t,e){return y(),X("svg",em,rm)}const nm={name:"carbon-information",render:cm},lm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dm=o("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),hm=[dm];function sm(t,e){return y(),X("svg",lm,hm)}const om={name:"carbon-download",render:sm},pm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fm=o("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),vm=o("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),um=[fm,vm];function mm(t,e){return y(),X("svg",pm,um)}const qm={name:"carbon-user-speaker",render:mm},bm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vm=o("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ym=o("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),km=[Vm,ym];function xm(t,e){return y(),X("svg",bm,km)}const gm={name:"carbon-presentation-file",render:xm},Rm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tm=o("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Sm=[Tm];function Im(t,e){return y(),X("svg",Rm,Sm)}const Em={name:"carbon-pen",render:Im},wm={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Um=o("g",{fill:"currentColor"},[o("path",{d:"M213.66 201L201 213.66a8 8 0 0 1-11.31 0L140 164a8 8 0 0 0-13 2.46l-19.46 44.77a8 8 0 0 1-14.85-.71L40.41 50.44a8 8 0 0 1 10-10l160.1 52.24a8 8 0 0 1 .71 14.85L166.45 127a8 8 0 0 0-2.45 13l49.67 49.67a8 8 0 0 1-.01 11.33Z",opacity:".2"}),o("path",{d:"m169.64 134.33l44.77-19.46a16 16 0 0 0-1.41-29.8L52.92 32.8A16 16 0 0 0 32.8 52.92L85.07 213a15.83 15.83 0 0 0 14.41 11h.78a15.83 15.83 0 0 0 14.61-9.59l19.46-44.77L184 219.31a16 16 0 0 0 22.63 0l12.68-12.68a16 16 0 0 0 0-22.63Zm-69.48 73.76l.06-.05Zm95.15-.09l-49.67-49.67a16 16 0 0 0-26 4.94l-19.42 44.65L48 48l159.87 52.21l-44.64 19.41a16 16 0 0 0-4.94 26L208 195.31Z"})],-1),Nm=[Um];function Km(t,e){return y(),X("svg",wm,Nm)}const Xm={name:"ph-cursor-duotone",render:Km},Jm={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jm=o("path",{fill:"currentColor",d:"M219.31 192a16 16 0 0 1 0 22.63l-4.68 4.68a16 16 0 0 1-22.63 0l-55.25-55.24l-21.88 50.34a15.84 15.84 0 0 1-14.61 9.59h-.78a15.82 15.82 0 0 1-14.41-11L32.8 52.92A15.95 15.95 0 0 1 52.92 32.8L213 85.07a16 16 0 0 1 1.41 29.8l-50.34 21.88Z"},null,-1),Fm=[jm];function Am(t,e){return y(),X("svg",Jm,Fm)}const xc={name:"ph-cursor-fill",render:Am},Om={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mm=o("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Lm=[Mm];function zm(t,e){return y(),X("svg",Om,Lm)}const Wm={name:"carbon-sun",render:zm},Cm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qm=o("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Hm=[Qm];function Zm(t,e){return y(),X("svg",Cm,Hm)}const Gm={name:"carbon-moon",render:Zm},Pm={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ym=o("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Bm=[Ym];function Dm(t,e){return y(),X("svg",Pm,Bm)}const _m={name:"carbon-apps",render:Dm},$m={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tq=o("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),eq=[tq];function aq(t,e){return y(),X("svg",$m,eq)}const iq={name:"carbon-arrow-right",render:aq},rq={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cq=o("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),nq=[cq];function lq(t,e){return y(),X("svg",rq,nq)}const dq={name:"carbon-arrow-left",render:lq},hq={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sq=o("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),oq=[sq];function pq(t,e){return y(),X("svg",hq,oq)}const fq={name:"carbon-maximize",render:pq},vq={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uq=o("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),mq=[uq];function qq(t,e){return y(),X("svg",vq,mq)}const bq={name:"carbon-minimize",render:qq},Vq={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yq=o("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),kq=[yq];function xq(t,e){return y(),X("svg",Vq,kq)}const gq={name:"carbon-checkmark",render:xq},Rq={class:"select-list"},Tq={class:"title"},Sq={class:"items"},Iq=["onClick"],Eq=jt({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const a=t;H(tt);const i=ie(a,"modelValue",e,{passive:!0});return(r,c)=>{const n=gq;return y(),X("div",Rq,[o("div",Tq,L1(t.title),1),o("div",Sq,[(y(!0),X(wt,null,G2(t.items,l=>(y(),X("div",{key:l.value,class:Ct(["item",{active:U(i)===l.value}]),onClick:()=>{var d;i.value=l.value,(d=l.onClick)==null||d.call(l)}},[A(n,{class:Ct(["text-green-500",{"opacity-0":U(i)!==l.value}])},null,8,["class"]),it(" "+L1(l.display||l.value),1)],10,Iq))),128))])])}}});const wq=at(Eq,[["__scopeId","data-v-a3dcc0f8"],["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SelectList.vue"]]),Uq={class:"text-sm"},Nq=jt({__name:"Settings",setup(t){H(tt);const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(a,i)=>(y(),X("div",Uq,[A(wq,{modelValue:U(E6),"onUpdate:modelValue":i[0]||(i[0]=r=>Ut(E6)?E6.value=r:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Kq=at(Nq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Settings.vue"]]),Xq={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Jq=jt({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const a=t;H(tt);const i=ie(a,"modelValue",e,{passive:!0}),r=G();return To(r,()=>{i.value=!1}),(c,n)=>(y(),X("div",{ref_key:"el",ref:r,class:"flex relative"},[o("button",{class:Ct({disabled:t.disabled}),onClick:n[0]||(n[0]=l=>i.value=!U(i))},[z1(c.$slots,"button",{class:Ct({disabled:t.disabled})})],2),(y(),C(L7,null,[U(i)?(y(),X("div",Xq,[z1(c.$slots,"menu")])):xt("v-if",!0)],1024))],512))}}),jq=at(Jq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/MenuButton.vue"]]),Fq={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},Aq={__name:"VerticalDivider",setup(t){return H(tt),(e,a)=>(y(),X("div",Fq))}},k6=at(Aq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),Oq={render(){return[]}},Mq={class:"slidev-icon-btn"},Lq={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},zq={class:"my-auto"},Wq={class:"opacity-50"},Cq=jt({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t;H(tt);const a=Gi.smaller("md"),{isFullscreen:i,toggle:r}=ic,c=N(()=>c5.value?`?password=${c5.value}`:""),n=N(()=>`/presenter/${Bt.value}${c.value}`),l=N(()=>`/${Bt.value}${c.value}`),d=G();function h(){d.value&&Le.value&&d.value.contains(Le.value)&&Le.value.blur()}const s=N(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=de(),f=de();return Me(()=>import("./DrawingControls-70a19ade.js"),[]).then(v=>f.value=v.default),(v,u)=>{const V=bq,x=fq,k=dq,g=iq,q=_m,T=Gm,R=Wm,I=xc,F=Xm,w=Em,L=gm,et=C6("RouterLink"),ht=qm,Z=om,vt=nm,bt=tm;return y(),X("nav",{ref_key:"root",ref:d,class:"flex flex-col"},[o("div",{class:Ct(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",s.value]),onMouseleave:h},[U(ue)?xt("v-if",!0):(y(),X("button",{key:0,class:"slidev-icon-btn",onClick:u[0]||(u[0]=(...kt)=>U(r)&&U(r)(...kt))},[U(i)?(y(),C(V,{key:0})):(y(),C(x,{key:1}))])),o("button",{class:Ct(["slidev-icon-btn",{disabled:!U(fE)}]),onClick:u[1]||(u[1]=(...kt)=>U(We)&&U(We)(...kt))},[A(k)],2),o("button",{class:Ct(["slidev-icon-btn",{disabled:!U(pE)}]),title:"Next",onClick:u[2]||(u[2]=(...kt)=>U(ze)&&U(ze)(...kt))},[A(g)],2),U(ue)?xt("v-if",!0):(y(),X("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:u[3]||(u[3]=kt=>U(rc)())},[A(q)])),U(Di)?xt("v-if",!0):(y(),X("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:u[4]||(u[4]=kt=>U(hc)())},[U(Z5)?(y(),C(T,{key:0})):(y(),C(R,{key:1}))])),A(k6),U(ue)?xt("v-if",!0):(y(),X(wt,{key:3},[!U(k1)&&!U(a)&&p.value?(y(),X(wt,{key:0},[A(U(p)),A(k6)],64)):xt("v-if",!0),U(k1)?(y(),X("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:u[5]||(u[5]=kt=>ti.value=!U(ti))},[U(ti)?(y(),C(I,{key:0})):(y(),C(F,{key:1,class:"opacity-50"}))])):xt("v-if",!0)],64)),(!U(Kt).drawings.presenterOnly||U(k1))&&!U(ue)?(y(),X(wt,{key:4},[o("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:u[6]||(u[6]=kt=>re.value=!U(re))},[A(w),U(re)?(y(),X("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Yt({background:U(s2).color})},null,4)):xt("v-if",!0)]),A(k6)],64)):xt("v-if",!0),U(ue)?xt("v-if",!0):(y(),X(wt,{key:5},[U(k1)?(y(),C(et,{key:0,to:l.value,class:"slidev-icon-btn",title:"Play Mode"},{default:j(()=>[A(L)]),_:1},8,["to"])):xt("v-if",!0),U(lE)?(y(),C(et,{key:1,to:n.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:j(()=>[A(ht)]),_:1},8,["to"])):xt("v-if",!0),xt("v-if",!0)],64)),(y(),X(wt,{key:6},[U(Kt).download?(y(),X("button",{key:0,class:"slidev-icon-btn",onClick:u[8]||(u[8]=(...kt)=>U(n5)&&U(n5)(...kt))},[A(Z)])):xt("v-if",!0)],64)),!U(k1)&&U(Kt).info&&!U(ue)?(y(),X("button",{key:7,class:"slidev-icon-btn",onClick:u[9]||(u[9]=kt=>Ta.value=!U(Ta))},[A(vt)])):xt("v-if",!0),!U(k1)&&!U(ue)?(y(),C(jq,{key:8},{button:j(()=>[o("button",Mq,[A(bt)])]),menu:j(()=>[A(Kq)]),_:1})):xt("v-if",!0),U(ue)?xt("v-if",!0):(y(),C(k6,{key:9})),o("div",Lq,[o("div",zq,[it(L1(U(Bt))+" ",1),o("span",Wq,"/ "+L1(U(dE)),1)])]),A(U(Oq))],34)],512)}}}),Qq=at(Cq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/NavControls.vue"]]),gc={render(){return[]}},Rc={render(){return[]}},Hq={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Zq=jt({__name:"PresenterMouse",setup(t){return H(tt),(e,a)=>{const i=xc;return U(Y3).cursor?(y(),X("div",Hq,[A(i,{class:"absolute",style:Yt({left:`${U(Y3).cursor.x}%`,top:`${U(Y3).cursor.y}%`})},null,8,["style"])])):xt("v-if",!0)}}}),Gq=at(Zq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Pq=jt({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){H(tt),ut(m1,()=>{var i,r;(i=m1.value)!=null&&i.meta&&m1.value.meta.preload!==!1&&(m1.value.meta.__preloaded=!0),(r=ri.value)!=null&&r.meta&&ri.value.meta.preload!==!1&&(ri.value.meta.__preloaded=!0)},{immediate:!0});const e=de();Me(()=>import("./DrawingLayer-d25a829c.js"),[]).then(i=>e.value=i.default);const a=N(()=>_t.filter(i=>{var r;return((r=i.meta)==null?void 0:r.__preloaded)||i===m1.value}));return(i,r)=>(y(),X(wt,null,[xt(" Global Bottom "),A(U(Rc)),xt(" Slides "),A(gh,Aa(U(mE),{id:"slideshow",tag:"div"}),{default:j(()=>[(y(!0),X(wt,null,G2(a.value,c=>{var n;return D((y(),C(U(Y5),{key:c.path,is:c==null?void 0:c.component,clicks:c===U(m1)?U(O1):0,"clicks-elements":((n=c.meta)==null?void 0:n.__clicksElements)||[],"clicks-disabled":!1,class:Ct(U(P5)(c)),route:c,context:i.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ur,c===U(m1)]])}),128))]),_:1},16),xt(" Global Top "),A(U(gc)),e.value?(y(),C(U(e),{key:0})):xt("v-if",!0),U(k1)?xt("v-if",!0):(y(),C(Gq,{key:1}))],64))}});const Yq=at(Pq,[["__scopeId","data-v-aec90d67"],["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Bq=jt({__name:"PrintStyle",setup(t){H(tt);function e(a,{slots:i}){if(i.default)return i1("style",i.default())}return(a,i)=>(y(),C(e,null,{default:j(()=>[it(" @page { size: "+L1(U(Oe))+"px "+L1(U(z5))+"px; margin: 0px; } ",1)]),_:1}))}}),Tc=at(Bq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintStyle.vue"]]),Dq=jt({__name:"Play",setup(t){H(tt),Xv();const e=G();function a(c){var n;$8.value||((n=c.target)==null?void 0:n.id)==="slide-container"&&(c.screenX/window.innerWidth>.6?ze():We())}qE(e);const i=N(()=>Cf.value||$8.value);de();const r=de();return Me(()=>import("./DrawingControls-70a19ade.js"),[]).then(c=>r.value=c.default),(c,n)=>(y(),X(wt,null,[U(Q2)?(y(),C(Tc,{key:0})):xt("v-if",!0),o("div",{id:"page-root",ref_key:"root",ref:e,class:"grid grid-cols-[1fr_max-content]",style:Yt(U(W5))},[A(oc,{class:"w-full h-full",style:Yt({background:"var(--slidev-slide-container-background, black)"}),width:U(Q2)?U(V2).width.value:void 0,scale:U(E6),onPointerdown:a},{default:j(()=>[A(Yq,{context:"slide"})]),controls:j(()=>[o("div",{class:Ct(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[i.value?"opacity-100 right-0":"opacity-0 p-2",U(Wa)?"pointer-events-none":""]])},[A(Qq,{class:"m-auto",persist:i.value},null,8,["persist"])],2),!U(Kt).drawings.presenterOnly&&!U(ue)&&r.value?(y(),C(U(r),{key:0,class:"ml-0"})):xt("v-if",!0)]),_:1},8,["style","width","scale"]),xt("v-if",!0)],4),A(Yu)],64))}}),_q=at(Dq,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Sc(t){return typeof t>"u"||t===null}function $q(t){return typeof t=="object"&&t!==null}function tb(t){return Array.isArray(t)?t:Sc(t)?[]:[t]}function eb(t,e){var a,i,r,c;if(e)for(c=Object.keys(e),a=0,i=c.length;a<i;a+=1)r=c[a],t[r]=e[r];return t}function ab(t,e){var a="",i;for(i=0;i<e;i+=1)a+=t;return a}function ib(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var rb=Sc,cb=$q,nb=tb,lb=ab,db=ib,hb=eb,D5={isNothing:rb,isObject:cb,toArray:nb,repeat:lb,isNegativeZero:db,extend:hb};function Ic(t,e){var a="",i=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(a+='in "'+t.mark.name+'" '),a+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(a+=`

`+t.mark.snippet),i+" "+a):i}function Qa(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=Ic(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qa.prototype=Object.create(Error.prototype);Qa.prototype.constructor=Qa;Qa.prototype.toString=function(e){return this.name+": "+Ic(this,e)};var d2=Qa,sb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ob=["scalar","sequence","mapping"];function pb(t){var e={};return t!==null&&Object.keys(t).forEach(function(a){t[a].forEach(function(i){e[String(i)]=a})}),e}function fb(t,e){if(e=e||{},Object.keys(e).forEach(function(a){if(sb.indexOf(a)===-1)throw new d2('Unknown option "'+a+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(a){return a},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=pb(e.styleAliases||null),ob.indexOf(this.kind)===-1)throw new d2('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var o1=fb;function m4(t,e){var a=[];return t[e].forEach(function(i){var r=a.length;a.forEach(function(c,n){c.tag===i.tag&&c.kind===i.kind&&c.multi===i.multi&&(r=n)}),a[r]=i}),a}function vb(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},e,a;function i(r){r.multi?(t.multi[r.kind].push(r),t.multi.fallback.push(r)):t[r.kind][r.tag]=t.fallback[r.tag]=r}for(e=0,a=arguments.length;e<a;e+=1)arguments[e].forEach(i);return t}function r5(t){return this.extend(t)}r5.prototype.extend=function(e){var a=[],i=[];if(e instanceof o1)i.push(e);else if(Array.isArray(e))i=i.concat(e);else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(a=a.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit));else throw new d2("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(c){if(!(c instanceof o1))throw new d2("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(c.loadKind&&c.loadKind!=="scalar")throw new d2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(c.multi)throw new d2("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(c){if(!(c instanceof o1))throw new d2("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(r5.prototype);return r.implicit=(this.implicit||[]).concat(a),r.explicit=(this.explicit||[]).concat(i),r.compiledImplicit=m4(r,"implicit"),r.compiledExplicit=m4(r,"explicit"),r.compiledTypeMap=vb(r.compiledImplicit,r.compiledExplicit),r};var ub=r5,mb=new o1("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),qb=new o1("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),bb=new o1("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),Vb=new ub({explicit:[mb,qb,bb]});function yb(t){if(t===null)return!0;var e=t.length;return e===1&&t==="~"||e===4&&(t==="null"||t==="Null"||t==="NULL")}function kb(){return null}function xb(t){return t===null}var gb=new o1("tag:yaml.org,2002:null",{kind:"scalar",resolve:yb,construct:kb,predicate:xb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Rb(t){if(t===null)return!1;var e=t.length;return e===4&&(t==="true"||t==="True"||t==="TRUE")||e===5&&(t==="false"||t==="False"||t==="FALSE")}function Tb(t){return t==="true"||t==="True"||t==="TRUE"}function Sb(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var Ib=new o1("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Rb,construct:Tb,predicate:Sb,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function Eb(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function wb(t){return 48<=t&&t<=55}function Ub(t){return 48<=t&&t<=57}function Nb(t){if(t===null)return!1;var e=t.length,a=0,i=!1,r;if(!e)return!1;if(r=t[a],(r==="-"||r==="+")&&(r=t[++a]),r==="0"){if(a+1===e)return!0;if(r=t[++a],r==="b"){for(a++;a<e;a++)if(r=t[a],r!=="_"){if(r!=="0"&&r!=="1")return!1;i=!0}return i&&r!=="_"}if(r==="x"){for(a++;a<e;a++)if(r=t[a],r!=="_"){if(!Eb(t.charCodeAt(a)))return!1;i=!0}return i&&r!=="_"}if(r==="o"){for(a++;a<e;a++)if(r=t[a],r!=="_"){if(!wb(t.charCodeAt(a)))return!1;i=!0}return i&&r!=="_"}}if(r==="_")return!1;for(;a<e;a++)if(r=t[a],r!=="_"){if(!Ub(t.charCodeAt(a)))return!1;i=!0}return!(!i||r==="_")}function Kb(t){var e=t,a=1,i;if(e.indexOf("_")!==-1&&(e=e.replace(/_/g,"")),i=e[0],(i==="-"||i==="+")&&(i==="-"&&(a=-1),e=e.slice(1),i=e[0]),e==="0")return 0;if(i==="0"){if(e[1]==="b")return a*parseInt(e.slice(2),2);if(e[1]==="x")return a*parseInt(e.slice(2),16);if(e[1]==="o")return a*parseInt(e.slice(2),8)}return a*parseInt(e,10)}function Xb(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!D5.isNegativeZero(t)}var Jb=new o1("tag:yaml.org,2002:int",{kind:"scalar",resolve:Nb,construct:Kb,predicate:Xb,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),jb=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Fb(t){return!(t===null||!jb.test(t)||t[t.length-1]==="_")}function Ab(t){var e,a;return e=t.replace(/_/g,"").toLowerCase(),a=e[0]==="-"?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),e===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:e===".nan"?NaN:a*parseFloat(e,10)}var Ob=/^[-+]?[0-9]+e/;function Mb(t,e){var a;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(D5.isNegativeZero(t))return"-0.0";return a=t.toString(10),Ob.test(a)?a.replace("e",".e"):a}function Lb(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||D5.isNegativeZero(t))}var zb=new o1("tag:yaml.org,2002:float",{kind:"scalar",resolve:Fb,construct:Ab,predicate:Lb,represent:Mb,defaultStyle:"lowercase"}),Wb=Vb.extend({implicit:[gb,Ib,Jb,zb]}),Cb=Wb,Ec=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wc=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Qb(t){return t===null?!1:Ec.exec(t)!==null||wc.exec(t)!==null}function Hb(t){var e,a,i,r,c,n,l,d=0,h=null,s,p,f;if(e=Ec.exec(t),e===null&&(e=wc.exec(t)),e===null)throw new Error("Date resolve error");if(a=+e[1],i=+e[2]-1,r=+e[3],!e[4])return new Date(Date.UTC(a,i,r));if(c=+e[4],n=+e[5],l=+e[6],e[7]){for(d=e[7].slice(0,3);d.length<3;)d+="0";d=+d}return e[9]&&(s=+e[10],p=+(e[11]||0),h=(s*60+p)*6e4,e[9]==="-"&&(h=-h)),f=new Date(Date.UTC(a,i,r,c,n,l,d)),h&&f.setTime(f.getTime()-h),f}function Zb(t){return t.toISOString()}var Gb=new o1("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Qb,construct:Hb,instanceOf:Date,represent:Zb});function Pb(t){return t==="<<"||t===null}var Yb=new o1("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Pb}),_5=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Bb(t){if(t===null)return!1;var e,a,i=0,r=t.length,c=_5;for(a=0;a<r;a++)if(e=c.indexOf(t.charAt(a)),!(e>64)){if(e<0)return!1;i+=6}return i%8===0}function Db(t){var e,a,i=t.replace(/[\r\n=]/g,""),r=i.length,c=_5,n=0,l=[];for(e=0;e<r;e++)e%4===0&&e&&(l.push(n>>16&255),l.push(n>>8&255),l.push(n&255)),n=n<<6|c.indexOf(i.charAt(e));return a=r%4*6,a===0?(l.push(n>>16&255),l.push(n>>8&255),l.push(n&255)):a===18?(l.push(n>>10&255),l.push(n>>2&255)):a===12&&l.push(n>>4&255),new Uint8Array(l)}function _b(t){var e="",a=0,i,r,c=t.length,n=_5;for(i=0;i<c;i++)i%3===0&&i&&(e+=n[a>>18&63],e+=n[a>>12&63],e+=n[a>>6&63],e+=n[a&63]),a=(a<<8)+t[i];return r=c%3,r===0?(e+=n[a>>18&63],e+=n[a>>12&63],e+=n[a>>6&63],e+=n[a&63]):r===2?(e+=n[a>>10&63],e+=n[a>>4&63],e+=n[a<<2&63],e+=n[64]):r===1&&(e+=n[a>>2&63],e+=n[a<<4&63],e+=n[64],e+=n[64]),e}function $b(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var tV=new o1("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Bb,construct:Db,predicate:$b,represent:_b}),eV=Object.prototype.hasOwnProperty,aV=Object.prototype.toString;function iV(t){if(t===null)return!0;var e=[],a,i,r,c,n,l=t;for(a=0,i=l.length;a<i;a+=1){if(r=l[a],n=!1,aV.call(r)!=="[object Object]")return!1;for(c in r)if(eV.call(r,c))if(!n)n=!0;else return!1;if(!n)return!1;if(e.indexOf(c)===-1)e.push(c);else return!1}return!0}function rV(t){return t!==null?t:[]}var cV=new o1("tag:yaml.org,2002:omap",{kind:"sequence",resolve:iV,construct:rV}),nV=Object.prototype.toString;function lV(t){if(t===null)return!0;var e,a,i,r,c,n=t;for(c=new Array(n.length),e=0,a=n.length;e<a;e+=1){if(i=n[e],nV.call(i)!=="[object Object]"||(r=Object.keys(i),r.length!==1))return!1;c[e]=[r[0],i[r[0]]]}return!0}function dV(t){if(t===null)return[];var e,a,i,r,c,n=t;for(c=new Array(n.length),e=0,a=n.length;e<a;e+=1)i=n[e],r=Object.keys(i),c[e]=[r[0],i[r[0]]];return c}var hV=new o1("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:lV,construct:dV}),sV=Object.prototype.hasOwnProperty;function oV(t){if(t===null)return!0;var e,a=t;for(e in a)if(sV.call(a,e)&&a[e]!==null)return!1;return!0}function pV(t){return t!==null?t:{}}var fV=new o1("tag:yaml.org,2002:set",{kind:"mapping",resolve:oV,construct:pV});Cb.extend({implicit:[Gb,Yb],explicit:[tV,cV,hV,fV]});function q4(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var vV=new Array(256),uV=new Array(256);for(var K2=0;K2<256;K2++)vV[K2]=q4(K2)?1:0,uV[K2]=q4(K2);function mV(t){return Array.from(new Set(t))}function b4(...t){let e,a,i;t.length===1?(e=0,i=1,[a]=t):[e,a,i=1]=t;const r=[];let c=e;for(;c<a;)r.push(c),c+=i||1;return r}function qV(t,e){if(!e||e==="all"||e==="*")return b4(1,t+1);const a=[];for(const i of e.split(/[,;]/g))if(!i.includes("-"))a.push(+i);else{const[r,c]=i.split("-",2);a.push(...b4(+r,c?+c+1:t+1))}return mV(a).filter(i=>i<=t).sort((i,r)=>i-r)}function Uc(t){const e=N(()=>t.value.path),a=N(()=>_t.length),i=N(()=>Number.parseInt(e.value.split(/\//g).slice(-1)[0])||1),r=N(()=>K3(i.value)),c=N(()=>_t.find(f=>f.path===`${i.value}`)),n=N(()=>{var f,v,u;return(u=(v=(f=c.value)==null?void 0:f.meta)==null?void 0:v.slide)==null?void 0:u.id}),l=N(()=>{var f,v;return((v=(f=c.value)==null?void 0:f.meta)==null?void 0:v.layout)||(i.value===1?"cover":"default")}),d=N(()=>_t.find(f=>f.path===`${Math.min(_t.length,i.value+1)}`)),h=N(()=>_t.filter(f=>{var v,u;return(u=(v=f.meta)==null?void 0:v.slide)==null?void 0:u.title}).reduce((f,v)=>(p0(f,v),f),[])),s=N(()=>f0(h.value,c.value)),p=N(()=>v0(s.value));return{route:t,path:e,total:a,currentPage:i,currentPath:r,currentRoute:c,currentSlideId:n,currentLayout:l,nextRoute:d,rawTree:h,treeWithActiveStatuses:s,tree:p,downloadPDF:n5,next:ze,nextSlide:Ha,openInEditor:bE,prev:We,prevSlide:Za}}function Nc(t,e,a){const i=G(0);d1(()=>{g1.afterEach(async()=>{await d1(),i.value+=1})});const r=N(()=>{var d,h;return i.value,((h=(d=e.value)==null?void 0:d.meta)==null?void 0:h.__clicksElements)||[]}),c=N(()=>{var d,h;return+(((h=(d=e.value)==null?void 0:d.meta)==null?void 0:h.clicks)??r.value.length)}),n=N(()=>a.value<_t.length-1||t.value<c.value),l=N(()=>a.value>1||t.value>0);return{clicks:t,clicksElements:r,clicksTotal:c,hasNext:n,hasPrev:l}}const bV=["id"],VV=jt({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:e}){const a=t,i=ie(a,"clicksElements",e),r=N(()=>({height:`${z5}px`,width:`${Oe}px`})),c=de();Me(()=>Promise.resolve().then(()=>Wv),void 0).then(h=>c.value=h.default);const n=N(()=>a.clicks),l=Nc(n,a.nav.currentRoute,a.nav.currentPage),d=N(()=>`${a.route.path.toString().padStart(3,"0")}-${(n.value+1).toString().padStart(2,"0")}`);return E1(tt,Pt({nav:{...a.nav,...l},configs:Kt,themeConfigs:N(()=>Kt.themeConfig)})),(h,s)=>{var p;return y(),X("div",{id:d.value,class:"print-slide-container",style:Yt(r.value)},[A(U(Rc)),A(U(Y5),{is:(p=h.route)==null?void 0:p.component,"clicks-elements":U(i),"onUpdate:clicksElements":s[0]||(s[0]=f=>Ut(i)?i.value=f:null),clicks:n.value,"clicks-disabled":!1,class:Ct(U(P5)(h.route)),route:h.route},null,8,["is","clicks-elements","clicks","class","route"]),c.value?(y(),C(U(c),{key:0,page:+h.route.path},null,8,["page"])):xt("v-if",!0),A(U(gc))],12,bV)}}}),V4=at(VV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),yV=jt({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var c;const e=t;H(tt);const a=G(((c=e.route.meta)==null?void 0:c.__clicksElements)||[]),i=N(()=>e.route),r=Uc(i);return(n,l)=>(y(),X(wt,null,[A(V4,{"clicks-elements":a.value,"onUpdate:clicksElements":l[0]||(l[0]=d=>a.value=d),clicks:0,nav:U(r),route:i.value},null,8,["clicks-elements","nav","route"]),U(Sa)?xt("v-if",!0):(y(!0),X(wt,{key:0},G2(a.value.length,d=>(y(),C(V4,{key:d,clicks:d,nav:U(r),route:i.value},null,8,["clicks","nav","route"]))),128))],64))}}),kV=at(yV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintSlide.vue"]]),xV={id:"print-content"},gV=jt({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const e=t;H(tt);const a=N(()=>e.width),i=N(()=>e.width/Ae),r=N(()=>a.value/i.value),c=N(()=>r.value<Ae?a.value/Oe:i.value*Ae/Oe);let n=_t;W1.value.query.range&&(n=qV(n.length,W1.value.query.range).map(h=>n[h-1]));const l=N(()=>({"select-none":!Kt.selectable}));return E1(Sr,c),(d,h)=>(y(),X("div",{id:"print-container",class:Ct(l.value)},[o("div",xV,[(y(!0),X(wt,null,G2(U(n),s=>(y(),C(kV,{key:s.path,route:s},null,8,["route"]))),128))]),z1(d.$slots,"controls")],2))}});const RV=at(gV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/PrintContainer.vue"]]),TV=jt({__name:"Print",setup(t){return H(tt),Z2(()=>{Q2?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(e,a)=>(y(),X(wt,null,[U(Q2)?(y(),C(Tc,{key:0})):xt("v-if",!0),o("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Yt(U(W5))},[A(RV,{class:"w-full h-full",style:Yt({background:"var(--slidev-slide-container-background, black)"}),width:U(V2).width.value},null,8,["style","width"])],4)],64))}});const SV=at(TV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Print.vue"]]);function IV(t){return t.startsWith("/")?"/phd-defense/"+t.slice(1):t}const EV={__name:"image",props:{image:String,imageFilter:String,imageTransform:String,textColor:String,color:String,colorOpacity:{type:Number,default:.75}},setup(t){const e=t;H(tt);const a=N(()=>{const i={};return i["--color"]=e.color?e.color:"transparent",i["--color-opacity"]=e.image?e.colorOpacity:1,i["--text-color"]=e.textColor?e.textColor:e.image?"white":"inherit",e.image&&(i["--image"]=`url("${IV(e.image)}")`,e.imageFilter&&(i["--image-filter"]=e.imageFilter),e.imageTransform&&(i["--image-transform"]=e.imageTransform)),i});return(i,r)=>(y(),X("div",{class:"slidev-layout image",style:Yt(a.value)},[z1(i.$slots,"default")],4))}},wV=at(EV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/slidev-theme-eavise@1.0.0/node_modules/slidev-theme-eavise/layouts/image.vue"]]),UV={class:"logo-eavise-kul",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1941.657 336.5467"},NV=Zt('<path class="border" fill="#52BDEC" d="M0 0v336.546012h33.652953V33.656616h1908.004756V0H0z"></path><path class="kul-bg" fill="#00407A" d="M33.654297 33.65625v302.89063H942.32227V33.65625H33.654297zm67.308593 100.96289h30.10352v34.77539h.28125l26.82617-34.77539h37.08594l-35.44532 39.45117 41.19532 61.51367h-37.50196l-24.08789-39.3125-8.35351 9.4629v29.8496h-30.10352V134.61914zm101.28711 0h30.11133v54.98242c0 10.319-.00099 23.17578 14.64258 23.17578 14.23752 0 14.23828-12.85678 14.23828-23.17578v-54.98242h30.10547v61.9043c0 27.977-14.6456 41.41406-44.48243 41.41406-29.83207 0-44.61523-13.43706-44.61523-41.41406v-61.9043zm133.25586 0h30.11719v75.07422h42.47851v25.89062h-72.5957V134.61914zm81.81836 0h80.13281v25.86914h-50.30078v12.5957h45.6875v24.03711h-45.6875v12.57227h51.7793v25.89062h-81.61133V134.61914zm89.35547 0h30.09961v54.98242c0 10.319-.00098 23.17578 14.64258 23.17578 14.23811 0 14.23828-12.85678 14.23828-23.17578v-54.98242h30.10937v61.9043c0 27.977-14.64253 41.41406-44.47461 41.41406-29.84335 0-44.61523-13.43706-44.61523-41.41406v-61.9043zm93.33984 0h30.38672l16.01758 61.22461h.27148l15.73828-61.22461h30.9336l-30.51953 100.96484h-33.66993l-29.1582-100.96484zm97.59766 0h80.11523v25.86914h-50.29687v12.5957h45.6914v24.03711h-45.6914v12.57227h51.79297v25.89062h-81.61133V134.61914zm89.39453 0h30.79687l28.46485 54.00781h.27344v-54.00781h28.46289v100.96484h-29.28321l-29.97265-55.1582h-.27735v55.1582h-28.46484V134.61914z"></path><path class="kul-text" fill="#FFF" d="M100.9627 134.61892h30.10336v34.77579h.28079l26.82655-34.77579h37.08559l-35.44362 39.4506 41.19407 61.51448h-37.50231l-24.08637-39.31169-8.3547 9.46121V235.584H100.9627V134.61892m190.38473 61.9039c0 27.977-14.64594 41.4149-44.48277 41.4149-29.83207 0-44.61454-13.4379-44.61454-41.4149v-61.9039h30.11048v54.98222c0 10.319 0 23.17694 14.64357 23.17694 14.23752 0 14.23752-12.85794 14.23752-23.17694v-54.98222h30.10574v61.9039m44.15804-61.9039h30.11702v75.07527h42.47927V235.584h-72.59629V134.61892m81.81827 0h80.13237v25.86903h-50.30029v12.59615h45.68841v24.0371h-45.68841v12.57299h51.77961V235.584h-81.61169V134.61892m178.44513 61.9039c0 27.977-14.64178 41.4149-44.47386 41.4149-29.84335 0-44.61454-13.4379-44.61454-41.4149v-61.9039h30.09861v54.98222c0 10.319 0 23.17694 14.64356 23.17694 14.23812 0 14.23812-12.85794 14.23812-23.17694v-54.98222h30.10811v61.9039m67.07972 39.06118h-33.67046l-29.1589-100.96508h30.38771l16.01603 61.22479h.27306l15.73703-61.22479h30.93387L662.84859 235.584m34.76864-100.96508h80.1158v25.86903h-50.2979v12.59615h45.6913v24.0371h-45.6913v12.57299h51.7938V235.584h-81.6117V134.61892m89.3942 0h30.7973l28.4643 54.00808h.2731v-54.00808h28.4644V235.584h-29.2836l-29.9722-55.15853h-.279V235.584h-28.4643V134.61892"></path><path class="eavise-bg" fill="none" d="M942.32172 33.656219h999.33545v302.89047H942.32172z"></path><g class="eavise-text" fill="#00407A"><path overflow="visible" fill-rule="evenodd" d="M1088.4359 85.836788c-6.5465.52587-14.0044 4.831627-21.462 9.137228l-22.3728 12.916824-22.3728 12.91681c-7.4576 4.3056-14.915 8.61105-18.6439 15.07002-3.72896 6.45898-3.72896 15.06947-3.72896 23.6808v51.66804c0 8.61134 0 17.22353 3.72926 23.68186 3.7294 6.45834 11.186 10.76337 18.6436 15.06897l22.3728 12.91681 22.3728 12.91682c7.4576 4.3056 14.9162 8.61178 22.3735 8.61142 7.4572-.00037 14.9146-4.30582 22.3722-8.61142l22.3728-12.91682 22.3728-12.91681c7.4576-4.3056 14.9155-8.61137 18.6442-14.01685 3.7287-5.40549 3.7287-11.91272 3.7287-18.41909v-39.03826c0-6.50638 0-13.0119-.9765-15.70174-.9765-2.68984-2.93-1.56198-4.8832-.43428l-5.8596 3.38312-5.8597 3.3831c-1.9532 1.12771-3.9062 2.25526-4.8829 4.9451-.9768 2.68984-.9768 6.93996-.9768 11.19093v25.5058c0 4.25096 0 8.50278-2.752 12.21677-2.7521 3.714-8.2568 6.89219-13.7611 10.07022l-16.5132 9.53409-16.5132 9.53408c-5.5044 3.17803-11.0085 6.35591-16.5125 6.35627-5.504.00037-11.0094-3.17824-16.5138-6.35627l-16.5132-9.53408-16.5131-9.53409c-5.5044-3.17803-11.0078-6.35548-13.7605-11.12233-2.7527-4.76684-2.7527-11.12362-2.7527-17.47955v-38.13557c0-6.35594 0-12.71102 2.7523-17.4785 2.7523-4.76748 8.2565-7.94535 13.7609-11.12338l16.5131-9.5341 16.5132-9.53408c5.5044-3.17803 11.009-6.35621 15.6023-6.88209 4.5933-.52587 8.2737 1.5991 11.9551 3.72464l11.0443 6.37665 11.0442 6.37665c3.6814 2.12555 7.3639 4.25168 8.1044 5.94908.7405 1.6974-1.4593 2.96756-3.6589 4.23755l-6.5989 3.80998-6.5988 3.80999c-2.1996 1.26999-4.3989 2.53983-6.2046 2.8696-1.8056.32976-3.2238-.2838-4.662-.80933-1.4382-.52554-2.9094-.96836-4.3963-1.32354-1.4869-.35519-2.9994-.62512-4.5198-.80635-1.5205-.18123-3.0591-.27469-6.4668.21123-3.4076.48592-8.6503 1.54437-13.2337 3.46263-4.5835 1.91826-8.8795 4.81472-12.347 8.28226-3.4676 3.46753-6.364 7.76355-8.2823 12.34699-1.9182 4.58342-2.9767 9.82611-2.9767 15.10267 0 5.27657 1.0585 10.51926 2.9767 15.10269 1.9183 4.58343 4.8147 8.87946 8.2823 12.34699 3.4675 3.46753 7.7635 6.364 12.347 8.28225 4.5834 1.91826 9.8261 2.97671 15.1026 2.97671 5.2766 0 10.5193-1.05845 15.1027-2.97671 4.5835-1.91825 8.8795-4.81472 12.347-8.28225 3.4675-3.46753 6.364-7.76356 8.2823-12.34699 1.9182-4.58343 2.9767-9.82612 3.4502-13.33267.4735-3.50654.3552-5.24295.1256-6.95328-.2295-1.71034-.5719-3.40933-1.0214-5.07173-.4495-1.66239-1.0101-3.30236-1.6738-4.8953-.6637-1.59295-1.4378-3.15468-.5049-4.69474.933-1.54007 3.5702-3.06277 6.2077-4.58562l7.9124-4.56857 7.9125-4.56857 7.9124-4.56855 5.8597-3.38312 5.8597-3.38311 5.8596-3.38312c1.9532-1.1277 3.9067-2.25556 3.9722-3.34529.066-1.08972-1.7585-2.14278-3.5814-3.19526l-5.469-3.15744-5.4689-3.15744-5.4689-3.15745-16.9039-9.75937-16.9039-9.75937-16.9039-9.759374c-5.6347-3.253122-11.2683-6.505664-17.8148-5.979788zm-4.4307 79.386072c1.4511 0 2.8928.29107 4.1533.81859 1.2604.52752 2.4418 1.32405 3.3954 2.27762.9536.95357 1.7501 2.13498 2.2776 3.39542.5275 1.26045.8186 2.70219.8186 4.15324 0 1.45106-.2911 2.89279-.8186 4.15324s-1.324 2.44184-2.2776 3.39542c-.9536.95357-2.135 1.75009-3.3954 2.27761-1.2605.52753-2.7022.81861-4.1533.81861-1.451-.00001-2.8927-.29108-4.1532-.81861-1.2604-.52752-2.4418-1.32403-3.3954-2.27761-.9536-.95358-1.7501-2.13498-2.2776-3.39543-.5276-1.26043-.8186-2.70217-.8186-4.15323 0-1.45105.291-2.89279.8186-4.15324.5275-1.26044 1.324-2.44185 2.2776-3.39542s2.135-1.7501 3.3954-2.27762c1.2604-.52752 2.7022-.81859 4.1532-.81859z"></path><path d="M1318.9715 223.34801l14.3424 11.95204-5.7369 4.78082q-4.3028 3.58561-5.9761 4.30273-1.4342.47809-5.7369.47809h-63.824q-5.7369 0-11.4739-4.78082l-5.737-4.78082q-5.737-4.78082-5.737-11.95204v-76.49309q0-7.17122 5.737-11.95204l5.737-4.78082q5.737-4.78082 11.4739-4.78082h55.6966q4.7808 0 11.4739 4.78082l5.976 4.78082q5.737 4.30274 5.737 11.95204v49.00338h-81.7519v22.46984q0 3.58562.239 4.78083.4781.95615 2.6294 2.62944 2.1514 1.67329 3.3466 2.15137 1.1952.23904 5.498.23904h46.3739q4.3027 0 5.737-.47808 1.6733-.71713 5.976-4.30273zm-8.1274-43.02737v-28.44586q0-3.58561-.4781-4.54178-.239-1.1952-2.3904-2.86849-2.1514-1.67328-3.3466-1.91232-1.1952-.47808-5.4979-.47808h-38.2465q-4.3028 0-5.498.47808-1.1952.23904-3.3466 1.91232-2.1513 1.67329-2.6294 2.86849-.239.95617-.239 4.54178v28.44586zm133.1159 54.97941h-.9562q0 2.86849-5.2589 5.97602-4.3027 2.62945-5.976 3.10753-1.4342.47809-5.737.47809h-40.876q-5.7369 0-11.4739-4.78082l-5.737-4.78082q-5.737-4.78082-5.737-11.95204V194.6631q0-7.17123 5.737-11.95204l5.737-4.78083q5.737-4.78081 11.4739-4.78081h42.7883q4.5418 0 5.737.47808 1.1952.23904 3.1076 1.91233 2.8685 2.3904 2.8685 4.78081h.9561v-28.44586q0-3.58561-.4781-4.54178-.239-1.1952-2.3904-2.86849-2.1513-1.67328-3.3465-1.91232-1.1953-.47808-5.498-.47808h-38.7246q-4.3027 0-5.976.71712-1.4343.47808-5.737 4.06369l-14.3425-11.95204 5.737-4.78082q4.3028-3.58561 5.737-4.06369 1.6733-.71713 5.976-.71713h56.1746q5.737 0 11.474 4.78082l5.737 4.78082q5.737 4.78082 5.737 11.95204v71.47322q0 3.58562.239 4.78083.4781.95616 2.6294 2.62944 2.1514 1.67329 2.3905 2.86849.478.95617.478 4.54178v11.71301h-8.3664q-4.3027 0-5.976-.47809-1.4343-.71712-4.3028-3.10753-3.8246-3.10753-3.8246-5.97602zm-61.6726-35.61709v18.64519q0 3.58561.2391 4.78082.4781.95616 2.6294 2.62945 2.1514 1.67328 3.3466 2.15136 1.1952.23904 5.4979.23904h29.163q4.3028 0 5.737-.47808 1.6733-.47808 5.976-3.10753 4.3028-2.62945 5.0199-3.82466.7171-1.1952.7171-4.78081v-16.25478q0-3.58562-.4781-4.54178-.239-1.1952-2.3904-2.86849-2.1513-1.67329-3.3465-1.91233-1.1953-.47808-5.498-.47808h-34.9q-4.3027 0-5.4979.47808-1.1952.23904-3.3466 1.91233-2.1513 1.67329-2.6294 2.86849-.2391.95616-.2391 4.54178zm156.908 23.18697l31.5534-97.52869h19.8404l-41.5932 119.52045h-22.9479l-41.5931-119.52045h19.8404l31.5534 97.52869q1.1952 3.58561 1.1952 5.73698h.9562q0-2.15137 1.1952-5.73698zm90.5031 21.99176h-20.0794V125.34124h20.0794zm105.869-69.32186q5.7369 0 11.4739 4.78081l5.737 4.78082q5.737 4.78082 5.737 11.95205v26.2945q0 7.17122-5.737 11.95204l-5.737 4.78082q-5.737 4.78082-11.4739 4.78082h-53.0671q-5.737 0-11.474-4.78082l-5.737-4.78082q-5.737-4.78082-5.737-11.95204v-9.56164h20.0795v4.54178q0 3.58561.239 4.78082.4781.95616 2.6295 2.62945 2.1513 1.67328 3.3465 2.15136 1.1952.23904 5.498.23904h35.378q4.3028 0 5.498-.23904 1.1952-.47808 3.3466-2.15136 2.1513-1.67329 2.3904-2.62945.4781-1.19521.4781-4.78082v-19.36232q-.2391-1.91232-2.8685-4.30273-2.1514-1.67329-3.3466-1.91233-1.1952-.47808-5.498-.47808h-41.8321q-5.737 0-11.474-4.78082l-5.737-4.78081q-5.7369-4.78082-5.7369-11.95204v-23.9041q0-7.17122 5.7369-11.95204l5.737-4.78082q5.737-4.78082 11.474-4.78082h50.6767q5.7369 0 11.4739 4.78082l5.737 4.78082q5.737 4.78082 5.737 11.95204v9.56164h-20.0794v-4.54178q0-3.58561-.4781-4.54178-.2391-1.1952-2.3904-2.86849-2.1514-1.67328-3.3466-1.91232-1.1952-.47808-5.498-.47808h-32.9876q-4.3027 0-5.498.47808-1.1952.23904-3.3465 1.91232-2.1514 1.67329-2.6295 2.86849-.239.95617-.239 4.54178v13.86437q0 3.58561.239 4.78082.4781.95616 2.6295 2.62945 2.1513 1.67328 3.3465 2.15137 1.1953.23904 5.498.23904zm141.3217 47.80818l14.3424 11.95204-5.7369 4.78082q-4.3028 3.58561-5.9761 4.30273-1.4342.47809-5.737.47809h-63.8239q-5.737 0-11.4739-4.78082l-5.737-4.78082q-5.737-4.78082-5.737-11.95204v-76.49309q0-7.17122 5.737-11.95204l5.737-4.78082q5.7369-4.78082 11.4739-4.78082h55.6966q4.7808 0 11.4739 4.78082l5.976 4.78082q5.737 4.30274 5.737 11.95204v49.00338h-81.752v22.46984q0 3.58562.2391 4.78083.4781.95615 2.6294 2.62944 2.1514 1.67329 3.3466 2.15137 1.1952.23904 5.4979.23904h46.374q4.3027 0 5.7369-.47808 1.6734-.71713 5.9761-4.30273zm-8.1274-43.02737v-28.44586q0-3.58561-.4781-4.54178-.239-1.1952-2.3904-2.86849-2.1514-1.67328-3.3466-1.91232-1.1952-.47808-5.4979-.47808h-38.2466q-4.3027 0-5.4979.47808-1.1952.23904-3.3466 1.91232-2.1513 1.67329-2.6294 2.86849-.2391.95617-.2391 4.54178v28.44586z"></path></g>',5),KV=[NV],XV={__name:"LogoEaviseKUL",setup(t){return H(tt),(e,a)=>(y(),X("svg",UV,KV))}},JV=at(XV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/slidev-theme-eavise@1.0.0/node_modules/slidev-theme-eavise/components/LogoEaviseKUL.vue"]]);const jV=t=>(At("data-v-d5f97f22"),t=t(),Ot(),t),FV={class:"meta"},AV=jV(()=>o("br",null,null,-1)),OV={class:"logo"},MV={__name:"cover",props:{image:String,imageFilter:String,imageTransform:String,textColor:{type:String,default:"white"},color:{type:String,default:"var(--slidev-theme-primary)"},colorOpacity:Number,author:String,date:{type:String,default(){const t=new Date,e=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),a=new Intl.DateTimeFormat("en",{month:"long"}).format(t);return`${new Intl.DateTimeFormat("en",{day:"numeric"}).format(t)} ${a} ${e}`}}},setup(t){const e=t;return H(tt),(a,i)=>{const r=mt("animattr");return D((y(),C(wV,{image:e.image,imageFilter:e.imageFilter,imageTransform:e.imageTransform,textColor:e.textColor,color:e.color,colorOpacity:e.colorOpacity,class:"cover",length:2},{default:j(()=>[z1(a.$slots,"default",{},void 0,!0),o("div",FV,[it(L1(t.author)+" ",1),AV,it(" "+L1(t.date),1)]),o("div",OV,[A(JV)])]),_:3},8,["image","imageFilter","imageTransform","textColor","color","colorOpacity"])),[[r]])}}},LV=at(MV,[["__scopeId","data-v-d5f97f22"],["__file","/home/runner/work/phd-defense/phd-defense/layouts/cover.vue"]]);const $5=t=>(At("data-v-42c5a5a3"),t=t(),Ot(),t),zV=$5(()=>o("h1",null,"Aerial Object Detection",-1)),WV=$5(()=>o("h2",null,"PhD Defense",-1)),CV=$5(()=>o("div",{class:"quote"},[o("p",null,[o("strong",null,"1052")]),o("p",null,[it("satellites"),o("br"),it(" observing"),o("br"),it(" earth")])],-1)),QV={__name:"1",setup(t){const e={theme:"eavise",addons:["slidev-addon-animattr"],transition:"fade",author:"Tanguy Ophoff",date:"26 June 2023",image:"/earthobservation.jpg","image-transform":"scale(1.1)","image-filter":"grayscale(0.4)","color-opacity":.5};return H(tt),(a,i)=>(y(),C(LV,yt(qt(e)),{default:j(()=>[zV,WV,CV]),_:1},16))}},HV=at(QV,[["__scopeId","data-v-42c5a5a3"],["__file","/@slidev/slides/1.md"]]);const ZV={__name:"Block",props:{color:{type:String,default:"var(--slidev-theme-primary)"},colorOpacity:Number,image:String,imageFilter:String,imageTransform:String},setup(t){const e=t;return qh(a=>({"73c3e586-props.colorOpacity":e.colorOpacity,"73c3e586-props.image":e.image,"73c3e586-props.imageFilter":e.imageFilter,"73c3e586-props.imageTransform":e.imageTransform})),H(tt),(a,i)=>(y(),X("div",{class:Ct(["block",t.image?"image-block":""]),style:Yt({"--color":t.color})},[z1(a.$slots,"default",{},void 0,!0)],6))}},B1=at(ZV,[["__scopeId","data-v-73c3e586"],["__file","/home/runner/work/phd-defense/phd-defense/components/Block.vue"]]),GV={__name:"none",setup(t){return H(tt),(e,a)=>(y(),X("div",null,[z1(e.$slots,"default")]))}},Kc=at(GV,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/layouts/none.vue"]]);const t0=t=>(At("data-v-ae5e7f61"),t=t(),Ot(),t),PV={class:"!w-full !h-full bg-black grid grid-rows-[1fr_1fr_1fr] grid-gap-4 grid-hidden text-white"},YV=t0(()=>o("p",null,[it("How can we adapt detection algorithms"),o("br"),it(" to work on remote sensing data?")],-1)),BV=t0(()=>o("p",null,[it("How to combine color and depth data"),o("br"),it(" to improve detection models?")],-1)),DV=t0(()=>o("p",null,[it("How much can we speed up our models"),o("br"),it(" whilst maintaining the accuracy?")],-1)),_V={style:{display:"none"}},$V={__name:"2",setup(t){const e={layout:"none"};return H(tt),(a,i)=>{const r=B1,c=mt("click");return y(),C(Kc,yt(qt(e)),{default:j(()=>[o("div",PV,[D((y(),C(r,{class:"w-full h-full flex flex-items-center flex-justify-center p-5","color-opacity":.6,image:"url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)",imageFilter:"grayscale(0.9)"},{default:j(()=>[YV]),_:1})),[[c]]),D((y(),C(r,{class:"w-full h-full flex flex-items-center flex-justify-center p-5","color-opacity":.6,image:"url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",imageFilter:"grayscale(0.9)"},{default:j(()=>[BV]),_:1})),[[c]]),D((y(),C(r,{class:"w-full h-full flex flex-items-center flex-justify-center p-5","color-opacity":.6,image:"url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)",imageFilter:"grayscale(0.9)"},{default:j(()=>[DV]),_:1})),[[c]]),D(o("div",_V,null,512),[[c]])])]),_:1},16)}}},ty=at($V,[["__scopeId","data-v-ae5e7f61"],["__file","/@slidev/slides/2.md"]]),ey={viewBox:"0 0 500 500"},ay=o("path",{id:"path1684",d:"M249.999 98.479c-2.286 0-4.57.418-6.738 1.255L12.08 188.969C4.347 191.902 0 199.351 0 206.473c0 7.121 4.347 14.568 12.08 17.502l92.955 35.795v74.115a18.729 18.729 0 0 0 5.99 13.851l.025.024.022.022c78.696 71.653 199.158 71.653 277.854 0l.024-.022.025-.024a18.729 18.729 0 0 0 5.99-13.851v-74.108l34.823-13.362v32.881c-21.859 8.407-25.018 43.635-7.714 59.476l-11.322 19.54c-5.24 8.173-2.026 20.546 6.924 25.649l.01.004.006.003a18.737 18.737 0 0 0 9.362 2.433c6.634-.041 12.748-3.885 16.093-9.358l5.358-9.058 5.363 9.058c3.292 5.485 9.464 9.358 16.1 9.358h.014c14.096 0 22.735-16.953 16.288-28.078l-.028-.047-11.706-19.57c17.496-14.588 13.542-48.753-7.54-59.25v-47.32l20.924-8.043.006-.004c7.728-2.934 12.073-10.382 12.073-17.502 0-5.524-2.676-11.178-7.46-14.836v-.997l-4.58-1.77-231.22-89.25A18.715 18.715 0 0 0 250 98.479zm0 38.844 179.194 69.098L250 275.621l-179.193-69.2ZM142.475 274.204l100.91 39.056.132.045a19.99 19.99 0 0 0 12.965 0l.132-.045 100.91-39.056v51.164c-62.447 51.618-152.601 51.618-215.049 0z"},null,-1),iy=[ay];function ry(t,e){return y(),X("svg",ey,iy)}const Xc={render:ry,__scopeId:"data-v-bf057fe0",__name:"IconTeach",__file:"/home/runner/work/phd-defense/phd-defense/components/icons/IconTeach.svg"},cy={id:"svg139",version:"1.1",viewBox:"0 0 500 500"},ny=Zt('<defs id="defs59"><symbol id="s" overflow="visible"><path id="path2" d="M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 0 0-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z"></path></symbol><symbol id="d" overflow="visible"><path id="path5" d="M13.734-11.141a6.765 6.765 0 0 0-1.297-.438 5.346 5.346 0 0 0-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z"></path></symbol><symbol id="a" overflow="visible"><path id="path8" d="M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 0 0 3.157-.454 16.707 16.707 0 0 0 3.328-1.39v3.765a20.629 20.629 0 0 1-3.47.985A18.006 18.006 0 0 1 9.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797-.594.531-.965 1.297-1.11 2.297z"></path></symbol><symbol id="f" overflow="visible"><path id="path11" d="M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 0 1 3.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z"></path></symbol><symbol id="c" overflow="visible"><path id="path14" d="M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437.281.25.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z"></path></symbol><symbol id="k" overflow="visible"><path id="path17" d="M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985C9.735.18 8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.813-5.797 1.206-1.5 2.753-2.25 4.64-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z"></path></symbol><symbol id="j" overflow="visible"><path id="path20" d="M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89Z"></path></symbol><symbol id="i" overflow="visible"><path id="path23" d="M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421Z"></path></symbol><symbol id="b" overflow="visible"><path id="path26" d="M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735-.062-.5-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z"></path></symbol><symbol id="h" overflow="visible"><path id="path29" d="M12.766-2.594c-.668.887-1.406 1.543-2.219 1.969C9.735-.207 8.79 0 7.72 0 5.852 0 4.313-.734 3.094-2.203 1.875-3.68 1.266-5.555 1.266-7.828c0-2.29.61-4.164 1.828-5.625 1.219-1.469 2.758-2.203 4.625-2.203 1.07 0 2.016.215 2.828.64.813.418 1.551 1.075 2.219 1.97v-2.266h4.922v13.766c0 2.457-.777 4.336-2.328 5.64-1.555 1.301-3.809 1.953-6.766 1.953-.949 0-1.87-.074-2.765-.218a17.74 17.74 0 0 1-2.703-.672V1.344c.863.488 1.703.852 2.515 1.094.82.238 1.648.36 2.484.36 1.602 0 2.774-.352 3.516-1.048.75-.699 1.125-1.796 1.125-3.296zm-3.219-9.531c-1.012 0-1.805.375-2.375 1.125-.562.742-.844 1.797-.844 3.172 0 1.398.27 2.46.813 3.187.55.72 1.352 1.079 2.406 1.079 1.02 0 1.813-.368 2.375-1.11.563-.75.844-1.8.844-3.156 0-1.375-.281-2.43-.844-3.172-.562-.75-1.355-1.125-2.375-1.125z"></path></symbol><symbol id="g" overflow="visible"><path id="path32" d="M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.392-2.66-1.392-4.734Z"></path></symbol><symbol id="r" overflow="visible"><path id="path35" d="M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.53v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z"></path></symbol><symbol id="e" overflow="visible"><path id="path38" d="M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.204-2.125-1.492-1.426-2.234-3.394-2.234-5.906 0-2.52.742-4.488 2.234-5.906 1.489-1.426 3.555-2.141 6.204-2.141z"></path></symbol><symbol id="q" overflow="visible"><path id="path41" d="M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 0 1 2.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z"></path></symbol><symbol id="p" overflow="visible"><path id="path44" d="M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765-.062-.5-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z"></path></symbol><symbol id="o" overflow="visible"><path id="path47" d="M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.577Z"></path></symbol><symbol id="n" overflow="visible"><path id="path50" d="M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z"></path></symbol><symbol id="m" overflow="visible"><path id="path53" d="M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36Z"></path></symbol><symbol id="l" overflow="visible"><path id="path56" d="M14.719-14.828v3.984a7.612 7.612 0 0 0-2-1.015 6.629 6.629 0 0 0-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 0 0 1.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 0 1-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z"></path></symbol></defs><g id="g337" style="stroke-width:1.015;" transform="translate(0 7.39) scale(.98522)"><path id="path988" d="M346.493 94.714c-11.344 0-22.646 4.52-30.96 12.834l-30.412 30.413c-16.17-3.868-34.138.653-46.53 13.044l-.01.013-46.67 48.075c-19.03-6.848-38.775-10.337-59.85-10.337-47.669 0-93.187 18.787-127.13 52.729-6.575 6.574-6.575 16.875 0 23.45l60.56 60.557c-20.741 30.71-18.14 72.336 9.254 99.73 15.435 15.436 35.333 22.81 55.18 22.81 15.513 0 30.974-4.873 44.515-14.305l60.595 60.593c3.285 3.285 7.498 4.999 11.722 4.999 4.223 0 8.44-1.714 11.725-4.999 33.929-33.93 52.728-78.76 52.728-127.13 0-20.398-3.488-40.78-10.345-59.87l47.33-47.33c13.16-11.053 17.665-29.019 13.807-45.143l30.413-30.416c8.261-8.261 12.836-18.942 12.836-30.96 0-11.344-4.522-22.645-12.836-30.96l-14.962-14.963c-8.261-8.26-18.942-12.834-30.96-12.834zm.364 33.948c2.559 0 5.117 1.02 7.154 3.056l14.96 14.963c1.554 1.553 2.84 4.776 2.84 6.797 0 2.902-1.09 5.047-2.84 6.796l-24.606 24.608-28.579-28.581 23.914-24.583h.003c2.036-2.036 4.596-3.056 7.154-3.056zm-73.04 42.694c3.853-.23 7.873.85 11.302 3.316l42.356 42.357c4.054 5.271 3.576 14.718-2.041 20.974l-39.027 39.027c-7.562-12.65-16.39-24.67-27.209-34.83l-.017-.018c-10.76-10.756-22.22-19.594-34.825-27.18l39.115-39.113c2.752-2.752 6.463-4.301 10.346-4.533zm-141.036 50.85c39.244 0 75.638 15.396 102.972 42.73 27.314 27.314 42.722 64.434 42.729 102.947-.691 34.166-11.402 65.5-31.964 91.025L41.78 254.171c25.574-20.609 57.588-31.965 91.001-31.965ZM90.756 350.047l59.94 59.939c-17.119 8.879-38.352 5.868-51.744-8.166l-.01-.012-.02-.022-.01-.011c-14.059-14.06-16.491-34.64-8.156-51.728Z" style="stroke:none;stroke-width:5.075;-inkscape-stroke:none;"></path><path id="path994" d="M400.301 248.97v.001c-4.223 0-8.44 1.713-11.725 4.999l-64.827 64.828c-6.575 6.575-6.574 16.874 0 23.45L432.03 451.242l.003.001c3.285 3.286 7.501 4.999 11.725 4.999 4.223 0 8.436-1.713 11.722-4.999l34.196-34.195c11.15-11.15 17.824-26.688 17.824-42.358 0-16.273-5.983-31.257-17.882-42.415l-77.59-78.301-.005-.004c-3.286-3.286-7.499-5-11.722-5zm0 40.886 65.925 65.927c5.263 5.262 7.825 11.67 7.825 18.906 0 7.237-2.562 13.648-7.823 18.904l-22.47 22.47-84.833-84.83z" style="stroke:none;stroke-width:5.075;-inkscape-stroke:none;"></path><path id="path1007" d="M125.99-6.819c-16.272 0-31.257 5.983-42.415 17.883L49.437 45.199c-6.575 6.575-6.575 16.871 0 23.446l108.287 108.287c1.952 1.949 4.246 3.273 6.658 4.086l-.914.914h5.978c4.223 0 8.438-1.714 11.723-5l64.83-64.827c3.285-3.285 5-7.501 5-11.725 0-4.22-1.712-8.432-4.993-11.716l-.007-.007-76.962-77.68-.035-.03C157.212-.104 142.338-6.82 125.99-6.82Zm.71 33.45c7.236 0 13.65 2.562 18.906 7.822l65.925 65.927-41.38 41.381-84.828-84.836 22.47-22.472c5.263-5.262 11.67-7.822 18.907-7.822z" style="stroke:none;stroke-width:5.075;-inkscape-stroke:none;"></path></g>',2),ly=[ny];function dy(t,e){return y(),X("svg",cy,ly)}const Jc={render:dy,__scopeId:"data-v-7968f00d",__name:"IconSatellite",__file:"/home/runner/work/phd-defense/phd-defense/components/icons/IconSatellite.svg"},hy={id:"svg4",version:"1.1",viewBox:"0 0 500 500"},sy=o("path",{id:"path2",d:"m402.488 295.423-124.84-74.906.004-124.99 21.926 21.926a27.643 27.643 0 0 0 39.128.023 27.644 27.644 0 0 0-.023-39.127L269.546 9.216a27.639 27.639 0 0 0-19.551-8.106 27.64 27.64 0 0 0-19.551 8.106l-69.137 69.133a27.652 27.652 0 0 0 39.105 39.105l21.93-21.926v124.99l-124.84 74.906a27.645 27.645 0 0 0-13.43 23.71v152.1c0 9.88 5.27 19.009 13.828 23.95a27.643 27.643 0 0 0 27.652 0 27.653 27.653 0 0 0 13.828-23.95v-136.44L250 268.429l110.62 66.367v136.44c0 9.883 5.27 19.012 13.828 23.949a27.643 27.643 0 0 0 27.652 0 27.643 27.643 0 0 0 13.828-23.95v-152.1a27.645 27.645 0 0 0-13.43-23.71z"},null,-1),oy=[sy];function py(t,e){return y(),X("svg",hy,oy)}const jc={render:py,__scopeId:"data-v-aa78700a",__name:"IconFusion",__file:"/home/runner/work/phd-defense/phd-defense/components/icons/IconFusion.svg"},fy={id:"svg151",version:"1.1",viewBox:"0 0 500 500"},vy=Zt('<defs id="defs65"><symbol id="g" overflow="visible"><path id="path2" d="M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 0 0-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z"></path></symbol><symbol id="a" overflow="visible"><path id="path5" d="M13.734-11.141a6.765 6.765 0 0 0-1.297-.438 5.346 5.346 0 0 0-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z"></path></symbol><symbol id="b" overflow="visible"><path id="path8" d="M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 0 0 3.157-.454 16.707 16.707 0 0 0 3.328-1.39v3.765a20.629 20.629 0 0 1-3.47.985A18.006 18.006 0 0 1 9.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797-.594.531-.965 1.297-1.11 2.297z"></path></symbol><symbol id="e" overflow="visible"><path id="path11" d="M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 0 1 3.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z"></path></symbol><symbol id="d" overflow="visible"><path id="path14" d="M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437.281.25.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z"></path></symbol><symbol id="k" overflow="visible"><path id="path17" d="M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985C9.735.18 8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.813-5.797 1.206-1.5 2.753-2.25 4.64-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z"></path></symbol><symbol id="j" overflow="visible"><path id="path20" d="M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89Z"></path></symbol><symbol id="i" overflow="visible"><path id="path23" d="M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421Z"></path></symbol><symbol id="h" overflow="visible"><path id="path26" d="M20.922-1.516a18.951 18.951 0 0 1-4.094 1.438 20.128 20.128 0 0 1-4.375.469c-3.398 0-6.09-.946-8.078-2.844-1.992-1.906-2.984-4.485-2.984-7.735 0-3.289 1.008-5.878 3.03-7.765 2.032-1.883 4.806-2.828 8.329-2.828 1.352 0 2.648.133 3.89.39 1.25.25 2.426.625 3.532 1.125v4.22c-1.149-.645-2.281-1.126-3.406-1.438a12.28 12.28 0 0 0-3.375-.485c-2.106 0-3.727.59-4.86 1.766-1.125 1.168-1.687 2.84-1.687 5.015 0 2.157.547 3.825 1.64 5 1.094 1.18 2.645 1.766 4.657 1.766.539 0 1.046-.031 1.515-.094.477-.07.899-.18 1.266-.328v-3.969h-3.203v-3.515h8.203z"></path></symbol><symbol id="u" overflow="visible"><path id="path29" d="M12.766-2.594c-.668.887-1.406 1.543-2.219 1.969C9.735-.207 8.79 0 7.72 0 5.852 0 4.313-.734 3.094-2.203 1.875-3.68 1.266-5.555 1.266-7.828c0-2.29.61-4.164 1.828-5.625 1.219-1.469 2.758-2.203 4.625-2.203 1.07 0 2.016.215 2.828.64.813.418 1.551 1.075 2.219 1.97v-2.266h4.922v13.766c0 2.457-.777 4.336-2.328 5.64-1.555 1.301-3.809 1.953-6.766 1.953-.949 0-1.87-.074-2.765-.218a17.74 17.74 0 0 1-2.703-.672V1.344c.863.488 1.703.852 2.515 1.094.82.238 1.648.36 2.484.36 1.602 0 2.774-.352 3.516-1.048.75-.699 1.125-1.796 1.125-3.296zm-3.219-9.531c-1.012 0-1.805.375-2.375 1.125-.562.742-.844 1.797-.844 3.172 0 1.398.27 2.46.813 3.187.55.72 1.352 1.079 2.406 1.079 1.02 0 1.813-.368 2.375-1.11.563-.75.844-1.8.844-3.156 0-1.375-.281-2.43-.844-3.172-.562-.75-1.355-1.125-2.375-1.125z"></path></symbol><symbol id="c" overflow="visible"><path id="path32" d="M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.204-2.125-1.492-1.426-2.234-3.394-2.234-5.906 0-2.52.742-4.488 2.234-5.906 1.489-1.426 3.555-2.141 6.204-2.141z"></path></symbol><symbol id="t" overflow="visible"><path id="path35" d="M14.312-14.828v3.719a18.075 18.075 0 0 0-3.031-.985 12.73 12.73 0 0 0-2.766-.328c-.93 0-1.62.117-2.078.344-.45.23-.672.59-.672 1.078 0 .387.172.684.516.89.344.212.957.368 1.844.47l.859.125c2.508.324 4.195.851 5.063 1.578.863.73 1.296 1.87 1.296 3.422 0 1.636-.605 2.867-1.812 3.687-1.2.813-2.992 1.219-5.375 1.219C7.133.39 6.082.313 5 .156a25.26 25.26 0 0 1-3.313-.718v-3.72c.969.481 1.961.84 2.985 1.079 1.03.23 2.078.344 3.14.344.957 0 1.676-.13 2.156-.39.477-.27.72-.665.72-1.188 0-.438-.169-.758-.5-.97-.337-.218-.997-.382-1.985-.5l-.86-.109c-2.18-.269-3.703-.773-4.578-1.515-.875-.738-1.312-1.86-1.312-3.36 0-1.625.55-2.828 1.656-3.609 1.113-.789 2.82-1.187 5.125-1.187.895 0 1.836.074 2.828.218 1 .137 2.082.352 3.25.641z"></path></symbol><symbol id="f" overflow="visible"><path id="path38" d="M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735-.062-.5-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z"></path></symbol><symbol id="s" overflow="visible"><path id="path41" d="M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.53v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z"></path></symbol><symbol id="r" overflow="visible"><path id="path44" d="M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 0 1 2.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z"></path></symbol><symbol id="q" overflow="visible"><path id="path47" d="M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765-.062-.5-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z"></path></symbol><symbol id="p" overflow="visible"><path id="path50" d="M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.577Z"></path></symbol><symbol id="o" overflow="visible"><path id="path53" d="M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.392-2.66-1.392-4.734Z"></path></symbol><symbol id="n" overflow="visible"><path id="path56" d="M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z"></path></symbol><symbol id="m" overflow="visible"><path id="path59" d="M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36Z"></path></symbol><symbol id="l" overflow="visible"><path id="path62" d="M14.719-14.828v3.984a7.612 7.612 0 0 0-2-1.015 6.629 6.629 0 0 0-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 0 0 1.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 0 1-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z"></path></symbol></defs><path id="path67" d="M421.012.007a79.378 79.378 0 0 0-57.286 24.789l-48.116 51.14L128.817 41.98c-5.322-.93-10.8.204-15.311 3.179l-62.49 41.662v-.004a20.838 20.838 0 0 0-9.281 17.833 20.838 20.838 0 0 0 10.113 17.371l140.92 84.524c-12.55 13.695-24.894 27.494-36.82 40.826l-89.253-17.81a20.834 20.834 0 0 0-18.852 5.677L6.18 276.902h.004a20.828 20.828 0 0 0-5.936 18.021 20.837 20.837 0 0 0 11.14 15.36l118.891 59.472 59.366 118.781a20.839 20.839 0 0 0 15.417 11.407c1.108.076 2.223.076 3.33 0a20.814 20.814 0 0 0 14.738-6.096l41.662-41.662v.004a20.84 20.84 0 0 0 5.677-18.802l-17.865-89.362 40.725-36.766 84.674 141.128.004-.004a20.83 20.83 0 0 0 17.338 9.896 20.833 20.833 0 0 0 17.865-9.27l41.661-62.492h-.004a21.135 21.135 0 0 0 3.179-15.311l-33.954-186.593 51.034-48.067A79.002 79.002 0 0 0 421.02 0Zm25.569 106.237-59.315 55.775a20.841 20.841 0 0 0-6.198 18.904l34.473 189.513-18.748 28.07-80.82-134.675a20.831 20.831 0 0 0-31.868-4.686l-68.217 61.972a20.83 20.83 0 0 0-6.458 19.529l18.017 89.99-13.331 13.332-49.576-98.946v-.004a21.23 21.23 0 0 0-9.321-9.32L56.275 286.12l13.332-13.331 89.828 17.81a20.831 20.831 0 0 0 19.583-6.56l5.522-6.198c17.966-20.102 36.92-41.295 56.085-61.66h-.004a20.83 20.83 0 0 0-4.424-32.13l-134.672-80.825 28.12-18.747 189.452 34.472.004.004a20.84 20.84 0 0 0 18.904-6.197l55.875-59.421a37.347 37.347 0 0 1 36.086-9.593 37.344 37.344 0 0 1 16.615 62.506z" style="stroke-width:1;"></path>',2),uy=[vy];function my(t,e){return y(),X("svg",fy,uy)}const Fc={render:my,__scopeId:"data-v-ef7c1f94",__name:"IconPlane",__file:"/home/runner/work/phd-defense/phd-defense/components/icons/IconPlane.svg"},qy={id:"svg155",version:"1.1",viewBox:"0 0 500 500"},by=Zt('<defs id="defs65"><symbol id="h" overflow="visible"><path id="path2" d="M18.766-1.125c-.969.5-1.98.875-3.031 1.125-1.043.258-2.137.39-3.281.39-3.399 0-6.09-.945-8.079-2.843-1.992-1.906-2.984-4.485-2.984-7.735 0-3.257.992-5.835 2.984-7.734 1.989-1.906 4.68-2.86 8.079-2.86 1.144 0 2.238.133 3.28.391 1.052.25 2.063.625 3.032 1.125v4.219c-.98-.656-1.945-1.14-2.89-1.453a9.532 9.532 0 0 0-3-.469c-1.876 0-3.352.606-4.423 1.813-1.074 1.199-1.609 2.855-1.609 4.968 0 2.106.535 3.762 1.61 4.97C9.523-4.02 11-3.423 12.874-3.423c1.051 0 2.051-.148 3-.453.946-.312 1.91-.8 2.891-1.469z"></path></symbol><symbol id="c" overflow="visible"><path id="path5" d="M13.734-11.141a6.765 6.765 0 0 0-1.297-.438 5.346 5.346 0 0 0-1.265-.156c-1.262 0-2.231.406-2.907 1.219-.68.805-1.015 1.953-1.015 3.453V0H2.36v-15.312h4.89v2.515c.625-1 1.344-1.726 2.156-2.187.82-.469 1.8-.703 2.937-.703.164 0 .344.011.532.03.195.013.476.04.843.079z"></path></symbol><symbol id="a" overflow="visible"><path id="path8" d="M17.641-7.703v1.406H6.188c.125 1.148.54 2.008 1.25 2.578.707.574 1.703.86 2.984.86a11.52 11.52 0 0 0 3.157-.454 16.707 16.707 0 0 0 3.328-1.39v3.765a20.629 20.629 0 0 1-3.47.985A18.006 18.006 0 0 1 9.97.39C7.196.39 5.04-.313 3.5-1.72 1.97-3.125 1.203-5.098 1.203-7.64c0-2.5.754-4.46 2.266-5.89 1.508-1.438 3.582-2.157 6.219-2.157 2.406 0 4.332.731 5.781 2.188 1.445 1.45 2.172 3.383 2.172 5.797zM12.61-9.328c0-.926-.274-1.672-.813-2.234-.543-.57-1.25-.86-2.125-.86-.949 0-1.719.266-2.312.797-.594.531-.965 1.297-1.11 2.297z"></path></symbol><symbol id="l" overflow="visible"><path id="path11" d="M9.219-6.89c-1.024 0-1.793.171-2.313.515-.511.344-.765.855-.765 1.531 0 .625.207 1.117.625 1.469.414.344.988.516 1.718.516.926 0 1.704-.328 2.329-.985.632-.664.953-1.492.953-2.484v-.563zm7.469-1.844V0h-4.922v-2.266c-.657.93-1.399 1.606-2.22 2.032-.823.414-1.823.625-3 .625-1.585 0-2.87-.457-3.859-1.375-.992-.926-1.484-2.13-1.484-3.61 0-1.789.613-3.101 1.844-3.937 1.238-.844 3.18-1.266 5.828-1.266h2.89v-.39c0-.77-.308-1.333-.921-1.688-.617-.363-1.57-.547-2.86-.547-1.054 0-2.03.106-2.937.313-.899.21-1.73.523-2.5.937v-3.734c1.039-.25 2.086-.442 3.14-.578a25.68 25.68 0 0 1 3.188-.204c2.758 0 4.75.547 5.969 1.641 1.226 1.086 1.844 2.856 1.844 5.313z"></path></symbol><symbol id="b" overflow="visible"><path id="path14" d="M7.703-19.656v4.344h5.047v3.5H7.703v6.5c0 .71.14 1.187.422 1.437.281.25.836.375 1.672.375h2.515V0H8.125C6.187 0 4.812-.398 4-1.203c-.805-.812-1.203-2.18-1.203-4.11v-6.5H.375v-3.5h2.422v-4.343z"></path></symbol><symbol id="e" overflow="visible"><path id="path17" d="M12.766-13.078v-8.203h4.922v21.28h-4.922v-2.218c-.668.906-1.406 1.57-2.219 1.985C9.735.18 8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.211-1.5-1.813-3.426-1.813-5.782 0-2.363.602-4.297 1.813-5.797 1.206-1.5 2.753-2.25 4.64-2.25 1.063 0 2 .215 2.813.641.82.43 1.566 1.086 2.234 1.969zM9.547-3.156c1.04 0 1.836-.379 2.39-1.14.552-.77.829-1.883.829-3.344 0-1.457-.277-2.567-.828-3.329-.555-.77-1.352-1.156-2.39-1.156-1.044 0-1.84.387-2.391 1.156-.555.762-.829 1.872-.829 3.329 0 1.46.274 2.574.829 3.343.55.762 1.347 1.14 2.39 1.14z"></path></symbol><symbol id="k" overflow="visible"><path id="path20" d="M10.5-3.156c1.05 0 1.852-.38 2.406-1.14.551-.77.828-1.884.828-3.345 0-1.457-.277-2.566-.828-3.328-.554-.77-1.355-1.156-2.406-1.156-1.055 0-1.86.387-2.422 1.156-.555.774-.828 1.883-.828 3.328 0 1.45.273 2.559.828 3.329.563.773 1.367 1.156 2.422 1.156zm-3.25-9.922c.676-.883 1.422-1.54 2.234-1.969.82-.426 1.766-.64 2.829-.64 1.894 0 3.445.75 4.656 2.25 1.207 1.5 1.812 3.433 1.812 5.796 0 2.356-.605 4.282-1.812 5.782C15.758-.36 14.207.39 12.312.39 11.25.39 10.305.18 9.484-.234 8.672-.66 7.926-1.32 7.25-2.22V0H2.36v-21.281h4.89Z"></path></symbol><symbol id="j" overflow="visible"><path id="path23" d="M.344-15.312h4.89L9.36-4.921l3.5-10.391h4.89L11.313 1.454c-.648 1.695-1.402 2.883-2.265 3.562-.867.688-2 1.032-3.406 1.032H2.797v-3.22h1.531c.832 0 1.438-.136 1.813-.405.382-.262.68-.73.89-1.407l.14-.421Z"></path></symbol><symbol id="i" overflow="visible"><path id="path26" d="M14.953-3.719H6.734L5.422 0H.14l7.562-20.406h6.266L21.53 0H16.25ZM8.047-7.5h5.578l-2.781-8.125z"></path></symbol><symbol id="u" overflow="visible"><path id="path29" d="M2.36-15.312h4.89V0H2.36Zm0-5.969h4.89v4H2.36Z"></path></symbol><symbol id="g" overflow="visible"><path id="path32" d="M17.75-9.328V0h-4.922v-7.14c0-1.32-.031-2.235-.094-2.735-.062-.5-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-15.311h4.89v2.234c.738-.883 1.52-1.539 2.344-1.969.832-.425 1.75-.64 2.75-.64 1.77 0 3.113.547 4.031 1.64.914 1.086 1.375 2.657 1.375 4.72z"></path></symbol><symbol id="d" overflow="visible"><path id="path35" d="M9.64-12.188c-1.085 0-1.914.39-2.484 1.172-.574.781-.86 1.906-.86 3.375s.286 2.594.86 3.375c.57.773 1.399 1.156 2.485 1.156 1.062 0 1.875-.383 2.437-1.156.57-.781.86-1.906.86-3.375s-.29-2.594-.86-3.375c-.562-.781-1.375-1.172-2.437-1.172zm0-3.5c2.633 0 4.692.715 6.172 2.14 1.477 1.419 2.22 3.387 2.22 5.907 0 2.512-.743 4.48-2.22 5.906C14.333-.317 12.274.39 9.642.39c-2.649 0-4.715-.707-6.204-2.125-1.492-1.426-2.234-3.394-2.234-5.906 0-2.52.742-4.488 2.234-5.906 1.489-1.426 3.555-2.141 6.204-2.141z"></path></symbol><symbol id="t" overflow="visible"><path id="path38" d="M9.547-12.125c-1.043 0-1.84.387-2.39 1.156-.555.762-.829 1.871-.829 3.328 0 1.461.274 2.575.828 3.344.551.762 1.348 1.14 2.39 1.14 1.04 0 1.837-.378 2.392-1.14.55-.77.828-1.883.828-3.344 0-1.457-.278-2.566-.828-3.328-.555-.77-1.352-1.156-2.391-1.156zm3.219 9.906c-.668.906-1.406 1.57-2.22 1.985C9.735.18 8.79.39 7.72.39c-1.887 0-3.434-.75-4.64-2.25-1.212-1.5-1.813-3.426-1.813-5.782 0-2.363.601-4.289 1.812-5.78 1.207-1.49 2.754-2.235 4.64-2.235 1.071 0 2.016.215 2.829.64.812.418 1.55 1.075 2.219 1.97v-2.266h4.922v21.14h-4.922z"></path></symbol><symbol id="f" overflow="visible"><path id="path41" d="M2.188-5.969v-9.344h4.921v1.532c0 .836-.007 1.875-.015 3.125-.012 1.25-.016 2.086-.016 2.5 0 1.242.031 2.132.094 2.672.07.542.18.933.328 1.171.207.325.473.575.797.75.32.168.691.25 1.11.25 1.019 0 1.82-.39 2.406-1.171.582-.782.875-1.868.875-3.266v-7.563h4.89V0h-4.89v-2.218c-.743.898-1.524 1.558-2.344 1.984C9.519.179 8.609.39 7.609.39c-1.761 0-3.105-.54-4.03-1.625-.93-1.082-1.392-2.66-1.392-4.734Z"></path></symbol><symbol id="s" overflow="visible"><path id="path44" d="M12.422-21.281v3.219H9.719c-.688 0-1.172.125-1.453.375-.274.25-.406.687-.406 1.312v1.063h4.187v3.5H7.86V0H2.969v-11.812H.53v-3.5H2.97v-1.063c0-1.664.46-2.898 1.39-3.703.926-.8 2.368-1.203 4.329-1.203z"></path></symbol><symbol id="r" overflow="visible"><path id="path47" d="M16.547-12.766c.613-.945 1.348-1.672 2.203-2.172.852-.5 1.79-.75 2.813-.75 1.757 0 3.097.547 4.015 1.64.926 1.087 1.39 2.657 1.39 4.72V0h-4.921v-8.345c.008-.132.016-.32.016-.562 0-1.082-.165-1.863-.485-2.343-.312-.489-.824-.735-1.531-.735-.93 0-1.648.387-2.156 1.156-.512.762-.774 1.868-.782 3.313v7.515h-4.921v-7.984c0-1.695-.149-2.785-.438-3.266-.293-.488-.812-.734-1.562-.734-.938 0-1.665.387-2.172 1.156-.512.762-.766 1.86-.766 3.297V0H2.328v-15.312H7.25v2.235c.602-.864 1.29-1.516 2.063-1.953a5.186 5.186 0 0 1 2.578-.657c1.062 0 2 .258 2.812.766.813.512 1.426 1.23 1.844 2.156z"></path></symbol><symbol id="q" overflow="visible"><path id="path50" d="M17.75-9.328V0h-4.922v-7.11c0-1.343-.031-2.265-.094-2.765-.062-.5-.168-.867-.312-1.11a1.994 1.994 0 0 0-.781-.734 2.295 2.295 0 0 0-1.11-.265c-1.023 0-1.824.398-2.406 1.187-.586.781-.875 1.871-.875 3.266v7.53H2.36v-21.28h4.89v8.203c.738-.883 1.52-1.54 2.344-1.969.832-.426 1.75-.64 2.75-.64 1.77 0 3.113.546 4.031 1.64.914 1.086 1.375 2.656 1.375 4.719z"></path></symbol><symbol id="p" overflow="visible"><path id="path53" d="M2.578-20.406h5.875l7.422 14v-14h4.984V0h-5.875L7.563-14V0H2.577Z"></path></symbol><symbol id="o" overflow="visible"><path id="path56" d="M2.578-20.406h8.735c2.593 0 4.581.578 5.968 1.734 1.395 1.149 2.094 2.79 2.094 4.922 0 2.137-.7 3.782-2.094 4.938-1.386 1.156-3.375 1.734-5.968 1.734H7.828V0h-5.25zm5.25 3.813v5.703h2.922c1.02 0 1.805-.25 2.36-.75.562-.5.843-1.203.843-2.11 0-.914-.281-1.617-.844-2.11-.554-.487-1.34-.734-2.359-.734z"></path></symbol><symbol id="n" overflow="visible"><path id="path59" d="M2.36-15.312h4.89V-.281c0 2.05-.496 3.617-1.484 4.703-.98 1.082-2.407 1.625-4.282 1.625H-.937V2.828h.859c.926 0 1.562-.21 1.906-.625.352-.418.531-1.246.531-2.484zm0-5.969h4.89v4H2.36Z"></path></symbol><symbol id="m" overflow="visible"><path id="path62" d="M14.719-14.828v3.984a7.612 7.612 0 0 0-2-1.015 6.629 6.629 0 0 0-2.078-.328c-1.367 0-2.434.402-3.203 1.203-.762.793-1.14 1.906-1.14 3.344 0 1.43.378 2.543 1.14 3.343.77.793 1.836 1.188 3.203 1.188.758 0 1.484-.11 2.172-.328a6.412 6.412 0 0 0 1.906-1.016v4c-.762.281-1.54.488-2.328.625a13.04 13.04 0 0 1-2.375.219C7.254.39 5.094-.316 3.53-1.734 1.977-3.148 1.203-5.117 1.203-7.64c0-2.531.774-4.504 2.328-5.922 1.563-1.414 3.723-2.125 6.485-2.125.8 0 1.594.074 2.375.219.781.136 1.555.351 2.328.64z"></path></symbol></defs><g id="g485" style="stroke-width:.496148;" transform="matrix(2.01553 0 0 2.01553 -742.681 -314.453)"><path id="path71" d="m537.04 246.96-58.238 35.84c-7.84 5.04-12.32 13.441-12.32 22.398 0 14.559 11.762 25.762 26.32 25.762 8.96 0 17.359-5.04 22.398-12.879l34.719-58.801c5.043-7.84-4.477-17.359-12.879-12.32z" style="stroke-width:.496148;"></path><path id="path73" d="M492.24 180.88c-68.32 0-123.76 55.441-123.76 123.76 0 24.641 7.281 48.719 21.281 69.441 2.8 3.922 7.281 5.602 12.32 5.04l52.078-10.642c6.719-1.121 10.641-7.84 9.52-14-1.122-6.719-7.84-10.64-14-9.52l-43.68 8.962c-6.72-11.2-10.642-24.078-12.32-36.961h15.12c6.72 0 11.762-5.602 11.762-11.762 0-6.72-5.601-11.762-11.762-11.762h-15.12c2.238-18.48 9.519-35.84 20.719-49.84l10.64 10.64c2.239 2.239 5.602 3.36 8.399 3.36 2.8 0 6.16-1.121 8.398-3.36 4.48-4.48 4.48-12.32 0-16.8l-10.64-10.642c14-11.199 30.8-18.48 49.84-20.719v15.122c0 6.718 5.6 11.762 11.761 11.762 6.72 0 11.762-5.602 11.762-11.762v-15.121c45.36 5.601 81.762 41.44 86.801 87.359h-15.12c-6.72 0-11.763 5.601-11.763 11.762 0 6.718 5.602 11.762 11.762 11.762h15.121c-1.68 13.44-5.601 25.762-12.32 36.96l-43.68-8.96c-6.719-1.121-12.879 2.8-14 9.52-1.12 6.718 2.801 12.878 9.52 14l52.078 10.64h2.238c3.922 0 7.84-1.68 10.078-5.039 14-20.16 21.281-44.238 21.281-69.441-.55-68.32-55.992-123.76-124.31-123.76z" style="stroke-width:.496148;"></path></g>',2),Vy=[by];function yy(t,e){return y(),X("svg",qy,Vy)}const Ac={render:yy,__scopeId:"data-v-8b023322",__name:"IconSpeed",__file:"/home/runner/work/phd-defense/phd-defense/components/icons/IconSpeed.svg"},ky={viewBox:"0 0 500 500"},xy=o("path",{d:"M250.036 0c-39.903 0-79.865 14.437-111.29 43.218C77.153 99.629 67.835 193.39 116.342 260.75l.02.027.014.022.085.119.125.162c19.948 25.68 30.722 57.089 30.722 89.402a40.727 40.727 0 0 0 40.738 40.72h123.982c10.8 0 21.17-4.293 28.806-11.926a40.728 40.728 0 0 0 11.935-28.794c0-32.337 10.669-63.822 30.601-89.482l.04-.051.12-.166.047-.069c48.54-67.354 39.362-161.07-22.248-217.497C329.905 14.438 289.94 0 250.036 0Zm0 40.06c30.17 0 60.283 10.886 84.166 32.76l.028.025c47.743 43.752 54.154 116.253 14.728 167.61l-.1.128-.03.041c-23.396 31.884-36.21 70.293-36.21 109.86 0 .189-.03.265-.171.407h-.004c-.14.14-.222.174-.416.174H188.046c-.194 0-.276-.032-.418-.174-.14-.14-.168-.214-.168-.408 0-39.551-12.725-78.022-36.134-109.92l.076.106-.133-.193-.068-.08-.006-.008c-39.434-51.373-33.088-123.822 14.677-167.569 23.882-21.873 53.994-32.759 84.164-32.759Zm-61.85 365.403c-11.118-.158-20.363 8.951-20.363 20.072 0 11.12 9.246 20.224 20.363 20.066H311.89c11.118.158 20.363-8.945 20.363-20.066 0-11.122-9.244-20.23-20.363-20.072zm30.925 54.395.07.001c-11.118-.157-20.363 8.952-20.363 20.073 0 11.12 9.246 20.223 20.363 20.066h61.715c11.117.157 20.361-8.946 20.361-20.066s-9.242-20.23-20.36-20.073h.07z"},null,-1),gy=[xy];function Ry(t,e){return y(),X("svg",ky,gy)}const Ty={render:Ry,__scopeId:"data-v-152b97d9",__name:"IconConclusion",__file:"/home/runner/work/phd-defense/phd-defense/components/icons/IconConclusion.svg"},Sy=["length"],Iy={__name:"section",props:{number:{type:Number,default:NaN}},setup(t){H(tt);const e=[{"--image":"url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80)","--filter":"grayscale(1)","--color":"var(--sns-desat-0)"},{"--image":"url(https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80)","--filter":"grayscale(1) brightness(0.8)","--color":"var(--sns-desat-1)"},{"--image":"url(https://images.unsplash.com/photo-1613685877679-57222e9e8170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80)","--filter":"grayscale(1) brightness(0.6)","--color":"var(--sns-desat-2)"},{"--image":"url(https://images.unsplash.com/photo-1574980362852-67795d06a31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)","--filter":"grayscale(1) brightness(0.6)","--color":"var(--sns-desat-3)"},{"--image":"url(https://images.unsplash.com/photo-1624880272692-f4c017b2b9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)","--filter":"grayscale(1) brightness(1.1)","--color":"var(--sns-desat-4)"},{"--image":"url(https://images.unsplash.com/photo-1585521607120-182732851afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)","--filter":"grayscale(1) brightness(0.5)","--color":"var(--sns-desat-8)"}];return(a,i)=>{const r=mt("animattr");return D((y(),X("div",{class:"slidev-layout custom-section",length:t.number>=0?1:0},[o("div",{class:Ct(["pilar",t.number==1?"current":"",t.number<1?"next":""]),style:Yt(e[0])},[A(U(Xc),{class:"icon"})],6),o("div",{class:Ct(["pilar",t.number==2?"current":"",t.number<2?"next":""]),style:Yt(e[1])},[A(U(Jc),{class:"icon"})],6),o("div",{class:Ct(["pilar",t.number==3?"current":"",t.number<3?"next":""]),style:Yt(e[2])},[A(U(jc),{class:"icon"})],6),o("div",{class:Ct(["pilar",t.number==4?"current":"",t.number<4?"next":""]),style:Yt(e[3])},[A(U(Fc),{class:"icon"})],6),o("div",{class:Ct(["pilar",t.number==5?"current":"",t.number<5?"next":""]),style:Yt(e[4])},[A(U(Ac),{class:"icon"})],6),xt(` <div :class="['pilar', number == 6 ? 'current' : '', number < 6 ? 'next': '']" :style="backgrounds[5]">
      <IconConclusion class="icon" />
}
svg[data-animattr][data-animattr~="1"] #l1[data-v-69979db3] { transition-delay:    0ms,  600ms;
}
svg[data-animattr][data-animattr~="1"] #l2[data-v-69979db3] { transition-delay:  600ms, 1200ms;
}
svg[data-animattr][data-animattr~="1"] #l3[data-v-69979db3] { transition-delay: 1200ms, 1800ms;
}
svg[data-animattr][data-animattr~="1"] #l4[data-v-69979db3] { transition-delay: 1800ms, 2400ms;
}
svg[data-animattr][data-animattr~="1"] #l5[data-v-69979db3] { transition-delay: 2400ms, 3000ms;
}
svg[data-animattr][data-animattr~="1"] #l6[data-v-69979db3] { transition-delay: 3000ms;
}svg[data-animattr] #l6[data-v-69979db3]      { transition-delay:    0ms;
}
svg[data-animattr] #l5[data-v-69979db3]      { transition-delay:  600ms,  500ms;
}
svg[data-animattr] #l4[data-v-69979db3]      { transition-delay: 1200ms, 1100ms;
}
svg[data-animattr] #l3[data-v-69979db3]      { transition-delay: 1800ms, 1700ms;
}
svg[data-animattr] #l2[data-v-69979db3]      { transition-delay: 2400ms, 2300ms;
}
svg[data-animattr] #l1[data-v-69979db3]      { transition-delay: 3000ms, 2900ms;
}
svg[data-animattr~="0"] #l0[data-v-69979db3] { transition-delay:    0ms, 3500ms;
		svg[data-animattr] .triangle[data-v-2f6310c4] {
			transition: opacity 400ms ease;
			opacity: 0;
}
svg[data-animattr~="2"] .square[data-v-2f6310c4] { opacity: 1;
}
svg[data-animattr~="3"] .triangle[data-v-2f6310c4] { opacity: 1;
}svg[data-animattr] .line[data-v-2f6310c4] {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		transition: stroke-dashoffset 500ms ease-in;
}
svg[data-animattr~="2"] #line-blue[data-v-2f6310c4] { stroke-dashoffset: 0.05;
}
svg[data-animattr~="3"] #line-blue[data-v-2f6310c4] { stroke-dashoffset: 0;
}
svg[data-animattr~="2"] #line-orange[data-v-2f6310c4] { stroke-dashoffset: 0.15;
}
svg[data-animattr~="3"] #line-orange[data-v-2f6310c4] { stroke-dashoffset: 0;
}
svg[data-animattr~="2"] #line-green[data-v-2f6310c4] { stroke-dashoffset: 0.02;
}
svg[data-animattr~="3"] #line-green[data-v-2f6310c4] { stroke-dashoffset: 0;
}
svg[data-animattr~="2"] #line-red[data-v-2f6310c4] { stroke-dashoffset: 0.05;
}
svg[data-animattr~="3"] #line-red[data-v-2f6310c4] { stroke-dashoffset: 0;
}`);document.adoptedStyleSheets.push(rn);const lI={"data-length":"4",viewBox:"0 0 579.1 551.6"},dI=Zt('<defs id="defs1363" data-v-2f6310c4><path id="m94472a5fad" stroke="#262626" d="m4.5 0-9-4.5v9z" data-v-2f6310c4></path><path id="mc12a14e273" stroke="#262626" d="m0-4.5-4.5 9h9z" data-v-2f6310c4></path><path id="mf17f08839e" stroke="#5f9e6e" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-2f6310c4></path><path id="mc975f4aab9" stroke="#5975a4" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-2f6310c4></path><path id="me7cdbaf6b7" stroke="#b55d60" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-2f6310c4></path><path id="m1de8609d2a" stroke="#cc8963" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-2f6310c4></path><path id="mf2aa05dcc8" stroke="#b55d60" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-2f6310c4></path><path id="mbe95dc89ac" stroke="#5975a4" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-2f6310c4></path><path id="m9012874150" stroke="#cc8963" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-2f6310c4></path><path id="m19efad9a26" stroke="#5f9e6e" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-2f6310c4></path><path id="m461f1dab51" stroke="#5975a4" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-2f6310c4></path><path id="mce6571ba4c" stroke="#cc8963" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-2f6310c4></path><path id="m22c8fb29ac" stroke="#b55d60" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-2f6310c4></path><path id="m6d134d8d33" stroke="#5f9e6e" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-2f6310c4></path></defs><g id="g2802" fill="#262626" transform="translate(-44.241 -67.733)" data-v-2f6310c4><g id="text1371" aria-label="0" data-v-2f6310c4><path id="path6394" fill="#262626" d="M84.553 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1375" aria-label="10" data-v-2f6310c4><path id="path6397" d="M133.52 605.14h-.967v-10.57l-3.19 1.184v-.902l3.996-1.482h.161z" data-v-2f6310c4></path><path id="path6399" d="M145.25 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1379" aria-label="20" data-v-2f6310c4><path id="path6402" d="M191.82 605.14h-7.348v-.741l4.02-4.56q1-1.152 1.386-1.902.387-.749.387-1.458 0-1.112-.653-1.756-.652-.653-1.796-.653-1.184 0-1.918.757-.725.758-.725 1.966h-.959q0-.99.444-1.804.45-.814 1.273-1.273.83-.468 1.885-.468 1.611 0 2.514.846.91.846.91 2.304 0 .822-.516 1.797-.507.975-1.796 2.433l-3.271 3.698h6.163z" data-v-2f6310c4></path><path id="path6404" d="M200.69 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1383" aria-label="30" data-v-2f6310c4><path id="path6407" d="M242.54 598.75h.999q.83 0 1.45-.29.62-.298.943-.806.33-.515.33-1.184 0-1.128-.636-1.764-.637-.637-1.83-.637-1.127 0-1.852.669-.717.66-.717 1.748h-.967q0-.91.46-1.66.458-.757 1.272-1.168.814-.41 1.805-.41 1.595 0 2.513.87.919.87.919 2.384 0 .846-.54 1.563-.532.71-1.466 1.064 1.096.306 1.66 1.055.564.741.564 1.773 0 1.506-.983 2.425t-2.627.918q-1.047 0-1.925-.419-.87-.419-1.354-1.168-.475-.757-.475-1.756h.967q0 1.12.781 1.828.782.701 2.006.701 1.249 0 1.942-.636.7-.645.7-1.861 0-1.176-.757-1.797-.749-.62-2.215-.62h-.967z" data-v-2f6310c4></path><path id="path6409" d="M256.62 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1387" aria-label="40" data-v-2f6310c4><path id="path6412" d="M302 601.36h1.829v.814H302v2.965h-.967v-2.965h-5.519v-.548l5.43-8.218H302zm-5.301 0h4.334v-6.703l-.427.741z" data-v-2f6310c4></path><path id="path6414" d="M312.3 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1391" aria-label="50" data-v-2f6310c4><path id="path6417" d="m352.37 599.13.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032.943 1.03.943 2.747 0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.29-.717-2.103t-1.958-.813q-.685 0-1.192.177-.508.169-1.072.668z" data-v-2f6310c4></path><path id="path6419" d="M367.93 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1395" aria-label="60" data-v-2f6310c4><path id="path6422" d="M413.32 593.32v.846h-.113q-2.103 0-3.311 1.24-1.209 1.233-1.337 3.433.483-.669 1.232-1.031.75-.371 1.676-.371 1.547 0 2.457 1.071.919 1.064.919 2.788 0 1.144-.427 2.063-.427.918-1.225 1.434-.797.507-1.82.507-1.684 0-2.74-1.216-1.055-1.225-1.055-3.159v-.966q0-3.15 1.434-4.875 1.434-1.732 4.068-1.764zm-2.006 4.947q-.919 0-1.716.548-.79.54-1.056 1.377v.822q0 1.53.782 2.498.79.967 2.046.967 1.128 0 1.821-.895.701-.894.701-2.256 0-1.385-.7-2.223-.694-.838-1.878-.838z" data-v-2f6310c4></path><path id="path6424" d="M423.85 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1399" aria-label="70" data-v-2f6310c4><path id="path6427" d="m470.96 593.97-5.011 11.175h-1.007l4.979-10.909h-6.671v-.822h7.71z" data-v-2f6310c4></path><path id="path6429" d="M479.95 600.25q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g></g><g id="text1403" fill="#262626" aria-label="TIME (MS)" data-v-2f6310c4><path id="path6432" d="M465.12 524.77h-4.456v12.359h-1.819V524.77H454.4v-1.504h10.72z" data-v-2f6310c4></path><path id="path6434" d="M469.13 537.13h-1.828v-13.863h1.828z" data-v-2f6310c4></path><path id="path6436" d="m474.84 523.26 4.532 11.312 4.532-11.312h2.371v13.863h-1.828v-5.399l.171-5.827-4.55 11.226h-1.4l-4.542-11.197.18 5.799v5.398h-1.828V523.26z" data-v-2f6310c4></path><path id="path6438" d="M497.34 530.72h-6.008v4.913h6.98v1.495h-8.808v-13.863h8.712v1.504h-6.884v4.457h6.008z" data-v-2f6310c4></path><path id="path6440" d="M505.07 531.5q0-2.152.571-4.132.581-1.98 1.724-3.6t2.37-2.285l.362 1.162q-1.39 1.066-2.285 3.256-.885 2.19-.971 4.904l-.01.81q0 3.675 1.342 6.379.81 1.618 1.924 2.532l-.362 1.076q-1.267-.704-2.419-2.361-2.247-3.237-2.247-7.741z" data-v-2f6310c4></path><path id="path6442" d="m514.44 523.26 4.532 11.312 4.532-11.312h2.371v13.863h-1.828v-5.399l.171-5.827-4.55 11.226h-1.4l-4.542-11.197.18 5.799v5.398h-1.827V523.26z" data-v-2f6310c4></path><path id="path6444" d="M533.19 530.95q-2.352-.676-3.428-1.657-1.066-.99-1.066-2.437 0-1.638 1.304-2.704 1.314-1.076 3.409-1.076 1.428 0 2.542.552 1.124.552 1.733 1.523.619.972.619 2.124h-1.838q0-1.257-.8-1.971-.8-.724-2.256-.724-1.352 0-2.114.6-.752.59-.752 1.647 0 .848.714 1.438.724.58 2.447 1.066 1.733.486 2.704 1.076.98.581 1.448 1.362.476.78.476 1.838 0 1.685-1.314 2.704-1.314 1.009-3.514 1.009-1.428 0-2.666-.543-1.238-.552-1.914-1.504-.666-.952-.666-2.162h1.837q0 1.257.924 1.99.933.724 2.485.724 1.447 0 2.219-.59.77-.59.77-1.61 0-1.018-.713-1.57-.714-.562-2.59-1.105z" data-v-2f6310c4></path><path id="path6446" d="M544.46 531.59q0 2.123-.562 4.075-.552 1.943-1.704 3.59-1.143 1.647-2.4 2.342l-.37-1.076q1.465-1.123 2.35-3.485.896-2.37.915-5.256v-.304q0-2-.419-3.714-.419-1.723-1.171-3.085-.743-1.361-1.676-2.123l.371-1.076q1.257.695 2.39 2.323 1.143 1.629 1.705 3.59.571 1.961.571 4.199z" data-v-2f6310c4></path></g><g id="g2745" fill="#262626" transform="translate(-39.244 -59.642)" data-v-2f6310c4><g id="text1407" aria-label="50" data-v-2f6310c4><path id="path6449" d="m51.722 576.65.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.29-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-2f6310c4></path><path id="path6451" d="M67.287 577.77q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1411" aria-label="55" data-v-2f6310c4><path id="path6454" d="m51.597 451.94.572-5.72h5.865v.894H53l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.289-.717-2.103-.717-.813-1.958-.813-.684 0-1.192.177-.508.169-1.072.668z" data-v-2f6310c4></path><path id="path6456" d="m60.741 451.94.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.289-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-2f6310c4></path></g><g id="text1415" aria-label="60" data-v-2f6310c4><path id="path6459" d="M56.911 321.36v.846h-.113q-2.103 0-3.311 1.24-1.209 1.233-1.337 3.433.483-.669 1.232-1.031.75-.371 1.676-.371 1.547 0 2.457 1.071.919 1.064.919 2.788 0 1.144-.427 2.063t-1.225 1.434q-.797.507-1.82.507-1.684 0-2.74-1.216-1.055-1.225-1.055-3.159V328q0-3.15 1.434-4.875 1.434-1.732 4.068-1.764zm-2.006 4.947q-.919 0-1.716.548-.79.54-1.056 1.377v.822q0 1.53.782 2.498.79.967 2.046.967 1.128 0 1.821-.895.701-.894.701-2.256 0-1.385-.7-2.223-.694-.838-1.878-.838z" data-v-2f6310c4></path><path id="path6461" d="M67.441 328.29q0 2.481-.91 3.77-.91 1.282-2.683 1.282-1.74 0-2.667-1.257-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.233.919 1.224.951 3.617zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-2f6310c4></path></g><g id="text1419" aria-label="65" data-v-2f6310c4><path id="path6464" d="M56.786 196.59v.846h-.113q-2.103 0-3.311 1.24-1.209 1.233-1.337 3.433.483-.669 1.232-1.031.75-.371 1.676-.371 1.547 0 2.457 1.071.919 1.064.919 2.788 0 1.144-.427 2.063t-1.225 1.434q-.797.507-1.82.507-1.684 0-2.74-1.216-1.055-1.225-1.055-3.159v-.966q0-3.15 1.434-4.875 1.434-1.732 4.068-1.764zm-2.006 4.947q-.919 0-1.716.548-.79.54-1.056 1.377v.822q0 1.53.782 2.498.79.967 2.046.967 1.128 0 1.821-.895.701-.894.701-2.256 0-1.385-.7-2.223-.694-.838-1.878-.838z" data-v-2f6310c4></path><path id="path6466" d="m60.895 202.39.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.289-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-2f6310c4></path></g></g><g id="text1423" fill="#262626" aria-label="AP (%)" transform="rotate(-90)" data-v-2f6310c4><path id="path6469" d="M-74.549 22.026h-5.808l-1.305 3.618h-1.885l5.294-13.863h1.6l5.303 13.863h-1.876zm-5.256-1.504h4.713l-2.361-6.484z" data-v-2f6310c4></path><path id="path6471" d="M-67.656 20.217v5.427h-1.828V11.781h5.113q2.275 0 3.56 1.162 1.296 1.161 1.296 3.075 0 2.019-1.267 3.114-1.256 1.085-3.608 1.085zm0-1.495h3.285q1.466 0 2.247-.685.78-.696.78-2 0-1.238-.78-1.98-.78-.743-2.142-.772h-3.39z" data-v-2f6310c4></path><path id="path6473" d="M-52.698 20.017q0-2.152.571-4.132.581-1.98 1.724-3.6 1.142-1.618 2.37-2.285l.362 1.162q-1.39 1.066-2.285 3.256-.885 2.19-.971 4.904l-.01.81q0 3.675 1.343 6.379.81 1.618 1.923 2.532l-.362 1.076q-1.266-.704-2.418-2.361-2.247-3.237-2.247-7.741z" data-v-2f6310c4></path><path id="path6475" d="M-46.299 14.447q0-1.247.79-2.057.8-.809 2.047-.809 1.267 0 2.047.819.79.81.79 2.104v.676q0 1.257-.799 2.057-.79.79-2.019.79-1.237 0-2.047-.79-.81-.8-.81-2.124zm1.314.733q0 .743.419 1.228.419.477 1.123.477.676 0 1.086-.467.419-.467.419-1.276v-.695q0-.743-.41-1.228-.41-.486-1.114-.486-.704 0-1.114.486-.41.485-.41 1.266zm5.437 7.065q0-1.247.79-2.047.8-.81 2.047-.81t2.047.8q.8.8.8 2.124v.676q0 1.247-.8 2.056-.79.8-2.028.8t-2.047-.79q-.81-.8-.81-2.123zm1.314.743q0 .752.419 1.238.419.476 1.123.476.686 0 1.095-.467.41-.476.41-1.285v-.705q0-.752-.42-1.228-.409-.476-1.104-.476-.676 0-1.104.476-.42.466-.42 1.266zm-4.809 1.609-1-.629 6.77-10.835 1 .629z" data-v-2f6310c4></path><path id="path6477" d="M-27.618 20.112q0 2.123-.562 4.075-.552 1.943-1.704 3.59-1.143 1.647-2.4 2.342l-.37-1.076q1.465-1.123 2.351-3.485.895-2.37.914-5.256v-.304q0-2-.419-3.714-.419-1.723-1.171-3.085-.743-1.361-1.676-2.123l.372-1.076q1.256.695 2.39 2.323 1.142 1.629 1.704 3.59.571 1.961.571 4.199z" data-v-2f6310c4></path></g><g id="circle-blue" data-v-2f6310c4><use xlink:href="#mbe95dc89ac" width="100%" height="100%" x="448.722" y="354.683" fill="#5975a4" stroke="#5975a4" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><g id="text1557" fill="#5975a4" aria-label="YOLOV2" data-v-2f6310c4><path id="path6480" d="m414.38 280.96 3.062-5.89h1.756l-4.044 7.356v4.375h-1.547v-4.375l-4.045-7.355h1.773z" data-v-2f6310c4></path><path id="path6482" d="M429.5 281.31q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.855 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6484" d="M433.38 285.53h5.56v1.265h-7.115v-11.73h1.555z" data-v-2f6310c4></path><path id="path6486" d="M449.2 281.31q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6488" d="m455.23 284.75 3.352-9.676h1.692l-4.351 11.73h-1.37l-4.342-11.73h1.684z" data-v-2f6310c4></path><path id="path6490" d="M469.14 286.8h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.636-.612.629-.612 1.757h-1.49q0-1.62 1.039-2.619 1.047-.999 2.795-.999 1.636 0 2.587.862.95.854.95 2.28 0 1.733-2.207 4.125l-3.142 3.408h5.889z" data-v-2f6310c4></path></g></g><g id="circle-orange" data-v-2f6310c4><use xlink:href="#m9012874150" width="100%" height="100%" x="214.92" y="509.36" fill="#cc8963" stroke="#cc8963" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><g id="text1560" fill="#cc8963" aria-label="MOBILE YOLOV2" data-v-2f6310c4><path id="path6493" d="m177.76 429.75 3.835 9.571 3.835-9.571h2.006v11.73h-1.547v-4.568l.145-4.93-3.85 9.498h-1.185l-3.843-9.475.153 4.907v4.568h-1.547v-11.73z" data-v-2f6310c4></path><path id="path6495" d="M199.19 435.99q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6497" d="M201.51 441.48v-11.73h3.835q1.91 0 2.868.79.967.79.967 2.336 0 .822-.467 1.458-.468.629-1.273.975.95.266 1.498 1.015.556.741.556 1.773 0 1.579-1.023 2.481-1.023.902-2.892.902zm1.547-5.487v4.222h2.554q1.08 0 1.7-.556.628-.564.628-1.547 0-2.119-2.304-2.119zm0-1.24h2.336q1.015 0 1.62-.508.612-.507.612-1.378 0-.966-.564-1.401-.564-.443-1.716-.443h-2.288z" data-v-2f6310c4></path><path id="path6499" d="M213.44 441.48h-1.547v-11.73h1.547z" data-v-2f6310c4></path><path id="path6501" d="M217.82 440.21h5.56v1.265h-7.115v-11.73h1.555z" data-v-2f6310c4></path><path id="path6503" d="M231.78 436.06h-5.084v4.157h5.906v1.265h-7.453v-11.73h7.372v1.273h-5.825v3.77h5.084z" data-v-2f6310c4></path><path id="path6505" d="m242.19 435.64 3.062-5.89h1.756l-4.045 7.356v4.375h-1.546v-4.375l-4.045-7.355h1.773z" data-v-2f6310c4></path><path id="path6507" d="M257.31 435.99q0 1.724-.58 3.013-.58 1.281-1.644 1.958t-2.481.677q-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6509" d="M261.18 440.21h5.56v1.265h-7.115v-11.73h1.555z" data-v-2f6310c4></path><path id="path6511" d="M277.01 435.99q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6513" d="m283.03 439.42 3.352-9.676h1.691l-4.35 11.73h-1.37l-4.342-11.73h1.684z" data-v-2f6310c4></path><path id="path6515" d="M296.95 441.48h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.637-.612.628-.612 1.756h-1.49q0-1.62 1.039-2.619 1.047-.999 2.795-.999 1.636 0 2.587.862.95.854.95 2.28 0 1.733-2.207 4.125l-3.142 3.408h5.889z" data-v-2f6310c4></path></g></g><g id="circle-green" data-v-2f6310c4><use xlink:href="#m19efad9a26" width="100%" height="100%" x="523.494" y="122.666" fill="#5f9e6e" stroke="#5f9e6e" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><g id="text1563" fill="#5f9e6e" aria-label="YOLOV2 UP" data-v-2f6310c4><path id="path6518" d="m489.15 48.942 3.062-5.89h1.756l-4.045 7.356v4.375h-1.546v-4.375l-4.045-7.355h1.773z" data-v-2f6310c4></path><path id="path6520" d="M504.27 49.297q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6522" d="M508.15 53.518h5.56v1.265h-7.115v-11.73h1.555z" data-v-2f6310c4></path><path id="path6524" d="M523.97 49.297q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.855 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6526" d="m530 52.729 3.352-9.676h1.691l-4.35 11.73h-1.37l-4.342-11.73h1.684z" data-v-2f6310c4></path><path id="path6528" d="M543.91 54.783h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.637-.612.628-.612 1.756h-1.49q0-1.62 1.039-2.619 1.047-.999 2.795-.999 1.636 0 2.587.862.95.854.95 2.28 0 1.733-2.207 4.125l-3.142 3.408h5.89z" data-v-2f6310c4></path><path id="path6530" d="M558.22 43.053v7.976q-.008 1.66-1.047 2.715-1.032 1.056-2.804 1.184l-.411.017q-1.925 0-3.07-1.04-1.144-1.039-1.16-2.86v-7.992h1.531v7.944q0 1.273.7 1.982.702.7 1.999.7 1.313 0 2.006-.7.701-.701.701-1.974v-7.952z" data-v-2f6310c4></path><path id="path6532" d="M562.21 50.191v4.592h-1.547v-11.73h4.326q1.926 0 3.014.983 1.095.983 1.095 2.603 0 1.708-1.071 2.634-1.064.918-3.054.918zm0-1.265h2.78q1.24 0 1.9-.58.662-.588.662-1.692 0-1.047-.661-1.676-.66-.628-1.813-.652h-2.868z" data-v-2f6310c4></path></g></g><g id="circle-red" data-v-2f6310c4><use xlink:href="#mf2aa05dcc8" width="100%" height="100%" x="286.902" y="344.704" fill="#b55d60" stroke="#b55d60" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><g id="text1566" fill="#b55d60" aria-label="MOBILE YOLOV2 UP" data-v-2f6310c4><path id="path6535" d="m249.74 265.09 3.835 9.571 3.835-9.571h2.006v11.73h-1.547v-4.568l.145-4.93-3.85 9.498h-1.185l-3.843-9.475.153 4.907v4.568h-1.547v-11.73z" data-v-2f6310c4></path><path id="path6537" d="M271.17 271.33q0 1.724-.58 3.013-.58 1.281-1.644 1.958t-2.481.677q-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99t1.66-1.981q1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6539" d="M273.49 276.82v-11.73h3.835q1.91 0 2.868.79.967.79.967 2.336 0 .822-.467 1.458-.468.629-1.273.975.95.266 1.498 1.015.556.741.556 1.773 0 1.579-1.023 2.481t-2.892.902zm1.547-5.487v4.222h2.554q1.08 0 1.7-.556.628-.564.628-1.547 0-2.119-2.304-2.119zm0-1.24h2.336q1.015 0 1.62-.508.612-.507.612-1.378 0-.966-.564-1.401-.564-.443-1.716-.443h-2.288z" data-v-2f6310c4></path><path id="path6541" d="M285.42 276.82h-1.547v-11.73h1.547z" data-v-2f6310c4></path><path id="path6543" d="M289.8 275.56h5.56v1.265h-7.115v-11.73h1.555z" data-v-2f6310c4></path><path id="path6545" d="M303.76 271.4h-5.084v4.157h5.906v1.265h-7.453v-11.73h7.372v1.273h-5.825v3.77h5.084z" data-v-2f6310c4></path><path id="path6547" d="m314.17 270.98 3.062-5.89h1.756l-4.045 7.356v4.375h-1.546v-4.375l-4.045-7.355h1.773z" data-v-2f6310c4></path><path id="path6549" d="M329.29 271.33q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6551" d="M333.17 275.56h5.56v1.265h-7.115v-11.73h1.555z" data-v-2f6310c4></path><path id="path6553" d="M348.99 271.33q0 1.724-.58 3.013-.58 1.281-1.644 1.958t-2.481.677q-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.855 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-2f6310c4></path><path id="path6555" d="m355.02 274.77 3.352-9.676h1.691l-4.35 11.73h-1.37l-4.342-11.73h1.684z" data-v-2f6310c4></path><path id="path6557" d="M368.93 276.82h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.637-.612.628-.612 1.756h-1.49q0-1.62 1.039-2.619 1.047-.999 2.795-.999 1.636 0 2.587.862.95.854.95 2.28 0 1.733-2.207 4.125l-3.142 3.408h5.89z" data-v-2f6310c4></path><path id="path6559" d="M383.24 265.09v7.976q-.008 1.66-1.047 2.715-1.032 1.056-2.804 1.184l-.411.017q-1.925 0-3.07-1.04t-1.16-2.86v-7.992h1.531v7.944q0 1.273.7 1.982.702.7 1.999.7 1.313 0 2.006-.7.701-.701.701-1.974v-7.952z" data-v-2f6310c4></path><path id="path6561" d="M387.23 272.23v4.592h-1.547v-11.73h4.327q1.925 0 3.013.983 1.095.983 1.095 2.603 0 1.708-1.071 2.634-1.064.918-3.054.918zm0-1.265h2.78q1.24 0 1.9-.58.662-.588.662-1.692 0-1.047-.661-1.676-.66-.628-1.813-.652h-2.868z" data-v-2f6310c4></path></g></g><g class="square" data-v-2f6310c4><use xlink:href="#m461f1dab51" id="use1438" width="100%" height="100%" x="117.828" y="489.402" fill="#5975a4" stroke="#5975a4" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#mce6571ba4c" id="use1462" width="100%" height="100%" x="121.176" y="521.834" fill="#cc8963" stroke="#cc8963" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#m6d134d8d33" id="use1486" width="100%" height="100%" x="105.552" y="227.448" fill="#5f9e6e" stroke="#5f9e6e" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#m22c8fb29ac" id="use1510" width="100%" height="100%" x="113.922" y="319.756" fill="#b55d60" stroke="#b55d60" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use></g><g class="triangle" data-v-2f6310c4><use xlink:href="#mc975f4aab9" id="use1446" width="100%" height="100%" x="104.994" y="489.402" fill="#5975a4" stroke="#5975a4" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#m1de8609d2a" id="use1470" width="100%" height="100%" x="111.69" y="531.814" fill="#cc8963" stroke="#cc8963" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#mf17f08839e" id="use1494" width="100%" height="100%" x="105.552" y="232.438" fill="#5f9e6e" stroke="#5f9e6e" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#me7cdbaf6b7" id="use1518" width="100%" height="100%" x="117.27" y="322.25" fill="#b55d60" stroke="#b55d60" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use></g><path id="line-blue" fill="none" stroke="#5975a4" stroke-linecap="round" stroke-width="1.5" d="M448.72 354.68 117.83 489.4h-12.834" class="line" clip-path="url(#p68f6559b0e)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-2f6310c4></path><path id="line-orange" fill="none" stroke="#cc8963" stroke-linecap="round" stroke-width="1.5" d="m214.92 509.36-93.744 12.474-9.486 9.98" class="line" clip-path="url(#p68f6559b0e)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-2f6310c4></path><path id="line-green" fill="none" stroke="#5f9e6e" stroke-linecap="round" stroke-width="1.5" d="M523.49 122.67 105.55 227.45v4.99" class="line" clip-path="url(#p68f6559b0e)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-2f6310c4></path><path id="line-red" fill="none" stroke="#b55d60" stroke-linecap="round" stroke-width="1.5" d="m286.9 344.7-172.98-24.948 3.348 2.495" class="line" clip-path="url(#p68f6559b0e)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-2f6310c4></path><use xlink:href="#m94472a5fad" id="use1538" width="100%" height="100%" x="583.2" y="576.72" fill="#262626" stroke="#262626" transform="translate(-29.241 -59.642)" data-v-2f6310c4></use><use xlink:href="#mc12a14e273" id="use1546" width="100%" height="100%" x="81" y="77.76" fill="#262626" stroke="#262626" transform="translate(-44.241 -59.642)" data-v-2f6310c4></use><path id="path1551" fill="none" stroke="#262626" stroke-linecap="square" stroke-width="1.875" d="M36.759 517.08V18.12" data-v-2f6310c4></path><path id="path1554" fill="none" stroke="#262626" stroke-linecap="square" stroke-width="1.875" d="M36.759 517.08h517.2" data-v-2f6310c4></path><defs id="defs1574" data-v-2f6310c4><clipPath id="p68f6559b0e" data-v-2f6310c4><rect id="rect1571" width="502.2" height="498.96" x="81" y="77.76" data-v-2f6310c4></rect></clipPath></defs><g id="text1674" fill="#262626" aria-label="IR SURVEILLANCE" transform="translate(151.99 -29.586)" data-v-2f6310c4><path id="path6564" d="M61.326 53.64h-1.828V39.777h1.828z" stop-color="#000" data-v-2f6310c4></path><path id="path6566" d="M69.753 48.031h-3.256v5.608h-1.838V39.776h4.59q2.342 0 3.599 1.067 1.266 1.066 1.266 3.104 0 1.295-.705 2.256-.695.962-1.942 1.438l3.256 5.884v.114h-1.961zm-3.256-1.495h2.809q1.361 0 2.16-.704.81-.705.81-1.886 0-1.285-.771-1.97-.762-.686-2.209-.696h-2.8z" stop-color="#000" data-v-2f6310c4></path><path id="path6568" d="M85.587 47.46q-2.352-.676-3.428-1.657-1.066-.99-1.066-2.437 0-1.638 1.304-2.704 1.314-1.076 3.409-1.076 1.428 0 2.542.552 1.124.552 1.733 1.523.619.972.619 2.124h-1.838q0-1.257-.8-1.971-.8-.724-2.256-.724-1.352 0-2.114.6-.752.59-.752 1.647 0 .848.714 1.438.724.58 2.447 1.066 1.733.486 2.704 1.076.98.581 1.448 1.362.476.78.476 1.837 0 1.686-1.314 2.705Q88.1 53.83 85.9 53.83q-1.428 0-2.666-.543-1.238-.552-1.914-1.504-.666-.952-.666-2.162h1.837q0 1.257.924 1.99.933.724 2.485.724 1.447 0 2.219-.59t.77-1.61q0-1.018-.713-1.57-.714-.562-2.59-1.105z" stop-color="#000" data-v-2f6310c4></path><path id="path6570" d="M102.83 39.776v9.426q-.01 1.962-1.238 3.209-1.219 1.247-3.313 1.4l-.486.019q-2.276 0-3.628-1.229-1.352-1.228-1.37-3.38v-9.445h1.808v9.388q0 1.505.829 2.343.828.828 2.361.828 1.552 0 2.371-.828.828-.829.828-2.333v-9.398z" stop-color="#000" data-v-2f6310c4></path><path id="path6572" d="M110.8 48.031h-3.256v5.608h-1.838V39.776h4.59q2.342 0 3.598 1.067 1.267 1.066 1.267 3.104 0 1.295-.705 2.256-.695.962-1.942 1.438l3.256 5.884v.114h-1.961zm-3.256-1.495h2.808q1.362 0 2.162-.704.81-.705.81-1.886 0-1.285-.772-1.97-.762-.686-2.21-.696h-2.798z" stop-color="#000" data-v-2f6310c4></path><path id="path6574" d="m122.13 51.212 3.96-11.435h2L122.95 53.64h-1.619l-5.132-13.863h1.99z" stop-color="#000" data-v-2f6310c4></path><path id="path6576" d="M137.78 47.232h-6.008v4.913h6.98v1.495h-8.808V39.777h8.712v1.504h-6.884v4.456h6.008z" stop-color="#000" data-v-2f6310c4></path><path id="path6578" d="M142.99 53.64h-1.828V39.777h1.828z" stop-color="#000" data-v-2f6310c4></path><path id="path6580" d="M148.17 52.145h6.57v1.495h-8.408V39.777h1.838z" stop-color="#000" data-v-2f6310c4></path><path id="path6582" d="M158.66 52.145h6.57v1.495h-8.408V39.777h1.838z" stop-color="#000" data-v-2f6310c4></path><path id="path6584" d="M175.16 50.021h-5.808l-1.305 3.618h-1.885l5.294-13.863h1.6l5.303 13.863h-1.875zm-5.256-1.504h4.713l-2.361-6.484z" stop-color="#000" data-v-2f6310c4></path><path id="path6586" d="M190.88 53.64h-1.838l-6.979-10.683V53.64h-1.837V39.777h1.837l6.999 10.731V39.777h1.818z" stop-color="#000" data-v-2f6310c4></path><path id="path6588" d="M204.32 49.241q-.257 2.2-1.628 3.4-1.362 1.19-3.628 1.19-2.456 0-3.942-1.762-1.476-1.762-1.476-4.713v-1.333q0-1.933.686-3.4.695-1.466 1.961-2.246 1.267-.79 2.933-.79 2.209 0 3.542 1.237 1.333 1.228 1.552 3.409h-1.838q-.238-1.657-1.037-2.4-.79-.742-2.219-.742-1.752 0-2.752 1.295-.99 1.294-.99 3.684v1.343q0 2.256.943 3.59.942 1.332 2.637 1.332 1.524 0 2.333-.685.819-.695 1.085-2.409z" stop-color="#000" data-v-2f6310c4></path><path id="path6590" d="M214.65 47.232h-6.008v4.913h6.98v1.495h-8.808V39.777h8.712v1.504h-6.884v4.456h6.008z" stop-color="#000" data-v-2f6310c4></path></g><g id="g5175" stroke-linejoin="round" transform="translate(-376.32 197.93)" data-v-2f6310c4><g id="g5135" transform="translate(60.561 214.85)" data-v-2f6310c4><path id="use3614-6" fill="#8c8c8c" stroke="#8c8c8c" stroke-linejoin="round" stroke-width="1.125" d="M606.91 92.142a3.248 3.248 0 1 0 0-6.495 3.248 3.248 0 0 0 0 6.495z" data-v-2f6310c4></path><g id="text1731" fill="#262626" aria-label="BASE" transform="translate(-35.593 -73.08)" data-v-2f6310c4><path id="path6593" d="M652.08 167.84v-11.73h3.464q1.886 0 2.86.781.975.774.975 2.289 0 .91-.5 1.587-.49.668-1.353.959 1.024.225 1.644 1.007.628.781.628 1.804 0 1.555-1.007 2.433-.999.87-2.787.87zm.991-5.64v4.802h2.973q1.273 0 2.014-.644.75-.653.75-1.805 0-1.088-.718-1.716-.709-.637-1.966-.637zm0-.83h2.707q1.24-.024 1.917-.58.685-.563.685-1.635 0-1.128-.709-1.66-.7-.54-2.127-.54h-2.473z" stop-color="#000" data-v-2f6310c4></path><path id="path6595" d="M668.52 164.55h-5.325l-1.209 3.287h-1.04l4.44-11.73h.943l4.439 11.73h-1.031zm-5.02-.846h4.706l-2.353-6.389z" stop-color="#000" data-v-2f6310c4></path><path id="path6597" d="M679.13 164.96q0-.975-.685-1.539-.685-.572-2.505-1.08-1.821-.515-2.66-1.12-1.192-.853-1.192-2.239 0-1.345 1.104-2.183 1.112-.846 2.836-.846 1.168 0 2.087.45.926.452 1.434 1.258.508.805.508 1.796h-1q0-1.2-.821-1.925-.822-.733-2.208-.733-1.345 0-2.143.604-.797.596-.797 1.563 0 .894.717 1.458t2.296 1q1.579.426 2.392.893.814.46 1.225 1.104.411.645.411 1.523 0 1.386-1.112 2.224-1.104.837-2.916.837-1.241 0-2.28-.443-1.032-.443-1.571-1.24-.532-.798-.532-1.83h.99q0 1.241.927 1.959t2.466.717q1.37 0 2.2-.605.829-.604.829-1.603z" stop-color="#000" data-v-2f6310c4></path><path id="path6599" d="M688.74 162.22h-5.487v4.786h6.309v.837h-7.3v-11.73h7.26v.846h-6.269v4.424h5.487z" stop-color="#000" data-v-2f6310c4></path></g></g><g id="g5130" transform="translate(127.71 184.27)" data-v-2f6310c4><path id="use3622-2" fill="#8c8c8c" stroke="#8c8c8c" stroke-linejoin="round" stroke-width="1.125" d="M603.66 122.64h6.495v-6.495h-6.495z" data-v-2f6310c4></path><g id="text1731-5" fill="#262626" aria-label="PRUNED" transform="translate(-35.593 -42.583)" data-v-2f6310c4><path id="path6602" d="M653.07 163.06v4.778h-.991v-11.73h3.996q1.829 0 2.884.934 1.064.935 1.064 2.57 0 1.652-1.023 2.554-1.015.895-2.949.895zm0-.838h3.005q1.442 0 2.2-.685.757-.685.757-1.91 0-1.216-.757-1.933-.75-.725-2.135-.74h-3.07z" stop-color="#000" data-v-2f6310c4></path><path id="path6604" d="M666.62 162.96h-3.408v4.882h-.999v-11.73h3.81q1.878 0 2.933.91t1.056 2.547q0 1.128-.66 1.99-.662.862-1.773 1.192l2.932 4.987v.105h-1.055zm-3.408-.846h3.037q1.25 0 2.007-.709.757-.709.757-1.837 0-1.24-.79-1.925t-2.215-.685h-2.796z" stop-color="#000" data-v-2f6310c4></path><path id="path6606" d="M680.79 156.11v8.008q-.008 1.185-.524 2.063-.515.878-1.458 1.353-.935.468-2.151.468-1.853 0-2.973-1.008-1.112-1.015-1.152-2.803v-8.081h.983v7.936q0 1.482.846 2.304.846.814 2.296.814 1.45 0 2.288-.822.846-.822.846-2.288v-7.944z" stop-color="#000" data-v-2f6310c4></path><path id="path6608" d="M692.29 167.84h-.991l-6.743-10.039v10.039h-1v-11.73h1l6.751 10.047V156.11h.983z" stop-color="#000" data-v-2f6310c4></path><path id="path6610" d="M701.75 162.22h-5.487v4.786h6.309v.837h-7.3v-11.73h7.26v.846h-6.269v4.424h5.487z" stop-color="#000" data-v-2f6310c4></path><path id="path6612" d="M704.66 167.84v-11.73h3.279q1.442 0 2.586.66 1.144.653 1.78 1.878.645 1.224.645 2.787v1.08q0 1.571-.636 2.788-.637 1.216-1.797 1.877-1.152.66-2.65.66zm.991-10.885v10.047h2.224q1.853 0 2.972-1.225 1.12-1.232 1.12-3.327v-1.031q0-2.022-1.103-3.239t-2.909-1.225z" stop-color="#000" data-v-2f6310c4></path></g></g><g id="g5125" transform="translate(218.24 147.08)" data-v-2f6310c4><path id="use3630-8" fill="#8c8c8c" stroke="#8c8c8c" stroke-linejoin="round" stroke-width="1.125" d="m606.91 153.42-3.248 6.495h6.496z" data-v-2f6310c4></path><g id="text1731-5-2" fill="#262626" aria-label="QUANTISED" transform="translate(-35.085 -6.248)" data-v-2f6310c4><path id="path6615" d="M660.71 162.61q0 1.676-.596 2.925-.588 1.24-1.684 1.877l2.135 1.86-.685.613-2.393-2.07q-.66.185-1.345.185-1.337 0-2.385-.66-1.04-.661-1.611-1.87-.572-1.216-.58-2.804v-1.313q0-1.603.564-2.836.572-1.24 1.611-1.901 1.04-.669 2.385-.669 1.37 0 2.409.66 1.039.662 1.603 1.894.572 1.233.572 2.844zm-.991-1.273q0-2.119-.959-3.32t-2.634-1.2q-1.628 0-2.603 1.209-.966 1.2-.966 3.36v1.224q0 2.087.958 3.311.967 1.217 2.627 1.217 1.676 0 2.626-1.2.951-1.2.951-3.352z" stop-color="#000" data-v-2f6310c4></path><path id="path6617" d="M671.33 156.11v8.008q-.008 1.185-.524 2.063-.515.878-1.458 1.353-.934.468-2.151.468-1.853 0-2.973-1.008-1.112-1.015-1.152-2.803v-8.081h.983v7.936q0 1.482.846 2.304.846.814 2.296.814 1.45 0 2.288-.822.846-.822.846-2.288v-7.944z" stop-color="#000" data-v-2f6310c4></path><path id="path6619" d="M680.24 164.55h-5.325l-1.209 3.287h-1.04l4.44-11.73h.943l4.439 11.73h-1.031zm-5.02-.846h4.706l-2.353-6.389z" stop-color="#000" data-v-2f6310c4></path><path id="path6621" d="M692.95 167.84h-.991l-6.743-10.039v10.039h-1v-11.73h1l6.751 10.047V156.11h.983z" stop-color="#000" data-v-2f6310c4></path><path id="path6623" d="M703.89 156.96h-4.02v10.885h-.991V156.96h-4.012v-.846h9.023z" stop-color="#000" data-v-2f6310c4></path><path id="path6625" d="M706.99 167.84h-.991v-11.73h.991z" stop-color="#000" data-v-2f6310c4></path><path id="path6627" d="M716.81 164.96q0-.975-.685-1.539-.685-.572-2.505-1.08-1.821-.515-2.66-1.12-1.192-.853-1.192-2.239 0-1.345 1.104-2.183 1.112-.846 2.836-.846 1.168 0 2.087.45.926.452 1.434 1.258.508.805.508 1.796h-1q0-1.2-.821-1.925-.822-.733-2.208-.733-1.345 0-2.143.604-.797.596-.797 1.563 0 .894.717 1.458t2.296 1q1.579.426 2.392.893.814.46 1.225 1.104t.411 1.523q0 1.386-1.112 2.224-1.104.837-2.916.837-1.241 0-2.28-.443-1.032-.443-1.571-1.24-.532-.798-.532-1.83h.99q0 1.241.927 1.959t2.466.717q1.37 0 2.2-.605.829-.604.829-1.603z" stop-color="#000" data-v-2f6310c4></path><path id="path6629" d="M726.42 162.22h-5.487v4.786h6.309v.837h-7.3v-11.73h7.26v.846h-6.269v4.424h5.487z" stop-color="#000" data-v-2f6310c4></path><path id="path6631" d="M729.33 167.84v-11.73h3.279q1.442 0 2.586.66 1.144.653 1.78 1.878.645 1.224.645 2.787v1.08q0 1.571-.636 2.788-.637 1.216-1.797 1.877-1.152.66-2.65.66zm.991-10.885v10.047h2.224q1.853 0 2.972-1.225 1.12-1.232 1.12-3.327v-1.031q0-2.022-1.103-3.239t-2.909-1.225z" stop-color="#000" data-v-2f6310c4></path></g></g></g>',22),hI=[dI];function sI(t,e){return y(),X("svg",lI,hI)}const oI={render:sI,__scopeId:"data-v-2f6310c4",__name:"Speed-APTimeLWIR",__file:"/home/runner/work/phd-defense/phd-defense/components/05-speed/Speed-APTimeLWIR.svg"},cn=new CSSStyleSheet;cn.replaceSync(`svg[data-animattr] #circle-green[data-v-039320df],svg[data-animattr] #circle-orange[data-v-039320df],svg[data-animattr] #circle-red[data-v-039320df]{transition:opacity 250ms ease;opacity:0}svg[data-animattr~="0"] #circle-orange[data-v-039320df],svg[data-animattr~="1"] #circle-green[data-v-039320df],svg[data-animattr~="1"] #circle-red[data-v-039320df]{opacity:1}svg[data-animattr] .square[data-v-039320df],
		svg[data-animattr] .triangle[data-v-039320df] {
			transition: opacity 400ms ease;
			opacity: 0;
}
svg[data-animattr~="2"] .square[data-v-039320df] { opacity: 1;
}
svg[data-animattr~="3"] .triangle[data-v-039320df] { opacity: 1;
}svg[data-animattr] .line[data-v-039320df] {
			stroke-dasharray: 1;
			stroke-dashoffset: 1;
			transition: stroke-dashoffset 500ms ease-in;
}
svg[data-animattr~="2"] #line-blue[data-v-039320df] { stroke-dashoffset: 0.3;
}
svg[data-animattr~="3"] #line-blue[data-v-039320df] { stroke-dashoffset: 0;
}
svg[data-animattr~="2"] #line-orange[data-v-039320df] { stroke-dashoffset: 0.3;
}
svg[data-animattr~="3"] #line-orange[data-v-039320df] { stroke-dashoffset: 0;
}
svg[data-animattr~="2"] #line-green[data-v-039320df] { stroke-dashoffset: 0.31;
}
svg[data-animattr~="3"] #line-green[data-v-039320df] { stroke-dashoffset: 0;
}
svg[data-animattr~="2"] #line-red[data-v-039320df] { stroke-dashoffset: 0.1;
}
svg[data-animattr~="3"] #line-red[data-v-039320df] { stroke-dashoffset: 0;
}`);document.adoptedStyleSheets.push(cn);const pI={"data-length":"4",viewBox:"0 0 569.58 551.6"},fI=Zt('<defs id="defs3507" data-v-039320df><path id="mc9fe87e902" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-039320df></path><path id="ma1b0d5503e" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-039320df></path><path id="ma1c8768e36" stroke="#262626" d="m0-4.5-4.5 9h9z" data-v-039320df></path><path id="mf73a5676b2" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-039320df></path><path id="ma06b53b74f" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-039320df></path><path id="m36a0a566af" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-039320df></path><path id="ma7bdf03081" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-039320df></path><path id="m15bfeed542" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-039320df></path><path id="mb19a64e732" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-039320df></path><path id="m761dd5ee65" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-039320df></path><path id="m752178a763" stroke-width="1.5" d="M0 4.33a4.33 4.33 0 1 0 0-8.66 4.33 4.33 0 0 0 0 8.66z" data-v-039320df></path><path id="m6c80c061d0" stroke-width="1.5" d="m0-4.33-4.33 8.66h8.66z" data-v-039320df></path><path id="md9ae572146" stroke="#262626" d="m4.5 0-9-4.5v9z" data-v-039320df></path><path id="m4513212936" stroke-width="1.5" d="M-4.33 4.33h8.66v-8.66h-8.66z" data-v-039320df></path></defs><g id="g4521" fill="#262626" transform="translate(-44.241 -70.544)" data-v-039320df><g id="text3515" aria-label="0" data-v-039320df><path id="path5799" fill="#262626" d="M84.553 603.06q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3519" aria-label="10" data-v-039320df><path id="path5802" d="M154.98 607.95h-.967v-10.57l-3.19 1.184v-.902l3.996-1.482h.161z" data-v-039320df></path><path id="path5804" d="M166.71 603.06q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3523" aria-label="20" data-v-039320df><path id="path5807" d="M234.74 607.95h-7.348v-.741l4.02-4.56q1-1.152 1.386-1.902.387-.749.387-1.458 0-1.112-.652-1.756-.653-.653-1.797-.653-1.184 0-1.918.757-.725.758-.725 1.966h-.958q0-.99.443-1.804.45-.814 1.273-1.273.83-.468 1.885-.468 1.611 0 2.514.846.91.846.91 2.304 0 .822-.516 1.797-.507.975-1.796 2.433l-3.271 3.698h6.163z" data-v-039320df></path><path id="path5809" d="M243.62 603.06q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3527" aria-label="30" data-v-039320df><path id="path5812" d="M306.93 601.56h.999q.83 0 1.45-.29.62-.298.943-.806.33-.515.33-1.184 0-1.128-.636-1.764-.637-.637-1.83-.637-1.127 0-1.852.669-.717.66-.717 1.748h-.967q0-.91.46-1.66.459-.757 1.272-1.168.814-.41 1.805-.41 1.595 0 2.514.87.918.87.918 2.384 0 .846-.54 1.563-.531.71-1.466 1.064 1.096.306 1.66 1.055.564.741.564 1.773 0 1.506-.983 2.425-.983.918-2.627.918-1.047 0-1.925-.419-.87-.419-1.354-1.168-.475-.757-.475-1.756h.967q0 1.12.781 1.828.782.701 2.006.701 1.25 0 1.942-.636.7-.645.7-1.861 0-1.176-.756-1.797-.75-.62-2.216-.62h-.967z" data-v-039320df></path><path id="path5814" d="M321 603.06q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3531" aria-label="40" data-v-039320df><path id="path5817" d="M387.85 604.17h1.829v.814h-1.829v2.965h-.967v-2.965h-5.519v-.548l5.43-8.218h1.056zm-5.301 0h4.334v-6.703l-.427.741z" data-v-039320df></path><path id="path5819" d="M398.15 603.06q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746t2.683-1.273q1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3535" aria-label="50" data-v-039320df><path id="path5822" d="m459.67 601.94.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032.943 1.03.943 2.747 0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.29-.717-2.103t-1.958-.813q-.685 0-1.192.177-.508.169-1.072.668z" data-v-039320df></path><path id="path5824" d="M475.24 603.06q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g></g><g id="text3539" fill="#262626" aria-label="TIME (MS)" data-v-039320df><path id="path5827" d="M465.12 524.77h-4.456v12.359h-1.819V524.77H454.4v-1.504h10.72z" data-v-039320df></path><path id="path5829" d="M469.13 537.13h-1.828v-13.863h1.828z" data-v-039320df></path><path id="path5831" d="m474.84 523.26 4.532 11.312 4.532-11.312h2.371v13.863h-1.828v-5.399l.171-5.827-4.55 11.226h-1.4l-4.542-11.197.18 5.799v5.398h-1.828V523.26z" data-v-039320df></path><path id="path5833" d="M497.34 530.72h-6.008v4.913h6.98v1.495h-8.808v-13.863h8.712v1.504h-6.884v4.457h6.008z" data-v-039320df></path><path id="path5835" d="M505.07 531.5q0-2.152.571-4.132.581-1.98 1.724-3.6t2.37-2.285l.362 1.162q-1.39 1.066-2.285 3.256-.885 2.19-.971 4.904l-.01.81q0 3.675 1.342 6.379.81 1.618 1.924 2.532l-.362 1.076q-1.267-.704-2.419-2.361-2.247-3.237-2.247-7.741z" data-v-039320df></path><path id="path5837" d="m514.44 523.26 4.532 11.312 4.532-11.312h2.371v13.863h-1.828v-5.399l.171-5.827-4.55 11.226h-1.4l-4.542-11.197.18 5.799v5.398h-1.827V523.26z" data-v-039320df></path><path id="path5839" d="M533.19 530.95q-2.352-.676-3.428-1.657-1.066-.99-1.066-2.437 0-1.638 1.304-2.704 1.314-1.076 3.409-1.076 1.428 0 2.542.552 1.124.552 1.733 1.523.619.972.619 2.124h-1.838q0-1.257-.8-1.971-.8-.724-2.256-.724-1.352 0-2.114.6-.752.59-.752 1.647 0 .848.714 1.438.724.58 2.447 1.066 1.733.486 2.704 1.076.98.581 1.448 1.362.476.78.476 1.838 0 1.685-1.314 2.704-1.314 1.009-3.514 1.009-1.428 0-2.666-.543-1.238-.552-1.914-1.504-.666-.952-.666-2.162h1.837q0 1.257.924 1.99.933.724 2.485.724 1.447 0 2.219-.59.77-.59.77-1.61 0-1.018-.713-1.57-.714-.562-2.59-1.105z" data-v-039320df></path><path id="path5841" d="M544.46 531.59q0 2.123-.562 4.075-.552 1.943-1.704 3.59-1.143 1.647-2.4 2.342l-.37-1.076q1.465-1.123 2.35-3.485.896-2.37.915-5.256v-.304q0-2-.419-3.714-.419-1.723-1.171-3.085-.743-1.361-1.676-2.123l.371-1.076q1.257.695 2.39 2.323 1.143 1.629 1.705 3.59.571 1.961.571 4.199z" data-v-039320df></path></g><g id="g4527" fill="#262626" transform="translate(-27.782 -59.642)" data-v-039320df><g id="text3543" aria-label="50" data-v-039320df><path id="path5844" d="m40.26 576.65.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.29-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-039320df></path><path id="path5846" d="M55.825 577.77q0 2.481-.91 3.77-.91 1.281-2.683 1.281-1.74 0-2.667-1.256-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.232.919 1.225.951 3.618zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3547" aria-label="55" data-v-039320df><path id="path5849" d="m40.135 451.94.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.289-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-039320df></path><path id="path5851" d="m49.279 451.94.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.289-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-039320df></path></g><g id="text3551" aria-label="60" data-v-039320df><path id="path5854" d="M45.448 321.36v.846h-.113q-2.103 0-3.311 1.24-1.209 1.233-1.337 3.433.483-.669 1.232-1.031.75-.371 1.676-.371 1.547 0 2.457 1.071.919 1.064.919 2.788 0 1.144-.427 2.063t-1.225 1.434q-.797.507-1.82.507-1.684 0-2.74-1.216-1.055-1.225-1.055-3.159V328q0-3.15 1.434-4.875 1.434-1.732 4.068-1.764zm-2.006 4.947q-.919 0-1.716.548-.79.54-1.056 1.377v.822q0 1.53.782 2.498.79.967 2.046.967 1.128 0 1.821-.895.701-.894.701-2.256 0-1.385-.7-2.223-.694-.838-1.878-.838z" data-v-039320df></path><path id="path5856" d="M55.979 328.29q0 2.481-.91 3.77-.91 1.282-2.683 1.282-1.74 0-2.667-1.257-.927-1.265-.95-3.674v-2.103q0-2.473.918-3.746.918-1.273 2.683-1.273 1.74 0 2.658 1.233.919 1.224.951 3.617zm-.967-2.103q0-2.014-.66-3.045-.653-1.031-1.982-1.031-1.306 0-1.966 1.007-.66 1.007-.677 2.973v2.304q0 2.006.677 3.07.685 1.063 1.982 1.063 1.289 0 1.95-1.04.668-1.039.676-3.045z" data-v-039320df></path></g><g id="text3555" aria-label="65" data-v-039320df><path id="path5859" d="M45.324 196.59v.846h-.113q-2.103 0-3.311 1.24-1.209 1.233-1.337 3.433.483-.669 1.232-1.031.75-.371 1.676-.371 1.547 0 2.457 1.071.919 1.064.919 2.788 0 1.144-.427 2.063t-1.225 1.434q-.797.507-1.82.507-1.684 0-2.74-1.216-1.055-1.225-1.055-3.159v-.966q0-3.15 1.434-4.875 1.434-1.732 4.068-1.764zm-2.006 4.947q-.919 0-1.716.548-.79.54-1.056 1.377v.822q0 1.53.782 2.498.79.967 2.046.967 1.128 0 1.821-.895.701-.894.701-2.256 0-1.385-.7-2.223-.694-.838-1.878-.838z" data-v-039320df></path><path id="path5861" d="m49.432 202.39.572-5.72h5.865v.894h-5.035l-.411 3.964q.943-.645 2.207-.645 1.588 0 2.53 1.032t.943 2.747q0 1.853-.919 2.876-.918 1.023-2.586 1.023-1.53 0-2.481-.854-.95-.854-1.088-2.392h.927q.137 1.2.813 1.82.677.613 1.83.613 1.256 0 1.893-.798.644-.798.644-2.272 0-1.289-.717-2.103t-1.958-.813q-.684 0-1.192.177-.508.169-1.072.668z" data-v-039320df></path></g></g><g id="text3559" fill="#262626" aria-label="AP (%)" transform="rotate(-90)" data-v-039320df><path id="path5864" d="M-74.549 22.026h-5.808l-1.305 3.618h-1.885l5.294-13.863h1.6l5.303 13.863h-1.876zm-5.256-1.504h4.713l-2.361-6.484z" data-v-039320df></path><path id="path5866" d="M-67.656 20.217v5.427h-1.828V11.781h5.113q2.275 0 3.56 1.162 1.296 1.161 1.296 3.075 0 2.019-1.267 3.114-1.256 1.085-3.608 1.085zm0-1.495h3.285q1.466 0 2.247-.685.78-.696.78-2 0-1.238-.78-1.98-.78-.743-2.142-.772h-3.39z" data-v-039320df></path><path id="path5868" d="M-52.698 20.017q0-2.152.571-4.132.581-1.98 1.724-3.6 1.142-1.618 2.37-2.285l.362 1.162q-1.39 1.066-2.285 3.256-.885 2.19-.971 4.904l-.01.81q0 3.675 1.343 6.379.81 1.618 1.923 2.532l-.362 1.076q-1.266-.704-2.418-2.361-2.247-3.237-2.247-7.741z" data-v-039320df></path><path id="path5870" d="M-46.299 14.447q0-1.247.79-2.057.8-.809 2.047-.809 1.267 0 2.047.819.79.81.79 2.104v.676q0 1.257-.799 2.057-.79.79-2.019.79-1.237 0-2.047-.79-.81-.8-.81-2.124zm1.314.733q0 .743.419 1.228.419.477 1.123.477.676 0 1.086-.467.419-.467.419-1.276v-.695q0-.743-.41-1.228-.41-.486-1.114-.486-.704 0-1.114.486-.41.485-.41 1.266zm5.437 7.065q0-1.247.79-2.047.8-.81 2.047-.81t2.047.8q.8.8.8 2.124v.676q0 1.247-.8 2.056-.79.8-2.028.8t-2.047-.79q-.81-.8-.81-2.123zm1.314.743q0 .752.419 1.238.419.476 1.123.476.686 0 1.095-.467.41-.476.41-1.285v-.705q0-.752-.42-1.228-.409-.476-1.104-.476-.676 0-1.104.476-.42.466-.42 1.266zm-4.809 1.609-1-.629 6.77-10.835 1 .629z" data-v-039320df></path><path id="path5872" d="M-27.618 20.112q0 2.123-.562 4.075-.552 1.943-1.704 3.59-1.143 1.647-2.4 2.342l-.37-1.076q1.465-1.123 2.351-3.485.895-2.37.914-5.256v-.304q0-2-.419-3.714-.419-1.723-1.171-3.085-.743-1.361-1.676-2.123l.372-1.076q1.256.695 2.39 2.323 1.142 1.629 1.704 3.59.571 1.961.571 4.199z" data-v-039320df></path></g><g id="circle-blue" data-v-039320df><use xlink:href="#ma7bdf03081" width="100%" height="100%" x="419.406" y="252.396" fill="#5975a4" stroke="#5975a4" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><g id="text3693" fill="#5975a4" aria-label="YOLOV2" data-v-039320df><path id="path5875" d="m385.06 178.67 3.062-5.89h1.756l-4.044 7.356v4.375h-1.547v-4.375l-4.045-7.355h1.773z" data-v-039320df></path><path id="path5877" d="M400.18 179.03q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.855 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5879" d="M404.06 183.25h5.56v1.265h-7.115v-11.73h1.555z" data-v-039320df></path><path id="path5881" d="M419.88 179.03q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.855 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5883" d="m425.91 182.46 3.352-9.676h1.692l-4.351 11.73h-1.37l-4.342-11.73h1.684z" data-v-039320df></path><path id="path5885" d="M439.82 184.51h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.637-.612.628-.612 1.756h-1.49q0-1.62 1.039-2.618 1.047-1 2.795-1 1.636 0 2.587.863.95.854.95 2.28 0 1.732-2.207 4.125l-3.142 3.408h5.89z" data-v-039320df></path></g></g><g id="circle-orange" data-v-039320df><use xlink:href="#m752178a763" width="100%" height="100%" x="199.983" y="437.011" fill="#cc8963" stroke="#cc8963" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><g id="text3696" fill="#cc8963" aria-label="MOBILE YOLOV2" data-v-039320df><path id="path5888" d="m162.82 357.4 3.835 9.571 3.835-9.571h2.006v11.73h-1.547v-4.568l.145-4.93-3.85 9.498h-1.185l-3.843-9.475.153 4.907v4.568h-1.547V357.4z" data-v-039320df></path><path id="path5890" d="M184.25 363.64q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5892" d="M186.57 369.13V357.4h3.835q1.91 0 2.868.79.967.79.967 2.336 0 .822-.467 1.458-.468.629-1.273.975.95.266 1.498 1.015.556.741.556 1.773 0 1.579-1.023 2.481-1.023.902-2.892.902zm1.547-5.487v4.222h2.554q1.08 0 1.7-.556.628-.564.628-1.547 0-2.119-2.304-2.119zm0-1.24h2.336q1.015 0 1.62-.508.612-.507.612-1.378 0-.966-.564-1.401-.564-.443-1.716-.443h-2.288z" data-v-039320df></path><path id="path5894" d="M198.5 369.13h-1.547V357.4h1.547z" data-v-039320df></path><path id="path5896" d="M202.89 367.86h5.56v1.265h-7.115v-11.73h1.555z" data-v-039320df></path><path id="path5898" d="M216.84 363.71h-5.084v4.157h5.906v1.265h-7.453v-11.73h7.372v1.273h-5.825v3.77h5.084z" data-v-039320df></path><path id="path5900" d="m227.25 363.29 3.062-5.89h1.756l-4.045 7.356v4.375h-1.546v-4.375l-4.045-7.355h1.773z" data-v-039320df></path><path id="path5902" d="M242.37 363.64q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5904" d="M246.25 367.86h5.56v1.265h-7.115v-11.73h1.555z" data-v-039320df></path><path id="path5906" d="M262.07 363.64q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.855 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5908" d="m268.1 367.07 3.352-9.676h1.692l-4.351 11.73h-1.37l-4.342-11.73h1.684z" data-v-039320df></path><path id="path5910" d="M282.01 369.13h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.636-.612.629-.612 1.757h-1.49q0-1.62 1.039-2.619 1.047-.999 2.795-.999 1.636 0 2.587.862.95.854.95 2.28 0 1.733-2.207 4.125l-3.142 3.408h5.89z" data-v-039320df></path></g></g><g id="circle-green" data-v-039320df><use xlink:href="#ma1b0d5503e" width="100%" height="100%" x="483.533" y="197.51" fill="#5f9e6e" stroke="#5f9e6e" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><g id="text3699" fill="#5f9e6e" aria-label="YOLOV2 UP" data-v-039320df><path id="path5913" d="m449.19 123.79 3.062-5.89h1.756l-4.044 7.356v4.375h-1.547v-4.375l-4.045-7.355h1.773z" data-v-039320df></path><path id="path5915" d="M464.31 124.14q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5917" d="M468.19 128.36h5.56v1.265h-7.115v-11.73h1.555z" data-v-039320df></path><path id="path5919" d="M484.01 124.14q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.265-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5921" d="m490.04 127.57 3.352-9.676h1.692l-4.351 11.73h-1.37l-4.342-11.73h1.684z" data-v-039320df></path><path id="path5923" d="M503.95 129.63h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.637-.612.628-.612 1.756h-1.49q0-1.62 1.039-2.618 1.047-1 2.795-1 1.636 0 2.586.863.951.854.951 2.28 0 1.732-2.207 4.125l-3.142 3.408h5.889z" data-v-039320df></path><path id="path5925" d="M518.26 117.9v7.976q-.008 1.66-1.047 2.715-1.032 1.056-2.804 1.185l-.411.016q-1.925 0-3.07-1.04-1.144-1.039-1.16-2.86V117.9h1.531v7.944q0 1.273.7 1.982.702.7 1.999.7 1.313 0 2.006-.7.701-.701.701-1.974V117.9z" data-v-039320df></path><path id="path5927" d="M522.25 125.03v4.592h-1.547v-11.73h4.326q1.926 0 3.014.983 1.095.983 1.095 2.603 0 1.708-1.071 2.634-1.064.918-3.054.918zm0-1.265h2.78q1.24 0 1.9-.58.662-.588.662-1.692 0-1.047-.661-1.676-.66-.628-1.813-.652h-2.868z" data-v-039320df></path></g></g><g id="circle-red" data-v-039320df><use xlink:href="#m761dd5ee65" width="100%" height="100%" x="264.11" y="374.641" fill="#b55d60" stroke="#b55d60" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><g id="text3702" fill="#b55d60" aria-label="MOBILE YOLOV2 UP" data-v-039320df><path id="path5930" d="m226.95 295.03 3.835 9.571 3.835-9.571h2.006v11.73h-1.547v-4.568l.145-4.93-3.85 9.498h-1.185l-3.843-9.475.153 4.907v4.568h-1.547v-11.73z" data-v-039320df></path><path id="path5932" d="M248.38 301.27q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.862 3.094v.862q0 2.022.845 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5934" d="M250.7 306.76v-11.73h3.835q1.91 0 2.868.79.967.79.967 2.336 0 .822-.467 1.458-.468.629-1.273.975.95.266 1.498 1.015.556.741.556 1.773 0 1.579-1.023 2.481-1.023.902-2.892.902zm1.547-5.487v4.222h2.554q1.08 0 1.7-.556.628-.564.628-1.547 0-2.119-2.304-2.119zm0-1.24h2.336q1.015 0 1.62-.508.612-.507.612-1.378 0-.966-.564-1.401-.564-.444-1.716-.444h-2.288z" data-v-039320df></path><path id="path5936" d="M262.63 306.76h-1.547v-11.73h1.547z" data-v-039320df></path><path id="path5938" d="M267.01 305.49h5.56v1.265h-7.115v-11.73h1.555z" data-v-039320df></path><path id="path5940" d="M280.97 301.34h-5.084v4.157h5.906v1.265h-7.453v-11.73h7.372v1.273h-5.825v3.77h5.084z" data-v-039320df></path><path id="path5942" d="m291.38 300.92 3.062-5.89h1.756l-4.044 7.356v4.375h-1.547v-4.375l-4.045-7.355h1.773z" data-v-039320df></path><path id="path5944" d="M306.5 301.27q0 1.724-.58 3.013-.58 1.281-1.644 1.958t-2.481.677q-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99t1.66-1.981q1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5946" d="M310.37 305.49h5.56v1.265h-7.115v-11.73h1.555z" data-v-039320df></path><path id="path5948" d="M326.2 301.27q0 1.724-.58 3.013-.58 1.281-1.644 1.958-1.063.677-2.481.677-1.386 0-2.457-.677-1.072-.685-1.668-1.942-.588-1.264-.604-2.924v-.846q0-1.692.588-2.99.588-1.296 1.66-1.981 1.08-.693 2.465-.693 1.41 0 2.481.685 1.08.677 1.66 1.974.58 1.289.58 3.005zm-1.539-.757q0-2.087-.838-3.199-.838-1.12-2.344-1.12-1.466 0-2.312 1.12-.838 1.112-.863 3.094v.862q0 2.022.846 3.182.854 1.153 2.345 1.153 1.498 0 2.32-1.088.822-1.096.846-3.134z" data-v-039320df></path><path id="path5950" d="m332.22 304.7 3.352-9.676h1.692l-4.351 11.73h-1.37l-4.342-11.73h1.684z" data-v-039320df></path><path id="path5952" d="M346.14 306.76h-7.686v-1.071l4.06-4.512q.903-1.023 1.241-1.66.347-.644.347-1.33 0-.918-.556-1.506t-1.483-.588q-1.111 0-1.732.636-.612.629-.612 1.757h-1.49q0-1.62 1.039-2.619 1.047-.999 2.795-.999 1.636 0 2.587.862.95.854.95 2.28 0 1.733-2.207 4.125l-3.142 3.408h5.889z" data-v-039320df></path><path id="path5954" d="M360.45 295.03v7.976q-.008 1.66-1.047 2.715-1.032 1.056-2.804 1.184l-.411.017q-1.925 0-3.07-1.04-1.144-1.039-1.16-2.86v-7.992h1.531v7.944q0 1.273.7 1.982.702.7 1.999.7 1.313 0 2.006-.7.701-.701.701-1.974v-7.952z" data-v-039320df></path><path id="path5956" d="M364.43 302.17v4.592h-1.547v-11.73h4.327q1.925 0 3.013.983 1.095.983 1.095 2.603 0 1.708-1.071 2.634-1.064.918-3.054.918zm0-1.265h2.78q1.24 0 1.901-.58.66-.588.66-1.692 0-1.047-.66-1.676-.66-.628-1.813-.652h-2.868z" data-v-039320df></path></g></g><g class="square" data-v-039320df><use xlink:href="#ma06b53b74f" id="use3574" width="100%" height="100%" x="254.066" y="312.271" fill="#5975a4" stroke="#5975a4" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><use xlink:href="#mb19a64e732" id="use3598" width="100%" height="100%" x="182.985" y="476.928" fill="#cc8963" stroke="#cc8963" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><use xlink:href="#m4513212936" id="use3622" width="100%" height="100%" x="278.79" y="222.458" fill="#5f9e6e" stroke="#5f9e6e" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><use xlink:href="#m36a0a566af" id="use3646" width="100%" height="100%" x="183.758" y="419.548" fill="#b55d60" stroke="#b55d60" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use></g><g class="triangle" data-v-039320df><use xlink:href="#mf73a5676b2" id="use3582" width="100%" height="100%" x="177.577" y="312.271" fill="#5975a4" stroke="#5975a4" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><use xlink:href="#m15bfeed542" id="use3606" width="100%" height="100%" x="169.078" y="476.928" fill="#cc8963" stroke="#cc8963" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><use xlink:href="#mc9fe87e902" id="use3630" width="100%" height="100%" x="182.985" y="222.458" fill="#5f9e6e" stroke="#5f9e6e" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use><use xlink:href="#m6c80c061d0" id="use3654" width="100%" height="100%" x="177.577" y="419.548" fill="#b55d60" stroke="#b55d60" stroke-width="1.5" transform="translate(-44.241 -59.642)" data-v-039320df></use></g><path id="line-blue" fill="none" stroke="#5975a4" stroke-linecap="round" stroke-width="1.5" d="m419.41 252.4-165.34 59.875h-76.489" class="line" clip-path="url(#pa30b3ab5d0)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-039320df></path><path id="line-orange" fill="none" stroke="#cc8963" stroke-linecap="round" stroke-width="1.5" d="m199.98 437.01-16.998 39.917h-13.907" class="line" clip-path="url(#pa30b3ab5d0)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-039320df></path><path id="line-green" fill="none" stroke="#5f9e6e" stroke-linecap="round" stroke-width="1.5" d="m483.53 197.51-204.74 24.948h-95.804" class="line" clip-path="url(#pa30b3ab5d0)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-039320df></path><path id="line-red" fill="none" stroke="#b55d60" stroke-linecap="round" stroke-width="1.5" d="m264.11 374.64-80.352 44.906h-6.18" class="line" clip-path="url(#pa30b3ab5d0)" pathLength="1" transform="translate(-44.241 -59.642)" data-v-039320df></path><use xlink:href="#md9ae572146" id="use3674" width="100%" height="100%" x="583.2" y="576.72" fill="#262626" stroke="#262626" transform="translate(-29.241 -59.642)" data-v-039320df></use><use xlink:href="#ma1c8768e36" id="use3682" width="100%" height="100%" x="81" y="77.76" fill="#262626" stroke="#262626" transform="translate(-44.241 -59.642)" data-v-039320df></use><path id="path3687" fill="none" stroke="#262626" stroke-linecap="square" stroke-width="1.875" d="M36.759 517.08V18.12" data-v-039320df></path><path id="path3690" fill="none" stroke="#262626" stroke-linecap="square" stroke-width="1.875" d="M36.759 517.08h517.2" data-v-039320df></path><defs id="defs3710" data-v-039320df><clipPath id="pa30b3ab5d0" data-v-039320df><rect id="rect3707" width="502.2" height="498.96" x="81" y="77.76" data-v-039320df></rect></clipPath></defs><g id="text1674" fill="#262626" aria-label="PASCAL VOC" transform="translate(125.33 -29.586)" data-v-039320df><path id="path5959" d="M105.33 48.212v5.427h-1.828V39.776h5.113q2.275 0 3.56 1.162 1.296 1.161 1.296 3.075 0 2.019-1.267 3.114-1.256 1.085-3.608 1.085zm0-1.495h3.285q1.466 0 2.247-.685.78-.696.78-2 0-1.238-.78-1.98-.78-.743-2.142-.772h-3.39z" stop-color="#000" data-v-039320df></path><path id="path5961" d="M122.15 50.021h-5.808l-1.304 3.618h-1.886l5.294-13.863h1.6l5.303 13.863h-1.875zm-5.256-1.504h4.713l-2.361-6.484z" stop-color="#000" data-v-039320df></path><path id="path5963" d="M131.3 47.46q-2.352-.676-3.428-1.657-1.066-.99-1.066-2.437 0-1.638 1.304-2.704 1.314-1.076 3.409-1.076 1.428 0 2.542.552 1.124.552 1.733 1.523.619.972.619 2.124h-1.838q0-1.257-.8-1.971-.8-.724-2.256-.724-1.352 0-2.114.6-.752.59-.752 1.647 0 .848.714 1.438.724.58 2.447 1.066 1.733.486 2.704 1.076.98.581 1.448 1.362.476.78.476 1.837 0 1.686-1.314 2.705-1.314 1.009-3.514 1.009-1.428 0-2.666-.543-1.238-.552-1.914-1.504-.666-.952-.666-2.162h1.837q0 1.257.924 1.99.933.724 2.485.724 1.447 0 2.219-.59t.77-1.61q0-1.018-.713-1.57-.714-.562-2.59-1.105z" stop-color="#000" data-v-039320df></path><path id="path5965" d="M148.98 49.241q-.257 2.2-1.628 3.4-1.362 1.19-3.628 1.19-2.456 0-3.942-1.762-1.476-1.762-1.476-4.713v-1.333q0-1.933.686-3.4.695-1.466 1.961-2.246 1.267-.79 2.933-.79 2.209 0 3.542 1.237 1.333 1.228 1.552 3.409h-1.838q-.238-1.657-1.037-2.4-.79-.742-2.219-.742-1.752 0-2.752 1.295-.99 1.294-.99 3.684v1.343q0 2.256.943 3.59.942 1.332 2.637 1.332 1.524 0 2.333-.685.819-.695 1.085-2.409z" stop-color="#000" data-v-039320df></path><path id="path5967" d="M159.13 50.021h-5.808l-1.305 3.618h-1.885l5.294-13.863h1.6l5.303 13.863h-1.875zm-5.256-1.504h4.713l-2.361-6.484z" stop-color="#000" data-v-039320df></path><path id="path5969" d="M166.03 52.145h6.57v1.495h-8.408V39.777h1.838z" stop-color="#000" data-v-039320df></path><path id="path5971" d="m184.11 51.212 3.96-11.435h2L184.93 53.64h-1.619l-5.132-13.863h1.99z" stop-color="#000" data-v-039320df></path><path id="path5973" d="M202.46 47.155q0 2.038-.686 3.561-.685 1.514-1.942 2.314t-2.933.8q-1.637 0-2.904-.8-1.266-.81-1.97-2.295-.696-1.495-.715-3.456v-1q0-2 .695-3.533t1.962-2.342q1.276-.819 2.913-.819 1.667 0 2.933.81 1.276.8 1.961 2.332.686 1.524.686 3.552zm-1.819-.895q0-2.466-.99-3.78-.99-1.324-2.77-1.324-1.734 0-2.733 1.324-.99 1.314-1.02 3.656v1.019q0 2.39 1 3.761 1.01 1.362 2.771 1.362 1.771 0 2.743-1.286.97-1.295 1-3.704z" stop-color="#000" data-v-039320df></path><path id="path5975" d="M215.4 49.241q-.257 2.2-1.628 3.4-1.362 1.19-3.628 1.19-2.456 0-3.942-1.762-1.476-1.762-1.476-4.713v-1.333q0-1.933.686-3.4.695-1.466 1.961-2.246 1.267-.79 2.933-.79 2.209 0 3.542 1.237 1.333 1.228 1.552 3.409h-1.838q-.238-1.657-1.037-2.4-.79-.742-2.219-.742-1.752 0-2.752 1.295-.99 1.294-.99 3.684v1.343q0 2.256.943 3.59.942 1.332 2.637 1.332 1.524 0 2.333-.685.819-.695 1.085-2.409z" stop-color="#000" data-v-039320df></path></g><g id="g5175" transform="translate(-376.32 197.93)" data-v-039320df><g id="g5135" transform="translate(60.561 214.85)" data-v-039320df><use xlink:href="#ma1b0d5503e" id="use3614-6" width="100%" height="100%" x="483.533" y="197.51" fill="#8c8c8c" stroke="#8c8c8c" stroke-linejoin="round" stroke-width="1.5" transform="translate(123.37 -108.62)" data-v-039320df></use><g id="text1731" fill="#262626" aria-label="BASE" transform="translate(-35.593 -73.08)" data-v-039320df><path id="path5978" d="M652.08 167.84v-11.73h3.464q1.886 0 2.86.781.975.774.975 2.289 0 .91-.5 1.587-.49.668-1.353.959 1.024.225 1.644 1.007.628.781.628 1.804 0 1.555-1.007 2.433-.999.87-2.787.87zm.991-5.64v4.802h2.973q1.273 0 2.014-.644.75-.653.75-1.805 0-1.088-.718-1.716-.709-.637-1.966-.637zm0-.83h2.707q1.24-.024 1.917-.58.685-.563.685-1.635 0-1.128-.709-1.66-.7-.54-2.127-.54h-2.473z" stop-color="#000" data-v-039320df></path><path id="path5980" d="M668.52 164.55h-5.325l-1.209 3.287h-1.04l4.44-11.73h.943l4.439 11.73h-1.031zm-5.02-.846h4.706l-2.353-6.389z" stop-color="#000" data-v-039320df></path><path id="path5982" d="M679.13 164.96q0-.975-.685-1.539-.685-.572-2.505-1.08-1.821-.515-2.66-1.12-1.192-.853-1.192-2.239 0-1.345 1.104-2.183 1.112-.846 2.836-.846 1.168 0 2.087.45.926.452 1.434 1.258.508.805.508 1.796h-1q0-1.2-.821-1.925-.822-.733-2.208-.733-1.345 0-2.143.604-.797.596-.797 1.563 0 .894.717 1.458t2.296 1q1.579.426 2.392.893.814.46 1.225 1.104.411.645.411 1.523 0 1.386-1.112 2.224-1.104.837-2.916.837-1.241 0-2.28-.443-1.032-.443-1.571-1.24-.532-.798-.532-1.83h.99q0 1.241.927 1.959t2.466.717q1.37 0 2.2-.605.829-.604.829-1.603z" stop-color="#000" data-v-039320df></path><path id="path5984" d="M688.74 162.22h-5.487v4.786h6.309v.837h-7.3v-11.73h7.26v.846h-6.269v4.424h5.487z" stop-color="#000" data-v-039320df></path></g></g><g id="g5130" transform="translate(127.71 184.27)" data-v-039320df><use xlink:href="#m4513212936" id="use3622-2" width="100%" height="100%" x="278.79" y="222.458" fill="#8c8c8c" stroke="#8c8c8c" stroke-linejoin="round" stroke-width="1.5" transform="translate(328.12 -103.07)" data-v-039320df></use><g id="text1731-5" fill="#262626" aria-label="PRUNED" transform="translate(-35.593 -42.583)" data-v-039320df><path id="path5987" d="M653.07 163.06v4.778h-.991v-11.73h3.996q1.829 0 2.884.934 1.064.935 1.064 2.57 0 1.652-1.023 2.554-1.015.895-2.949.895zm0-.838h3.005q1.442 0 2.2-.685.757-.685.757-1.91 0-1.216-.757-1.933-.75-.725-2.135-.74h-3.07z" stop-color="#000" data-v-039320df></path><path id="path5989" d="M666.62 162.96h-3.408v4.882h-.999v-11.73h3.81q1.878 0 2.933.91t1.056 2.547q0 1.128-.66 1.99-.662.862-1.773 1.192l2.932 4.987v.105h-1.055zm-3.408-.846h3.037q1.25 0 2.007-.709.757-.709.757-1.837 0-1.24-.79-1.925t-2.215-.685h-2.796z" stop-color="#000" data-v-039320df></path><path id="path5991" d="M680.79 156.11v8.008q-.008 1.185-.524 2.063-.515.878-1.458 1.353-.935.468-2.151.468-1.853 0-2.973-1.008-1.112-1.015-1.152-2.803v-8.081h.983v7.936q0 1.482.846 2.304.846.814 2.296.814 1.45 0 2.288-.822.846-.822.846-2.288v-7.944z" stop-color="#000" data-v-039320df></path><path id="path5993" d="M692.29 167.84h-.991l-6.743-10.039v10.039h-1v-11.73h1l6.751 10.047V156.11h.983z" stop-color="#000" data-v-039320df></path><path id="path5995" d="M701.75 162.22h-5.487v4.786h6.309v.837h-7.3v-11.73h7.26v.846h-6.269v4.424h5.487z" stop-color="#000" data-v-039320df></path><path id="path5997" d="M704.66 167.84v-11.73h3.279q1.442 0 2.586.66 1.144.653 1.78 1.878.645 1.224.645 2.787v1.08q0 1.571-.636 2.788-.637 1.216-1.797 1.877-1.152.66-2.65.66zm.991-10.885v10.047h2.224q1.853 0 2.972-1.225 1.12-1.232 1.12-3.327v-1.031q0-2.022-1.103-3.239t-2.909-1.225z" stop-color="#000" data-v-039320df></path></g></g><g id="g5125" transform="translate(218.24 147.08)" data-v-039320df><use xlink:href="#mc9fe87e902" id="use3630-8" width="100%" height="100%" x="182.985" y="222.458" fill="#8c8c8c" stroke="#8c8c8c" stroke-linejoin="round" stroke-width="1.5" transform="translate(423.92 -65.79)" data-v-039320df></use><g id="text1731-5-2" fill="#262626" aria-label="QUANTISED" transform="translate(-35.085 -6.248)" data-v-039320df><path id="path6000" d="M660.71 162.61q0 1.676-.596 2.925-.588 1.24-1.684 1.877l2.135 1.86-.685.613-2.393-2.07q-.66.185-1.345.185-1.337 0-2.385-.66-1.04-.661-1.611-1.87-.572-1.216-.58-2.804v-1.313q0-1.603.564-2.836.572-1.24 1.611-1.901 1.04-.669 2.385-.669 1.37 0 2.409.66 1.039.662 1.603 1.894.572 1.233.572 2.844zm-.991-1.273q0-2.119-.959-3.32t-2.634-1.2q-1.628 0-2.603 1.209-.966 1.2-.966 3.36v1.224q0 2.087.958 3.311.967 1.217 2.627 1.217 1.676 0 2.626-1.2.951-1.2.951-3.352z" stop-color="#000" data-v-039320df></path><path id="path6002" d="M671.33 156.11v8.008q-.008 1.185-.524 2.063-.515.878-1.458 1.353-.934.468-2.151.468-1.853 0-2.973-1.008-1.112-1.015-1.152-2.803v-8.081h.983v7.936q0 1.482.846 2.304.846.814 2.296.814 1.45 0 2.288-.822.846-.822.846-2.288v-7.944z" stop-color="#000" data-v-039320df></path><path id="path6004" d="M680.24 164.55h-5.325l-1.209 3.287h-1.04l4.44-11.73h.943l4.439 11.73h-1.031zm-5.02-.846h4.706l-2.353-6.389z" stop-color="#000" data-v-039320df></path><path id="path6006" d="M692.95 167.84h-.991l-6.743-10.039v10.039h-1v-11.73h1l6.751 10.047V156.11h.983z" stop-color="#000" data-v-039320df></path><path id="path6008" d="M703.89 156.96h-4.02v10.885h-.991V156.96h-4.012v-.846h9.023z" stop-color="#000" data-v-039320df></path><path id="path6010" d="M706.99 167.84h-.991v-11.73h.991z" stop-color="#000" data-v-039320df></path><path id="path6012" d="M716.81 164.96q0-.975-.685-1.539-.685-.572-2.505-1.08-1.821-.515-2.66-1.12-1.192-.853-1.192-2.239 0-1.345 1.104-2.183 1.112-.846 2.836-.846 1.168 0 2.087.45.926.452 1.434 1.258.508.805.508 1.796h-1q0-1.2-.821-1.925-.822-.733-2.208-.733-1.345 0-2.143.604-.797.596-.797 1.563 0 .894.717 1.458t2.296 1q1.579.426 2.392.893.814.46 1.225 1.104t.411 1.523q0 1.386-1.112 2.224-1.104.837-2.916.837-1.241 0-2.28-.443-1.032-.443-1.571-1.24-.532-.798-.532-1.83h.99q0 1.241.927 1.959t2.466.717q1.37 0 2.2-.605.829-.604.829-1.603z" stop-color="#000" data-v-039320df></path><path id="path6014" d="M726.42 162.22h-5.487v4.786h6.309v.837h-7.3v-11.73h7.26v.846h-6.269v4.424h5.487z" stop-color="#000" data-v-039320df></path><path id="path6016" d="M729.33 167.84v-11.73h3.279q1.442 0 2.586.66 1.144.653 1.78 1.878.645 1.224.645 2.787v1.08q0 1.571-.636 2.788-.637 1.216-1.797 1.877-1.152.66-2.65.66zm.991-10.885v10.047h2.224q1.853 0 2.972-1.225 1.12-1.232 1.12-3.327v-1.031q0-2.022-1.103-3.239t-2.909-1.225z" stop-color="#000" data-v-039320df></path></g></g></g>',22),vI=[fI];function uI(t,e){return y(),X("svg",pI,vI)}const mI={render:uI,__scopeId:"data-v-039320df",__name:"Speed-APTimeVOC",__file:"/home/runner/work/phd-defense/phd-defense/components/05-speed/Speed-APTimeVOC.svg"};const qI=t=>(At("data-v-871d0c02"),t=t(),Ot(),t),bI=qI(()=>o("h1",null,"Results",-1)),VI={__name:"38",setup(t){const e={clicks:4,color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"};return H(tt),(a,i)=>{const r=mI,c=oI,n=mt("animattr");return y(),C(Nt,yt(qt(e)),{content:j(l=>[D(A(r,null,null,512),[[n]]),D(A(c,null,null,512),[[n]])]),default:j(()=>[bI]),_:1},16)}}},yI=at(VI,[["__scopeId","data-v-871d0c02"],["__file","/@slidev/slides/38.md"]]);const o0=t=>(At("data-v-206a609d"),t=t(),Ot(),t),kI=o0(()=>o("h1",null,"Contributions",-1)),xI={class:"flex flex-col flex-justify-evenly flex-align-center w-[85%] h-full m-auto pb-14"},gI=o0(()=>o("ul",null,[o("li",null,"Blindly applying all optimizations does not yield the best results"),o("li",null,"More constrained problems allow for more reduction in complexity"),o("li",null,"On Pascal VOC, we managed to make our model 4x faster"),o("li",null,"On LWIR, we made our model 15x faster")],-1)),RI=o0(()=>o("ol",{start:"5"},[o("li",null,[it("T. Ophoff, C. Gullentops, K. Van Beeck, and T. Goedemé. “Investigating the Potential of Network Optimization for a Constrained Object Detection Problem”. In: "),o("em",null,"Journal of Imaging"),it(" 7.4 (2021).")])],-1)),TI={__name:"39",setup(t){const e={color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"};return H(tt),(a,i)=>{const r=B1,c=S2,n=mt("click");return y(),C(Nt,yt(qt(e)),{content:j(l=>[o("div",xI,[o("div",null,[D((y(),C(r,{"color-opacity":.9,class:"text-white text-center rounded p-1 mb-2"},{default:j(()=>[it(" How much can we speed up our models whilst maintaining the accuracy? ")]),_:1})),[[n]]),A(c,null,{default:j(()=>[gI]),_:1})])]),RI]),default:j(()=>[kI]),_:1},16)}}},SI=at(TI,[["__scopeId","data-v-206a609d"],["__file","/@slidev/slides/39.md"]]),II={__name:"40",setup(t){const e={layout:"section"};return H(tt),(a,i)=>(y(),C(B2,yt(qt(e)),null,16))}},EI=at(II,[["__file","/@slidev/slides/40.md"]]);const R1=t=>(At("data-v-d26635d4"),t=t(),Ot(),t),wI={class:"!w-full !h-full bg-black grid grid-rows-[1fr_1fr_1fr] grid-gap-4 grid-hidden text-white"},UI=R1(()=>o("p",null,[it("How can we adapt detection algorithms"),o("br"),it(" to work on remote sensing data?")],-1)),NI=[UI],KI={class:"answer"},XI=R1(()=>o("span",null,[it("sliding"),o("br"),it("window")],-1)),JI=R1(()=>o("span",null,[it("scene-specific"),o("br"),it("processing")],-1)),jI=R1(()=>o("span",null,"ResnetYolo",-1)),FI=[XI,JI,jI],AI=R1(()=>o("p",null,[it("How to combine color and depth data"),o("br"),it(" to improve detection models?")],-1)),OI=[AI],MI={class:"answer"},LI=R1(()=>o("span",null,[it("transparent"),o("br"),it("fuse layer")],-1)),zI=R1(()=>o("span",null,[it("mid-late"),o("br"),it("fusion")],-1)),WI=R1(()=>o("span",null,[it("different"),o("br"),it("use cases")],-1)),CI=R1(()=>o("span",null,[it("remote"),o("br"),it("sensing")],-1)),QI=[LI,zI,WI,CI],HI=R1(()=>o("p",null,[it("How much can we speed up our models"),o("br"),it(" whilst maintaining the accuracy?")],-1)),ZI=[HI],GI={class:"answer"},PI=R1(()=>o("span",null,[it("careful"),o("br"),it("selection")],-1)),YI=R1(()=>o("span",null,"constrainedness",-1)),BI=R1(()=>o("span",null,[it("academic"),o("br"),it("4x")],-1)),DI=R1(()=>o("span",null,[it("industrial"),o("br"),it("15x")],-1)),_I=[PI,YI,BI,DI],$I={style:{display:"none"}},tE={__name:"41",setup(t){const e={layout:"none",clicks:7};return H(tt),(a,i)=>{const r=B1,c=mt("click-hide"),n=mt("click");return y(),C(Kc,yt(qt(e)),{default:j(()=>[o("div",wI,[D((y(),C(r,{class:"w-full h-full flex flex-items-center flex-justify-center p-5","color-opacity":.6,image:"url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)",imageFilter:"grayscale(0.9)"},{default:j(()=>[D((y(),X("div",null,NI)),[[c,2]]),D((y(),X("div",KI,FI)),[[n,2]])]),_:1})),[[n,1]]),D((y(),C(r,{class:"w-full h-full flex flex-items-center flex-justify-center p-5","color-opacity":.6,image:"url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",imageFilter:"grayscale(0.9)"},{default:j(()=>[D((y(),X("div",null,OI)),[[c,4]]),D((y(),X("div",MI,QI)),[[n,4]])]),_:1})),[[n,3]]),D((y(),C(r,{class:"w-full h-full flex flex-items-center flex-justify-center p-5","color-opacity":.6,image:"url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)",imageFilter:"grayscale(0.9)"},{default:j(()=>[D((y(),X("div",null,ZI)),[[c,6]]),D((y(),X("div",GI,_I)),[[n,6]])]),_:1})),[[n,5]]),D(o("div",$I,null,512),[[n,7]])])]),_:1},16)}}},eE=at(tE,[["__scopeId","data-v-d26635d4"],["__file","/@slidev/slides/41.md"]]),aE=[{path:"1",name:"page-1",component:HV,meta:{theme:"eavise",addons:["slidev-addon-animattr"],transition:"fade",author:"Tanguy Ophoff",date:"26 June 2023",image:"/earthobservation.jpg","image-transform":"scale(1.1)","image-filter":"grayscale(0.4)","color-opacity":.5,title:"Aerial Object Detection",slide:{raw:`---
theme: eavise
addons:
  - slidev-addon-animattr
transition: fade

author: Tanguy Ophoff
date: 26 June 2023
image: /earthobservation.jpg
image-transform: scale(1.1) 
image-filter: grayscale(0.4)
color-opacity: 0.5
---

# Aerial Object Detection
## PhD Defense

<div class="quote">

**1052**

satellites  
observing  
earth

</div>

<style>

.quote {
  @apply text-8l;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;

  @apply flex-(~ col align-center justify-center gap-1);
  position: absolute;
  inset: 0 50% 0 0;

  & p:first-child {
    @apply text-12l;
  }
}

</style>
`,title:"Aerial Object Detection",level:1,content:`# Aerial Object Detection
## PhD Defense

<div class="quote">

**1052**

satellites  
observing  
earth

</div>

<style>

.quote {
  @apply text-8l;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;

  @apply flex-(~ col align-center justify-center gap-1);
  position: absolute;
  inset: 0 50% 0 0;

  & p:first-child {
    @apply text-12l;
  }
}

</style>`,frontmatter:{theme:"eavise",addons:["slidev-addon-animattr"],transition:"fade",author:"Tanguy Ophoff",date:"26 June 2023",image:"/earthobservation.jpg","image-transform":"scale(1.1)","image-filter":"grayscale(0.4)","color-opacity":.5,title:"Aerial Object Detection"},index:0,start:0,end:47,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:ty,meta:{layout:"none",slide:{raw:`---
layout: none
---

<div class="!w-full !h-full bg-black grid-(~ rows-[1fr_1fr_1fr] gap-4) grid-hidden text-white">

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How can we adapt detection algorithms  
to work on remote sensing data?

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How to combine color and depth data  
to improve detection models?

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How much can we speed up our models  
whilst maintaining the accuracy?

</Block>

<div v-click style="display:none" />

</div>

<style>
  .block p {
    @apply text-(center 20l);
    line-height: 1.2;
  }

  .slidev-vclick-target {
    transition: translate 200ms ease-in;
  }
  .block::after {
    transition: background-color 200ms;
  }

  .slidev-vclick-hidden {
    translate: 100% 0;
  }
  .block:has(+ .slidev-vclick-prior), .block:has(+ .slidev-vclick-current) {
    --color: black !important;
    color: rgb(150,150,150);
  }
</style>
`,content:`<div class="!w-full !h-full bg-black grid-(~ rows-[1fr_1fr_1fr] gap-4) grid-hidden text-white">

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How can we adapt detection algorithms  
to work on remote sensing data?

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How to combine color and depth data  
to improve detection models?

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How much can we speed up our models  
whilst maintaining the accuracy?

</Block>

<div v-click style="display:none" />

</div>

<style>
  .block p {
    @apply text-(center 20l);
    line-height: 1.2;
  }

  .slidev-vclick-target {
    transition: translate 200ms ease-in;
  }
  .block::after {
    transition: background-color 200ms;
  }

  .slidev-vclick-hidden {
    translate: 100% 0;
  }
  .block:has(+ .slidev-vclick-prior), .block:has(+ .slidev-vclick-current) {
    --color: black !important;
    color: rgb(150,150,150);
  }
</style>`,frontmatter:{layout:"none"},index:1,start:47,end:118,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:wy,meta:{title:"Section Teach",layout:"section",number:1,slide:{raw:`---
title: Section Teach
layout: section
number: 1
---
`,title:"Section Teach",content:"",frontmatter:{title:"Section Teach",layout:"section",number:1},index:2,start:118,end:124,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Hy,meta:{title:"Teach Convolution",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md",slide:{raw:null,title:"Teach Convolution",content:`# Convolution

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachConvolution v-animattr height="90%"/>

</div>`,frontmatter:{title:"Teach Convolution",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md"},index:3,start:0,end:13,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",raw:`---
title: Teach Convolution
---
# Convolution

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachConvolution v-animattr height="90%"/>

</div>
`,title:"Teach Convolution",content:`# Convolution

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachConvolution v-animattr height="90%"/>

</div>`,frontmatter:{title:"Teach Convolution"},index:0,start:0,end:13},inline:{raw:`---
src: pages/01-teach.md
color: var(--sns-desat-0)
icon: teach
---
`,content:"",frontmatter:{color:"var(--sns-desat-0)",icon:"teach"},index:3,start:124,end:130},filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:tk,meta:{title:"Teach CNN",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md",slide:{raw:`---
title: Teach CNN
---

# Neural Network

::content::

<div class="flex-(~ col justify-center items-center) h-full pb-8">

<TeachCNN-norelu v-animattr width="95%"/>

</div>

`,title:"Teach CNN",content:`# Neural Network

::content::

<div class="flex-(~ col justify-center items-center) h-full pb-8">

<TeachCNN-norelu v-animattr width="95%"/>

</div>`,frontmatter:{title:"Teach CNN",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md"},index:4,start:13,end:28,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",raw:`---
title: Teach CNN
---

# Neural Network

::content::

<div class="flex-(~ col justify-center items-center) h-full pb-8">

<TeachCNN-norelu v-animattr width="95%"/>

</div>

`,title:"Teach CNN",content:`# Neural Network

::content::

<div class="flex-(~ col justify-center items-center) h-full pb-8">

<TeachCNN-norelu v-animattr width="95%"/>

</div>`,frontmatter:{title:"Teach CNN"},index:1,start:13,end:28},filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:hk,meta:{title:"Teach Detection",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md",slide:{raw:`---
title: Teach Detection
---

# Object Detection

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachDetection v-animattr height="90%"/>

</div>
`,title:"Teach Detection",content:`# Object Detection

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachDetection v-animattr height="90%"/>

</div>`,frontmatter:{title:"Teach Detection",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md"},index:5,start:28,end:42,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",raw:`---
title: Teach Detection
---

# Object Detection

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachDetection v-animattr height="90%"/>

</div>
`,title:"Teach Detection",content:`# Object Detection

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachDetection v-animattr height="90%"/>

</div>`,frontmatter:{title:"Teach Detection"},index:2,start:28,end:42},filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Vk,meta:{title:"Teach Training",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md",slide:{raw:`---
title: Teach Training
---

# Training

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachTraining v-animattr height="90%"/>

</div>
`,title:"Teach Training",content:`# Training

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachTraining v-animattr height="90%"/>

</div>`,frontmatter:{title:"Teach Training",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md"},index:6,start:42,end:56,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",raw:`---
title: Teach Training
---

# Training

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachTraining v-animattr height="90%"/>

</div>
`,title:"Teach Training",content:`# Training

::content::

<div class="flex-(~ col justify-center items-center) h-full">

<TeachTraining v-animattr height="90%"/>

</div>`,frontmatter:{title:"Teach Training"},index:3,start:42,end:56},filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Mk,meta:{title:"Teach Statistics",clicks:7,color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md",slide:{raw:`---
title: Teach Statistics
clicks: 7
---

# Statistics

::content::

<div class="flex-(~ justify-center items-center) h-full pb-8">

<TeachStatistics v-animattr :start="3" height="90%" class="mt--4"/>

<div class="text-center flex-(~ col justify-between) h-[60%]">

<v-click at="0">

**Precision**  
*How many of the detected objects are correct?*

</v-click>

<v-click at="1">

**Recall**  
*How many correct objects are detected?*

</v-click>
<v-click at="6">

**Average Precision**  
*Area under the curve*

</v-click>

</div>

</div>

<v-click at="2">
<div v-click-hide="6" class="absolute w-[250px] bottom-2 right-[220px]">
    <TeachStatisticsExample v-animattr :start="4" />
</div>
</v-click>
`,title:"Teach Statistics",content:`# Statistics

::content::

<div class="flex-(~ justify-center items-center) h-full pb-8">

<TeachStatistics v-animattr :start="3" height="90%" class="mt--4"/>

<div class="text-center flex-(~ col justify-between) h-[60%]">

<v-click at="0">

**Precision**  
*How many of the detected objects are correct?*

</v-click>

<v-click at="1">

**Recall**  
*How many correct objects are detected?*

</v-click>
<v-click at="6">

**Average Precision**  
*Area under the curve*

</v-click>

</div>

</div>

<v-click at="2">
<div v-click-hide="6" class="absolute w-[250px] bottom-2 right-[220px]">
    <TeachStatisticsExample v-animattr :start="4" />
</div>
</v-click>`,frontmatter:{title:"Teach Statistics",clicks:7,color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md"},index:7,start:56,end:101,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",raw:`---
title: Teach Statistics
clicks: 7
---

# Statistics

::content::

<div class="flex-(~ justify-center items-center) h-full pb-8">

<TeachStatistics v-animattr :start="3" height="90%" class="mt--4"/>

<div class="text-center flex-(~ col justify-between) h-[60%]">

<v-click at="0">

**Precision**  
*How many of the detected objects are correct?*

</v-click>

<v-click at="1">

**Recall**  
*How many correct objects are detected?*

</v-click>
<v-click at="6">

**Average Precision**  
*Area under the curve*

</v-click>

</div>

</div>

<v-click at="2">
<div v-click-hide="6" class="absolute w-[250px] bottom-2 right-[220px]">
    <TeachStatisticsExample v-animattr :start="4" />
</div>
</v-click>
`,title:"Teach Statistics",content:`# Statistics

::content::

<div class="flex-(~ justify-center items-center) h-full pb-8">

<TeachStatistics v-animattr :start="3" height="90%" class="mt--4"/>

<div class="text-center flex-(~ col justify-between) h-[60%]">

<v-click at="0">

**Precision**  
*How many of the detected objects are correct?*

</v-click>

<v-click at="1">

**Recall**  
*How many correct objects are detected?*

</v-click>
<v-click at="6">

**Average Precision**  
*Area under the curve*

</v-click>

</div>

</div>

<v-click at="2">
<div v-click-hide="6" class="absolute w-[250px] bottom-2 right-[220px]">
    <TeachStatisticsExample v-animattr :start="4" />
</div>
</v-click>`,frontmatter:{title:"Teach Statistics",clicks:7},index:4,start:56,end:101},filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Hk,meta:{title:"Teach Conclusions",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md",slide:{raw:`---
title: Teach Conclusions
---

# Summary

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded py-1 mb-2" v-click>
How do neural networks detect objects?
</Block>

<v-clicks>

- Convolution filters find features
- Stack many convolutions to create a network
- Regress detection coordinates and confidences
- Train the model with many examples

</v-clicks>
</div>

<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we evaluate the detection performance?
</Block>

<v-clicks>

- Precision tells how many of the detections are correct
- Recall tells how many objects have been successfully detected
- Sweep the confidence to find an optimal precision-recall trade-off
- AP provides a single value to easily compare models

</v-clicks>
</div>
</div>

<style>
    ul {
        @apply text-2s ml-8;
    }
</style>`,title:"Teach Conclusions",content:`# Summary

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded py-1 mb-2" v-click>
How do neural networks detect objects?
</Block>

<v-clicks>

- Convolution filters find features
- Stack many convolutions to create a network
- Regress detection coordinates and confidences
- Train the model with many examples

</v-clicks>
</div>

<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we evaluate the detection performance?
</Block>

<v-clicks>

- Precision tells how many of the detections are correct
- Recall tells how many objects have been successfully detected
- Sweep the confidence to find an optimal precision-recall trade-off
- AP provides a single value to easily compare models

</v-clicks>
</div>
</div>

<style>
    ul {
        @apply text-2s ml-8;
    }
</style>`,frontmatter:{title:"Teach Conclusions",color:"var(--sns-desat-0)",icon:"teach",srcSequence:"pages/01-teach.md"},index:8,start:101,end:146,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",raw:`---
title: Teach Conclusions
---

# Summary

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded py-1 mb-2" v-click>
How do neural networks detect objects?
</Block>

<v-clicks>

- Convolution filters find features
- Stack many convolutions to create a network
- Regress detection coordinates and confidences
- Train the model with many examples

</v-clicks>
</div>

<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we evaluate the detection performance?
</Block>

<v-clicks>

- Precision tells how many of the detections are correct
- Recall tells how many objects have been successfully detected
- Sweep the confidence to find an optimal precision-recall trade-off
- AP provides a single value to easily compare models

</v-clicks>
</div>
</div>

<style>
    ul {
        @apply text-2s ml-8;
    }
</style>`,title:"Teach Conclusions",content:`# Summary

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded py-1 mb-2" v-click>
How do neural networks detect objects?
</Block>

<v-clicks>

- Convolution filters find features
- Stack many convolutions to create a network
- Regress detection coordinates and confidences
- Train the model with many examples

</v-clicks>
</div>

<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we evaluate the detection performance?
</Block>

<v-clicks>

- Precision tells how many of the detections are correct
- Recall tells how many objects have been successfully detected
- Sweep the confidence to find an optimal precision-recall trade-off
- AP provides a single value to easily compare models

</v-clicks>
</div>
</div>

<style>
    ul {
        @apply text-2s ml-8;
    }
</style>`,frontmatter:{title:"Teach Conclusions"},index:5,start:101,end:146},filepath:"/home/runner/work/phd-defense/phd-defense/pages/01-teach.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Gk,meta:{title:"Section Satellite",layout:"section",number:2,slide:{raw:`---
title: Section Satellite
layout: section
number: 2
---
`,title:"Section Satellite",content:"",frontmatter:{title:"Section Satellite",layout:"section",number:2},index:9,start:130,end:136,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:ix,meta:{title:"Satellite Project",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md",slide:{raw:null,title:"Satellite Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Provide a tool to automatically detect and classify  
objects in satellite imagery

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/sadl.png" class="w-[20%]" />
<img src="/logo/hexagon.png" class="w-[20%]" />
<img src="/logo/satcen.png" class="w-[10%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Satellite Project",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md"},index:10,start:0,end:34,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",raw:`---
title: Satellite Project
---

# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Provide a tool to automatically detect and classify  
objects in satellite imagery

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/sadl.png" class="w-[20%]" />
<img src="/logo/hexagon.png" class="w-[20%]" />
<img src="/logo/satcen.png" class="w-[10%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>
`,title:"Satellite Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Provide a tool to automatically detect and classify  
objects in satellite imagery

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/sadl.png" class="w-[20%]" />
<img src="/logo/hexagon.png" class="w-[20%]" />
<img src="/logo/satcen.png" class="w-[10%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Satellite Project"},index:0,start:0,end:34},inline:{raw:`---
src: pages/02-satellite.md
color: var(--sns-desat-1)
icon: satellite
---
`,content:"",frontmatter:{color:"var(--sns-desat-1)",icon:"satellite"},index:5,start:136,end:142},filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:sx,meta:{title:"Satellite Data",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md",slide:{raw:`---
title: Satellite Data
---

# Satellite Detection

::content::

|            | Vehicles    | Vessels     |
|-----------:|:-----------:|:-----------:|
| Region     | 641 km²     | 676 km²     |
| Resolution | 0.3m - 0.5m | 0.3m - 0.5m |
| Objects    | 4075        | 1096        |

<img class="examples" alt="satellite examples" src="/02-satellite/anno_examples.png" />
<img class="sizes" alt="object sizes" src="/02-satellite/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[45%_1fr] rows-[45%_55%]);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply w-auto text-3s;
        place-self: start center;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    .examples {
        grid-area: 1 / 2 / -1 / -1;
        height: 100%;
        place-self: center end;
    }

    .sizes {
        height: 100%;
        place-self: start center;
    }
</style>
`,title:"Satellite Data",content:`# Satellite Detection

::content::

|            | Vehicles    | Vessels     |
|-----------:|:-----------:|:-----------:|
| Region     | 641 km²     | 676 km²     |
| Resolution | 0.3m - 0.5m | 0.3m - 0.5m |
| Objects    | 4075        | 1096        |

<img class="examples" alt="satellite examples" src="/02-satellite/anno_examples.png" />
<img class="sizes" alt="object sizes" src="/02-satellite/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[45%_1fr] rows-[45%_55%]);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply w-auto text-3s;
        place-self: start center;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    .examples {
        grid-area: 1 / 2 / -1 / -1;
        height: 100%;
        place-self: center end;
    }

    .sizes {
        height: 100%;
        place-self: start center;
    }
</style>`,frontmatter:{title:"Satellite Data",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md"},index:11,start:34,end:76,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",raw:`---
title: Satellite Data
---

# Satellite Detection

::content::

|            | Vehicles    | Vessels     |
|-----------:|:-----------:|:-----------:|
| Region     | 641 km²     | 676 km²     |
| Resolution | 0.3m - 0.5m | 0.3m - 0.5m |
| Objects    | 4075        | 1096        |

<img class="examples" alt="satellite examples" src="/02-satellite/anno_examples.png" />
<img class="sizes" alt="object sizes" src="/02-satellite/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[45%_1fr] rows-[45%_55%]);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply w-auto text-3s;
        place-self: start center;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    .examples {
        grid-area: 1 / 2 / -1 / -1;
        height: 100%;
        place-self: center end;
    }

    .sizes {
        height: 100%;
        place-self: start center;
    }
</style>
`,title:"Satellite Data",content:`# Satellite Detection

::content::

|            | Vehicles    | Vessels     |
|-----------:|:-----------:|:-----------:|
| Region     | 641 km²     | 676 km²     |
| Resolution | 0.3m - 0.5m | 0.3m - 0.5m |
| Objects    | 4075        | 1096        |

<img class="examples" alt="satellite examples" src="/02-satellite/anno_examples.png" />
<img class="sizes" alt="object sizes" src="/02-satellite/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[45%_1fr] rows-[45%_55%]);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply w-auto text-3s;
        place-self: start center;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    .examples {
        grid-area: 1 / 2 / -1 / -1;
        height: 100%;
        place-self: center end;
    }

    .sizes {
        height: 100%;
        place-self: start center;
    }
</style>`,frontmatter:{title:"Satellite Data"},index:1,start:34,end:76},filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Kx,meta:{title:"Satellite Methodology",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md",slide:{raw:`---
title: Satellite Methodology
---

# Methodology

::content::

<Sat-Patches v-animattr />

<figure v-click>
    <img src="/02-satellite/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolt.png" />
    <figcaption>Yolt</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_14%_14%_14%_14%] gap-4);
        @apply mb-11 mt-6 mx-12;
    }

    svg {
        place-self: center start;
        height: 80%;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    figure.slidev-vclick-prior:nth-child(3) { transition-delay: 100ms; }
    figure.slidev-vclick-prior:nth-child(4) { transition-delay: 200ms; }
    figure.slidev-vclick-prior:nth-child(5) { transition-delay: 300ms; }
</style>
`,title:"Satellite Methodology",content:`# Methodology

::content::

<Sat-Patches v-animattr />

<figure v-click>
    <img src="/02-satellite/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolt.png" />
    <figcaption>Yolt</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_14%_14%_14%_14%] gap-4);
        @apply mb-11 mt-6 mx-12;
    }

    svg {
        place-self: center start;
        height: 80%;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    figure.slidev-vclick-prior:nth-child(3) { transition-delay: 100ms; }
    figure.slidev-vclick-prior:nth-child(4) { transition-delay: 200ms; }
    figure.slidev-vclick-prior:nth-child(5) { transition-delay: 300ms; }
</style>`,frontmatter:{title:"Satellite Methodology",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md"},index:12,start:76,end:133,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",raw:`---
title: Satellite Methodology
---

# Methodology

::content::

<Sat-Patches v-animattr />

<figure v-click>
    <img src="/02-satellite/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolt.png" />
    <figcaption>Yolt</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_14%_14%_14%_14%] gap-4);
        @apply mb-11 mt-6 mx-12;
    }

    svg {
        place-self: center start;
        height: 80%;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    figure.slidev-vclick-prior:nth-child(3) { transition-delay: 100ms; }
    figure.slidev-vclick-prior:nth-child(4) { transition-delay: 200ms; }
    figure.slidev-vclick-prior:nth-child(5) { transition-delay: 300ms; }
</style>
`,title:"Satellite Methodology",content:`# Methodology

::content::

<Sat-Patches v-animattr />

<figure v-click>
    <img src="/02-satellite/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolt.png" />
    <figcaption>Yolt</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_14%_14%_14%_14%] gap-4);
        @apply mb-11 mt-6 mx-12;
    }

    svg {
        place-self: center start;
        height: 80%;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    figure.slidev-vclick-prior:nth-child(3) { transition-delay: 100ms; }
    figure.slidev-vclick-prior:nth-child(4) { transition-delay: 200ms; }
    figure.slidev-vclick-prior:nth-child(5) { transition-delay: 300ms; }
</style>`,frontmatter:{title:"Satellite Methodology"},index:2,start:76,end:133},filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:sg,meta:{title:"Satellite Results",clicks:8,color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md",slide:{raw:`---
title: Satellite Results
clicks: 8
---

# Results

::content::

<Sat-PRFinetune class="finetune" height="100%" v-animattr v-click-hide="7"/>

<div class="ap imagenet flex-(~ col items-center justify-between) h-full" v-click="3" >
    <Sat-APVehicleImagenet class="vehicle" v-animattr :start="4" />
    <Sat-APVesselImagenet class="vessel" v-animattr :start="4" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<div class="ap dota flex-(~ col items-center justify-between) h-full" v-after="7" >
    <Sat-APVehicleDota class="vehicle" v-animattr :start="8" />
    <Sat-APVesselDota class="vessel" v-animattr :start="8" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-2 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    .finetune { grid-area: 1 / 1; }
    .imagenet { grid-area: 1 / 2; }
    .dota { grid-area: 1 / 1; }
    .ap * { width: 82%;}
</style>
`,title:"Satellite Results",content:`# Results

::content::

<Sat-PRFinetune class="finetune" height="100%" v-animattr v-click-hide="7"/>

<div class="ap imagenet flex-(~ col items-center justify-between) h-full" v-click="3" >
    <Sat-APVehicleImagenet class="vehicle" v-animattr :start="4" />
    <Sat-APVesselImagenet class="vessel" v-animattr :start="4" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<div class="ap dota flex-(~ col items-center justify-between) h-full" v-after="7" >
    <Sat-APVehicleDota class="vehicle" v-animattr :start="8" />
    <Sat-APVesselDota class="vessel" v-animattr :start="8" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-2 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    .finetune { grid-area: 1 / 1; }
    .imagenet { grid-area: 1 / 2; }
    .dota { grid-area: 1 / 1; }
    .ap * { width: 82%;}
</style>`,frontmatter:{title:"Satellite Results",clicks:8,color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md"},index:13,start:133,end:168,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",raw:`---
title: Satellite Results
clicks: 8
---

# Results

::content::

<Sat-PRFinetune class="finetune" height="100%" v-animattr v-click-hide="7"/>

<div class="ap imagenet flex-(~ col items-center justify-between) h-full" v-click="3" >
    <Sat-APVehicleImagenet class="vehicle" v-animattr :start="4" />
    <Sat-APVesselImagenet class="vessel" v-animattr :start="4" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<div class="ap dota flex-(~ col items-center justify-between) h-full" v-after="7" >
    <Sat-APVehicleDota class="vehicle" v-animattr :start="8" />
    <Sat-APVesselDota class="vessel" v-animattr :start="8" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-2 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    .finetune { grid-area: 1 / 1; }
    .imagenet { grid-area: 1 / 2; }
    .dota { grid-area: 1 / 1; }
    .ap * { width: 82%;}
</style>
`,title:"Satellite Results",content:`# Results

::content::

<Sat-PRFinetune class="finetune" height="100%" v-animattr v-click-hide="7"/>

<div class="ap imagenet flex-(~ col items-center justify-between) h-full" v-click="3" >
    <Sat-APVehicleImagenet class="vehicle" v-animattr :start="4" />
    <Sat-APVesselImagenet class="vessel" v-animattr :start="4" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<div class="ap dota flex-(~ col items-center justify-between) h-full" v-after="7" >
    <Sat-APVehicleDota class="vehicle" v-animattr :start="8" />
    <Sat-APVesselDota class="vessel" v-animattr :start="8" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-2 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    .finetune { grid-area: 1 / 1; }
    .imagenet { grid-area: 1 / 2; }
    .dota { grid-area: 1 / 1; }
    .ap * { width: 82%;}
</style>`,frontmatter:{title:"Satellite Results",clicks:8},index:3,start:133,end:168},filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:mg,meta:{title:"Satellite Contributions",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md",slide:{raw:`---
title: Satellite Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We developed a sliding window technique
- Pretrained weights from similar data improves the results
- D-Yolo works the best on this data

</v-clicks>
</div>
</div>

1. T. Ophoff, S. Puttemans, V. Kalogirou, J.-P. Robin, and T. Goedemé.
“Vehicle and Vessel Detection on Satellite Imagery: A Comparative Study on Single-Shot Detectors”.
In: _Remote Sensing_ 12.7 (2020).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Satellite Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We developed a sliding window technique
- Pretrained weights from similar data improves the results
- D-Yolo works the best on this data

</v-clicks>
</div>
</div>

1. T. Ophoff, S. Puttemans, V. Kalogirou, J.-P. Robin, and T. Goedemé.
“Vehicle and Vessel Detection on Satellite Imagery: A Comparative Study on Single-Shot Detectors”.
In: _Remote Sensing_ 12.7 (2020).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Satellite Contributions",color:"var(--sns-desat-1)",icon:"satellite",srcSequence:"pages/02-satellite.md"},index:14,start:168,end:210,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",raw:`---
title: Satellite Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We developed a sliding window technique
- Pretrained weights from similar data improves the results
- D-Yolo works the best on this data

</v-clicks>
</div>
</div>

1. T. Ophoff, S. Puttemans, V. Kalogirou, J.-P. Robin, and T. Goedemé.
“Vehicle and Vessel Detection on Satellite Imagery: A Comparative Study on Single-Shot Detectors”.
In: _Remote Sensing_ 12.7 (2020).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Satellite Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We developed a sliding window technique
- Pretrained weights from similar data improves the results
- D-Yolo works the best on this data

</v-clicks>
</div>
</div>

1. T. Ophoff, S. Puttemans, V. Kalogirou, J.-P. Robin, and T. Goedemé.
“Vehicle and Vessel Detection on Satellite Imagery: A Comparative Study on Single-Shot Detectors”.
In: _Remote Sensing_ 12.7 (2020).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Satellite Contributions"},index:4,start:168,end:210},filepath:"/home/runner/work/phd-defense/phd-defense/pages/02-satellite.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:bg,meta:{title:"Section Fusion",layout:"section",number:3,slide:{raw:`---
title: Section Fusion
layout: section
number: 3
---
`,title:"Section Fusion",content:"",frontmatter:{title:"Section Fusion",layout:"section",number:3},index:15,start:142,end:148,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Sg,meta:{title:"Fusion Project",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md",slide:{raw:null,title:"Fusion Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Improve the accuracy of object detection networks  
by combining color and depth images

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
<img src="/logo/stdl.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Fusion Project",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md"},index:16,start:0,end:33,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",raw:`---
title: Fusion Project
---

# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Improve the accuracy of object detection networks  
by combining color and depth images

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
<img src="/logo/stdl.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>
`,title:"Fusion Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Improve the accuracy of object detection networks  
by combining color and depth images

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
<img src="/logo/stdl.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Fusion Project"},index:0,start:0,end:33},inline:{raw:`---
src: pages/03-fusion.md
color: var(--sns-desat-2)
icon: fusion
---
`,content:"",frontmatter:{color:"var(--sns-desat-2)",icon:"fusion"},index:7,start:148,end:154},filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Og,meta:{title:"Fusion Data",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md",slide:{raw:`---
title: Fusion Data
---

# RGBD Fusion

::content::

<v-clicks>
<figure>
    <figcaption>EPFL Relabeled</figcaption>
    <img src="/03-fusion/epfl_rgb.png" />
    <img src="/03-fusion/epfl_d.png" />
</figure>
<figure>
    <figcaption>KITTI</figcaption>
    <img src="/03-fusion/kitti_rgb.png" />
    <img src="/03-fusion/kitti_d.png" />
</figure>
<figure>
    <figcaption>PCB screws</figcaption>
    <img src="/03-fusion/screws_rgb.png" />
    <img src="/03-fusion/screws_d.png" />
</figure>
</v-clicks>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-3 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    figure {
        @apply flex-(~ col items-center justify-around) h-full;
    }
    figure img {
        width: 60%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .slidev-vclick-hidden {
        opacity: 1 !important;

        img {
            opacity: 0 !important;
        }
    }

    .slidev-vclick-current img {
        transition: opacity 500ms ease-in-out;
    }
</style>
`,title:"Fusion Data",content:`# RGBD Fusion

::content::

<v-clicks>
<figure>
    <figcaption>EPFL Relabeled</figcaption>
    <img src="/03-fusion/epfl_rgb.png" />
    <img src="/03-fusion/epfl_d.png" />
</figure>
<figure>
    <figcaption>KITTI</figcaption>
    <img src="/03-fusion/kitti_rgb.png" />
    <img src="/03-fusion/kitti_d.png" />
</figure>
<figure>
    <figcaption>PCB screws</figcaption>
    <img src="/03-fusion/screws_rgb.png" />
    <img src="/03-fusion/screws_d.png" />
</figure>
</v-clicks>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-3 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    figure {
        @apply flex-(~ col items-center justify-around) h-full;
    }
    figure img {
        width: 60%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .slidev-vclick-hidden {
        opacity: 1 !important;

        img {
            opacity: 0 !important;
        }
    }

    .slidev-vclick-current img {
        transition: opacity 500ms ease-in-out;
    }
</style>`,frontmatter:{title:"Fusion Data",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md"},index:17,start:33,end:90,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",raw:`---
title: Fusion Data
---

# RGBD Fusion

::content::

<v-clicks>
<figure>
    <figcaption>EPFL Relabeled</figcaption>
    <img src="/03-fusion/epfl_rgb.png" />
    <img src="/03-fusion/epfl_d.png" />
</figure>
<figure>
    <figcaption>KITTI</figcaption>
    <img src="/03-fusion/kitti_rgb.png" />
    <img src="/03-fusion/kitti_d.png" />
</figure>
<figure>
    <figcaption>PCB screws</figcaption>
    <img src="/03-fusion/screws_rgb.png" />
    <img src="/03-fusion/screws_d.png" />
</figure>
</v-clicks>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-3 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    figure {
        @apply flex-(~ col items-center justify-around) h-full;
    }
    figure img {
        width: 60%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .slidev-vclick-hidden {
        opacity: 1 !important;

        img {
            opacity: 0 !important;
        }
    }

    .slidev-vclick-current img {
        transition: opacity 500ms ease-in-out;
    }
</style>
`,title:"Fusion Data",content:`# RGBD Fusion

::content::

<v-clicks>
<figure>
    <figcaption>EPFL Relabeled</figcaption>
    <img src="/03-fusion/epfl_rgb.png" />
    <img src="/03-fusion/epfl_d.png" />
</figure>
<figure>
    <figcaption>KITTI</figcaption>
    <img src="/03-fusion/kitti_rgb.png" />
    <img src="/03-fusion/kitti_d.png" />
</figure>
<figure>
    <figcaption>PCB screws</figcaption>
    <img src="/03-fusion/screws_rgb.png" />
    <img src="/03-fusion/screws_d.png" />
</figure>
</v-clicks>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-3 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    figure {
        @apply flex-(~ col items-center justify-around) h-full;
    }
    figure img {
        width: 60%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .slidev-vclick-hidden {
        opacity: 1 !important;

        img {
            opacity: 0 !important;
        }
    }

    .slidev-vclick-current img {
        transition: opacity 500ms ease-in-out;
    }
</style>`,frontmatter:{title:"Fusion Data"},index:1,start:33,end:90},filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Dg,meta:{title:"Fusion Methodology",clicks:3,color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md",slide:{raw:`---
title: Fusion Methodology
clicks: 3
---

# Methodology

::content::

<Fusion-Network class="fusion" v-animattr :start="2" />
<img class="fusion" src="/03-fusion/fuse_layer.svg?url" v-click="1" />
<figure v-click="3">
    <img src="/03-fusion/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-12 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    .fusion {
        width: 0;
        flex-grow: 1;
    }

    figure {
        @apply flex-(~ col items-center justify-center) text-2s h-full;
        img { height: 75%; }
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>
`,title:"Fusion Methodology",content:`# Methodology

::content::

<Fusion-Network class="fusion" v-animattr :start="2" />
<img class="fusion" src="/03-fusion/fuse_layer.svg?url" v-click="1" />
<figure v-click="3">
    <img src="/03-fusion/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-12 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    .fusion {
        width: 0;
        flex-grow: 1;
    }

    figure {
        @apply flex-(~ col items-center justify-center) text-2s h-full;
        img { height: 75%; }
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>`,frontmatter:{title:"Fusion Methodology",clicks:3,color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md"},index:18,start:90,end:128,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",raw:`---
title: Fusion Methodology
clicks: 3
---

# Methodology

::content::

<Fusion-Network class="fusion" v-animattr :start="2" />
<img class="fusion" src="/03-fusion/fuse_layer.svg?url" v-click="1" />
<figure v-click="3">
    <img src="/03-fusion/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-12 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    .fusion {
        width: 0;
        flex-grow: 1;
    }

    figure {
        @apply flex-(~ col items-center justify-center) text-2s h-full;
        img { height: 75%; }
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>
`,title:"Fusion Methodology",content:`# Methodology

::content::

<Fusion-Network class="fusion" v-animattr :start="2" />
<img class="fusion" src="/03-fusion/fuse_layer.svg?url" v-click="1" />
<figure v-click="3">
    <img src="/03-fusion/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-12 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    .fusion {
        width: 0;
        flex-grow: 1;
    }

    figure {
        @apply flex-(~ col items-center justify-center) text-2s h-full;
        img { height: 75%; }
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>`,frontmatter:{title:"Fusion Methodology",clicks:3},index:2,start:90,end:128},filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:mR,meta:{title:"Fusion Results",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md",slide:{raw:`---
title: Fusion Results
---

# Results

::content::

<Fusion-APepfl v-animattr :start="0" :length="1"/>
<Fusion-APkitti v-animattr :start="0" :length="1"/>
<Fusion-APscrews v-animattr :start="0" :length="1"/>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    img, svg {
        width: 0;
        flex-grow: 1;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(1);
        transition: transform 500ms ease-in-out 100ms;
    }
</style>
`,title:"Fusion Results",content:`# Results

::content::

<Fusion-APepfl v-animattr :start="0" :length="1"/>
<Fusion-APkitti v-animattr :start="0" :length="1"/>
<Fusion-APscrews v-animattr :start="0" :length="1"/>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    img, svg {
        width: 0;
        flex-grow: 1;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(1);
        transition: transform 500ms ease-in-out 100ms;
    }
</style>`,frontmatter:{title:"Fusion Results",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md"},index:19,start:128,end:161,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",raw:`---
title: Fusion Results
---

# Results

::content::

<Fusion-APepfl v-animattr :start="0" :length="1"/>
<Fusion-APkitti v-animattr :start="0" :length="1"/>
<Fusion-APscrews v-animattr :start="0" :length="1"/>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    img, svg {
        width: 0;
        flex-grow: 1;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(1);
        transition: transform 500ms ease-in-out 100ms;
    }
</style>
`,title:"Fusion Results",content:`# Results

::content::

<Fusion-APepfl v-animattr :start="0" :length="1"/>
<Fusion-APkitti v-animattr :start="0" :length="1"/>
<Fusion-APscrews v-animattr :start="0" :length="1"/>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    img, svg {
        width: 0;
        flex-grow: 1;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(1);
        transition: transform 500ms ease-in-out 100ms;
    }
</style>`,frontmatter:{title:"Fusion Results"},index:3,start:128,end:161},filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:xR,meta:{title:"Fusion Contributions",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md",slide:{raw:`---
title: Fusion Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- We developed a transparent fuse layer
- RGBD improved the results on 3 different datasets
- Midway to late fusion is optimal

</v-clicks>
</div>
</div>

2. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Real-Time Pedestrian Detectors with RGB+Depth Fusion”.
In: 15th _AVSS_ (2018).
3. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Exploring RGB+Depth Fusion for Real-Time Object Detection”.
In: _Sensors_ 19.4 (2019).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Fusion Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- We developed a transparent fuse layer
- RGBD improved the results on 3 different datasets
- Midway to late fusion is optimal

</v-clicks>
</div>
</div>

2. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Real-Time Pedestrian Detectors with RGB+Depth Fusion”.
In: 15th _AVSS_ (2018).
3. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Exploring RGB+Depth Fusion for Real-Time Object Detection”.
In: _Sensors_ 19.4 (2019).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Fusion Contributions",color:"var(--sns-desat-2)",icon:"fusion",srcSequence:"pages/03-fusion.md"},index:20,start:161,end:206,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",raw:`---
title: Fusion Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- We developed a transparent fuse layer
- RGBD improved the results on 3 different datasets
- Midway to late fusion is optimal

</v-clicks>
</div>
</div>

2. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Real-Time Pedestrian Detectors with RGB+Depth Fusion”.
In: 15th _AVSS_ (2018).
3. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Exploring RGB+Depth Fusion for Real-Time Object Detection”.
In: _Sensors_ 19.4 (2019).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Fusion Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- We developed a transparent fuse layer
- RGBD improved the results on 3 different datasets
- Midway to late fusion is optimal

</v-clicks>
</div>
</div>

2. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Real-Time Pedestrian Detectors with RGB+Depth Fusion”.
In: 15th _AVSS_ (2018).
3. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Exploring RGB+Depth Fusion for Real-Time Object Detection”.
In: _Sensors_ 19.4 (2019).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Fusion Contributions"},index:4,start:161,end:206},filepath:"/home/runner/work/phd-defense/phd-defense/pages/03-fusion.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:RR,meta:{title:"Section Plane",layout:"section",number:4,slide:{raw:`---
title: Section Plane
layout: section
number: 4
---
`,title:"Section Plane",content:"",frontmatter:{title:"Section Plane",layout:"section",number:4},index:21,start:154,end:160,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:XR,meta:{title:"Plane Project",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:null,title:"Plane Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Automatically detect objects in aerial imagery,  
whilst combining data from multiple sources and sensors

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/vstl.png" class="h-[40%]" />
<img src="/logo/vlaio.png" class="h-[40%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Plane Project",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:22,start:0,end:33,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane Project
---

# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Automatically detect objects in aerial imagery,  
whilst combining data from multiple sources and sensors

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/vstl.png" class="h-[40%]" />
<img src="/logo/vlaio.png" class="h-[40%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>
`,title:"Plane Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Automatically detect objects in aerial imagery,  
whilst combining data from multiple sources and sensors

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/vstl.png" class="h-[40%]" />
<img src="/logo/vlaio.png" class="h-[40%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Plane Project"},index:0,start:0,end:33},inline:{raw:`---
src: pages/04-plane.md
color: var(--sns-desat-3)
icon: plane
---
`,content:"",frontmatter:{color:"var(--sns-desat-3)",icon:"plane"},index:9,start:160,end:166},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:zR,meta:{color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`
# Plane Detection

::content::

<figure>
    <figcaption>Solar Panels</figcaption>
    <img src="/04-plane/anno-examples-solar.png" />
</figure>

<div class="text">

**RGB**  
3cm GSD

**DEPTH**  
25cm GSD

</div>

<figure>
    <figcaption>Swimming Pools</figcaption>
    <img src="/04-plane/anno-examples-pool.png" />
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-10 mt-10 mx-24;
    }

    figure {
        @apply flex-(~ col justify-between);
        width: 40%;
        height: 100%;
        text-align: center;
    }
    img {
        width: 100%;
    }
    figcaption {
        height: 3rem;
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .text {
        @apply flex-(~ col nowrap items-center justify-between) h-full;
        flex-grow: 1;
        text-align: center;
        padding-top: 7.5rem;
        padding-bottom: 3.5rem;
    }
</style>
`,title:"Plane Detection",level:1,content:`# Plane Detection

::content::

<figure>
    <figcaption>Solar Panels</figcaption>
    <img src="/04-plane/anno-examples-solar.png" />
</figure>

<div class="text">

**RGB**  
3cm GSD

**DEPTH**  
25cm GSD

</div>

<figure>
    <figcaption>Swimming Pools</figcaption>
    <img src="/04-plane/anno-examples-pool.png" />
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-10 mt-10 mx-24;
    }

    figure {
        @apply flex-(~ col justify-between);
        width: 40%;
        height: 100%;
        text-align: center;
    }
    img {
        width: 100%;
    }
    figcaption {
        height: 3rem;
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .text {
        @apply flex-(~ col nowrap items-center justify-between) h-full;
        flex-grow: 1;
        text-align: center;
        padding-top: 7.5rem;
        padding-bottom: 3.5rem;
    }
</style>`,frontmatter:{color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:23,start:34,end:90,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`
# Plane Detection

::content::

<figure>
    <figcaption>Solar Panels</figcaption>
    <img src="/04-plane/anno-examples-solar.png" />
</figure>

<div class="text">

**RGB**  
3cm GSD

**DEPTH**  
25cm GSD

</div>

<figure>
    <figcaption>Swimming Pools</figcaption>
    <img src="/04-plane/anno-examples-pool.png" />
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-10 mt-10 mx-24;
    }

    figure {
        @apply flex-(~ col justify-between);
        width: 40%;
        height: 100%;
        text-align: center;
    }
    img {
        width: 100%;
    }
    figcaption {
        height: 3rem;
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .text {
        @apply flex-(~ col nowrap items-center justify-between) h-full;
        flex-grow: 1;
        text-align: center;
        padding-top: 7.5rem;
        padding-bottom: 3.5rem;
    }
</style>
`,title:"Plane Detection",level:1,content:`# Plane Detection

::content::

<figure>
    <figcaption>Solar Panels</figcaption>
    <img src="/04-plane/anno-examples-solar.png" />
</figure>

<div class="text">

**RGB**  
3cm GSD

**DEPTH**  
25cm GSD

</div>

<figure>
    <figcaption>Swimming Pools</figcaption>
    <img src="/04-plane/anno-examples-pool.png" />
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-10 mt-10 mx-24;
    }

    figure {
        @apply flex-(~ col justify-between);
        width: 40%;
        height: 100%;
        text-align: center;
    }
    img {
        width: 100%;
    }
    figcaption {
        height: 3rem;
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .text {
        @apply flex-(~ col nowrap items-center justify-between) h-full;
        flex-grow: 1;
        text-align: center;
        padding-top: 7.5rem;
        padding-bottom: 3.5rem;
    }
</style>`,frontmatter:{},index:1,start:34,end:90},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:ZR,meta:{title:"Plane Dataset",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`---
title: Plane Dataset
---

# Dataset

::content::

|         | Solar Panels | Swimming Pools |
|--------:|:------------:|:--------------:|
| Region  | 10.1 km²     | 17.3 km²       |
| Objects | 32970        | 3000           |

<img src="/04-plane/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply flex-(~ justify-between items-center);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply text-3s;
        width: 45%;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    img { width: 50%; }
</style>
`,title:"Plane Dataset",content:`# Dataset

::content::

|         | Solar Panels | Swimming Pools |
|--------:|:------------:|:--------------:|
| Region  | 10.1 km²     | 17.3 km²       |
| Objects | 32970        | 3000           |

<img src="/04-plane/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply flex-(~ justify-between items-center);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply text-3s;
        width: 45%;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    img { width: 50%; }
</style>`,frontmatter:{title:"Plane Dataset",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:24,start:90,end:121,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane Dataset
---

# Dataset

::content::

|         | Solar Panels | Swimming Pools |
|--------:|:------------:|:--------------:|
| Region  | 10.1 km²     | 17.3 km²       |
| Objects | 32970        | 3000           |

<img src="/04-plane/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply flex-(~ justify-between items-center);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply text-3s;
        width: 45%;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    img { width: 50%; }
</style>
`,title:"Plane Dataset",content:`# Dataset

::content::

|         | Solar Panels | Swimming Pools |
|--------:|:------------:|:--------------:|
| Region  | 10.1 km²     | 17.3 km²       |
| Objects | 32970        | 3000           |

<img src="/04-plane/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply flex-(~ justify-between items-center);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply text-3s;
        width: 45%;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    img { width: 50%; }
</style>`,frontmatter:{title:"Plane Dataset"},index:2,start:90,end:121},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:aT,meta:{title:"Plane Baseline",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`---
title: Plane Baseline
---
# Baseline

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>

<v-click>

|          | Solar Panels | Swimming Pools |
|---------:|:------------:|:--------------:|
| DYOLO    | 59.67%       | **25.08%**     |
| YOLO III | **62.96%**   | 23.73%         |

</v-click>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[15%_15%_1fr] gap-6);
        @apply mb-11 mt-6 mx-20;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
    table {
        @apply place-self-center w-[80%] text-1s;
    }
    tr th:first-child, tr td:first-child { @apply border-r; }
</style>
`,title:"Plane Baseline",content:`# Baseline

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>

<v-click>

|          | Solar Panels | Swimming Pools |
|---------:|:------------:|:--------------:|
| DYOLO    | 59.67%       | **25.08%**     |
| YOLO III | **62.96%**   | 23.73%         |

</v-click>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[15%_15%_1fr] gap-6);
        @apply mb-11 mt-6 mx-20;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
    table {
        @apply place-self-center w-[80%] text-1s;
    }
    tr th:first-child, tr td:first-child { @apply border-r; }
</style>`,frontmatter:{title:"Plane Baseline",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:25,start:121,end:171,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane Baseline
---
# Baseline

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>

<v-click>

|          | Solar Panels | Swimming Pools |
|---------:|:------------:|:--------------:|
| DYOLO    | 59.67%       | **25.08%**     |
| YOLO III | **62.96%**   | 23.73%         |

</v-click>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[15%_15%_1fr] gap-6);
        @apply mb-11 mt-6 mx-20;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
    table {
        @apply place-self-center w-[80%] text-1s;
    }
    tr th:first-child, tr td:first-child { @apply border-r; }
</style>
`,title:"Plane Baseline",content:`# Baseline

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>

<v-click>

|          | Solar Panels | Swimming Pools |
|---------:|:------------:|:--------------:|
| DYOLO    | 59.67%       | **25.08%**     |
| YOLO III | **62.96%**   | 23.73%         |

</v-click>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[15%_15%_1fr] gap-6);
        @apply mb-11 mt-6 mx-20;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
    table {
        @apply place-self-center w-[80%] text-1s;
    }
    tr th:first-child, tr td:first-child { @apply border-r; }
</style>`,frontmatter:{title:"Plane Baseline"},index:3,start:121,end:171},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:uT,meta:{title:"Plane PostProcessing",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`---
title: Plane PostProcessing
---
# Post Processing

::content::

<div class="grid-(~ cols-[1fr_1fr_1fr] rows-[1fr_1fr] gap-4) place-items-center w-full h-full grid-hidden">

<img v-click src="/04-plane/nms-example-local.png" />
<img v-click src="/04-plane/nms-neighbour-diagram.svg?url" />
<img v-click src="/04-plane/nms-example-neighbour.png" />

<img class="ioa-example" v-click src="/04-plane/ioa-example.png" />
<img class="ioa-diagram" v-click src="/04-plane/ioa-diagram.svg?url" />

</div>

<style>
    :deep(.slot-content) {
        @apply mb-11 mt-6 mx-20;
    }
    img {
        height: 100%;
    }
    .ioa-example {
        height: 90.44%;
        place-self: end center;
    }
    .ioa-diagram {
        width: 84%;
        height: auto;
        grid-column-end: span 2;
        place-self: end center;
    }
</style>
`,title:"Plane PostProcessing",content:`# Post Processing

::content::

<div class="grid-(~ cols-[1fr_1fr_1fr] rows-[1fr_1fr] gap-4) place-items-center w-full h-full grid-hidden">

<img v-click src="/04-plane/nms-example-local.png" />
<img v-click src="/04-plane/nms-neighbour-diagram.svg?url" />
<img v-click src="/04-plane/nms-example-neighbour.png" />

<img class="ioa-example" v-click src="/04-plane/ioa-example.png" />
<img class="ioa-diagram" v-click src="/04-plane/ioa-diagram.svg?url" />

</div>

<style>
    :deep(.slot-content) {
        @apply mb-11 mt-6 mx-20;
    }
    img {
        height: 100%;
    }
    .ioa-example {
        height: 90.44%;
        place-self: end center;
    }
    .ioa-diagram {
        width: 84%;
        height: auto;
        grid-column-end: span 2;
        place-self: end center;
    }
</style>`,frontmatter:{title:"Plane PostProcessing",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:26,start:171,end:208,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane PostProcessing
---
# Post Processing

::content::

<div class="grid-(~ cols-[1fr_1fr_1fr] rows-[1fr_1fr] gap-4) place-items-center w-full h-full grid-hidden">

<img v-click src="/04-plane/nms-example-local.png" />
<img v-click src="/04-plane/nms-neighbour-diagram.svg?url" />
<img v-click src="/04-plane/nms-example-neighbour.png" />

<img class="ioa-example" v-click src="/04-plane/ioa-example.png" />
<img class="ioa-diagram" v-click src="/04-plane/ioa-diagram.svg?url" />

</div>

<style>
    :deep(.slot-content) {
        @apply mb-11 mt-6 mx-20;
    }
    img {
        height: 100%;
    }
    .ioa-example {
        height: 90.44%;
        place-self: end center;
    }
    .ioa-diagram {
        width: 84%;
        height: auto;
        grid-column-end: span 2;
        place-self: end center;
    }
</style>
`,title:"Plane PostProcessing",content:`# Post Processing

::content::

<div class="grid-(~ cols-[1fr_1fr_1fr] rows-[1fr_1fr] gap-4) place-items-center w-full h-full grid-hidden">

<img v-click src="/04-plane/nms-example-local.png" />
<img v-click src="/04-plane/nms-neighbour-diagram.svg?url" />
<img v-click src="/04-plane/nms-example-neighbour.png" />

<img class="ioa-example" v-click src="/04-plane/ioa-example.png" />
<img class="ioa-diagram" v-click src="/04-plane/ioa-diagram.svg?url" />

</div>

<style>
    :deep(.slot-content) {
        @apply mb-11 mt-6 mx-20;
    }
    img {
        height: 100%;
    }
    .ioa-example {
        height: 90.44%;
        place-self: end center;
    }
    .ioa-diagram {
        width: 84%;
        height: auto;
        grid-column-end: span 2;
        place-self: end center;
    }
</style>`,frontmatter:{title:"Plane PostProcessing"},index:4,start:171,end:208},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:UT,meta:{title:"Plane Models",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`---
title: Plane Models
---
# Models

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo.svg?url" />
    <figcaption>ResnetYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo-fusion.svg?url" />
    <figcaption>ResnetYolo Fusion</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_1fr_1fr_2fr] gap-6);
        @apply w-[71%] mb-11 mt-6 mx-auto;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>
`,title:"Plane Models",content:`# Models

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo.svg?url" />
    <figcaption>ResnetYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo-fusion.svg?url" />
    <figcaption>ResnetYolo Fusion</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_1fr_1fr_2fr] gap-6);
        @apply w-[71%] mb-11 mt-6 mx-auto;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>`,frontmatter:{title:"Plane Models",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:27,start:208,end:253,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane Models
---
# Models

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo.svg?url" />
    <figcaption>ResnetYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo-fusion.svg?url" />
    <figcaption>ResnetYolo Fusion</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_1fr_1fr_2fr] gap-6);
        @apply w-[71%] mb-11 mt-6 mx-auto;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>
`,title:"Plane Models",content:`# Models

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo.svg?url" />
    <figcaption>ResnetYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo-fusion.svg?url" />
    <figcaption>ResnetYolo Fusion</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_1fr_1fr_2fr] gap-6);
        @apply w-[71%] mb-11 mt-6 mx-auto;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>`,frontmatter:{title:"Plane Models"},index:5,start:208,end:253},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:HT,meta:{title:"Plane Results",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`---
title: Plane Results
---
# Results

::content::

<Plane-APsolar height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-solar.svg?url" />

<Plane-APpool height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-pool.svg?url" />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-2 cols-[31%_69%]) place-items-center;
        @apply mb-11 mt-6 px-[5%];
        row-gap: 1rem;
    }
    
    img {
        height: 100%;
    }

    svg {
        place-self: center start;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(1);
        transition: transform 250ms ease-in-out 100ms;
    }
</style>

`,title:"Plane Results",content:`# Results

::content::

<Plane-APsolar height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-solar.svg?url" />

<Plane-APpool height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-pool.svg?url" />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-2 cols-[31%_69%]) place-items-center;
        @apply mb-11 mt-6 px-[5%];
        row-gap: 1rem;
    }
    
    img {
        height: 100%;
    }

    svg {
        place-self: center start;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(1);
        transition: transform 250ms ease-in-out 100ms;
    }
</style>`,frontmatter:{title:"Plane Results",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:28,start:253,end:292,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane Results
---
# Results

::content::

<Plane-APsolar height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-solar.svg?url" />

<Plane-APpool height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-pool.svg?url" />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-2 cols-[31%_69%]) place-items-center;
        @apply mb-11 mt-6 px-[5%];
        row-gap: 1rem;
    }
    
    img {
        height: 100%;
    }

    svg {
        place-self: center start;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(1);
        transition: transform 250ms ease-in-out 100ms;
    }
</style>

`,title:"Plane Results",content:`# Results

::content::

<Plane-APsolar height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-solar.svg?url" />

<Plane-APpool height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-pool.svg?url" />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-2 cols-[31%_69%]) place-items-center;
        @apply mb-11 mt-6 px-[5%];
        row-gap: 1rem;
    }
    
    img {
        height: 100%;
    }

    svg {
        place-self: center start;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(1);
        transition: transform 250ms ease-in-out 100ms;
    }
</style>`,frontmatter:{title:"Plane Results"},index:6,start:253,end:292},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:_T,meta:{title:"Plane Contributions",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md",slide:{raw:`---
title: Plane Contributions
---
# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We further increased our results with scene-specific post-processing
- Deeper networks work well with enough data
- ResnetYolo with selectable heads is a prime candidate for remote sensing detection

</v-clicks>
</div>
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- Our RGBD fusion technique transfers perfectly to remote sensing
- The technique works with deeper networks as well

</v-clicks>
</div>
</div>

4. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Object Detection in VHR Aerial Orthomosaics”.
In: _ECCV Workshops_ (2022).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Plane Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We further increased our results with scene-specific post-processing
- Deeper networks work well with enough data
- ResnetYolo with selectable heads is a prime candidate for remote sensing detection

</v-clicks>
</div>
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- Our RGBD fusion technique transfers perfectly to remote sensing
- The technique works with deeper networks as well

</v-clicks>
</div>
</div>

4. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Object Detection in VHR Aerial Orthomosaics”.
In: _ECCV Workshops_ (2022).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Plane Contributions",color:"var(--sns-desat-3)",icon:"plane",srcSequence:"pages/04-plane.md"},index:29,start:292,end:345,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",raw:`---
title: Plane Contributions
---
# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We further increased our results with scene-specific post-processing
- Deeper networks work well with enough data
- ResnetYolo with selectable heads is a prime candidate for remote sensing detection

</v-clicks>
</div>
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- Our RGBD fusion technique transfers perfectly to remote sensing
- The technique works with deeper networks as well

</v-clicks>
</div>
</div>

4. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Object Detection in VHR Aerial Orthomosaics”.
In: _ECCV Workshops_ (2022).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Plane Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We further increased our results with scene-specific post-processing
- Deeper networks work well with enough data
- ResnetYolo with selectable heads is a prime candidate for remote sensing detection

</v-clicks>
</div>
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- Our RGBD fusion technique transfers perfectly to remote sensing
- The technique works with deeper networks as well

</v-clicks>
</div>
</div>

4. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Object Detection in VHR Aerial Orthomosaics”.
In: _ECCV Workshops_ (2022).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Plane Contributions"},index:7,start:292,end:345},filepath:"/home/runner/work/phd-defense/phd-defense/pages/04-plane.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:tS,meta:{title:"Section Speed",layout:"section",number:5,slide:{raw:`---
title: Section Speed
layout: section
number: 5
---
`,title:"Section Speed",content:"",frontmatter:{title:"Section Speed",layout:"section",number:5},index:30,start:166,end:172,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:lS,meta:{title:"Speed Project",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:null,title:"Speed Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Design faster and smaller object detection networks  
without deteriorating the accuracy

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Speed Project",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:31,start:0,end:32,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Project
---

# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Design faster and smaller object detection networks  
without deteriorating the accuracy

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>
`,title:"Speed Project",content:`# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Design faster and smaller object detection networks  
without deteriorating the accuracy

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>`,frontmatter:{title:"Speed Project"},index:0,start:0,end:32},inline:{raw:`---
src: pages/05-speed.md
color: var(--sns-desat-4)
icon: speed
---
`,content:"",frontmatter:{color:"var(--sns-desat-4)",icon:"speed"},index:11,start:172,end:178},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:VS,meta:{color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`
# Speed Optimizations

::content::

<div class="grid-(~ rows-[1fr_1fr] cols-[40fr_50fr] gap-[5%_10%]) w-full h-full place-items-center grid-hidden">

<img class="jetson" src="/05-speed/jetson.png" />

<v-click>
<figure>
    <figcaption>Pascal VOC</figcaption>
    <img src="/05-speed/voc-1.jpg" />
    <img src="/05-speed/voc-2.jpg" />
</figure>

<figure>
    <figcaption>IR Surveillance</figcaption>
    <img src="/05-speed/flir-1.jpg" />
    <img src="/05-speed/flir-2.jpg" />
</figure>
</v-click>

</div>

<style>
    :deep(.slot-content) {
        @apply mb-12 mt-6 px-30;
    }

    .jetson {
        grid-area: 1 / 1 / -1 / 2;
        height: 90%;
        place-self: end center;
    }

    figure {
        @apply w-full flex-(~ row wrap justify-between items-center);

        figcaption {
            text-transform: lowercase;
            font-variant: small-caps;
            font-size: 1.25em;
            width: 100%;
            text-align: center;
        }

        img {
            width: 47%;
        }
    }
</style>
`,title:"Speed Optimizations",level:1,content:`# Speed Optimizations

::content::

<div class="grid-(~ rows-[1fr_1fr] cols-[40fr_50fr] gap-[5%_10%]) w-full h-full place-items-center grid-hidden">

<img class="jetson" src="/05-speed/jetson.png" />

<v-click>
<figure>
    <figcaption>Pascal VOC</figcaption>
    <img src="/05-speed/voc-1.jpg" />
    <img src="/05-speed/voc-2.jpg" />
</figure>

<figure>
    <figcaption>IR Surveillance</figcaption>
    <img src="/05-speed/flir-1.jpg" />
    <img src="/05-speed/flir-2.jpg" />
</figure>
</v-click>

</div>

<style>
    :deep(.slot-content) {
        @apply mb-12 mt-6 px-30;
    }

    .jetson {
        grid-area: 1 / 1 / -1 / 2;
        height: 90%;
        place-self: end center;
    }

    figure {
        @apply w-full flex-(~ row wrap justify-between items-center);

        figcaption {
            text-transform: lowercase;
            font-variant: small-caps;
            font-size: 1.25em;
            width: 100%;
            text-align: center;
        }

        img {
            width: 47%;
        }
    }
</style>`,frontmatter:{color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:32,start:33,end:86,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`
# Speed Optimizations

::content::

<div class="grid-(~ rows-[1fr_1fr] cols-[40fr_50fr] gap-[5%_10%]) w-full h-full place-items-center grid-hidden">

<img class="jetson" src="/05-speed/jetson.png" />

<v-click>
<figure>
    <figcaption>Pascal VOC</figcaption>
    <img src="/05-speed/voc-1.jpg" />
    <img src="/05-speed/voc-2.jpg" />
</figure>

<figure>
    <figcaption>IR Surveillance</figcaption>
    <img src="/05-speed/flir-1.jpg" />
    <img src="/05-speed/flir-2.jpg" />
</figure>
</v-click>

</div>

<style>
    :deep(.slot-content) {
        @apply mb-12 mt-6 px-30;
    }

    .jetson {
        grid-area: 1 / 1 / -1 / 2;
        height: 90%;
        place-self: end center;
    }

    figure {
        @apply w-full flex-(~ row wrap justify-between items-center);

        figcaption {
            text-transform: lowercase;
            font-variant: small-caps;
            font-size: 1.25em;
            width: 100%;
            text-align: center;
        }

        img {
            width: 47%;
        }
    }
</style>
`,title:"Speed Optimizations",level:1,content:`# Speed Optimizations

::content::

<div class="grid-(~ rows-[1fr_1fr] cols-[40fr_50fr] gap-[5%_10%]) w-full h-full place-items-center grid-hidden">

<img class="jetson" src="/05-speed/jetson.png" />

<v-click>
<figure>
    <figcaption>Pascal VOC</figcaption>
    <img src="/05-speed/voc-1.jpg" />
    <img src="/05-speed/voc-2.jpg" />
</figure>

<figure>
    <figcaption>IR Surveillance</figcaption>
    <img src="/05-speed/flir-1.jpg" />
    <img src="/05-speed/flir-2.jpg" />
</figure>
</v-click>

</div>

<style>
    :deep(.slot-content) {
        @apply mb-12 mt-6 px-30;
    }

    .jetson {
        grid-area: 1 / 1 / -1 / 2;
        height: 90%;
        place-self: end center;
    }

    figure {
        @apply w-full flex-(~ row wrap justify-between items-center);

        figcaption {
            text-transform: lowercase;
            font-variant: small-caps;
            font-size: 1.25em;
            width: 100%;
            text-align: center;
        }

        img {
            width: 47%;
        }
    }
</style>`,frontmatter:{},index:1,start:33,end:86},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:ES,meta:{title:"Speed Convolutions",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`---
title: Speed Convolutions
---

# Mobile Convolutions

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-MobileConv v-animattr />

</div>
`,title:"Speed Convolutions",content:`# Mobile Convolutions

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-MobileConv v-animattr />

</div>`,frontmatter:{title:"Speed Convolutions",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:33,start:86,end:100,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Convolutions
---

# Mobile Convolutions

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-MobileConv v-animattr />

</div>
`,title:"Speed Convolutions",content:`# Mobile Convolutions

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-MobileConv v-animattr />

</div>`,frontmatter:{title:"Speed Convolutions"},index:2,start:86,end:100},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:AS,meta:{title:"Speed Pruning",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`---
title: Speed Pruning
---

# Pruning

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Pruning v-animattr />

</div>
`,title:"Speed Pruning",content:`# Pruning

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Pruning v-animattr />

</div>`,frontmatter:{title:"Speed Pruning",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:34,start:100,end:114,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Pruning
---

# Pruning

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Pruning v-animattr />

</div>
`,title:"Speed Pruning",content:`# Pruning

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Pruning v-animattr />

</div>`,frontmatter:{title:"Speed Pruning"},index:3,start:100,end:114},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:DS,meta:{title:"Speed Quantisation",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`---
title: Speed Quantisation
---

# Quantisation

::content::

<div class="flex-(~ col justify-center items-center gap-10) h-full w-[85%] mx-auto pb-8">

<Speed-QuantNumber width="50%" v-animattr />

<Speed-QuantBit v-click />

</div>
`,title:"Speed Quantisation",content:`# Quantisation

::content::

<div class="flex-(~ col justify-center items-center gap-10) h-full w-[85%] mx-auto pb-8">

<Speed-QuantNumber width="50%" v-animattr />

<Speed-QuantBit v-click />

</div>`,frontmatter:{title:"Speed Quantisation",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:35,start:114,end:130,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Quantisation
---

# Quantisation

::content::

<div class="flex-(~ col justify-center items-center gap-10) h-full w-[85%] mx-auto pb-8">

<Speed-QuantNumber width="50%" v-animattr />

<Speed-QuantBit v-click />

</div>
`,title:"Speed Quantisation",content:`# Quantisation

::content::

<div class="flex-(~ col justify-center items-center gap-10) h-full w-[85%] mx-auto pb-8">

<Speed-QuantNumber width="50%" v-animattr />

<Speed-QuantBit v-click />

</div>`,frontmatter:{title:"Speed Quantisation"},index:4,start:114,end:130},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:nI,meta:{title:"Speed Upsample",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`---
title: Speed Upsample
---

# Upsample

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Upsample v-animattr />

</div>
`,title:"Speed Upsample",content:`# Upsample

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Upsample v-animattr />

</div>`,frontmatter:{title:"Speed Upsample",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:36,start:130,end:144,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Upsample
---

# Upsample

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Upsample v-animattr />

</div>
`,title:"Speed Upsample",content:`# Upsample

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Upsample v-animattr />

</div>`,frontmatter:{title:"Speed Upsample"},index:5,start:130,end:144},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:yI,meta:{title:"Speed Results",clicks:4,color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`---
title: Speed Results
clicks: 4
---

# Results

::content::

<Speed-APTimeVOC v-animattr />
<Speed-APTimeLWIR v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>
`,title:"Speed Results",content:`# Results

::content::

<Speed-APTimeVOC v-animattr />
<Speed-APTimeLWIR v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>`,frontmatter:{title:"Speed Results",clicks:4,color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:37,start:144,end:168,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Results
clicks: 4
---

# Results

::content::

<Speed-APTimeVOC v-animattr />
<Speed-APTimeLWIR v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>
`,title:"Speed Results",content:`# Results

::content::

<Speed-APTimeVOC v-animattr />
<Speed-APTimeLWIR v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>`,frontmatter:{title:"Speed Results",clicks:4},index:6,start:144,end:168},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:SI,meta:{title:"Speed Contributions",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md",slide:{raw:`---
title: Speed Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How much can we speed up our models whilst maintaining the accuracy?
</Block>

<v-clicks>

- Blindly applying all optimizations does not yield the best results
- More constrained problems allow for more reduction in complexity
- On Pascal VOC, we managed to make our model 4x faster
- On LWIR, we made our model 15x faster

</v-clicks>
</div>
</div>

5. T. Ophoff, C. Gullentops, K. Van Beeck, and T. Goedemé.
“Investigating the Potential of Network Optimization for a Constrained Object Detection Problem”.
In: _Journal of Imaging_ 7.4 (2021).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Speed Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How much can we speed up our models whilst maintaining the accuracy?
</Block>

<v-clicks>

- Blindly applying all optimizations does not yield the best results
- More constrained problems allow for more reduction in complexity
- On Pascal VOC, we managed to make our model 4x faster
- On LWIR, we made our model 15x faster

</v-clicks>
</div>
</div>

5. T. Ophoff, C. Gullentops, K. Van Beeck, and T. Goedemé.
“Investigating the Potential of Network Optimization for a Constrained Object Detection Problem”.
In: _Journal of Imaging_ 7.4 (2021).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Speed Contributions",color:"var(--sns-desat-4)",icon:"speed",srcSequence:"pages/05-speed.md"},index:38,start:168,end:211,source:{filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",raw:`---
title: Speed Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How much can we speed up our models whilst maintaining the accuracy?
</Block>

<v-clicks>

- Blindly applying all optimizations does not yield the best results
- More constrained problems allow for more reduction in complexity
- On Pascal VOC, we managed to make our model 4x faster
- On LWIR, we made our model 15x faster

</v-clicks>
</div>
</div>

5. T. Ophoff, C. Gullentops, K. Van Beeck, and T. Goedemé.
“Investigating the Potential of Network Optimization for a Constrained Object Detection Problem”.
In: _Journal of Imaging_ 7.4 (2021).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,title:"Speed Contributions",content:`# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How much can we speed up our models whilst maintaining the accuracy?
</Block>

<v-clicks>

- Blindly applying all optimizations does not yield the best results
- More constrained problems allow for more reduction in complexity
- On Pascal VOC, we managed to make our model 4x faster
- On LWIR, we made our model 15x faster

</v-clicks>
</div>
</div>

5. T. Ophoff, C. Gullentops, K. Van Beeck, and T. Goedemé.
“Investigating the Potential of Network Optimization for a Constrained Object Detection Problem”.
In: _Journal of Imaging_ 7.4 (2021).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>`,frontmatter:{title:"Speed Contributions"},index:7,start:168,end:211},filepath:"/home/runner/work/phd-defense/phd-defense/pages/05-speed.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:EI,meta:{title:"Section Conclusion",layout:"section",slide:{raw:`---
title: Section Conclusion
layout: section
---
`,title:"Section Conclusion",content:"",frontmatter:{title:"Section Conclusion",layout:"section"},index:39,start:178,end:183,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:eE,meta:{layout:"none",clicks:7,slide:{raw:`---
layout: none
clicks: 7
---

<div class="!w-full !h-full bg-black grid-(~ rows-[1fr_1fr_1fr] gap-4) grid-hidden text-white">

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="1"
>

<div v-click-hide="2">

How can we adapt detection algorithms  
to work on remote sensing data?

</div>

<div class="answer" v-click="2">
<span>sliding<br/>window</span>
<span>scene-specific<br/>processing</span>
<span>ResnetYolo</span>
</div>

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="3"
>

<div v-click-hide="4">

How to combine color and depth data  
to improve detection models?

</div>

<div class="answer" v-click="4">
<span>transparent<br/>fuse layer</span>
<span>mid-late<br/>fusion</span>
<span>different<br/>use cases</span>
<span>remote<br/>sensing</span>
</div>

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="5"
>

<div v-click-hide="6">

How much can we speed up our models  
whilst maintaining the accuracy?

</div>

<div class="answer" v-click="6">
<span>careful<br/>selection</span>
<span>constrainedness</span>
<span>academic<br/>4x</span>
<span>industrial<br/>15x</span>
</div>

</Block>

<div v-click="7" style="display:none" />

</div>

<style>
  .block p {
    @apply text-(center 20l);
    line-height: 1.2;
  }

  .block.slidev-vclick-target {
    transition: translate 200ms ease-in;
  }
  .block.slidev-vclick-hidden {
    translate: 100% 0;
  }
  .block::after {
    transition: background-color 200ms;
  }
  .block:has(+ .slidev-vclick-prior), .block:has(+ .slidev-vclick-current) {
    --color: black !important;
    color: rgb(200,200,200);
  }

  .answer {
    @apply absolute !p-5 flex-(~ justify-around items-center);
    inset: 0;

    span {
        @apply text-16l text-center;
        display: block;
        text-transform: lowercase;
        font-variant: small-caps;
    }
  }
</style>
`,content:`<div class="!w-full !h-full bg-black grid-(~ rows-[1fr_1fr_1fr] gap-4) grid-hidden text-white">

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="1"
>

<div v-click-hide="2">

How can we adapt detection algorithms  
to work on remote sensing data?

</div>

<div class="answer" v-click="2">
<span>sliding<br/>window</span>
<span>scene-specific<br/>processing</span>
<span>ResnetYolo</span>
</div>

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="3"
>

<div v-click-hide="4">

How to combine color and depth data  
to improve detection models?

</div>

<div class="answer" v-click="4">
<span>transparent<br/>fuse layer</span>
<span>mid-late<br/>fusion</span>
<span>different<br/>use cases</span>
<span>remote<br/>sensing</span>
</div>

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="5"
>

<div v-click-hide="6">

How much can we speed up our models  
whilst maintaining the accuracy?

</div>

<div class="answer" v-click="6">
<span>careful<br/>selection</span>
<span>constrainedness</span>
<span>academic<br/>4x</span>
<span>industrial<br/>15x</span>
</div>

</Block>

<div v-click="7" style="display:none" />

</div>

<style>
  .block p {
    @apply text-(center 20l);
    line-height: 1.2;
  }

  .block.slidev-vclick-target {
    transition: translate 200ms ease-in;
  }
  .block.slidev-vclick-hidden {
    translate: 100% 0;
  }
  .block::after {
    transition: background-color 200ms;
  }
  .block:has(+ .slidev-vclick-prior), .block:has(+ .slidev-vclick-current) {
    --color: black !important;
    color: rgb(200,200,200);
  }

  .answer {
    @apply absolute !p-5 flex-(~ justify-around items-center);
    inset: 0;

    span {
        @apply text-16l text-center;
        display: block;
        text-transform: lowercase;
        font-variant: small-caps;
    }
  }
</style>`,frontmatter:{layout:"none",clicks:7},index:40,start:183,end:298,noteHTML:"",filepath:"/home/runner/work/phd-defense/phd-defense/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}}],iE=[],_t=aE,Va=[{name:"play",path:"/",component:_q,children:[..._t,...iE]},{name:"print",path:"/print",component:SV},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(e){if(!ba.remote||ba.remote===e.query.password)return!0;if(ba.remote&&e.query.password===void 0){const a=prompt("Enter password");if(ba.remote===a)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}};Va.push({path:"/presenter/print",component:()=>Me(()=>import("./PresenterPrint-1c2aa70f.js"),["assets/PresenterPrint-1c2aa70f.js","assets/NoteDisplay-ad15ced6.js"])}),Va.push({name:"notes",path:"/notes",component:()=>Me(()=>import("./NotesView-8c65bef6.js"),["assets/NotesView-8c65bef6.js","assets/NoteDisplay-ad15ced6.js"]),beforeEnter:t}),Va.push({name:"presenter",path:"/presenter/:no",component:()=>Me(()=>import("./Presenter-83e15210.js"),["assets/Presenter-83e15210.js","assets/NoteDisplay-ad15ced6.js","assets/DrawingControls-70a19ade.js","assets/Presenter-f6a5d8ad.css"]),beforeEnter:t}),Va.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const g1=Lf({history:Op("/phd-defense/"),routes:Va});function rE(t,e,{mode:a="replace"}={}){return N({get(){const i=g1.currentRoute.value.query[t];return i==null?e??null:Array.isArray(i)?i.filter(Boolean):i},set(i){d1(()=>{g1[U(a)]({query:{...g1.currentRoute.value.query,[t]:i}})})}})}const nn=G(0);d1(()=>{g1.afterEach(async()=>{await d1(),nn.value+=1})});const ln=G(0),W1=N(()=>g1.currentRoute.value),Q2=N(()=>W1.value.query.print!==void 0),cE=N(()=>W1.value.query.print==="clicks"),ue=N(()=>W1.value.query.embedded!==void 0),k1=N(()=>W1.value.path.startsWith("/presenter")),nE=N(()=>W1.value.path.startsWith("/notes")),Sa=N(()=>Q2.value&&!cE.value),c5=N(()=>W1.value.query.password),lE=N(()=>!k1.value&&(!Kt.remote||c5.value===Kt.remote)),k4=rE("clicks","0"),dE=N(()=>_t.length),hE=N(()=>W1.value.path),Bt=N(()=>Number.parseInt(hE.value.split(/\//g).slice(-1)[0])||1);N(()=>K3(Bt.value));const m1=N(()=>_t.find(t=>t.path===`${Bt.value}`));N(()=>{var t,e,a;return(a=(e=(t=m1.value)==null?void 0:t.meta)==null?void 0:e.slide)==null?void 0:a.id});N(()=>{var t,e;return((e=(t=m1.value)==null?void 0:t.meta)==null?void 0:e.layout)||(Bt.value===1?"cover":"default")});const ri=N(()=>_t.find(t=>t.path===`${Math.min(_t.length,Bt.value+1)}`)),sE=N(()=>_t.find(t=>t.path===`${Math.max(1,Bt.value-1)}`)),oE=N(()=>{var t,e;return nn.value,((e=(t=m1.value)==null?void 0:t.meta)==null?void 0:e.__clicksElements)||[]}),O1=N({get(){if(Sa.value)return 99999;let t=+(k4.value||0);return Number.isNaN(t)&&(t=0),t},set(t){k4.value=t.toString()}}),e3=N(()=>{var t,e;return+(((e=(t=m1.value)==null?void 0:t.meta)==null?void 0:e.clicks)??oE.value.length)}),pE=N(()=>Bt.value<_t.length||O1.value<e3.value),fE=N(()=>Bt.value>1||O1.value>0),vE=N(()=>_t.filter(t=>{var e,a;return(a=(e=t.meta)==null?void 0:e.slide)==null?void 0:a.title}).reduce((t,e)=>(p0(t,e),t),[])),uE=N(()=>f0(vE.value,m1.value));N(()=>v0(uE.value));const mE=N(()=>kE(ln.value,m1.value,sE.value));ut(m1,(t,e)=>{ln.value=Number(t==null?void 0:t.path)-Number(e==null?void 0:e.path)});function ze(){e3.value<=O1.value?Ha():O1.value+=1}async function We(){O1.value<=0?await Za():O1.value-=1}function K3(t){return k1.value?`/presenter/${t}`:`/${t}`}function Ha(){const t=Math.min(_t.length,Bt.value+1);return H2(t)}async function Za(t=!0){const e=Math.max(1,Bt.value-1);await H2(e),t&&e3.value&&g1.replace({query:{...W1.value.query,clicks:e3.value}})}function H2(t,e){return g1.push({path:K3(t),query:{...W1.value.query,clicks:e}})}function qE(t){const e=G(0),{direction:a,distanceX:i,distanceY:r}=lp(t,{onSwipeStart(c){c.pointerType==="touch"&&(Wa.value||(e.value=Li()))},onSwipeEnd(c){if(c.pointerType!=="touch"||!e.value||Wa.value)return;const n=Math.abs(i.value),l=Math.abs(r.value);n/window.innerWidth>.3||n>100?a.value==="left"?ze():We():(l/window.innerHeight>.4||l>200)&&(a.value==="down"?Za():Ha())}})}async function n5(){const{saveAs:t}=await Me(()=>import("./FileSaver.min-23a5d44b.js").then(e=>e.F),[]);t(typeof Kt.download=="string"?Kt.download:Kt.exportFilename?`${Kt.exportFilename}.pdf`:"/phd-defense/slidev-exported.pdf",`${Kt.title}.pdf`)}async function bE(t){var e,a;if(t==null){const i=(a=(e=m1.value)==null?void 0:e.meta)==null?void 0:a.slide;if(!(i!=null&&i.filepath))return!1;t=`${i.filepath}:${i.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function p0(t,e,a=1){var r,c,n,l,d;const i=(c=(r=e.meta)==null?void 0:r.slide)==null?void 0:c.level;i&&i>a&&t.length>0?p0(t[t.length-1].children,e,a+1):t.push({children:[],level:a,path:e.path,hideInToc:!!((n=e.meta)!=null&&n.hideInToc),title:(d=(l=e.meta)==null?void 0:l.slide)==null?void 0:d.title})}function f0(t,e,a=!1,i){return t.map(r=>{const c={...r,active:r.path===(e==null?void 0:e.path),hasActiveParent:a};return c.children.length>0&&(c.children=f0(c.children,e,c.active||c.hasActiveParent,c)),i&&(c.active||c.activeParent)&&(i.activeParent=!0),c})}function v0(t,e=1){return t.filter(a=>!a.hideInToc).map(a=>({...a,children:v0(a.children,e+1)}))}const VE={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function yE(t,e=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let a=t.name.includes("|")?t.name:VE[t.name]||t.name;if(a.includes("|")){const[i,r]=a.split("|").map(c=>c.trim());a=e?r:i}if(a)return{...t,name:a}}function kE(t,e,a){var r,c;let i=t>0?(r=a==null?void 0:a.meta)==null?void 0:r.transition:(c=e==null?void 0:e.meta)==null?void 0:c.transition;return i||(i=Kt.transition),yE(i,t<0)}function xE(){const t=Kt.titleTemplate.replace("%s",Kt.title||"Slidev");Tr({title:t,htmlAttrs:Kt.htmlAttrs}),Ms(`${t} - shared`),Cs(`${t} - drawings`);const e=`${location.origin}_${Xs()}`;function a(){nE.value||!k1.value&&!Ks.includes(location.host.split(":")[0])||(k1.value?(ca("page",+Bt.value),ca("clicks",O1.value)):(ca("viewerPage",+Bt.value),ca("viewerClicks",O1.value)),ca("lastUpdate",{id:e,type:k1.value?"presenter":"viewer",time:new Date().getTime()}))}g1.afterEach(a),ut(O1,a),Ls(i=>{var c;g1.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((c=i.lastUpdate)==null?void 0:c.type)==="presenter"&&(+i.page!=+Bt.value||+O1.value!=+i.clicks)&&g1.replace({path:K3(i.page),query:{...g1.currentRoute.value.query,clicks:i.clicks||0}})})}const gE=jt({__name:"App",setup(t){return H(tt),xE(),(e,a)=>{const i=C6("RouterView"),r=C6("StarportCarrier");return y(),X(wt,null,[A(i),A(r)],64)}}}),RE=at(gE,[["__file","/home/runner/work/phd-defense/phd-defense/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/App.vue"]]);const u0=[],dn=Symbol("animattr-plugins");function TE(t,e){console.debug(`[AnimAttr] registered plugin: ${t}`),u0.push(e)}function SE(t,e,a){const i=[];for(const r of u0)i.push(r.onCreated(t,e,a));t[dn]=i}function IE(t,e,a,i){const r=t[dn]??[];for(let c=0;c<r.length;c++)r[c]&&u0[c].onClicked(t,e,a,i)}function Ia(t){var e,a,i,r,c;return(i=(a=(e=t==null?void 0:t.ctx)==null?void 0:e.type)==null?void 0:a.__file)!=null&&i.endsWith(".md")?String(t.type):((c=(r=t==null?void 0:t.ctx)==null?void 0:r.type)==null?void 0:c.__name)??String(t.type)}function hn(t){const e=t.replace(/(\w+:)|(\w+ :)/g,a=>'"'+a.substring(0,a.length-1)+'":').replace(/'/g,'"');try{return JSON.parse(e)}catch{return console.error(`[AnimAttr] Could not parse object string: ${t}`),null}}function sn(t,e,a){if(e.value&&typeof e.value=="object"&&!Array.isArray(e.value)&&t in e.value)return e.value[t];if(a.props){if(t in a.props)return a.props[t];const i=`data-${t}`;if(i in a.props)return a.props[i]}}const EE="smil",x4=Symbol("animattr-smil");function wE(t){return t.includes("+")?"start":t.includes("-")?"stop":t.includes("~")?"finish":"start"}const UE={onCreated(t,e,a){let i=sn(EE,e,a);if(typeof i=="string"&&(i=hn(i)),i==null)return!1;const r=Array.isArray(i)?{...i}:i,c=/([\+\-\~\<\>]*)(.+)/,n={};for(const[l,d]of Object.entries(r)){n[l]=[];for(const h of d.split(" ")){const s=c.exec(h);if(s){const p=s[1],v={id:s[2],forwards:p.includes(">")||!p.includes("<"),backwards:p.includes("<")||!p.includes(">"),state:wE(p)};n[l].push(v)}}}for(const[l,d]of Object.entries(n))d.length||delete n[l];return Object.keys(n).length?(t[x4]=n,!0):!1},onClicked(t,e,a,i){const r=t[x4][a];if(r!=null)for(const c of r){const n=t.querySelector("#"+c.id);if(!n){console.error(`[AnimAttr] [SMIL] Could not find #${c.id} inside of <${Ia(e)} />.`);continue}if(!(n instanceof SVGAnimationElement)){console.error(`[AnimAttr] [SMIL] #${c.id} inside of <${Ia(e)} /> is not an SVGAnimationElement.`);continue}if(c.forwards&&c.backwards||c.forwards&&i<a||c.backwards&&i>a){if(console.debug(`[AnimAttr] [SMIL] executing animation #${c.id}: ${c.state} (${i} → ${a})`),c.state==="start")n.beginElement();else if(c.state==="stop")n.endElement();else if(c.state==="finish"){const l=()=>{n.endElement(),n.removeEventListener("repeatEvent",l)};n.addEventListener("repeatEvent",l)}}}}};TE("SMIL",UE);const pa="data-animattr",on="animattr-",NE=["start","stop","length","stride","clicks"],ci=Symbol("animattr-args");function KE(t=5){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=e.length,i=[on];for(let r=0;r<t;r++)i.push(e.charAt(Math.floor(Math.random()*a)));return i.join("")}function XE(t,e){const a={};for(const i of NE){const r=sn(i,t,e);r==null?a[i]=r:i==="clicks"?a[i]=typeof r=="string"?hn(r):r:a[i]=Number(r)}if(Array.isArray(t.value))a.clicks=t.value;else if(t.value){const i=Number(t.value);isNaN(i)||(a.length=i)}return Object.keys(a).forEach(i=>a[i]==null&&delete a[i]),"clicks"in a&&Object.keys(a).some(i=>i in["start","stop","stride","length"])?console.warn(`[AnimAttr] <${Ia(e)} /> has both "clicks" and "start,stop,length,stride". "clicks" takes precedence.`):"length"in a&&"stop"in a?console.warn(`[AnimAttr] <${Ia(e)} /> has both "stop" and "length". "stop" takes precedence.`):"clicks"in a||"stop"in a||"length"in a||console.warn(`[AnimAttr] <${Ia(e)} /> has no "clicks", "stop" or "length". No clicks will be added`),a}function g4(t){if(t.clicks){const e=[...t.clicks].sort(),a=e[e.length-1],i=Array(a).fill("");for(let r=0;r<e.length;r++)i[e[r]]=r.toString();return i}if(t.stop){const e=t.start??1,a=t.stride??1,i=Array(t.stop).fill("");for(let r=0,c=e;c<=t.stop;c+=a)i[c]=r.toString(),r++;return i}if(t.length){const e=t.start??1,a=t.stride??1,i=Array(e+(t.length-1)*a).fill("");for(let r=0;r<t.length;r++)i[e+r*a]=r.toString();return i}return[]}function JE(){return{install(t){t.directive("animattr",{created(e,a,i){var c;e[ci]=XE(a,i),SE(e,a,i);const r=((c=a.instance)==null?void 0:c.$).provides[L2];if(a.value&&r.value){const n=g4(e[ci]).join(" ").trim();e.setAttribute(pa,n)}else e.setAttribute(pa,"")},mounted(e,a,i){var f,v,u,V,x,k,g;const r=((f=a.instance)==null?void 0:f.$).provides[xa],c=((v=a.instance)==null?void 0:v.$).provides[c2],n=((u=a.instance)==null?void 0:u.$).provides[L2],l=((V=a.instance)==null?void 0:V.$).provides[tt],d=g4(e[ci]);if(n.value)return;if(!d.length){e.setAttribute(pa,"");return}const h=Number((g=(k=Array.from(((x=e.closest(".slidev-page"))==null?void 0:x.classList)??[]).filter(q=>q.startsWith("slidev-page-")))==null?void 0:k[0])==null?void 0:g.slice(12));if(isNaN(h))return;let s=e.getAttribute(pa);const p=q=>{const T=d.slice(0,q).join(" ").trim();if(T!=s){const R=T.length?Number(T.split(" ").pop()):-1,I=s!=null&&s.length?Number(s==null?void 0:s.split(" ").pop()):-1;s=T,e.setAttribute(pa,T),IE(e,i,R,I)}};if((c==null?void 0:c.value.length)<d.length-1&&c!=null&&c.value){const q=on+KE(),T=[...Array(d.length-1-c.value.length).keys()].map(R=>q+R);c.value.push(...T),t6(()=>T.forEach(R=>{const I=c.value.indexOf(R);I>=0&&c.value.splice(I,1)}),a.instance)}ut([()=>l.nav.currentPage,r],([q,T],[R,I])=>{if(q<h){p(0);return}else if(q>h){p(void 0);return}(!R||R<=q)&&setTimeout(()=>{p(Math.max(0,T)+1)})},{immediate:!0})}})}}}const jE=({app:t})=>{t.use(JE())};function ni(t){return t!==null&&typeof t=="object"}function l5(t,e,a=".",i){if(!ni(e))return l5(t,{},a,i);const r=Object.assign({},e);for(const c in t){if(c==="__proto__"||c==="constructor")continue;const n=t[c];n!=null&&(i&&i(r,c,n,a)||(Array.isArray(n)&&Array.isArray(r[c])?r[c]=[...n,...r[c]]:ni(n)&&ni(r[c])?r[c]=l5(n,r[c],(a?`${a}.`:"")+c.toString(),i):r[c]=n))}return r}function FE(t){return(...e)=>e.reduce((a,i)=>l5(a,i,"",t),{})}const AE=FE(),pn=1/60*1e3,OE=typeof performance<"u"?()=>performance.now():()=>Date.now(),fn=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(OE()),pn);function ME(t){let e=[],a=[],i=0,r=!1,c=!1;const n=new WeakSet,l={schedule:(d,h=!1,s=!1)=>{const p=s&&r,f=p?e:a;return h&&n.add(d),f.indexOf(d)===-1&&(f.push(d),p&&r&&(i=e.length)),d},cancel:d=>{const h=a.indexOf(d);h!==-1&&a.splice(h,1),n.delete(d)},process:d=>{if(r){c=!0;return}if(r=!0,[e,a]=[a,e],a.length=0,i=e.length,i)for(let h=0;h<i;h++){const s=e[h];s(d),n.has(s)&&(l.schedule(s),t())}r=!1,c&&(c=!1,l.process(d))}};return l}const LE=40;let d5=!0,Ga=!1,h5=!1;const z2={delta:0,timestamp:0},a6=["read","update","preRender","render","postRender"],X3=a6.reduce((t,e)=>(t[e]=ME(()=>Ga=!0),t),{}),s5=a6.reduce((t,e)=>{const a=X3[e];return t[e]=(i,r=!1,c=!1)=>(Ga||CE(),a.schedule(i,r,c)),t},{}),zE=a6.reduce((t,e)=>(t[e]=X3[e].cancel,t),{});a6.reduce((t,e)=>(t[e]=()=>X3[e].process(z2),t),{});const WE=t=>X3[t].process(z2),vn=t=>{Ga=!1,z2.delta=d5?pn:Math.max(Math.min(t-z2.timestamp,LE),1),z2.timestamp=t,h5=!0,a6.forEach(WE),h5=!1,Ga&&(d5=!1,fn(vn))},CE=()=>{Ga=!0,d5=!0,h5||fn(vn)},un=()=>z2;function mn(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(a[i[r]]=t[i[r]]);return a}var m0=function(){},Pa=function(){};m0=function(t,e){!t&&typeof console<"u"&&console.warn(e)},Pa=function(t,e){if(!t)throw new Error(e)};const o5=(t,e,a)=>Math.min(Math.max(a,t),e),li=.001,QE=.01,R4=10,HE=.05,ZE=1;function GE({duration:t=800,bounce:e=.25,velocity:a=0,mass:i=1}){let r,c;m0(t<=R4*1e3,"Spring duration must be 10 seconds or less");let n=1-e;n=o5(HE,ZE,n),t=o5(QE,R4,t/1e3),n<1?(r=h=>{const s=h*n,p=s*t,f=s-a,v=p5(h,n),u=Math.exp(-p);return li-f/v*u},c=h=>{const p=h*n*t,f=p*a+a,v=Math.pow(n,2)*Math.pow(h,2)*t,u=Math.exp(-p),V=p5(Math.pow(h,2),n);return(-r(h)+li>0?-1:1)*((f-v)*u)/V}):(r=h=>{const s=Math.exp(-h*t),p=(h-a)*t+1;return-li+s*p},c=h=>{const s=Math.exp(-h*t),p=(a-h)*(t*t);return s*p});const l=5/t,d=YE(r,c,l);if(t=t*1e3,isNaN(d))return{stiffness:100,damping:10,duration:t};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:n*2*Math.sqrt(i*h),duration:t}}}const PE=12;function YE(t,e,a){let i=a;for(let r=1;r<PE;r++)i=i-t(i)/e(i);return i}function p5(t,e){return t*Math.sqrt(1-e*e)}const BE=["duration","bounce"],DE=["stiffness","damping","mass"];function T4(t,e){return e.some(a=>t[a]!==void 0)}function _E(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!T4(t,DE)&&T4(t,BE)){const a=GE(t);e=Object.assign(Object.assign(Object.assign({},e),a),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function q0(t){var{from:e=0,to:a=1,restSpeed:i=2,restDelta:r}=t,c=mn(t,["from","to","restSpeed","restDelta"]);const n={done:!1,value:e};let{stiffness:l,damping:d,mass:h,velocity:s,duration:p,isResolvedFromDuration:f}=_E(c),v=S4,u=S4;function V(){const x=s?-(s/1e3):0,k=a-e,g=d/(2*Math.sqrt(l*h)),q=Math.sqrt(l/h)/1e3;if(r===void 0&&(r=Math.min(Math.abs(a-e)/100,.4)),g<1){const T=p5(q,g);v=R=>{const I=Math.exp(-g*q*R);return a-I*((x+g*q*k)/T*Math.sin(T*R)+k*Math.cos(T*R))},u=R=>{const I=Math.exp(-g*q*R);return g*q*I*(Math.sin(T*R)*(x+g*q*k)/T+k*Math.cos(T*R))-I*(Math.cos(T*R)*(x+g*q*k)-T*k*Math.sin(T*R))}}else if(g===1)v=T=>a-Math.exp(-q*T)*(k+(x+q*k)*T);else{const T=q*Math.sqrt(g*g-1);v=R=>{const I=Math.exp(-g*q*R),F=Math.min(T*R,300);return a-I*((x+g*q*k)*Math.sinh(F)+T*k*Math.cosh(F))/T}}}return V(),{next:x=>{const k=v(x);if(f)n.done=x>=p;else{const g=u(x)*1e3,q=Math.abs(g)<=i,T=Math.abs(a-k)<=r;n.done=q&&T}return n.value=n.done?a:k,n},flipTarget:()=>{s=-s,[e,a]=[a,e],V()}}}q0.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const S4=t=>0,qn=(t,e,a)=>{const i=e-t;return i===0?1:(a-t)/i},b0=(t,e,a)=>-a*t+a*e+t,bn=(t,e)=>a=>Math.max(Math.min(a,e),t),Ea=t=>t%1?Number(t.toFixed(5)):t,Ya=/(-)?([\d]*\.?[\d])+/g,f5=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,$E=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function i6(t){return typeof t=="string"}const r6={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},wa=Object.assign(Object.assign({},r6),{transform:bn(0,1)}),x6=Object.assign(Object.assign({},r6),{default:1}),V0=t=>({test:e=>i6(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$e=V0("deg"),Ua=V0("%"),Vt=V0("px"),I4=Object.assign(Object.assign({},Ua),{parse:t=>Ua.parse(t)/100,transform:t=>Ua.transform(t*100)}),y0=(t,e)=>a=>!!(i6(a)&&$E.test(a)&&a.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(a,e)),Vn=(t,e,a)=>i=>{if(!i6(i))return i;const[r,c,n,l]=i.match(Ya);return{[t]:parseFloat(r),[e]:parseFloat(c),[a]:parseFloat(n),alpha:l!==void 0?parseFloat(l):1}},o2={test:y0("hsl","hue"),parse:Vn("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:a,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ua.transform(Ea(e))+", "+Ua.transform(Ea(a))+", "+Ea(wa.transform(i))+")"},tw=bn(0,255),di=Object.assign(Object.assign({},r6),{transform:t=>Math.round(tw(t))}),Je={test:y0("rgb","red"),parse:Vn("red","green","blue"),transform:({red:t,green:e,blue:a,alpha:i=1})=>"rgba("+di.transform(t)+", "+di.transform(e)+", "+di.transform(a)+", "+Ea(wa.transform(i))+")"};function ew(t){let e="",a="",i="",r="";return t.length>5?(e=t.substr(1,2),a=t.substr(3,2),i=t.substr(5,2),r=t.substr(7,2)):(e=t.substr(1,1),a=t.substr(2,1),i=t.substr(3,1),r=t.substr(4,1),e+=e,a+=a,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(a,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const v5={test:y0("#"),parse:ew,transform:Je.transform},y1={test:t=>Je.test(t)||v5.test(t)||o2.test(t),parse:t=>Je.test(t)?Je.parse(t):o2.test(t)?o2.parse(t):v5.parse(t),transform:t=>i6(t)?t:t.hasOwnProperty("red")?Je.transform(t):o2.transform(t)},yn="${c}",kn="${n}";function aw(t){var e,a,i,r;return isNaN(t)&&i6(t)&&((a=(e=t.match(Ya))===null||e===void 0?void 0:e.length)!==null&&a!==void 0?a:0)+((r=(i=t.match(f5))===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0)>0}function xn(t){typeof t=="number"&&(t=`${t}`);const e=[];let a=0;const i=t.match(f5);i&&(a=i.length,t=t.replace(f5,yn),e.push(...i.map(y1.parse)));const r=t.match(Ya);return r&&(t=t.replace(Ya,kn),e.push(...r.map(r6.parse))),{values:e,numColors:a,tokenised:t}}function gn(t){return xn(t).values}function Rn(t){const{values:e,numColors:a,tokenised:i}=xn(t),r=e.length;return c=>{let n=i;for(let l=0;l<r;l++)n=n.replace(l<a?yn:kn,l<a?y1.transform(c[l]):Ea(c[l]));return n}}const iw=t=>typeof t=="number"?0:t;function rw(t){const e=gn(t);return Rn(t)(e.map(iw))}const c6={test:aw,parse:gn,createTransformer:Rn,getAnimatableNone:rw},cw=new Set(["brightness","contrast","saturate","opacity"]);function nw(t){let[e,a]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=a.match(Ya)||[];if(!i)return t;const r=a.replace(i,"");let c=cw.has(e)?1:0;return i!==a&&(c*=100),e+"("+c+r+")"}const lw=/([a-z-]*)\(.*?\)/g,u5=Object.assign(Object.assign({},c6),{getAnimatableNone:t=>{const e=t.match(lw);return e?e.map(nw).join(" "):t}});function hi(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*(2/3-a)*6:t}function E4({hue:t,saturation:e,lightness:a,alpha:i}){t/=360,e/=100,a/=100;let r=0,c=0,n=0;if(!e)r=c=n=a;else{const l=a<.5?a*(1+e):a+e-a*e,d=2*a-l;r=hi(d,l,t+1/3),c=hi(d,l,t),n=hi(d,l,t-1/3)}return{red:Math.round(r*255),green:Math.round(c*255),blue:Math.round(n*255),alpha:i}}const dw=(t,e,a)=>{const i=t*t,r=e*e;return Math.sqrt(Math.max(0,a*(r-i)+i))},hw=[v5,Je,o2],w4=t=>hw.find(e=>e.test(t)),U4=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,Tn=(t,e)=>{let a=w4(t),i=w4(e);Pa(!!a,U4(t)),Pa(!!i,U4(e));let r=a.parse(t),c=i.parse(e);a===o2&&(r=E4(r),a=Je),i===o2&&(c=E4(c),i=Je);const n=Object.assign({},r);return l=>{for(const d in n)d!=="alpha"&&(n[d]=dw(r[d],c[d],l));return n.alpha=b0(r.alpha,c.alpha,l),a.transform(n)}},sw=t=>typeof t=="number",ow=(t,e)=>a=>e(t(a)),Sn=(...t)=>t.reduce(ow);function In(t,e){return sw(t)?a=>b0(t,e,a):y1.test(t)?Tn(t,e):wn(t,e)}const En=(t,e)=>{const a=[...t],i=a.length,r=t.map((c,n)=>In(c,e[n]));return c=>{for(let n=0;n<i;n++)a[n]=r[n](c);return a}},pw=(t,e)=>{const a=Object.assign(Object.assign({},t),e),i={};for(const r in a)t[r]!==void 0&&e[r]!==void 0&&(i[r]=In(t[r],e[r]));return r=>{for(const c in i)a[c]=i[c](r);return a}};function N4(t){const e=c6.parse(t),a=e.length;let i=0,r=0,c=0;for(let n=0;n<a;n++)i||typeof e[n]=="number"?i++:e[n].hue!==void 0?c++:r++;return{parsed:e,numNumbers:i,numRGB:r,numHSL:c}}const wn=(t,e)=>{const a=c6.createTransformer(e),i=N4(t),r=N4(e);return i.numHSL===r.numHSL&&i.numRGB===r.numRGB&&i.numNumbers>=r.numNumbers?Sn(En(i.parsed,r.parsed),a):(m0(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),n=>`${n>0?e:t}`)},fw=(t,e)=>a=>b0(t,e,a);function vw(t){if(typeof t=="number")return fw;if(typeof t=="string")return y1.test(t)?Tn:wn;if(Array.isArray(t))return En;if(typeof t=="object")return pw}function uw(t,e,a){const i=[],r=a||vw(t[0]),c=t.length-1;for(let n=0;n<c;n++){let l=r(t[n],t[n+1]);if(e){const d=Array.isArray(e)?e[n]:e;l=Sn(d,l)}i.push(l)}return i}function mw([t,e],[a]){return i=>a(qn(t,e,i))}function qw(t,e){const a=t.length,i=a-1;return r=>{let c=0,n=!1;if(r<=t[0]?n=!0:r>=t[i]&&(c=i-1,n=!0),!n){let d=1;for(;d<a&&!(t[d]>r||d===i);d++);c=d-1}const l=qn(t[c],t[c+1],r);return e[c](l)}}function Un(t,e,{clamp:a=!0,ease:i,mixer:r}={}){const c=t.length;Pa(c===e.length,"Both input and output ranges must be the same length"),Pa(!i||!Array.isArray(i)||i.length===c-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[c-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const n=uw(e,i,r),l=c===2?mw(t,n):qw(t,n);return a?d=>l(o5(t[0],t[c-1],d)):l}const J3=t=>e=>1-t(1-e),k0=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,bw=t=>e=>Math.pow(e,t),Nn=t=>e=>e*e*((t+1)*e-t),Vw=t=>{const e=Nn(t);return a=>(a*=2)<1?.5*e(a):.5*(2-Math.pow(2,-10*(a-1)))},Kn=1.525,yw=4/11,kw=8/11,xw=9/10,Xn=t=>t,x0=bw(2),gw=J3(x0),Jn=k0(x0),jn=t=>1-Math.sin(Math.acos(t)),Fn=J3(jn),Rw=k0(Fn),g0=Nn(Kn),Tw=J3(g0),Sw=k0(g0),Iw=Vw(Kn),Ew=4356/361,ww=35442/1805,Uw=16061/1805,a3=t=>{if(t===1||t===0)return t;const e=t*t;return t<yw?7.5625*e:t<kw?9.075*e-9.9*t+3.4:t<xw?Ew*e-ww*t+Uw:10.8*t*t-20.52*t+10.72},Nw=J3(a3),Kw=t=>t<.5?.5*(1-a3(1-t*2)):.5*a3(t*2-1)+.5;function Xw(t,e){return t.map(()=>e||Jn).splice(0,t.length-1)}function Jw(t){const e=t.length;return t.map((a,i)=>i!==0?i/(e-1):0)}function jw(t,e){return t.map(a=>a*e)}function N6({from:t=0,to:e=1,ease:a,offset:i,duration:r=300}){const c={done:!1,value:t},n=Array.isArray(e)?e:[t,e],l=jw(i&&i.length===n.length?i:Jw(n),r);function d(){return Un(l,n,{ease:Array.isArray(a)?a:Xw(n,a)})}let h=d();return{next:s=>(c.value=h(s),c.done=s>=r,c),flipTarget:()=>{n.reverse(),h=d()}}}function Fw({velocity:t=0,from:e=0,power:a=.8,timeConstant:i=350,restDelta:r=.5,modifyTarget:c}){const n={done:!1,value:e};let l=a*t;const d=e+l,h=c===void 0?d:c(d);return h!==d&&(l=h-e),{next:s=>{const p=-l*Math.exp(-s/i);return n.done=!(p>r||p<-r),n.value=n.done?h:h+p,n},flipTarget:()=>{}}}const K4={keyframes:N6,spring:q0,decay:Fw};function Aw(t){if(Array.isArray(t.to))return N6;if(K4[t.type])return K4[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?N6:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?q0:N6}function An(t,e,a=0){return t-e-a}function Ow(t,e,a=0,i=!0){return i?An(e+-t,e,a):e-(t-e)+a}function Mw(t,e,a,i){return i?t>=e+a:t<=-a}const Lw=t=>{const e=({delta:a})=>t(a);return{start:()=>s5.update(e,!0),stop:()=>zE.update(e)}};function On(t){var e,a,{from:i,autoplay:r=!0,driver:c=Lw,elapsed:n=0,repeat:l=0,repeatType:d="loop",repeatDelay:h=0,onPlay:s,onStop:p,onComplete:f,onRepeat:v,onUpdate:u}=t,V=mn(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:x}=V,k,g=0,q=V.duration,T,R=!1,I=!0,F;const w=Aw(V);!((a=(e=w).needsInterpolation)===null||a===void 0)&&a.call(e,i,x)&&(F=Un([0,100],[i,x],{clamp:!1}),i=0,x=100);const L=w(Object.assign(Object.assign({},V),{from:i,to:x}));function et(){g++,d==="reverse"?(I=g%2===0,n=Ow(n,q,h,I)):(n=An(n,q,h),d==="mirror"&&L.flipTarget()),R=!1,v&&v()}function ht(){k.stop(),f&&f()}function Z(bt){if(I||(bt=-bt),n+=bt,!R){const kt=L.next(Math.max(0,n));T=kt.value,F&&(T=F(T)),R=I?kt.done:n<=0}u==null||u(T),R&&(g===0&&(q??(q=n)),g<l?Mw(n,q,h,I)&&et():ht())}function vt(){s==null||s(),k=c(Z),k.start()}return r&&vt(),{stop:()=>{p==null||p(),k.stop()}}}function Mn(t,e){return e?t*(1e3/e):0}function zw({from:t=0,velocity:e=0,min:a,max:i,power:r=.8,timeConstant:c=750,bounceStiffness:n=500,bounceDamping:l=10,restDelta:d=1,modifyTarget:h,driver:s,onUpdate:p,onComplete:f,onStop:v}){let u;function V(q){return a!==void 0&&q<a||i!==void 0&&q>i}function x(q){return a===void 0?i:i===void 0||Math.abs(a-q)<Math.abs(i-q)?a:i}function k(q){u==null||u.stop(),u=On(Object.assign(Object.assign({},q),{driver:s,onUpdate:T=>{var R;p==null||p(T),(R=q.onUpdate)===null||R===void 0||R.call(q,T)},onComplete:f,onStop:v}))}function g(q){k(Object.assign({type:"spring",stiffness:n,damping:l,restDelta:d},q))}if(V(t))g({from:t,velocity:e,to:x(t)});else{let q=r*e+t;typeof h<"u"&&(q=h(q));const T=x(q),R=T===a?-1:1;let I,F;const w=L=>{I=F,F=L,e=Mn(L-I,un().delta),(R===1&&L>T||R===-1&&L<T)&&g({from:L,to:T,velocity:e})};k({type:"decay",from:t,velocity:e,timeConstant:c,power:r,restDelta:d,modifyTarget:h,onUpdate:V(q)?w:void 0})}return{stop:()=>u==null?void 0:u.stop()}}const Ln=(t,e)=>1-3*e+3*t,zn=(t,e)=>3*e-6*t,Wn=t=>3*t,i3=(t,e,a)=>((Ln(e,a)*t+zn(e,a))*t+Wn(e))*t,Cn=(t,e,a)=>3*Ln(e,a)*t*t+2*zn(e,a)*t+Wn(e),Ww=1e-7,Cw=10;function Qw(t,e,a,i,r){let c,n,l=0;do n=e+(a-e)/2,c=i3(n,i,r)-t,c>0?a=n:e=n;while(Math.abs(c)>Ww&&++l<Cw);return n}const Hw=8,Zw=.001;function Gw(t,e,a,i){for(let r=0;r<Hw;++r){const c=Cn(e,a,i);if(c===0)return e;const n=i3(e,a,i)-t;e-=n/c}return e}const K6=11,g6=1/(K6-1);function Pw(t,e,a,i){if(t===e&&a===i)return Xn;const r=new Float32Array(K6);for(let n=0;n<K6;++n)r[n]=i3(n*g6,t,a);function c(n){let l=0,d=1;const h=K6-1;for(;d!==h&&r[d]<=n;++d)l+=g6;--d;const s=(n-r[d])/(r[d+1]-r[d]),p=l+s*g6,f=Cn(p,t,a);return f>=Zw?Gw(n,p,t,a):f===0?p:Qw(n,l,l+g6,t,a)}return n=>n===0||n===1?n:i3(c(n),e,i)}const si={};class Yw{constructor(){this.subscriptions=new Set}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,a,i){if(this.subscriptions.size)for(const r of this.subscriptions)r(e,a,i)}clear(){this.subscriptions.clear()}}function X4(t){return!isNaN(parseFloat(t))}class Bw{constructor(e){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Yw,this.canTrackVelocity=!1,this.updateAndNotify=a=>{this.prev=this.current,this.current=a;const{delta:i,timestamp:r}=un();this.lastUpdated!==r&&(this.timeDelta=i,this.lastUpdated=r),s5.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>s5.postRender(this.velocityCheck),this.velocityCheck=({timestamp:a})=>{this.canTrackVelocity||(this.canTrackVelocity=X4(this.current)),a!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=e,this.canTrackVelocity=X4(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Mn(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(a=>{const{stop:i}=e(a);this.stopAnimation=i}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Dw(t){return new Bw(t)}const{isArray:_w}=Array;function $w(){const t=G({}),e=i=>{const r=c=>{t.value[c]&&(t.value[c].stop(),t.value[c].destroy(),delete t.value[c])};i?_w(i)?i.forEach(r):r(i):Object.keys(t.value).forEach(r)},a=(i,r,c)=>{if(t.value[i])return t.value[i];const n=Dw(r);return n.onChange(l=>c[i]=l),t.value[i]=n,n};return po(e),{motionValues:t,get:a,stop:e}}function tU(t){return Array.isArray(t)}function t2(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function oi(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function eU(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function pi(){return{type:"keyframes",ease:"linear",duration:300}}function aU(t){return{type:"keyframes",duration:800,values:t}}const J4={default:eU,x:t2,y:t2,z:t2,rotate:t2,rotateX:t2,rotateY:t2,rotateZ:t2,scaleX:oi,scaleY:oi,scale:oi,backgroundColor:pi,color:pi,opacity:pi};function Qn(t,e){let a;return tU(e)?a=aU:a=J4[t]||J4.default,{to:e,...a(e)}}const j4={...r6,transform:Math.round},Hn={color:y1,backgroundColor:y1,outlineColor:y1,fill:y1,stroke:y1,borderColor:y1,borderTopColor:y1,borderRightColor:y1,borderBottomColor:y1,borderLeftColor:y1,borderWidth:Vt,borderTopWidth:Vt,borderRightWidth:Vt,borderBottomWidth:Vt,borderLeftWidth:Vt,borderRadius:Vt,radius:Vt,borderTopLeftRadius:Vt,borderTopRightRadius:Vt,borderBottomRightRadius:Vt,borderBottomLeftRadius:Vt,width:Vt,maxWidth:Vt,height:Vt,maxHeight:Vt,size:Vt,top:Vt,right:Vt,bottom:Vt,left:Vt,padding:Vt,paddingTop:Vt,paddingRight:Vt,paddingBottom:Vt,paddingLeft:Vt,margin:Vt,marginTop:Vt,marginRight:Vt,marginBottom:Vt,marginLeft:Vt,rotate:$e,rotateX:$e,rotateY:$e,rotateZ:$e,scale:x6,scaleX:x6,scaleY:x6,scaleZ:x6,skew:$e,skewX:$e,skewY:$e,distance:Vt,translateX:Vt,translateY:Vt,translateZ:Vt,x:Vt,y:Vt,z:Vt,perspective:Vt,transformPerspective:Vt,opacity:wa,originX:I4,originY:I4,originZ:Vt,zIndex:j4,filter:u5,WebkitFilter:u5,fillOpacity:wa,strokeOpacity:wa,numOctaves:j4},R0=t=>Hn[t];function Zn(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function iU(t,e){let a=R0(t);return a!==u5&&(a=c6),a.getAnimatableNone?a.getAnimatableNone(e):void 0}const rU={linear:Xn,easeIn:x0,easeInOut:Jn,easeOut:gw,circIn:jn,circInOut:Rw,circOut:Fn,backIn:g0,backInOut:Sw,backOut:Tw,anticipate:Iw,bounceIn:Nw,bounceInOut:Kw,bounceOut:a3};function F4(t){if(Array.isArray(t)){const[e,a,i,r]=t;return Pw(e,a,i,r)}else if(typeof t=="string")return rU[t];return t}function cU(t){return Array.isArray(t)&&typeof t[0]!="number"}function A4(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&c6.test(e)&&!e.startsWith("url("))}function nU(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function lU({ease:t,times:e,delay:a,...i}){const r={...i};return e&&(r.offset=e),t&&(r.ease=cU(t)?t.map(F4):F4(t)),a&&(r.elapsed=-a),r}function dU(t,e,a){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),nU(e),hU(t)||(t={...t,...Qn(a,e.to)}),{...e,...lU(t)}}function hU({delay:t,repeat:e,repeatType:a,repeatDelay:i,from:r,...c}){return!!Object.keys(c).length}function sU(t,e){return t[e]||t.default||t}function oU(t,e,a,i,r){const c=sU(i,t);let n=c.from===null||c.from===void 0?e.get():c.from;const l=A4(t,a);n==="none"&&l&&typeof a=="string"&&(n=iU(t,a));const d=A4(t,n);function h(p){const f={from:n,to:a,velocity:i.velocity?i.velocity:e.getVelocity(),onUpdate:v=>e.set(v)};return c.type==="inertia"||c.type==="decay"?zw({...f,...c}):On({...dU(c,f,t),onUpdate:v=>{f.onUpdate(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{i.onComplete&&i.onComplete(),r&&r(),p&&p()}})}function s(p){return e.set(a),i.onComplete&&i.onComplete(),r&&r(),p&&p(),{stop:()=>{}}}return!d||!l||c.type===!1?s:h}function pU(){const{motionValues:t,stop:e,get:a}=$w();return{motionValues:t,stop:e,push:(r,c,n,l={},d)=>{const h=n[r],s=a(r,h,n);if(l&&l.immediate){s.set(c);return}const p=oU(r,s,c,l,d);s.start(p)}}}function fU(t,e={},{motionValues:a,push:i,stop:r}=pU()){const c=U(e),n=G(!1);ut(a,p=>{n.value=Object.values(p).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const l=p=>{if(!c||!c[p])throw new Error(`The variant ${p} does not exist.`);return c[p]},d=p=>(typeof p=="string"&&(p=l(p)),Promise.all(Object.entries(p).map(([f,v])=>{if(f!=="transition")return new Promise(u=>i(f,v,t,p.transition||Qn(f,p[f]),u))}).filter(Boolean)));return{isAnimating:n,apply:d,set:p=>{const f=Mi(p)?p:l(p);Object.entries(f).forEach(([v,u])=>{v!=="transition"&&i(v,u,t,{immediate:!0})})},leave:async p=>{let f;if(c&&(c.leave&&(f=c.leave),!c.leave&&c.initial&&(f=c.initial)),!f){p();return}await d(f),p()},stop:r}}const T0=typeof window<"u",vU=()=>T0&&window.onpointerdown===null,uU=()=>T0&&window.ontouchstart===null,mU=()=>T0&&window.onmousedown===null;function qU({target:t,state:e,variants:a,apply:i}){const r=U(a),c=G(!1),n=G(!1),l=G(!1),d=N(()=>{let s=[];return r&&(r.hovered&&(s=[...s,...Object.keys(r.hovered)]),r.tapped&&(s=[...s,...Object.keys(r.tapped)]),r.focused&&(s=[...s,...Object.keys(r.focused)])),s}),h=N(()=>{const s={};Object.assign(s,e.value),c.value&&r.hovered&&Object.assign(s,r.hovered),n.value&&r.tapped&&Object.assign(s,r.tapped),l.value&&r.focused&&Object.assign(s,r.focused);for(const p in s)d.value.includes(p)||delete s[p];return s});r.hovered&&(Rt(t,"mouseenter",()=>c.value=!0),Rt(t,"mouseleave",()=>{c.value=!1,n.value=!1}),Rt(t,"mouseout",()=>{c.value=!1,n.value=!1})),r.tapped&&(mU()&&(Rt(t,"mousedown",()=>n.value=!0),Rt(t,"mouseup",()=>n.value=!1)),vU()&&(Rt(t,"pointerdown",()=>n.value=!0),Rt(t,"pointerup",()=>n.value=!1)),uU()&&(Rt(t,"touchstart",()=>n.value=!0),Rt(t,"touchend",()=>n.value=!1))),r.focused&&(Rt(t,"focus",()=>l.value=!0),Rt(t,"blur",()=>l.value=!1)),ut(h,i)}function bU({set:t,target:e,variants:a,variant:i}){const r=U(a);ut(()=>e,()=>{r&&(r.initial&&t("initial"),r.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function VU({state:t,apply:e}){ut(t,a=>{a&&e(a)},{immediate:!0})}function yU({target:t,variants:e,variant:a}){const i=U(e);i&&(i.visible||i.visibleOnce)&&ap(t,([{isIntersecting:r}])=>{i.visible?r?a.value="visible":a.value="initial":i.visibleOnce&&(r&&a.value!=="visibleOnce"?a.value="visibleOnce":a.value||(a.value="initial"))})}function kU(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&bU(t),e.syncVariants&&VU(t),e.visibilityHooks&&yU(t),e.eventListeners&&qU(t)}function Gn(t={}){const e=Pt({...t}),a=G({});return ut(e,()=>{const i={};for(const[r,c]of Object.entries(e)){const n=R0(r),l=Zn(c,n);i[r]=l}a.value=i},{immediate:!0,deep:!0}),{state:e,style:a}}function S0(t,e){ut(()=>h1(t),a=>{a&&e(a)},{immediate:!0})}const xU={x:"translateX",y:"translateY",z:"translateZ"};function Pn(t={},e=!0){const a=Pt({...t}),i=G("");return ut(a,r=>{let c="",n=!1;if(e&&(r.x||r.y||r.z)){const l=[r.x||0,r.y||0,r.z||0].map(Vt.transform).join(",");c+=`translate3d(${l}) `,n=!0}for(const[l,d]of Object.entries(r)){if(e&&(l==="x"||l==="y"||l==="z"))continue;const h=R0(l),s=Zn(d,h);c+=`${xU[l]||l}(${s}) `}e&&!n&&(c+="translateZ(0px) "),i.value=c.trim()},{immediate:!0,deep:!0}),{state:a,transform:i}}const gU=["","X","Y","Z"],RU=["perspective","translate","scale","rotate","skew"],Yn=["transformPerspective","x","y","z"];RU.forEach(t=>{gU.forEach(e=>{const a=t+e;Yn.push(a)})});const TU=new Set(Yn);function I0(t){return TU.has(t)}const SU=new Set(["originX","originY","originZ"]);function Bn(t){return SU.has(t)}function IU(t){const e={},a={};return Object.entries(t).forEach(([i,r])=>{I0(i)||Bn(i)?e[i]=r:a[i]=r}),{transform:e,style:a}}function Dn(t){const{transform:e,style:a}=IU(t),{transform:i}=Pn(e),{style:r}=Gn(a);return i.value&&(r.value.transform=i.value),r.value}function EU(t,e){let a,i;const{state:r,style:c}=Gn();return S0(t,n=>{i=n;for(const l of Object.keys(Hn))n.style[l]===null||n.style[l]===""||I0(l)||Bn(l)||(r[l]=n.style[l]);a&&Object.entries(a).forEach(([l,d])=>n.style[l]=d),e&&e(r)}),ut(c,n=>{if(!i){a=n;return}for(const l in n)i.style[l]=n[l]},{immediate:!0}),{style:r}}function wU(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const a=i=>i.endsWith("px")||i.endsWith("deg")?parseFloat(i):isNaN(Number(i))?Number(i):i;return e.reduce((i,r)=>{if(!r)return i;const[c,n]=r.split("("),d=n.split(",").map(s=>a(s.endsWith(")")?s.replace(")",""):s.trim())),h=d.length===1?d[0]:d;return{...i,[c]:h}},{})}function UU(t,e){Object.entries(wU(e)).forEach(([a,i])=>{const r=["x","y","z"];if(a==="translate3d"){if(i===0){r.forEach(c=>t[c]=0);return}i.forEach((c,n)=>t[r[n]]=c);return}if(i=parseFloat(i),a==="translateX"){t.x=i;return}if(a==="translateY"){t.y=i;return}if(a==="translateZ"){t.z=i;return}t[a]=i})}function NU(t,e){let a,i;const{state:r,transform:c}=Pn();return S0(t,n=>{i=n,n.style.transform&&UU(r,n.style.transform),a&&(n.style.transform=a),e&&e(r)}),ut(c,n=>{if(!i){a=n;return}i.style.transform=n},{immediate:!0}),{transform:r}}function KU(t,e){const a=Pt({}),i=n=>Object.entries(n).forEach(([l,d])=>a[l]=d),{style:r}=EU(t,i),{transform:c}=NU(t,i);return ut(a,n=>{Object.entries(n).forEach(([l,d])=>{const h=I0(l)?c:r;h[l]&&h[l]===d||(h[l]=d)})},{immediate:!0,deep:!0}),S0(t,()=>e&&i(e)),{motionProperties:a,style:r,transform:c}}function XU(t={}){const e=U(t),a=G();return{state:N(()=>{if(a.value)return e[a.value]}),variant:a}}function _n(t,e={},a){const{motionProperties:i}=KU(t),{variant:r,state:c}=XU(e),n=fU(i,e),l={target:t,variant:r,variants:e,state:c,motionProperties:i,...n};return kU(l,a),l}const JU=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"];function jU(t,e){const a=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};a&&(a.variants&&Mi(a.variants)&&(e.value={...e.value,...a.variants}),JU.forEach(i=>{if(i==="delay"){if(a&&a[i]&&typeof a[i]=="number"){const r=a[i];e&&e.value&&(e.value.enter&&(e.value.enter.transition||(e.value.enter.transition={}),e.value.enter.transition={delay:r,...e.value.enter.transition}),e.value.visible&&(e.value.visible.transition||(e.value.visible.transition={}),e.value.visible.transition={delay:r,...e.value.visible.transition}),e.value.visibleOnce&&(e.value.visibleOnce.transition||(e.value.visibleOnce.transition={}),e.value.visibleOnce.transition={delay:r,...e.value.visibleOnce.transition}))}return}i==="visible-once"&&(i="visibleOnce"),a&&a[i]&&Mi(a[i])&&(e.value[i]=a[i])}))}function fi(t){return{created:(a,i,r)=>{const c=i.value&&typeof i.value=="string"?i.value:r.key;c&&si[c]&&si[c].stop();const n=G(t||{});typeof i.value=="object"&&(n.value=i.value),jU(r,n);const l=_n(a,n);a.motionInstance=l,c&&(si[c]=l)},getSSRProps(a,i){let{initial:r}=a.value||i&&(i==null?void 0:i.props)||{};r=U(r);const c=AE((t==null?void 0:t.initial)||{},r||{});return!c||Object.keys(c).length===0?void 0:{style:Dn(c)}}}}const FU={initial:{opacity:0},enter:{opacity:1}},AU={initial:{opacity:0},visible:{opacity:1}},OU={initial:{opacity:0},visibleOnce:{opacity:1}},MU={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},LU={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},zU={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},WU={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},CU={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},QU={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},HU={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ZU={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},GU={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},PU={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},YU={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},BU={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},DU={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},_U={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$U={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},tN={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},eN={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},aN={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},iN={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},rN={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},cN={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},nN={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},lN={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},dN={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},hN={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},sN={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},oN={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},m5={__proto__:null,fade:FU,fadeVisible:AU,fadeVisibleOnce:OU,pop:MU,popVisible:LU,popVisibleOnce:zU,rollBottom:DU,rollLeft:WU,rollRight:HU,rollTop:PU,rollVisibleBottom:_U,rollVisibleLeft:CU,rollVisibleOnceBottom:$U,rollVisibleOnceLeft:QU,rollVisibleOnceRight:GU,rollVisibleOnceTop:BU,rollVisibleRight:ZU,rollVisibleTop:YU,slideBottom:hN,slideLeft:tN,slideRight:iN,slideTop:nN,slideVisibleBottom:sN,slideVisibleLeft:eN,slideVisibleOnceBottom:oN,slideVisibleOnceLeft:aN,slideVisibleOnceRight:cN,slideVisibleOnceTop:dN,slideVisibleRight:rN,slideVisibleTop:lN},pN=jt({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var l;const e=ld(),a=Pt({});if(!t.is&&!e.default)return()=>i1("div",{});const i=N(()=>{let d;return t.preset&&(d=m5[t.preset]),d}),r=N(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),c=N(()=>{const d={...r.value,...i.value||{},...t.variants||{}};return t.delay&&(d.enter.transition={...d.enter.transition},d.enter.transition.delay=parseInt(t.delay)),d}),n=N(()=>{if(!t.is)return;let d=t.is;return typeof n.value=="string"&&!i7(d)&&(d=C6(d)),d});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||process!=null&&process.dev){const d=h=>{var s;(s=h.variants)!=null&&s.initial&&h.set("initial"),setTimeout(()=>{var p,f,v;(p=h.variants)!=null&&p.enter&&h.apply("enter"),(f=h.variants)!=null&&f.visible&&h.apply("visible"),(v=h.variants)!=null&&v.visibleOnce&&h.apply("visibleOnce")},10)};q3(()=>Object.entries(a).forEach(([h,s])=>d(s)))}return{slots:e,component:n,motionConfig:c,instances:a}},render({slots:t,motionConfig:e,instances:a,component:i}){var l;const r=Dn(e.initial||{}),c=(d,h)=>(d.props||(d.props={}),d.props.style=r,d.props.onVnodeMounted=({el:s})=>{const p=_n(s,e);a[h]=p},d);if(i){const d=i1(i,void 0,t);return c(d,0),d}return(((l=t.default)==null?void 0:l.call(t))||[]).map((d,h)=>c(d,h))}});function fN(t){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",a="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",i=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(i,r=>a.charAt(e.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const vN={install(t,e){if(t.directive("motion",fi()),t.component("Motion",pN),!e||e&&!e.excludePresets)for(const a in m5){const i=m5[a];t.directive(`motion-${fN(a)}`,fi(i))}if(e&&e.directives)for(const a in e.directives){const i=e.directives[a];i.initial,t.directive(`motion-${a}`,fi(i))}}};var O4;const Na=typeof window<"u",uN=Object.prototype.toString,mN=t=>uN.call(t)==="[object Object]";Na&&((O4=window==null?void 0:window.navigator)!=null&&O4.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function qN(t){return x5()?(l7(t),!0):!1}function bN(t){var e;const a=U(t);return(e=a==null?void 0:a.$el)!=null?e:a}const VN=Na?window:void 0,M4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L4="__vueuse_ssr_handlers__";M4[L4]=M4[L4]||{};function yN(t,e={}){const{immediate:a=!0,window:i=VN}=e,r=G(!1);let c=null;function n(){!r.value||!i||(t(),c=i.requestAnimationFrame(n))}function l(){!r.value&&i&&(r.value=!0,n())}function d(){r.value=!1,c!=null&&i&&(i.cancelAnimationFrame(c),c=null)}return a&&l(),qN(d),{isActive:r,pause:d,resume:l}}var z4;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(z4||(z4={}));const j3="vue-starport-injection",$n="vue-starport-options",kN={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},t9={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var xN=Object.defineProperty,r3=Object.getOwnPropertySymbols,e9=Object.prototype.hasOwnProperty,a9=Object.prototype.propertyIsEnumerable,W4=(t,e,a)=>e in t?xN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,gN=(t,e)=>{for(var a in e||(e={}))e9.call(e,a)&&W4(t,a,e[a]);if(r3)for(var a of r3(e))a9.call(e,a)&&W4(t,a,e[a]);return t},C4=(t,e)=>{var a={};for(var i in t)e9.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&r3)for(var i of r3(t))e.indexOf(i)<0&&a9.call(t,i)&&(a[i]=t[i]);return a};const RN=jt({name:"StarportProxy",props:gN({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},t9),setup(t,e){const a=H(j3),i=N(()=>a.getInstance(t.port,t.component)),r=G(),c=i.value.generateId(),n=G(!1);return i.value.isVisible||(i.value.land(),n.value=!0),Ge(async()=>{if(i.value.el){console.error(`[Vue Starport] Multiple proxies of "${i.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(i.value.el=r.value,await d1(),n.value=!0,i.value.rect.update(),i.value.rect.width===0||i.value.rect.height===0){const l=i.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${i.value.componentName}" (port "${t.port}") has no ${l} on initial render, have you set the size for it?`),console.warn("element:",i.value.el),console.warn("rect:",i.value.rect)}}),$a(async()=>{i.value.rect.update(),i.value.liftOff(),i.value.el=void 0,n.value=!1,!i.value.options.keepAlive&&(await d1(),await d1(),!i.value.el&&a.dispose(i.value.port))}),ut(()=>t,async()=>{i.value.props&&await d1();const l=t,{props:d}=l,h=C4(l,["props"]);i.value.props=d||{},i.value.setLocalOptions(h)},{deep:!0,immediate:!0}),()=>{const l=t,{initialProps:d,mountedProps:h}=l,s=C4(l,["initialProps","mountedProps"]),p=Aa(s,(n.value?h:d)||{});return i1("div",Aa(p,{id:c,ref:r,"data-starport-proxy":i.value.componentId,"data-starport-landed":i.value.isLanded?"true":void 0,"data-starport-floating":i.value.isLanded?void 0:"true"}),e.slots.default?i1(e.slots.default):void 0)}}});var TN=Object.defineProperty,SN=Object.defineProperties,IN=Object.getOwnPropertyDescriptors,Q4=Object.getOwnPropertySymbols,EN=Object.prototype.hasOwnProperty,wN=Object.prototype.propertyIsEnumerable,H4=(t,e,a)=>e in t?TN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,UN=(t,e)=>{for(var a in e||(e={}))EN.call(e,a)&&H4(t,a,e[a]);if(Q4)for(var a of Q4(e))wN.call(e,a)&&H4(t,a,e[a]);return t},NN=(t,e)=>SN(t,IN(e));const KN=jt({name:"Starport",inheritAttrs:!0,props:t9,setup(t,e){const a=G(!1);return Ge(()=>{if(a.value=!0,!H(j3))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var n,l;const i=(l=(n=e.slots).default)==null?void 0:l.call(n);if(!i)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(i.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${i.length}`);const r=i[0];let c=r.type;return(!mN(c)||he(c))&&(c={render(){return i}}),i1(RN,NN(UN({},t),{key:t.port,component:s3(c),props:r.props}))}}});function XN(t){const e=Pt({height:0,width:0,left:0,top:0,update:i,listen:c,pause:n,margin:"0px",padding:"0px"}),a=Na?document.documentElement||document.body:void 0;function i(){if(!Na)return;const l=bN(t);if(!l)return;const{height:d,width:h,left:s,top:p}=l.getBoundingClientRect(),f=window.getComputedStyle(l),v=f.margin,u=f.padding;Object.assign(e,{height:d,width:h,left:s,top:a.scrollTop+p,margin:v,padding:u})}const r=yN(i,{immediate:!1});function c(){Na&&(i(),r.resume())}function n(){r.pause()}return e}let JN=(t,e=21)=>(a=e)=>{let i="",r=a;for(;r--;)i+=t[Math.random()*t.length|0];return i};const Z4=JN("abcdefghijklmnopqrstuvwxyz",5);function G4(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function jN(t){var e;return t.name||((e=t.__file)==null?void 0:e.split(/[\/\\.]/).slice(-2)[0])||""}var FN=Object.defineProperty,P4=Object.getOwnPropertySymbols,AN=Object.prototype.hasOwnProperty,ON=Object.prototype.propertyIsEnumerable,Y4=(t,e,a)=>e in t?FN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,vi=(t,e)=>{for(var a in e||(e={}))AN.call(e,a)&&Y4(t,a,e[a]);if(P4)for(var a of P4(e))ON.call(e,a)&&Y4(t,a,e[a]);return t};function MN(t,e,a={}){const i=jN(e),r=G4(i)||Z4(),c=G(),n=G(null),l=G(!1),d=G(!1),h=w9(!0),s=G({}),p=N(()=>vi(vi(vi({},kN),a),s.value)),f=G(0);let v;h.run(()=>{v=XN(c),ut(c,async k=>{k&&(d.value=!0),await d1(),c.value||(d.value=!1)})});const u=G4(t);function V(){return`starport-${r}-${u}-${Z4()}`}const x=V();return Pt({el:c,id:x,port:t,props:n,rect:v,scope:h,isLanded:l,isVisible:d,options:p,liftOffTime:f,component:e,componentName:i,componentId:r,generateId:V,setLocalOptions(k={}){s.value=JSON.parse(JSON.stringify(k))},elRef(){return c},liftOff(){l.value&&(l.value=!1,f.value=Date.now(),v.listen())},land(){l.value||(l.value=!0,v.pause())}})}function LN(t){const e=Pt(new Map);function a(r,c){let n=e.get(r);return n||(n=MN(r,c,t),e.set(r,n)),n.component=c,n}function i(r){var c;(c=e.get(r))==null||c.scope.stop(),e.delete(r)}return{portMap:e,dispose:i,getInstance:a}}var zN=Object.defineProperty,WN=Object.defineProperties,CN=Object.getOwnPropertyDescriptors,B4=Object.getOwnPropertySymbols,QN=Object.prototype.hasOwnProperty,HN=Object.prototype.propertyIsEnumerable,D4=(t,e,a)=>e in t?zN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,ZN=(t,e)=>{for(var a in e||(e={}))QN.call(e,a)&&D4(t,a,e[a]);if(B4)for(var a of B4(e))HN.call(e,a)&&D4(t,a,e[a]);return t},GN=(t,e)=>WN(t,CN(e));const PN=jt({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const e=H(j3);if(!e)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const a=N(()=>e.getInstance(t.port,t.component)),i=N(()=>{var n;return((n=a.value.el)==null?void 0:n.id)||a.value.id}),r=N(()=>{const n=Date.now()-a.value.liftOffTime,l=Math.max(0,a.value.options.duration-n),d=a.value.rect,h={position:"absolute",left:0,top:0,width:`${d.width}px`,height:`${d.height}px`,margin:d.margin,padding:d.padding,transform:`translate3d(${d.left}px,${d.top}px,0px)`};return!a.value.isVisible||!a.value.el?GN(ZN({},h),{zIndex:-1,display:"none"}):(a.value.isLanded?h.display="none":Object.assign(h,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:a.value.options.easing}),h)}),c={onTransitionend(n){a.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${a.value.componentName}" is too short (${n.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${a.value.options.duration/1e3}s).`)}};return()=>{const n=!!(a.value.isLanded&&a.value.el);return i1("div",{style:r.value,"data-starport-craft":a.value.componentId,"data-starport-landed":a.value.isLanded?"true":void 0,"data-starport-floating":a.value.isLanded?void 0:"true",onTransitionend:a.value.land},i1(jd,{to:n?`#${i.value}`:"body",disabled:!n},i1(a.value.component,Aa(c,a.value.props))))}}}),YN=jt({name:"StarportCarrier",setup(t,{slots:e}){const a=LN(H($n,{}));return K1().appContext.app.provide(j3,a),()=>{var r;return[(r=e.default)==null?void 0:r.call(e),Array.from(a.portMap.entries()).map(([c,{component:n}])=>i1(PN,{key:c,port:c,component:n}))]}}});function BN(t={}){return{install(e){e.provide($n,t),e.component("Starport",KN),e.component("StarportCarrier",YN)}}}function DN(t){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e),t.app.use(vN),t.app.use(BN({keepAlive:!0})),jE(t)}function T1(t,e,a){var i;return((i=t.instance)==null?void 0:i.$).provides[e]??a}function _N(){return{install(t){t.directive("click",{name:"v-click",mounted(e,a){var s,p,f,v,u,V;if(Sa.value||(s=T1(a,L2))!=null&&s.value)return;const i=T1(a,c2),r=T1(a,xa),c=T1(a,Oi),n=a.modifiers.hide!==!1&&a.modifiers.hide!=null,l=a.modifiers.fade!==!1&&a.modifiers.fade!=null,d=((p=i==null?void 0:i.value)==null?void 0:p.length)||0,h=l?Ns:G3;if(i&&!((f=i==null?void 0:i.value)!=null&&f.includes(e))&&i.value.push(e),a.value==null&&(a.value=(v=i==null?void 0:i.value)==null?void 0:v.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((u=i==null?void 0:i.value)==null?void 0:u.length)||0)+Number(a.value)),!(c!=null&&c.value.has(a.value)))c==null||c.value.set(a.value,[e]);else if(!((V=c==null?void 0:c.value.get(a.value))!=null&&V.includes(e))){const x=(c==null?void 0:c.value.get(a.value))||[];c==null||c.value.set(a.value,[e].concat(x))}e==null||e.classList.toggle(w2,!0),r&&ut(r,()=>{const x=(r==null?void 0:r.value)??0,k=a.value!=null?x>=a.value:x>d;e.classList.contains(P3)||e.classList.toggle(h,!k),n!==!1&&n!==void 0&&e.classList.toggle(h,k),e.classList.toggle(ra,!1);const g=c==null?void 0:c.value.get(x);g==null||g.forEach((q,T)=>{q.classList.toggle(m6,!1),T===g.length-1?q.classList.toggle(ra,!0):q.classList.toggle(m6,!0)}),e.classList.contains(ra)||e.classList.toggle(m6,k)},{immediate:!0})},unmounted(e,a){e==null||e.classList.toggle(w2,!1);const i=T1(a,c2);i!=null&&i.value&&V8(i.value,e)}}),t.directive("after",{name:"v-after",mounted(e,a){var l,d,h;if(Sa.value||(l=T1(a,L2))!=null&&l.value)return;const i=T1(a,c2),r=T1(a,xa),c=T1(a,Oi),n=i==null?void 0:i.value.length;a.value==null&&(a.value=i==null?void 0:i.value.length),typeof a.value=="string"&&(a.value.startsWith("+")||a.value.startsWith("-"))&&(a.value=(((d=i==null?void 0:i.value)==null?void 0:d.length)||0)+Number(a.value)),c!=null&&c.value.has(a.value)?(h=c==null?void 0:c.value.get(a.value))==null||h.push(e):c==null||c.value.set(a.value,[e]),e==null||e.classList.toggle(w2,!0),r&&ut(r,()=>{const s=(r.value??0)>=(a.value??n??0);e.classList.contains(P3)||e.classList.toggle(G3,!s),e.classList.toggle(ra,!1),e.classList.contains(ra)||e.classList.toggle(m6,s)},{immediate:!0})},unmounted(e){e==null||e.classList.toggle(w2,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(e,a){var n,l,d;if(Sa.value||(n=T1(a,L2))!=null&&n.value)return;const i=T1(a,c2),r=T1(a,xa),c=((l=i==null?void 0:i.value)==null?void 0:l.length)||0;i&&!((d=i==null?void 0:i.value)!=null&&d.includes(e))&&i.value.push(e),e==null||e.classList.toggle(w2,!0),r&&ut(r,()=>{const h=(r==null?void 0:r.value)??0,s=a.value!=null?h>=a.value:h>c;e.classList.toggle(G3,s),e.classList.toggle(P3,s)},{immediate:!0})},unmounted(e,a){e==null||e.classList.toggle(w2,!1);const i=T1(a,c2);i!=null&&i.value&&V8(i.value,e)}})}}}function $N(t,e){const a=Uc(t),i=Nc(e,a.currentRoute,a.currentPage);return{nav:{...a,...i},configs:Kt,themeConfigs:N(()=>Kt.themeConfig)}}function tK(){return{install(t){const e=$N(W1,O1);t.provide(tt,Pt(e))}}}const _2=Jh(RE);_2.use(g1);_2.use(Es());_2.use(_N());_2.use(tK());DN({app:_2,router:g1});_2.mount("#app");export{Yq as $,fq as A,G as B,vK as C,m1 as D,Ct as E,wt as F,Xv as G,qE as H,O1 as I,e3 as J,pE as K,ri as L,Ge as M,Pt as N,pK as O,uK as P,ut as Q,j as R,oc as S,Ut as T,u1 as U,Zv as V,At as W,Ot as X,Wa as Y,ti as Z,at as _,tt as a,P5 as a0,Y5 as a1,Qq as a2,Bt as a3,Gu as a4,oK as a5,z1 as a6,oa as a7,k6 as a8,s2 as a9,re as aa,Bi as ab,yv as ac,kv as ad,xv as ae,Rv as af,D as ag,ur as ah,mK as ai,b1 as aj,Em as ak,Sr as al,Tv as am,$a as an,Tr as b,Kt as c,jt as d,vl as e,X as f,o as g,U as h,H as i,_t as j,dE as k,it as l,A as m,Yt as n,y as o,xt as p,W5 as q,G2 as r,Y1 as s,L1 as t,fK as u,N as v,Y3 as w,C as x,ic as y,bq as z};