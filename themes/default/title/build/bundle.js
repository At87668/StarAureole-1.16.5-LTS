var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i;function l(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function u(t,n,e,o){if(t){const c=a(t,n,e,o);return t[0](c)}}function a(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function f(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(void 0===n.dirty)return c;if("object"==typeof c){const t=[],e=Math.max(n.dirty.length,c.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|c[o];return t}return n.dirty|c}return n.dirty}function $(t,n,e,o,c,r){if(c){const s=a(n,e,o,r);t.p(s,c)}}function d(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t){const n="string"==typeof t&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}const m="undefined"!=typeof window;let g=m?()=>window.performance.now():()=>Date.now(),h=m?t=>requestAnimationFrame(t):t;const v=new Set;function x(t){v.forEach((n=>{n.c(t)||(v.delete(n),n.f())})),0!==v.size&&h(x)}function y(t,n){t.appendChild(n)}function w(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function b(t){const n=C("style");return function(t,n){y(t.head||t,n),n.sheet}(w(t),n),n.sheet}function k(t,n,e){t.insertBefore(n,e||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function M(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function T(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function N(t,n){n=""+n,t.data!==n&&(t.data=n)}function q(t,n,e){t.classList[e?"add":"remove"](n)}function A(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,e,o,n),c}"WeakMap"in("undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global)&&new WeakMap;const L=new Map;let O,U=0;function j(t,n,e,o,c,r,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*r(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,$=w(t),{stylesheet:d,rules:p}=L.get($)||function(t,n){const e={stylesheet:b(n),rules:{}};return L.set(t,e),e}($,t);p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${c}ms 1 both`,U+=1,f}function z(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),c=e.length-o.length;c&&(t.style.animation=o.join(", "),U-=c,U||h((()=>{U||(L.forEach((t=>{const{ownerNode:n}=t.stylesheet;n&&_(n)})),L.clear())})))}function B(t){O=t}function F(){if(!O)throw new Error("Function called outside component initialization");return O}function P(){const t=F();return(n,e,{cancelable:o=!1}={})=>{const c=t.$$.callbacks[n];if(c){const r=A(n,e,{cancelable:o});return c.slice().forEach((n=>{n.call(t,r)})),!r.defaultPrevented}return!0}}const R=[],D=[];let X=[];const G=[],H=Promise.resolve();let W=!1;function K(t){X.push(t)}const Y=new Set;let I,J=0;function Q(){if(0!==J)return;const t=O;do{try{for(;J<R.length;){const t=R[J];J++,B(t),V(t.$$)}}catch(t){throw R.length=0,J=0,t}for(B(null),R.length=0,J=0;D.length;)D.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];Y.has(n)||(Y.add(n),n())}X.length=0}while(R.length);for(;G.length;)G.pop()();W=!1,Y.clear(),B(t)}function V(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(K)}}function Z(t,n,e){t.dispatchEvent(A(`${n?"intro":"outro"}${e}`))}const tt=new Set;let nt;function et(){nt={r:0,c:[],p:nt}}function ot(){nt.r||c(nt.c),nt=nt.p}function ct(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function rt(t,n,e,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),nt.c.push((()=>{tt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}const st={duration:0};function it(e,o,s,i){const l={direction:"both"};let u=o(e,s,l),a=i?0:1,f=null,$=null,d=null;function p(){d&&z(e,d)}function m(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:r=0,duration:s=300,easing:i=n,tick:l=t,css:y}=u||st,w={start:g()+r,b:o};o||(w.group=nt,nt.r+=1),f||$?$=w:(y&&(p(),d=j(e,a,o,s,r,i,y)),o&&l(0,1),f=m(w,s),K((()=>Z(e,o,"start"))),function(t){let n;0===v.size&&h(x),new Promise((e=>{v.add(n={c:t,f:e})}))}((t=>{if($&&t>$.start&&(f=m($,s),$=null,Z(e,f.b,"start"),y&&(p(),d=j(e,a,f.b,f.duration,0,i,u.css))),f)if(t>=f.end)l(a=f.b,1-a),Z(e,f.b,"end"),$||(f.b?p():--f.group.r||c(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*i(n/f.duration),l(a,1-a)}return!(!f&&!$)})))}return{run(t){r(u)?(I||(I=Promise.resolve(),I.then((()=>{I=null}))),I).then((()=>{u=u(l),y(t)})):y(t)},end(){p(),f=$=null}}}function lt(t){t&&t.c()}function ut(t,n,o,s){const{fragment:i,after_update:l}=t.$$;i&&i.m(n,o),s||K((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):c(n),t.$$.on_mount=[]})),l.forEach(K)}function at(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];X.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),X=n}(e.after_update),c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(R.push(t),W||(W=!0,H.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function $t(n,e,r,s,i,l,u,a=[-1]){const f=O;B(n);const $=n.$$={fragment:null,ctx:[],props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};u&&u($.root);let d=!1;if($.ctx=r?r(n,e.props||{},((t,e,...o)=>{const c=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=c)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](c),d&&ft(n,t)),e})):[],$.update(),d=!0,c($.before_update),$.fragment=!!s&&s($.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);$.fragment&&$.fragment.l(t),t.forEach(_)}else $.fragment&&$.fragment.c();e.intro&&ct(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),Q()}B(f)}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);class dt{$destroy(){at(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pt(t){const n=t-1;return n*n*n+1}function mt(t,{delay:e=0,duration:o=400,easing:c=n}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:c,css:t=>"opacity: "+t*r}}function gt(t,{delay:n=0,duration:e=400,easing:o=pt,x:c=0,y:r=0,opacity:s=0}={}){const i=getComputedStyle(t),l=+i.opacity,u="none"===i.transform?"":i.transform,a=l*(1-s),[f,$]=p(c),[d,m]=p(r);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*f}${$}, ${(1-t)*d}${m});\n\t\t\topacity: ${l-a*n}`}}function ht(t){let n,e,o,c;return{c(){n=C("div"),e=E(t[0]),T(n,"class","tooltip svelte-1w07kh5")},m(t,o){k(t,n,o),y(n,e),c=!0},p(t,n){(!c||1&n)&&N(e,t[0])},i(t){c||(K((()=>{c&&(o||(o=it(n,gt,{y:-10,duration:200},!0)),o.run(1))})),c=!0)},o(t){o||(o=it(n,gt,{y:-10,duration:200},!1)),o.run(0),c=!1},d(t){t&&_(n),t&&o&&o.end()}}}function vt(t){let n,e,o=t[2]&&ht(t);return{c(){n=C("div"),o&&o.c()},m(c,r){k(c,n,r),o&&o.m(n,null),t[3](n),e=!0},p(t,[e]){t[2]?o?(o.p(t,e),4&e&&ct(o,1)):(o=ht(t),o.c(),ct(o,1),o.m(n,null)):o&&(et(),rt(o,1,1,(()=>{o=null})),ot())},i(t){e||(ct(o),e=!0)},o(t){rt(o),e=!1},d(e){e&&_(n),o&&o.d(),t[3](null)}}}function xt(t,n,e){let o,{text:c}=n,r=!1;var s;return s=()=>{o.parentNode.addEventListener("mouseenter",(t=>{e(2,r=!0)})),o.parentNode.addEventListener("mouseleave",(t=>{e(2,r=!1)}))},F().$$.after_update.push(s),t.$$set=t=>{"text"in t&&e(0,c=t.text)},[c,o,r,function(t){D[t?"unshift":"push"]((()=>{o=t,e(1,o)}))}]}class yt extends dt{constructor(t){super(),$t(this,t,xt,vt,s,{text:0})}}function wt(t){let n,e,o,r,s,i,u,a,f,$,d,p,m,g,h,v,x,w,b,q,A,L;return r=new yt({props:{text:"Change location"}}),{c(){n=C("div"),e=C("div"),o=C("div"),lt(r.$$.fragment),s=S(),i=C("img"),a=S(),f=C("object"),$=C("img"),p=S(),m=C("div"),g=E(t[0]),h=S(),v=C("div"),x=E(t[1]),w=S(),b=C("div"),b.innerHTML='<img src="img/icons/pen.svg" alt="pen"/>',T(i,"class","location svelte-193twgh"),l(i.src,u="img/flags/"+t[2]+".svg")||T(i,"src",u),T(i,"alt",t[2]),T(o,"class","location-wrapper svelte-193twgh"),l($.src,d="img/steve.png")||T($,"src","img/steve.png"),T($,"alt","head"),T($,"class","head svelte-193twgh"),T(f,"data",t[3]),T(f,"type","image/png"),T(f,"class","head svelte-193twgh"),T(e,"class","icon svelte-193twgh"),T(m,"class","username svelte-193twgh"),T(v,"class","last-used svelte-193twgh"),T(b,"class","change-account svelte-193twgh"),T(n,"class","account svelte-193twgh")},m(c,l){k(c,n,l),y(n,e),y(e,o),ut(r,o,null),y(o,s),y(o,i),y(e,a),y(e,f),y(f,$),y(n,p),y(n,m),y(m,g),y(n,h),y(n,v),y(v,x),y(n,w),y(n,b),q=!0,A||(L=[M(i,"click",t[5]),M(b,"click",t[4])],A=!0)},p(t,[n]){(!q||4&n&&!l(i.src,u="img/flags/"+t[2]+".svg"))&&T(i,"src",u),(!q||4&n)&&T(i,"alt",t[2]),(!q||8&n)&&T(f,"data",t[3]),(!q||1&n)&&N(g,t[0]),(!q||2&n)&&N(x,t[1])},i(t){q||(ct(r.$$.fragment,t),q=!0)},o(t){rt(r.$$.fragment,t),q=!1},d(t){t&&_(n),at(r),A=!1,c(L)}}}function bt(t,n,e){const o=P();let{username:c}=n,{accountType:r}=n,{location:s}=n,{faceUrl:i}=n;return t.$$set=t=>{"username"in t&&e(0,c=t.username),"accountType"in t&&e(1,r=t.accountType),"location"in t&&e(2,s=t.location),"faceUrl"in t&&e(3,i=t.faceUrl)},[c,r,s,i,function(t){o("altManagerClick")},function(t){o("proxyManagerClick")}]}class kt extends dt{constructor(t){super(),$t(this,t,bt,wt,s,{username:0,accountType:1,location:2,faceUrl:3})}}function _t(n){let e,o;return{c(){e=C("img"),T(e,"class","logo svelte-hsfuen"),l(e.src,o="img/logo.svg")||T(e,"src","img/logo.svg"),T(e,"alt","logo")},m(t,n){k(t,e,n)},p:t,i:t,o:t,d(t){t&&_(e)}}}class Ct extends dt{constructor(t){super(),$t(this,t,null,_t,s,{})}}function Et(t){let n,e,o,c;return{c(){n=C("img"),l(n.src,e="img/icons/"+t[0]+".svg")||T(n,"src",e),T(n,"alt","icon"),T(n,"class","svelte-6mrx6l")},m(t,e){k(t,n,e),c=!0},p(t,o){(!c||1&o&&!l(n.src,e="img/icons/"+t[0]+".svg"))&&T(n,"src",e)},i(t){c||(K((()=>{c&&(o||(o=it(n,mt,{duration:200},!0)),o.run(1))})),c=!0)},o(t){o||(o=it(n,mt,{duration:200},!1)),o.run(0),c=!1},d(t){t&&_(n),t&&o&&o.end()}}}function St(t){let n,e,o,c;return{c(){n=C("img"),l(n.src,e="img/icons/"+t[0]+"-hover.svg")||T(n,"src",e),T(n,"alt","icon"),T(n,"class","svelte-6mrx6l")},m(t,e){k(t,n,e),c=!0},p(t,o){(!c||1&o&&!l(n.src,e="img/icons/"+t[0]+"-hover.svg"))&&T(n,"src",e)},i(t){c||(K((()=>{c&&(o||(o=it(n,mt,{duration:200},!0)),o.run(1))})),c=!0)},o(t){o||(o=it(n,mt,{duration:200},!1)),o.run(0),c=!1},d(t){t&&_(n),t&&o&&o.end()}}}function Mt(t){let n,e,o,c,r,s,i,l,u;e=new yt({props:{text:t[1]}});const a=[St,Et],f=[];function $(t,n){return t[2]?0:1}return r=$(t),s=f[r]=a[r](t),{c(){n=C("div"),lt(e.$$.fragment),o=S(),c=C("div"),s.c(),T(c,"class","icon svelte-6mrx6l"),q(c,"hovered",t[2]),T(n,"class","button svelte-6mrx6l")},m(s,a){var $;k(s,n,a),ut(e,n,null),y(n,o),y(n,c),f[r].m(c,null),i=!0,l||(u=M(n,"click",($=t[3],function(t){return t.stopPropagation(),$.call(this,t)})),l=!0)},p(t,[n]){const o={};2&n&&(o.text=t[1]),e.$set(o);let l=r;r=$(t),r===l?f[r].p(t,n):(et(),rt(f[l],1,1,(()=>{f[l]=null})),ot(),s=f[r],s?s.p(t,n):(s=f[r]=a[r](t),s.c()),ct(s,1),s.m(c,null)),(!i||4&n)&&q(c,"hovered",t[2])},i(t){i||(ct(e.$$.fragment,t),ct(s),i=!0)},o(t){rt(e.$$.fragment,t),rt(s),i=!1},d(t){t&&_(n),at(e),f[r].d(),l=!1,u()}}}function Tt(t,n,e){const o=P();let{icon:c}=n,{text:r}=n,{hovered:s}=n;return t.$$set=t=>{"icon"in t&&e(0,c=t.icon),"text"in t&&e(1,r=t.text),"hovered"in t&&e(2,s=t.hovered)},[c,r,s,function(t){o("click",t)}]}class Nt extends dt{constructor(t){super(),$t(this,t,Tt,Mt,s,{icon:0,text:1,hovered:2})}}const qt=t=>({hovered:4&t}),At=t=>({hovered:t[2]});function Lt(t){let n,e,o,c;return{c(){n=C("img"),l(n.src,e="img/icons/"+t[1]+".svg")||T(n,"src",e),T(n,"alt","icon"),T(n,"class","svelte-twnufy")},m(t,e){k(t,n,e),c=!0},p(t,o){(!c||2&o&&!l(n.src,e="img/icons/"+t[1]+".svg"))&&T(n,"src",e)},i(t){c||(K((()=>{c&&(o||(o=it(n,mt,{duration:200},!0)),o.run(1))})),c=!0)},o(t){o||(o=it(n,mt,{duration:200},!1)),o.run(0),c=!1},d(t){t&&_(n),t&&o&&o.end()}}}function Ot(t){let n,e,o,c;return{c(){n=C("img"),l(n.src,e="img/icons/"+t[1]+"-hover.svg")||T(n,"src",e),T(n,"alt","icon"),T(n,"class","svelte-twnufy")},m(t,e){k(t,n,e),c=!0},p(t,o){(!c||2&o&&!l(n.src,e="img/icons/"+t[1]+"-hover.svg"))&&T(n,"src",e)},i(t){c||(K((()=>{c&&(o||(o=it(n,mt,{duration:200},!0)),o.run(1))})),c=!0)},o(t){o||(o=it(n,mt,{duration:200},!1)),o.run(0),c=!1},d(t){t&&_(n),t&&o&&o.end()}}}function Ut(t){let n,e,o,r,s,i,l,a,p,m,g;const h=[Ot,Lt],v=[];function x(t,n){return t[2]?0:1}o=x(t),r=v[o]=h[o](t);const w=t[7].default,b=u(w,t,t[6],At);return{c(){n=C("div"),e=C("div"),r.c(),s=S(),i=C("div"),l=E(t[0]),a=S(),b&&b.c(),T(e,"class","icon svelte-twnufy"),T(i,"class","text svelte-twnufy"),T(n,"class","button svelte-twnufy")},m(c,r){k(c,n,r),y(n,e),v[o].m(e,null),y(n,s),y(n,i),y(i,l),y(n,a),b&&b.m(n,null),p=!0,m||(g=[M(n,"mouseenter",t[3]),M(n,"mouseleave",t[4]),M(n,"click",t[5])],m=!0)},p(t,[n]){let c=o;o=x(t),o===c?v[o].p(t,n):(et(),rt(v[c],1,1,(()=>{v[c]=null})),ot(),r=v[o],r?r.p(t,n):(r=v[o]=h[o](t),r.c()),ct(r,1),r.m(e,null)),(!p||1&n)&&N(l,t[0]),b&&b.p&&(!p||68&n)&&$(b,w,t,t[6],p?f(w,t[6],n,qt):d(t[6]),At)},i(t){p||(ct(r),ct(b,t),p=!0)},o(t){rt(r),rt(b,t),p=!1},d(t){t&&_(n),v[o].d(),b&&b.d(t),m=!1,c(g)}}}function jt(t,n,e){let{$$slots:o={},$$scope:c}=n;const r=P();let{text:s}=n,{icon:i}=n,l=!1;return t.$$set=t=>{"text"in t&&e(0,s=t.text),"icon"in t&&e(1,i=t.icon),"$$scope"in t&&e(6,c=t.$$scope)},[s,i,l,function(t){e(2,l=!0)},function(t){e(2,l=!1)},function(t){r("click",t)},c,o]}class zt extends dt{constructor(t){super(),$t(this,t,jt,Ut,s,{text:0,icon:1})}}function Bt(t){let n,e;const o=t[1].default,c=u(o,t,t[0],null);return{c(){n=C("div"),c&&c.c(),T(n,"class","buttons svelte-1np6dk1")},m(t,o){k(t,n,o),c&&c.m(n,null),e=!0},p(t,[n]){c&&c.p&&(!e||1&n)&&$(c,o,t,t[0],e?f(o,t[0],n,null):d(t[0]),null)},i(t){e||(ct(c,t),e=!0)},o(t){rt(c,t),e=!1},d(t){t&&_(n),c&&c.d(t)}}}function Ft(t,n,e){let{$$slots:o={},$$scope:c}=n;return t.$$set=t=>{"$$scope"in t&&e(0,c=t.$$scope)},[c,o]}class Pt extends dt{constructor(t){super(),$t(this,t,Ft,Bt,s,{})}}function Rt(t){let n,e,o,c,r,s,i,u,a;return e=new yt({props:{text:t[0]}}),{c(){n=C("div"),lt(e.$$.fragment),o=S(),c=C("div"),r=C("img"),l(r.src,s="img/icons/"+t[1]+".svg")||T(r,"src",s),T(r,"alt","icon"),T(c,"class","icon svelte-1e1mre3"),T(n,"class","button svelte-1e1mre3")},m(s,l){k(s,n,l),ut(e,n,null),y(n,o),y(n,c),y(c,r),i=!0,u||(a=M(n,"click",t[2]),u=!0)},p(t,[n]){const o={};1&n&&(o.text=t[0]),e.$set(o),(!i||2&n&&!l(r.src,s="img/icons/"+t[1]+".svg"))&&T(r,"src",s)},i(t){i||(ct(e.$$.fragment,t),i=!0)},o(t){rt(e.$$.fragment,t),i=!1},d(t){t&&_(n),at(e),u=!1,a()}}}function Dt(t,n,e){let{text:o}=n,{icon:c}=n;const r=P();return t.$$set=t=>{"text"in t&&e(0,o=t.text),"icon"in t&&e(1,c=t.icon)},[o,c,function(t){r("click",t)}]}class Xt extends dt{constructor(t){super(),$t(this,t,Dt,Rt,s,{text:0,icon:1})}}function Gt(n){let e,o,c,r,s,i,u,a,f;return{c(){e=C("div"),o=C("div"),c=C("img"),s=S(),i=C("div"),u=E(n[0]),l(c.src,r="img/icons/"+n[1]+".svg")||T(c,"src",r),T(c,"alt","icon"),T(o,"class","icon svelte-1hm325t"),T(i,"class","text svelte-1hm325t"),T(e,"class","button svelte-1hm325t")},m(t,r){k(t,e,r),y(e,o),y(o,c),y(e,s),y(e,i),y(i,u),a||(f=M(e,"click",n[2]),a=!0)},p(t,[n]){2&n&&!l(c.src,r="img/icons/"+t[1]+".svg")&&T(c,"src",r),1&n&&N(u,t[0])},i:t,o:t,d(t){t&&_(e),a=!1,f()}}}function Ht(t,n,e){let{text:o}=n,{icon:c}=n;const r=P();return t.$$set=t=>{"text"in t&&e(0,o=t.text),"icon"in t&&e(1,c=t.icon)},[o,c,function(t){r("click",t)}]}class Wt extends dt{constructor(t){super(),$t(this,t,Ht,Gt,s,{text:0,icon:1})}}function Kt(t){let n,e;const o=t[1].default,c=u(o,t,t[0],null);return{c(){n=C("div"),c&&c.c(),T(n,"class","buttons svelte-htoe5z")},m(t,o){k(t,n,o),c&&c.m(n,null),e=!0},p(t,[n]){c&&c.p&&(!e||1&n)&&$(c,o,t,t[0],e?f(o,t[0],n,null):d(t[0]),null)},i(t){e||(ct(c,t),e=!0)},o(t){rt(c,t),e=!1},d(t){t&&_(n),c&&c.d(t)}}}function Yt(t,n,e){let{$$slots:o={},$$scope:c}=n;return t.$$set=t=>{"$$scope"in t&&e(0,c=t.$$scope)},[c,o]}class It extends dt{constructor(t){super(),$t(this,t,Yt,Kt,s,{})}}function Jt(t){let n,e;const o=t[1].default,c=u(o,t,t[0],null);return{c(){n=C("div"),c&&c.c(),T(n,"class","buttons svelte-1er56mp")},m(t,o){k(t,n,o),c&&c.m(n,null),e=!0},p(t,[n]){c&&c.p&&(!e||1&n)&&$(c,o,t,t[0],e?f(o,t[0],n,null):d(t[0]),null)},i(t){e||(ct(c,t),e=!0)},o(t){rt(c,t),e=!1},d(t){t&&_(n),c&&c.d(t)}}}function Qt(t,n,e){let{$$slots:o={},$$scope:c}=n;return t.$$set=t=>{"$$scope"in t&&e(0,c=t.$$scope)},[c,o]}class Vt extends dt{constructor(t){super(),$t(this,t,Qt,Jt,s,{})}}function Zt(t){let n,e;return n=new Nt({props:{text:"Realms",icon:"realms",hovered:t[4]}}),n.$on("click",un),{c(){lt(n.$$.fragment)},m(t,o){ut(n,t,o),e=!0},p(t,e){const o={};16&e&&(o.hovered=t[4]),n.$set(o)},i(t){e||(ct(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){at(n,t)}}}function tn(t){let n,e,o,c,r,s,i,l;return n=new zt({props:{text:"Singleplayer",icon:"singleplayer"}}),n.$on("click",sn),o=new zt({props:{text:"Multiplayer",icon:"multiplayer",$$slots:{default:[Zt,({hovered:t})=>({4:t}),({hovered:t})=>t?16:0]},$$scope:{ctx:t}}}),o.$on("click",ln),r=new zt({props:{text:"Customize",icon:"customize"}}),i=new zt({props:{text:"Options",icon:"options"}}),i.$on("click",an),{c(){lt(n.$$.fragment),e=S(),lt(o.$$.fragment),c=S(),lt(r.$$.fragment),s=S(),lt(i.$$.fragment)},m(t,u){ut(n,t,u),k(t,e,u),ut(o,t,u),k(t,c,u),ut(r,t,u),k(t,s,u),ut(i,t,u),l=!0},p(t,n){const e={};48&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e)},i(t){l||(ct(n.$$.fragment,t),ct(o.$$.fragment,t),ct(r.$$.fragment,t),ct(i.$$.fragment,t),l=!0)},o(t){rt(n.$$.fragment,t),rt(o.$$.fragment,t),rt(r.$$.fragment,t),rt(i.$$.fragment,t),l=!1},d(t){at(n,t),t&&_(e),at(o,t),t&&_(c),at(r,t),t&&_(s),at(i,t)}}}function nn(n){let e,o,c,r;return e=new Wt({props:{text:"Change Background",icon:"change-background"}}),c=new Wt({props:{text:"Exit",icon:"exit"}}),c.$on("click",fn),{c(){lt(e.$$.fragment),o=S(),lt(c.$$.fragment)},m(t,n){ut(e,t,n),k(t,o,n),ut(c,t,n),r=!0},p:t,i(t){r||(ct(e.$$.fragment,t),ct(c.$$.fragment,t),r=!0)},o(t){rt(e.$$.fragment,t),rt(c.$$.fragment,t),r=!1},d(t){at(e,t),t&&_(o),at(c,t)}}}function en(n){let e,o,c,r,s,i,l,u,a,f,$,d;return e=new Xt({props:{text:"Forum",icon:"nodebb"}}),e.$on("click",$n),c=new Xt({props:{text:"GitHub",icon:"github"}}),c.$on("click",dn),s=new Xt({props:{text:"Guilded",icon:"guilded"}}),s.$on("click",pn),l=new Xt({props:{text:"Twitter",icon:"twitter"}}),l.$on("click",mn),a=new Xt({props:{text:"YouTube",icon:"youtube"}}),a.$on("click",gn),$=new Wt({props:{text:"liquidbounce.net",icon:"liquidbounce.net"}}),$.$on("click",hn),{c(){lt(e.$$.fragment),o=S(),lt(c.$$.fragment),r=S(),lt(s.$$.fragment),i=S(),lt(l.$$.fragment),u=S(),lt(a.$$.fragment),f=S(),lt($.$$.fragment)},m(t,n){ut(e,t,n),k(t,o,n),ut(c,t,n),k(t,r,n),ut(s,t,n),k(t,i,n),ut(l,t,n),k(t,u,n),ut(a,t,n),k(t,f,n),ut($,t,n),d=!0},p:t,i(t){d||(ct(e.$$.fragment,t),ct(c.$$.fragment,t),ct(s.$$.fragment,t),ct(l.$$.fragment,t),ct(a.$$.fragment,t),ct($.$$.fragment,t),d=!0)},o(t){rt(e.$$.fragment,t),rt(c.$$.fragment,t),rt(s.$$.fragment,t),rt(l.$$.fragment,t),rt(a.$$.fragment,t),rt($.$$.fragment,t),d=!1},d(t){at(e,t),t&&_(o),at(c,t),t&&_(r),at(s,t),t&&_(i),at(l,t),t&&_(u),at(a,t),t&&_(f),at($,t)}}}function on(t){let n,e,o,c,r,s,i,l,u,a,f,$,d;return c=new Ct({}),s=new kt({props:{username:t[0],location:t[3],faceUrl:t[1],accountType:t[2]}}),s.$on("proxyManagerClick",cn),s.$on("altManagerClick",rn),l=new Pt({props:{$$slots:{default:[tn]},$$scope:{ctx:t}}}),a=new It({props:{$$slots:{default:[nn]},$$scope:{ctx:t}}}),$=new Vt({props:{$$slots:{default:[en]},$$scope:{ctx:t}}}),{c(){n=C("main"),e=C("div"),o=C("div"),lt(c.$$.fragment),r=S(),lt(s.$$.fragment),i=S(),lt(l.$$.fragment),u=S(),lt(a.$$.fragment),f=S(),lt($.$$.fragment),T(o,"class","wrapper svelte-o2dcoh"),T(e,"class","scale svelte-o2dcoh"),T(n,"class","svelte-o2dcoh")},m(t,p){k(t,n,p),y(n,e),y(e,o),ut(c,o,null),y(o,r),ut(s,o,null),y(o,i),ut(l,o,null),y(o,u),ut(a,o,null),y(o,f),ut($,o,null),d=!0},p(t,[n]){const e={};32&n&&(e.$$scope={dirty:n,ctx:t}),l.$set(e);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o);const c={};32&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c)},i(t){d||(ct(c.$$.fragment,t),ct(s.$$.fragment,t),ct(l.$$.fragment,t),ct(a.$$.fragment,t),ct($.$$.fragment,t),d=!0)},o(t){rt(c.$$.fragment,t),rt(s.$$.fragment,t),rt(l.$$.fragment,t),rt(a.$$.fragment,t),rt($.$$.fragment,t),d=!1},d(t){t&&_(n),at(c),at(s),at(l),at(a),at($)}}}function cn(){pages.open("proxymanager",screen)}function rn(){pages.open("altmanager",screen)}function sn(){pages.open("singleplayer",screen)}function ln(){pages.open("multiplayer",screen)}function un(){pages.open("multiplayer_realms",screen)}function an(){pages.open("options",screen)}function fn(){client.exitClient()}function $n(){utils.browse("https://forums.ccbluex.net")}function dn(){utils.browse("https://github.com/CCBlueX")}function pn(){utils.browse("https://guilded.gg/CCBlueX?r=pmbDp7K4")}function mn(){utils.browse("https://twitter.com/CCBlueX")}function gn(){utils.browse("https://youtube.com/CCBlueX")}function hn(){utils.browse("https://liquidbounce.net")}function vn(t){return[client.getSessionService().getUsername(),client.getSessionService().getFaceUrl(),client.getSessionService().getAccountType(),client.getSessionService().getLocation()]}return new class extends dt{constructor(t){super(),$t(this,t,vn,on,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map